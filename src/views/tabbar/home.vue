<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper :banners="banners"></swiper>
    <Recommend :recommends="recommends"></Recommend>
    <featureview></featureview>
    <control-bar :bars="menus"></control-bar>
  </div>
</template>

<script>
// 统一导入公共组件
import NavBar from "@/components/common/tabbar/NavBar.vue";
import ControlBar from "@/components/common/tabbar/ControlBar.vue"

// 统一导入子组件
import Recommend from "@/views/tabbar/childrenhome/recommend.vue";
import swiper from "@/views/tabbar/childrenhome/swiper.vue";
import featureview from "@/views/tabbar/childrenhome/featureview.vue";

// 统一导入网络接口
import { getHomeMultidata } from "@/network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    ControlBar,
    Recommend,
    swiper,
    featureview,
  },
  data() {
    return {
      // 存储请求过来的数据;因为如果放在then函数中则调用后即被回收
      banners: [],
      recommends: [],
      menus:["流行","新款","精选"]
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      // 这里有个知识点，箭头函数中的this指向的是组件，而非调用的对象
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
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