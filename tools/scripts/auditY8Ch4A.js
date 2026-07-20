import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const snap = await db.collection('questions').where('topicId', '==', 'y8-4a').get();
    console.log(`Auditing y8-4a questions: ${snap.size} docs`);

    snap.docs.forEach((doc, i) => {
      const data = doc.data();
      console.log(`[${i+1}] ID: ${doc.id}`);
      console.log(`  type: ${data.type}`);
      console.log(`  question: "${data.question ? data.question.substring(0, 80) : ''}"`);
      console.log(`  hasOpts: ${!!data.opts}, hasOptions: ${!!data.options}`);
      console.log(`  a: ${data.a}, answer: ${data.answer}`);
      if (data.solutionSteps) {
        console.log(`  solutionSteps: ${data.solutionSteps.length} steps`);
        // Check if steps have Korean characters
        const hasKorean = JSON.stringify(data.solutionSteps).match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/);
        console.log(`  hasKoreanInSteps: ${!!hasKorean}`);
      } else {
        console.log(`  solutionSteps: MISSING`);
      }
    });

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
