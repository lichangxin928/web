/*
    index.js webpack 入口

    // 1. 运行指令
        开发环境：webpack ./src/index.js -o  ./build/built.js --mode=development
*/

function add(x,y){
    return x+y;
}
console.log(add(1,2))