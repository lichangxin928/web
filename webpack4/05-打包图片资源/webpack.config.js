const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports= {
    entry:'./src/index.html',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'built'),
        publicPath:'./'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                // 处理图片资源
                // 下载 url-loader file-loader
                test:/\.(jpg|png|gif)$/,
                // 使用一个loader
                loader:'url-loader',
                options:{
                    // 图片大小小于8kb，就会被base64处理
                    // 优点，减小请求数量，减轻服务器压力
                    // 缺点，图片体积变大（文件请求速度更慢）
                    // limit:8*1024,
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader',
                options:{
                    esModule:false
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}