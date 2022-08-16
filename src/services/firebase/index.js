// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE0iIPdBMEAmb5A3jicvsi8t7Vym7C2iE",
  authDomain: "backend34695-6703c.firebaseapp.com",
  projectId: "backend34695-6703c",
  storageBucket: "backend34695-6703c.appspot.com",
  messagingSenderId: "272687144609",
  appId: "1:272687144609:web:12ee86cd72ce7988541ae0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)