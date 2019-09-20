module.exports = {
  name: 'todo-app',
  preset: 'jest-preset-angular',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest'
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  collectCoverage: false, // must be false, otherwise local debug does not work. Must be true in angular.json!
  coverageReporters: ['text-summary'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testRegex: ['.*spec.ts$'],
  testPathIgnorePatterns: ['.*e2e-spec.ts$']
};
