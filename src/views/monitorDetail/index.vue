<template>
  <div class="app-main" v-loading.fullscreen.lock="fullscreenLoading">
    <left :detail="detail" :exampleDetail="markerGeojson" :geojsonReady="geojsonReady" />

    <main-map>
      <l-geo-json
        v-if="geojsonReady"
        :geojson="polygon"
        :optionsStyle="createStyleFunction({color:'#232323'})"
        :options="monitorOptions"
        @ready="geojsonObjReady"
        layerType="overlay"
        :visible="false"
        name="监测点"
      ></l-geo-json>

      <!-- <l-wms-tile-layer /> -->
      <wms-layer url="http://www.scgis.net.cn/imap/iMapServer/defaultRest/services/newtianditudom/WMS"></wms-layer>

      <heatmap :pointId="pointId" />

      <l-geo-json
        v-if="geojsonReady"
        :geojson="markerGeojson"
        :options="exampleFiledOptions"
        @ready="exampleGeojsonObjReady"
        layer-type="overlay"
        name="监测样地"
      ></l-geo-json>
    </main-map>
    <right />
  </div>
</template>

<script>
import Left from "./Left";
import Right from "./Right";
import MainMap from "../MainMap";
import Heatmap from "../../components/Heatmap";
import WmsLayer from "../../components/WmsLayer";
import { LGeoJson, LWMSTileLayer } from "vue2-leaflet";
import { loadRemoteFile, xlsJoinShp, degree2decimal } from "../../utils/util";
import geojsonOptions from "../../mixins/geojsonOptions.js";
import shp from "shpjs";
import _cloneDeep from "lodash/cloneDeep";
import bus from "../../utils/bus";
const colorDic = {
  潜在: "green",
  轻度: "#55b0a0",
  一般: "orange",
  严重: "red"
};
export default {
  name: "monitorDetail",
  mixins: [geojsonOptions],
  components: {
    Left,
    Right,
    MainMap,
    LGeoJson,
    LWMSTileLayer,
    Heatmap,
    WmsLayer
  },
  data() {
    return {
      fullscreenLoading: true,
      pointId: this.$route.params.id,
      geojsonReady: false,
      detail: {},
      markerGeojson: {}
    };
  },
  computed: {
    monitorOptions() {
      return {
        onEachFeature: this.createOnEachFeatureFunc("O_Name")
      };
    },
    exampleFiledOptions() {
      return {
        onEachFeature: (feature, layer) => {
          layer.bindTooltip(feature.properties["组（小地名）"]);
          layer.bindPopup(
            this.getPopupContent(feature, ["样地大小", "生物量", "入侵程度"])
          );
        },
        pointToLayer: this.pointToLayerFunc
      };
    }
  },
  created() {
    shp(`${this.base_url}监测点.zip`)
      .then(geojson => {
        this.getPolygon(geojson);
        loadRemoteFile(`${this.base_url}监测点详情.xlsx`)
          .then(res => {
            this.getDetail(res);
            this.fullscreenLoading = false;
          })
          .catch(() => (this.fullscreenLoading = false));
      })
      .catch(() => (this.fullscreenLoading = false));
  },
  methods: {
    getPolygon(geojson) {
      this.OriginPolygon = geojson.find(
        el => el.features[0].properties.BH == this.pointId
      );

      let font = [];
      geojson.forEach(el => {
        font.push(el.features[0].properties.O_Name);
      });
      //获取子标题
      bus.$emit(
        "getSubTitle",
        this.OriginPolygon.features[0].properties.O_Name
      );
    },
    getDetail(xlsdata) {
      this.detail = xlsdata[0].find(el => el["监测点编号"] == this.pointId);
      if (this.OriginPolygon && this.detail) {
        this.polygon = xlsJoinShp(
          { data: [this.detail], key: "监测点编号" },
          { data: this.OriginPolygon, key: "BH" }
        );
      } else {
        this.polygon = this.OriginPolygon;
      }
      this.markerGeojson = this.createMayker(
        xlsdata[1].filter(el => el["归属监测点编号"] == this.pointId)
      );

      if (this.polygon) {
        this.geojsonReady = true;
      }
    },
    createMayker(data) {
      let geojson = { type: "FeatureCollection", features: [] };
      let exampleFiled2Obj = {};
      let exampleFiledTableKeys = [
        "序号",
        "植物种类名称",
        "株数",
        "盖度",
        "备注"
      ];

      let temp = {};
      //按表格编号分类
      data.forEach(el => {
        let tableNum = el["表格编号"];
        if (tableNum in exampleFiled2Obj) {
          exampleFiledTableKeys.forEach(key => {
            temp[key] = el[key];
          });

          exampleFiled2Obj[tableNum]["properties"].push(_cloneDeep(temp));
          temp = {};
        } else {
          exampleFiled2Obj[tableNum] = _cloneDeep(el);
          exampleFiled2Obj[tableNum]["properties"] = [{}];
          exampleFiledTableKeys.forEach(key => {
            delete exampleFiled2Obj[tableNum][key]; //删除重复字段
            exampleFiled2Obj[tableNum]["properties"][0][key] = el[key] || "";
          });
        }
      });
      //表格数据转化为geojson
      for (let key in exampleFiled2Obj) {
        let lng = degree2decimal(exampleFiled2Obj[key]["经度"]);
        let lat = degree2decimal(exampleFiled2Obj[key]["纬度"]);
        if (!isNaN(lng) && !isNaN(lat)) {
          geojson.features.push({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [lng, lat]
            },
            properties: exampleFiled2Obj[key]
          });
        }
      }
      return geojson;
    },
    pointToLayerFunc(feature, latlng) {
      return L.circleMarker(latlng, {
        radius: 8,
        color: colorDic[feature.properties["入侵程度"]],
        fillColor: colorDic[feature.properties["入侵程度"]],
        fillOpacity: 1
      });
      // return L.marker(latlng, {
      //   icon: L.icon({
      //     iconUrl: require("@/assets/img/marker/leaf-green.png"),
      //     shadowUrl: require("@/assets/img/marker/leaf-shadow.png"),
      //     iconSize: [25, 45],
      //     shadowSize: [25, 32],
      //     shadowAnchor: [-2, 8]
      //   })
      // });
    },
    geojsonObjReadyCallback(e) {
      this.$map.fitBounds(e.getBounds());
    },
    exampleGeojsonObjReady(e) {
      this.exampleObj = e;
    },
    loicationExample() {}
  }
};
</script>

<style>
</style>