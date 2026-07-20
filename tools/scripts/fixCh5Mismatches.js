import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  const mismatches = [
    { id: 'y9-5e-q11a', chapterId: 'y9-5', topicId: 'y9-5e', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicTitle: 'Using linear equations to solve problems' },
    { id: 'y9-5g-q4a', chapterId: 'y9-5', topicId: 'y9-5g', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicTitle: 'Inequalities' },
    { id: 'y9-5g-q4b', chapterId: 'y9-5', topicId: 'y9-5g', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicTitle: 'Inequalities' },
    { id: 'y9-5g-q4c', chapterId: 'y9-5', topicId: 'y9-5g', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicTitle: 'Inequalities' },
    { id: 'y9-5g-q4d', chapterId: 'y9-5', topicId: 'y9-5g', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicTitle: 'Inequalities' },
    { id: 'y9-5g-q4e', chapterId: 'y9-5', topicId: 'y9-5g', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicTitle: 'Inequalities' },
    { id: 'y9-5g-q4f', chapterId: 'y9-5', topicId: 'y9-5g', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicTitle: 'Inequalities' },
    { id: 'y9-5g-q4g', chapterId: 'y9-5', topicId: 'y9-5g', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicTitle: 'Inequalities' },
    { id: 'y9-5g-q4h', chapterId: 'y9-5', topicId: 'y9-5g', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicTitle: 'Inequalities' },
    { id: 'y9-5g-q4i', chapterId: 'y9-5', topicId: 'y9-5g', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicTitle: 'Inequalities' },
    { id: 'y9-5i-q6', chapterId: 'y9-5', topicId: 'y9-5i', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicTitle: 'Revision' },
    { id: 'y9-5i-q7', chapterId: 'y9-5', topicId: 'y9-5i', chapterTitle: 'Chapter 5: Linear equations and inequalities', topicTitle: 'Revision' }
  ];

  console.log(`Migrating ${mismatches.length} mismatched questions to chapterId = y9-5 and their correct topicIds.`);

  mismatches.forEach(item => {
    const docRef = questionsCol.doc(item.id);
    batch.update(docRef, {
      chapterId: item.chapterId,
      topicId: item.topicId,
      chapterTitle: item.chapterTitle,
      topicTitle: item.topicTitle
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
  console.log('Successfully aligned all mismatched Chapter 5 questions!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
