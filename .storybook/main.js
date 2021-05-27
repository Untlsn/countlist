const aliases = require('./aliases');

module.exports = {
  webpackFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: aliases,
      },
    };
  },
  'stories': [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/stories.@(js|jsx|ts|tsx|mdx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
};