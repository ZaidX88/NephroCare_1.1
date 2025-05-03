// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGaJPvVbjoAIa25Db24mlV3pIJ0fJb_7w",
  authDomain: "nero-16492.firebaseapp.com",
  projectId: "nero-16492",
  storageBucket: "nero-16492.firebasestorage.app",
  messagingSenderId: "282485758996",
  appId: "1:282485758996:web:8cb229de040a50ac26db01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);