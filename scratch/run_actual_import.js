import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

// Read from generated JSON files to avoid relative ES module import issues
const questions5A = JSON.parse(readFileSync('/Users/andrewkim/Desktop/sapere1/scratch/questions5A.json', 'utf8'));
const questions6A = JSON.parse(readFileSync('/Users/andrewkim/Desktop/sapere1/scratch/questions6A.json', 'utf8'));

async function runImport() {
  console.log('--- RESTORING YEAR 11 ADVANCED CHAPTER 5 ---');
  // 1. Delete all old questions under chapterId == 'y11a-5' and topicCode == '5A'
  const ch5Snap = await db.collection('questions')
    .where('chapterId', '==', 'y11a-5')
    .where('topicCode', '==', '5A')
    .get();
  
  console.log(`Found ${ch5Snap.size} existing questions under Chapter 5A. Deleting...`);
  const ch5Batch = db.batch();
  ch5Snap.forEach(doc => ch5Batch.delete(doc.ref));
  await ch5Batch.commit();
  console.log('Deleted old Chapter 5A questions.');

  // 2. Insert original 11 questions for Chapter 5A
  console.log(`Inserting ${questions5A.length} original questions into Chapter 5A...`);
  for (const q of questions5A) {
    await db.collection('questions').add({
      ...q,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      isActive: true
    });
  }
  console.log('Successfully restored Chapter 5A!');

  console.log('\n--- POPULATING YEAR 11 ADVANCED CHAPTER 6 ---');
  // 3. Delete all old questions under chapterId == 'y11a-6' and topicCode == '6A'
  const ch6Snap = await db.collection('questions')
    .where('chapterId', '==', 'y11a-6')
    .where('topicCode', '==', '6A')
    .get();

  console.log(`Found ${ch6Snap.size} existing questions under Chapter 6A. Deleting...`);
  const ch6Batch = db.batch();
  ch6Snap.forEach(doc => ch6Batch.delete(doc.ref));
  await ch6Batch.commit();
  console.log('Deleted old Chapter 6A questions.');

  // 4. Insert 35 premium trigonometry questions for Chapter 6A
  console.log(`Inserting ${questions6A.length} trigonometry questions into Chapter 6A...`);
  for (const q of questions6A) {
    await db.collection('questions').add({
      ...q,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      isActive: true
    });
  }
  console.log('Successfully populated Chapter 6A!');
  
  console.log('\n--- VERIFYING FINAL COUNTS ---');
  const finalCh5Snap = await db.collection('questions')
    .where('chapterId', '==', 'y11a-5')
    .get();
  const finalCh6Snap = await db.collection('questions')
    .where('chapterId', '==', 'y11a-6')
    .get();
    
  console.log(`Final Question Count for Chapter 5 (Transformations): ${finalCh5Snap.size} questions.`);
  console.log(`Final Question Count for Chapter 6 (Trigonometry): ${finalCh6Snap.size} questions.`);
  
  process.exit(0);
}

runImport().catch(err => {
  console.error('Import process failed:', err);
  process.exit(1);
});
