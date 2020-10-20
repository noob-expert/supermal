<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper :banners="banners"></swiper>
    <Recommend :recommends="recommends"></Recommend>
  </div>
</template>

<script>
import NavBar from "@/components/common/tabbar/NavBar.vue";

import { getHomeMultidata } from "@/network/home.js";

import swiper from "@/views/tabbar/childrenhome/swiper.vue";
import Recommend from "@/views/tabbar/childrenhome/recommend.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    swiper,
    Recommend
  },
  data() {
    return {
      // 存储请求过来的数据;因为如果放在then函数中则调用后即被回收
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      // 这里有个知识点，箭头函数中的this指向的是组件，而非调用的对象
      this.banners=res.data.data.banner.list;
      this.recommends=res.data.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>