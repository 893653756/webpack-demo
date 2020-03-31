const webpackMerge = require('webpack-merge')
const baseCfg = require('./webpack.base.js');

const prodCfg = {
    mode: 'production',
    devtool: 'cheap-source-map',
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        usedExports: true
    }
}

module.exports = webpackMerge(baseCfg, prodCfg);