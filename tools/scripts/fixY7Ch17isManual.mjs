import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

async function fixBrokenMC() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snapshot = await db.collection('questions').where('chapterId', '==', 'y7-17').get();
  
  let fixCount = 0;
  for (const doc of snapshot.docs) {
    const data = doc.data();
    if (data.type === 'multiple_choice' && data.isManual === true) {
      await db.collection('questions').doc(doc.id).set({ isManual: false }, { merge: true });
      console.log(`Fixed isManual: false for ${doc.id}`);
      fixCount++;
    }
  }
  console.log(`Fixed ${fixCount} broken multiple_choice questions in y7-17.`);
}

fixBrokenMC().catch(console.error);
