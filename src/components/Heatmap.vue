<template></template>

<script>
import "leaflet.heat";
import { findRealParent } from "vue2-leaflet";
import shp from "shpjs";
export default {
  props: {
    pointId: {}
  },
  components: {},
  mounted() {
    this.layerType = "overlay";
    this.name = "热力图";
    this.visible = false;
    if (this.pointId) {
      shp(`${this.base_url}热力图/${this.pointId}`).then(geojson => {
        this.formatHeatData(geojson);
        let parentContainer = findRealParent(this.$parent);
        this.mapObject = L.heatLayer(this.heatData, { max: 1 });
        parentContainer.addLayer(this,true);
      });
    }
  },
  methods: {
    formatHeatData(geojson) {
      this.heatData = [];
      geojson.features.forEach(feature => {
        this.heatData.push([
          feature.geometry.coordinates[1],
          feature.geometry.coordinates[0],
          feature.properties.WT
        ]);
      });
    }
  }
};
</script>

<style>
</style>