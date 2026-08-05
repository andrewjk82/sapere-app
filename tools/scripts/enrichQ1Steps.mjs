import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const solutions = {
  'y11a-6f-q1a': [
    { explanation: "Recall the complementary angle identity for sine and cosine.", workingOut: "\\(\\sin \\theta = \\cos (90^\\circ - \\theta)\\)", graphData: null },
    { explanation: "Substitute the given angle into the identity.", workingOut: "\\(\\text{Let } \\theta = 18^\\circ\\)", graphData: null },
    { explanation: "Simplify the expression inside the cosine function.", workingOut: "\\(\\sin 18^\\circ = \\cos (90^\\circ - 18^\\circ) = \\cos 72^\\circ\\)", graphData: null },
    { explanation: "Determine if the statement is correct.", workingOut: "\\(\\text{The statement is True.}\\)", graphData: null }
  ],
  'y11a-6f-q1b': [
    { explanation: "Recall the complementary angle identity for tangent and cotangent.", workingOut: "\\(\\tan \\theta = \\cot (90^\\circ - \\theta)\\)", graphData: null },
    { explanation: "Substitute the given angle into the identity.", workingOut: "\\(\\text{Let } \\theta = 65^\\circ\\)", graphData: null },
    { explanation: "Simplify the expression inside the cotangent function.", workingOut: "\\(\\tan 65^\\circ = \\cot (90^\\circ - 65^\\circ) = \\cot 25^\\circ\\)", graphData: null },
    { explanation: "Determine if the statement is correct.", workingOut: "\\(\\text{The statement is True.}\\)", graphData: null }
  ],
  'y11a-6f-q1c': [
    { explanation: "Recall the complementary angle identity for secant and cosecant.", workingOut: "\\(\\sec \\theta = \\csc (90^\\circ - \\theta)\\)", graphData: null },
    { explanation: "Substitute the given angle into the identity.", workingOut: "\\(\\text{Let } \\theta = 8^\\circ\\)", graphData: null },
    { explanation: "Simplify the expression inside the cosecant function.", workingOut: "\\(\\sec 8^\\circ = \\csc (90^\\circ - 8^\\circ) = \\csc 82^\\circ\\)", graphData: null },
    { explanation: "Determine if the statement is correct.", workingOut: "\\(\\text{The statement is True.}\\)", graphData: null }
  ],
  'y11a-6f-q1d': [
    { explanation: "Recall the primary Pythagorean identity for sine and cosine.", workingOut: "\\(\\sin^2 \\theta + \\cos^2 \\theta = 1\\)", graphData: null },
    { explanation: "Check if the angles in both terms are identical.", workingOut: "\\(\\text{Here, both angles are } 27^\\circ\\)", graphData: null },
    { explanation: "Substitute the angle into the identity.", workingOut: "\\(\\sin^2 27^\\circ + \\cos^2 27^\\circ = 1\\)", graphData: null },
    { explanation: "Determine if the statement is correct.", workingOut: "\\(\\text{The statement is True.}\\)", graphData: null }
  ],
  'y11a-6f-q1e': [
    { explanation: "Recall the Pythagorean identity involving tangent and secant.", workingOut: "\\(1 + \\tan^2 \\theta = \\sec^2 \\theta\\)", graphData: null },
    { explanation: "Check if the angles in both terms are identical.", workingOut: "\\(\\text{Here, both angles are } 50^\\circ\\)", graphData: null },
    { explanation: "Substitute the angle into the identity.", workingOut: "\\(1 + \\tan^2 50^\\circ = \\sec^2 50^\\circ\\)", graphData: null },
    { explanation: "Determine if the statement is correct.", workingOut: "\\(\\text{The statement is True.}\\)", graphData: null }
  ],
  'y11a-6f-q1f': [
    { explanation: "Recall the Pythagorean identity involving cotangent and cosecant.", workingOut: "\\(1 + \\cot^2 \\theta = \\csc^2 \\theta\\)", graphData: null },
    { explanation: "Rearrange the identity to isolate cotangent squared.", workingOut: "\\(\\cot^2 \\theta = \\csc^2 \\theta - 1\\)", graphData: null },
    { explanation: "Substitute the given angle into the rearranged identity.", workingOut: "\\(\\text{Let } \\theta = 35^\\circ\\)", graphData: null },
    { explanation: "Verify the result.", workingOut: "\\(\\csc^2 35^\\circ - 1 = \\cot^2 35^\\circ \\implies \\text{The statement is True.}\\)", graphData: null }
  ]
};

async function fix() {
  const filepath = path.resolve('src/constants/seedYear11Ch6FQuestions.js');
  const { Y11_CH6F_QUESTIONS } = await import('../../src/constants/seedYear11Ch6FQuestions.js');
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let count = 0;
  for (let q of Y11_CH6F_QUESTIONS) {
    if (solutions[q.id]) {
      q.solutionSteps = solutions[q.id];
      await db.collection('questions').doc(q.id).update({
        solutionSteps: q.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      count++;
    }
  }

  const fileContent = "export const Y11_CH6F_QUESTIONS = " + JSON.stringify(Y11_CH6F_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');
  console.log(`Successfully updated ${count} q1 True/False questions locally and pushed to Firestore.`);
}
fix().catch(console.error);
