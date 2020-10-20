import axios from "axios";

export function request(config) {
    // 1. 创建axios的实例
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000"
    });
    // // 2.配置axios的拦截器,分请求和响应2种拦截情况
    // instance.interceptors.request.use(config=>{
    //     console.log(config);
    //     return config
    // });
    // 3. 发送真正的网络请求
    return instance(config)
}