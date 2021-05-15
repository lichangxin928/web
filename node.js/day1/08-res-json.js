var http = require("http");

var server = http.createServer();

server.listen(1234,function(){
    console.log("服务器启动成功！");
})
server.on('request',function(req,res){

    let data = [{
        name:'apple',
        price:2999
    },
    {
        name:'bannna',
        price:1111
    }
    ];
    res.end(JSON.stringify(data));
})