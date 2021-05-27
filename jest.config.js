module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
    '^.+\\.svg$': '<rootDir>/svg-transform.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  moduleNameMapper: require('./jest-alias'),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: ['<rootDir>/loadershim.js'],
};
