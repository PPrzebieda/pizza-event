import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD6W5NEk7GN245RhTK2meiv2-EaAG_kRd4",
  authDomain: "auth-development-c0c00.firebaseapp.com",
  projectId: "auth-development-c0c00",
  storageBucket: "auth-development-c0c00.appspot.com",
  messagingSenderId: "338733583070",
  // appId: "1:338733583070:web:0180df59c9d1e477d2104f",
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export default app;
