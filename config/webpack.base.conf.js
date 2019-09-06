const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const { isDev, isPro } = require('./env')
const settings = require('./settings')

module.exports = {
  entry: {
    babelPolyfill: settings.common.babelPolyfill, // babel入口
    reactHot: settings.common.reactHot, // 热重载入口
    app: settings.common.entryPath // 应用入口
  },
  output: {
    path: settings.common.outputPath,
    filename: settings.common.outputFilename,
    chunkFilename: settings.common.outputChunkFilename
  },
  resolve: {
    extensions: settings.common.extensions,
    alias: {
      '@': settings.common.srcPath,
      components: settings.common.components,
      public: settings.common.public,
      env: settings.common.env
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isDev
            ? 'style-loader/useable'
            : settings.common.MiniCssExtractPluginConfig,
          'css-loader?modules',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          isDev ? 'style-loader' : settings.common.MiniCssExtractPluginConfig,
          'css-loader?modules',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.sass|scss$/,
        use: [
          isDev ? 'style-loader' : settings.common.MiniCssExtractPluginConfig,
          'css-loader?modules',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'dynamic-import-webpack' // 动态导入组件
            ]
          }
        }
      },
      {
        // 图片打包处理
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5 * 1024,
              name: 'img/[name].[hash:8].[ext]'
            }
          },
          {
            // 压缩图片
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-pngquant')({
                  // 处理png格式
                  quality: '80',
                  speed: 4
                }),
                require('imagemin-gifsicle')({
                  // 处理gif格式
                  interlaced: false
                }),
                require('imagemin-mozjpeg')({
                  // 处理jpg|jpeg格式
                  progressive: true,
                  arithmetic: false,
                  quality: 65
                }),
                require('imagemin-svgo')({
                  // 处理svg格式
                  plugins: [{ removeTitle: true }, { convertPathData: false }]
                })
              ]
            }
          }
        ]
      },
      {
        // 字体打包
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5000,
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-saga-demo',
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      hash: true,
      showErrors: isDev ? true : false,
      // chunks: ['app'], // 用于多入口文件
      cdn: {
        css: [],
        js: []
      },
      minify: isDev
        ? {}
        : {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            removeAttributeQuotes: true
          }
    }),
    // 进度条设置
    new ProgressBarWebpackPlugin({
      format: 'build start [:bar] :percent (:elapsed seconds)'
    })
  ],
  // 忽略文件过大提示
  performance: {
    hints: 'warning', // 枚举
    maxAssetSize: 30000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    }
  }
}
