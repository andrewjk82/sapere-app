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
    list.push({ id: doc.id, question: doc.data().question, type: doc.data().type, options: doc.data().options });
  });
  list.sort((a, b) => a.id.localeCompare(b.id));

  console.log('Total questions in y9-4a:', list.length);
  console.log('List from index 26 (27th question) to 36 (37th question):');
  
  const slice = list.slice(26, 36);
  slice.forEach((item, index) => {
    console.log(`${index + 27}. ID: ${item.id} | Type: ${item.type} | Q: ${item.question}`);
    console.log('   Options:', JSON.stringify(item.options));
  });
  process.exit(0);
}

run();
