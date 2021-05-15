var http = require("http");

var server = http.createServer();
/**
 * request 请求事件处理函数，需要两个参数
 * 
 *  Request 请求对象，请求对象可以用来获取客户端的一些请求信息，例如请求路径
 *  Response 响应对象可以用来给客户端发送响应消息
 * 
 */
server.on('request',function(request,response){
    // https://127.0.0.1:8888

    console.log("收到客户端的请求了" + request.url);

    // response 对象有一个方法: write 可以用来给客户端发送响应数据
    // write 可以使用多次，但是最后一定要使用end来结束响应，否则会一直等待
    if(request.url == "/")
    response.write('hello');
    else if(request.url == "/login")
    response.write("login");

    response.end();

    // response.end("hello world")
})
server.listen(8888,function(){

    console.log("服务器启动成功")
});





