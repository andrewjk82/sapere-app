import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "AIzaSy...", // I will just use the config from src/firebase/config.js
};
// Wait, a better way is to run a script that imports from the project directly
