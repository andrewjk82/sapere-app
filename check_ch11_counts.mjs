import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0wipuWHllQjqiGdCttJ0U6N4mHZysZPk",
  authDomain: "sapere-fe23e.firebaseapp.com",
  projectId: "sapere-fe23e",
  storageBucket: "sapere-fe23e.firebasestorage.app",
  messagingSenderId: "183895600316",
  appId: "1:183895600316:web:4a4c185768fac7873eb4b9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function main() {
  console.log('Querying Firestore for Chapter 11 questions...');
  const col = collection(db, 'questions');

  // Get all ch11 docs - just fetch field data, not full docs
  const snap = await getDocs(query(col, where('chapterId', '==', 'y10-11')));
  const byTopic = {};
  snap.forEach(doc => {
    const t = doc.data().topicId;
    byTopic[t] = (byTopic[t] || 0) + 1;
  });
  console.log('chapterId == y10-11 total:', snap.size);
  console.log('  breakdown by topicId:', byTopic);

  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
