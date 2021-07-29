const path = require("path");
const reactCompat = path.resolve(__dirname, '../node_modules/preact/compat');

module.exports = {
  webpackFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          '~': path.resolve(__dirname, '../src'),
          'react': reactCompat,
          'react-dom': reactCompat,
        },
      },
    };
  },
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ]
};