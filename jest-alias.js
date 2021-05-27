const createAlias = (from, useArr) => useArr.reduce((acc, cur) => ({
  ...acc,
  [`^@${cur}(.*)$`]: `<rootDir>${from}/${cur}$1`
}), {});

module.exports = {
  '^~(.*)$': '<rootDir>/src$1',
  ...createAlias('src', [
    'pages',
    'components',
    'hooks',
    'helpers',
    'assets',
    'providers',
  ]),
  ...createAlias('src/assets', ['style']),
  ...createAlias('src/components', [
    'atoms',
    'molecules',
    'organisms',
    'view',
  ])
};


