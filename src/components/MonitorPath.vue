<template>
  <l-geo-json
    :geojson="geojson"
    :optionsStyle="createStyleFunction({color:'#232323'})"
    :options="geojsonOptions"
    @ready="geojsonObjReady"
    layer-type="overlay"
    name="监测点"
  ></l-geo-json>
</template>

<script>
import { LGeoJson } from "vue2-leaflet";
import shp from "shpjs";
import geojsonMixin from "../mixins/geojsonOptions";

export default {
  mixins: [geojsonMixin],
  props: {
    geojson: {
      type: Object,
      default: {}
    }
  },
  components: {
    LGeoJson
  },
  data() {
    return {};
  },
  computed: {
    geojsonOptions() {
      return {
        onEachFeature: this.createOnEachFeatureFunc("简称", null, {
          permanent: true
        }),
        pointToLayer: this.pointToLayerFunc
      };
    }
  },
  mounted() {},
  methods: {
    geojsonObjReadyCallback(e) {
      e.bringToFront();
      this.$map.on("zoomend", () => {
        let zoom = this.$map.getZoom();
        let isTooltipOpen = e.getLayers()[0].isTooltipOpen();

        if (zoom < 7 && isTooltipOpen) {
          e.eachLayer(layer => layer.closeTooltip());
        }

        if (zoom >= 7 && !isTooltipOpen) {
          e.eachLayer(layer => layer.openTooltip());
        }
      });
    }
  }
};
</script>

<style>
</style>