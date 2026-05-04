import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

async function findPsychiatrist() {
  console.log("Searching for Psychiatrist...");
  const snapshot = await db.collection('users').where('dreamJob', '==', 'Psychiatrist').get();
  
  if (snapshot.empty) {
    console.log("No student found with dreamJob 'Psychiatrist'. Checking all users...");
    const all = await db.collection('users').get();
    all.forEach(doc => {
      const d = doc.data();
      if (d.dreamJob && d.dreamJob.includes('Psychiatrist')) {
         console.log(`Found! ID: ${doc.id}`);
         console.log(JSON.stringify(d, null, 2));
      }
    });
    return;
  }

  snapshot.forEach(doc => {
    console.log(`Found! ID: ${doc.id}`);
    console.log(JSON.stringify(doc.data(), null, 2));
  });
}

findPsychiatrist().catch(console.error);
