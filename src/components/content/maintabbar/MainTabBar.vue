<template>
<div id="MainTabBar">
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="~@/assets/img/tabbar/1.jpg" alt="">
      <img slot="item-icon-active" src="~@/assets/img/tabbar/2.jpg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
        <tab-bar-item path="/class" activeColor="red">
      <img slot="item-icon" src="~@/assets/img/tabbar/2.jpg" alt="">
      <img slot="item-icon-active" src="~@/assets/img/tabbar/3.jpg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="red">
      <img slot="item-icon" src="~@/assets/img/tabbar/3.jpg" alt="">
      <img slot="item-icon-active" src="~@/assets/img/tabbar/4.jpg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon" src="~@/assets/img/tabbar/4.jpg" alt="">
      <img slot="item-icon-active" src="~@/assets/img/tabbar/5.jpg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar"
import TabBarItem from "@/components/common/tabbar/TabbarItem"

export default {
    name:"MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
}
</script>

<style>
@import "~@/assets/css/base.css"
</style>