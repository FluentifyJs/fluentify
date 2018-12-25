/* eslint-disable no-undef */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolve } = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const {
  filename,
  vueLoaders
} = require('./utils')

const plugins = [
  new VueLoaderPlugin(),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: `${filename}.css`,
    chunkFilename: '[id].css',
    disable: /^(common|test)$/.test(process.env.NODE_ENV)
  })
]

module.exports = {
  mode: 'development',
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
        test: /\.js$/,
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
          use: vueLoaders,
          postcss: [require('postcss-cssnext')()]
        }
      },
      {
        loader: 'css-loader',
        test: /\.css$/
      },
      { 
        test: /\.(ttf|eot|woff2?|svg)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ],
        include: [
          resolve(__dirname, '../src/icons')
        ]
      }
    ]
  },
  plugins
}
