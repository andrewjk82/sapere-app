import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const snap = await db.collection('questions')
      .where('topicId', '==', 'y10-4a')
      .get();
    console.log(`Auditing ${snap.size} docs in y10-4a:`);
    
    // Sort them by document ID or a consistent key to identify the "first 10"
    const docs = snap.docs.sort((a, b) => a.id.localeCompare(b.id));

    docs.slice(0, 10).forEach((doc, idx) => {
      const data = doc.data();
      console.log(`\n[${idx + 1}] ID: ${doc.id}`);
      console.log(`  question: "${data.question}"`);
      console.log(`  type: ${data.type}`);
      console.log(`  a: ${data.a}, answer: ${data.answer}`);
      console.log(`  options: ${JSON.stringify(data.options)}`);
      console.log(`  opts: ${JSON.stringify(data.opts)}`);
      if (data.solutionSteps) {
        console.log(`  solutionSteps: ${data.solutionSteps.length} steps`);
        data.solutionSteps.forEach((step, sIdx) => {
          console.log(`    Step ${sIdx+1} explanation: "${step.explanation}"`);
          console.log(`    Step ${sIdx+1} workingOut: "${step.workingOut}"`);
        });
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
