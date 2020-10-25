<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <control-bar
      :bars="menus"
      @barindex="BarIndex"
      v-show="arriveTop"
      :class="{ active: arriveTop }"
      ref="controlbar2"
    ></control-bar>
    <!-- probeType属性要加v-bind绑定，不然传递的就永远是一个object -->
    <scroll
      class="content"
      :probeType="3"
      ref="scrolloutside"
      @getPosition="CurrentPosition"
      @pullup="loadMore"
    >
      <swiper :banners="banners" @swiperImgLoad="swiperLoad"></swiper>
      <Recommend :recommends="recommends"></Recommend>
      <featureview></featureview>
      <control-bar
        :bars="menus"
        @barindex="BarIndex"
        ref="controlbar1"
      ></control-bar>
      <!-- 注意单引号双引号不能同时用，如果同时用需要转义 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 监听组件的根元素的原生需要使用.native修饰符 -->
    <backtop @click.native="backtopClick()" v-show="isShow"></backtop>
  </div>
</template>

<script>
// 统一导入公共组件
import NavBar from "@/components/common/tabbar/NavBar.vue";
import ControlBar from "@/components/content/controlbar/ControlBar.vue";
import scroll from "@/components/common/scroll/scroll.vue";
import backtop from "@/components/content/backtop/backtop.vue";
import { debounce } from "@/components/common/tool/debounce.js";

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
    scroll,
    backtop,
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
      isShow: false,
      // 处理control-bar吸顶效果参数
      controlbarTop: 0,
      arriveTop: false,
      saveY:0
    };
  },

  created() {
    // 请求多个数据，这里记得要加this，否则会返错未定义
    this.GetHomeMultidata();

    this.GetHomeGoods("pop");
    this.GetHomeGoods("new");
    this.GetHomeGoods("sell");
  },
activated(){
console.log("activated");
this.$refs.scrolloutside.scrollTo(0,this.saveY)
},
deactivated(){
// console.log("deactivated");
// 方法二：也可以在CurrentPosition(Y)中设置跟踪saveY的值
this.saveY=this.$refs.scrolloutside.getScrollY();
// console.log(this.saveY);
},
destroyed(){
console.log("destroyed");
},
  mounted() {
    // 增加防抖函数处理
    const refresh = debounce(this.$refs.scrolloutside.refresh, 50);
    // 监听事件总线的执行事件；注意不要放在created生命周期函数中，否则有时会返错访问不到
    this.$bus.$on("imgload", () => {
      // 每次监听到后，执行一次刷新
      // this.$refs.scrolloutside.refresh()
      refresh();
    });

    // const refresh=this.debounce(this.$refs.scrolloutside.refresh,500)
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
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
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
      // 处理2个吸顶效果的index保持一致问题
      this.$refs.controlbar2.currentIndex=barindex;
      this.$refs.controlbar1.currentIndex=barindex;
    },
    backtopClick() {
      this.$refs.scrolloutside.scrollTo(0, 0, 500);
    },
    CurrentPosition(Y) {
      // 判断backtop是否显示
      this.isShow = -Y > 500;
      // 判断control bar是否吸顶,这里要处理顶部Nav-bar的高度44px？
      this.arriveTop = -Y > this.controlbarTop  ? true : false;

      // 切换页面时记录当前的Y值
      // this.saveY=Y
    },

    // 监听到上拉加载更多
    loadMore() {
      // 加载当前列表的第2页
      this.GetHomeGoods(this.BarType);
      // 刷新页面（防止异步加载问题)--在第一加载时可以通过事件总线处解决
      this.$refs.scrolloutside.refresh();
      // 结束当前，继续下一次加载更多
      this.$refs.scrolloutside.finishPull();
    },

    swiperLoad() {
      // control-bar offsetTop的值
      // console.log(this.$refs.controlbar.$el.offsetTop);
      this.controlbarTop = this.$refs.controlbar1.$el.offsetTop;
    },
  },

  // 计算属性，用于传入数据
  computed: {
    showGoods() {
      return this.goods[this.BarType].list;
    },
  },
};
</script>

<style scoped>
#home {
  /* margin-top:44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
.content {
  overflow: hidden;
  /* position:absolute; */
  /* 这里高度设置还是有些遗留问题，同时会出现无法加载下一页的问题 */
  /* height: calc(100%-93px); 无法点击滚动了*/
  height: 900px;
}

/* 吸顶效果 */
.active {
  position: relative;
  top: 44px;
  z-index: 3;
}
</style>