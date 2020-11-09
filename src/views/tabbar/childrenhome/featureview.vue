<template>
<div id="featureview">
    <a :href="href">
        <img src="~@/assets/img/tabbar/featureview.png" alt="">
    </a>
</div>
</template>

<script>
export default {
    name:"FeatureView",
    props:{
        href:{
            type:String,
            default(){
                return "https://act.mogujie.com/zzlx67"
            }
        }
    }
}
</script>

<style scoped>
#featureview img{
    height: 100%;
    width: 100%;
}
</style>