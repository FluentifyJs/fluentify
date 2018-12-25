/* eslint-disable no-undef */
const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { resolve } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const {
  filename,
  version
} = require('./utils')

const plugins = [
  new webpack.DefinePlugin({
    '__VERSION__': JSON.stringify(version),
    'process.env.NODE_ENV': '"test"'
  }),
  new VueLoaderPlugin(),
  new UglifyJsPlugin()
]

module.exports = {
  output: {
    path: resolve(__dirname, '../dist'),
    filename: `${filename}.common.js`
  },
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.vue', '.jsx', 'css'],
    alias: {
      'src': resolve(__dirname, '../src'),
      'test': resolve(__dirname, '../test')
    }
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        use: 'babel-loader',
        include: [
          resolve(__dirname, '../src'),
          resolve(__dirname, '../test')
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [require('postcss-cssnext')()]
        }
      },
      {
        loader: 'css-loader',
        test: /\.css$/
      }
    ]
  },
  plugins
}
