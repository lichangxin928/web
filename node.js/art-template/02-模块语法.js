const template = require('art-template');
const path = require('path');

const views = path.join(__dirname,'00-temp.html');

// template 的第一个参数是绝对路径
const html = template(views,{
    people:{
        name:"zhangsan",
        age:18,
    },
    sum:{
        a:3,
        b:4
    },
    data:{
        content:'<p>哈哈哈哈或或或</p>'
    }
})
console.log(html);