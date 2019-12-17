<template>
  <div class="app-main" v-loading.fullscreen.lock="fullscreenLoading">
    <sidebar :rows="provincesTable" :barRows="barRows" :provincesTableReady="isArea" />
    <main-map>
      <monitor-path :geojson="shpData" v-if="isArea" />
      <provinces :geojson="provinces" v-if="isArea" />
      <monitor-marker />
      <!-- 巡查路线 -->
      <ant-path layerType="overlay" name="调查路线" :visible="false"></ant-path>
    </main-map>

    <rightbar :tableData="tableData" :category="categoryStatistics[0]" :tableReady="isArea" />

    <div class="tool-bar">
      <el-button type="primary" size="medium" @click="visible =true">监测点属性表</el-button>
    </div>

    <el-dialog :visible.sync="visible" width="80%" :modal="true" v-if="isArea">
      <div slot="title" class="dialog-head">
        <span style="margin-right:10px;font-size:12px;color:#606266;">选择类型：</span>
        <el-select v-model="tableType" placeholder="请选择" size="mini">
          <el-option v-for="item in Object.keys(tableData)" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </div>

      <el-table :data="tableData[tableType]" height="400" :border="true" size="mini">
        <el-table-column
          v-for="col in Object.keys(tableData[tableType][0])"
          :key="col"
          :prop="col"
          :label="col"
          :resizable="true"
          :show-overflow-tooltip="true"
          :sortable="true"
        ></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";
import MainMap from "./MainMap";
import MonitorPath from "../components/MonitorPath";
import MonitorMarker from "../components/MonitorMarker";
import Provinces from "../components/Provinces";
import AntPath from "../components/AntPath";
import gzs from "../../public/static/gzs.json";
import shp from "shpjs";
import { loadRemoteFile, xlsJoinShp } from "../utils/util";

export default {
  components: {
    Sidebar,
    Rightbar,
    MainMap,
    MonitorPath,
    MonitorMarker,
    Provinces,
    AntPath
  },
  data() {
    return {
      fullscreenLoading: true,
      isArea: false,
      tableData: { 入侵点: [], 原生境: [] },
      categoryStatistics: [],
      tableType: "入侵点",
      provincesTable: [],
      barRows: [],
      visible: false
    };
  },
  mounted() {
    this.getShp();
  },
  methods: {
    async getShp() {
      const orginShpData = await shp(`${this.base_url}static/监测点.zip`);
      this.orginShpData = this.combineFeature(orginShpData);
      this.categoryStatistics = await loadRemoteFile(
        `${this.base_url}static/区县种类.xlsx`
      );
      this.getXls();
    },
    async getXls() {
      const res = await loadRemoteFile(`${this.base_url}static/监测点信息.xlsx`);
      this.combineValue2Name(res);
      this.fullscreenLoading = false;
      this.initRank(await loadRemoteFile(`${this.base_url}static/入侵面积统计.xlsx`));
    },
    combineFeature(geojsonList) {
      let data = {
        type: "FeatureCollection",
        features: []
      };
      let keys = Object.keys(geojsonList[0].features[0].properties);
      for (let i = 0; i < geojsonList.length; i++) {
        keys.forEach(key => {
          if (key != "BH" && key != "O_Name") {
            delete geojsonList[i].features[0].properties[key];
          }
        });
        data.features[i] = geojsonList[i].features[0];
      }
      return data;
    },
    combineValue2Name(xlsData) {
      let sheet1Combine = xlsJoinShp(
        { data: xlsData[0], key: "编码" },
        { data: this.orginShpData, key: "BH" }
      );

      this.shpData = xlsJoinShp(
        { data: xlsData[1], key: "编码" },
        { data: sheet1Combine, key: "BH" }
      );
      this.shp2table();
    },
    shp2table() {
      for (let i = 0; i < this.shpData.features.length; i++) {
        let properties = this.shpData.features[i].properties;
        if (properties["保护区名称"]) {
          this.tableData.原生境.push(properties);
        } else {
          this.tableData.入侵点.push(properties);
        }
      }
    },
    provinces2table() {
      this.provinces.features.forEach(element => {
        this.provincesTable.push(element.properties);
      });
    },
    initRank(rankData) {
      this.barRows = rankData[0];
      this.combineProvinces(rankData[1]);
    },

    combineProvinces(xlsData) {
      this.provinces = xlsJoinShp(
        { data: xlsData, key: "县名" },
        { data: gzs, key: "NAME" }
      );
      this.provinces2table();
      this.isArea = true;
    },
    //调查路线样式
    pathStyleFunc() {
      let options = {
        weight: 3,
        opacity: 1,
        color: "#55b0a0"
        // dashArray: "1",
      };
      return options;
    }
  }
};
</script>

<style lang="scss" >
@import "../styles/variables.scss";
.app-main {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  .el-dialog__header {
    padding: 10px;
    .el-dialog__title,span{
      font-size: 14px;
      font-weight: normal;
      color:$primaryColor;
    }
    .el-dialog__headerbtn {
      top: 15px;
    }
  }
  .el-dialog__body {
    padding: 0px;
  }
}
</style>