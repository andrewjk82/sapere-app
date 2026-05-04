import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function listUsersVerbose() {
  console.log("Fetching all users (VERBOSE)...");
  const snapshot = await db.collection('users').get();
  
  snapshot.forEach(doc => {
    console.log(`--- User ID: ${doc.id} ---`);
    console.log(JSON.stringify(doc.data(), null, 2));
  });
}

listUsersVerbose().catch(console.error);
