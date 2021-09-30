import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDy64Lzh4YElyfoVIo5WUUiGSqKtn_O4UQ",
  authDomain: "clothy-e6252.firebaseapp.com",
  projectId: "clothy-e6252",
  storageBucket: "clothy-e6252.appspot.com",
  messagingSenderId: "982267000333",
  appId: "1:982267000333:web:3c9d64230c2d6f0d8fc744",
  measurementId: "G-J0NCGXPJKB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
