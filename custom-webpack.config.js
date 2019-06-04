// TODO: Add all keys here.
const webpack = require('webpack');

const isCiBuild = !!process.env.CI; // Indicate that this is a CI environment.

// Secrets declaration with empty string initialization.
let agastyaApiKey = '';

// Depending by if this is a CI environment or if this is a local development take the secrets from the appropriate location.
if (isCiBuild) {
  agastyaApiKey = process.env.AGASTYA_API_KEY;
} else {
  const config = require('./.config/secrets');
  agastyaApiKey = config.AGASTYA_API_KEY;
}

// Export the secrets as ready to inject global variables across the application (declare const SECRET_NAME: string; is still required in the module where it's supposed to be injected).
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      AGASTYA_API_KEY: JSON.stringify(agastyaApiKey)
    })
  ]
};
