const { resolve } = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "[name].js",
        path: resolve(__dirname, 'built')
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                // exclude:'/node_modules/',
                loader:'eslint-loader',
                options:{
                    fix:true
                } 
            }
        ]
    },
    plugins:[],
    mode:'development'
}