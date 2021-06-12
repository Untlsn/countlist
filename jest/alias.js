const fs = require('fs');
const path = require('path');

const removeStart = (str) => str.replace('/*', '');

const getCompilerOptions = (fileName) => {
  const rawData = fs.readFileSync(
    path.resolve(__dirname, fileName), 'utf-8',
  );

  return JSON.parse(rawData).compilerOptions;
};

const bootstrap = (fileName) => {
  const { baseUrl, paths } = getCompilerOptions(fileName);

  const entries = Object.entries(paths).map(
    ([key, [values]]) => [
      removeStart(`^${key}(.*)$`),
      removeStart(`<rootDir>${baseUrl}/${values}$1`),
    ],
  );

  return Object.fromEntries(entries);
};

/** @type {function(fileName: string): object} */
module.exports = bootstrap;