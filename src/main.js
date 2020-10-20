// import { createApp } from 'vue' 
import Vue from "vue"
import App from './App.vue'
import Router from "./router/index"
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css"

Vue.use(VueAwesomeSwiper);

// VueCLI3版本
new Vue({
  router:Router, //我的天，这里如果使用ES6增强写法的话，千万记得一定一定一定要import router!!!!
  render: h => h(App),
}).$mount('#app')

// VueCLI4版本
// createApp(App).use(Router).mount('#app') 