const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const settings = require('./settings')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: settings.dev.sourceMap,
  devServer: {
    host: settings.dev.host,
    port: settings.dev.port,
    open: settings.dev.autoOpenBrowser,
    hot: settings.dev.hot,
    overlay: settings.dev.overlay,
    publicPath: settings.dev.assetsPublicPath,
    proxy: settings.dev.proxyTable
  },
  plugins: [new webpack.HotModuleReplacementPlugin({})],
  optimization: {
    usedExports: true
  }
})
