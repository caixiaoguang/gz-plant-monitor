<template>
  <marker-cluster>
    <l-geo-json :geojson="geojsonData" :options="options" v-if="dataReady"></l-geo-json>
  </marker-cluster>
</template>

<script>
import { LGeoJson } from "vue2-leaflet";
import MarkerCluster from "vue2-leaflet-markercluster";
import { loadRemoteFile } from "../utils/util";
import shp from "shpjs";
export default {
  components: {
    LGeoJson,
    MarkerCluster
  },
  data() {
    return {
      dataReady: false
    };
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunc,
        pointToLayer: this.pointToLayerFunc
      };
    }
  },
  mounted() {
    shp("/入侵植物/入侵点测试").then(geojson => {
      this.geojsonData = geojson;
      this.dataReady = true;
    });
  },
  methods: {
    pointToLayerFunc(feature, latlng) {
      return L.marker(latlng).bindTooltip(feature.properties["县名"]);
    }
  }
};
</script>

<style>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>