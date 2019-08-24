export const environment = {
  production: true,
  firebaseConfig: {
    // Make sure all environmental variables are strings.
    apiKey: String(process.env.FIREBASE_API_KEY_PRODUCTION),
    authDomain: String(process.env.FIREBASE_AUTH_DOMAIN_PRODUCTION),
    databaseURL: String(process.env.FIREBASE_DATABASE_URL_PRODUCTION),
    projectId: String(process.env.FIREBASE_PROJECT_ID_PRODUCTION),
    storageBucket: String(process.env.FIREBASE_STORAGE_BUCKET_PRODUCTION),
    messagingSenderId: String(
      process.env.FIREBASE_MESSAGING_SENDER_ID_PRODUCTION
    ),
    appId: String(process.env.FIREBASE_APP_ID_PRODUCTION)
  }
};
