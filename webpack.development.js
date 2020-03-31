const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseCfg = require('./webpack.base.js');

const deveCfg = {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
        open: true,
        // 和webpack.HotModuleReplacementPlugin 配好使用 (热加载)
        hot: true
    },
    plugins: [
        // 热加载
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        usedExports: true
    }
}

module.exports = webpackMerge(baseCfg, deveCfg);