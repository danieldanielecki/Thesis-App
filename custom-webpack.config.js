// TODO: Remove this once figuring out how to make 1 webpack on SSR, i.e. all should be from webpack.config.json.

const webpack = require('webpack');

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
let sessionSecret = '';

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
  sessionSecret = process.env.SESSION_SECRET;
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
  sessionSecret = secrets.SESSION_SECRET;
}

// Export the secrets as ready to inject global variables across the application (declare const SECRET_NAME: string; is still required in the module where it's supposed to be injected).
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      AGASTYA_API_KEY: JSON.stringify(agastyaApiKey),
      FIREBASE_API_KEY_DEVELOPMENT: JSON.stringify(firebaseApiKeyDevelopment),
      FIREBASE_API_KEY_PRODUCTION: JSON.stringify(firebaseApiKeyProduction),
      MAIL_ACCOUNT: JSON.stringify(mailAccount),
      MAIL_HOST: JSON.stringify(mailHost),
      MAIL_PASSWORD: JSON.stringify(mailPassword),
      MAIL_PORT: JSON.stringify(mailPort),
      RECAPTCHA_API_KEY: JSON.stringify(recaptchaApiKey),
      SESSION_SECRET: JSON.stringify(sessionSecret)
    })
  ]
};
