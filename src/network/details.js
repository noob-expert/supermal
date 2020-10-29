import { request } from "./request";

// 单独封装details.js，专门面向detail.vue，提供不同的组件
export function getDetail(iid) {
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}


// 详情商品推荐信息接口
export function getRecommend() {
    return request({
        url: "/recommend",
    })
}



// ES6中新建类语法,整合商品数据/商家信息
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class Shops {
    constructor (shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.scroe = shopInfo.score;
        this.goodsCount =shopInfo.cGoods
    }
}

// 商品参数信息
export class GoodsParam{
    // info=data.result.itemParams.info
    // rule=data.result.itemParams.rule
    constructor (info,rule){
        // images可能没有值(某些商品有值，某些没有)
        this.image=info.images?info.images[0]:"";
        this.infos=info.set;
        this.sizes=rule.tables
    }
}
