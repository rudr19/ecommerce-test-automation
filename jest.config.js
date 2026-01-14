module.exports = {
  testEnvironment: 'node',
  testTimeout: 30000,
  testMatch: ['**/tests/**/*.test.ts'],
  transform: {
    '^.+\.ts$': ['ts-jest', {
      tsconfig: {
        esModuleInterop: true,
      },
    }],
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverageFrom: [
    'pages/**/*.ts',
    'utils/**/*.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './html-test-report',
        filename: 'test-report.html',
        expand: true,
        openReport: false,
        pageTitle: 'SDET Test Report',
      },
    ],
  ],
};
