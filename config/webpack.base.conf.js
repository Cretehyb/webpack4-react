const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { isDev } = require('./env')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name]-bundle.js',
    chunkFilename: 'js/[name]-[chunkhash:8].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.less', 'scss',],
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
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?modules',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?modules',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.sass|scss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
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
        test: /\.(png|jpg|jpeg|gif|svg)\$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[sha512:hash:base64:10].[ext]',
            outputPath: 'public/img/'
          }
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
            name: 'fonts/[name].[ext]'
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
      minify: isDev
        ? {}
        : {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
          }
    }),
    new ProgressBarWebpackPlugin()
  ]
}
