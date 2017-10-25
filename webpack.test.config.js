const path = require('path');

let plugins = [];

const config = {
  entry: path.join(__dirname, '/tests/test.js'),

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, '/tests'),
    filename: 'test.bundle.js'
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
