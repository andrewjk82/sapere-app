import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const topics = ['y10-5b', 'y10-5c', 'y10-5d', 'y10-5e', 'y10-5f', 'y10-5g'];
  
  for (const topicId of topics) {
    const snap = await db.collection('questions').where('topicId', '==', topicId).get();
    console.log(`\n================ ${topicId} (Count: ${snap.size}) ================`);
    const docs = snap.docs.map(d => ({ id: d.id, question: d.data().question, type: d.data().type }));
    docs.sort((a, b) => a.id.localeCompare(b.id));
    docs.forEach((d, idx) => {
      console.log(`[${idx+1}] ID: ${d.id} | Type: ${d.type} | Q: ${d.question?.substring(0, 60)}...`);
    });
  }
  process.exit(0);
})();
