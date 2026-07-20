import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const sa = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

// Fetch current doc
const ref = db.collection('questions').doc('y10-4g-q13_part2');
const snap = await ref.get();
const data = snap.data();

// Fix the broken subQuestions in place
const fixed = data.subQuestions.map(sq => {
  if (sq.id === 'y10-4g-q13a_ii_b') {
    sq.solutionSteps = [
      {
        explanation: "Car B finishes its trip at the coordinate point (1.5, 0).",
        workingOut: String.raw`(t, \; d) = (1.5, \; 0)`,
        graphData: null
      },
      {
        explanation: "Read the distance d from the coordinate pair.",
        workingOut: String.raw`d_{\text{finish}} = 0`,
        graphData: null
      }
    ];
    console.log('Fixed y10-4g-q13a_ii_b');
  }
  if (sq.id === 'y10-4g-q13a_iii_b') {
    sq.solutionSteps = [
      {
        explanation: "The time taken is the difference in time from start (t = 0) to finish (t = 1.5).",
        workingOut: String.raw`t_{\text{taken}} = 1.5 - 0 = 1.5`,
        graphData: null
      }
    ];
    console.log('Fixed y10-4g-q13a_iii_b');
  }
  return sq;
});

await ref.update({ subQuestions: fixed });
console.log('Done — Firestore updated.');
process.exit(0);
