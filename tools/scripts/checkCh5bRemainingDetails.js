import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const remainingIds = [
    'y9-5b-q2m', 'y9-5b-q2n', 'y9-5b-q2o', 'y9-5b-q2p', 'y9-5b-q2q', 'y9-5b-q2r',
    'y9-5b-q3a', 'y9-5b-q3b', 'y9-5b-q3c', 'y9-5b-q3d', 'y9-5b-q3e', 'y9-5b-q3f',
    'y9-5b-q4a', 'y9-5b-q4b', 'y9-5b-q4c', 'y9-5b-q4d', 'y9-5b-q4e', 'y9-5b-q4f',
    'y9-5b-q4g', 'y9-5b-q4h', 'y9-5b-q4i', 'y9-5b-q4j', 'y9-5b-q4k', 'y9-5b-q4l'
  ];

  for (const id of remainingIds) {
    const doc = await db.collection('questions').doc(id).get();
    const data = doc.data();
    console.log(`${id} | Type: ${data.type} | Q: ${data.question} | Ans: ${data.answer}`);
  }
  process.exit(0);
}

run();
