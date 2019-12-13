<template>
  <div class="sidebar">
    <div class="card" style="min-height:320px;max-height:350px;">
      <div class="title">植物本底</div>
      <div class="content">
        <ve-histogram :data="chartData" height="320px"></ve-histogram>
      </div>
    </div>

    <div class="card">
      <div class="title">株数统计</div>
      <div class="content"></div>
    </div>
    <div class="card" style="max-height:200px">
      <div class="title">活动事件</div>
      <div class="content">
        
      </div>
    </div>
  </div>
</template>

<script>
import { loadRemoteFile } from "../../utils/util";
export default {
  components: {},
  data() {
    return {
      address: this.$route.params.address,
      currentPointData: []
    };
  },
  created() {
    loadRemoteFile(`${this.base_url}植物本底.xlsx`).then(data => {
      this.currentPointData = data[0].filter(
        el => el["监测地点"] == this.address
      );
    });
  },
  computed: {
    chartData() {
      return {
        columns: ["年份", "科", "属", "种"],
        rows: this.currentPointData
      };
    }
  },
  methods: {}
};
</script>

<style>
</style>