var foo = 'abc'

function add(x,y){
    return x+y;
}

// 可以只导出一个函数，可以简单的认为是return export
module.export = add;
// exports.add = add;