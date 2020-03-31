import * as firebase from "firebase";
import { config } from "./firebase.config";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default };
