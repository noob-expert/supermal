<template>
  <div class="comments">
    <header class="title">
      <p>用户评价</p>
      <p>更多</p>
    </header>
    <div
     
      v-for="(item, index) in comments.list"
      :key="index"
    >
      <div class="user-info">
        <img :src="item.user.avatar" alt="" class="userimg" />
        <span class="username">{{ item.user.uname }}</span>
      </div>
      <div class="comment-info">
        {{ item.content }}
      </div>
      <div class="date-info">
        <span>{{ item.created | showDate }}</span>
        <span>{{ item.style }}</span>
      </div>
      <div class="comment-img">
        <div v-for="(img, indey) in item.images" :key="indey">
          <img :src="img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/components/common/tool/timestamp";

export default {
  name: "comments",
  props: {
    comments: Object,
  },
  mounted() {
    // console.log(this.comments.cRate);
  },
  filters: {
    showDate(timestamp){
      // console.log(timestamp); 这里的时间戳为10位，要乘以1000
      return formatDate(timestamp*1000)
    }
  },
};
</script>

<style scoped>
.comments {
  margin: 15px;
}
.title {
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  border-top: 1px solid var(--color-text);
  border-bottom: 1px solid var(--color-text);
  font-size: 14px;
}
.user-info {
  padding: 15px 0;
  position: relative;
}
.userimg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.username {
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
}
.comment-info {
  margin: 10px;
}
.date-info span {
  margin: 10px;
}
.comment-img {
  margin-top: 10px;
  display: flex;
}
.comment-img img {
  /* width:50%; */
  height: 50%;
}
</style>