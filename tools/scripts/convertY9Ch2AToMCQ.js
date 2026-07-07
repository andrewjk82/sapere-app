import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Fisher-Yates shuffle
function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function cleanMath(str) {
  if (!str) return '';
  return str.replace(/\$/g, '');
}

// Generate distracting wrong options for pythagoras answers
function generateDistractors(ansStr, qText) {
  // If the answer is an integer
  const num = parseFloat(ansStr);
  if (!isNaN(num)) {
    if (Number.isInteger(num)) {
      return [
        (num + 2).toString(),
        (num - 2 > 0 ? num - 2 : num + 4).toString(),
        (num + 5).toString()
      ];
    } else {
      // Float to 2 decimals
      return [
        (num + 1.25).toFixed(2),
        (num - 0.75 > 0 ? num - 0.75 : num + 2.5).toFixed(2),
        (num + 0.45).toFixed(2)
      ];
    }
  }

  // If answer contains units or text like "15 cm"
  const matchUnit = ansStr.match(/^([\d\.]+)\s*([a-zA-Z]+)$/);
  if (matchUnit) {
    const val = parseFloat(matchUnit[1]);
    const unit = matchUnit[2];
    return [
      `${(val + 3).toFixed(0)} ${unit}`,
      `${(val - 2 > 0 ? val - 2 : val + 4).toFixed(0)} ${unit}`,
      `${(val + 5).toFixed(0)} ${unit}`
    ];
  }

  // Fallback generic distractors
  return ["12", "25", "9"];
}

function makeSolutionSteps(qId, qText, correctAns) {
  let hint = "Identify if you are finding the hypotenuse (longest side, use addition: c = sqrt(a^2 + b^2)) or a shorter side (use subtraction: a = sqrt(c^2 - b^2)).";
  let steps = [];

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
  } else if (qText.toLowerCase().includes("hypotenuse") || qText.toLowerCase().includes("longest side") || qText.toLowerCase().includes("find the length of the hypotenuse")) {
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
  } else {
    // Finding shorter side
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
    if (q.type === 'teacher_review') {
      continue; // Skip the stays/circle/proof questions as teacher review
    }

    const correctAns = q.answer || q.a || "";
    if (!correctAns) continue;

    // Generate option distractors
    const distractors = generateDistractors(correctAns, q.question);
    const opts = [correctAns, ...distractors];

    // Shuffle options to randomize answer positions
    const paired = opts.map((opt, index) => ({
      text: opt.includes('$') ? opt : `\\(${opt}\\)`,
      isCorrect: index === 0
    }));

    shuffle(paired);

    const shuffledOptions = paired.map(p => p.text);
    const newAnswerIndex = paired.findIndex(p => p.isCorrect);

    // Make steps & hint
    const { hint, steps } = makeSolutionSteps(doc.id, q.question, correctAns);

    const ref = db.collection('questions').doc(doc.id);
    batch.update(ref, {
      type: 'multiple_choice',
      options: shuffledOptions,
      answer: newAnswerIndex,
      hint,
      solutionSteps: steps,
      solution: `The correct answer is ${correctAns}.`
    });

    count++;
  }

  await batch.commit();
  console.log(`✅ Successfully converted and updated ${count} short_answer questions to MCQ with random options & detailed solutionSteps in y9-2a!`);
}

run().catch(console.error);
