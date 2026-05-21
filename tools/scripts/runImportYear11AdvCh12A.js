import admin from 'firebase-admin';
import { readFileSync } from 'fs';

console.log('=== STARTING FIRESTORE IMPORT PROCESS FOR YEAR 11 CHAPTER 12A ===');

// 1. Initialize Firestore Admin
const serviceAccount = JSON.parse(readFileSync('scratch/serviceAccountKey.json', 'utf8'));
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

// 2. Load Chapter 12A Questions
const questions12A = JSON.parse(readFileSync('scratch/questions12A.json', 'utf8'));
console.log(`Loaded ${questions12A.length} questions from scratch/questions12A.json.`);

async function runImport() {
  const targetChapterId = 'y11a-12';
  const targetTopicCode = '12A';

  console.log(`\n--- CLEANING UP EXISTING QUESTIONS FOR ${targetChapterId} (${targetTopicCode}) ---`);
  
  const qSnap = await db.collection('questions')
    .where('chapterId', '==', targetChapterId)
    .where('topicCode', '==', targetTopicCode)
    .get();
  
  console.log(`Found ${qSnap.size} existing questions in DB under ${targetChapterId} / ${targetTopicCode}.`);
  
  if (qSnap.size > 0) {
    console.log('Deleting existing questions...');
    const batch = db.batch();
    qSnap.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    console.log('Existing questions deleted.');
  }

  console.log(`\n--- UPLOADING ${questions12A.length} NEW QUESTIONS ---`);
  
  let count = 0;
  for (const q of questions12A) {
    // Add each question to the Firestore collection
    await db.collection('questions').add({
      ...q,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      isActive: true
    });
    count++;
    console.log(`Uploaded question ${count}/${questions12A.length}`);
  }

  console.log(`\n--- BUMPING SYNC_META/QUESTIONS VERSION ---`);
  await db.collection('sync_meta').doc('questions').set({
    version: Date.now(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  console.log('sync_meta/questions version bumped.');

  console.log(`\n=== IMPORT COMPLETE: Successfully synced ${count} questions for Year 11 Chapter 12A! ===`);
  process.exit(0);
}

runImport().catch(err => {
  console.error('Import failed with error:', err);
  process.exit(1);
});
