/* Custom webpack server properties. */
// TODO: Check others webpack options.

const Dotenv = require('dotenv-webpack');
const webpackConfig = {
  node: { global: true, fs: 'empty' }, // Fix: "Uncaught ReferenceError: global is not defined", and "Can't resolve 'fs'".
  output: {
    libraryTarget: 'umd' // Fix: "Uncaught ReferenceError: exports is not defined".
  },
  plugins: [new Dotenv()]
};

module.exports = webpackConfig; // Export all custom Webpack configs.
