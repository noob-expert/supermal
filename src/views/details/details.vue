<template>
  <div class="details">
    <nav-bar class="nav-bar">
      <img
        src="~@/assets/img/details/back.png"
        alt="back"
        slot="left"
        class="backimg"
        @click="backClick"
      />
      <div slot="center">
        <details-nav-bar
          :title="title"
          @itemClick="itemsClick"
          ref="detailnavbar"
        ></details-nav-bar>
      </div>
    </nav-bar>
    <scroll
      class="content"
      :probeType="3"
      ref="scrolloutside"
      @getPosition="CurrentDetailPosition"
    >
      <swiper-image :topImage="topImages"></swiper-image>
      <goods-info :goods="goods"></goods-info>
      <shops-info :shops="shops"></shops-info>
      <details-info
        :details-info="detailInfo"
        @imgLoad="infoImgLoad"
      ></details-info>
      <goodsparam
        :goodsparam="goodsparam"
        ref="goodsparamlocation"
      ></goodsparam>
      <comments :comments="comment" ref="commentslocation"></comments>
      <recommends :goods="recommendsinfo" ref="recommendslocation"></recommends>
    </scroll>
    <bottom-bar @cartClick="cartclick"></bottom-bar>
    <backtop @click.native="backtopClick()" v-show="isShow"></backtop>
  </div>
</template>

<script>
// 获取公共组件
import scroll from "@/components/common/scroll/scroll";
import { debounce } from "@/components/common/tool/debounce.js";
import BottomBar from "@/components/common/botbar/BottomBar.vue";
import backtop from "@/components/content/backtop/backtop";
import { BackTopMixin } from "@/components/common/tool/mixin.js";
// 获取子组件
import NavBar from "@/components/common/tabbar/NavBar.vue";
import DetailsNavBar from "./DetailsNavBar";
import SwiperImage from "./swiperimage";
import GoodsInfo from "./Goodsinfo";
import ShopsInfo from "./Shopinfo";
import DetailsInfo from "./detailsinfo";
import goodsparam from "./Goodsparam";
import comments from "./comments";
import recommends from "@/components/content/goods/goodslist.vue";

// 获取请求数据
import {
  getDetail,
  getRecommend,
  Goods,
  Shops,
  GoodsParam,
  CartGoods
} from "@/network/details.js";

export default {
  name: "Details",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      id: null,
      topImages: [],
      goods: {},
      shops: {},
      detailInfo: {},
      goodsparam: {},
      comment: {},
      recommendsinfo: [],
      itemlocation: null,
      CartGoods:{}
    };
  },
  mixins: [BackTopMixin],
  components: {
    scroll,
    BottomBar,
    NavBar,
    DetailsNavBar,
    backtop,
    SwiperImage,
    GoodsInfo,
    ShopsInfo,
    DetailsInfo,
    goodsparam,
    comments,
    recommends,
  },
  created() {
    // 保存传入的id
    this.id = this.$route.params.id;
    // console.log(this.id);
    getDetail(this.id).then((res) => {
          // 获取轮播图数据
      this.topImages = res.data.result.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo.services
      );
      // 获取商家店铺信息
      this.shops = new Shops(res.data.result.shopInfo);
      // this.shops=new Shops()
      // 获取商品详细信息
      this.detailInfo = res.data.result.detailInfo;
      // 获取商品参数信息
      this.goodsparam = new GoodsParam(
        res.data.result.itemParams.info,
        res.data.result.itemParams.rule
      );
      // 获取评论信息
      this.comment = res.data.result.rate;
      // 获取添加到购物车的信息
      this.CartGoods=new CartGoods(
        res.data,
        res.data.result.itemInfo
      )
    });

    // 获取推荐数据
    getRecommend().then((res) => {
      this.recommendsinfo = res.data.data.list;
    });

    // 控制滚动到对应的内容时添加值
    this.itemlocation = debounce(() => {
      this.itemlocation = [];
      this.itemlocation.push(0);
      this.itemlocation.push(this.$refs.goodsparamlocation.$el.offsetTop);
      this.itemlocation.push(this.$refs.commentslocation.$el.offsetTop);
      this.itemlocation.push(this.$refs.recommendslocation.$el.offsetTop);
      this.itemlocation.push(Number.MAX_VALUE); //Number的最大值
    }, 100);
  },

  mounted() {
    // 增加防抖函数处理
    const refresh = debounce(this.$refs.scrolloutside.refresh, 50);
    // 监听事件总线的执行事件；注意不要放在created生命周期函数中，否则有时会返错访问不到
    this.$bus.$on("imgload", () => {
      // 每次监听到后，执行一次刷新
      // this.$refs.scrolloutside.refresh()
      refresh();
      this.itemlocation();
    });

    // const refresh=this.debounce(this.$refs.scrolloutside.refresh,500)
  },
  methods: {
    backClick() {
      //   因为跳转时使用的是push，所以可以使用go/forward来返回
      this.$router.go(-1);
    },
    infoImgLoad() {
      this.$refs.scrolloutside.refresh();
    },
    // 根据点击标题滚动到对应内容
    itemsClick(clickedindex) {
      this.$refs.scrolloutside.scrollTo(
        0,
        -this.itemlocation[clickedindex],
        200
      );
    },
    // 根据对应滚动内容切换标题样式
    CurrentDetailPosition(positionY) {
      // 方法一
      // if (
      //   -positionY >= this.itemlocation[0] &&
      //   -positionY < this.itemlocation[1]
      // ) {
      //   this.$refs.detailnavbar.currentIndex = 0;
      // } else if (
      //   -positionY >= this.itemlocation[1] &&
      //   -positionY < this.itemlocation[2]
      // ) {
      //   this.$refs.detailnavbar.currentIndex = 1;
      // } else if (
      //   -positionY >= this.itemlocation[2] &&
      //   -positionY < this.itemlocation[3]
      // ) {
      //   this.$refs.detailnavbar.currentIndex = 2;
      // } else if (-positionY >= this.itemlocation[3]) {
      //   this.$refs.detailnavbar.currentIndex = 3;
      // }
      // 方法二。 复杂条件的判断与优化
      for (let i = 0; i < this.itemlocation.length - 1; i++) {
        if (
          -positionY > this.itemlocation[i] &&
          -positionY < this.itemlocation[i + 1]
        ) {
          this.$refs.detailnavbar.currentIndex = i;
        }
      }

      // 判断什么时候backtop显示
      this.isShow = -positionY > 1000;
    },
      // 点击购物车
    cartclick() {
      // this.$store.commit("addCart",this.CartGoods)
    this.$store.dispatch('addGoods',this.CartGoods)
    this.$toast.show("已加入购物车",1000)

  },
  },
  


};
</script>

<style scoped>
.nav-bar {
  position: relative;
  z-index: 9;
  background: #fff;
}
.backimg {
  width: 25px;
  height: 25px;
  margin-top: 10px;
}
.details {
  position: relative;
  height: 100vh;
  z-index: 10;
  background: #fff;
}
.content {
  /* margin-top:44px; */
  overflow: hidden;
  height: 660px;
}


</style>