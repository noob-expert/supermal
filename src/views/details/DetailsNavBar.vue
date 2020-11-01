<template>
  <div class="DetailsNavBar">
    <div
      v-for="(item, index) in title"
      :key="index"
      @click="itemClick(index)"
      :class="{ active: currentIndex == index }"
    >
      <!--犯的低级错误： 上面currentIndex = index,是判断，不是赋值 -->
      <div>{{ item }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DetailsNavBar",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick",this.currentIndex)
      //   console.log(this.currentIndex);
    },
  },
};
</script>

<style scoped>
.DetailsNavBar {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  width: 250px;
}

.active {
  color: red;
}
</style>