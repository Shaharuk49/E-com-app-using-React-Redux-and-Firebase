// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_Om4KcQRq__wPQW2gYHNrKFHMOwRCti0",
  authDomain: "simple-ecom-react.firebaseapp.com",
  projectId: "simple-ecom-react",
  storageBucket: "simple-ecom-react.firebasestorage.app",
  messagingSenderId: "903410479080",
  appId: "1:903410479080:web:d6d83d4c1a645ebff3fe5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)