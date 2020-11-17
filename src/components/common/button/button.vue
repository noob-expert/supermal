<template>
<div class="buttoncheck" :class="{active:isActive}"></div>
</template>

<script>
export default {
    name:'buttoncheck',
    props:{
        isActive:{
          type:Boolean,
          default(){
            return false
          }
    }
    },
    beforeUpdate(){
      // 这里做调试用
      // console.log(this.isActive);
    }

}
</script>

<style scoped>
.buttoncheck {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  /* background: red; */
  border: 1px solid gray;
  border-radius: 50%;
}
.active {
  background: var(--color-high-text);
  border: 2px solid gray;
}
</style>