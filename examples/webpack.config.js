const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const examples = path.resolve(process.cwd(), 'examples')
const sandbox = path.join(examples, 'src', 'sandbox')

const reactYandexMaps = path.resolve(process.cwd(), 'src')

const vendor = [
  'react',
  'react-dom'
]

module.exports = {

  // devtool: 'cheap-module-eval-source-map',

  devServer: {
    historyApiFallback: true
  },

  entry: {
    vendor: vendor,
    index: examples + '/src/index.js'
  },

  resolve: {
    alias: {
      'react-yandex-maps': reactYandexMaps,
      'sandbox': sandbox
    }
  },

  output: {
    path: examples + '/build',
    publicPath: '/',
    filename: 'static/js/[name].[chunkhash:8].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.(gif|png|svg|jpe?g)$/,
        use: [
          { loader: 'file-loader' }
        ]
      },
      {
        test: /\.json$/,
        use: [
          { loader: 'json-loader' }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: examples + '/public/index.html'
    })
  ]

}
