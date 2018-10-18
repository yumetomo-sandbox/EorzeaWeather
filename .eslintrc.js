// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': 0,
    'no-alert': 0,
    'no-debugger': 1,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: true
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
