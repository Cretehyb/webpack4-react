const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const settings = require('./settings')
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const notifier = require('node-notifier')
const packageConfig = require('../package.json')
const utils = require('./utils')

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
  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new friendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: http://${settings.dev.host}:${settings.dev.port}`
        ],
        notes: ['可以开发了,兄弟！']
      },
      onErrors: settings.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
    })
  ]
})
