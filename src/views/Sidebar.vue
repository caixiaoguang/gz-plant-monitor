<template>
  <div class="sidebar">
    <div class="card" style="max-height:120px;">
      <div class="title">
        <i class="icon el-icon-chat-dot-square"></i>入侵说明
      </div>
      <div class="content">
        <span>21个监测点的调查情况，包括15个入侵监测点和6个原生境保护区。展示了面积分布和数量分布及调查详情。</span>
        <el-link type="primary" href="/测试下载文件.docx" download>下载说明文件</el-link>
      </div>
    </div>
    <div class="card" style="min-height:350px;max-height:400px;">
      <div class="title">
        <i class="icon el-icon-pie-chart"></i>各区县入侵面积比例
      </div>
      <div class="content">
        <ve-pie :data="pieData" v-if="provincesTableReady"></ve-pie>
      </div>
    </div>
    <div class="card">
      <div class="title">
        <i class="icon el-icon-medal-1"></i>入侵植物排名
      </div>
      <el-table :data="barRows" size="mini" height="100%" v-if="provincesTableReady">
        <el-table-column
          v-for="col in Object.keys(barRows[0])"
          :key="col"
          :prop="col"
          :label="col"
          :resizable="true"
          :show-overflow-tooltip="true"
          :sortable="true"
          :stripe="true"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rows: { type: Array },
    barRows: { type: Array },
    provincesTableReady: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      rankingSetting: { legendName: { title: "aaaa" } }
    };
  },
  computed: {
    pieData() {
      let data = {},
        result = [];
      this.rows.forEach(row => {
        let name = row["地州市"];
        if (name) {
          if (name in data) {
            data[name] += row["面积"];
          } else {
            data[name] = row["面积"];
          }
        }
      });
      for (let key in data) {
        result.push({ 地州市: key, 面积: data[key] });
      }

      return {
        columns: ["地州市", "面积"],
        rows: result
      };
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
.el-scrollbar__wrap {
  overflow-x: hidden !important;
}

.sidebar {
  width: 25vw;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  background-color: #f1f2f5;
  .card {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0px;
    }
    .title {
      color: #fff;
      background-color: $primaryColor;
      font-weight: 500;
      font-size: 14px;
      text-align: center;
      padding: 10px;
    }
    .content {
      padding: 10px;
      font-size: 13px;
      font-weight: 400;
      color: #303133;
      line-height: 1.7;
    }
  }
}
</style>


<style lang="scss" scoped>
</style>