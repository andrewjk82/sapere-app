import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const topics = ['y8-5a', 'y8-5h'];
  
  for (const topicId of topics) {
    const snap = await db.collection('questions')
      .where('topicId', '==', topicId)
      .get();
      
    console.log(`Processing topic: ${topicId}`);
    
    for (const doc of snap.docs) {
      const data = doc.data();
      const flatHtmlKey = 'graphData.html';
      const rootHtmlValue = data[flatHtmlKey];
      
      // If we have the flat root key, let's migrate it
      if (rootHtmlValue) {
        console.log(`Migrating flat key for: ${doc.id}`);
        // First delete the flat root key, then set the nested graphData map!
        await doc.ref.update({
          [flatHtmlKey]: FieldValue.delete(),
          'geometry': FieldValue.delete()
        });
        await doc.ref.update({
          'graphData': {
            html: rootHtmlValue
          }
        });
      } else if (data.graphData && data.graphData.html) {
        // Already correct, ensure geometry is gone
        await doc.ref.update({
          'geometry': FieldValue.delete(),
          'graphData.geometry': FieldValue.delete()
        });
      }
    }
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully migrated all graphData nested structures!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
