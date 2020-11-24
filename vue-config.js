// const pxtovw = require('postcss-px-to-viewport')
// Vue4.0配置方式
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            // 配置别名
            .set('@', resolve('./src'))
            .set('assets', resolve('./src/assets'))
            .set('components', resolve('./src/components'))
            .set('views', resolve('./src/views'))
            .set('network', resolve('./src/network'))
    },
    plugins:{
        'postcss-px-to-viewport':{
                        unitToConvert:"px", //转换的单位
                        viewportwidth:768, //设计稿视口宽度
                        unitPrecision:5, //单位转换后保留的小数位数
                        propList:['*'], //要进行转换的属性列表，*表示匹配所有,！表示不转换
                        viewportUnit:"vw",//转换后的视口单位
                        fontViewportUnit:"vw",//转换后字体使用的视口单位
                        selectorBlackList:[],//不进行转换的css选择器，继续使用原有单位
                        minPixelValue:1,//设置最小的转换数值
                        mediaQuery:false,//设置媒体查询里的单位是否需要转换单位
                        replace:true,//是否直接更换属性值，而不添加备用属性
                        exclude:[/node_modules/]//忽略某些文件夹下的文件
                    }
    }
}
