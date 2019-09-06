/* Custom webpack server properties. */

const dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');
const WebpackConfigFactory = require('@nestjs/ng-universal')
  .WebpackConfigFactory;

// Nest server's bundle for SSR.
const webpackConfig = WebpackConfigFactory.create(webpack, {
  server: './server/main.ts'
});

// Ignore all "node_modules" when making bundle on the server.
webpackConfig.externals = nodeExternals({
  // The whitelisted ones will be included in the bundle.
  whitelist: [/^ng-circle-progress/, /^ng2-tel-input/]
});

// Set up output folder.
webpackConfig.output = {
  filename: 'index.js', // Important in terms of Firebase Cloud Functions, because this is the default starting file to execute Cloud Functions.
  libraryTarget: 'umd', // Important in terms of Firebase Cloud Functions, because otherwise function can't be triggered in functions directory.
  path: path.join(__dirname, 'functions') // Output path.
};

// Define plugins.
webpackConfig.plugins = [
  new dotenv(), // Handle environemntal variables on localhost.
  // Fix WARNING "Critical dependency: the request of a dependency is an expression".
  new webpack.ContextReplacementPlugin(
    /(.+)?angular(\\|\/)core(.+)?/,
    path.join(__dirname, 'apps/ditectrev/src'), // Location of source files.
    {} // Map of routes.
  ),
  // Fix WARNING "Critical dependency: the request of a dependency is an expression".
  new webpack.ContextReplacementPlugin(
    /(.+)?express(\\|\/)(.+)?/,
    path.join(__dirname, 'apps/ditectrev/src'), // Location of source files.
    {}
  )
];

webpackConfig.target = 'node'; // It makes sure not to bundle built-in modules like "fs", "path", etc.

module.exports = webpackConfig; // Export all custom Webpack configs.
