<template>
  <div class="sidebar">
    <div class="card" style="min-height:320px;max-height:350px;">
      <div class="title">植物本底</div>
      <ve-histogram :data="chartData" height="330px" v-if="isBenDiVisible"></ve-histogram>
      <div class="no-data" v-else>
        <span>水域类型监测点暂无数据!</span>
      </div>
    </div>

    <div class="card">
      <div class="title">株数统计</div>
      <ve-line :data="plantNumsChart" height="300px" v-if="isPlntNumsVisible"></ve-line>
      <div class="no-data" v-else>
        <span>水域类型监测点暂无数据!</span>
      </div>
    </div>

    <div class="card event" style="max-height:200px">
      <div class="title">活动事件</div>
      <div class="event-container" @click="articleVisible=true">
        <img :src="this.base_url+'images/DSC_7328.jpg'" style="width:100%" />
        <span>{{title}}</span>
      </div>
    </div>

    <el-dialog :visible.sync="articleVisible">
      <template slot="title">
        <span class="el-icon-s-flag"></span>
        <span>{{title}}</span>
      </template>
      <div class="article">
        <img :src="this.base_url+'images/DSC_7328.jpg'" />
        <div class="content">
          <p>为进一步推进外来入侵生物防控工作，2019年7月17日，省农业农村厅科技教育处、省农业资源环境管理站联合贵阳市农业农村局、贵州大学林学院、贵州省科学院山地资源研究所、贵阳学院在花溪区石板井村举办了外来入侵生物三裂叶豚草现场灭除活动。贵州大学林学院生态学、林学专业学生、花溪区石板井村村民等60余人参加了现场灭除活动，现场还发放了三裂叶豚草防控明白纸和《贵州省外来入侵生物防控知识手册》。</p>
          <p>三裂叶豚草是列入《中国第二批外来入侵物种名单》和《国家重点管理外来入侵物种名录（第一批）》的恶性杂草，具有极强的吸肥能力和再生能力，可使土壤肥力严重下降，牧草基本消失，对生物资源造成严重破坏，多样性丧失；也可诱发人畜哮喘、鼻炎，致中毒或死亡，严重危害人畜健康。2015年在我省贵阳市花溪区首次发现（《贵州林业科技》2017年2月刊），2017年—2018年快速传播，2019年5月省农业农村厅委托省科学院山地资源研究所成立调查组，对花溪区、乌当区、白云区等敏感区域三裂叶豚草入侵情况进行了初步调查，在花溪区范围内发现约20余亩三裂叶豚草，主要分布在道路旁、建筑废弃地以及水塘旁。三裂叶豚草喜阳光，在水边、农地、荒地皆宜存活，因而有大面积入侵农用地的风险。</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { loadRemoteFile } from "../../utils/util";
export default {
  props: {
    title: {
      type: String
    }
  },
  components: {},
  data() {
    return {
      address: this.$route.params.address,
      zhiWuBenDi: [],
      plantNums: [],
      articleVisible: false,
      pointId: this.$route.params.id
    };
  },
  created() {
    loadRemoteFile(`${this.base_url}static/植物本底.xlsx`).then(data => {
      this.zhiWuBenDi = data[0].filter(el => el["监测地点"] == this.address);
      this.zhiWuBenDi.forEach(el => {
        el["年份"] = String(el["年份"]);
      });
    });
    loadRemoteFile(`${this.base_url}static/株数.xlsx`).then(data => {
      this.plantNums = data[0].filter(el => el["编码"] == this.pointId);
      this.plantNums.forEach(el => {
        el["年份"] = String(el["年份"]);
      });
    });
  },
  computed: {
    isBenDiVisible() {
      let list = ['522627001', '522628001', '522625001', '520111001'];
      return list.indexOf(this.pointId) == -1 ? true : false;
    },
    isPlntNumsVisible() {
      let list = ['522627001', '522628001', '522625001'];
      return list.indexOf(this.pointId) == -1 ? true : false;
    },
    chartData() {
      return {
        columns: ["年份", "科", "属", "种"],
        rows: this.zhiWuBenDi
      };
    },
    plantNumsChart() {
      return {
        columns: ["年份", "株数（万株）"],
        rows: this.plantNums
      };
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.no-data {
  height: 100%;
  font-size: 12px;
  font-weight: normal;
  color: #909399;
  display: flex;
  justify-content: center;
  align-items: center;
}
.event {
  margin-bottom: 0px;
  .event-container {
    position: relative;
    span {
      color: rgba($color: #fff, $alpha: 0.9);
      font-size: 14px;
      position: absolute;
      top: 10px;
      left: 10px;
      // bottom: 10px;
    }
  }
}

.article {
  .content {
    color: rgba($color: #fff, $alpha: 0.8);
    padding: 10px;
    text-indent: 30px;
    position: absolute;
    bottom: 20px;
    left: 10px;
  }
}
</style>