import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const ids = ['y9-7a-2c', 'y9-7a-3f', 'y9-7a-6b', 'y9-7a-6c', 'y9-7a-8e'];

async function run() {
  const batch = db.batch();
  for (const id of ids) {
    const docRef = db.collection('questions').doc(id);
    batch.update(docRef, {
      graphData: FieldValue.delete()
    });
    console.log(`Queued graphData deletion for: ${id}`);
  }
  await batch.commit();
  console.log('\n✅ Successfully deleted graphData to remove duplicate bottom diagrams!');
}

run().catch(console.error);
