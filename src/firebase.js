// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAxXPFh4SXSuJqtu3U7s_4oCxTMTPJvVPQ",
  authDomain: "todo-app-99358.firebaseapp.com",
  projectId: "todo-app-99358",
  storageBucket: "todo-app-99358.appspot.com",
  messagingSenderId: "352923007929",
  appId: "1:352923007929:web:a2940ed410c65adc0bd468",
  measurementId: "G-YS4NFGG264",
});

const db = firebaseApp.firestore();

export default db;
