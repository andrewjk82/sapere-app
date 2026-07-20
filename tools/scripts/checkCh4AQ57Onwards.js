import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snapshot = await db.collection('questions').where('chapterId', '==', 'y9-4').where('topicId', '==', 'y9-4a').get();
  const list = [];
  snapshot.forEach(doc => {
    list.push({ id: doc.id, question: doc.data().question, type: doc.data().type });
  });
  list.sort((a, b) => a.id.localeCompare(b.id));

  console.log('List from index 56 (57th question) to 66 (67th question):');
  const slice = list.slice(56, 66);
  slice.forEach((item, index) => {
    console.log(`${index + 57}. ID: ${item.id} | Type: ${item.type} | Q: ${item.question}`);
  });
  process.exit(0);
}

run();
