const { resolve } = require('path');
const webpack = require('webpack');

console.log('Building  . . . process.env.NODE_ENV: ', process.env.NODE_ENV);

module.exports = (env) => {
  return {
    name: 'main',
    target: 'web',
    context: resolve('src'),
    entry:'./components/app.js',
    output: {
      filename: 'app.js',
      path: resolve('src/public')
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    devtool: process.env.NODE_ENV === 'production' ? 'none' : 'eval-source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test:/\.less$/,
          exclude:'/node_modules',
          loader:"lessloader"
        }
      ]
    }
  }
};
