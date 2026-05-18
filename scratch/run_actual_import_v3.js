import admin from 'firebase-admin';
import { readFileSync } from 'fs';

console.log('=== STARTING FIRESTORE IMPORT PROCESS (V3 UNIFIED) ===');

// 1. Initialize Firestore Admin
const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

// 2. Load all target datasets
const questions5A = JSON.parse(readFileSync('scratch/questions5A.json', 'utf8'));
const questions6A = JSON.parse(readFileSync('scratch/questions6A_all.json', 'utf8'));
const questions7A = JSON.parse(readFileSync('scratch/questions7A.json', 'utf8'));

async function runImport() {
  // ==========================================
  // A. YEAR 11 ADVANCED CHAPTER 5A (RESTORE)
  // ==========================================
  console.log('\n--- RESTORING YEAR 11 ADVANCED CHAPTER 5A ---');
  
  const ch5Snap = await db.collection('questions')
    .where('chapterId', '==', 'y11a-5')
    .where('topicCode', '==', '5A')
    .get();
  
  console.log(`Found ${ch5Snap.size} existing questions in 5A. Deleting...`);
  
  const ch5Batch = db.batch();
  ch5Snap.forEach(doc => ch5Batch.delete(doc.ref));
  await ch5Batch.commit();
  console.log('Chapter 5A clean completed.');

  console.log(`Uploading ${questions5A.length} restored questions to 5A...`);
  let count5 = 0;
  for (const q of questions5A) {
    await db.collection('questions').add({
      ...q,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      isActive: true
    });
    count5++;
  }
  console.log(`Successfully synced ${count5} questions for Year 11 Chapter 5A!`);

  // ==========================================
  // B. YEAR 11 ADVANCED CHAPTER 6A (TRIGONOMETRY)
  // ==========================================
  console.log('\n--- POPULATING YEAR 11 ADVANCED CHAPTER 6A ---');
  
  const ch6Snap = await db.collection('questions')
    .where('chapterId', '==', 'y11a-6')
    .where('topicCode', '==', '6A')
    .get();
  
  console.log(`Found ${ch6Snap.size} existing questions in 6A. Deleting...`);
  
  const ch6Batch = db.batch();
  ch6Snap.forEach(doc => ch6Batch.delete(doc.ref));
  await ch6Batch.commit();
  console.log('Chapter 6A clean completed.');

  console.log(`Uploading ${questions6A.length} questions to 6A...`);
  let count6 = 0;
  for (const q of questions6A) {
    await db.collection('questions').add({
      ...q,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      isActive: true
    });
    count6++;
  }
  console.log(`Successfully synced ${count6} questions for Year 11 Chapter 6A!`);

  // ==========================================
  // C. YEAR 11 ADVANCED CHAPTER 7A (COORDINATE GEOMETRY)
  // ==========================================
  console.log('\n--- POPULATING YEAR 11 ADVANCED CHAPTER 7A ---');
  
  const ch7Snap = await db.collection('questions')
    .where('chapterId', '==', 'y11a-7')
    .where('topicCode', '==', '7A')
    .get();
  
  console.log(`Found ${ch7Snap.size} existing questions in 7A. Deleting...`);
  
  const ch7Batch = db.batch();
  ch7Snap.forEach(doc => ch7Batch.delete(doc.ref));
  await ch7Batch.commit();
  console.log('Chapter 7A clean completed.');

  console.log(`Uploading ${questions7A.length} questions to 7A...`);
  let count7 = 0;
  for (const q of questions7A) {
    await db.collection('questions').add({
      ...q,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      isActive: true
    });
    count7++;
  }
  console.log(`Successfully synced ${count7} questions for Year 11 Chapter 7A!`);

  console.log('\n=== ALL CHANNELS IMPORT COMPLETED SUCCESSFULLY ===');
  process.exit(0);
}

runImport().catch(err => {
  console.error('Import process failed with error:', err);
  process.exit(1);
});
