var http = require("http");

server = http.createServer();

server.listen(8888,function(){
    console.log("服务器创建成功！");
})

server.on("request",function(req,res){
    // 中文操作系统默认是 gbk
    // 解决方法就是正确告诉浏览器发送的内容编码是什么编码
    // 在 http 中，Content-Type 就是用来告知对方发送的数据内容是什么类型的
    
    res.setHeader('Content-Type','text/plain; charset=utf-8')
    res.end("hello 世界");
})