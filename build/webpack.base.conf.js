'use strict'
// １.配置webpack编译入口 
//　2.配置webpack输出路径和命名规则 
//　3.配置模块resolve规则 
//　4.配置不同类型模块的处理规则 
const path = require('path')
const utils = require('./utils') // 工具函数
const config = require('../config') // 配置文件
const vueLoaderConfig = require('./vue-loader.conf') // 工具函数集合
// vue-loader.conf配置文件是用来解决各种css文件的，定义了诸如css,less,sass之类的和样式有关的loader
/**
 * 获得绝对路径
 * @method resolve
 * @param  {String} dir 相对于本文件的路径
 * @return {String}     绝对路径
 */
 function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  //基础目录（绝对路径），用于从配置中解析入口点和加载程序
  entry: {
    app: './src/main.js' // 入口文件
  },
  output: { // 输出
    path: config.build.assetsRoot, // 输出的路径如：./dist
    filename: '[name].js', // webpack输出bundle文件命名格式
    publicPath: process.env.NODE_ENV === 'production' ? // 正式发布环境下编译输出的上线路径的根路径
    config.build.assetsPublicPath :
    config.dev.assetsPublicPath
  },
  // 模块resolve的规则
  resolve: {
    // 自动补全的扩展名
    extensions: ['.js', '.vue', '.json'],
    // 别名，方便引用模块，例如有了别名之后，
    // 省略扩展名，比方说import index from '../js/index'会默认去找index文件，然后找index.js,index.vue,index.json文件
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
    // 使用别名  使用上面的resolve函数，意思就是用@代替src的绝对路径
  },
  module: {
    rules: [
    // 根据配置，决定是否创建eslint
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
