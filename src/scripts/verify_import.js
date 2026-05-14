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
  const qSnap = await db.collection('questions').where('chapterId', '==', 'y8-1').get();
  console.log(`Found ${qSnap.size} questions for Chapter y8-1.`);
  process.exit(0);
}

check().catch(err => {
  console.error(err);
  process.exit(1);
});
