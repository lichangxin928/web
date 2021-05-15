// 1. EcamScript 
//      没有DOM，BOM 
// 2. 核心模块
//     node 为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中
//     ，例如文件操作中的 fs 模块，http 服务器中构建的 http 模块，os 操作系统信息模块
// 3. 导出内容，require 会返回一个 import 对象，在另一个文件用 export 来对其进行赋值，作为require的返回值
// 这样就能实现在一个模块中使用另一个模块的变量或者函数，类似于 java 中的 import