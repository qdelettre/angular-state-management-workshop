module.exports = {
  name: 'todo-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ],
  collectCoverage: true,
  coverageReporters: ['text-summary'],
  transformIgnorePatterns: ['^.+\\.js$'],
};
