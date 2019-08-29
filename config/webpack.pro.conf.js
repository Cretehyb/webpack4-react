const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const glob = require("glob-all");

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
   
  },
  module: {
    rules: [
      // {
      //   //页面中会用到img标签，img引用的图片地址也需要一个loader来处理,这样再打包后的html文件下img就可以正常引用图片路径了
      //   test: /\.(htm|html)$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       publicPath: './img/'
      //     }
      //   }
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash:7].min.css',
      chunkFilename: 'css/[id]-[contenthash:12].min.css'
    })
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
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
    ]
  }
})
