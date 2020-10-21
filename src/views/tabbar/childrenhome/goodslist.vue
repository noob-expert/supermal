<template>
  <div class="goodslist">
    <div v-for="(item, index) in goods" :key="index">
      <goods-list-item :item="item"></goods-list-item>
    </div>
  </div>
</template>

<script>
import GoodsListItem from "./goodslistitem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>

<style>
.goodslist {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>