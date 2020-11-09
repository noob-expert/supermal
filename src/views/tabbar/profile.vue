<template>
<div id="profile">
    <div class="my-profile">
    <img src="~@/assets/img/profile/profile.jpg" alt="">
    <p>煲仔饭</p>
    </div>


</div>
</template>

<script>
export default {
    name:"Profile"
}
</script>

<style scoped>
#profile{
    position: relative;
    width:100%;
    height: 600px;
    /* background: url("~@/assets/img/profile/backg.jpg") ; */
}
.my-profile{
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    font-size:18px
}
.my-profile img{
    width:50%;
    height: 50%;
}


</style>