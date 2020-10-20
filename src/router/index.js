import VueRouter from "vue-router";
// VueCLI3版本
import Vue from 'vue' ;

Vue.use(VueRouter)

// 懒加载方式
const Home=()=>import("@/views/tabbar/home.vue")
const Class=()=>import("@/views/tabbar/class")
const Cart=()=>import("@/views/tabbar/cart")
const Profile=()=>import("@/views/tabbar/profile")

const routes=[
    {
        path:"",
        component:Home
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/class",
        component:Class
    },
    {
        path:"/cart",
        component:Cart
    },
    {
        path:"/profile",
        component:Profile
    }
]

const router=new VueRouter({
    routes,
    mode:"history",
    linkActiveClass:"active"
})

export default router;
