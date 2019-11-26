<template>
  <el-scrollbar>
    <div class="sidebar">
      <div class="monitor-list">
        <div class="title">监测点列表</div>
        <el-table :data="tableData" style="width: 100%" @row-click="goDetail" v-if="tableReady">
          <el-table-column prop="O_Name" label="名称"></el-table-column>
          <el-table-column prop="入侵监测物种" label="入侵物种"></el-table-column>
          <el-table-column prop="侵入程度/类型" label="侵入程度"></el-table-column>
          <el-table-column prop="监测面积" label="监测面积(亩)"></el-table-column>
        </el-table>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tableReady: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    goDetail(e) {
      this.$router.push({ path: "/monitor-detail", query: { id: e.BH } });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>