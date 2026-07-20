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

  console.log('List from index 25 (26th question) to 40 (41st question):');
  const slice = list.slice(25, 40);
  slice.forEach((item, index) => {
    console.log(`${index + 26}. ID: ${item.id} | Type: ${item.type} | Q: ${item.question} | Ans: ${item.answer}`);
  });
  process.exit(0);
}

run();
