<template>
  <div class="goodslistitem">
      <a :href="item.clientUrl">
      <img :src="item.show.img" alt="" @load="imgload" @click="imgClick">
      <p>{{item.title}}<br>
      <span>{{item.price | showPrice}}</span></p>
      </a>
  </div>

  </select>
</template>


<script>
export default {
    name:"GoodslistItem",
    props:{
       item:Object
    },
    filters:{
        showPrice(price){
            const nprice=parseFloat(price);
            return "€"+nprice.toFixed(2)
        }
    },
    methods:{
        imgload(){
            // console.log("----");
            // 发送事件到事件总线
            this.$bus.$emit("imgload")
        },
        // 点击切换到详情页
        imgClick(){
            this.$router.push("/details"+)
        }
    }
}
</script>

<style>
.goodslistitem{
    text-align: center;
    font-size:14px;
    position:relative;
    padding-bottom: 84px;
    width:170px;
    /* overflow: hidden; */

}
.goodslistitem img{
    width:100%
}
.goodslistitem p{
    height: 84px;
    vertical-align: center;
    position: absolute;
    /* width: 100px; */
    bottom:0;
}
.goodslistitem span{
    color: red;
}
</style>