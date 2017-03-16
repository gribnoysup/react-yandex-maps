const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const examples = path.resolve(process.cwd(), 'examples')
const sandbox = path.join(examples, 'src', 'sandbox')

const reactYandexMaps = path.resolve(process.cwd(), 'src')

const devServer = process.argv[1].indexOf('webpack-dev-server') !== -1

const vendor = [
  'react',
  'react-dom',
  'styled-components'
]

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {

  devtool: NODE_ENV === 'development' ? 'source-map' : '',

  devServer: {
    historyApiFallback: true,
    port: 3000
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
    publicPath: devServer ? '/' : '/react-yandex-maps/',
    filename: 'static/js/[name].[chunkhash:8].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          { loader: 'source-map-loader' }
        ]
      },
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
          {
            loader: 'file-loader',
            options: {
              name: 'static/assets/[name].[hash:8].[ext]'
            }
          }
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
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
        minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: examples + '/public/index.html'
    })
  ]

}
