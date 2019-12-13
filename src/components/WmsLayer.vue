<template>

</template>

<script>
import { findRealParent } from "vue2-leaflet";
export default {
  propos: {
    url: {
      type: String
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    let layerOptions = {
      layers: "nexrad‐n0r‐900913",
      format: "image/png",
    //   transparent: true
    };
    this.layerType = "overlay";
    this.name='航拍影像';
    L.extend(layerOptions, this.options);
    let parentContainer = findRealParent(this.$parent);
    this.mapObject = L.tileLayer.wms(this.url, layerOptions);
    parentContainer.addLayer(this,true);
  }
};
</script>

<style>
</style>