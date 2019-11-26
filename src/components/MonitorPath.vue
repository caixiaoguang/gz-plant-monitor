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
import shp from "shpjs";
import { loadRemoteFile } from "../utils/util";

export default {
  props: {
    geojson: {
      type: Object,
      default: {}
    },
    firstLoad: {
      type: Boolean,
      default: true
    }
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
  mounted() {},
  methods: {
    styleFunction(layer) {
      return {
        fillColor: "#e15989",
        weight: 2,
        opacity: 1,
        color: "#ccc",
        dashArray: "1",
        fillOpacity: 0.8
      };
    },
    onEachFeatureFunc(feature, layer) {
      let name = feature.properties.O_Name;
      let value = feature.properties.invasionArea;
      layer.on({
        mouseover: this.highlightFeature,
        mouseout: this.resetHighlight,
        click: this.zoomToFeature
      });
      layer.bindTooltip(name + "<br>", {
        direction: "top",
        sticky: true
      });
    },

    geoJsonObjReady(e) {
      this.geoJsonObj = e;
      this.$emit("firstLoadEnd");
      if (this.firstLoad) {
        this.$map.fitBounds(e.getLayers()[0].getBounds());
      }
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
    zoomToFeature(e) {
      this.$map.fitBounds(e.target.getBounds());
    }
  }
};
</script>

<style>
</style>