// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCef9iCoafXk7U7QiRVUlLSXssA4SrFCIM",
  authDomain: "codernextapp.firebaseapp.com",
  projectId: "codernextapp",
  storageBucket: "codernextapp.appspot.com",
  messagingSenderId: "873078178236",
  appId: "1:873078178236:web:09b10cebf1182f34fa6bb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)