import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { allQuestions } from './importYear7Ch7A.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

const runAdminImport = async () => {
  console.log('[Admin Ch7A Sync] STARTING PHYSICAL SYNC via Admin SDK...');
  try {
    const qColl = db.collection('questions');
    
    // Step 1: Query and delete all existing topicId === 'y7-7a' documents to prevent duplication
    console.log('Force reset enabled. Deleting existing Y7 Ch7A questions...');
    const snapshot = await qColl.where('topicId', '==', 'y7-7a').get();
    
    const batchDelete = db.batch();
    snapshot.docs.forEach(doc => {
      batchDelete.delete(doc.ref);
    });
    await batchDelete.commit();
    console.log(`Deleted ${snapshot.size} existing questions.`);

    // Step 2: Seed all 65 questions using batches (limit 500 per batch)
    console.log(`Seeding ${allQuestions.length} questions...`);
    const chunks = [];
    const chunkSize = 400; // conservative batch size
    for (let i = 0; i < allQuestions.length; i += chunkSize) {
      chunks.push(allQuestions.slice(i, i + chunkSize));
    }

    let totalImported = 0;
    for (const chunk of chunks) {
      const batchWrite = db.batch();
      chunk.forEach(q => {
        const docRef = qColl.doc();
        batchWrite.set(docRef, {
          ...q,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });
      });
      await batchWrite.commit();
      totalImported += chunk.length;
      console.log(`Imported batch of ${chunk.length} questions...`);
    }

    console.log(`[Admin Ch7A Sync] SUCCESS! Total ${totalImported} questions imported to Firestore.`);
    process.exit(0);
  } catch (error) {
    console.error('[Admin Ch7A Sync] ERROR:', error);
    process.exit(1);
  }
};

runAdminImport();
