import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snapshot = await db.collection('questions').where('chapterId', '==', 'y9-5').where('topicId', '==', 'y9-5c').get();
  const list = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    list.push({ id: doc.id, question: data.question, type: data.type, answer: data.answer });
  });
  list.sort((a, b) => a.id.localeCompare(b.id));

  console.log('Total questions in y9-5c:', list.length);
  list.forEach(item => {
    console.log(`- ID: ${item.id} | Type: ${item.type} | Q: ${item.question} | Ans: ${item.answer}`);
  });
  process.exit(0);
}

run();
