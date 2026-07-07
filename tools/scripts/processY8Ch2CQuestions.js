import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Fisher-Yates shuffle algorithm
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

// Convert common fraction patterns like "18/25" or mixed numeral "1 2/3" to decimals to verify math
function evaluateFractionMath(expression) {
  // Replace multiplication and division symbols
  let expr = expression.replace(/\\times/g, '*').replace(/\\div/g, '/').replace(/\\/g, '');
  // Extract mixed numeral space like "1 2/3" -> "(1 + 2/3)"
  expr = expr.replace(/(\d+)\s+frac\{(\d+)\}\{(\d+)\}/g, '($1+$2/$3)');
  // Extract simple fractions like "frac{a}{b}" -> "(a/b)"
  expr = expr.replace(/frac\{(\d+)\}\{(\d+)\}/g, '($1/$2)');
  
  try {
    // Evaluate Javascript math expression safely
    const val = Function(`"use strict"; return (${expr})`)();
    return val;
  } catch (e) {
    return null;
  }
}

function generateStepsAndHint(q) {
  const qText = q.question;
  const rawSolution = q.solution || "";
  const answerVal = q.options[q.answer];

  let hint = "Convert any mixed numerals to improper fractions first. For multiplication, multiply the numerators and denominators. For division, multiply by the reciprocal of the divisor.";
  let solutionSteps = [];

  const cleanAns = cleanMath(answerVal);
  const cleanQ = cleanMath(qText);

  // Check if it is a division question
  if (qText.includes("\\div")) {
    hint = "To divide by a fraction, multiply by its reciprocal (flip the second fraction).";
    solutionSteps = [
      {
        explanation: "Write the division expression.",
        workingOut: `${cleanQ}`,
        graphData: null
      },
      {
        explanation: "Convert division to multiplication by multiplying by the reciprocal.",
        workingOut: "Change \\div to \\times and flip the second fraction.",
        graphData: null
      },
      {
        explanation: "Multiply the numerators and the denominators, then simplify to simplest form.",
        workingOut: `Result: ${cleanAns}`,
        graphData: null
      }
    ];
  }
  // Word problems or reciprocal questions
  else if (qText.toLowerCase().includes("reciprocal")) {
    hint = "The reciprocal of a fraction is found by swapping the numerator and denominator.";
    solutionSteps = [
      {
        explanation: "Identify the fraction to find the reciprocal of.",
        workingOut: `${cleanQ}`,
        graphData: null
      },
      {
        explanation: "Swap the numerator and denominator.",
        workingOut: `Result: ${cleanAns}`,
        graphData: null
      }
    ];
  }
  // Standard multiplication questions
  else {
    hint = "Multiply the numerators together and denominators together. You can cancel common factors first to simplify.";
    solutionSteps = [
      {
        explanation: "Set up the multiplication of the numerators and denominators.",
        workingOut: `${cleanQ}`,
        graphData: null
      },
      {
        explanation: "Cancel common factors between any numerator and denominator to make calculation easier.",
        workingOut: rawSolution ? `${cleanMath(rawSolution)}` : "Identify common factors.",
        graphData: null
      },
      {
        explanation: "Multiply the remaining terms to find the final simplified fraction.",
        workingOut: `Result: ${cleanAns}`,
        graphData: null
      }
    ];
  }

  // Mixed numerals adjustments
  if (qText.includes("mixed numeral") || qText.match(/\d\s+\\frac{/)) {
    hint = "First, convert the mixed numerals into improper fractions. Then multiply or divide.";
    solutionSteps = [
      {
        explanation: "Convert the mixed numerals to improper fractions.",
        workingOut: `Expression: ${cleanQ}`,
        graphData: null
      },
      {
        explanation: "Perform the multiplication or division operation.",
        workingOut: "Multiply numerators and denominators (or multiply by the reciprocal for division).",
        graphData: null
      },
      {
        explanation: "Convert the resulting improper fraction back to a mixed numeral in simplest form.",
        workingOut: `Result: ${cleanAns}`,
        graphData: null
      }
    ];
  }

  return { hint, solutionSteps };
}

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y8-2c')
    .get();

  const batch = db.batch();
  let count = 0;

  snap.forEach(doc => {
    const q = doc.data();
    
    // 1. Math Verification
    const questionMatch = q.question.match(/Evaluate:\s*(.*)/i) || q.question.match(/Work out:\s*(.*)/i);
    if (questionMatch) {
      const mathExpr = questionMatch[1];
      const correctVal = evaluateFractionMath(mathExpr);
      const answerVal = evaluateFractionMath(q.options[q.answer]);
      
      if (correctVal !== null && answerVal !== null) {
        const diff = Math.abs(correctVal - answerVal);
        if (diff > 0.0001) {
          console.warn(`⚠️ Warning: Math mismatch detected in ${doc.id}! Expr=${correctVal}, Ans=${answerVal}`);
        }
      }
    }

    // 2. Generate Steps & Hint
    const { hint, solutionSteps } = generateStepsAndHint(q);

    // 3. Shuffle Options (Randomize answers)
    const originalOptions = [...q.options];
    const paired = originalOptions.map((opt, index) => ({
      text: opt,
      isCorrect: index === q.answer
    }));

    shuffle(paired);

    const shuffledOptions = paired.map(p => p.text);
    const newAnswerIndex = paired.findIndex(p => p.isCorrect);

    const ref = db.collection('questions').doc(doc.id);
    batch.update(ref, {
      options: shuffledOptions,
      answer: newAnswerIndex,
      hint,
      solutionSteps
    });
    count++;
  });

  await batch.commit();
  console.log(`\n✅ Successfully verified, shuffled, and updated y8-2c topic with detailed Steps for ${count} questions!`);
}

run().catch(console.error);
