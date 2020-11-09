<template>
  <div class="class">
    <Nav-bar class="products-cate">
      <div slot="center">商品分类</div>
    </Nav-bar>

    <div class="classcontent">
      <scroll :probeType="3" class="classside" ref="scrolloutside">
        <left-class :title="title" @itemClick="titleClick"></left-class
      ></scroll>
      <scroll :probeType="3" class="classside" ref="scrolloutside">
        <right-content
          :content="content"
          @contentload="contentLoad"
        ></right-content
      ></scroll>
    </div>
  </div>
</template>

<script>
// 导入路由配置
import { getCategory, getSubcategory } from "@/network/category.js";

// 导入公共组件
import NavBar from "@/components/common/tabbar/NavBar";
import scroll from "@/components/common/scroll/scroll";
import { debounce } from "@/components/common/tool/debounce";

// 导入子组件
import leftClass from "@/views/tabbar/childrenclass/leftclass";
import rightContent from "@/views/tabbar/childrenclass/rightcontent";

export default {
  name: "Class",
  data() {
    return {
      title: [],
      content: [],
      refresh:null
    };
  },
  components: {
    NavBar,
    scroll,
    leftClass,
    rightContent,
  },
  created() {
    this.GetCategory();
  },
  mounted() {
    this.refresh = debounce(this.$refs.scrolloutside.refresh, 50);
  },
  methods: {
    GetCategory() {
      return getCategory().then((res) => {
        // console.log(res);
        this.title = res.data.data.category.list;
      });
    },
    titleClick(index) {
      getSubcategory(this.title[index].maitKey).then((res) => {
        this.content = res.data.data.list;
      });
    },
    contentLoad() {
      this.refresh();
    },
  },
};
</script>

<style scoped>
.products-cate {
  background: var(--color-tint);
  color: #fff;
  font-size: 16px;
}
.classcontent {
  display: flex;
  margin-top: 44px;
  height: 100vh;
}
.classside {
  height: 580px;
  overflow: hidden;
}
</style>