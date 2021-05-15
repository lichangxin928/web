// node 可以创建一服务器

// 1. 引入 http 核心模块

var http = require("http");

// 2. 使用 http.creatServer() 方法创建一个web服务器,返回一个 server 实例

var server = http.createServer();

// 3. 提供对数据的服务
/**
 * 发送请求
 * 接受请求
 * 处理请求
 * 发送响应
 * 注册请求时间
 * 当客户端请求过来，就会自动出发服务器的 request 请求事件，然后执行第二个参数：回调处理
 */

// 注册请求事件，当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数，回调处理
server.on('request',function(){
    // 服务器打印的日志
    console.log("收到客户端的请求了");
})

// 4. 绑定端口号，启动服务器
server.listen(8888,function(){
    // 同样服务器端打印
    console.log("服务器启动成功")
});





