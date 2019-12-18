// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://localhost:5000/app-vote-e2401/us-central1',
  firebase: {
    apiKey: 'AIzaSyAij6oH3W1mbLg8GMWK9HT0jsrKQORhzpM',
    authDomain: 'app-vote-e2401.firebaseapp.com',
    databaseURL: 'https://app-vote-e2401.firebaseio.com',
    projectId: 'app-vote-e2401',
    storageBucket: 'app-vote-e2401.appspot.com',
    messagingSenderId: '466494665108',
    appId: '1:466494665108:web:ecc4f978d64aa418629f81'
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
