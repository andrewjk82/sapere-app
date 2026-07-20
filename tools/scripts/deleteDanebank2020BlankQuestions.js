import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const snap = await db.collection('questions')
      .where('topicId', '==', 'y12a-exam-dane')
      .get();

    const toDelete = snap.docs.filter((doc) => {
      const d = doc.data();
      return !(d.question || '').trim();
    });

    console.log(`Found ${toDelete.length} blank-question docs to delete.`);
    console.log(`Sample IDs:`);
    toDelete.slice(0, 10).forEach((doc) => {
      console.log(`  - ${doc.id} (source: ${doc.data().source || 'n/a'})`);
    });

    if (toDelete.length === 0) {
      console.log('No blank questions to delete.');
      process.exit(0);
    }

    const batch = db.batch();
    toDelete.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();
    console.log(`\n✅ Deleted ${toDelete.length} blank-question documents.`);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
