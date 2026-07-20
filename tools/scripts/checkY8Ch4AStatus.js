import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const snap = await db.collection('questions').where('topicId', '==', 'y8-4a').get();
    console.log(`Total questions in topic y8-4a: ${snap.size}`);
    
    let unconverted = 0;
    snap.docs.forEach((doc, i) => {
      const data = doc.data();
      if (data.type !== 'multiple_choice') {
        console.log(`  [UNCONVERTED] ID: ${doc.id}, type: ${data.type}, question: "${data.question ? data.question.substring(0, 50) : ''}..."`);
        unconverted++;
      }
    });

    console.log(`Total unconverted questions in y8-4a: ${unconverted}`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
