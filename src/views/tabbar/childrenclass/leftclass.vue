<template>
  <ul class="leftclass">
    <li v-for="(item, index) in title" :key="index"
    class="leftclass-item"
    @click="itemClick(index)"
    :class="{active:currentIndex == index}">
      {{ item.title }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "LeftClass",
  data(){
      return{
          currentIndex:0
      }
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{
      itemClick(index){
          this.currentIndex=index;
          this.$emit("itemClick",index)
      }
  }
};
</script>

<style scoped>
.leftclass{
    width:80px;
    background:rgb(247,245,247);
}
.leftclass-item{
    line-height: 40px;
    text-align: center;
}
.active{
    background: white;
    color:var(--color-high-text);
    font-weight: bold;
    border-left: 2px solid var(--color-tint);
}
</style>