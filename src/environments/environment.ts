// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDR3diW43L6_b9PXPwXd5HHktgZu5d79xY",
  authDomain: "ttlfg-812ce.firebaseapp.com",
  databaseURL: "https://ttlfg-812ce-default-rtdb.firebaseio.com",
  projectId: "ttlfg-812ce",
  storageBucket: "ttlfg-812ce.appspot.com",
  messagingSenderId: "409630491152",
  appId: "1:409630491152:web:b9531e6ce2fa8d63bdc095"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
