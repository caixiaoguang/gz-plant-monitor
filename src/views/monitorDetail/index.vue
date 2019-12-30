<template>
  <div class="app-main" v-loading.fullscreen.lock="fullscreenLoading">
    <left
      :detail="detail"
      :title="title"
      :exampleDetail="markerGeojson"
      :geojsonReady="geojsonReady"
      :imgList="leftImgList"
    />

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

      <wms-layer></wms-layer>

      <heatmap :pointId="pointId" />

      <terra-category :pointId="pointId"></terra-category>

      <l-geo-json
        v-if="markerGeojsonReady"
        :geojson="markerGeojson"
        :options="exampleFiledOptions"
        @ready="exampleGeojsonObjReady"
        layer-type="overlay"
        name="监测样地"
      ></l-geo-json>

      <!-- 原生境植物 -->
      <l-geo-json
        :geojson="originPlant"
        :options="originPlantOption"
        v-if="Object.keys(originPlant).length>0&&isOrigin==1"
        layer-type="overlay"
        name="原生境植物"
      ></l-geo-json>
    </main-map>
    <right :title="title" :detail="detail" />
    <!-- 轮播图弹窗 -->
    <el-dialog :visible.sync="imgBoxVisible" width="60%">
      <template slot="title">
        <span class="el-icon-s-flag"></span>
        <span>{{exampleTitle}}</span>
      </template>
      <el-carousel>
        <el-carousel-item v-for="item in examplePhotoList" :key="item">
          <img :src="base_url + 'images/'+pointId+'/'+item+'.jpg'" />
          <span class="img-label">DSC_{{item}}</span>
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </div>
</template>

<script>
import Left from "./Left";
import Right from "./Right";
import MainMap from "../MainMap";
import Heatmap from "../../components/Heatmap";
import WmsLayer from "../../components/WmsLayer";
import TerraCategory from "../../components/TerraCategory";
import { LGeoJson } from "vue2-leaflet";
import {
  loadRemoteFile,
  xlsJoinShp,
  degree2decimal,
  getPhotoList
} from "../../utils/util";
import geojsonOptions from "../../mixins/geojsonOptions.js";
import shp from "shpjs";
import _cloneDeep from "lodash/cloneDeep";
import bus from "../../utils/bus";
import variables from "@/styles/variables.scss";

const colorDic = {
  潜在: "green",
  轻度: "#55b0a0",
  一般: "orange",
  严重: "red"
};

const markerPngDic = {
  1: "八角莲",
  2: "百合",
  3: "唇兰",
  4: "韭菜",
  5: "荔波桑",
  6: "猕猴桃",
  7: "四球茶",
  8: "蒜",
  9: "苎麻"
};

export default {
  name: "monitorDetail",
  mixins: [geojsonOptions],
  components: {
    Left,
    Right,
    MainMap,
    LGeoJson,
    Heatmap,
    WmsLayer,
    TerraCategory
  },
  data() {
    return {
      fullscreenLoading: true,
      pointId: this.$route.query.id,
      geojsonReady: false,
      detail: {},
      markerGeojson: {},
      title: "",
      examplePhotoList: [],
      imgBoxVisible: false,
      exampleTitle: "",
      markerGeojsonReady: false,
      isOrigin: this.$route.query.isOrigin,
      originPlant: {},
      leftImgList: []
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
        onEachFeature: this.exampleOnEachFeature,
        pointToLayer: this.pointToLayerFunc
      };
    },
    originPlantOption() {
      return {
        pointToLayer: this.originPlantPoint2layer
      };
    }
  },
  created() {
    shp(`${this.base_url}static/监测点.zip`)
      .then(geojson => {
        this.getPolygon(geojson);
        loadRemoteFile(`${this.base_url}excel/监测点详情.xlsx`)
          .then(res => {
            this.getDetail(res);
            this.fullscreenLoading = false;
          })
          .catch(() => (this.fullscreenLoading = false));
      })
      .catch(() => (this.fullscreenLoading = false));

    shp(`${this.base_url}static/野生分布点/分布点发`).then(geojson => {
      this.originPlant = geojson;
    });

    //样地文件
    loadRemoteFile(`${this.base_url}excel/${this.pointId}.xlsx`)
      .then(res => {
        this.createMarker(res[0]);
      })
      .catch(err => {
        console.log(err);
      });
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
      this.title = this.OriginPolygon.features[0].properties.O_Name;
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

      if (this.polygon) {
        this.geojsonReady = true;
      }
    },
    createMarker(data) {
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
      this.markerGeojson = geojson;
      this.markerGeojsonReady = true;
    },
    pointToLayerFunc(feature, latlng) {
      if (this.isOrigin == 1) {
        return L.marker(latlng, {
          icon: L.icon({
            iconUrl: require("@/assets/img/marker/leaf-green.png"),
            shadowUrl: require("@/assets/img/marker/leaf-shadow.png"),
            iconSize: [25, 45],
            shadowSize: [25, 32],
            shadowAnchor: [-2, 8]
          })
        });
      } else {
        return L.circleMarker(latlng, {
          radius: 8,
          color: colorDic[feature.properties["入侵程度"]],
          fillColor: colorDic[feature.properties["入侵程度"]],
          fillOpacity: 1
        });
      }
    },
    originPlantPoint2layer(feature, latlng) {
      let markerPng = markerPngDic[feature.properties.O_Name];
      return L.marker(latlng, {
        icon: L.icon({
          iconUrl: require("../../assets/img/marker/" + markerPng + ".png"),
          iconSize: [25, 25]
        })
      }).bindTooltip(markerPng);
    },
    geojsonObjReadyCallback(e) {
      this.$map.fitBounds(e.getBounds());
    },
    exampleGeojsonObjReady(e) {
      this.exampleObj = e;
    },
    openPhotoDialog() {
      this.imgBoxVisible = true;
    },
    exampleOnEachFeature(feature, layer) {
      let properties = feature.properties;
      const photoList = getPhotoList(properties["照片编号"]);
      const firstImg = photoList[0];
      let btn = "";
      this.leftImgList.push(firstImg);
      layer.bindTooltip(properties["组（小地名）"]);
      layer.bindPopup(this.getExamplePopupContent(feature, photoList[0]));
      layer.on("popupopen", e => {
        this.examplePhotoList = photoList;
        this.exampleTitle =
          properties["县（市、区）"] +
          properties["乡"] +
          properties["村"] +
          properties["组（小地名）"];
        setTimeout(() => {
          btn = document.querySelector("#photo-btn");
          btn.addEventListener("click", this.openPhotoDialog);
        }, 200);
      });
      layer.on("popupclose", () => {
        btn = null;
      });
    },
    getExamplePopupContent(feature, firstPhotoNum) {
      let content = "",
        popupKey = ["样地大小", "生物量", "入侵程度"];

      popupKey.forEach(key => {
        content += `<span style="color:${
          variables.primaryColor
        }">${key}：</span>${feature.properties[key] || ""}<br>`;
      });

      content =
        '<div style="line-height:20px;max-height:250px; overflow-y:auto;">' +
        content +
        `<img id='photo-btn' src =${this.base_url}images/${this.pointId}/${firstPhotoNum}.jpg style='width:150px;height:100px;cursor:pointer;border-radius:5px;overflow:hidden;margin-top:3px;' />`;
      ("</div>");

      return content;
    }
  }
};
</script>

<style lang="scss">
.el-dialog__wrapper {
  .el-carousel {
    height: 40vw;
    .el-carousel__container {
      height: 100% !important;
    }
  }
  img {
    width: 100%;
    height: 40vw;
  }
  .img-label {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #fff;
  }
}
</style>