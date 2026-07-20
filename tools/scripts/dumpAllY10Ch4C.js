import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('topicId', '==', 'y10-4c').get();
  const docs = snap.docs.map(d => {
    const data = d.data();
    return {
      id: d.id,
      question: data.question || data.q || '',
      type: data.type || '',
      opts: data.opts || [],
      subQuestions: data.subQuestions || []
    };
  });
  console.log(`Loaded ${docs.length} questions.`);
  docs.forEach((d, idx) => {
    console.log(`\n[${idx+1}] ID: ${d.id}`);
    console.log(`    Q: ${d.question}`);
    console.log(`    Type: ${d.type}`);
    console.log(`    Opts: ${JSON.stringify(d.opts)}`);
    console.log(`    SubQuestions Count: ${d.subQuestions.length}`);
    if (d.subQuestions.length > 0) {
      d.subQuestions.forEach((sq, sidx) => {
        console.log(`       Sub[${sidx+1}] Q: ${sq.question}`);
        console.log(`       Sub[${sidx+1}] Opts: ${JSON.stringify(sq.opts)}`);
      });
    }
  });
  process.exit(0);
})();
