<script>
import shp from "shpjs";
import { antPath } from "leaflet-ant-path";
import { findRealParent, propsBinder } from "vue2-leaflet";
import variables from "@/styles/variables.scss";
export default {
  props: {
    layerType: {
      type: String,
      custom: true,
      default: undefined
    },
    name: {
      type: String,
      custom: true,
      default: undefined
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true
    }
  },

  async mounted() {
    this.parentContainer = findRealParent(this.$parent);
    const mapObject = L.featureGroup();
    propsBinder(this, this.mapObject, this.props);
    const pathData = await shp(`${this.base_url}static/巡查路线.zip`);
    pathData.features.forEach(feature => {
      let latlngs = [];
      feature.geometry.coordinates.forEach(coord => {
        latlngs.push([coord[1], coord[0]]);
      });
      antPath(latlngs, { color: "red" }).addTo(mapObject);
    });
    this.mapObject = mapObject;
    this.parentContainer.addLayer(this,true);
  },
  beforeDestroy() {
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setVisible(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.removeLayer(this);
        }
      }
    }
  },
  render() {
    return null;
  }
};
</script>