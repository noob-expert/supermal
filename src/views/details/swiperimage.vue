<template>
  <div id="sss">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in topImage"
        :key="index"
      >
        <img :src="item" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 分页 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <!-- 箭头左 -->
      <div class="swiper-button-next" slot="button-next"></div>
      <!-- 箭头右 -->
    </swiper>
  </div>
</template>

<script>
export default {
  // 存在遗留问题：切换速度过快
  name: "swiperImage",
  props: {
    topImage: Array,
  },
  components: {},
  data() {
    return {
      // slide: [1, 2, 3, 4, 5],
      //设置属性
      swiperOption: {
        autoplay: 2000, //逗号结尾
        /*自动切换的时间间隔(单位ms),不写不自动切换
        类型:数字 默认是0*/
        initialSlide: 0,
        /*设定初始化时的slide索引(默认显示第几张)  类型:数字   索引从0开始*/
        direction: "horizontal",
        /*滑动的方向 可以是水平,垂直可选值horizontal,vertical*/
        speed: 1000,
        /*滑动速度,自动滑动开始到结束的时间(ms)   类型:数字    默认:300配合autoplay*/
        autoplayDisabledOninteraction: true,
        /*用户操作swiper,是否禁止autoplay 操作:触碰 拖动 点击 (分页)默认是true  可选的值false*/
        autoplayStopOnLast:false,
        /*切换到最后一个slide停止自动切换 ps:loop时无效   默认:false不停*/
         grabCursor: true,
        /*  鼠标指针形状(鼠标覆盖的时候是手,拖动的时候是抓手)  可选值:true false  默认:flase没有抓手*/
        effect: "slider",
        pagination: ".swiper-pagination",
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        loop: true
      },
    }
  },
  methods: {},
};
</script>

<style>
#sss {
  padding-top: 44px;
}
img {
  width: 100%;
  height: 22rem;
  background-size: 100% 100%;
}
.swiper-slide {
  width: 100%;
  height: 22rem;
  line-height: 12rem;
  font-size: 0.3rem;
  text-align: center;
  background-color: rosybrown;
}
.swiper-button-prev,
.swiper-button-next {
  height: 0.4rem;
  width: 0.55rem;
}
.swiper-button-prev {
  left: 0.3rem;
  /* background-image: url(""); 可以修改切换的图标*/
}
.swiper-button-next {
  right: 0.3rem;
  /* background-image: url(""); 可以修改切换的图标*/
}
/* 修改底部小圆点的位置 */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  height: 0.5rem;
  line-height: 0.4rem;
  bottom: 0.1rem;
}
/* 修改小圆点未激活样式 */
.swiper-pagination-bullet {
  background-color: green;
}
/* 修改小圆点激活样式 */
.swiper-pagination-bullet-active {
  background-color: yellow;
}
</style>