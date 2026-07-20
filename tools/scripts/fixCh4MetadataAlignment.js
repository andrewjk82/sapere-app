import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const batch = db.batch();
  const questionsSnapshot = await db.collection('questions').where('chapterId', '==', 'exam:year9ch4').get();
  
  console.log(`Migrating ${questionsSnapshot.size} questions from exam:year9ch4 to y9-4 / y9-4a.`);
  
  questionsSnapshot.forEach(doc => {
    const docRef = db.collection('questions').doc(doc.id);
    batch.update(docRef, {
      chapterId: 'y9-4',
      topicId: 'y9-4a',
      chapterTitle: 'Chapter 4: Factorisation',
      topicTitle: 'Factorisation using common factors'
    });
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
  console.log('Successfully completed Chapter 4 metadata alignment!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
