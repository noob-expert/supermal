<template>
    <div id="tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"Tabbar"
}
</script>

<style>
/* 设置tabbar样式 */
#tabbar{
    display:flex;
    justify-content: space-around;
    background-color: #f6f6f6;
    /* 设置绝对定位后，不设置宽度就挤到一起了，弹性盒失效？ */
    width: 100%; 
    font-size:12px;
    padding-top:2px;
    position: fixed;
    bottom:0;
    box-shadow: 0 -2px 1px rgba(1, 9, 9, .4);
    z-index: 5;
}
</style>