<template>
  <div class="ShopInfo">
    <header class="logo">
      <img :src="shops.logo" alt="" />
      <span class="child">{{ shops.name }}</span>
    </header>
    <div class="content">
      <article class="left">
        <div class="fans">{{ shops.fans }}</div>
        <div>单销量</div>
      </article>
      <article class="center">
        <div class="count">{{ shops.goodsCount }}</div>
        <div>全部宝贝</div>
      </article>

      <article class="right" v-if="shops.scroe">
        <div>
          {{ shops.scroe[0].name }}
          {{ shops.scroe[0].score }}
        </div>
        <div>
          {{ shops.scroe[1].name }}
          {{ shops.scroe[1].score }}
        </div>
        <div>
          {{ shops.scroe[2].name }}
          {{ shops.scroe[2].score }}
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
    shops: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.ShopInfo{
  border-top:1px solid gray;
  border-bottom:1px solid gray;
  padding: 15px 5px;
}

.logo {
  font-size: 14px;
  line-height: 50px;
  /* vertical-align: center; */
}
.logo img {
  width: 20%;
  height: 20%;
  border-radius: 50%;
  border: 1px solid black;
}
.logo .child{
  height:20px;
  line-height: 20px;
  text-align: center;
}
.content{
  display: flex;
  justify-content: space-around;
}

.left .fans,
.center .count {
  margin: 5px;
}
.right{
  width:100px
}
</style>