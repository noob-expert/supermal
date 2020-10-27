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
        //显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        //自动轮播
        autoplay: {
          delay: 2000,
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true,
      },
      // 控制swiperImgLoad只回调一次
      isLoad: true,
    };
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