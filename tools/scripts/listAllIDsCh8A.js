import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y7-8a')
    .get();

  console.log(`Total questions for y7-8a in Firestore: ${snap.size}`);
  snap.docs.forEach(doc => {
    const data = doc.data();
    console.log(`ID: ${doc.id} | Question: ${data.question.slice(0, 100)}`);
  });
}

run().catch(console.error);
