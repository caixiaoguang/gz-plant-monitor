<template>
  <div class="nav">
    <div class="web-font title" @click="goHome">
      <i class="home iconfont icon-zhuye"></i>
      <!-- <span v-if="!isHome">贵州省农业外来入侵植物监测台</span> -->
      <!-- <span v-else>{{subTitle}}</span> -->
    </div>
    <div class="tool">
      <el-tooltip class="item" effect="dark" content="全屏" v-if="!isFullScreen">
        <i class="iconfont icon-quanping" @click="fullScreen"></i>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="退出全屏" v-else>
        <i class="iconfont icon-quitquanping" @click="exitFullscreen"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import bus from "../utils/bus";
export default {
  data() {
    return { subTitle: "", isFullScreen: false };
  },
  computed: {
    isHome() {
      return this.$route.name === "monitorDetail";
    }
  },
  mounted() {
    bus.$on("getSubTitle", e => {
      this.subTitle = e;
    });
  },
  methods: {
    goHome() {
      if (!(this.$route.path == "/monitor-console")) {
        this.$router.push("/");
      }
    },
    fullScreen() {
      let ele = document.body;
      if (ele.requestFullscreen) {
        ele.requestFullscreen();
      } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
      } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
      } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
      }
      this.isFullScreen = true;
    },
    exitFullscreen() {
      if (document.exitFullScreen) {
        document.exitFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (element.msExitFullscreen) {
        element.msExitFullscreen();
      }
      this.isFullScreen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.nav {
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  color: $primaryColor;
  border-bottom: 1px solid $primaryColor;
  display: flex;
  justify-content: space-between;
  .title {
    margin-left: 10px;
    line-height: 42px;
    cursor: pointer;
    .home {
      font-size: 40px;
      margin-right: 10px;
    }
  }
  .tool {
    margin-right: 20px;
    cursor: pointer;
    i {
      font-size: 25px;
    }
    .iconfont {
      &:hover {
        color: green;
      }
    }
  }
  .sub-title {
    line-height: 75px;
    margin-left: 10px;
  }
}
</style>