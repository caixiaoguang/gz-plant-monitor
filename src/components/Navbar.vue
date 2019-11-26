<template>
  <div class="nav">
    <el-button size="mini" type="info" v-if="isList" @click="$router.go(-1)">返回</el-button>
    贵州省外来入侵植物监测系统
  </div>
</template>

<script>
export default {
  computed: {
    isList() {
      return this.$route.path === "/monitor-detail";
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  height: 50px;
  background-color: #444444;
  color: #fff;
  text-align: center;
  line-height: 50px;
  position: relative;
  font-size: 24px;
  .el-button {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
}
</style>