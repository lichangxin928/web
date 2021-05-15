var http = require("http");
var fs = require("fs");

server = http.createServer();

server.listen(8888,function(){
    console.log("server is running......")
})

server.on("request",function(req,res){
    res.setHeader("Content-Type","text/html;charset=utf-8");
    // res.end("你好，世界");
    fs.readFile("../resource/index.html",function(err,data){
        if(err){
            res.setHeader("Content-Type","text/plain;charset=utf-8");
            res.end("文件读取失败，请稍后再试");
        }else{
            res.end(data);
        }
    })
})