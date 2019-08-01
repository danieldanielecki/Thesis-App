/* Custom webpack properties. */
// TODO: Check others webpack options.

const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');
const WebpackConfigFactory = require('@nestjs/ng-universal')
  .WebpackConfigFactory;

const isCiBuild = !!process.env.CI; // Indicate that this is a CI environment.

// Secrets declaration with empty string initialization.
let agastyaApiKey = '';
let firebaseApiKeyDevelopment = '';
let firebaseApiKeyProduction = '';
let mailAccount = '';
let mailHost = '';
let mailPassword = '';
let mailPort = '';
let recaptchaApiKey = '';

// Depending by if this is a CI environment or if this is a local development take the secrets from the appropriate location.
if (isCiBuild) {
  agastyaApiKey = process.env.AGASTYA_API_KEY;
  firebaseApiKeyDevelopment = process.env.FIREBASE_API_KEY_DEVELOPMENT;
  firebaseApiKeyProduction = process.env.FIREBASE_API_KEY_PRODUCTION;
  mailAccount = process.env.MAIL_ACCOUNT;
  mailHost = process.env.MAIL_HOST;
  mailPassword = process.env.MAIL_PASSWORD;
  mailPort = process.env.MAIL_PORT;
  recaptchaApiKey = process.env.RECAPTCHA_API_KEY;
} else {
  const secrets = require('./.config/secrets');
  agastyaApiKey = secrets.AGASTYA_API_KEY;
  firebaseApiKeyDevelopment = secrets.FIREBASE_API_KEY_DEVELOPMENT;
  firebaseApiKeyProduction = secrets.FIREBASE_API_KEY_PRODUCTION;
  mailAccount = secrets.MAIL_ACCOUNT;
  mailHost = secrets.MAIL_HOST;
  mailPassword = secrets.MAIL_PASSWORD;
  mailPort = secrets.MAIL_PORT;
  recaptchaApiKey = secrets.RECAPTCHA_API_KEY;
}

// Nest server's bundle for SSR.
const config = WebpackConfigFactory.create(webpack, {
  server: './server/main.nest.ts'
});

// Ignore all "node_modules" when making bundle on the server.
config.externals = nodeExternals({
  // The whitelisted ones will be included in the bundle.
  whitelist: [/^ng-circle-progress/, /^ng2-tel-input/]
});

// Set up output folder.
config.output = {
  filename: 'index.js', // Important in terms of Firebase Cloud Functions, because this is the default starting file to execute Cloud Functions.
  libraryTarget: 'umd', // Important in terms of Firebase Cloud Functions, because otherwise function can't be triggered in functions directory.
  path: path.join(__dirname, 'functions') // Output path.
};

// Define plugins.
config.plugins = [
  // Fix WARNING Critical dependency: the request of a dependency is an expression.
  new webpack.ContextReplacementPlugin(
    /(.+)?angular(\\|\/)core(.+)?/,
    path.join(__dirname, 'apps/ditectrev/src'), // Location of source files.
    {} // Map of routes.
  ),
  // Fix WARNING Critical dependency: the request of a dependency is an expression.
  new webpack.ContextReplacementPlugin(
    /(.+)?express(\\|\/)(.+)?/,
    path.join(__dirname, 'apps/ditectrev/src'), // Location of source files.
    {}
  ),
  // Export the secrets as ready to inject global variables across the application (declare const SECRET_NAME: string; is still required in the module where it's supposed to be injected).
  new webpack.DefinePlugin({
    AGASTYA_API_KEY: JSON.stringify(agastyaApiKey),
    FIREBASE_API_KEY_DEVELOPMENT: JSON.stringify(firebaseApiKeyDevelopment),
    FIREBASE_API_KEY_PRODUCTION: JSON.stringify(firebaseApiKeyProduction),
    MAIL_ACCOUNT: JSON.stringify(mailAccount),
    MAIL_HOST: JSON.stringify(mailHost),
    MAIL_PASSWORD: JSON.stringify(mailPassword),
    MAIL_PORT: JSON.stringify(mailPort),
    RECAPTCHA_API_KEY: JSON.stringify(recaptchaApiKey)
  })
];

config.target = 'node'; // It makes sure not to bundle built-in modules like "fs", "path", etc.

module.exports = config; // Export all custom configs.
