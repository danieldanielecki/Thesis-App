module.exports = {
  name: 'not-found',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/not-found',
  setupFiles: [
    './../../node_modules/jest-canvas-mock/lib/index.js' // Get rid off HTMLCanvasElement.prototype.getContext, and canvas errors. Now no need to mock in the test file explicitly.
  ]
};
