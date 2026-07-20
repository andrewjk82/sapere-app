import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const snap = await db.collection('questions')
      .where('topicId', '==', 'y12a-exam-dane')
      .get();
    const blankDocs = snap.docs.filter((d) => !(d.data().question || '').trim());
    console.log(`${blankDocs.length} blank-stem docs total. Sampling 8:`);

    const sample = blankDocs
      .sort((a, b) => a.id.localeCompare(b.id))
      .filter((_, i) => i % Math.max(1, Math.floor(blankDocs.length / 8)) === 0)
      .slice(0, 8);

    sample.forEach((doc) => {
      const d = doc.data();
      console.log(`\n=== ${doc.id} (source: ${d.source || 'n/a'}) ===`);
      console.log(`options: ${JSON.stringify((d.options || []).map(o => o.text || o))}`);
      console.log(`answer: ${d.answer}`);
      console.log(`solution: ${(d.solution || '').slice(0, 200)}`);
      console.log(`last solutionStep workingOut: ${d.solutionSteps?.[d.solutionSteps.length - 1]?.workingOut}`);
      console.log(`has graphData: ${!!d.graphData}`);
    });
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
