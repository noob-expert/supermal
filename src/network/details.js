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

// ES6中新建类语法,整合商品数据/商家信息
export class Goods {
    // res.result.itemInfo,res.result.columns,res.result.shopInfo.services 10.26日删除
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

export class Shop {
    // res.result.shopInfo 删除
    constructor (shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.scroe = shopInfo.score;
        this.goodsCount =shopInfo.cGoods
    }
}

