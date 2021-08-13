const { resolve } = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    filename: 'demo.js',
    path: resolve(__dirname, 'built'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude:'/node_modules/',
        loader: 'eslint-loader',

      },
    ],
  },
  plugins: [],
  mode: 'development',
};
