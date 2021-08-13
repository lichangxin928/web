const { resolve } = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');
module.exports = {
    // 需要使用postcss处理
    // 要下载两个包 post-loader postcss-preset-env
    entry: './src/a.css',
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] }
        ]
    },
    plugins:[
        new HtmlWebpackPlugins({
            filename:'box.html',
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'demo.css'
        })
    ],
    mode:'development'
}