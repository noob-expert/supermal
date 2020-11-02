<template>
<div class="button" :class="{active:isActive}"></div>
</template>

<script>
export default {
    name:'button',
    props:{
        isActive:{
            type:Boolean
        }
    }
}
</script>

<style scoped>
.button {
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