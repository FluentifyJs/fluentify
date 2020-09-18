module.exports = {
  root: true,
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 2015,
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'vue/no-use-v-if-with-v-for': 'off'
  },
  'overrides': [
    {
      'files': [
        '*.vue',
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      },
      'rules': {
        'indent': 'off'
      }
    }
  ]
}