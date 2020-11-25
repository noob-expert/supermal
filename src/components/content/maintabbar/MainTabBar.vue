<template>

<div id="MainTabBar">
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <!-- <img slot="item-icon" src="~@/assets/img/tabbar/1.jpg" alt=""> -->
      <div  slot="item-icon" class="fas fa-home"></div>
      <div  slot="item-icon-active" class="fas fa-igloo"></div>
      <div slot="item-text">首页</div>
    </tab-bar-item>
        <tab-bar-item path="/class" activeColor="red">
      <!-- <img slot="item-icon" src="~@/assets/img/tabbar/2.jpg" alt=""> -->
       <div  slot="item-icon"class="fas fa-cogs"></div>
       <div  slot="item-icon-active"class="fas fa-database"></div>
      <div slot="item-text">分类</div>
    </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="red">
      <!-- <img slot="item-icon" src="~@/assets/img/tabbar/3.jpg" alt=""> -->
       <div slot="item-icon"class="fas fa-cart-arrow-down"></div>
       <div slot="item-icon-active"class="fas fa-shopping-cart"></div>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="red">
       <div  slot="item-icon" class="fas fa-address-book"></div>
       <div  slot="item-icon-active" class="fas fa-user"></div>
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
@import "~@/assets/css/base.css";
@import "~@/assets/css/css/all.css";
</style>