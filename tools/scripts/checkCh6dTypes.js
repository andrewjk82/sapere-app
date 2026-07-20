import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y7-6d')
    .get();

  console.log(`Found ${snap.size} questions in topic y7-6d.`);
  const types = {};
  snap.docs.forEach(doc => {
    const data = doc.data();
    types[data.type] = (types[data.type] || 0) + 1;
    if (data.type !== 'multiple_choice' && data.type !== 'subquestions') {
      console.log(`- Non-MCQ question ID: ${doc.id}, Type: ${data.type}`);
    }
  });
  console.log("Types summary:", types);
}

run().catch(console.error);
