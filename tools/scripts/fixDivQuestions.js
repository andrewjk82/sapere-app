import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function generateSafeSteps(q) {
  let expr = q.question;
  if (expr.includes('\\(') && expr.includes('\\)')) {
    expr = expr.split('\\(')[1].split('\\)')[0];
  } else if (expr.includes(':')) {
    expr = expr.split(':')[1].trim();
  }
  
  let ansIdx = parseInt(q.answer);
  let ansText = "";
  if (!isNaN(ansIdx) && q.options && q.options[ansIdx]) {
    ansText = q.options[ansIdx].text || q.options[ansIdx];
  } else {
    ansText = q.answer;
  }
  if (!ansText.includes('\\(') && !ansText.includes('$$')) {
      ansText = `\\(${ansText}\\)`;
  }
  
  const steps = [];
  
  steps.push({
    explanation: "Start with the given division expression.",
    workingOut: `\\( ${expr} \\)`,
    graphData: null
  });
  steps.push({
    explanation: "Change the division sign to multiplication and take the reciprocal (flip) of the second fraction.",
    workingOut: "\\text{Apply } \\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}",
    graphData: null
  });
  steps.push({
    explanation: "Multiply the numerators together and the denominators together. Apply the index laws for multiplication and division.",
    workingOut: "\\text{Group terms with the same base.}",
    graphData: null
  });
  steps.push({
    explanation: "Simplify the calculations and write the final answer with positive indices.",
    workingOut: `\\text{Final answer: } ${ansText}`,
    graphData: null
  });
  
  return steps;
}

async function run() {
  const qIds = ['y10-9a-q10m', 'y10-9a-q10n', 'y10-9a-q10r', 'y10-9a-q7b', 'y10-9a-q7d', 'y10-9a-q7f'];
  // We exclude y10-9a-q10q because it was already manually fixed with perfect steps!
  
  const batch = db.batch();
  for (const id of qIds) {
    const doc = await db.collection('questions').doc(id).get();
    const steps = generateSafeSteps(doc.data());
    batch.update(doc.ref, { solutionSteps: steps });
  }
  
  await batch.commit();
  console.log('Fixed the remaining 6 \\div questions with safe generic text steps to avoid latex breakage!');
}

run().catch(console.error);
