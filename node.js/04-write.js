var fs = require('fs')

/**
 * 第一个参数：路径
 * 第二个参数：文件内容
 * 第三个参数 回调函数
 *      error
 * 
 *      成功：
 *          文件写入成功
 *          error 是 null
 *      失败：
 *          写入文件失败
 *          error 就是错误对象
 * 
 */
  fs.writeFile('hello.txt','大家好，我是通過node.js 写入的文件',function(error){
    if(error){
        console.log(error);
    }else{
        console.log("程序写入成功！");
    }  
  })