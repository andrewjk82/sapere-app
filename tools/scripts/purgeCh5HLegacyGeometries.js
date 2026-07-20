import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y8-5h')
    .get();

  const batch = db.batch();
  let count = 0;

  snap.forEach(doc => {
    console.log(`Purging legacy geometries for: ${doc.id}`);
    const docRef = doc.ref;
    batch.update(docRef, {
      'geometry': FieldValue.delete(),
      'graphData.geometry': FieldValue.delete()
    });
    count++;
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log(`Successfully purged legacy geometry fields for all ${count} documents in y8-5h!`);
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
