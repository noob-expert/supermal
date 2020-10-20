// const path = require('path');

// function resolve(dir) {
//     return path.join(__dirname, dir)
// };

// Vue4.0配置方式
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
        // 配置别名
        .set('@',resolve('./src'))
        .set('assets',resolve('./src/assets'))
        .set('components',resolve('./src/components'))
        .set('views',resolve('./src/views'))
        .set('network',resolve('./src/network'))
}
}