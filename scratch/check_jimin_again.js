import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function checkRecentUsers() {
  const usersSnap = await db.collection('users').get();
  
  for (const doc of usersSnap.docs) {
    const data = doc.data();
    if (data.name?.includes('Jimin') || data.firstName?.includes('Jimin') || data.displayName?.includes('Jimin')) {
      console.log(`--- ${doc.id} ---`);
      console.log('Name:', data.displayName || data.firstName);
      console.log('Email:', data.email);
      console.log('CreatedAt:', data.createdAt?.toDate ? data.createdAt.toDate() : data.createdAt);
      console.log('UpdatedAt:', data.updatedAt?.toDate ? data.updatedAt.toDate() : data.updatedAt);
    }
  }
}

checkRecentUsers().catch(console.error);
