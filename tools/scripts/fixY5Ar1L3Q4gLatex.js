import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const batch = db.batch();
  const docRef = db.collection('questions').doc('y5-ar-1-l3-q4g');

  console.log('Updating y5-ar-1-l3-q4g with clean LaTeX workingOut steps...');

  const solutionSteps = [
    {
      explanation: "Combine the identical Square terms on the left side of the equation.",
      workingOut: "\\(3 \\times \\square = 4\\frac{1}{2}\\)",
      graphData: null
    },
    {
      explanation: "Convert the mixed number on the right side to an improper fraction.",
      workingOut: "\\(3 \\times \\square = \\frac{9}{2}\\)",
      graphData: null
    },
    {
      explanation: "Isolate the Square symbol by dividing both sides of the equation by 3.",
      workingOut: "\\(\\begin{aligned} \\square &= \\frac{9}{2} \\div 3 \\\\ \\square &= \\frac{9}{2} \\times \\frac{1}{3} = \\frac{3}{2} \\\\ \\square &= 1\\frac{1}{2} \\end{aligned}\\)",
      graphData: null
    },
    {
      explanation: "Verify the solution. Adding 1 1/2 three times gives 4 1/2, which is correct.",
      workingOut: "\\(1\\frac{1}{2} + 1\\frac{1}{2} + 1\\frac{1}{2} = 4\\frac{1}{2}\\)",
      graphData: null
    }
  ];

  batch.update(docRef, {
    solutionSteps
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
  console.log('Successfully fixed LaTeX for y5-ar-1-l3-q4g!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
