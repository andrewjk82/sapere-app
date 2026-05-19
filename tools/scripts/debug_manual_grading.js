import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import fs from 'fs';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "dummy",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "dummy",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "sapere-fe23e",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "dummy",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "dummy",
  appId: process.env.VITE_FIREBASE_APP_ID || "dummy",
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID || "dummy"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function main() {
  try {
    const snap = await getDocs(collection(db, 'manual_grading'));
    const items = snap.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        userName: data.userName,
        questionText: data.questionText,
        hasAnswerImage: !!data.answerImage,
        answerImageLength: data.answerImage ? data.answerImage.length : 0,
        hasAnswerImages: !!data.answerImages,
        answerImagesCount: data.answerImages ? data.answerImages.length : 0,
        answerImagePreview: data.answerImage ? data.answerImage.substring(0, 50) : null
      };
    });
    console.log(JSON.stringify(items, null, 2));
  } catch (err) {
    console.error(err);
  }
}

main();
