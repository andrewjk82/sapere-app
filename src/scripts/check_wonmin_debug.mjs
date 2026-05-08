import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOSCXWaW_6R7GJHwsOPTWLNFuKxYnKdrc",
  authDomain: "sapere-app.firebaseapp.com",
  projectId: "sapere-app",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersSnap = await getDocs(collection(db, 'users'));
const wonmin = usersSnap.docs.find(d => (d.data().name || '').toLowerCase().includes('wonmin'));
if (wonmin) {
  console.log('✅ Found in users:', wonmin.id, wonmin.data().name);
  const stats = await getDocs(collection(db, 'users', wonmin.id, 'daily_stats'));
  if (stats.empty) {
    console.log('  ❌ No daily_stats found');
  } else {
    stats.docs.forEach(d => {
      const data = d.data();
      console.log(`  📅 daily_stats ID: "${d.id}" | score: ${data.score} | total: ${data.total} | completed: ${data.completed}`);
    });
  }
} else {
  const studsSnap = await getDocs(collection(db, 'students'));
  const w = studsSnap.docs.find(d => (d.data().name || '').toLowerCase().includes('wonmin'));
  if (w) {
    console.log('✅ Found in students:', w.id, w.data().name);
    const stats = await getDocs(collection(db, 'students', w.id, 'daily_stats'));
    if (stats.empty) {
      console.log('  ❌ No daily_stats found');
    } else {
      stats.docs.forEach(d => {
        const data = d.data();
        console.log(`  📅 daily_stats ID: "${d.id}" | score: ${data.score} | total: ${data.total} | completed: ${data.completed}`);
      });
    }
  } else {
    console.log('❌ Wonmin not found in either collection');
  }
}
