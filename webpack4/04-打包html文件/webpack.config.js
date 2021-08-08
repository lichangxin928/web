const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'built')
    },
    module:{
        rules:[

        ]
    },
    plugins:[
        // plugins 配置
        // html-webpack-plugin
        // 默认会创建一个空 html，再引入打包输出所有的资源（js/css）
        // 要有结构的html文件
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
    
}