<template>
  <div class="cartList">
    <div v-for="(item, index) in getItem" :key="index" >
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
    // ...mapGetters({
    //   ItemAll: "getItem"
    // }),
        ...mapGetters(["getItem"]),
    // isActive(){
    //     return 
    // }
  }
};
</script>

<style scoped>

</style>