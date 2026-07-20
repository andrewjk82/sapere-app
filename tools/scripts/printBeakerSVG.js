import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const doc = await db.collection('questions').doc('9dj3Ki1uzf8lrmsM9xl1').get();
  if (doc.exists) {
    console.log("Firestore SVG Question HTML:");
    console.log(doc.data().question);
  }
}

run().catch(console.error);
