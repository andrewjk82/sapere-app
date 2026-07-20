import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snapshot = await db.collection('questions').where('chapterId', '==', 'y9-5').where('topicId', '==', 'y9-5e').get();
  const list = [];
  snapshot.forEach(doc => {
    list.push({ id: doc.id, question: doc.data().question, type: doc.data().type, answer: doc.data().answer });
  });
  list.sort((a, b) => a.id.localeCompare(b.id));

  console.log('Total questions in y9-5e:', list.length);
  console.log('Remaining questions from index 39:');
  const slice = list.slice(39);
  slice.forEach((item, index) => {
    console.log(`${index + 40}. ID: ${item.id} | Type: ${item.type} | Q: ${item.question} | Ans: ${item.answer}`);
  });
  process.exit(0);
}

run();
