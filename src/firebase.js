// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXN7rSiYTco6j2qEg0OOEZpJbNf87f1CE",
  authDomain: "clone-83593.firebaseapp.com",
  projectId: "clone-83593",
  storageBucket: "clone-83593.appspot.com",
  messagingSenderId: "701350189846",
  appId: "1:701350189846:web:1ed5f6d44ee541e3e50e37",
  measurementId: "G-VT4VR4S197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();

export {db,analytics,auth};