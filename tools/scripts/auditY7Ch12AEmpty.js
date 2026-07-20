import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const EMPTY_IDS = [
  'BmFlqtV1lBNkiBkN5jx4',
  'BmWgY4amhfBrSUDvUnyS',
  'E5kjSyYBbwY55C35QJ29',
  'I3epSHZJkQD4hBLmTuOk',
  'fhEHMxyAdhVA5fkZNhpO',
  'gDYsW7NkPNHbFXbFFRsu',
];

(async () => {
  try {
    for (const id of EMPTY_IDS) {
      const snap = await db.collection('questions').doc(id).get();
      const data = snap.data();
      console.log(`\n=== ${id} (requiresManualGrading=${data.requiresManualGrading}) ===`);
      console.log(`question: ${data.question}`);
      console.log(`options: ${JSON.stringify(data.options)}`);
      console.log(`answer: ${JSON.stringify(data.answer)}`);
      console.log(`solution: ${data.solution || '(none)'}`);
      if (data.solutionSteps?.length) {
        data.solutionSteps.forEach((s, i) => {
          console.log(`  step ${i + 1} explanation: ${s.explanation}`);
          console.log(`  step ${i + 1} workingOut: ${s.workingOut}`);
        });
      } else {
        console.log('solutionSteps: (none)');
      }
      console.log(`hint: ${data.hint || '(none)'}`);
      console.log(`updatedAt: ${data.updatedAt?.toDate?.() || data.updatedAt}`);
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
