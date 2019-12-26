<template>
  <!-- 生境划分 -->
  <l-geo-json
    name="生境划分"
    layer-type="overlay"
    :geojson="shengjing"
    :options="shengjingOptions"
    :optionsStyle="shengjingStyleFunc"
    v-if="Object.keys(shengjing).length>0"
    @ready="geojsonObjReady"
  ></l-geo-json>
</template>

<script>
import { LGeoJson, findRealParent } from "vue2-leaflet";
import shp from "shpjs";

const shengjingColorDic = {
  乔木林地: "green",
  其他建设用地: "#c4512e",
  其它建设用地: "#c4512e",
  农村居民点: "rgb(236,137,138)",
  园地: "#6de5c1",
  大棚用地: "#817f26",
  建设用地: "#d4a638",
  旱地: "#ef8533",
  水域: "#74fcfd",
  水田: "rgb(255,255,0)",
  沟渠: "#a0fcfe",
  灌木林地: "#55b0a0",
  牧草地: "rgb(127,255,0)",
  荒山荒坡: "rgb(63,255,0)",
  道路: "rgb(127,63,0)",
  草地: "rgb(127,255,0)",
  茶园: "rgb(255,0,127)",
  城镇用地: "rgb(165,0,0)",
  护坡: "#bfc4cc",
  荒地: "rgb(63,255,0)",
  其他草地: "rgb(127,255,0)",
  未利用地: "rgb(192,192,192)",
  竹林: "rgb(0,127,0)"
};
export default {
  props: {
    pointId: { type: String }
  },
  components: {
    LGeoJson
  },
  data() {
    return {
      shengjing: {},
      currentCategory: []
    };
  },
  computed: {
    shengjingOptions() {
      return {
        onEachFeature: this.shengjingOnEachFeature
      };
    }
  },
  created() {
    //生境划分
    shp(`${this.base_url}生境划分/${this.pointId}/${this.pointId}`).then(
      geojson => {
        this.shengjing = geojson;
      }
    );
  },
  mounted() {},
  methods: {
    shengjingOnEachFeature(feature, layer) {
      let field = feature.properties.DLMC;
      layer.bindTooltip(field, { sticky: true });
      if (this.currentCategory.indexOf(field) == -1) {
        this.currentCategory.push(field);
      }
    },
    shengjingStyleFunc(feature) {
      return {
        weight: 0.5,
        color: "#000",
        fillOpacity: 0.9,
        fillColor: shengjingColorDic[feature.properties.DLMC]
      };
    },
    geojsonObjReady(e) {
      this.geojsonObj = e;

      if (this.geojsonObj) {
        this.initLegend();
      }
      this.geojsonObj.on("remove", () => {
        this.$map.removeControl(this.legend);
      });
      this.geojsonObj.on("add", () => {
        this.initLegend();
      });
    },
    initLegend() {
      var vm = this;
      this.legend = L.control({ position: "bottomright" });

      this.legend.onAdd = function(map) {
        var div = L.DomUtil.create("div", "info legend");
        var category = vm.currentCategory;
        
        for (var i = 0; i < category.length; i++) {
          div.innerHTML +=
            '<i style="background:' +
            shengjingColorDic[category[i]] +
            '"></i> ' +
            category[i] +
            "<br>";
        }
        return div;
      };
      this.legend.addTo(vm.$map);
    }
  }
};
</script>

<style>
</style>