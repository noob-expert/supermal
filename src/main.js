// import { createApp } from 'vue' 
import Vue from "vue"
import App from './App.vue'
import Router from "./router/index"
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import store from "./store/index.js"
import toast from "@/components/common/toast"
// 解决移动端300ms延迟问题
import FastClick from "fastclick"
FastClick.attach(document.body)

// 安装toast插件
Vue.use(toast)

// 安装轮播图插件
Vue.use(VueAwesomeSwiper);

// 事件总线的添加，用于解决滚动区域BUG问题
Vue.prototype.$bus=new Vue();

Vue.prototype.$store=store

// VueCLI3版本
new Vue({
  store,
  router:Router, //我的天，这里如果使用ES6增强写法的话，千万记得一定一定一定要import router!!!!
  render: h => h(App)
}).$mount('#app')

// VueCLI4版本
// createApp(App).use(Router).mount('#app') 