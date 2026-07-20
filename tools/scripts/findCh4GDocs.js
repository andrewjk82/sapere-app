import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('chapterId', '==', 'y7-4').get();
  const topicIds = new Set();
  
  snap.docs.forEach(doc => {
    const data = doc.data();
    if (data.topicId) {
      topicIds.add(data.topicId);
    }
  });

  console.log('All unique topicIds in Chapter 4:', Array.from(topicIds));
  
  // Find where multiplication equations reside
  snap.docs.forEach(doc => {
    const data = doc.data();
    const q = data.question || '';
    if (q.includes('\\times') || q.includes('\\div') || q.includes('Evaluate:')) {
      console.log(`MATCH -> ID: ${doc.id}, topicId: ${data.topicId}, q: "${q.substring(0, 60)}..."`);
    }
  });

  process.exit(0);
})();
