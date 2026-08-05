import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const snap = await db.collection('questions').where('topicId', '==', 'y11a-1A').get();
  
  const batch = db.batch();
  let count = 0;
  
  snap.forEach(doc => {
    batch.update(doc.ref, { timeLimit: 60 });
    count++;
  });
  
  if (count > 0) {
    await batch.commit();
  }
  
  console.log(`Successfully updated timeLimit to 60 for ${count} questions in y11a-1A.`);
}

run().catch(console.error);
