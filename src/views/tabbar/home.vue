<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper :banners="banners"></swiper>
    <Recommend :recommends="recommends"></Recommend>
    <featureview></featureview>
    <control-bar :bars="menus" @barindex="BarIndex"></control-bar>
    <!-- 这里注意单引号双引号不能同时用，如果同时用需要转义 -->
    <goods-list :goods="showGoods(BarType)"></goods-list>
  </div>
</template>

<script>
// 统一导入公共组件
import NavBar from "@/components/common/tabbar/NavBar.vue";
import ControlBar from "@/components/content/controlbar/ControlBar.vue";

// 统一导入子组件
import Recommend from "@/views/tabbar/childrenhome/recommend.vue";
import swiper from "@/views/tabbar/childrenhome/swiper.vue";
import featureview from "@/views/tabbar/childrenhome/featureview.vue";
import GoodsList from "@/views/tabbar/childrenhome/goodslist.vue";

// 统一导入网络接口
import { getHomeMultidata } from "@/network/home.js";
import { getHomeGoods } from "@/network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    ControlBar,
    Recommend,
    swiper,
    featureview,
    GoodsList,
  },
  data() {
    return {
      // 存储请求过来的数据;因为如果放在then函数中则调用后即被回收
      banners: [],
      recommends: [],
      menus: ["流行", "新款", "精选"],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      BarType: "pop",
    };
  },

  created() {
    // 请求多个数据，这里记得要加this，否则会返错未定义
    this.GetHomeMultidata();

    this.GetHomeGoods("pop");
    this.GetHomeGoods("new");
    this.GetHomeGoods("sell");
  },

  // 将生命周期相关的函数都放在methods中，然后created()中统一调用
  methods: {
    GetHomeMultidata() {
      return getHomeMultidata().then((res) => {
        // 这里有个知识点，箭头函数中的this指向的是组件，而非调用的对象
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    GetHomeGoods(type) {
      // 确定page关系
      const page = this.goods[type].page + 1;
      return getHomeGoods(type, page).then((res) => {
        // 问题：如何把result中的list添加到goods中。答案：利用扩展运算符，然后push
        this.goods[type].list.push(...res.data.data.list)
      });
    },
    BarIndex(barindex) {
      switch (barindex) {
        case 0:
          this.BarType = "pop";
          break;
        case 1:
          this.BarType = "new";
          break;
        case 2:
          this.BarType = "sell";
          break;
      }
    },
    showGoods(type) {
      return this.goods[type].list;
    },
  },

  // 计算属性，用于传入数据
  computed: {},
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>