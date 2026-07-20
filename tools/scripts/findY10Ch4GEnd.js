import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('topicId', '==', 'y10-4g').get();
  const docs = snap.docs.map(d => ({ id: d.id, question: d.data().question, type: d.data().type }));
  
  // Sort by id naturally so we can see what exists after y10-4g-q9f
  docs.sort((a, b) => a.id.localeCompare(b.id));
  
  console.log('--- Questions list sorted by ID:');
  docs.forEach((d, i) => {
    console.log(`[${i+1}] ID: ${d.id} | Type: ${d.type} | Q: ${d.question?.substring(0, 60)}...`);
  });
  process.exit(0);
})();
