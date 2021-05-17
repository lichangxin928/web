const { static } = require('express');
var express = require('express');

var app = express();

app.listen(3000,function(){
    console.log("server is running");
})

app.get('/',function(req,res){
    res.send("hello world");
})
app.get('/login',function(req,res){
    res.send("login");
})
app.get('/menu',function(req,res){
    res.send("menu");
}) 

app.use('/im/',express.static('./public/img/11.jpg'))
app.use('/js/',express.static('./public/js/jquery-1.12.4.js'))
// http://127.0.0.1:3000/im
// 