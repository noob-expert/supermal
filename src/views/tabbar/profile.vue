<template>
  <div id="profile">
    <nav-bar class="profile-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <div class="profile-content">
      <div class="info">
        <div>
          <img src="~@/assets/img/profile/1.jpg" alt="" />
        </div>
        <div class="login">
          <p>登录/注册</p>
          <p>暂无绑定手机号</p>
        </div>
        <div>&gt;</div>
      </div>
      <div class="rest">
        <div>
          <p><span>0.00</span>元</p>
          <p>我的余额</p>
        </div>
        <div>
          <p><span>0</span>个</p>
          <p>我的优惠</p>
        </div>
        <div>
          <p><span>0</span>分</p>
          <p>我的积分</p>
        </div>
      </div>
      <div class="bg"></div>
      <div class="message"></div>
    </div>
    <div class="my-profile">
      <div class="my-img1">
        <img src="~@/assets/img/profile/1.jpg" alt="" />
      </div>
      <div class="my-img2">
        <img src="~@/assets/img/profile/2.jpg" alt="" />
      </div>
      <div class="my-img3">
        <img src="~@/assets/img/profile/3.jpg" alt="" />
      </div>
      <div class="my-img4">
        <img src="~@/assets/img/profile/4.jpg" alt="" />
      </div>
      <div class="my-img5">
        <img src="~@/assets/img/profile/5.jpg" alt="" />
      </div>
      <div class="my-img6">
        <img src="~@/assets/img/profile/6.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/tabbar/NavBar";
export default {
  name: "Profile",
  data() {
    return {
      name: "刘保军",
    };
  },
  components: {
    NavBar,
  },
};
</script>



<style scoped>
#profile {
  margin-top: 44px;
  width: 100%;
  height: 680px;
  /* background: #bfa; */
  position: relative;
  box-sizing: border-box;
  text-align: center;
}

.profile-bar {
  background: var(--color-tint);
  color: white;
}
.profile-content {
  height: 330px;
  width: 100%;
}
.info {
  height: 110px;
   background: var(--color-tint);
  display: flex;
  box-sizing: border-box;
  padding:0 10px;
  justify-content: space-around;
  color: white;
  align-items: center;
}
.info img {
  width:60px;
  height:60px;
  /* display: block; */
  border-radius: 50%;
}
.info .login{
  width:70%;
  height:50px;
  /* float: left; */
  display:flex;
  justify-content:space-around;
  flex-direction: column;
  text-align: left;
}
.rest{
  height:90px;
  box-sizing: border-box;
  /* background: #bfa; */
  display: flex;
}
.rest>div{
  flex:1;
  padding:30px
}
.rest>div:nth-child(2n){
  border-left:1px solid #F3F2F3;
  border-right:1px solid #F3F2F3;
}
.rest>div span{
  font-size:20px;
  font-weight: bold;
  color:red;
  margin-right:5px
}
.bg{
  width:100%;
  height:10px;
  background: #F3F2F3;
}
/*
.my-profile{
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    font-size:18px
}
.my-profile img{
    width:50%;
    height: 50%;
} */
.my-profile {
  width: 300px;
  height: 300px;
  margin: auto;
  position: relative;
  /* font-size: 25px; */
  /* overflow: hidden; */
  /* opacity: 0.6; */
  /* background: #bfa; */
  transform-style: preserve-3d;
  animation: img 2s infinite linear;
}
.my-profile div {
  width: 50%;
  height: 50%;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
}
/* position: absolute;
    width: 50%;
    left:50%;
    top:50%; */
/* transform:  */
/* animation: img 2s infinite;*/
.my-profile .my-img1 {
  transform: rotateX(90deg) translateZ(75px);
}
.my-profile .my-img2 {
  transform: rotateX(90deg) translateZ(-75px);
}
.my-profile .my-img3 {
  transform: rotateY(90deg) translateZ(75px);
}
.my-profile .my-img4 {
  transform: rotateY(90deg) translateZ(-75px);
}
.my-profile .my-img5 {
  transform: translateZ(75px);
}
.my-profile .my-img6 {
  transform: translateZ(-75px);
}

@keyframes img {
  from {
    transform: rotateX(0) rotateZ(0);
  }
  to {
    transform: rotateX(1turn) rotateZ(1turn);
  }
}

@keyframes text {
  0% {
    bottom: 0;
    left: 150px;
  }
  25% {
    left: 0;
    top: 300px;
  }
  50% {
    left: 150px;
    top: 0;
  }
  75% {
    right: 0;
    top: 300px;
  }
}
</style>