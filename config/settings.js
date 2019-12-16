'use strict'
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { prodUrl, devUrl } = require('../src/utils/config.ts')
module.exports = {
  common: {
    entryPath: path.resolve(__dirname, '../src/main.tsx'), //入口文件路径
    reactHot: 'react-hot-loader/patch',
    babelPolyfill: '@babel/polyfill',
    outputPath: path.resolve(__dirname, '../dist'), //出口文件路径
    outputFilename: 'static/js/[name]-bundle.js',
    outputChunkFilename: 'static/js/[name]-[chunkhash:8].chunk.js', // 复用模块的名称
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
    srcPath: path.resolve(__dirname, '../src/'), //src根目录路径
    components: path.resolve(__dirname, '../src/components'),
    public: path.resolve(__dirname, '../public'),
    env: path.resolve(__dirname, 'env.js'),
    MiniCssExtractPluginConfig: {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../'
      }
    }
  },
  build: {
    env: {
      NODE_ENV: '"production"',
      BASE_API: `${prodUrl}`
    },
    assetsSubDirectory: '', //生成资源路径二级
    assetsPublicPath: '', //生成资源路径
    sourceMap: '', //生成映射文件
    productionGzip: true,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: {
      NODE_ENV: '"development"',
      BASE_API: `${devUrl}`
    },
    host: '127.0.0.1',
    port: 8090, //端口号
    autoOpenBrowser: false, //是否自动打开浏览器
    hot: true, //热更新
    overlay: true, // 浏览器页面上显示错误
    assetsSubDirectory: '', //生成资源路径二级
    assetsPublicPath: '', //生成资源路径
    sourceMap: 'cheap-module-eval-source-map', //生成映射文件
    proxyTable: {}, //代理
    notifyOnErrors: true,
    stats: 'errors-only',
    quiet: true
  }
}
