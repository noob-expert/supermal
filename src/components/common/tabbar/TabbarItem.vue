<template>
  <div @click="btnClick" class="Tabbaritem">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div v-bind:style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabbaritem",
  props:{
    //   给子组件传入未在子组件中定义的属性时，需要设置props属性
      path:String,
      activeColor:{
          type:String,
          default:"red"
      }
  },
  data() {
    return {
    };
  },
  computed: {
    //   很经典的判断激活状态的例子
    isActive() {
      //  /homr -> item1(/home)
      return this.$route.path.indexOf(this.path) !== -1;
    },
    // 解决激活状态下颜色问题，牛逼！！！
    activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    btnClick() {
        // console.log(this.path);
        this.$router.replace(this.path).catch((err)=>err)
    },
  },
};
</script>

<style>
</style>