import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('9dj3Ki1uzf8lrmsM9xl1');
  const snap = await docRef.get();
  if (!snap.exists) {
    console.log("Document not found!");
    return;
  }
  console.log("Firestore Data:", JSON.stringify(snap.data(), null, 2));
}

run().catch(console.error);
