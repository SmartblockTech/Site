/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // 'react-app',
    // 'react-app/jest',
    'eslint:recommended',
    // 'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      'jsx': true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    // 'react',
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    'react/react-in-jsx-scope': 'off',
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
