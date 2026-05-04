import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function activateCompletedProfiles() {
  const usersRef = db.collection('users');
  const snapshot = await usersRef.where('status', '==', 'Pending Profile').get();
  
  if (snapshot.empty) {
    console.log("No pending profiles found.");
    return;
  }

  let count = 0;
  for (const doc of snapshot.docs) {
    const data = doc.data();
    // If they have a firstName, they have completed their profile setup
    if (data.firstName && data.lastName) {
      console.log(`Activating profile for ${data.firstName} ${data.lastName} (${doc.id})...`);
      await doc.ref.update({ status: 'Active' });
      count++;
    }
  }
  
  console.log(`Successfully activated ${count} profiles.`);
}

activateCompletedProfiles().catch(console.error);
