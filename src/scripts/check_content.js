import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

async function check() {
  const qSnap = await db.collection('questions')
    .where('chapterId', '==', 'y8-1')
    .limit(5)
    .get();
  
  console.log(`Found ${qSnap.size} samples.`);
  qSnap.forEach(doc => {
    console.log(`ID: ${doc.id}`);
    console.log(`Question: ${doc.data().question}`);
    console.log(`Solution: ${doc.data().solution ? 'Has solution' : 'NO SOLUTION'}`);
  });
  process.exit(0);
}

check().catch(err => {
  console.error(err);
  process.exit(1);
});
