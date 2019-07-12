const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    publicPath: '/',
    host: '127.0.0.1',
    port: 8090,
    hot: true,
    inline: true, // 自启浏览器
    overlay: true, // 浏览器页面上显示错误
    proxy: {}
  },
  plugins: [new webpack.HotModuleReplacementPlugin({})],
  optimization: {
    usedExports: true
  }
})
