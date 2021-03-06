'use strict'
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const settings = require('./settings')
const utils = require('./utils')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const SentryCliPlugin = require('@sentry/webpack-plugin')

const commonOptions = {
  chunks: 'all',
  reuseExistingChunk: true // 再利用存在的chunk
}
const proConfig = merge(baseConfig, {
  mode: 'production',
  devtool: settings.build.sourceMap,
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': settings.build.env
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name]-[contenthash:7].min.css',
      chunkFilename: 'static/css/[name]-[contenthash:12].min.css'
    }),
    // 配置 PWA
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new BundleAnalyzerPlugin(), // 打包分析
    // new SentryCliPlugin({
    //   include: '../dist/static/js', // 作用的文件夹，如果只想js报错就./dist/js
    //   release: process.env.RELEASE_VERSION, // 一致的版本号
    //   configFile: 'sentry.properties', // 不用改
    //   ignore: ['node_modules', 'postcss.config.js'],
    //   urlPrefix: '~/' //这里指的你项目需要观测的文件如果你的项目有publicPath这里加上就对了
    // })
  ],
  optimization: {
    usedExports: true,
    moduleIds: 'hashed',
    minimizer: [
      new UglifyJSPlugin({
        cache: true, // 开启缓存
        parallel: true, // 开启多线程编译
        sourceMap: true, // 映射文件
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
        // 打包额外的资源
        {
          from: path.resolve(__dirname, '../public/'),
          to: 'static',
          ignore: ['index.html', 'second.html', 'favicon.ico'] // 忽略模板html和网页图标
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
if (settings.build.productionGzip) {
  // 添加gzip压缩插件
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  proConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]', // 压缩后的文件名
      algorithm: 'gzip', // 算法 默认gzip
      test: new RegExp(
        '\\.(' + settings.build.productionGzipExtensions.join('|') + ')$'
      ), // 针对文件的正则表达式规则，符合规则的文件被压缩
      threshold: 10240, // 文件大于这个值的会被压缩
      minRatio: 0.8 // 压缩率 默认0.8
    })
  )
}
module.exports = proConfig
