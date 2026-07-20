import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('topicId', '==', 'y10-4c').get();
  const docs = snap.docs.map(d => ({ id: d.id, question: d.question, type: d.type, subQuestions: d.subQuestions ? d.subQuestions.length : 0 }));
  console.log('Total Y10 4C questions in DB:', docs.length);
  docs.forEach((d, idx) => {
    console.log(`[${idx+1}] ID: ${d.id} | Type: ${d.type} | Subs: ${d.subQuestions}`);
    console.log(`    Q: ${d.question}`);
  });
  process.exit(0);
})();
