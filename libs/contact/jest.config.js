module.exports = {
  coverageDirectory: '../../coverage/libs/contact',
  name: 'contact',
  preset: '../../jest.config.js',
  transformIgnorePatterns: ['../../node_modules/(?!${ng2-tel-input})'] // Required to avoid failing tests due to importing ES6 modules (here: ng2-tel-input module) from node_modules.
};
