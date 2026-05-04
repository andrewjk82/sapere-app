import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function clearJihwanImage() {
  const userId = '6p7K1nz1ecXkQ5h92jWXx4pwrls2';
  
  console.log(`Clearing broken image for Jihwan Yu (${userId})...`);
  await db.collection('users').doc(userId).update({
    dreamImageUrl: ''
  });
  console.log("Cleared successfully!");
}

clearJihwanImage().catch(console.error);
