<template>
  <div class="app-main">
    <sidebar
      :rows="provincesTable"
      :barRows="barRows"
      :provincesTableReady="isProvincesTableReady"
    />
    <main-map>
      <monitor-path
        :geojson="shpData"
        :firstLoad="isFirstLoad"
        v-if="isPath"
        @firstLoadEnd="firstLoadEnd"
      />
      <provinces :geojson="provinces" v-if="isArea" />
      <monitor-marker v-if="isMarker" />
    </main-map>

    <rightbar :tableData="tableData" :tableReady="tableReady" />

    <div class="tool-bar">
      <el-button type="primary" size="medium" @click="visible =true">监测点属性表</el-button>
      <el-button type="primary" size="medium" @click="isPath = isPath==true?false:true">调查路径</el-button>
      <el-button type="primary" size="medium" @click="isMarker = isMarker==true?false:true">数量分布</el-button>
      <el-button type="primary" size="medium" @click="isArea = isArea==true?false:true">面积分布</el-button>
    </div>

    <el-dialog :visible.sync="visible" title="入侵监测点" width="70%" :modal="false">
      <el-table :data="tableData" height="400" v-if="tableReady">
        <el-table-column
          v-for="col in Object.keys(tableData[0])"
          :key="col"
          :prop="col"
          :label="col"
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

import gzs from "../../public/gzs.json";
import shp from "shpjs";
import { loadRemoteFile, xlsJoinShp } from "../utils/util";

export default {
  components: {
    Sidebar,
    Rightbar,
    MainMap,
    MonitorPath,
    MonitorMarker,
    Provinces
  },
  data() {
    return {
      isPath: false,
      isMarker: true,
      isArea: false,
      isFirstLoad: true,
      tableData: [],
      tableReady: false,
      provincesTable: [],
      isProvincesTableReady: false,
      barRows: [],
      visible: false
    };
  },
  mounted() {
    this.getShp();
  },
  methods: {
    getShp() {
      shp("/监测点.zip").then(geojson => {
        this.shpData = this.combineFeature(geojson);
        this.getXls();
      });
    },
    getXls() {
      loadRemoteFile("/监测点信息.xlsx", 0, this.combineValue2Name);
      loadRemoteFile("/监测点信息.xlsx", 1, this.combineValue2Name);
      loadRemoteFile("/入侵面积统计.xlsx", 0, this.initRank);
      loadRemoteFile("/入侵面积统计.xlsx", 1, this.combineProvinces);
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
      xlsJoinShp([xlsData, "编码"], [this.shpData, "BH"]);
      this.shp2table();
    },
    shp2table() {
      this.shpkeys = Object.keys(this.shpData.features[0].properties);
      for (let i = 0; i < this.shpData.features.length; i++) {
        let properties = this.shpData.features[i].properties;
        this.tableData[i] = properties;

        // this.tableData[i] = {
        //   name: properties.O_Name,
        //   type: properties["入侵监测物种"] || properties["主要保护物种"],
        //   percent: properties["侵入程度/类型"] || "",
        //   area: properties["监测面积"] || "",
        //   landType: properties["地类"] || "",
        //   allArea: properties["总面积"] || "",
        //   coreArea: properties["核心区"] || "",
        //   bufferArea: properties["缓冲区"] || ""
        // };
      }
      this.tableReady = true;
    },
    provinces2table() {
      gzs.features.forEach(element => {
        this.provincesTable.push(element.properties);
      });
    },
    initRank(rankData) {
      this.barRows = rankData;
    },
    combineProvinces(xlsData) {
      xlsJoinShp([xlsData, "县名"], [gzs, "NAME"]);
      this.provinces = gzs;
      this.provinces2table();
      this.isProvincesTableReady = true;
    },
    firstLoadEnd() {
      this.isFirstLoad = false;
    }
  }
};
</script>

<style lang="scss" >
.app-main {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
}
</style>