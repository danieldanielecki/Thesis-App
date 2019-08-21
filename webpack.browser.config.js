/* Custom webpack server properties. */
// TODO: Check others webpack options.
// TODO: Merge webpack into 1 file, i.e. webpack.config.js

const dotenv = require('dotenv-webpack');
const webpackConfig = {
  node: { global: true, fs: 'empty' }, // Fix: "Uncaught ReferenceError: global is not defined", and "Can't resolve 'fs'".
  output: {
    libraryTarget: 'umd' // Fix: "Uncaught ReferenceError: exports is not defined".
  },
  plugins: [new dotenv()]
};

module.exports = webpackConfig; // Export all custom Webpack configs.
