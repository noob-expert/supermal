<template>
  <div id="app">
    <!-- <router-link to="/home">首页</router-link> -->
    <!-- <router-view></router-view> -->
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/maintabbar/MainTabBar"

export default {
  name:"App",
  components:{
    MainTabBar
  }
}
</script>
<style>
</style>