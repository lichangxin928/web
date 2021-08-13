const {resolve} = require('path');

module.exports = {
    entry:{
        ab:['./src/a.js','./src/b.js'],
        cd:['./src/c.js','./src/b.js']
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[]
    },
    plugins:[],
    mode:'development'
}