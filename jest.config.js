const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./src/tsconfig.json');

module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/.next/**/*.js',
    '!src/testUtils/**/*.js',
    '!src/styles/**/*.js',
    '!src/server/**/*.js',
    '!src/next.config.js',
    '!**/*.style.js',
    '!**/*.style.ts',
    '!**/__mocks__/**',
    '!**/__tests__/**',
    "!**/*.d.ts"
  ],
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTestFramework.js'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
    '^.+\\.(scss|css)$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|ts|tsx|css|scss|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  testRegex: '/__tests__/.*\\.(test|spec)\\.(t|j)sx?$',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
