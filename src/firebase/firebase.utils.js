import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDds9HXsgU6jFviDkbswBPM5rD2qKlvM84",
  authDomain: "crowny-eeb67.firebaseapp.com",
  projectId: "crowny-eeb67",
  storageBucket: "crowny-eeb67.appspot.com",
  messagingSenderId: "339830441982",
  appId: "1:339830441982:web:38179f599b3793f2e5e2af",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
