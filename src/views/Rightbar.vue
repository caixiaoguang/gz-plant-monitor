<template>
  <div class="sidebar">
    <div class="card" style="height:60%">
      <div class="title">
        <div class="icon el-icon-s-data"></div>监测点列表
      </div>
      <div class="title" style="padding-top:0px;font-size:12px;">
        选择类型：
        <el-select v-model="tableType" placeholder="请选择" size="mini">
          <el-option v-for="item in Object.keys(tableData)" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </div>

      <el-table
        :data="attrData"
        style="width: 100%;"
        height="100%"
        :border="true"
        size="mini"
        @row-click="goDetail"
        v-if="tableReady"
      >
        <template v-if="tableType=='原生境'">
          <el-table-column prop="O_Name" label="名称" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="主要保护物种" label="保护物种" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="总面积" label="总面积"></el-table-column>
        </template>
        <template v-else>
          <el-table-column prop="O_Name" label="名称" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="入侵监测物种" label="入侵物种"></el-table-column>
          <el-table-column prop="监测面积" label="监测面积"></el-table-column>
        </template>
      </el-table>
    </div>

    <div class="card" style="max-height:340px">
      <div class="title">
        <i class="el-icon-info"></i>
        各市（州）入侵数量</div>
      <ve-histogram :data="categoryData" height="360px"></ve-histogram>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Object,
      default: () => {}
    },
    category: {
      type: Array
    },
    tableReady: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableType: "入侵点"
    };
  },
  computed: {
    attrData() {
      return this.tableData[this.tableType];
    },
    categoryData() {
      return {
        columns: ["区县", "数量"],
        rows: this.category
      };
    }
  },
  mounted() {},
  methods: {
    goDetail(e) {
      let address = e["监测地点"] || e["位置及地名"];
      let isOrigin = this.tableType === "原生境" ? 1 : 0;

      this.$router.push({
        name: "monitorDetail",
        query: { id: e.BH, address: address, isOrigin: isOrigin }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>