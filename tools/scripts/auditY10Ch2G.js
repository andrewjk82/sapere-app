import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    // Check if y10-2g exists
    const snap2G = await db.collection('questions').where('topicId', '==', 'y10-2g').get();
    console.log(`Total questions in topic y10-2g: ${snap2G.size}`);
    if (snap2G.size > 0) {
      const docs = snap2G.docs.sort((a, b) => a.id.localeCompare(b.id)).slice(0, 15);
      docs.forEach((doc, i) => {
        console.log(`[${i+1}] ID: ${doc.id} -> ${doc.data().question ? doc.data().question.substring(0, 80) : ''}`);
      });
    }

    // Also check if they meant the next 10 in y10-4g
    const snap4G = await db.collection('questions').where('topicId', '==', 'y10-4g').get();
    console.log(`Total questions in topic y10-4g: ${snap4G.size}`);
    
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
