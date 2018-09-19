const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const examples = path.resolve(process.cwd(), 'examples');
const sandbox = path.join(examples, 'src', 'sandbox');

const reactYandexMaps = path.resolve(process.cwd(), 'src');

const devServer = process.argv[1].indexOf('webpack-dev-server') !== -1;

const vendor = ['react', 'react-dom', 'styled-components'];

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: NODE_ENV === 'development' ? 'source-map' : '',

  mode: NODE_ENV === 'production' ? 'production' : 'development',

  devServer: {
    historyApiFallback: true,
    port: 3000,
  },

  entry: {
    vendor: vendor,
    index: examples + '/src/index.js',
  },

  resolve: {
    alias: {
      'react-yandex-maps': reactYandexMaps,
      sandbox: sandbox,
    },
  },

  output: {
    path: examples + '/build',
    publicPath: devServer ? '/' : '/react-yandex-maps/',
    filename: 'static/js/[name].[chunkhash:8].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [{ loader: 'source-map-loader' }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(gif|png|svg|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/assets/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'async',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          reuseExistingChunk: true,
        },
      },
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: examples + '/public/index.html',
    }),
  ],
};
