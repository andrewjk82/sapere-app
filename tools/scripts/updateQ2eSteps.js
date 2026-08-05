import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('y9-7a-q2e');
  
  const newSteps = [
    {
      explanation: "Vertically opposite angles",
      workingOut: "Because vertically opposite angles are equal, the three unlabeled angles are also \\\\(\\alpha\\\\).",
      graphData: null
    },
    {
      explanation: "Angles around a point",
      workingOut: "The sum of all angles around the point is \\\\(360^\\circ\\\\), so:\\n\\\\(\\alpha + \\alpha + \\alpha + \\alpha + \\alpha + \\alpha = 360^\\circ\\\\)",
      graphData: null
    },
    {
      explanation: "Simplify",
      workingOut: "\\\\(6\\alpha = 360^\\circ\\\\)",
      graphData: null
    },
    {
      explanation: "Solve",
      workingOut: "\\\\(\\alpha = 60^\\circ\\\\)",
      graphData: null
    }
  ];

  await docRef.update({ solutionSteps: newSteps });
  console.log('Successfully updated solutionSteps for y9-7a-q2e!');
}

run().catch(console.error);
