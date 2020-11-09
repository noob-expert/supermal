<template>
<div class="class">
    <ul>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
    </ul>
</div>

</template>

<script>
import {getCategory} from "@/network/category.js"

export default {
    name:"Class",
    data(){
        return{
          
        }
    },
    created(){
        this.GetCategory()
    },
    methods:{
     GetCategory() {
      return getCategory().then((res) => {
        console.log(res);
      });
    },
    }

}
</script>

<style>

</style>