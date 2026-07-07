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

function makeSolutionSteps(qId, qText, correctAns) {
  let hint = "Identify if you are finding the hypotenuse (longest side, use addition: c = sqrt(a^2 + b^2)) or a shorter side (use subtraction: a = sqrt(c^2 - b^2)).";
  let steps = [];

  const textLower = qText.toLowerCase();

  // Root approximation questions (3a, 3b, 3c, 3d)
  if (qId.includes("3a") || qId.includes("3b") || qId.includes("3c") || qId.includes("3d")) {
    hint = "Use your calculator to find the square root and round to 2 decimal places.";
    steps = [
      {
        explanation: "Find the square root using a calculator.",
        workingOut: `Expression: ${cleanMath(qText)}`,
        graphData: null
      },
      {
        explanation: "Round the result to 2 decimal places (check the third decimal digit).",
        workingOut: `Rounded answer: ${correctAns}`,
        graphData: null
      }
    ];
  } 
  // Finding shorter side questions (shorter side, unknown side when hypotenuse is given)
  else if (textLower.includes("hypotenuse of") || textLower.includes("hypotenuse is") || textLower.includes("shorter side")) {
    // If hypotenuse is GIVEN in the question, we are finding a SHORTER side.
    const hasHypotenuseGiven = (textLower.includes("hypotenuse of 13") || textLower.includes("hypotenuse of 25") || textLower.includes("hypotenuse of 39") || textLower.includes("hypotenuse of 41") || textLower.includes("hypotenuse of 37") || textLower.includes("hypotenuse of 65") || textLower.includes("hypotenuse is 11") || textLower.includes("hypotenuse is 14"));
    
    if (hasHypotenuseGiven) {
      steps = [
        {
          explanation: "Write down the Pythagoras formula for a shorter side.",
          workingOut: "a = \\sqrt{c^2 - b^2} \\quad \\text{(where c is the hypotenuse)}",
          graphData: null
        },
        {
          explanation: "Substitute the hypotenuse and the given side length, then square them.",
          workingOut: `a = \\sqrt{\\text{hypotenuse}^2 - \\text{side}^2}`,
          graphData: null
        },
        {
          explanation: "Subtract the squares and calculate the square root.",
          workingOut: `a = ${correctAns}`,
          graphData: null
        }
      ];
    } else {
      // Find the hypotenuse
      steps = [
        {
          explanation: "Write down the Pythagoras formula for the hypotenuse.",
          workingOut: "c = \\sqrt{a^2 + b^2}",
          graphData: null
        },
        {
          explanation: "Substitute the given shorter side lengths and calculate their squares.",
          workingOut: `c = \\sqrt{\\text{side1}^2 + \\text{side2}^2}`,
          graphData: null
        },
        {
          explanation: "Find the sum of the squares and calculate the square root.",
          workingOut: `c = ${correctAns}`,
          graphData: null
        }
      ];
    }
  }
  // Default to finding hypotenuse (e.g. standard two shorter sides given)
  else {
    steps = [
      {
        explanation: "Write down the Pythagoras formula for the hypotenuse.",
        workingOut: "c = \\sqrt{a^2 + b^2}",
        graphData: null
      },
      {
        explanation: "Substitute the given shorter side lengths and calculate their squares.",
        workingOut: `c = \\sqrt{\\text{side1}^2 + \\text{side2}^2}`,
        graphData: null
      },
      {
        explanation: "Find the sum of the squares and calculate the square root.",
        workingOut: `c = ${correctAns}`,
        graphData: null
      }
    ];
  }

  return { hint, steps };
}

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y9-2a')
    .get();

  const batch = db.batch();
  let count = 0;

  for (const doc of snap.docs) {
    const q = doc.data();
    if (q.type === 'teacher_review') continue;

    const correctAns = q.solution.match(/The correct answer is (.*)\./) ? q.solution.match(/The correct answer is (.*)\./)[1] : "";
    if (!correctAns) continue;

    const { hint, steps } = makeSolutionSteps(doc.id, q.question, correctAns);

    const ref = db.collection('questions').doc(doc.id);
    batch.update(ref, {
      hint,
      solutionSteps: steps
    });
    count++;
  }

  await batch.commit();
  console.log(`✅ Successfully corrected explanation steps for ${count} questions in y9-2a!`);
}

run().catch(console.error);
