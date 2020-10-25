<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroll",
  data() {
    return {
      scrol: null,
      message: "hellp",
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  // created是在组件创建完后调用，此时html/DOM还没有渲染，因此无法识别到
  // 应该用mounted
  mounted() {
    //   this.$refs.refname可以唯一获取当前组件下的固定属性
    this.scrol = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: true,
    });

    this.scrol.on("scroll", (position) => {
      // console.log(position.y);
      this.$emit("getPosition", position.y);
    });

    this.scrol.scrollTo(0,0);

    this.scrol.on("pullingUp", () => {
      this.$emit("pullup");
    });
  },
  methods: {
    // getPosition(){
    //   this.scrol.on("scroll",(position)=>{
    //     // console.log(position);
    //   })
    // },
    scrollTo(x, y, time = 300) {
      // 逻辑与判断this.scrol是否存在，如果为null直接返回
      this.scrol && this.scrol.scrollTo(x, y, time);
    },
    finishPull() {
      this.scrol && this.scrol.finishPullUp();
    },
    // 刷新操作
    refresh() {
      this.scrol && this.scrol.refresh();
      // console.log("----");
    },

    // 获取srollY
    getScrollY(){
      return this.scrol ? this.scrol.y : 0
    }
  },
};
</script>

<style scoped>
</style>