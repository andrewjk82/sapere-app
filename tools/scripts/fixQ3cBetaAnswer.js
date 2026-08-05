import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('y9-7a-q3c-beta');
  
  const updatedSolutionSteps = [
    {
      explanation: "Find \\(\\alpha\\) using co-interior angles",
      workingOut: "The left vertical line and the diagonal segment are parallel (single arrow marks). The top horizontal segment is a transversal, so the co-interior angles sum to \\(180^\\circ\\):\\n\\[\\alpha + 110^\\circ = 180^\\circ\\]\\n\\[\\alpha = 70^\\circ\\]",
      graphData: null
    },
    {
      explanation: "Find \\(\\beta\\) using alternate interior angles",
      workingOut: "The top and bottom horizontal segments are parallel (double arrow marks). The diagonal segment is a transversal, so the alternate interior angles are equal:\\n\\[\\beta = \\alpha = 70^\\circ\\]",
      graphData: null
    }
  ];

  await docRef.update({
    answer: 3, // Index 3: 70° (Alternate interior angles)
    solutionSteps: updatedSolutionSteps
  });
  console.log('Successfully corrected correct answer and solution steps for y9-7a-q3c-beta!');
}

run().catch(console.error);
