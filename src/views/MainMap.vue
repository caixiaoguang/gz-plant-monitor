<template>
  <div class="map-container">
    <l-map :zoom="zoom" :maxZoom="18" :center="center" :options="options" @ready="mapReady">
      <slot />
      <l-control-layers></l-control-layers>
      <l-feature-group layer-type="base" name="天地图">
        <l-tile-layer
          v-for="tile in tianditu"
          :key="tile.name"
          :url="tile.url"
          :visible="tile.visible"
        />
      </l-feature-group>
      <l-tile-layer name="影像图" layer-type="base" :visible="false" :url="satellite.url"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import { LMap, LControlLayers, LTileLayer, LFeatureGroup } from "vue2-leaflet";
import Vue from "vue";
export default {
  components: {
    LMap,
    LControlLayers,
    LTileLayer,
    LFeatureGroup
  },
  data() {
    return {
      zoom: 7,
      center: [27.35, 107.19],
      options: {
        attributionControl: false,
        preferCanvas: true
      },
      tianditu: [
        {
          name: "tianditu",
          visible: true,
          url:
            "https://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=fb1bfb9e06cd7681813a42f4c934e1ea"
        },
        {
          name: "tianditu_label",
          visible: true,
          url:
            "https://t0.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=fb1bfb9e06cd7681813a42f4c934e1ea"
        }
      ],
      satellite: {
        name: "satellite",
        url:
          "https://t2.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=fb1bfb9e06cd7681813a42f4c934e1ea"
      }
    };
  },
  methods: {
    mapReady(map) {
      Vue.prototype.$map = map;
    }
  }
};
</script>

<style lang="scss" scoped>
.map-container {
  width: 50%;
  background-color: #fff;
}
</style>