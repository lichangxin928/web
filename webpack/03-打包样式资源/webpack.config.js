// 作用
/**
 * 当运行webpack的时候，会加载其中的配置
 * 所欲构架工具都是基于node.js平台来运行的 模块化默认采用 commonjs。
 */
const resolve = require('path')

module.exports = {
    // 入口起点
    entry:'./src/index.js',
    // 输出
    output:{
        // 输出文件名
        filename:'builts.js',
        // 输出路径
        path:resolve(__dirname,'build')
    },
    modules:{
        rules:[
            // 详细 loader配置   
        
        ]
            
        
    },
    // plugins的配置
    plugins:{
        // 详细的 plugins 配置
    },
    mode:'development'
}