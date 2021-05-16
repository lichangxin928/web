// 当通过 get 方法的时候，由于提交的数据都在 url中
// 引入 url = require('url');

http = require('http');
url = require('url');
fs = require('fs');

var server = http.createServer();

server
    .on('request',function(req,res){

        var parseObj = url.parse(req.url,true);
        var pathname = parseObj.pathname;
        var form = parseObj.query;

        console.log(pathname);
        console.log(form);

    })
    .listen(8888,function(){
        console.log('running');
    })

