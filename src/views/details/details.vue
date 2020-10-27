<template>
  <div class="details">
    <nav-bar>
      <img
        src="~@/assets/img/details/back.png"
        alt="back"
        slot="left"
        class="backimg"
        @click="backClick"
      />
      <div slot="center">
        <details-nav-bar :title="title"></details-nav-bar>
      </div>
    </nav-bar>
    <swiper-image :topImage="topImages"></swiper-image>
    <goods-info :goods="goods"></goods-info>
    <shops-info :shops="shops"></shops-info>
  </div>
</template>

<script>
// 获取子组件
import NavBar from "@/components/common/tabbar/NavBar.vue";
import DetailsNavBar from "./DetailsNavBar";
import SwiperImage from "./swiperimage";
import GoodsInfo from "./Goodsinfo";
import ShopsInfo from "./Shopinfo";

// 获取请求数据
import { getDetail, Goods, Shops } from "@/network/details.js";

export default {
  name: "Details",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      id: null,
      topImages: [],
      goods: {},
      shops: {},
    };
  },
  components: {
    NavBar,
    DetailsNavBar,
    SwiperImage,
    GoodsInfo,
    ShopsInfo,
  },
  created() {
    // 保存传入的id
    this.id = this.$route.params.id;
    // console.log(this.id);
    // 获取轮播图数据
    getDetail(this.id).then((res) => {
      this.topImages = res.data.result.itemInfo.topImages;
      // console.log(this.topImages)
      console.log(res);
      // 获取商品信息
      this.goods = new Goods(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo.services
      );
      console.log(this.goods);
      // 获取商家店铺信息
      this.shops = new Shops(res.data.result.shopInfo);
      console.log(this.shops);
      // this.shops=new Shops()
    });
  },
  methods: {
    backClick() {
      //   因为跳转时使用的是push，所以可以使用go/forward来返回
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.backimg {
  width: 25px;
  height: 25px;
  margin-top: 10px;
}
</style>