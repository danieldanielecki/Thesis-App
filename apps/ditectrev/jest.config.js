module.exports = {
  name: 'ditectrev',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ditectrev/',
  setupFiles: [
    './../../node_modules/particles.js/particles.js', // Replace import * as particlesJS from 'particles.js' in the test file.
    './../../node_modules/jest-canvas-mock/lib/index.js' // Get rid off HTMLCanvasElement.prototype.getContext error. Now no need to mock it in the file explicitly.
  ]
};
