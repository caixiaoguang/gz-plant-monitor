<template>
  <l-geo-json
    :geojson="geojson"
    :optionsStyle="styleFunction"
    :options="options"
    @ready="geoJsonObjReady"
  ></l-geo-json>
</template>

<script>
import { LGeoJson } from "vue2-leaflet";
import gzs from "../../public/gzs.json";
import { loadRemoteFile, xlsJoinShp } from "../utils/util";
const colorList = [
  "#FFEDA0",
  "#FED976",
  "#FEB24C",
  "#FD8D3C",
  "#FC4E2A",
  "#BD0026",
  "#800026"
];

const colorGrades = [0, 5000, 10000, 15000, 20000, 25000, 30000];

export default {
  props: {
    geojson: { type: Object, default: () => {} }
  },
  components: {
    LGeoJson
  },
  data() {
    return {};
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunc,
        pointToLayer: this.pointToLayerFunc
      };
    }
  },
  created() {},
  mounted() {},
  beforeDestroy() {
    this.$map.removeControl(this.legend);
  },
  methods: {
    styleFunction(layer) {
      return {
        fillColor: this.getColor(layer.properties["面积"] || 0),
        weight: 2,
        opacity: 1,
        color: "green",
        dashArray: "3",
        fillOpacity: 0.7
      };
    },
    geoJsonObjReady(obj) {
      this.geoJsonObj = obj;
      this.initLegend();
      this.$map.fitBounds(obj.getBounds());
    },
    //高亮鼠标划过区域
    highlightFeature(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 3,
        color: "red",
        dashArray: "",
        fillOpacity: 0.7
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    },
    //重置样式
    resetHighlight(e) {
      this.geoJsonObj.resetStyle(e.target);
    },
    //点击缩放
    zoomToFeature(e) {
      this.$map.fitBounds(e.target.getBounds());
    },
    onEachFeatureFunc(feature, layer) {
      let name = feature.properties.NAME;
      let value = feature.properties["面积"];
      layer.on({
        mouseover: this.highlightFeature,
        mouseout: this.resetHighlight,
        click: this.zoomToFeature
      });
      layer.bindTooltip(name + "<br>" + value + "(亩)", {
        direction: "top",
        sticky: true
      });
    },
    //获取颜色代码
    getColor(value) {
      const len = colorGrades.length;
      for (let i = 0; i < len; i++) {
        if (value >= colorGrades[i] && value < colorGrades[i + 1]) {
          return colorList[i];
        }
        if (value >= colorGrades[len - 1]) {
          return colorList[len - 1];
        }
      }
    },
    initLegend() {
      var vm = this;
      this.legend = L.control({ position: "bottomright" });

      this.legend.onAdd = function(map) {
        var div = L.DomUtil.create("div", "info legend");

        for (var i = 0; i < colorGrades.length; i++) {
          div.innerHTML +=
            '<i style="background:' +
            vm.getColor(colorGrades[i] + 1) +
            '"></i> ' +
            colorGrades[i] +
            (colorGrades[i + 1]
              ? "&ndash;" + colorGrades[i + 1] + "<br>"
              : "+");
        }
        return div;
      };
      this.legend.addTo(vm.$map);
    }
  }
};
</script>

<style>
.legend {
  line-height: 18px;
  color: #555;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
}
.legend i {
  width: 18px;
  height: 18px;
  float: left;
  margin-right: 8px;
  opacity: 0.7;
}
</style>