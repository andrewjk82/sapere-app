import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const docRef = db.collection('questions').doc('y9-7a-q3f');
  
  const newSteps = [
    {
      explanation: "Draw an auxiliary line",
      workingOut: "Draw an imaginary straight line passing through the vertex of \\\\(\\theta\\\\), parallel to the top and bottom lines. This splits \\\\(\\theta\\\\) into two separate parts: a top angle and a bottom angle.",
      graphData: null
    },
    {
      explanation: "Find the top angle",
      workingOut: "Because the new auxiliary line is parallel to the top line, we can use the rule for alternate interior angles (Z-angles). The alternate angles are equal, so the top part of \\\\(\\theta\\\\) is \\\\(40^\\circ\\\\).",
      graphData: null
    },
    {
      explanation: "Find the bottom angle",
      workingOut: "Similarly, the auxiliary line is parallel to the bottom line. Using the alternate interior angles rule again, the bottom part of \\\\(\\theta\\\\) is \\\\(30^\\circ\\\\).",
      graphData: null
    },
    {
      explanation: "Calculate the total angle",
      workingOut: "Now, add the two parts together to find the total value of the angle:\\n\\\\(\\theta = 40^\\circ + 30^\\circ\\\\)\\n\\\\(\\theta = 70^\\circ\\\\)",
      graphData: null
    }
  ];

  await docRef.update({ solutionSteps: newSteps });
  console.log('Successfully updated solutionSteps for y9-7a-q3f with highly descriptive pedagogical steps!');
}

run().catch(console.error);
