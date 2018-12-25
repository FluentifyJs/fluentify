const merge = require('webpack-merge')
const baseConfig = require('../build/webpack.config.dev.js')

const webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map'
})

webpackConfig.plugins = [
  require('karma-scss-preprocessor'),
  require('karma-postcss-preprocessor'),
  'karma-*'
]

const vueRule = webpackConfig.module.rules.find(rule => rule.loader === 'vue-loader')
vueRule.options = vueRule.options || {}
console.log(vueRule.options.loaders)
vueRule.options.loaders = vueRule.options.loaders || {}

vueRule.options.loaders.js = 'babel-loader'

// no need for app entry during tests
delete webpackConfig.entry

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    // basePath: '..',
    browsers: ['Chrome'],
    frameworks: ['mocha', 'chai-dom', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: [
      '../src/scss/**/*.scss',
      '../dist/fluentify.css',
      '../test/index.js'
    ],
    preprocessors: {
      '../src/scss/fluentify.scss': ['sass']
    },
    scssPreprocessor: {
      options: {
        sourceMap: false
      }
    },
    postcssPreprocessor: { options: { map: true }},
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
