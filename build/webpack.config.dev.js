/* eslint-disable no-undef */
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const DashboardPlugin = require('webpack-dashboard/plugin')
const base = require('./webpack.config.base')
const { resolve, join } = require('path')
const { existsSync } = require('fs')
const {
  dllName,
  logError,
  red,
  vueLoaders
} = require('./utils')

const rootDir = resolve(__dirname, '../test')
const buildPath = resolve(rootDir, 'dist')

if (!existsSync(join(buildPath, dllName) + '.dll.js')) {
  logError(red('The DLL manifest is missing. Please run `npm run build:dll` (Quit this with `q`)'))
  process.exit(1)
}

const dllManifest = require(
  join(buildPath, dllName) + '.json'
)

module.exports = merge(base, {
  entry: {
    tests: resolve(rootDir, 'visual.js')
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: vueLoaders.scss,
        include: [
          resolve(__dirname, '../src'),
          resolve(__dirname, '../node_modules')
        ]
      },
      { 
        test: /\.(ttf|eot|woff2?|svg)$/,
        use: [
          {
            loader: 'url-loader',
          }
        ],
        include: [
          resolve(__dirname, '../src/icons')
        ]
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: join(__dirname, '..'),
      manifest: dllManifest
    }),
    new HtmlWebpackPlugin({
      chunkSortMode: 'dependency'
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve(
        join(buildPath, dllName) + '.dll.js'
      )
    }),
    new DashboardPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: resolve(__dirname, `../reports/${process.env.NODE_ENV}.html`)
    })
  ],
  devtool: '#eval-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: resolve(__dirname, '../node_modules'),
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  devServer: {
    inline: true,
    stats: {
      colors: true,
      chunks: false,
      cached: false
    },
    contentBase: buildPath
  },
  performance: {
    hints: false
  },
  node: {
    fs: 'empty'
  }
})
