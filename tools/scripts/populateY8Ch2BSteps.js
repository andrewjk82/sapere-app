import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

function cleanMath(str) {
  if (!str) return '';
  return str.replace(/\$/g, '');
}

function generateStepsAndHint(q) {
  const qText = q.question;
  const answerVal = q.options[q.answer];
  
  let hint = "Find a common denominator first, then perform the addition or subtraction on the numerators.";
  let solutionSteps = [];

  // Type 1: Word problem (e.g. rope cut off, left fraction)
  if (qText.toLowerCase().includes("rope") || qText.toLowerCase().includes("left") || qText.toLowerCase().includes("fraction of")) {
    hint = "Subtract the fractional part that was used or cut from 1 (the whole).";
    solutionSteps = [
      {
        explanation: "Represent the total amount as a whole number.",
        workingOut: "Total = 1",
        graphData: null
      },
      {
        explanation: "Set up the subtraction equation.",
        workingOut: `Left = 1 - ${cleanMath(qText.match(/\\frac{\d+}{\d+}/) ? qText.match(/\\frac{\d+}{\d+}/)[0] : 'fraction')}`,
        graphData: null
      },
      {
        explanation: "Convert the whole number 1 to a fraction with a matching denominator and solve.",
        workingOut: `Result: ${cleanMath(answerVal)}`,
        graphData: null
      }
    ];
  }
  // Type 2: Evaluate addition or subtraction (e.g. 1/2 + 1/3)
  else {
    solutionSteps = [
      {
        explanation: "Identify the denominators of the fractions.",
        workingOut: `Fractions: ${cleanMath(qText)}`,
        graphData: null
      },
      {
        explanation: "Find the lowest common denominator (LCD) and convert the fractions.",
        workingOut: "Ensure both fractions share the same denominator by multiplying.",
        graphData: null
      },
      {
        explanation: "Add or subtract the numerators while keeping the common denominator.",
        workingOut: `Result: ${cleanMath(answerVal)}`,
        graphData: null
      }
    ];
  }

  // If there are mixed numerals in the question, make the steps adjust
  if (qText.includes("mixed numeral") || qText.includes("\\frac{") && qText.match(/\d\s+\\frac{/)) {
    hint = "Convert mixed numerals to improper fractions first, or add/subtract the whole parts and fractional parts separately.";
    solutionSteps = [
      {
        explanation: "Convert mixed numerals to improper fractions.",
        workingOut: `Original expression: ${cleanMath(qText)}`,
        graphData: null
      },
      {
        explanation: "Find a common denominator and convert the fractions.",
        workingOut: "Find the lowest common multiple of the denominators.",
        graphData: null
      },
      {
        explanation: "Perform the operation on the numerators, then convert back to a mixed numeral in simplest form.",
        workingOut: `Result: ${cleanMath(answerVal)}`,
        graphData: null
      }
    ];
  }

  return { hint, solutionSteps };
}

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y8-2b')
    .get();

  const batch = db.batch();
  let count = 0;

  snap.forEach(doc => {
    const q = doc.data();
    const { hint, solutionSteps } = generateStepsAndHint(q);
    
    const ref = db.collection('questions').doc(doc.id);
    batch.update(ref, {
      hint,
      solutionSteps
    });
    count++;
  });

  await batch.commit();
  console.log(`✅ Successfully updated ${count} questions with detailed Step-by-step solutionSteps in y8-2b!`);
}

run().catch(console.error);
