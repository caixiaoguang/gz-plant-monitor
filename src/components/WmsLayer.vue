<script>
import Leaflet from "leaflet";
import { findRealParent } from "vue2-leaflet";
const esri = require("esri-leaflet");
import config from "../../public/config.json";
export default {
  data() {
    return {
      options: {
        url: config.imageUrl
      }
    };
  },
  mounted() {
    this.layerType = "overlay";
    this.name = "航拍影像";
    let parentContainer = findRealParent(this.$parent);
    this.mapObject = esri.imageMapLayer(this.options);
    parentContainer.addLayer(this, true);
  },
  render() {
    return null;
  }
};
</script>

<style>
</style>