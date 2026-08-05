const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y10-8e-q8');
  const docSnap = await docRef.get();
  
  if (docSnap.exists) {
    let updateObj = {
      type: 'short_answer',
      requiresManualGrading: true,
      options: [],
      answer: 'See solution',
      updatedAt: FieldValue.serverTimestamp()
    };
    
    await docRef.update(updateObj);
    console.log('Updated y10-8e-q8 back to manual grading');
    
    console.log('Syncing chapter index for y10-8...');
    await touchChapterIndex(db, 'y10-8');
    console.log('Sync complete.');
  } else {
    console.log('y10-8e-q8 not found');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
