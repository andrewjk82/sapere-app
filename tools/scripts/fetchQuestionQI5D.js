import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const doc = await db.collection('questions').doc('QI5DQcKVRxmdWBVFdPka').get();
  if (doc.exists) {
    console.log("Document QI5DQcKVRxmdWBVFdPka:");
    console.log(JSON.stringify(doc.data(), null, 2));
  } else {
    console.log("Not found.");
  }
}

run().catch(console.error);
