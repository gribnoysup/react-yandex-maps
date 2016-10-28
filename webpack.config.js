var webpack = require('webpack')
var path = require('path')

var env = JSON.stringify(process.env)

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),

  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel-loader']}
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-yandex-maps.js',
    library: 'react-yandex-maps',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.jsx', '.js']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  ],

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
}
