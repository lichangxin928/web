// 在 node 中运用 template

// 1. 安装 npm install art-template
// 2. 只需要使用文件模块中加载 art-template
//      只需要使用 require 方法加载就可以了：require('art-template')
//      参数中的 art-template 就是下载的包的名字
//      install 了什么就是，require 中的就是什么
// 3. 使用模板引擎

var template = require('art-template');
var fs = require('fs');
var http = require('http');

var server = http.createServer();
server.listen(9999,function(){
    console.log("server is running....");
})

server.on("request",function(req,res){
    
    fs.readFile("../resource/temp.html",function(err,data){
        if(err){
            console.log("读取文件失败");
        }else{
            var ret = template.render(data.toString(),{
                name:'jack,',
                title:"题目",
            })
        res.end(ret);
        }
    })
})


