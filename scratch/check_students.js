import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function checkStudents() {
  console.log('--- Students Collection ---');
  const snap = await db.collection('students').get();
  snap.forEach(doc => console.log(doc.id, doc.data()));

  console.log('--- Users Collection ---');
  const snap2 = await db.collection('users').get();
  snap2.forEach(doc => {
    const data = doc.data();
    if (data.name && data.name.includes('Jimi') || data.firstName && data.firstName.includes('Jimi') || data.displayName && data.displayName.includes('Jimi')) {
      console.log(doc.id, data);
    }
  });
}

checkStudents().catch(console.error);
