<template>
  <div class="home">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import AppMain from "./AppMain";
export default {
  name: "home",
  components: {
    Navbar,
    AppMain
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
}
</style>
