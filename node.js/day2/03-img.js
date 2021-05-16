http = require('http');
fs = require('fs');

var server = http.createServer();

server.listen(8888,function(){
    console.log("server is running...");
})

server.on('request',function(req,res){

    fs.readFile('./public/img/zl.jpg', function (err, data) {
        if (err) {
        
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end('文件读取失败，请稍后重试！')
        } else {
          // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
          // res.end() 支持两种数据类型，一种是二进制，一种是字符串
          // 图片就不需要指定编码了(charset=utf-8vv)，因为我们常说的编码一般指的是：字符编码
          res.setHeader('Content-Tpye', 'image/jpeg')
          res.end(data)
        }
      })

})