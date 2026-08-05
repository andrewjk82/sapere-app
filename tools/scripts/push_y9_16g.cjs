const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const seedPath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch16GQuestions.js';
  let content = fs.readFileSync(seedPath, 'utf8');
  
  const prefixMatch = content.match(/export const \w+\s*=\s*/);
  const matchIndex = prefixMatch.index;
  const prefix = prefixMatch[0];
  const arrayString = content.slice(matchIndex + prefix.length).trim().replace(/;$/, '');
  
  const questions = JSON.parse(arrayString);
  
  const batch = db.batch();
  for (let q of questions) {
    const docRef = db.collection('questions').doc(q.id);
    batch.set(docRef, { ...q, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  }

  await batch.commit();
  console.log('Successfully updated all Year 9 Ch16G questions in Firestore.');
  
  // also touch chapter index so UI knows it updated
  const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');
  await touchChapterIndex(db, 'y9-16g');

  process.exit(0);
}

run().catch(console.error);
