const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  common: {
    entryPath: path.resolve(__dirname, '../src/main.js'), //入口文件路径
    entryPath2: path.resolve(__dirname, '../src/main2.js'),
    reactHot: 'react-hot-loader/patch',
    babelPolyfill: '@babel/polyfill',
    outputPath: path.resolve(__dirname, '../dist'), //出口文件路径
    outputFilename: 'js/[name]-bundle.js',
    outputChunkFilename: 'js/[name]-[chunkhash:8].chunk.js', // 复用模块的名称
    extensions: ['.js', '.json', '.css', '.less', 'scss', '.jsx'],
    srcPath: path.resolve(__dirname, '../src'), //src根目录路径
    components: path.resolve(__dirname, '../src/components'),
    public: path.resolve(__dirname, '../public'),
    env: path.resolve(__dirname, 'env.js'),
    MiniCssExtractPluginConfig: {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../'
      }
    }
  },
  build: {
    assetsSubDirectory: '', //生成资源路径二级
    assetsPublicPath: '', //生成资源路径
    sourceMap: '' //生成映射文件
  },
  dev: {
    host: '127.0.0.1',
    port: 8090, //端口号
    autoOpenBrowser: true, //是否自动打开浏览器
    hot: true, //热更新
    overlay: true, // 浏览器页面上显示错误
    assetsSubDirectory: '', //生成资源路径二级
    assetsPublicPath: '', //生成资源路径
    sourceMap: 'cheap-module-eval-source-map', //生成映射文件
    proxyTable: {} //代理
  }
}
