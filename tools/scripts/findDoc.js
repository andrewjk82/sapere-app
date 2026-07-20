import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

async function run() {
  console.log("Searching all questions containing '12b' in id or checking chapter y11a-5...");
  const snap = await db.collection('questions')
    .where('chapterId', '==', 'y11a-5')
    .get();

  console.log(`Found ${snap.size} total questions in chapter y11a-5`);
  snap.forEach(doc => {
    const data = doc.data();
    if (data.id && data.id.includes('12b')) {
      console.log(`Match by id '12b': doc.id=${doc.id}, data.id=${data.id}`);
    } else if (doc.id.includes('12b')) {
      console.log(`Match by docId: doc.id=${doc.id}, data.id=${data.id}`);
    }
  });
}

run().catch(console.error);
