/* eslint-disable no-undef */
const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const base = require('./webpack.config.base')
const { resolve } = require('path')
const { vueLoaders } = require('./utils')

module.exports = merge(base, {
  output: {
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /.scss$/,
        use: vueLoaders.scss,
        include: [
          resolve(__dirname, '../src')
        ]
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
      },
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: resolve(__dirname, `../reports/${process.env.NODE_ENV}.html`)
    })
  ]
})
