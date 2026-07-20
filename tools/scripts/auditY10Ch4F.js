import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const snap = await db.collection('questions').where('topicId', '==', 'y10-4f').get();
    console.log(`Total questions in topic y10-4f: ${snap.size}`);

    const docs = snap.docs.sort((a, b) => a.id.localeCompare(b.id));

    docs.forEach((doc, i) => {
      const data = doc.data();
      console.log(`\n[${i+1}] ID: ${doc.id}`);
      console.log(`  type: ${data.type}`);
      console.log(`  question: "${data.question ? data.question.substring(0, 150) : ''}"`);
      console.log(`  a: ${data.a}, answer: ${data.answer}`);
      console.log(`  options: ${JSON.stringify(data.options)}`);
      console.log(`  opts: ${JSON.stringify(data.opts)}`);
      console.log(`  hasSteps: ${!!data.solutionSteps}`);
    });

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
