// 引入模板引擎
const template = require('art-template');
// 将特定模块和特点数据进行拼接
// const html = template("xxxx",{xxxx:xxxxx})
const path = require('path');

const views = path.join(__dirname,'00-temp.html');

// template 的第一个参数是绝对路径
const html = template(views,{
    people:{
        name:"zhangsan",
        age:18,
    }
})
console.log(html);
