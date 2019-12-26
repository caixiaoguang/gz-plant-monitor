<script>
import Leaflet from "leaflet";
import { findRealParent } from "vue2-leaflet";
const esri = require("esri-leaflet");
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    this.layerType = "overlay";
    this.name = "航拍影像";
    let parentContainer = findRealParent(this.$parent);
    axios.get(`${this.base_url}config.json`).then(res => {
      this.options = res.data;
      this.createMapobj(this.options.use);
      parentContainer.addLayer(this, true);
    });
  },
  methods: {
    createMapobj(type) {
      if (type == "imageserver") {
        this.mapObject = esri.imageMapLayer(this.options.imageserver);
      }

      if (type == "mapserver") {
        console.log(this.options.mapserver);

        this.mapObject = esri.dynamicMapLayer(this.options.mapserver);
      }

      if (type == "wms") {
        this.mapObject = L.tileLayer.wms(
          this.options.wms.url,
          this.options.wms.options
        );
      }
    }
  },
  render() {
    return null;
  }
};
</script>

<style>
</style>