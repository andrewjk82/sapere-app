import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to shuffle options array and return new array with correct answer index
function shuffleOptions(options, correctValue) {
  const arr = [...options];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const correctIdx = arr.findIndex(opt => {
    const val = typeof opt === 'object' ? opt.text : opt;
    return val === correctValue;
  });
  return { options: arr, answer: String(correctIdx) };
}

async function run() {
  const batch = db.batch();
  const qRef = db.collection('questions').doc('y7-1c-q3d1');

  // New clean single-digit options: Correct is 8
  const rawOptions = [
    { text: "\\( 8 \\)", imageUrl: "" },
    { text: "\\( 7 \\)", imageUrl: "" },
    { text: "\\( 9 \\)", imageUrl: "" },
    { text: "\\( 6 \\)", imageUrl: "" }
  ];

  const { options, answer } = shuffleOptions(rawOptions, "\\( 8 \\)");

  console.log('Fixing options and correct answer index for y7-1c-q3d1 directly in Firestore...');
  batch.update(qRef, {
    options,
    answer,
    solutionSteps: [
      {
        explanation: "Evaluate the units column: \\( 4 + 8 = 12 \\). We write down 2 and carry over 1 to the tens column.",
        workingOut: "\\( 4 + 8 = 12 \\implies \\text{Carry } 1 \\)"
      },
      {
        explanation: "Evaluate the tens column including the carried-over 1. The sum of 1, A, and 7 must result in a number ending in 6 (which is 16).",
        workingOut: "\\( 1 + A + 7 = 16 \\)"
      },
      {
        explanation: "Simplify the equation to solve for the missing digit A.",
        workingOut: "\\( 8 + A = 16 \\implies A = 8 \\)"
      }
    ]
  });

  // Bump sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully fixed y7-1c-q3d1!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
