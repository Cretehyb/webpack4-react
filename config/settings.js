const path = require('path');
module.exports = {
    common: {
        entryPath: path.resolve(__dirname, '../src/main.js'), //入口文件路径
        entryPath2: path.resolve(__dirname, '../src/main2.js'),
        assetsRoot: path.resolve(__dirname, '../dist'), //出口文件路径
        vendor: ['react','react-redux','redux','redux-saga','react-dom','react-router','react-router-dom'],
        srcPath: path.resolve(__dirname, '../src'), //src根目录路径
        additionalPaths: [], //babel解析附加路径
    },
    build: {
        env: '"prod"', //环境变量
        assetsSubDirectory: '', //生成资源路径二级
        assetsPublicPath: '/', //生成资源路径
        sourceMap: 'source-map' //生成映射文件
    },
    dev: {
        env: '"dev"', //环境变量
        port: 8090, //端口号
        host: '127.0.0.1',
        autoOpenBrowser: true, //是否自动打开浏览器
        assetsSubDirectory: '', //生成资源路径二级
        assetsPublicPath: '', //生成资源路径
        sourceMap: 'cheap-module-eval-source-map', //生成映射文件
        proxyTable: {} //代理
    }
};
