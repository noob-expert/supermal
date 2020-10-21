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
    };
  },
  // created是在组件创建完后调用，此时html/DOM还没有渲染，因此无法识别到
  // 应该用mounted
  mounted() {
    //   this.$refs.refname可以唯一获取当前组件下的固定属性
    this.scrol = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true,
      pullUpLoad: true,
    });
  },
};
</script>

<style scoped>
</style>