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
    const data = doc.data();
    if (data.type === 'short_answer') {
      list.push({ id: doc.id, question: data.question });
    }
  });
  list.sort((a, b) => a.id.localeCompare(b.id));

  console.log('Total remaining short_answer questions in y9-4a:', list.length);
  list.forEach(item => {
    console.log(`- ID: ${item.id} | Q: ${item.question}`);
  });
  process.exit(0);
}

run();
