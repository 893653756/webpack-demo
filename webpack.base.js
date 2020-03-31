const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env", { useBuiltIns: 'usage', corejs: 2 }],
                            ["@babel/preset-react"]
                        ],
                        plugins: [["@babel/plugin-syntax-dynamic-import"], ["@babel/plugin-proposal-class-properties"]]
                    }
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        // 清除上一次打包内容
        new CleanWebpackPlugin(),
        // 添加 index.html 文件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'webpack'
        })
    ]
}