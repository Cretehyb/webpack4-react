'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const settings = require('./settings')
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const utils = require('./utils')
const chalk = require('chalk')

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
    proxy: settings.dev.proxyTable,
    stats: settings.dev.stats,
    quiet: settings.dev.quiet,
    historyApiFallback: settings.dev.historyApiFallback
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': settings.dev.env
    }),
    new webpack.HotModuleReplacementPlugin({}),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    new friendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here: ` +
            chalk.cyan(`http://${settings.dev.host}:${settings.dev.port}`)
        ]
      },
      onErrors: settings.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
    })
  ]
})
