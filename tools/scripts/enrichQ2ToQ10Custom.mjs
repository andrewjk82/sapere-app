import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const solutions = {
  'y11a-6f-q2a': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\frac{1}{\\cos \\theta}\\)", graphData: null },
    { explanation: "Recall the reciprocal identity for cosine.", workingOut: "\\(\\sec \\theta = \\frac{1}{\\cos \\theta}\\)", graphData: null },
    { explanation: "Substitute the identity directly.", workingOut: "\\(\\frac{1}{\\cos \\theta} = \\sec \\theta\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\sec \\theta\\)", graphData: null }
  ],
  'y11a-6f-q2b': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\frac{1}{\\cot \\alpha}\\)", graphData: null },
    { explanation: "Recall the reciprocal identity for cotangent.", workingOut: "\\(\\tan \\alpha = \\frac{1}{\\cot \\alpha}\\)", graphData: null },
    { explanation: "Substitute the identity directly.", workingOut: "\\(\\frac{1}{\\cot \\alpha} = \\tan \\alpha\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\tan \\alpha\\)", graphData: null }
  ],
  'y11a-6f-q2c': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\frac{\\sin x}{\\cos x}\\)", graphData: null },
    { explanation: "Recall the ratio identity for tangent.", workingOut: "\\(\\tan x = \\frac{\\sin x}{\\cos x}\\)", graphData: null },
    { explanation: "Substitute the identity directly.", workingOut: "\\(\\frac{\\sin x}{\\cos x} = \\tan x\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\tan x\\)", graphData: null }
  ],
  'y11a-6f-q2d': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\frac{\\cos y}{\\sin y}\\)", graphData: null },
    { explanation: "Recall the ratio identity for cotangent.", workingOut: "\\(\\cot y = \\frac{\\cos y}{\\sin y}\\)", graphData: null },
    { explanation: "Substitute the identity directly.", workingOut: "\\(\\frac{\\cos y}{\\sin y} = \\cot y\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\cot y\\)", graphData: null }
  ],
  'y11a-6f-q3a': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\cos x \\sec x\\)", graphData: null },
    { explanation: "Rewrite the secant function in terms of cosine.", workingOut: "\\(\\sec x = \\frac{1}{\\cos x}\\)", graphData: null },
    { explanation: "Substitute and simplify the product.", workingOut: "\\(\\cos x \\left(\\frac{1}{\\cos x}\\right) = \\frac{\\cos x}{\\cos x}\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = 1\\)", graphData: null }
  ],
  'y11a-6f-q3b': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\tan y \\cot y\\)", graphData: null },
    { explanation: "Rewrite the cotangent function in terms of tangent.", workingOut: "\\(\\cot y = \\frac{1}{\\tan y}\\)", graphData: null },
    { explanation: "Substitute and simplify the product.", workingOut: "\\(\\tan y \\left(\\frac{1}{\\tan y}\\right) = \\frac{\\tan y}{\\tan y}\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = 1\\)", graphData: null }
  ],
  'y11a-6f-q3c': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\sin z \\csc z\\)", graphData: null },
    { explanation: "Rewrite the cosecant function in terms of sine.", workingOut: "\\(\\csc z = \\frac{1}{\\sin z}\\)", graphData: null },
    { explanation: "Substitute and simplify the product.", workingOut: "\\(\\sin z \\left(\\frac{1}{\\sin z}\\right) = \\frac{\\sin z}{\\sin z}\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = 1\\)", graphData: null }
  ],
  'y11a-6f-q4a': [
    { explanation: "Start with the left-hand side (LHS) of the equation.", workingOut: "\\(\\text{LHS} = \\tan x \\cos x\\)", graphData: null },
    { explanation: "Rewrite the tangent function using the ratio identity.", workingOut: "\\(\\tan x = \\frac{\\sin x}{\\cos x}\\)", graphData: null },
    { explanation: "Substitute the identity into the LHS.", workingOut: "\\(\\text{LHS} = \\left(\\frac{\\sin x}{\\cos x}\\right) \\cos x\\)", graphData: null },
    { explanation: "Cancel the common factor of cosine to prove the equality.", workingOut: "\\(\\text{LHS} = \\sin x = \\text{RHS}\\)", graphData: null }
  ],
  'y11a-6f-q4b': [
    { explanation: "Start with the left-hand side (LHS) of the equation.", workingOut: "\\(\\text{LHS} = \\cot y \\sin y\\)", graphData: null },
    { explanation: "Rewrite the cotangent function using the ratio identity.", workingOut: "\\(\\cot y = \\frac{\\cos y}{\\sin y}\\)", graphData: null },
    { explanation: "Substitute the identity into the LHS.", workingOut: "\\(\\text{LHS} = \\left(\\frac{\\cos y}{\\sin y}\\right) \\sin y\\)", graphData: null },
    { explanation: "Cancel the common factor of sine to prove the equality.", workingOut: "\\(\\text{LHS} = \\cos y = \\text{RHS}\\)", graphData: null }
  ],
  'y11a-6f-q4c': [
    { explanation: "Start with the left-hand side (LHS) of the equation.", workingOut: "\\(\\text{LHS} = \\sin \\theta \\sec \\theta\\)", graphData: null },
    { explanation: "Rewrite the secant function using the reciprocal identity.", workingOut: "\\(\\sec \\theta = \\frac{1}{\\cos \\theta}\\)", graphData: null },
    { explanation: "Substitute the identity into the LHS.", workingOut: "\\(\\text{LHS} = \\sin \\theta \\left(\\frac{1}{\\cos \\theta}\\right)\\)", graphData: null },
    { explanation: "Combine the terms to prove the equality.", workingOut: "\\(\\text{LHS} = \\frac{\\sin \\theta}{\\cos \\theta} = \\tan \\theta = \\text{RHS}\\)", graphData: null }
  ],
  'y11a-6f-q5a': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\cos(90^\\circ - x)\\)", graphData: null },
    { explanation: "Recall the complementary angle identity for cosine.", workingOut: "\\(\\cos(90^\\circ - x) = \\sin x\\)", graphData: null },
    { explanation: "Apply the identity directly.", workingOut: "\\(\\text{The co-function of cosine is sine.}\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\sin x\\)", graphData: null }
  ],
  'y11a-6f-q5b': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\csc(90^\\circ - y)\\)", graphData: null },
    { explanation: "Recall the complementary angle identity for cosecant.", workingOut: "\\(\\csc(90^\\circ - y) = \\sec y\\)", graphData: null },
    { explanation: "Apply the identity directly.", workingOut: "\\(\\text{The co-function of cosecant is secant.}\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\sec y\\)", graphData: null }
  ],
  'y11a-6f-q5c': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\frac{1}{\\tan(90^\\circ - \\theta)}\\)", graphData: null },
    { explanation: "Apply the complementary angle identity for tangent in the denominator.", workingOut: "\\(\\tan(90^\\circ - \\theta) = \\cot \\theta\\)", graphData: null },
    { explanation: "Substitute into the expression and apply the reciprocal identity.", workingOut: "\\(\\frac{1}{\\cot \\theta} = \\tan \\theta\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\tan \\theta\\)", graphData: null }
  ],
  'y11a-6f-q5d': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\frac{\\sin(90^\\circ - z)}{\\cos(90^\\circ - z)}\\)", graphData: null },
    { explanation: "Apply the complementary angle identities to numerator and denominator.", workingOut: "\\(\\sin(90^\\circ - z) = \\cos z\\) and \\(\\cos(90^\\circ - z) = \\sin z\\)", graphData: null },
    { explanation: "Substitute the identities into the expression.", workingOut: "\\(\\frac{\\cos z}{\\sin z}\\)", graphData: null },
    { explanation: "State the result using the ratio identity.", workingOut: "\\(\\text{Result} = \\cot z\\)", graphData: null }
  ],
  'y11a-6f-q6a': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\sin^2 \\theta + \\cos^2 \\theta\\)", graphData: null },
    { explanation: "Recall the primary Pythagorean identity.", workingOut: "\\(\\sin^2 \\theta + \\cos^2 \\theta = 1\\)", graphData: null },
    { explanation: "Apply the identity directly.", workingOut: "\\(\\text{The sum of squared sine and cosine for the same angle is 1.}\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = 1\\)", graphData: null }
  ],
  'y11a-6f-q6b': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = 1 - \\sin^2 y\\)", graphData: null },
    { explanation: "Recall the primary Pythagorean identity.", workingOut: "\\(\\sin^2 y + \\cos^2 y = 1\\)", graphData: null },
    { explanation: "Rearrange the identity.", workingOut: "\\(\\cos^2 y = 1 - \\sin^2 y\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\cos^2 y\\)", graphData: null }
  ],
  'y11a-6f-q6c': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\sec^2 z - 1\\)", graphData: null },
    { explanation: "Recall the Pythagorean identity for tangent and secant.", workingOut: "\\(\\tan^2 z + 1 = \\sec^2 z\\)", graphData: null },
    { explanation: "Rearrange the identity.", workingOut: "\\(\\tan^2 z = \\sec^2 z - 1\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\tan^2 z\\)", graphData: null }
  ],
  'y11a-6f-q6d': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = 1 + \\tan^2 x\\)", graphData: null },
    { explanation: "Recall the Pythagorean identity for tangent and secant.", workingOut: "\\(1 + \\tan^2 x = \\sec^2 x\\)", graphData: null },
    { explanation: "Apply the identity directly.", workingOut: "\\(\\text{The expression simplifies directly.}\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\sec^2 x\\)", graphData: null }
  ],
  'y11a-6f-q7a': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = 1 - \\cos^2 x\\)", graphData: null },
    { explanation: "Recall the primary Pythagorean identity.", workingOut: "\\(\\sin^2 x + \\cos^2 x = 1\\)", graphData: null },
    { explanation: "Rearrange the identity.", workingOut: "\\(\\sin^2 x = 1 - \\cos^2 x\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\sin^2 x\\)", graphData: null }
  ],
  'y11a-6f-q7b': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = 1 + \\cot^2 y\\)", graphData: null },
    { explanation: "Recall the Pythagorean identity for cotangent and cosecant.", workingOut: "\\(1 + \\cot^2 y = \\csc^2 y\\)", graphData: null },
    { explanation: "Apply the identity directly.", workingOut: "\\(\\text{The expression simplifies directly.}\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\csc^2 y\\)", graphData: null }
  ],
  'y11a-6f-q7c': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\csc^2 B - 1\\)", graphData: null },
    { explanation: "Recall the Pythagorean identity for cotangent and cosecant.", workingOut: "\\(\\cot^2 B + 1 = \\csc^2 B\\)", graphData: null },
    { explanation: "Rearrange the identity.", workingOut: "\\(\\cot^2 B = \\csc^2 B - 1\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\cot^2 B\\)", graphData: null }
  ],
  'y11a-6f-q7d': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\csc^2 \\theta - \\cot^2 \\theta\\)", graphData: null },
    { explanation: "Recall the Pythagorean identity for cotangent and cosecant.", workingOut: "\\(\\cot^2 \\theta + 1 = \\csc^2 \\theta\\)", graphData: null },
    { explanation: "Rearrange the identity.", workingOut: "\\(\\csc^2 \\theta - \\cot^2 \\theta = 1\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = 1\\)", graphData: null }
  ],
  'y11a-6f-q8a': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\frac{1}{\\csc^2 x}\\)", graphData: null },
    { explanation: "Rewrite the expression as a square.", workingOut: "\\(\\left(\\frac{1}{\\csc x}\\right)^2\\)", graphData: null },
    { explanation: "Recall and apply the reciprocal identity.", workingOut: "\\(\\frac{1}{\\csc x} = \\sin x\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\sin^2 x\\)", graphData: null }
  ],
  'y11a-6f-q8b': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\frac{\\cos^2 y}{\\sin^2 y}\\)", graphData: null },
    { explanation: "Rewrite the expression as a square.", workingOut: "\\(\\left(\\frac{\\cos y}{\\sin y}\\right)^2\\)", graphData: null },
    { explanation: "Recall and apply the ratio identity.", workingOut: "\\(\\frac{\\cos y}{\\sin y} = \\cot y\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\cot^2 y\\)", graphData: null }
  ],
  'y11a-6f-q8c': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\frac{\\sin^2 z}{\\cos^2 z}\\)", graphData: null },
    { explanation: "Rewrite the expression as a square.", workingOut: "\\(\\left(\\frac{\\sin z}{\\cos z}\\right)^2\\)", graphData: null },
    { explanation: "Recall and apply the ratio identity.", workingOut: "\\(\\frac{\\sin z}{\\cos z} = \\tan z\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = \\tan^2 z\\)", graphData: null }
  ],
  'y11a-6f-q8d': [
    { explanation: "Identify the expression.", workingOut: "\\(\\text{Expression} = \\cos^2 \\theta \\sec^2 \\theta\\)", graphData: null },
    { explanation: "Rewrite the secant squared using reciprocal identities.", workingOut: "\\(\\sec^2 \\theta = \\frac{1}{\\cos^2 \\theta}\\)", graphData: null },
    { explanation: "Substitute into the expression and simplify.", workingOut: "\\(\\cos^2 \\theta \\left(\\frac{1}{\\cos^2 \\theta}\\right) = 1\\)", graphData: null },
    { explanation: "State the result.", workingOut: "\\(\\text{Result} = 1\\)", graphData: null }
  ],
  'y11a-6f-q9a': [
    { explanation: "Start with the left-hand side (LHS) of the equation.", workingOut: "\\(\\text{LHS} = \\sin \\theta \\sec \\theta\\)", graphData: null },
    { explanation: "Rewrite the secant function using the reciprocal identity.", workingOut: "\\(\\sec \\theta = \\frac{1}{\\cos \\theta}\\)", graphData: null },
    { explanation: "Substitute the identity into the LHS.", workingOut: "\\(\\text{LHS} = \\sin \\theta \\left(\\frac{1}{\\cos \\theta}\\right)\\)", graphData: null },
    { explanation: "Combine the terms to prove the equality.", workingOut: "\\(\\text{LHS} = \\frac{\\sin \\theta}{\\cos \\theta} = \\tan \\theta = \\text{RHS}\\)", graphData: null }
  ],
  'y11a-6f-q9b': [
    { explanation: "Start with the left-hand side (LHS) of the equation.", workingOut: "\\(\\text{LHS} = \\sec x \\sin x \\cot x\\)", graphData: null },
    { explanation: "Rewrite secant and cotangent using identities.", workingOut: "\\(\\sec x = \\frac{1}{\\cos x}\\) and \\(\\cot x = \\frac{\\cos x}{\\sin x}\\)", graphData: null },
    { explanation: "Substitute these identities into the LHS.", workingOut: "\\(\\text{LHS} = \\left(\\frac{1}{\\cos x}\\right) \\sin x \\left(\\frac{\\cos x}{\\sin x}\\right)\\)", graphData: null },
    { explanation: "Cancel the common factors of sine and cosine.", workingOut: "\\(\\text{LHS} = 1 = \\text{RHS}\\)", graphData: null }
  ],
  'y11a-6f-q9c': [
    { explanation: "Start with the left-hand side (LHS) of the equation.", workingOut: "\\(\\text{LHS} = \\cos y \\tan y \\csc y\\)", graphData: null },
    { explanation: "Rewrite tangent and cosecant using identities.", workingOut: "\\(\\tan y = \\frac{\\sin y}{\\cos y}\\) and \\(\\csc y = \\frac{1}{\\sin y}\\)", graphData: null },
    { explanation: "Substitute these identities into the LHS.", workingOut: "\\(\\text{LHS} = \\cos y \\left(\\frac{\\sin y}{\\cos y}\\right) \\left(\\frac{1}{\\sin y}\\right)\\)", graphData: null },
    { explanation: "Cancel the common factors of sine and cosine.", workingOut: "\\(\\text{LHS} = 1 = \\text{RHS}\\)", graphData: null }
  ],
  'y11a-6f-q10a': [
    { explanation: "Identify the given fraction.", workingOut: "\\(\\text{Expression} = \\frac{\\sin x}{\\csc x}\\)", graphData: null },
    { explanation: "Rewrite the denominator using a reciprocal identity.", workingOut: "\\(\\csc x = \\frac{1}{\\sin x}\\)", graphData: null },
    { explanation: "Substitute into the expression.", workingOut: "\\(\\frac{\\sin x}{\\frac{1}{\\sin x}}\\)", graphData: null },
    { explanation: "Multiply by the reciprocal of the denominator.", workingOut: "\\(\\text{Result} = \\sin x \\times \\sin x = \\sin^2 x\\)", graphData: null }
  ],
  'y11a-6f-q10b': [
    { explanation: "Identify the given fraction.", workingOut: "\\(\\text{Expression} = \\frac{\\cos y}{\\sec y}\\)", graphData: null },
    { explanation: "Rewrite the denominator using a reciprocal identity.", workingOut: "\\(\\sec y = \\frac{1}{\\cos y}\\)", graphData: null },
    { explanation: "Substitute into the expression.", workingOut: "\\(\\frac{\\cos y}{\\frac{1}{\\cos y}}\\)", graphData: null },
    { explanation: "Multiply by the reciprocal of the denominator.", workingOut: "\\(\\text{Result} = \\cos y \\times \\cos y = \\cos^2 y\\)", graphData: null }
  ],
  'y11a-6f-q10c': [
    { explanation: "Identify the given fraction.", workingOut: "\\(\\text{Expression} = \\frac{\\cot z}{\\csc z}\\)", graphData: null },
    { explanation: "Rewrite both numerator and denominator using identities.", workingOut: "\\(\\cot z = \\frac{\\cos z}{\\sin z}\\) and \\(\\csc z = \\frac{1}{\\sin z}\\)", graphData: null },
    { explanation: "Substitute into the expression.", workingOut: "\\(\\frac{\\frac{\\cos z}{\\sin z}}{\\frac{1}{\\sin z}}\\)", graphData: null },
    { explanation: "Multiply by the reciprocal of the denominator.", workingOut: "\\(\\text{Result} = \\frac{\\cos z}{\\sin z} \\times \\frac{\\sin z}{1} = \\cos z\\)", graphData: null }
  ],
  'y11a-6f-q10d': [
    { explanation: "Identify the given fraction.", workingOut: "\\(\\text{Expression} = \\frac{\\tan \\theta}{\\sec \\theta}\\)", graphData: null },
    { explanation: "Rewrite both numerator and denominator using identities.", workingOut: "\\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}\\) and \\(\\sec \\theta = \\frac{1}{\\cos \\theta}\\)", graphData: null },
    { explanation: "Substitute into the expression.", workingOut: "\\(\\frac{\\frac{\\sin \\theta}{\\cos \\theta}}{\\frac{1}{\\cos \\theta}}\\)", graphData: null },
    { explanation: "Multiply by the reciprocal of the denominator.", workingOut: "\\(\\text{Result} = \\frac{\\sin \\theta}{\\cos \\theta} \\times \\frac{\\cos \\theta}{1} = \\sin \\theta\\)", graphData: null }
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
  console.log(`Successfully updated 33 fully custom solutionSteps for 11A-6F locally and pushed to Firestore.`);
}
fix().catch(console.error);
