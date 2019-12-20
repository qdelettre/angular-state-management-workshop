module.exports = {
  name: 'todo-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ],
  coverageReporters: ['text-summary'],
  testMatch: ["**/?(*.)+(spec).ts"],
  testPathIgnorePatterns: ['.*e2e-spec.ts$']
};
