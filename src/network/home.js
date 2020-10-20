import {request} from "./request";

// 单独封装home.js，专门面向home.vue，提供不同的组件
export function getHomeMultidata(){
    return request({
        url:"/home/multidata"
    })
}


