import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('chapterId', '==', 'y7-4').where('topicId', '==', 'y7-4a').get();
  console.log('count:', snap.size);
  const origins = {};
  snap.docs.forEach(d => {
    const o = d.data().origin || 'none';
    origins[o] = (origins[o] || 0) + 1;
  });
  console.log('origin breakdown:', origins);
  console.log('\n--- sample docs ---');
  snap.docs.slice(0, 3).forEach(d => {
    console.log(JSON.stringify({ id: d.id, ...d.data() }, null, 2));
  });
  process.exit(0);
})();
