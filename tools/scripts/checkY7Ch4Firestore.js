import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('--- Checking y7-4 in Firestore ---');
    const snap = await db.collection('questions').where('chapterId', '==', 'y7-4').get();
    console.log(`questions where chapterId == 'y7-4': ${snap.size}`);

    const topicCounts = {};
    snap.docs.forEach(d => {
      const t = d.data().topicId || 'unknown';
      topicCounts[t] = (topicCounts[t] || 0) + 1;
    });
    console.log('Topic breakdown:', topicCounts);

    const idxSnap = await db.doc('question_index/y7-4').get();
    console.log('question_index/y7-4 exists:', idxSnap.exists);
    if (idxSnap.exists) {
      console.log('question_index/y7-4 keys:', Object.keys(idxSnap.data()));
    }

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
})();
