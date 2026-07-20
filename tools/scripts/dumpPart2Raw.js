import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const sa = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

const doc = await db.collection('questions').doc('y10-4g-q13_part2').get();
const data = doc.data();
data.subQuestions.forEach(sq => {
  console.log('--- subQ:', sq.id);
  if (sq.solutionSteps) {
    sq.solutionSteps.forEach((step, i) => {
      console.log(`  step[${i}] workingOut RAW:`, JSON.stringify(step.workingOut));
    });
  }
});
process.exit(0);
