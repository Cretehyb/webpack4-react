const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: './'
  },
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash:7].css',
      chunkFilename: 'css/[id]-[contenthash:12].css'
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
          comments: true,
          warnings: false,
          compress: {
            drop_console: true // 去掉console.log
          }
        }
      }),
      new OptimizeCSSPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } } // 清除CSS注释
      }),
      new CopyWebpackPlugin([
        // 打包静态资源
        {
          from: path.resolve(__dirname, '../src/assets/img'),
          to: './img'
        },
        {
          from: path.resolve(__dirname, '../public/'),
          to: './public',
          ignore: ['index.html', 'favicon.ico']
        }
      ])
    ]
  }
})
