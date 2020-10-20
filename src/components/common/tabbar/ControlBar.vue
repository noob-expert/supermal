<template>
  <div id="ControlBar">
    <div
      class="controlbaritem"
      v-for="(item, index) in bars"
      :key="index"
      :class="{ activecolor: currentIndex == index }"
      @click="btnClick(index)"
    >
      <!-- 判断绑定和激活状态 -->
      <div>{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ControlBar",
  data() {
    return {
        currentIndex:0
    };
  },
  props: {
    bars: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{
      btnClick(index){
          this.currentIndex = index
      }
  }
};
</script>

<style>
#ControlBar {
  display: flex;
  justify-content: space-around;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  text-align: center;
  background-color: #fff;
  position:sticky;
  left:0;
  top: 44px;
}
.activecolor {
    color:red;
    border-bottom:1px solid red
}
</style>