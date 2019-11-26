<template>
  <div class="sidebar">
    <div class="title">植物本底</div>
    <div class="article"></div>
    <el-divider></el-divider>
    <div class="title">株数</div>
    <div class="article"></div>
    <el-divider></el-divider>

    <div class="title">监测点详情</div>
    <div class="article">
      <el-button size="mini" @click="$emit('preview')">预览</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>