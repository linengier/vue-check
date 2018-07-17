'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    // 开发模式下的配置
    dev: {
    // Paths
    assetsSubDirectory: 'static',
    // 二级目录，存放静态资源文件，在dist下
    assetsPublicPath: '/',
    // 发布路径，如果构建后的产品文件有用于CDN或者放到其他域名服务器，可以在这里设置，当然本地打包，本地浏览一般都将这里设置为"./"
    // 设置之后的构建的产品在注入到index.html中就会带上这里的发布路径
    proxyTable: {},
    // 代理示例： proxy: [{context: ["/auth", "/api"],target: "http://localhost:3000",}]
    // Various Dev Server settings
    host: 'localhost', // 这个可以被process.env.HOST重写
    port: 8080, // process.env.PORT重写  在端口空闲的情况下
    autoOpenBrowser: false,  // 是否自动打开浏览器
    errorOverlay: true, // 是否出现编译器错误或者警告，在浏览器显示全屏叠加，覆盖到浏览器页面上面
    notifyOnErrors: true,   // 是否允许窗口弹出错误信息
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true, //是否通过将哈希查询附加到文件名来生成具有缓存清除的源映射

    cssSourceMap: true  // 开发环境下，显示 cssSourceMap
},

build: {
    // 获得绝对路径，inde.html的模板文件
    index: path.resolve(__dirname, '../docs/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../docs'), // 获得dist文件夹的绝对路径
    assetsSubDirectory: 'static', // 二级目录
    assetsPublicPath: './',

    /**
     * Source Maps
     */

     productionSourceMap: true, // production环境下生成sourceMap文件
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,  // 是否压缩
    productionGzipExtensions: ['js', 'css'],     //  gzip模式下需要压缩的文件的扩展名，设置js、css之后就只会对js和css文件进行压


    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
    // 是否展示webpack构建打包之后的分析报告
}
}
