<template>
  <div class="app-main">
    <left :detail="detail" />
    <main-map>
      <tool />
      <l-geo-json v-if="geojsonReady" :geojson="polygon" @ready="geojsonObjReady"></l-geo-json>
    </main-map>
    <right @preview="preview" />

    <el-dialog :visible.sync="detailVisible">
      <el-button size="mini" @click="printContent">打印</el-button>
      <div id="monitor-datail">
        <monitor-detail :detail="detail" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Left from "./Left";
import Right from "./Right";
import MainMap from "../MainMap";
import Tool from "./Tool";
import MonitorDetail from "./printPage/MonitorDetail";
import { LGeoJson } from "vue2-leaflet";
import { loadRemoteFile } from "../../utils/util";
import shp from "shpjs";
export default {
  components: {
    Left,
    Right,
    MainMap,
    Tool,
    LGeoJson,
    MonitorDetail
  },
  data() {
    return {
      pointId: this.$route.query.id,
      detailVisible: false,
      geojsonReady: false,
      polygon: {},
      detail: {}
    };
  },
  created() {
    shp("/监测点.zip").then(geojson => {
      this.getPolygon(geojson);
    });
    loadRemoteFile("/监测点详情.xlsx", 0, this.getDetail);
  },
  methods: {
    getPolygon(geojson) {
      this.polygon = geojson.find(
        el => el.features[0].properties.BH == this.pointId
      );
      if (this.polygon) {
        this.geojsonReady = true;
      }
    },
    getDetail(xlsdata) {
      this.detail = xlsdata.find(el => el["监测点编号"] == this.pointId);
    },
    geojsonObjReady(e) {
      this.$map.fitBounds(e.getBounds());
    },
    printContent(e) {
      let subOutputRankPrint = document.getElementById("monitor-datail");
      let newContent = subOutputRankPrint.innerHTML;
      let oldContent = document.body.innerHTML;
      document.body.innerHTML = newContent;
      window.print();
      window.location.reload();
      document.body.innerHTML = oldContent;
      return false;
    },
    preview() {
      if (!this.detail) {
        this.$message({
          message: "暂无详情",
          type: "warning"
        });
      } else {
        this.detailVisible = true;
      }
    }
  }
};
</script>

<style>
</style>