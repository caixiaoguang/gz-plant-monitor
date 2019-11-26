<template>
  <el-scrollbar>
    <div class="sidebar">
      <div class="title">监测点介绍</div>
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            发生环境
            <i class="header-icon el-icon-info"></i>
          </template>
          <div>{{detail?detail['发生生境']:''}}</div>
        </el-collapse-item>
        <el-collapse-item title="危害情况">
          <div>{{detail?detail['危害情况']:''}}</div>
        </el-collapse-item>
        <el-collapse-item title="发生面积">
          <div>{{detail?detail['发生面积（公顷）']:''}}（公顷）</div>
        </el-collapse-item>
        <el-collapse-item title="影响">
          <div></div>
        </el-collapse-item>
        <el-collapse-item title="治理措施">
          <div>{{detail?detail['治理措施']:''}}</div>
        </el-collapse-item>
        <el-collapse-item title="治理效果">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>

      <div class="block img-list">
        <el-carousel height="200px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img :src="require(`../../assets/img/${item}.jpg`)" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  props: {
    detail: { type: Object }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  .img-list {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 25vw;
    padding: 5px;
  }
  img {
    width: 25vw;
  }
}
</style>