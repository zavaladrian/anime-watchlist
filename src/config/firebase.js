// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8kfKwdTR-KklXBtP93oiACSDf6l6ka2Y",
  authDomain: "anime-watch-8d03c.firebaseapp.com",
  projectId: "anime-watch-8d03c",
  storageBucket: "anime-watch-8d03c.appspot.com",
  messagingSenderId: "1084155950829",
  appId: "1:1084155950829:web:dd10bb6f147e562d1bfee4",
  measurementId: "G-XGCS5XTTME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

export default app
// const analytics = getAnalytics(app);