<template>
  <l-geo-json
    :geojson="geojson"
    :optionsStyle="styleFunction"
    :options="options"
    @ready="geojsonObjReady"
    layer-type="overlay"
    name="面积分布"
    :visible="false"
  ></l-geo-json>
</template>

<script>
import { LGeoJson } from "vue2-leaflet";
import geojsonMixin from "../mixins/geojsonOptions";
const colorList = [
  "#2bb6ab",
  "#6bcaa8",
  "#abdda4",
  "#d5eeb2",
  "#ffffbf",
  "#feca82",
  "#f69653",
  "#eb713d",
  "#d73018",
  'red'
];

const colorGrades = [
  0,
  7,
  503.6,
  5254.5,
  9772.6,
  13992,
  95234,
  1050500,
  1850000,
  2700000
];

export default {
  mixins: [geojsonMixin],
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
        onEachFeature: this.createOnEachFeatureFunc(),
        pointToLayer: this.pointToLayerFunc
      };
    }
  },
  created() {},
  mounted() {},
  beforeDestroy() {
  },
  methods: {
    styleFunction(layer) {
      return {
        fillColor: this.getColor(layer.properties["面积"] || 0),
        weight: 0.5,
        opacity: 1,
        color: "#000",
        // dashArray: "3",
        fillOpacity: 0.9
      };
    },
    getTooltipContent(feature, keys) {
      let content =
        feature.properties["NAME"] +
        "<br>" +
        feature.properties["面积"] +
        "(亩)";
      return content;
    },

    geojsonObjReadyCallback(geojsonObj) {
      this.geojsonObj.bringToBack();
      this.geojsonObj.on("remove", () => {
        this.$map.removeControl(this.legend);
      });
      this.geojsonObj.on("add", () => {
        this.initLegend();
      });
      this.$map.fitBounds(this.geojsonObj.getBounds());
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