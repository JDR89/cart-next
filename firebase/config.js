
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth,GoogleAuthProvider} from "firebase/auth"


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
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()