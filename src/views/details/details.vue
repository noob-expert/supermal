<template>
  <div class="details">
    <nav-bar>
      <img
        src="~@/assets/img/details/back.png"
        alt="back"
        slot="left"
        class="backimg"
        @click="backClick"
      />
      <div slot="center">
        <details-nav-bar :title="title"></details-nav-bar>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/tabbar/NavBar.vue";
import DetailsNavBar from "./DetailsNavBar";

export default {
  name: "Details",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      id: null,
    };
  },
  components: {
    NavBar,
    DetailsNavBar,
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
  },
  methods: {
    backClick() {
      //   因为跳转时使用的是push，所以可以使用go来返回
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.backimg {
  width: 25px;
  height: 25px;
  margin-top: 10px;
}
</style>