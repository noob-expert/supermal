<template>
  <div id="navbar">
    <!-- 给插槽添加样式/标签时不要直接置于slot上，会失效 -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
#navbar {
  display: flex;
  justify-content: space-between;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 2px 1px rgba(1, 9, 9, 0.4);
}
.left,
.right {
  width: 60px;
  /* background-color: bisque; */
}
</style>