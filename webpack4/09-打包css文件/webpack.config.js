const path = require('path');

module.exports = {
    entry:'./src/js/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    // 作用是将样式插入到dom中，方法是在head中插入一个style标签，并把样式写道这个标签的innerHTML中
                    'style-loader',
                    // 处理 css 中的 @import 和 url 这种外部资源
                    'css-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins:[
        // 详细的 plugins 配置
    ],
    // 模式
    // 开发模式
    mode:'development'
}