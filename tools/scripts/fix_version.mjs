import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0wipuWHllQjqiGdCttJ0U6N4mHZysZPk",
  authDomain: "sapere-fe23e.firebaseapp.com",
  projectId: "sapere-fe23e",
  storageBucket: "sapere-fe23e.firebasestorage.app",
  appId: "1:183895600316:web:4a4c185768fac7873eb4b9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const snap = await getDoc(doc(db, 'system_config', 'app'));
const current = snap.data();
console.log('Current Firestore data:', JSON.stringify(current));
console.log('Current cloud version:', current?.version);

// Set version to match the app so the banner disappears
await setDoc(doc(db, 'system_config', 'app'), { ...current, version: '1.1.7' }, { merge: true });
console.log('✅ Updated Firestore version to 1.1.7');
process.exit(0);
