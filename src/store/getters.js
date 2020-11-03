export default{
    // 获取商品类别数量
    getLength(state){
        return state.goods.length
    },
    // getCounters(state){
    //     return null
    // }
    // 获取商品信息
    getItem(state){
        return state.goods
    },

    // 获取选择的商品总价格
    getTotalPrice(state){
        return state.goods.filter(item=>{
            return item.checked
        }).reduce((preValue,item)=>{
            return preValue+item.count*parseFloat(item.newPrice)
        },0)
    },

    // 获取商品总数量
    getCount(state){
        return state.goods.filter(item=>{
            return item.checked
        }).length
    },

    getCheckAll(state){
        return !(state.goods.filter((item) => !item.checked).length)
    }
}