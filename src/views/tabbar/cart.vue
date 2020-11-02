<template>
  <div id="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{ showLength }})</div>
    </nav-bar>
    <div class="cartlist">
      <scroll :probeType="3"
      class="cartlistitem">
        <cart-list></cart-list>
      </scroll>
    </div>
    <Sum></Sum>
  </div>
</template>

<script>
// 获取公共组件
import NavBar from "@/components/common/tabbar/NavBar";
import scroll from "@/components/common/scroll/scroll";

// 获取子组件
import CartList from "@/views/tabbar/childrencart/cartList";
import Sum from "@/views/tabbar/childrencart/sum"

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    scroll,
    Sum
  },
  computed: {
    showLength() {
      return this.$store.getters.getLength;
    },
  },
};
</script>

<style scoped>
.navbar {
  background: var(--color-tint);
  color: white;
}

.cartlist {
  margin-top: 44px;
  height: 100vh;
  position: relative;
}

.cartlistitem {
  /* position: absolute;
  height: calc(100%-44-24); */
  height: 600px;
  overflow: hidden;
}
</style>