module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^shared(.*)$': '<rootDir>/src/shared$1',
    '^@components(.*)$': '<rootDir>/src/shared/components$1',
    '^.+\\.(css|scss)$': '<rootDir>/jest/css-stub.js',
  },
};
