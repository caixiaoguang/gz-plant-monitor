<template>
  <div class="map-container">
    <l-map :zoom="zoom" :maxZoom="32" :center="center" :options="options" @ready="mapReady">
      <slot />
      <l-control-layers :collapsed="false" :sortLayers="true" @ready="layerControlReady"></l-control-layers>
      <l-feature-group layer-type="base" name="天地图">
        <l-tile-layer
          v-for="tile in tianditu"
          :key="tile.name"
          :url="tile.url"
          :visible="tile.visible"
        />
      </l-feature-group>
      <l-tile-layer name="影像图" layer-type="base" :visible="false" :url="satellite.url"></l-tile-layer>
      <l-geo-json
        :geojson="geojson"
        :options="geojsonOptions"
        :optionsStyle="createStyleFunction({fillColor:'#ccc',color:'#fff'})"
        layer-type="overlay"
        name="行政区划"
        :visible="false"
        @ready="geojsonObjReady"
      ></l-geo-json>
    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LControlLayers,
  LTileLayer,
  LFeatureGroup,
  LGeoJson
} from "vue2-leaflet";
import geojsonMixin from "../mixins/geojsonOptions";
import Vue from "vue";
import gzs from "../../public/static/gzs.json";
export default {
  mixins: [geojsonMixin],
  components: {
    LMap,
    LControlLayers,
    LTileLayer,
    LFeatureGroup,
    LGeoJson
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
            "https://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=1902c209c7a7480dfb962751b839b91e"
        },
        {
          name: "tianditu_label",
          visible: true,
          url:
            "https://t0.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=1902c209c7a7480dfb962751b839b91e"
        }
      ],
      satellite: {
        name: "satellite",
        url:
          "https://t2.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=1902c209c7a7480dfb962751b839b91e"
      }
    };
  },
  created() {
    this.geojson = gzs;
  },
  computed: {
    geojsonOptions() {
      return {
        onEachFeature: this.createOnEachFeatureFunc("NAME"),
        pointToLayer: this.pointToLayerFunc
      };
    },
    geojsonObjReadyCallback(geojsonObj) {
      this.geojsonObj.bringToBack();
    }
  },
  methods: {
    mapReady(map) {
      Vue.prototype.$map = map;
    },
    layerControlReady(e) {
      Vue.prototype.$layerControl = e;
    }
  }
};
</script>

<style lang="scss" scoped>
.map-container {
  flex: 1;
  background-color: #fff;
}
</style>