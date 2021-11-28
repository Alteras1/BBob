const fs = require('fs');

const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));

module.exports = {
  verbose: true,
  coverageDirectory: './coverage/',
  collectCoverage: true,
  transform: {
    '\\.[jt]sx?$': ['@swc/jest', { ...config }],
  },
};
