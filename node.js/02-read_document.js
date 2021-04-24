// 浏览器中没有读取文件的功能
// node.js 中有操作文件的能力

// fs 是file-system 的简写，就是文件系统的意思
// 在node 中如过果想要进行文件操作就必须引入fs这个核心模块

// 步骤

// 1.使用 require 方法加载 fs 核心模块
var fs = require('fs');

// 2.读取文件
/**
 * 第一个参数是要读取的文件路径
 * 第二个参数是回调函数
 * 
 * 成功：
 *      data 数据
 *      error null
 * 失败：
 *      data null
 *      error 错误对象
 * 
 */
fs.readFile('03-test.txt',function(error,data){
    console.log(data.toString());
})