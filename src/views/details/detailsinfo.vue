<template>
  <div class="detailsiNfo">
      <div v-for="(item,index) in detailsInfo.detailImage" :key="index">
        <div class="desc">{{item.desc}}</div>
        <div class="keyword">{{item.key}}</div>
        <div v-for="(imglist,indexa) in item.list" :key="indexa" >
          <img :src="imglist" alt="" @load="imgLoad">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "detailsInfo",
  props: {
    detailsInfo: Object,
  },
  methods:{
    imgLoad(){
      this.$emit("imgLoad");
    }
  }
};
</script>

<style scoped>
.detailsiNfo{
  padding: 20px;
}
.detailsiNfo img{
  width:100%;
  height: 100%;
  margin:10px 0;
  /* height:250px ; */
}
.keyword{
  text-align: center;
  color: var(--color-high-text);
}

</style>