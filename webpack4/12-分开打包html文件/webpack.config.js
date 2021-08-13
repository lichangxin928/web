const {resolve} = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin')

module.exports = {
    entry:{
        vendor:['./src/jquery.js','./src/public.js'],
        index:'./src/menu.js',
        car:'./src/shop.js'
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[]
    },
    plugins:[
        new HtmlWebpackPlugins({
            template:'./src/menu.html',
            filename:'menu.html',
            chunks:['index','vendor'],
            // minify:{
            //     collapseWhitespace:true,
            //     removeComments:true
            // }
        }),
        new HtmlWebpackPlugins({
            template:'./src/shop.html',
            filename:'shops.html',
            chunks:['car','vendor'],
            // minify:{
            //     collapseWhitespace:true,
            //     removeComments:true
            // }
        })
    ],
    mode:'development'
}