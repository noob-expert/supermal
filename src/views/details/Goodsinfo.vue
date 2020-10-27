<template>
  <div class="GoodsInfo">
    <div class="title">
      {{ goods.title }}
    </div>
    <div class="price">
      <div class="newprice">{{ goods.newPrice }}</div>
      <div class="oldprice"><del>{{ goods.oldPrice }}</del></div>
      <div class="discount">{{ goods.discount }}</div>
    </div>
    <!-- 这里添加v-if条件判断是为了防止异步加载过快导致的返错无法找到0问题 -->
    <div class="columns" v-if="goods.columns">
      <div>{{ goods.columns[0] }}</div>
      <div>{{ goods.columns[1] }}</div>
      <div>{{ goods.services[3].name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.GoodsInfo {
  padding: 5px;
}
.title {
  margin: 8px 0;
  font-size: 18px;
  font-weight: bold;
}
.price {
  display: flex;
}
.newprice {
  font-size: 20px;
  margin: 0 3px;
  color: coral;
  font-weight: bold;
}
.oldprice {
  font-size: 12px;
  margin-top:10px;
  margin-left: 3px;
  margin-right: 3px;
}
.discount {
  background: rgb(238,125,140);
  border:1px solid pink;
  border-radius: 25%; 
  color:white;
  /* text-align: center; */
}
.columns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  font-weight: lighter;
}
</style>