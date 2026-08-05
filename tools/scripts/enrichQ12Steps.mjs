import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const solutions = {
  'y11a-6f-q12a': [
    { explanation: "Start by selecting one side to simplify, typically the Left Hand Side (LHS).", workingOut: "\\text{LHS } = \\tan x \\csc x", graphData: null },
    { explanation: "Express all terms using primary trigonometric ratios (sine and cosine).", workingOut: "= \\left(\\frac{\\sin x}{\\cos x}\\right) \\left(\\frac{1}{\\sin x}\\right)", graphData: null },
    { explanation: "Multiply the fractions and cancel the common factor \\(\\sin x\\) from the numerator and denominator.", workingOut: "= \\frac{1}{\\cos x}", graphData: null },
    { explanation: "Apply the reciprocal identity \\(\\frac{1}{\\cos x} = \\sec x\\) to complete the proof.", workingOut: "= \\sec x = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q12b': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\text{LHS } = \\cot y \\sec y", graphData: null },
    { explanation: "Express all terms using primary trigonometric ratios (sine and cosine).", workingOut: "= \\left(\\frac{\\cos y}{\\sin y}\\right) \\left(\\frac{1}{\\cos y}\\right)", graphData: null },
    { explanation: "Multiply the fractions and cancel the common factor \\(\\cos y\\).", workingOut: "= \\frac{1}{\\sin y}", graphData: null },
    { explanation: "Apply the reciprocal identity \\(\\frac{1}{\\sin y} = \\csc y\\) to complete the proof.", workingOut: "= \\csc y = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q12c': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\text{LHS } = \\csc^2 \\theta + \\sec^2 \\theta", graphData: null },
    { explanation: "Convert all terms to sines and cosines.", workingOut: "= \\frac{1}{\\sin^2 \\theta} + \\frac{1}{\\cos^2 \\theta}", graphData: null },
    { explanation: "Find a common denominator (\\(\\sin^2 \\theta \\cos^2 \\theta\\)) to add the fractions.", workingOut: "= \\frac{\\cos^2 \\theta + \\sin^2 \\theta}{\\sin^2 \\theta \\cos^2 \\theta}", graphData: null },
    { explanation: "Apply the Pythagorean identity \\(\\cos^2 \\theta + \\sin^2 \\theta = 1\\), then separate the fraction.", workingOut: "= \\frac{1}{\\sin^2 \\theta \\cos^2 \\theta} = \\csc^2 \\theta \\sec^2 \\theta = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q12d': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\text{LHS } = \\tan \\alpha + \\cot \\alpha", graphData: null },
    { explanation: "Convert all terms to sines and cosines.", workingOut: "= \\frac{\\sin \\alpha}{\\cos \\alpha} + \\frac{\\cos \\alpha}{\\sin \\alpha}", graphData: null },
    { explanation: "Find a common denominator (\\(\\sin \\alpha \\cos \\alpha\\)) to add the fractions.", workingOut: "= \\frac{\\sin^2 \\alpha + \\cos^2 \\alpha}{\\sin \\alpha \\cos \\alpha}", graphData: null },
    { explanation: "Apply the Pythagorean identity \\(\\sin^2 \\alpha + \\cos^2 \\alpha = 1\\), then separate the fraction.", workingOut: "= \\frac{1}{\\sin \\alpha \\cos \\alpha} = \\csc \\alpha \\sec \\alpha = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q12e': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\text{LHS } = \\csc \\beta - \\sin \\beta", graphData: null },
    { explanation: "Convert \\(\\csc \\beta\\) to sine.", workingOut: "= \\frac{1}{\\sin \\beta} - \\sin \\beta", graphData: null },
    { explanation: "Find a common denominator to subtract the terms.", workingOut: "= \\frac{1 - \\sin^2 \\beta}{\\sin \\beta}", graphData: null },
    { explanation: "Apply the Pythagorean identity \\(1 - \\sin^2 \\beta = \\cos^2 \\beta\\), then split the fraction to match the RHS.", workingOut: "= \\frac{\\cos^2 \\beta}{\\sin \\beta} = \\cos \\beta \\left(\\frac{\\cos \\beta}{\\sin \\beta}\\right) = \\cos \\beta \\cot \\beta = \\text{ RHS}", graphData: null }
  ],
  'y11a-6f-q12f': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\text{LHS } = \\sec \\phi - \\cos \\phi", graphData: null },
    { explanation: "Convert \\(\\sec \\phi\\) to cosine.", workingOut: "= \\frac{1}{\\cos \\phi} - \\cos \\phi", graphData: null },
    { explanation: "Find a common denominator to subtract the terms.", workingOut: "= \\frac{1 - \\cos^2 \\phi}{\\cos \\phi}", graphData: null },
    { explanation: "Apply the Pythagorean identity \\(1 - \\cos^2 \\phi = \\sin^2 \\phi\\), then split the fraction to match the RHS.", workingOut: "= \\frac{\\sin^2 \\phi}{\\cos \\phi} = \\left(\\frac{\\sin \\phi}{\\cos \\phi}\\right) \\sin \\phi = \\tan \\phi \\sin \\phi = \\text{ RHS}", graphData: null }
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
  console.log(`Successfully updated ${count} q12 proof questions locally and pushed to Firestore.`);
}
fix().catch(console.error);
