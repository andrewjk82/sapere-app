import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function updateJihwanImage() {
  const userId = '6p7K1nz1ecXkQ5h92jWXx4pwrls2';
  // A nice psychiatrist themed image from Unsplash
  const imageUrl = 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee1';
  
  console.log(`Updating image for Jihwan Yu (${userId})...`);
  await db.collection('users').doc(userId).update({
    dreamImageUrl: imageUrl,
    dreamJob: 'Psychiatrist' // Clean up trailing space too
  });
  console.log("Update successful!");
}

updateJihwanImage().catch(console.error);
