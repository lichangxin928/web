// 区别
// 分场景进行
// 客户端渲染不利于 SEO 搜索引擎优化
// 服务端渲染可以被爬虫抓取到，利于搜索到
// 
http = require('http');
fs = require('fs');

var server = http.createServer();

server.listen(8888,function(){
    console.log("server is running....");
})

server.on("request",function(req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8')
    var url = req.url;
    if(url == '/'){
        fs.readFile('./views/index.html',function(err,data){
            if(err){
               return res.end("404 not found");
            }else{
                res.end(data);
            }
        })
    }else if(url.indexOf('/public/') == 0){
        console.log(url);
        fs.readFile('.'+url,function(err,data){
            if(err){
                return res.end('404 not found')
            }else if(url.indexOf('.jpg')>-1){
                res.setHeader('Content-Type','image/jpeg')
                res.end(data);
            }else {
                res.end(data)
            }
            
        })
    }
})