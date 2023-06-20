// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeqrEUZSnKjWI8aFdJsH_OsJusodQpA3E",
  authDomain: "helpfinal-cd25c.firebaseapp.com",
  projectId: "helpfinal-cd25c",
  storageBucket: "helpfinal-cd25c.appspot.com",
  messagingSenderId: "179560077874",
  appId: "1:179560077874:web:c8ff8c5cb6e33c0f8a7a2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);


