
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

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
const db = getFirestore(app);

async function checkCount() {
  const q = query(collection(db, 'questions'), where('chapterId', '==', 'y10-4'));
  const snap = await getDocs(q);
  console.log(`Total questions for y10-4: ${snap.size}`);
  process.exit(0);
}

checkCount();
