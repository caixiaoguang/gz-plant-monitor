<template>
  <el-scrollbar>
    <div class="sidebar">
      <div class="information">
        <div class="title">入侵说明</div>
        <div class="article">
          21个监测点的调查情况，包括15个入侵监测点和6个原生境保护区。展示了面积分布和数量分布及调查详情。
        </div>
        <el-link type="primary" href="/测试下载文件.docx" download>下载说明文件</el-link>
        <el-divider></el-divider>
      </div>
      <div class="scale">
        <div class="title">各区县入侵面积比例</div>
        <div class="chart">
          <ve-pie :data="pieData" v-if="provincesTableReady"></ve-pie>
        </div>
      </div>
      <div class="ranking">
        <div class="title">入侵植物排名</div>
        <ve-bar :data="barData" :setting="rankingSetting"></ve-bar>
      </div>
    </div>
  </el-scrollbar>
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
      const data = this.rows.filter(el => el["面积"] > 10000);
      return {
        columns: ["县名", "面积"],
        rows: data
      };
    },
    barData() {
      const data = this.barRows
        .filter(el => el["面积"] > 0)
        .sort((a, b) => b["面积"] - a["面积"]);
      return {
        columns: ["入侵种类", "面积"],
        rows: data
      };
    }
  }
};
</script>

<style lang="scss">
.el-scrollbar__wrap {
  overflow-x: hidden !important;
}

.sidebar {
  width: 25vw;
  height: 100%;
  background-color: #fff;
  padding: 10px 10px;
  .title {
    color: #303133;
    font-weight: 500;
    font-size: 13px;
    text-align: center;
    margin-bottom: 10px;
  }
  .article {
    font-size: 13px;
    font-weight: 400;
    color: #303133;
    line-height: 1.7;
    margin: 10px 0px;
  }
}
</style>


<style lang="scss" scoped>
.sidebar {
  .information {
  }
}
</style>