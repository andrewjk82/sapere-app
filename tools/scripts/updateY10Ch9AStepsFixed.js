import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';

const sa = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

function generateSteps(q) {
  let exprMatch = q.question.match(/\\\\\\((.*?)\\\\\\)/);
  if (!exprMatch) exprMatch = q.question.match(/:\s*(.*)/);
  let expr = exprMatch ? exprMatch[1].trim() : q.question;
  
  // Clean up any double backslashes for analysis
  const str = expr.replace(/\\\\/g, '\\');
  
  // Get the correct answer text
  let ansIdx = parseInt(q.answer);
  let ansText = "";
  if (!isNaN(ansIdx) && q.options && q.options[ansIdx]) {
    ansText = q.options[ansIdx].text || q.options[ansIdx];
  } else {
    ansText = q.answer; // fallback
  }

  // Ensure answer is wrapped in math tags if it contains backslashes or carats, else just use it
  let formattedAns = ansText;
  if (!formattedAns.includes('\\(') && !formattedAns.includes('$$')) {
      formattedAns = `\\(${formattedAns}\\)`;
  }
  
  const steps = [];
  
  if (str.includes('\\frac')) {
    steps.push({
      explanation: "Start with the given algebraic fraction.",
      workingOut: `\\(${expr}\\)`,
      graphData: null
    });
    steps.push({
      explanation: "Separate the coefficients (numbers) from the pronumerals (variables). For the variables, match up the terms with the same base in the numerator and denominator.",
      workingOut: "\\text{Group terms with the same base together.}",
      graphData: null
    });
    steps.push({
      explanation: "Apply the index law for division: subtract the index in the denominator from the index in the numerator for each base.",
      workingOut: "\\text{Using } \\frac{a^m}{a^n} = a^{m-n}",
      graphData: null
    });
    steps.push({
      explanation: "Simplify the coefficients and the new indices. Finally, ensure all indices in the answer are positive by moving any terms with negative indices to the denominator.",
      workingOut: `\\text{Final answer: } ${formattedAns}`,
      graphData: null
    });
  } else if (str.includes('\\times')) {
    steps.push({
      explanation: "Start with the multiplication expression.",
      workingOut: `\\(${expr}\\)`,
      graphData: null
    });
    steps.push({
      explanation: "Group the coefficients together and group the pronumerals with the same base together.",
      workingOut: "\\text{Commutative law allows us to reorder the terms.}",
      graphData: null
    });
    steps.push({
      explanation: "Multiply the coefficients. Then, apply the index law for multiplication: add the indices for terms with the same base.",
      workingOut: "\\text{Using } a^m \\times a^n = a^{m+n}",
      graphData: null
    });
    steps.push({
      explanation: "Calculate the sums of the indices. If any resulting indices are negative, write them with a positive index by taking the reciprocal.",
      workingOut: `\\text{Final answer: } ${formattedAns}`,
      graphData: null
    });
  } else if (str.includes('^') && str.includes('(')) {
    steps.push({
      explanation: "Start with the power of a power expression.",
      workingOut: `\\(${expr}\\)`,
      graphData: null
    });
    steps.push({
      explanation: "Apply the power outside the bracket to the coefficient and to every term inside the bracket.",
      workingOut: "\\text{Using } (ab)^n = a^n b^n",
      graphData: null
    });
    steps.push({
      explanation: "Apply the index law for a power of a power: multiply the inner index by the outer index.",
      workingOut: "\\text{Using } (a^m)^n = a^{m \\times n}",
      graphData: null
    });
    steps.push({
      explanation: "Evaluate the coefficient and simplify the indices. Write any negative indices as positive.",
      workingOut: `\\text{Final answer: } ${formattedAns}`,
      graphData: null
    });
  } else {
    // Generic fallback for addition/subtraction of negative indices or simple terms
    steps.push({
      explanation: "Start with the given expression.",
      workingOut: `\\(${expr}\\)`,
      graphData: null
    });
    steps.push({
      explanation: "Identify any terms with negative indices or zero indices.",
      workingOut: "\\text{Recall that } x^{-n} = \\frac{1}{x^n} \\text{ and } x^0 = 1",
      graphData: null
    });
    steps.push({
      explanation: "Rewrite these terms using positive indices. If there are fractions to add or subtract, find a common denominator.",
      workingOut: "\\text{Apply the rules of arithmetic.}",
      graphData: null
    });
    steps.push({
      explanation: "Simplify fully to reach the final answer.",
      workingOut: `\\text{Final answer: } ${formattedAns}`,
      graphData: null
    });
  }
  
  return steps;
}

async function run() {
  const snapshot = await db.collection('questions').where('topicId', '==', 'y10-9a').get();
  const batch = db.batch();
  let count = 0;
  
  snapshot.forEach(doc => {
    const q = doc.data();
    if (q.type === 'multiple_choice' || q.type === 'teacher_review' || q.type === 'short_answer') {
      const newSteps = generateSteps(q);
      batch.update(doc.ref, { solutionSteps: newSteps });
      count++;
    }
  });
  
  if (count > 0) {
    await batch.commit();
    console.log(`Successfully updated ${count} questions in y10-9a with fixed regex 4-step solutions.`);
  } else {
    console.log('No questions found.');
  }
}

run().catch(console.error);
