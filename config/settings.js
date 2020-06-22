'use strict'
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { prodUrl, devUrl } = require('../src/utils/config.ts')
const { isDev, isPro } = require('./env')
module.exports = {
  common: {
    entryPath: path.resolve(__dirname, '../src/main.tsx'), //入口文件路径
    second: path.resolve(__dirname, '../src/second.tsx'),
    reactHot: 'react-hot-loader/patch',
    babelPolyfill: '@babel/polyfill',
    outputPath: path.resolve(__dirname, '../dist'), //出口文件路径
    outputFilename: isDev
      ? 'static/js/[name]-[hash:8].js'
      : 'static/js/[name]-[contenthash:8].js',
    outputChunkFilename: isDev
      ? 'static/js/[name]-[hash:8].chunk.js'
      : 'static/js/[name]-[contenthash:8].chunk.js', // 复用模块的名称
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
    assetsPublicPath: '/', //生成资源路径
    sourceMap: '', //生成映射文件(cheap-module-source-map)
    productionGzip: true,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: {
      NODE_ENV: '"development"',
      BASE_API: `${devUrl}`
    },
    host: '0.0.0.0',
    port: 7777, //端口号
    autoOpenBrowser: false, //是否自动打开浏览器
    hot: true, //热更新
    overlay: true, // 浏览器页面上显示错误
    assetsSubDirectory: '', //生成资源路径二级
    assetsPublicPath: '', //生成资源路径
    sourceMap: 'cheap-module-eval-source-map', //生成映射文件
    proxyTable: {}, //代理
    notifyOnErrors: true,
    stats: 'errors-only',
    quiet: true,
    historyApiFallback: true
  }
}
