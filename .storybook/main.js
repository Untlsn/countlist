const aliases = require('./aliases');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/stories.mdx',
    '../src/**/stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config) => ({
    ...config,
    ...aliases,
  })
};