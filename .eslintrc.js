module.exports = {
  root: true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  "parserOptions": {
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "vue/no-use-v-if-with-v-for": 'off'
  }
};