module.exports = {
  name: 'not-found',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/not-found',
  // TODO: Check if import of three.min.js here will be not useless. It'll be sure once the test coverage will be higher (maybe it shouldn't be included here -> check).
  setupFiles: [
    './../../node_modules/three/build/three.min.js', // Replace import * as Three from 'three' in the test file.
    './../../node_modules/jest-canvas-mock/lib/index.js' // Get rid off HTMLCanvasElement.prototype.getContext, and canvas errors. Now no need to mock in the test file explicitly.
  ]
};
