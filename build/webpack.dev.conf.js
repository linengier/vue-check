'use strict'
// １.引入相关插件和配置 
// 2.生成处理各种样式的规则 
// 3.配置开发环境，如热更新、监听端口号，是否自动打开浏览器等都在webpack中的devServer中配置完成 
// 4.寻找可利用的端口和添加显示程序编译运行时的错误信息。
const utils = require('./utils') // utils 工具函数
const webpack = require('webpack')
const config = require('../config') // 引入配置，默认是index
const merge = require('webpack-merge') // 将基础配置和开发配置或者是生产配置合并在一起
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf') // 引入基础配置
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 自动打包生成index.html
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin') // Friendly-errors-webpack-plugin可识别某些类型的webpack错误并清理，汇总和优先化它们以提供更好的开发者体验。
const portfinder = require('portfinder') // 查看闲置接口，默认是8000这个端口，解决端口占用冲突的问题

// 通过process这个全局变量，来获取全局数据
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

// 正式的dev配置，合并基础配置
const devWebpackConfig = merge(baseWebpackConfig, {
  // 下面的配置都是开发模式下要使用的
  // 
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
    //自动生成关于css、less、postcss、等的规则
  },
  // 增加了调试功能
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // 本地服务
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning', // 在开发工具(DevTools)的控制台将显示警告消息
    historyApiFallback: { // h5的history API处理，任意的 404 响应都可能需要被替代为 index.html。
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true, // 启动热更新模式
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true, // 一切服务都启动后，就会使用gzip压缩代码
    host: HOST || config.dev.host, // 默认是localhost
    port: PORT || config.dev.port, // 指定要监听的端口号
    open: config.dev.autoOpenBrowser, // 是否自动打开默认浏览器
    overlay: config.dev.errorOverlay //  当出现编译器错误或警告时，在浏览器中显示全屏叠加,覆盖到浏览器的项目页面的上方
      ?
      { warnings: false, errors: true } :
      false,
    publicPath: config.dev.assetsPublicPath,
    // 服务器假设运行在 http://localhost:8080 并且output.filename 被设置为bundle.js默认。
    // publicPath是"/"，所以你的包（束）通过可以 http://localhost:8080/bundle.js 访问。
    // 如果config中的index.js dev对象的中的assertsPublicPath设置为"/asserts/"
    // 那么文件打开后将通过 http://localhost:8080/asserts/来进行访问
    proxy: config.dev.proxyTable,
    //  如果你有单独的后端开发服务器API，并且希望在同域名下发送API请求，
    //  那么代理某些URL将很有用.简称就是API代理,中间件  需引入 http-proxy-middleware
    quiet: true, // necessary for FriendlyErrorsPlugin
    // 启用quiet后，除了初始启动信息之外的任何内容都不会被打印到控制台。
    // 这也意味着来自的WebPack的错误或警告在控制台不可见。
    watchOptions: {
      poll: config.dev.poll,
    }
    // webpack使用文件系统（file system）获取文件改动的通知
  },
  // 插件配置
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    //  永远不能用在生产模式，模块热更新,修改文件的内容，允许在运行时更新各种模块，而无需进行完全刷新。
    new webpack.NamedModulesPlugin(), // // 当进行热更新时，相关文件名会被展示出来
    new webpack.NoEmitOnErrorsPlugin(),
    // 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    //  该插件可自动生成一个 html5 文件或使用模板文件将编译好的代码注入进去
    // copy custom static assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.dev.assetsSubDirectory,
      ignore: ['.*']
    }])
    // 拷贝文件到静态文件夹
  ]
})

// 对端口占用冲突的解决
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors ?
          utils.createNotifierCallback() :
          undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
