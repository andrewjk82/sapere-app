import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { allQuestions } from '../src/scripts/importYear7Ch10A.js';

console.log('Starting direct Year 7 Chapter 10A (Integers) direct sync...');

const serviceAccountPath = '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

const runDirectSync = async () => {
  const qRef = db.collection('questions');
  
  console.log('Force resetting existing Year 7 Chapter 10A (y7-10a) questions in Firestore...');
  const topicsToDelete = ['y7-10a'];
  
  let deletedCount = 0;
  for (const tId of topicsToDelete) {
    const snap = await qRef.where('topicId', '==', tId).get();
    for (const doc of snap.docs) {
      await doc.ref.delete();
      deletedCount++;
    }
  }
  console.log(`Successfully deleted ${deletedCount} old Chapter 10A questions.`);

  console.log(`Importing ${allQuestions.length} premium new Integers questions...`);
  let importedCount = 0;
  for (const q of allQuestions) {
    await qRef.add(q);
    importedCount++;
    console.log(`[${importedCount}/${allQuestions.length}] Imported: "${q.question.substring(0, 50)}..."`);
  }

  console.log(`\n🎉 SUCCESS! Directly imported ${importedCount} premium Chapter 10A questions into Firestore!`);
  process.exit(0);
};

runDirectSync().catch(err => {
  console.error('Direct Sync Error:', err);
  process.exit(1);
});
