// import { createApp } from 'vue' 
import Vue from "vue"
import App from './App.vue'
import Router from "./router/index"
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import store from "./store/index.js"
import toast from "@/components/common/toast/Toast.vue"
// 解决移动端300ms延迟问题
import FastClick from "fastclick"
FastClick.attach(document.body)
// 实现图片懒加载功能,配置后图片:src属性修改为v-lazy,此项目未修改
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad);

// 安装toast插件
Vue.use(toast)

Vue.use(VueAwesomeSwiper);

// 事件总线的添加，用于解决滚动区域BUG问题
Vue.prototype.$bus=new Vue();

// VueCLI3版本
new Vue({
  router:Router, //我的天，这里如果使用ES6增强写法的话，千万记得一定一定一定要import router!!!!
  render: h => h(App),
  store:store
}).$mount('#app')

// VueCLI4版本
// createApp(App).use(Router).mount('#app') 