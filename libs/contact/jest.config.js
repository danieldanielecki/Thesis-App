module.exports = {
  name: 'contact',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/contact',
  transformIgnorePatterns: ['../../node_modules/(?!${ng2-tel-input})'] // Required to avoid failing tests due to importing ES6 modules (here: ng2-tel-input module) from node_modules.
};
