const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
'use strict'
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const settings = require('./settings')
const utils = require('./utils')

const commonOptions = {
  chunks: 'all',
  reuseExistingChunk: true
}
module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: settings.build.sourceMap,
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash:7].min.css',
      chunkFilename: 'css/[id]-[contenthash:12].min.css'
    }),
    // 配置 PWA
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    usedExports: true,
    moduleIds: 'hashed',
    minimizer: [
      new UglifyJSPlugin({
        cache: true, // 开启缓存
        parallel: true, // 开启多线程编译
        sourceMap: true,
        uglifyOptions: {
          comments: true, // 注释保留与否
          warnings: false,
          compress: {
            drop_console: true, // 去掉console.log, 可以兼容ie浏览器
            reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
            collapse_vars: true // 内嵌定义了但是只用到一次的变量
          }
        }
      }),
      new OptimizeCSSPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } } // 清除CSS注释
      }),
      new CopyWebpackPlugin([
        // 打包静态资源
        {
          from: path.resolve(__dirname, '../public/'),
          to: 'static',
          ignore: ['index.html', 'favicon.ico'] // 忽略模板html和网页图标
        }
      ])
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          minChunks: 2,
          ...commonOptions
        },
        polyfill: {
          test: /[\\/]node_modules[\\/](core-js|raf|@babel|babel)[\\/]/,
          name: 'polyfill',
          priority: 2,
          ...commonOptions
        },
        vendor: {
          // name: "vendor", // 注释这个就可以拆分vendor.js
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          minChunks: 1, // 被引用的最低次数
          maxInitialRequests: 5, // 一个入口最大的并行请求数
          minSize: 25, // 形成一个新代码块最小的体积
          priority: 100, // 缓存组打包的先后优先级
          automaticNameDelimiter: '-' // 名称定界符
        }
      }
    }
  }
})

