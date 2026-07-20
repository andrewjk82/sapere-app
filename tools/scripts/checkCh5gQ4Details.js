import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const ids = ['y9-5g-q4a', 'y9-5g-q4b', 'y9-5g-q4c', 'y9-5g-q4d', 'y9-5g-q4e', 'y9-5g-q4f', 'y9-5g-q4g', 'y9-5g-q4h', 'y9-5g-q4i'];
  for (const id of ids) {
    const doc = await db.collection('questions').doc(id).get();
    console.log(`${id} | Q: "${doc.data().question}" | Ans: "${doc.data().answer}"`);
  }
  process.exit(0);
}

run();
