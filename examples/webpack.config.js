const path = require('path');

// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ifJSFile = filename => /\.js$/.test(filename);

const ifExample = filename => /\.example\.js/.test(filename);

const ifNotExample = filename => ifJSFile(filename) && !ifExample(filename);

module.exports = {
  entry: {
    client: path.resolve(__dirname, 'src', 'client.js'),
  },

  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: ifExample,
        include: [/src/],
        use: [{ loader: 'raw-loader' }],
      },
      {
        test: ifNotExample,
        include: [/src/],
        use: [{ loader: 'babel-loader' }],
      }
    ],
  },

  resolve: {
    alias: {
      'react-yandex-maps': path.resolve(__dirname, '..', 'src'),
    },
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    })
  ],

  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 4242,
  },
};
