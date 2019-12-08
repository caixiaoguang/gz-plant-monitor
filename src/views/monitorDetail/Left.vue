<template>
  <div class="sidebar">
    <div class="card monitor-info">
      <div class="title">
        <i class="icon el-icon-document-copy"></i>监测点介绍
        <el-tooltip class="item" effect="dark" content="预览" placement="top-start">
          <i class="priview el-icon-view" @click="detailVisible=true"></i>
        </el-tooltip>
      </div>
      <el-table
        :data="monitorInfo"
        size="mini"
        :stripe="true"
        :highlight-current-row="true"
        height="100%"
      >
        <el-table-column prop="key" label="指标"></el-table-column>
        <el-table-column prop="value" label="说明"></el-table-column>
      </el-table>
    </div>

    <div class="card print">
      <div class="title">
        <i class="icon el-icon-printer"></i>打印预览
      </div>
      <!-- <div class="content">
        <el-button type="primary" plain round size="mini" @click="$emit('preview')">监测点概况</el-button>
        <el-button type="primary" plain round size="mini">监测样地</el-button>
      </div>-->
      <el-table :data="exampleInfo" size="mini" :stripe="true" height="100%">
        <el-table-column prop="样方编号" label="样方编号"></el-table-column>
        <el-table-column prop="组（小地名）" label="组（小地名）"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              plain
              icon="el-icon-view"
              @click="handleView(scope.$index, scope.row)"
            >预览</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="card img-box" style="max-height:230px">
      <div class="title">
        <i class="icon el-icon-picture"></i>相关图片
      </div>
      <el-carousel height="200px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img :src="require(`../../assets/img/carousel/${item}.jpg`)" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 监测点预览 -->
    <el-dialog :visible.sync="detailVisible">
      <el-button size="mini" @click="printContent('monitor-datail')">打印</el-button>
      <div id="monitor-datail">
        <monitor-detail :detail="detail" />
      </div>
    </el-dialog>

    <!-- 样地预览 -->
    <el-dialog :visible.sync="exampleVisible">
      <el-button size="mini" @click="printContent('example-detail')">打印</el-button>
      <div id="example-detail">
        <example-field-detail :detail="exampleInfo[exampleTableNum]"></example-field-detail>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MonitorDetail from "./printPage/MonitorDetail";
import ExampleFieldDetail from "./printPage/ExampleFiled";
const monitorInfoKeys = [
  "初次入侵时间",
  "造成的主要经济危害及损失",
  "向周边传播途径",
  "当地利用情况",
  "目标物种在发生面积内的平均密度",
  "覆盖度",
  "平均株龄",
  "开花率",
  "结实率",
  "平均单株花量",
  "平均单株结实率"
];
export default {
  props: {
    detail: { type: Object },
    exampleDetail: { type: Object }
  },
  components: {
    MonitorDetail,
    ExampleFieldDetail
  },
  data() {
    return {
      detailVisible: false,
      exampleVisible: false,
      exampleTableNum: ""
    };
  },
  computed: {
    monitorInfo() {
      let result = [];
      monitorInfoKeys.forEach(key => {
        let value = this.detail[key] || "";
        result.push({ key: key, value: value });
      });
      return result;
    },
    exampleInfo() {
      if (Object.keys(this.exampleDetail).length == 0) return [];
      let result = [];
      this.exampleDetail.features.forEach(el => {
        result.push(el["properties"]);
      });
      return result;
    }
  },
  methods: {
    handleView(index, row) {
      this.exampleTableNum = index;
      this.exampleVisible = true;
    },
    printContent(id) {
      let subOutputRankPrint = document.getElementById(id);
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

<style lang="scss" scope>
.sidebar {
  .monitor-info {
    height: 40%;
    .priview {
      float: right;
      margin-right: 10px;
      padding: 1px;
      border-radius: 3px;
      border: 1px solid #fff;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }
  .print {
    text-align: center;
  }
  .img-box {
    margin-bottom: 0px;
    img {
      width: 100%;
    }
  }
}
</style>