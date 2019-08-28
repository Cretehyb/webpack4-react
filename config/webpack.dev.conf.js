const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const settings = require('./settings')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: settings.dev.sourceMap,
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    host: settings.dev.host,
    port: settings.dev.port,
    hot: true,
    inline: true, // 自启浏览器
    overlay: true, // 浏览器页面上显示错误
    publicPath: settings.dev.assetsPublicPath,
    proxy: settings.dev.proxyTable
  },
  plugins: [new webpack.HotModuleReplacementPlugin({})],
  optimization: {
    usedExports: true
  }
})
