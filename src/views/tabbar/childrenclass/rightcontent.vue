<template>
  <div class="rightcontent">
      <div v-for="(item,index) in content" :key="index"
      class="itemcontent">
          <img :src="item.image" alt="" @load="imgload">
          <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name:"rightcontent",
    props:{
        content:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        imgload(){
            this.$emit("contentload")
        }
    }
}
</script>

<style scoped>
.rightcontent{
    display: flex;
    flex-flow: row wrap;
    width:280px;
    text-align: center;
}
.itemcontent{
    width:140px;
}
.rightcontent img{
    width:80%;
    height:80%;
}
</style>