const { resolve } = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/index.css',
    output: {
        filename: '[name].js',
        path:resolve(__dirname,'built')

    },
    module:{
        rules:[
            {test:/\.css$/,use:[MiniCssExtractPlugin.loader,'css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.sass$/,use:['style-loader','css-loader','sass-loader']}
        ]
    },
    plugins:[
        new HtmlWebpackPlugins({
            template:'./src/index.html',
            filename:'main.html'
        }),
        new MiniCssExtractPlugin({
            filename:'demo.css'
        })
    ],
    mode:'development'
}