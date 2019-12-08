<template>
  <marker-cluster ref="clusterRef" layerType="overlay" name="数量聚合">
    <l-geo-json :geojson="geojsonData" :options="options" v-if="dataReady"></l-geo-json>
  </marker-cluster>
</template>

<script>
import { LGeoJson } from "vue2-leaflet";
import MarkerCluster from "./common/VueLeafletCluster";
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
    shp(`${this.base_url}入侵植物/入侵点测试`).then(geojson => {
      this.geojsonData = geojson;
      this.dataReady = true;
    });
  },
  methods: {
    // pointToLayerFunc(feature, latlng) {
    //   console.log(featurek);

    //   return L.marker(latlng).bindTooltip(feature.properties["县名"]);
    // },
    pointToLayerFunc(feature, latlng) {
      return L.marker(latlng, {
        icon: L.icon({
          iconUrl: require("@/assets/img/marker/leaf-green.png"),
          shadowUrl: require("@/assets/img/marker/leaf-shadow.png"),
          iconSize: [20, 42],
          shadowSize: [25, 32],
          shadowAnchor: [0, 9]
        })
      }).bindTooltip(feature.properties["县名"]);
    }
  }
};
</script>

<style>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>