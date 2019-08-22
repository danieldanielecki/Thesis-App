// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: process.env.FIREBASE_API_KEY_DEVELOPMENT,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN_DEVELOPMENT,
    databaseURL: process.env.FIREBASE_DATABASE_URL_DEVELOPMENT,
    projectId: process.env.FIREBASE_PROJECT_ID_DEVELOPMENT,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET_DEVELOPMENT,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_DEVELOPMENT,
    appId: process.env.FIREBASE_APP_ID_DEVELOPMENT
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
