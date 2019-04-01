module.exports = {
  name: 'not-found',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/not-found',
  setupFiles: [
    './../../node_modules/three/build/three.min.js', // Replace import * as Three from 'three' in the test file.
    './../../node_modules/jest-canvas-mock/lib/index.js' // Get rid off HTMLCanvasElement.prototype.getContext, and canvas errors. Now no need to mock in the test file explicitly.
  ]
};
