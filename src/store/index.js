import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        count:1000,
        goods:[]
    },
    mutations:{
        // 方法一
        // 默认属性是state
        addCart(state,payload){
            let oldProduct=state.goods.find(item=>item.id===payload.id);
            if(oldProduct){
                oldProduct.count += 1
            }else{
                payload.count=1
                state.goods.push(payload)
            }
        }
    },
    // 方法二
    actions:{
        // 默认属性是context:上下文
        addGoods(context,payload){
            let oldProduct=context.state.goods.find(item=>item.id===payload.id);
            if(oldProduct){
                oldProduct.count += 1
            }else{
                payload.count=1
                context.state.goods.push(payload)
            }
        }
    }
})

export default store;