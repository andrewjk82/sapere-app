import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import fs from 'fs';

async function runPush() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const { Y8_CH16A_QUESTIONS } = await import('../../src/constants/seedYear8Ch16Questions.js');
  let count = 0;
  for (const q of Y8_CH16A_QUESTIONS) {
    if (!q.id.match(/q[0-9]+[a-z]$/)) continue;
    await db.collection('questions').doc(q.id).set({
      question: q.question
    }, { merge: true });
    count++;
  }
  console.log(`Updated ${count} question stems in Firestore.`);
}
runPush().catch(console.error);