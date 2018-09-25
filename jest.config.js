module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '^static(.*)$': '<rootDir>/static$1',
    '^helpers(.*)$': '<rootDir>/src/helpers$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^.+\\.(css|scss)$': '<rootDir>/jest/css-stub.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/docs/',
    '<rootDir>/node_modules/',
    '<rootDir>/storybook/',
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/jest/test-setup.js',
};
