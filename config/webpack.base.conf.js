const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const settings = require('./settings')
const { isDev, isPro } = require('./env')
const chalk = require('chalk')

module.exports = {
  entry: {
    babelPolyfill: '@babel/polyfill', // babel入口
    reactHot: 'react-hot-loader/patch', // 热重载入口
    app: settings.common.entryPath // 应用入口
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name]-bundle.js',
    chunkFilename: 'js/[name]-[chunkhash:8].chunk.js',
    publicPath: '' //js文件内部引用其他文件的路径
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.less', 'scss'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      components: path.resolve(__dirname, '../src/components'),
      public: path.resolve(__dirname, '../public'),
      env: path.resolve(__dirname, 'env.js')
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isDev
            ? 'style-loader/useable'
            : //  MiniCssExtractPlugin.loader,
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
          'css-loader?modules',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          isDev
            ? 'style-loader'
            : // MiniCssExtractPlugin.loader,
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
          'css-loader?modules',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.sass|scss$/,
        use: [
          isDev
            ? 'style-loader'
            : // MiniCssExtractPlugin.loader,
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
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
        // images
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5 * 1024,
              name: 'img/[name].[hash:8].[ext]'
              // publicPath: '../img/',
              // outputPath: 'img/'
            }
          },
          {
            // 压缩图片
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-pngquant')({
                  quality: '80'
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
            name: '[name].[hash:7].[ext]',
            publicPath: 'fonts/',
            outputPath: 'fonts/'
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
      chunks: ['app'],
      cdn: {
        css: [],
        js: []
      },
      minify: isDev
        ? {}
        : {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true
          }
    }),
    new ProgressBarWebpackPlugin({
      format: 'build start [:bar] :percent (:elapsed seconds)'
    })
  ],
  // optimization: {
  //   // 分割代码
  //   splitChunks: {
  //     cacheGroups: {
  //       // 其次: 打包业务中公共代码
  //       public: {
  //         name: 'common',
  //         chunks: 'all',
  //         minSize: 1, // 只要超出1字节就生成一个新包
  //         priority: 0
  //       },
  //       // 首先: 打包node_modules中的文件
  //       vendor: {
  //         // 剥离第三方插件
  //         name: 'vendor', // 打包后的文件名，随意命名
  //         test: /[\\/]node_modules[\\/]/, // 指定是node_modules下的第三方包
  //         chunks: 'all',
  //         priority: 10 // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
  //       }
  //     }
  //   }
  // },
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
