import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y7-7a')
    .get();

  const answers = {};
  snap.docs.forEach(doc => {
    const data = doc.data();
    const ans = data.answer;
    answers[ans] = (answers[ans] || 0) + 1;
  });

  console.log("Answer index distribution for topic y7-7a in Firestore:");
  console.log(answers);
}

run().catch(console.error);
