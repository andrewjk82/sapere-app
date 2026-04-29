import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0wipuWHllQjqiGdCttJ0U6N4mHZysZPk",
  authDomain: "sapere-fe23e.firebaseapp.com",
  projectId: "sapere-fe23e",
  storageBucket: "sapere-fe23e.firebasestorage.app",
  messagingSenderId: "183895600316",
  appId: "1:183895600316:web:4a4c185768fac7873eb4b9",
  measurementId: "G-Z4WEX8H1K6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const ADMIN_EMAIL = "andrewjk82@gmail.com";
