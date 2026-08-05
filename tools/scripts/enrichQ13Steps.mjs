import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const solutions = {
  'y11a-6f-q13a': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\(\\text{LHS } = \\cos x \\sin x \\sec^2 x\\)", graphData: null },
    { explanation: "Express \\(\\sec x\\) in terms of \\(\\cos x\\) using the reciprocal identity.", workingOut: "\\(= \\cos x \\sin x \\left(\\frac{1}{\\cos^2 x}\\right)\\)", graphData: null },
    { explanation: "Cancel out one \\(\\cos x\\) term from the numerator and denominator.", workingOut: "\\(= \\frac{\\sin x}{\\cos x}\\)", graphData: null },
    { explanation: "Use the ratio identity to complete the proof.", workingOut: "\\(= \\tan x = \\text{ RHS}\\)", graphData: null }
  ],
  'y11a-6f-q13b': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\(\\text{LHS } = (\\sin y + \\tan y) \\csc y\\)", graphData: null },
    { explanation: "Expand the brackets by distributing \\(\\csc y\\).", workingOut: "\\(= \\sin y \\csc y + \\tan y \\csc y\\)", graphData: null },
    { explanation: "Convert all terms to sine and cosine.", workingOut: "\\(= \\sin y \\left(\\frac{1}{\\sin y}\\right) + \\left(\\frac{\\sin y}{\\cos y}\\right) \\left(\\frac{1}{\\sin y}\\right)\\)", graphData: null },
    { explanation: "Cancel the common terms to complete the proof.", workingOut: "\\(= 1 + \\frac{1}{\\cos y} = 1 + \\sec y = \\text{ RHS}\\)", graphData: null }
  ],
  'y11a-6f-q13c': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\(\\text{LHS } = \\sin^4 \\theta - \\cos^4 \\theta\\)", graphData: null },
    { explanation: "Factorise the expression as a difference of two squares: \\(a^2 - b^2 = (a-b)(a+b)\\).", workingOut: "\\(= (\\sin^2 \\theta - \\cos^2 \\theta)(\\sin^2 \\theta + \\cos^2 \\theta)\\)", graphData: null },
    { explanation: "Apply the Pythagorean identity \\(\\sin^2 \\theta + \\cos^2 \\theta = 1\\).", workingOut: "\\(= (\\sin^2 \\theta - \\cos^2 \\theta)(1)\\)", graphData: null },
    { explanation: "Since the RHS only contains cosine terms, replace \\(\\sin^2 \\theta\\) with \\(1 - \\cos^2 \\theta\\).", workingOut: "\\(= (1 - \\cos^2 \\theta) - \\cos^2 \\theta = 1 - 2 \\cos^2 \\theta = \\text{ RHS}\\)", graphData: null }
  ],
  'y11a-6f-q13d': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\(\\text{LHS } = \\cos \\alpha + \\tan \\alpha \\sin \\alpha\\)", graphData: null },
    { explanation: "Use the ratio identity for tangent.", workingOut: "\\(= \\cos \\alpha + \\left(\\frac{\\sin \\alpha}{\\cos \\alpha}\\right) \\sin \\alpha\\)", graphData: null },
    { explanation: "Combine the terms into a single fraction by finding a common denominator.", workingOut: "\\(= \\frac{\\cos^2 \\alpha}{\\cos \\alpha} + \\frac{\\sin^2 \\alpha}{\\cos \\alpha} = \\frac{\\cos^2 \\alpha + \\sin^2 \\alpha}{\\cos \\alpha}\\)", graphData: null },
    { explanation: "Apply the Pythagorean identity and then the reciprocal identity.", workingOut: "\\(= \\frac{1}{\\cos \\alpha} = \\sec \\alpha = \\text{ RHS}\\)", graphData: null }
  ],
  'y11a-6f-q13e': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\(\\text{LHS } = \\frac{1 + \\tan^2 \\beta}{1 + \\cot^2 \\beta}\\)", graphData: null },
    { explanation: "Apply the Pythagorean identities to both the numerator and the denominator.", workingOut: "\\(= \\frac{\\sec^2 \\beta}{\\csc^2 \\beta}\\)", graphData: null },
    { explanation: "Express in terms of sine and cosine.", workingOut: "\\(= \\frac{1 / \\cos^2 \\beta}{1 / \\sin^2 \\beta}\\)", graphData: null },
    { explanation: "Simplify the complex fraction.", workingOut: "\\(= \\frac{\\sin^2 \\beta}{\\cos^2 \\beta} = \\tan^2 \\beta = \\text{ RHS}\\)", graphData: null }
  ],
  'y11a-6f-q13f': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\(\\text{LHS } = \\frac{1 + \\cot \\gamma}{1 + \\tan \\gamma}\\)", graphData: null },
    { explanation: "Express tangent in terms of cotangent using the reciprocal identity.", workingOut: "\\(= \\frac{1 + \\cot \\gamma}{1 + \\frac{1}{\\cot \\gamma}}\\)", graphData: null },
    { explanation: "Find a common denominator for the expression in the denominator.", workingOut: "\\(= \\frac{1 + \\cot \\gamma}{\\frac{\\cot \\gamma + 1}{\\cot \\gamma}}\\)", graphData: null },
    { explanation: "Simplify the complex fraction to complete the proof.", workingOut: "\\(= (1 + \\cot \\gamma) \\times \\frac{\\cot \\gamma}{\\cot \\gamma + 1} = \\cot \\gamma = \\text{ RHS}\\)", graphData: null }
  ],
  'y11a-6f-q13g': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\(\\text{LHS } = \\frac{1}{1 + \\cos \\phi} + \\frac{1}{1 - \\cos \\phi}\\)", graphData: null },
    { explanation: "Add the fractions by finding a common denominator.", workingOut: "\\(= \\frac{(1 - \\cos \\phi) + (1 + \\cos \\phi)}{(1 + \\cos \\phi)(1 - \\cos \\phi)}\\) ", graphData: null },
    { explanation: "Simplify the numerator and apply the difference of squares to the denominator.", workingOut: "\\(= \\frac{2}{1 - \\cos^2 \\phi}\\)", graphData: null },
    { explanation: "Apply the Pythagorean identity, then the reciprocal identity.", workingOut: "\\(= \\frac{2}{\\sin^2 \\phi} = 2 \\csc^2 \\phi = \\text{ RHS}\\)", graphData: null }
  ],
  'y11a-6f-q13h': [
    { explanation: "Start with the Left Hand Side (LHS).", workingOut: "\\(\\text{LHS } = \\frac{1}{\\csc \\theta - \\cot \\theta} - \\frac{1}{\\csc \\theta + \\cot \\theta}\\)", graphData: null },
    { explanation: "Subtract the fractions by finding a common denominator.", workingOut: "\\(= \\frac{(\\csc \\theta + \\cot \\theta) - (\\csc \\theta - \\cot \\theta)}{(\\csc \\theta - \\cot \\theta)(\\csc \\theta + \\cot \\theta)}\\)", graphData: null },
    { explanation: "Simplify the numerator and apply the difference of squares to the denominator.", workingOut: "\\(= \\frac{2 \\cot \\theta}{\\csc^2 \\theta - \\cot^2 \\theta}\\)", graphData: null },
    { explanation: "Recall the Pythagorean identity \\(1 + \\cot^2 \\theta = \\csc^2 \\theta\\), which rearranges to \\(\\csc^2 \\theta - \\cot^2 \\theta = 1\\). Substitute this to finish.", workingOut: "\\(= \\frac{2 \\cot \\theta}{1} = 2 \\cot \\theta = \\text{ RHS}\\)", graphData: null }
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
  console.log(`Successfully updated ${count} q13 proof questions locally and pushed to Firestore.`);
}
fix().catch(console.error);
