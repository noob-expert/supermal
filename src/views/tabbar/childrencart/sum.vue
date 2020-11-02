<template>
  <div id="sum">
    <div class="info">
      <buttoncheck :isActive="isSelectAll" @click.native="allcheckClick()"></buttoncheck>
      <p>全选</p>
      <p class="sumprice">合计:{{ TotalPrice | showPrice }}</p>
    </div>
    <p class="calc">去计算:{{ checkLength }}</p>
  </div>
</template>

<script>
import buttoncheck from "@/components/common/button/button";
import { mapGetters } from "vuex";

export default {
  name: "Sum",
  components: {
    buttoncheck,
  },
  computed: {
    ...mapGetters({
      TotalItem: "getItem",
      TotalPrice: "getTotalPrice",
      checkLength: "getCount",
    }),
    isSelectAll() {
      // niubility，这里学到了
      if (this.TotalItem.length === 0) {
        return false;
      } else {
        return !this.TotalItem.find((item) => !item.checked);
      }
    },
  },
  filters: {
    showPrice(price) {
      //   console.log(typeof price);//string
      return "￥" + parseFloat(price).toFixed(2);
    },
  },
  methods:{
      allcheckClick(){
          console.log("---");
          if(this.isSelectAll){ //全部选中
              for(let i of this.TotalItem){
                  i.checked=false
              }
          }else{ //未全部选中
              this.TotalItem.forEach(item=>item.checked=true)
          }
      }
  }
};
</script>

<style scoped>
#sum {
  font-size: 18px;
  line-height: 35px;
  display: flex;
  width: 100%;
  padding-left: 10px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 44px;
  background: rgb(238, 237, 239);
  /* position: relative; */
}
.info {
  display: flex;
  height: 35px;
}
.info .sumprice {
  margin-left: 15px;
}
.calc {
  width: 100px;
  background: rgb(255, 86, 16);
  color: white;
  text-align: center;
}
</style>