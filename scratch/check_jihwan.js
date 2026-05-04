import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function checkJihwan() {
  const doc = await db.collection('users').doc('6p7K1nz1ecXkQ5h92jWXx4pwrls2').get();
  if (doc.exists) {
    console.log(doc.data().dreamImageUrl);
  } else {
    console.log('Doc not found');
  }
}

checkJihwan().catch(console.error);
