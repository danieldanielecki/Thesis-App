// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
declare const FIREBASE_API_KEY_DEVELOPMENT: string;

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: FIREBASE_API_KEY_DEVELOPMENT,
    authDomain: 'thesisapp-dev.firebaseapp.com',
    databaseURL: 'https://thesisapp-dev.firebaseio.com',
    projectId: 'thesisapp-dev',
    storageBucket: 'thesisapp-dev.appspot.com',
    messagingSenderId: '777252727052',
    appId: '1:777252727052:web:ad824ac0cb2fa178'
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
