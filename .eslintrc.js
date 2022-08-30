const RULES = {
  O: 'off',
  W: 'warn',
  E: 'error',
  T: 'true',
  F: 'false'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': RULES.O,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'eol-last': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/prop-types': 0
  }
}