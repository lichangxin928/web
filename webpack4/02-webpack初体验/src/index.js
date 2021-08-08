/*
    index.js webpack 入口

    // 1. 运行指令
        开发环境：webpack ./src/index.js -o  ./build --mode=development

    // 2. 结论 
        1. webpack 能够处理 js/json 文件
        2. 生产环境和开发环境能够让 es6 模块化编译成能识别的模块化
        3. 生产环境比开发环境多一个压缩 js 代码
*/
import data from './data.json';

console.log(data)
function add(x,y){
    return x+y;
}
console.log(add(1,2))