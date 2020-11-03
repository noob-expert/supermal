<template>
<div class="toast" v-show="isShow">
    <div>{{message}}</div>
</div>
</template>

<script>
export default {
    name:"Toast",
    data(){
        return {
            message:"",
            isShow:false
        }
    },
    methods:{
        show(message,duration){
            this.isShow=true;
            this.message=message;

            setTimeout(()=>{
                this.isShow=false;
                this.message=""
            },duration)
        }
    }
}
</script>

<style>

</style>