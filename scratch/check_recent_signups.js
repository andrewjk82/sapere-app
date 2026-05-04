import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function listRecentUsers() {
  console.log('Checking recent signups in Firestore...');
  const snap = await db.collection('users')
    .orderBy('createdAt', 'desc')
    .limit(10)
    .get();
  
  if (snap.empty) {
    console.log('No users found.');
    return;
  }
  
  snap.forEach(doc => {
    const data = doc.data();
    console.log(`ID: ${doc.id}`);
    console.log(`Name: ${data.name || data.firstName + ' ' + data.lastName}`);
    console.log(`Email: ${data.email}`);
    console.log(`Role: ${data.role}`);
    console.log(`Status: ${data.status}`);
    console.log(`Created: ${data.createdAt}`);
    console.log('---');
  });
}

listRecentUsers().catch(console.error);
