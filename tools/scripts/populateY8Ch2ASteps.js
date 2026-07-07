import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to clean LaTeX math dollar signs from string
function cleanMath(str) {
  if (!str) return '';
  return str.replace(/\$/g, '');
}

// Function to generate detailed step-by-step solution steps based on question type
function generateStepsAndHint(q) {
  const qText = q.question;
  const answerVal = q.options[q.answer];
  
  let hint = "";
  let solutionSteps = [];

  // Type 1: Arrange fractions from smallest to largest
  if (qText.toLowerCase().includes("arrange from smallest to largest")) {
    hint = "To compare fractions, check if they have the same numerator or find a common denominator.";
    
    // Extract fractions, e.g. "1/2, 1/3, 1/4"
    const match = qText.match(/Arrange from smallest to largest:\s*(.*)/i);
    const fractionsStr = match ? match[1] : "";
    
    solutionSteps = [
      {
        explanation: "Identify the numerators and denominators.",
        workingOut: `Given fractions: ${cleanMath(fractionsStr)}`,
        graphData: null
      },
      {
        explanation: "Compare the sizes.",
        workingOut: "For fractions with the same numerator (all have numerator 1), a larger denominator makes a smaller fraction.",
        graphData: null
      },
      {
        explanation: "Arrange them in order.",
        workingOut: `${cleanMath(answerVal)}`,
        graphData: null
      }
    ];
  }
  // Type 2: Are A and B equivalent?
  else if (qText.toLowerCase().includes("are") && qText.toLowerCase().includes("equivalent")) {
    hint = "Simplify both fractions or multiply the numerator and denominator of one fraction to see if they match.";
    
    // Find the fractions, e.g. "Are 7/8 and 49/64 equivalent?"
    const match = qText.match(/Are\s*(.*?)\s*and\s*(.*?)\s*equivalent/i);
    const f1 = match ? match[1] : "";
    const f2 = match ? match[2] : "";
    
    const isYes = cleanMath(answerVal).toLowerCase().includes("yes");
    
    solutionSteps = [
      {
        explanation: "Write down the two fractions to compare.",
        workingOut: `Fraction 1: ${cleanMath(f1)}, Fraction 2: ${cleanMath(f2)}`,
        graphData: null
      },
      {
        explanation: "Scale the simpler fraction to have the same denominator.",
        workingOut: `We check if scaling the numerator and denominator of the first fraction matches the second.`,
        graphData: null
      },
      {
        explanation: "Check equivalence.",
        workingOut: isYes 
          ? `Since they are equal, the answer is Yes.`
          : `Since they are not equal, the answer is No.`,
        graphData: null
      }
    ];
  }
  // Type 3: Write A in simplest form
  else if (qText.toLowerCase().includes("simplest form")) {
    hint = "Find the Highest Common Factor (HCF) of the numerator and denominator, then divide both by it.";
    
    const match = qText.match(/Write\s*(.*?)\s*in simplest form/i);
    const fraction = match ? match[1] : "";
    
    solutionSteps = [
      {
        explanation: "Identify the numerator and denominator.",
        workingOut: `Given fraction: ${cleanMath(fraction)}`,
        graphData: null
      },
      {
        explanation: "Find the Highest Common Factor (HCF).",
        workingOut: "Find the largest number that divides both numerator and denominator.",
        graphData: null
      },
      {
        explanation: "Divide both numerator and denominator by the HCF to simplify.",
        workingOut: `Result: ${cleanMath(answerVal)}`,
        graphData: null
      }
    ];
  }
  // Type 4: Write A with denominator B
  else if (qText.toLowerCase().includes("with denominator")) {
    hint = "Find the multiplier by dividing the new denominator by the original denominator, then multiply the numerator by that same value.";
    
    const match = qText.match(/Write\s*(.*?)\s*with denominator\s*(.*)/i);
    const fraction = match ? match[1] : "";
    const newDenom = match ? match[2] : "";
    
    solutionSteps = [
      {
        explanation: "Identify the starting fraction and target denominator.",
        workingOut: `Fraction: ${cleanMath(fraction)}, Target Denominator: ${cleanMath(newDenom)}`,
        graphData: null
      },
      {
        explanation: "Determine the multiplier.",
        workingOut: `Divide target denominator by original denominator.`,
        graphData: null
      },
      {
        explanation: "Multiply the numerator by the same multiplier.",
        workingOut: `Result: ${cleanMath(answerVal)}`,
        graphData: null
      }
    ];
  }
  // General Fallback
  else {
    hint = "Perform the calculation step-by-step.";
    solutionSteps = [
      {
        explanation: "Solve the question step-by-step.",
        workingOut: `${cleanMath(q.solution || '')}`,
        graphData: null
      }
    ];
  }

  return { hint, solutionSteps };
}

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y8-2a')
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
  console.log(`✅ Successfully updated ${count} questions with detailed Step-by-step solutionSteps in Firebase!`);
}

run().catch(console.error);
