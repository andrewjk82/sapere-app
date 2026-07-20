import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snapshot = await db.collection('questions').where('chapterId', '==', 'y9-5').where('topicId', '==', 'y9-5d').get();
  const list = [];
  snapshot.forEach(doc => {
    const data = doc.data();
    list.push({ id: doc.id, question: doc.data().question, type: doc.data().type, answer: doc.data().answer });
  });
  list.sort((a, b) => a.id.localeCompare(b.id));

  console.log('Total questions in y9-5d:', list.length);
  console.log('First 15 questions in y9-5d:');
  const slice = list.slice(0, 15);
  slice.forEach((item, index) => {
    console.log(`${index + 1}. ID: ${item.id} | Type: ${item.type} | Q: ${item.question} | Ans: ${item.answer}`);
  });
  process.exit(0);
}

run();
