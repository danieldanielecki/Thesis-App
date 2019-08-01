module.exports = {
  coverageDirectory: '../../coverage/libs/about-us',
  name: 'about-us',
  preset: '../../jest.config.js',
  transformIgnorePatterns: ['../../node_modules/(?!${ng-circle-progress})'] // Required to avoid failing tests due to importing ES6 modules (here: ng-circle-progress) from node_modules.
};
