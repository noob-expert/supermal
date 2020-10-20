<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommends: Array,
  },
};
</script>

<style>
.recommend{
    display: flex;
    justify-content: space-around;
    font-size:12px;
    padding: 10px 0 20px;
    text-align: center;
}
.recommend img{
    width:70px;
    height:70px;
    margin-bottom: 5px;
}
</style>