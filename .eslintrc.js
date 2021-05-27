module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'quotes': ['warn', 'single'],
    'semi': 'warn',
    'max-len': 'off',
    'array-element-newline': 'off',
    'react/prop-types': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
  },
};
