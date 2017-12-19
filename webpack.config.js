const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env = require('yargs').argv.env;

const libraryName = 'carto-api-client';

const uglifySettings = {
  minimize: true
};

let plugins = [];

const outputFile = env !== 'build'
  ? libraryName + '.js'
  : (plugins.push(new UglifyJsPlugin(uglifySettings)),
    libraryName + '.min.js');

const config = {
  entry: path.join(__dirname, '/src/index.js'),

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src')
    ],
    extensions: ['.json', '.js']
  },

  plugins: plugins
};

module.exports = config;
