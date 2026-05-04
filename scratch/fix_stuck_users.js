import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

const pendingUsers = [
  { uid: '6p7K1nz1ecXkQ5h92jWXx4pwrls2', email: 'jihwanyu2009@gmail.com' },
  { uid: 'nLxTbrxo71MqDBTjBiSivrwDOoB3', email: 'jisooyu0904@gmail.com' }
];

async function createPendingProfiles() {
  console.log("Creating pending profiles for stuck users...");
  for (const user of pendingUsers) {
    await db.collection('users').doc(user.uid).set({
      uid: user.uid,
      email: user.email,
      status: 'Pending Profile',
      role: 'student',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    console.log(`Created profile for ${user.email}`);
  }
}

createPendingProfiles().catch(console.error);
