export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: process.env.FIREBASE_API_KEY_PRODUCTION,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN_PRODUCTION,
    databaseURL: process.env.FIREBASE_DATABASE_URL_PRODUCTION,
    projectId: process.env.FIREBASE_PROJECT_ID_PRODUCTION,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET_PRODUCTION,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_PRODUCTION,
    appId: process.env.FIREBASE_APP_ID_PRODUCTION
  }
};
