<template>
  <div class="bottombar">
    <div class="customerservice">
      <img src="~@/assets/img/bottombar/1.jpg" alt="" class="customerimg" />
      <div>客服</div>
    </div>
    <div class="shop">
      <img src="~@/assets/img/bottombar/2.jpg" alt="" class="shopimg" />
      <div>店铺</div>
    </div>
    <div class="collect">
      <img src="~@/assets/img/bottombar/3.jpg" alt="" class="collectimg" />
      <div>收藏</div>
    </div>
    <div class="info">
    <div class="cart" @click="cartClick">
      <p>加入购物车</p>
    </div>
    <div class="purchase">
      <p>购买</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  props: {},
  methods:{
      cartClick(){
          this.$emit("cartClick")
      }
  }
};
</script>

<style scoped>
.bottombar {
  /* width: 100%; */
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 14px;
}
.info{
    display: flex;
}
.customerservice,
.shop,
.collect {
  text-align: center;
}
.bottombar img {
  width: 20px;
  height: 20px;
}
.cart,
.purchase {
  /* vertical-align: center; */
  line-height: 40px;
}
.cart{
    width: 100px;
    background: rgb(253,220,12);
    text-align: center;
    font-weight: bold;
    padding: 0 2px;
}
.purchase{
    width: 80px;
    background: rgb(253,117,153);
    color: white;
        font-weight: bold;
    padding: 0 5px;
    text-align: center;
}
</style>