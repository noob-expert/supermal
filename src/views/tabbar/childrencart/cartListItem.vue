<template>
  <div class="ListItem" >
    <buttoncheck
      :isActive="iteminfo.checked"
      @click.native="btnClick"
      ref="but"
    ></buttoncheck>
    <div class="itemimg">
      <img :src="iteminfo.image" alt="" />
    </div>
    <div class="iteminfo">
      <div class="itemtitle">
        <p>{{ iteminfoa }}</p>
      </div>
      <div class="itemdesc">
        <p>{{ iteminfo.desc }}</p>
      </div>
      <div class="itemprice">
        <p class="newprice">{{ iteminfo.newPrice | showPrice }}</p>
        <p>x{{ iteminfo.count }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import buttoncheck from "@/components/common/button/button.vue";

export default {
  name: "CartListItem",
  props: {
    iteminfo: Object,
  },
  components: {
    buttoncheck,
  },
  methods: {
    btnClick() {
      this.iteminfo.checked=!this.iteminfo.checked
    },
  },
  computed:{
      iteminfoa(){
          this.iteminfo.checked
      }
  },
    filters: {
    showPrice(price) {
      //   console.log(typeof price);//string
      return "￥" + parseFloat(price).toFixed(2);
    },
  },
};
</script>

<style scoped>
.ListItem {
  height: 120px;
  display: flex;
  overflow: hidden;
  padding: 15px 15px 15px 10px;
}

.ListItem img {
  margin-left: 5px;
  width: 90px;
  height: 120px;
}
.iteminfo {
  margin-left: 20px;
  /* width:100%; */
  width: 220px;
}
.itemtitle,
.itemdesc {
  width: 100%;
  overflow: hidden;
  /* 文本不换行 */
  white-space: nowrap;
  text-overflow: ellipsis;
}
.itemtitle {
  font-weight: bold;
  font-size: 18px;
}
.itemdesc {
  margin-top: 15px;
  font-size: 14px;
}
.itemprice {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.newprice {
  color: var(--color-high-text);
  font-size: 16px;
}
</style>