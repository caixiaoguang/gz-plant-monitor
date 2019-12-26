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
        <img
          :src="this.base_url+'activityImages/'+pointId+'/'+imagesList[0]+'.jpg'"
          style="width:100%;cursor:pointer;"
        />
        <span>{{title}}</span>
      </div>
    </div>

    <el-dialog :visible.sync="articleVisible">
      <template slot="title">
        <span class="el-icon-s-flag"></span>
        <span>{{title}}</span>
      </template>

      <el-carousel>
        <el-carousel-item v-for="item in imagesList" :key="item">
          <img :src="base_url + 'activityImages/'+pointId+'/'+item+'.jpg'" />
          <p
            class="img-label"
            style="padding:10px;text-indent:30px;"
          >{{detail&&(detail['活动文字']||'')}}</p>
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </div>
</template>

<script>
import { loadRemoteFile, getPhotoList } from "../../utils/util";
export default {
  props: {
    title: {
      type: String
    },
    detail: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      address: this.$route.query.address,
      zhiWuBenDi: [],
      plantNums: [],
      articleVisible: false,
      pointId: this.$route.query.id
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
      let list = ["522627001", "522628001", "522625001", "520111001"];
      return list.indexOf(this.pointId) == -1 ? true : false;
    },
    isPlntNumsVisible() {
      let list = ["522627001", "522628001", "522625001"];
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
    },
    imagesList() {
      if (this.detail && this.detail["活动图片"]) {
        return getPhotoList(this.detail["活动图片"]);
      } else {
        return [];
      }
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