import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const snap = await db.collection('questions').where('chapterId', '==', 'y8-4').get();
    console.log(`Total questions in Chapter y8-4: ${snap.size}`);
    
    let unconverted = 0;
    const topicCounts = {};

    snap.docs.forEach((doc) => {
      const data = doc.data();
      const topicId = data.topicId || 'unknown';
      topicCounts[topicId] = (topicCounts[topicId] || 0) + 1;

      if (data.type !== 'multiple_choice' && data.type !== 'teacher_review') {
        console.log(`  [UNCONVERTED] ID: ${doc.id}, topicId: ${topicId}, type: ${data.type}, q: "${data.question ? data.question.substring(0, 50) : ''}..."`);
        unconverted++;
      }
    });

    console.log('\nTopic distribution:', topicCounts);
    console.log(`Total unconverted (excluding teacher_review): ${unconverted}`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
