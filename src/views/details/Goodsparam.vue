<template>
  <!-- 当父传子时，可以引用该判断以防止对应属性暂未加载出来 -->
  <div class="goods-param" v-if="Object.keys(goodsparam).length !== 0">
    <table
      class="info-size"
      v-for="(table, index) in goodsparam.sizes"
      :key="index"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez" class="size-td">
          {{ td }}
        </td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in goodsparam.infos" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsparam.image.length !== 0">
      <img :src="goodsparam.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Goodsparam",
  props: {
    goodsparam: Object,
  },
};
</script>

<style scoped>
.info-size,
.info-param {
  width: 350px;
  margin: 15px 10px;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  font-size: 16px;
  color: var(--color-text);
}
.goods-param table tr{
    height: 42px;
}
.size-td,
.info-param-key,
.param-value {
  border: 1px solid black;
}
.param-value{
    color:var(--color-tint)
}
.size-td:first-child,
.info-param-key{
    font-weight: bold;
}
.info-param-key {
  width: 50px;
}
</style>