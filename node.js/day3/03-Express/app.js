// 引入

var express = require('express');

// 创建服务器应用程序

var app = express();

// 当服务器收到 get 请求是，执行回调函数

app.get('/',function(req,res){
    res.send("hello express");
})
app.get('/about',function(req,res){
    res.send("你好，我是express");
})

app.listen(3000,function(){
    console.log("running.....");
})

// 公开指定目录
// 可以开放 ./public/xxx 中的资源
app.use('/public/',express.static('./public/'))