import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const solutions = {
  'y11a-6f-q11a': [
    { explanation: "Start by selecting one side to simplify. Usually, the more complex side (the Left Hand Side, or LHS) is easier to simplify.", workingOut: "\\text{LHS } = (1 - \\cos x)(1 + \\cos x)", graphData: null },
    { explanation: "Expand the brackets using the difference of two squares: \\((a-b)(a+b) = a^2 - b^2\\).", workingOut: "= 1 - \\cos^2 x", graphData: null },
    { explanation: "Recall the Pythagorean identity \\(\\sin^2 x + \\cos^2 x = 1\\), which rearranges to \\(\\sin^2 x = 1 - \\cos^2 x\\).", workingOut: "= \\sin^2 x", graphData: null },
    { explanation: "The expression is now identical to the Right Hand Side (RHS), completing the proof.", workingOut: "\\text{LHS } = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q11b': [
    { explanation: "Start with the LHS.", workingOut: "\\text{LHS } = (1 + \\tan^2 \\theta) \\cos^2 \\theta", graphData: null },
    { explanation: "Apply the Pythagorean identity \\(1 + \\tan^2 \\theta = \\sec^2 \\theta\\).", workingOut: "= \\sec^2 \\theta \\cos^2 \\theta", graphData: null },
    { explanation: "Apply the reciprocal identity \\(\\sec \\theta = \\frac{1}{\\cos \\theta}\\).", workingOut: "= \\frac{1}{\\cos^2 \\theta} \\cdot \\cos^2 \\theta", graphData: null },
    { explanation: "Cancel the terms to complete the proof.", workingOut: "= 1 = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q11c': [
    { explanation: "Start with the LHS.", workingOut: "\\text{LHS } = (\\sin y - \\cos y)^2", graphData: null },
    { explanation: "Expand the perfect square: \\((a-b)^2 = a^2 - 2ab + b^2\\).", workingOut: "= \\sin^2 y - 2\\sin y \\cos y + \\cos^2 y", graphData: null },
    { explanation: "Group the squared terms together and apply the Pythagorean identity \\(\\sin^2 y + \\cos^2 y = 1\\).", workingOut: "= (\\sin^2 y + \\cos^2 y) - 2\\sin y \\cos y", graphData: null },
    { explanation: "Substitute \\(1\\) to complete the proof.", workingOut: "= 1 - 2\\sin y \\cos y = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q11d': [
    { explanation: "Start with the LHS.", workingOut: "\\text{LHS } = \\cos^2 \\alpha - \\sin^2 \\alpha", graphData: null },
    { explanation: "Notice the RHS only has cosine terms. Apply the Pythagorean identity \\(\\sin^2 \\alpha = 1 - \\cos^2 \\alpha\\) to eliminate the sine term.", workingOut: "= \\cos^2 \\alpha - (1 - \\cos^2 \\alpha)", graphData: null },
    { explanation: "Expand the negative sign carefully.", workingOut: "= \\cos^2 \\alpha - 1 + \\cos^2 \\alpha", graphData: null },
    { explanation: "Collect like terms to complete the proof.", workingOut: "= 2\\cos^2 \\alpha - 1 = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q11e': [
    { explanation: "Start with the LHS.", workingOut: "\\text{LHS } = \\cot^2 z \\sin^2 z + \\tan^2 z \\cos^2 z", graphData: null },
    { explanation: "Use ratio identities to convert everything to sines and cosines: \\(\\cot z = \\frac{\\cos z}{\\sin z}\\) and \\(\\tan z = \\frac{\\sin z}{\\cos z}\\).", workingOut: "= \\left(\\frac{\\cos^2 z}{\\sin^2 z}\\right) \\sin^2 z + \\left(\\frac{\\sin^2 z}{\\cos^2 z}\\right) \\cos^2 z", graphData: null },
    { explanation: "Cancel the denominators.", workingOut: "= \\cos^2 z + \\sin^2 z", graphData: null },
    { explanation: "Apply the Pythagorean identity to complete the proof.", workingOut: "= 1 = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q11f': [
    { explanation: "Start with the LHS.", workingOut: "\\text{LHS } = 4\\cos^2 \\beta - 3", graphData: null },
    { explanation: "The RHS has only sine terms, so convert the cosine term using \\(\\cos^2 \\beta = 1 - \\sin^2 \\beta\\).", workingOut: "= 4(1 - \\sin^2 \\beta) - 3", graphData: null },
    { explanation: "Expand the bracket.", workingOut: "= 4 - 4\\sin^2 \\beta - 3", graphData: null },
    { explanation: "Simplify the constant terms to complete the proof.", workingOut: "= 1 - 4\\sin^2 \\beta = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q11g': [
    { explanation: "Start with the LHS.", workingOut: "\\text{LHS } = 3\\tan^2 A - 2", graphData: null },
    { explanation: "The RHS uses secant, so apply the Pythagorean identity \\(\\tan^2 A = \\sec^2 A - 1\\).", workingOut: "= 3(\\sec^2 A - 1) - 2", graphData: null },
    { explanation: "Expand the bracket.", workingOut: "= 3\\sec^2 A - 3 - 2", graphData: null },
    { explanation: "Simplify to complete the proof.", workingOut: "= 3\\sec^2 A - 5 = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q11h': [
    { explanation: "Start with the LHS.", workingOut: "\\text{LHS } = 1 - \\cot^2 \\phi + \\csc^2 \\phi", graphData: null },
    { explanation: "Rearrange the terms to group the trigonometric functions.", workingOut: "= 1 + (\\csc^2 \\phi - \\cot^2 \\phi)", graphData: null },
    { explanation: "Recall the Pythagorean identity \\(1 + \\cot^2 \\phi = \\csc^2 \\phi\\), which implies \\(\\csc^2 \\phi - \\cot^2 \\phi = 1\\).", workingOut: "= 1 + 1", graphData: null },
    { explanation: "Evaluate to complete the proof.", workingOut: "= 2 = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q11i': [
    { explanation: "Start with the LHS.", workingOut: "\\text{LHS } = \\sin^4 x + \\sin^2 x \\cos^2 x", graphData: null },
    { explanation: "Factor out the common term \\(\\sin^2 x\\).", workingOut: "= \\sin^2 x (\\sin^2 x + \\cos^2 x)", graphData: null },
    { explanation: "Apply the Pythagorean identity \\(\\sin^2 x + \\cos^2 x = 1\\).", workingOut: "= \\sin^2 x (1)", graphData: null },
    { explanation: "Simplify to complete the proof.", workingOut: "= \\sin^2 x = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q11j': [
    { explanation: "Start with the LHS.", workingOut: "\\text{LHS } = \\tan y (\\csc^2 y - 1)", graphData: null },
    { explanation: "Apply the Pythagorean identity \\(\\csc^2 y - 1 = \\cot^2 y\\).", workingOut: "= \\tan y (\\cot^2 y)", graphData: null },
    { explanation: "Use the reciprocal identity \\(\\tan y = \\frac{1}{\\cot y}\\).", workingOut: "= \\left(\\frac{1}{\\cot y}\\right) \\cdot \\cot^2 y", graphData: null },
    { explanation: "Cancel \\(\\cot y\\) to complete the proof.", workingOut: "= \\cot y = \\text{ RHS}", graphData: null }
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
  console.log(`Successfully updated ${count} q11 proof questions locally and pushed to Firestore.`);
}
fix().catch(console.error);
