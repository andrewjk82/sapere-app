import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const ids = ['9JZUyr1wjgh69tn9fj3u', '9aeB4HLTzduvPDDlLDal'];
  for (const id of ids) {
    const doc = await db.collection('questions').doc(id).get();
    if (doc.exists) {
      console.log(`Document ID: ${id}`);
      console.log("Firestore Data:", JSON.stringify(doc.data(), null, 2));
      console.log("-----------------------------------------");
    } else {
      console.log(`Document ID: ${id} NOT FOUND!`);
    }
  }
}

run().catch(console.error);
