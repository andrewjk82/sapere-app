import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const overrides = {
  'y11a-6f-q4a': '\\(\\text{LHS } = \\left(\\frac{\\sin x}{\\cos x}\\right) \\cos x = \\sin x = \\text{ RHS}\\)',
  'y11a-6f-q4b': '\\(\\text{LHS } = \\left(\\frac{\\cos y}{\\sin y}\\right) \\sin y = \\cos y = \\text{ RHS}\\)',
  'y11a-6f-q4c': '\\(\\text{LHS } = \\sin \\theta \\left(\\frac{1}{\\cos \\theta}\\right) = \\frac{\\sin \\theta}{\\cos \\theta} = \\tan \\theta = \\text{ RHS}\\)',
  'y11a-6f-q9a': '\\(\\text{LHS } = \\sin \\theta \\left(\\frac{1}{\\cos \\theta}\\right) = \\frac{\\sin \\theta}{\\cos \\theta} = \\tan \\theta = \\text{ RHS}\\)',
  'y11a-6f-q9b': '\\(\\text{LHS } = \\left(\\frac{1}{\\cos x}\\right) \\sin x \\left(\\frac{\\cos x}{\\sin x}\\right) = 1 = \\text{ RHS}\\)',
  'y11a-6f-q9c': '\\(\\text{LHS } = \\cos y \\left(\\frac{\\sin y}{\\cos y}\\right) \\left(\\frac{1}{\\sin y}\\right) = 1 = \\text{ RHS}\\)',
  'y11a-6f-q11b': '\\(\\text{LHS } = \\sec^2 \\theta \\cos^2 \\theta = 1 = \\text{ RHS}\\)',
  'y11a-6f-q11e': '\\(\\text{LHS } = \\left(\\frac{\\cos^2 z}{\\sin^2 z}\\right) \\sin^2 z + \\left(\\frac{\\sin^2 z}{\\cos^2 z}\\right) \\cos^2 z = \\cos^2 z + \\sin^2 z = 1 = \\text{ RHS}\\)',
  'y11a-6f-q11j': '\\(\\text{LHS } = \\tan y \\cot^2 y = \\left(\\frac{1}{\\cot y}\\right) \\cot^2 y = \\cot y = \\text{ RHS}\\)',
  'y11a-6f-q12a': '\\(\\text{LHS } = \\left(\\frac{\\sin x}{\\cos x}\\right) \\left(\\frac{1}{\\sin x}\\right) = \\frac{1}{\\cos x} = \\sec x = \\text{ RHS}\\)',
  'y11a-6f-q12b': '\\(\\text{LHS } = \\left(\\frac{\\cos y}{\\sin y}\\right) \\left(\\frac{1}{\\cos y}\\right) = \\frac{1}{\\cos y} = \\csc y = \\text{ RHS}\\)',
  'y11a-6f-q12c': '\\(\\text{LHS } = \\frac{1}{\\sin^2 \\theta} + \\frac{1}{\\cos^2 \\theta} = \\frac{\\cos^2 \\theta + \\sin^2 \\theta}{\\sin^2 \\theta \\cos^2 \\theta} = \\frac{1}{\\sin^2 \\theta \\cos^2 \\theta} = \\csc^2 \\theta \\sec^2 \\theta = \\text{ RHS}\\)',
  'y11a-6f-q12d': '\\(\\text{LHS } = \\frac{\\sin \\alpha}{\\cos \\alpha} + \\frac{\\cos \\alpha}{\\sin \\alpha} = \\frac{\\sin^2 \\alpha + \\cos^2 \\alpha}{\\sin \\alpha \\cos \\alpha} = \\frac{1}{\\sin \\alpha \\cos \\alpha} = \\csc \\alpha \\sec \\alpha = \\text{ RHS}\\)',
  'y11a-6f-q12e': '\\(\\text{LHS } = \\frac{1}{\\sin \\beta} - \\sin \\beta = \\frac{1 - \\sin^2 \\beta}{\\sin \\beta} = \\frac{\\cos^2 \\beta}{\\sin \\beta} = \\cos \\beta \\left(\\frac{\\cos \\beta}{\\sin \\beta}\\right) = \\cos \\beta \\cot \\beta = \\text{ RHS}\\)',
  'y11a-6f-q12f': '\\(\\text{LHS } = \\frac{1}{\\cos \\phi} - \\cos \\phi = \\frac{1 - \\cos^2 \\phi}{\\cos \\phi} = \\frac{\\sin^2 \\phi}{\\cos \\phi} = \\left(\\frac{\\sin \\phi}{\\cos \\phi}\\right) \\sin \\phi = \\tan \\phi \\sin \\phi = \\text{ RHS}\\)',
  'y11a-6f-q13a': '\\(\\text{LHS } = \\cos x \\sin x \\left(\\frac{1}{\\cos^2 x}\\right) = \\frac{\\sin x}{\\cos x} = \\tan x = \\text{ RHS}\\)',
  'y11a-6f-q13b': '\\(\\text{LHS } = \\sin y \\csc y + \\tan y \\csc y = 1 + \\left(\\frac{\\sin y}{\\cos y}\\right) \\left(\\frac{1}{\\sin y}\\right) = 1 + \\frac{1}{\\cos y} = 1 + \\sec y = \\text{ RHS}\\)',
  'y11a-6f-q13d': '\\(\\text{LHS } = \\cos \\alpha + \\left(\\frac{\\sin \\alpha}{\\cos \\alpha}\\right) \\sin \\alpha = \\cos \\alpha + \\frac{\\sin^2 \\alpha}{\\cos \\alpha} = \\frac{\\cos^2 \\alpha + \\sin^2 \\alpha}{\\cos \\alpha} = \\frac{1}{\\cos \\alpha} = \\sec \\alpha = \\text{ RHS}\\)',
  'y11a-6f-q13e': '\\(\\text{LHS } = \\frac{\\sec^2 \\beta}{\\csc^2 \\beta} = \\frac{\\frac{1}{\\cos^2 \\beta}}{\\frac{1}{\\sin^2 \\beta}} = \\frac{\\sin^2 \\beta}{\\cos^2 \\beta} = \\tan^2 \\beta = \\text{ RHS}\\)',
  'y11a-6f-q13f': '\\(\\text{LHS } = \\frac{1 + \\frac{1}{\\tan \\gamma}}{1 + \\tan \\gamma} = \\frac{\\frac{\\tan \\gamma + 1}{\\tan \\gamma}}{1 + \\tan \\gamma} = \\frac{1}{\\tan \\gamma} = \\cot \\gamma = \\text{ RHS}\\)',
  'y11a-6f-q13g': '\\(\\text{LHS } = \\frac{(1 - \\cos \\phi) + (1 + \\cos \\phi)}{(1 + \\cos \\phi)(1 - \\cos \\phi)} = \\frac{2}{1 - \\cos^2 \\phi} = \\frac{2}{\\sin^2 \\phi} = 2 \\csc^2 \\phi = \\text{ RHS}\\)',
  'y11a-6f-q13h': '\\(\\text{LHS } = \\frac{(\\csc \\theta + \\cot \\theta) - (\\csc \\theta - \\cot \\theta)}{\\csc^2 \\theta - \\cot^2 \\theta} = \\frac{2 \\cot \\theta}{1} = 2 \\cot \\theta = \\text{ RHS}\\)'
};

async function fix() {
  const filepath = path.resolve('src/constants/seedYear11Ch6FQuestions.js');
  const { Y11_CH6F_QUESTIONS } = await import('../../src/constants/seedYear11Ch6FQuestions.js');
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let count = 0;
  for (let q of Y11_CH6F_QUESTIONS) {
    if (overrides[q.id]) {
      q.answer = overrides[q.id];
      q.solution = overrides[q.id];
      
      await db.collection('questions').doc(q.id).update({
        answer: q.answer,
        solution: q.solution,
        updatedAt: FieldValue.serverTimestamp()
      });
      count++;
    }
  }

  const fileContent = "export const Y11_CH6F_QUESTIONS = " + JSON.stringify(Y11_CH6F_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');
  console.log(`Successfully fixed fractions and asterisks for ${count} MODEL ANSWERs locally and pushed to Firestore.`);
}
fix().catch(console.error);
