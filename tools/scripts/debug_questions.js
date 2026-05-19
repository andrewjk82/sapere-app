import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, limit } from 'firebase/firestore';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkQuestions() {
  try {
    const qCol = collection(db, 'questions');
    const snapshot = await getDocs(query(qCol, limit(100)));
    
    snapshot.forEach(doc => {
      const data = doc.data();
      const question = data.question || data.text || '';
      
      if (question.includes('distance between') || question.includes('Simplify') || question.includes('scientific')) {
        console.log('\n--- Question Found ---');
        console.log('ID:', doc.id);
        console.log('Question Text:', JSON.stringify(question));
        console.log('Options:', JSON.stringify(data.options));
        console.log('Solution:', JSON.stringify(data.solution));
      }
    });
    console.log('\nScan complete.');
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
}

checkQuestions();
