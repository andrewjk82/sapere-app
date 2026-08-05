import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const idsToDelete = [
    'y9-7a-q4a',
    'y9-7a-q4b',
    'y9-7a-q4c',
    'y9-7a-q4d',
    'y9-7a-q4e',
    'y9-7a-q4f'
  ];
  
  const batch = db.batch();
  for (const id of idsToDelete) {
    const docRef = db.collection('questions').doc(id);
    batch.delete(docRef);
  }
  
  await batch.commit();
  console.log(`Successfully deleted ${idsToDelete.length} invalid questions missing graphData.`);
}

run().catch(console.error);
