module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'linebreak-style': 0,
  },
};
