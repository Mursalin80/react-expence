import * as firebase from "firebase";
import "firebase/firestore";
// import "firebase/auth";
import "firebase/analytics";

import { config } from "./firebase.config";



// If you enabled Analytics in your project, add the Firebase SDK for Analytics

firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const emailAuthProvider = firebase.auth.EmailAuthProvider();

const db = firebase.database();

export { firebase, db as default,googleAuthProvider };
