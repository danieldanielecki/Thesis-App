const path = require('path');
const webpack = require('webpack');
const WebpackConfigFactory = require('@nestjs/ng-universal')
  .WebpackConfigFactory;

const isCiBuild = !!process.env.CI; // Indicate that this is a CI environment.

// Secrets declaration with empty string initialization.
let agastyaApiKey = '';
let firebaseApiKeyDevelopment = '';
let firebaseApiKeyProduction = '';
let recaptchaApiKey = '';

// Depending by if this is a CI environment or if this is a local development take the secrets from the appropriate location.
if (isCiBuild) {
  agastyaApiKey = process.env.AGASTYA_API_KEY;
  firebaseApiKeyDevelopment = process.env.FIREBASE_API_KEY_DEVELOPMENT;
  firebaseApiKeyProduction = process.env.FIREBASE_API_KEY_PRODUCTION;
  recaptchaApiKey = process.env.RECAPTCHA_API_KEY;
} else {
  const secrets = require('./.config/secrets');
  agastyaApiKey = secrets.AGASTYA_API_KEY;
  firebaseApiKeyDevelopment = secrets.FIREBASE_API_KEY_DEVELOPMENT;
  firebaseApiKeyProduction = secrets.FIREBASE_API_KEY_PRODUCTION;
  recaptchaApiKey = secrets.RECAPTCHA_API_KEY;
}

// Nest server for SSR.
const config = WebpackConfigFactory.create(webpack, {
  server: './server/main.ts'
});

// Set up output folder.
config.output = {
  filename: '[name].js',
  library: 'ditectrev',
  libraryTarget: 'umd',
  path: path.join(__dirname, 'dist/apps/ditectrev-server')
};

// Define plugins.
config.plugins = [
  // Fix WARNING Critical dependency: the request of a dependency is an expression.
  new webpack.ContextReplacementPlugin(
    /(.+)?angular(\\|\/)core(.+)?/,
    path.join(__dirname, 'apps/ditectrev/src'), // location of your src
    {} // a map of your routes
  ),
  // Fix WARNING Critical dependency: the request of a dependency is an expression.
  new webpack.ContextReplacementPlugin(
    /(.+)?express(\\|\/)(.+)?/,
    path.join(__dirname, 'apps/ditectrev/src'),
    {}
  ),
  // Export the secrets as ready to inject global variables across the application (declare const SECRET_NAME: string; is still required in the module where it's supposed to be injected).
  new webpack.DefinePlugin({
    AGASTYA_API_KEY: JSON.stringify(agastyaApiKey),
    FIREBASE_API_KEY_DEVELOPMENT: JSON.stringify(firebaseApiKeyDevelopment),
    FIREBASE_API_KEY_PRODUCTION: JSON.stringify(firebaseApiKeyProduction),
    RECAPTCHA_API_KEY: JSON.stringify(recaptchaApiKey)
  })
];

module.exports = config; // Export all custom configs.
