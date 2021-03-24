import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRJA79k0oDpj5ir4guj_fM8ccygH5ENk0",
  authDomain: "signal-2c3cc.firebaseapp.com",
  projectId: "signal-2c3cc",
  storageBucket: "signal-2c3cc.appspot.com",
  messagingSenderId: "767387574855",
  appId: "1:767387574855:web:398dc1bb7cf3d555564762",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };
