import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('topicId', '==', 'y10-5a').get();
  console.log('Total Y10 5A questions in DB:', snap.size);
  const docs = snap.docs.map(d => ({ id: d.id, question: d.data().question, type: d.data().type }));
  docs.sort((a, b) => a.id.localeCompare(b.id));
  docs.forEach((d, idx) => {
    console.log(`[${idx+1}] ID: ${d.id} | Type: ${d.type} | Q: ${d.question?.substring(0, 60)}...`);
  });
  process.exit(0);
})();
