import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[Answer Mapping Fix] Fetching y7-4a questions from Firestore...');
    const snap = await db.collection('questions').where('topicId', '==', 'y7-4a').get();
    console.log(`Found ${snap.size} questions.`);

    let updatedCount = 0;

    for (const doc of snap.docs) {
      const data = doc.data();
      // If 'a' is defined (new multiple choice structure), map 'answer' to 'a'
      if (data.a !== undefined && data.a !== null) {
        if (data.answer !== data.a) {
          await doc.ref.update({
            answer: data.a
          });
          console.log(`  [MAPPED] Doc ID: ${doc.id} -> answer is now set to ${data.a} (was ${data.answer})`);
          updatedCount++;
        }
      }
    }

    console.log(`\nSuccessfully mapped ${updatedCount} answers to the correct 'a' index.`);
    process.exit(0);
  } catch (err) {
    console.error('Error during answer mapping:', err);
    process.exit(1);
  }
})();
