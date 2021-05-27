const aliases = require('./gatsby-aliases');

module.exports = {
  siteMetadata: {
    title: 'profile-card-component',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    aliases
  ],
};
