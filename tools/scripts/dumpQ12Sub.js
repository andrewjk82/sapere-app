import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const doc = await db.collection('questions').doc('y10-4g-q12').get();
  const data = doc.data();
  console.log('Question:', data.question);
  console.log('SubQuestions count:', data.subQuestions ? data.subQuestions.length : 0);
  if (data.subQuestions) {
    data.subQuestions.forEach((sub, i) => {
      console.log(`[Sub ${i+1}] ID: ${sub.id}`);
      console.log(`  Question: "${sub.question}"`);
      console.log(`  a: ${sub.a}, answer: ${sub.answer}`);
      console.log(`  options: ${JSON.stringify(sub.options)}`);
    });
  }
  process.exit(0);
})();
