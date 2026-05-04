import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function listUsers() {
  console.log("Fetching all users from Firestore...");
  const snapshot = await db.collection('users').get();
  
  if (snapshot.empty) {
    console.log("No users found.");
    return;
  }

  snapshot.forEach(doc => {
    const data = doc.data();
    console.log(`ID: ${doc.id} | Name: ${data.displayName || 'N/A'} | Email: ${data.email || 'N/A'} | Role: ${data.role || 'N/A'} | CreatedAt: ${data.createdAt?.toDate?.() || 'N/A'}`);
  });
}

listUsers().catch(console.error);
