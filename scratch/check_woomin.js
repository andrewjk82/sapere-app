import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function checkWoomin() {
  const doc = await db.collection('users').doc('1paF63GBe6ZVzMpOl2ZM9fGjGpw2').get();
  console.log(doc.data());
}

checkWoomin().catch(console.error);
