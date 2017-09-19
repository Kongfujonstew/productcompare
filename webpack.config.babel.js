const { resolve } = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        }
        // ,
        // {
        //   test: /\.css$/,
        //   loader: ExtractTextPlugin.extract({
        //     fallback: 'style',
        //     use: 'css'
        //   }),
        // }
      ]
    }
    // ,
    // plugins: [
    //   new ExtractTextPlugin('bundle.css', {allChunks: true})
    // ]
  }
};
