<template>
  <div class="cartList">
    <div v-for="(item, index) in Item" :key="index" >
    <CartListItem :iteminfo="item"></CartListItem>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CartListItem from "./cartListItem"

export default {
  name: "cartList",
  data() {
    return {
    };
  },
  components:{
      CartListItem
  },
  computed: {
    ...mapGetters({
      Item: "getItem"
    }),
    // isActive(){
    //     return 
    // }
  }
};
</script>

<style scoped>

</style>