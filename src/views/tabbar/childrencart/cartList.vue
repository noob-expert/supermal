<template>
  <div class="cartList">
    <div v-for="(item, index) in Item" :key="index" class="ListItem">
    <buttoncheck :isActive="item.checked" @click.native="btnClick(item)"></buttoncheck>
      <div class="itemimg">
        <img :src="item.image" alt="" />
      </div>
      <div class="iteminfo">
        <div class="itemtitle">
          <p>{{ item.title }}</p>
        </div>
        <div class="itemdesc">
          <p>{{ item.desc }}</p>
        </div>
        <div class="itemprice">
          <p class="newprice">{{ item.newPrice | showPrice }}</p>
          <p>x{{ item.count }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import buttoncheck from "@/components/common/button/button"


export default {
  name: "cartList",
  data() {
    return {
    };
  },
  components:{
      buttoncheck
  },
  computed: {
    ...mapGetters({
      Item: "getItem",
    }),
    // isActive(){
    //     return 
    // }
  },
  methods: {
    btnClick(item) {
        console.log(item.checked);
        console.log(item);
        // item.checked =! item.checked
    },
  },
  props: {},
  filters: {
    showPrice(price) {
      //   console.log(typeof price);//string
      return "￥" + parseFloat(price).toFixed(2);
    },
  },
};
</script>

<style scoped>
.ListItem {
  height: 120px;
  display: flex;
  overflow: hidden;
  padding: 15px 15px 15px 10px;
}

.ListItem img {
  margin-left: 5px;
  width: 90px;
  height: 120px;
}
.iteminfo {
  margin-left: 20px;
  /* width:100%; */
  width: 220px;
}
.itemtitle,
.itemdesc {
  width: 100%;
  overflow: hidden;
  /* 文本不换行 */
  white-space: nowrap;
  text-overflow: ellipsis;
}
.itemtitle {
  font-weight: bold;
  font-size: 18px;
}
.itemdesc {
  margin-top: 15px;
  font-size: 14px;
}
.itemprice {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.newprice {
  color: var(--color-high-text);
  font-size: 16px;
}
</style>