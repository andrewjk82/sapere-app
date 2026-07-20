import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to shuffle options and return new array with correct index
function shuffleOptions(opts, correctVal) {
  const arr = [...opts];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const idx = arr.indexOf(correctVal);
  return { options: arr, answer: String(idx) };
}

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  const updates = {
    'y9-5d-q4d': {
      question: "Solve the equation: \\(h - 2.4 = 7.9\\)",
      ...shuffleOptions(["\\(10.3\\)", "\\(5.5\\)", "\\(9.3\\)", "\\(11.3\\)"], "\\(10.3\\)"),
      solutionSteps: [
        { explanation: "To isolate the variable \\(h\\), perform the inverse operation by adding \\(2.4\\) to both sides of the equation.", workingOut: "\\(h = 7.9 + 2.4\\)" },
        { explanation: "Calculate the decimal sum to solve for \\(h\\).", workingOut: "\\(h = 10.3\\)" }
      ]
    },
    'y9-5d-q4e': {
      question: "Solve the equation: \\(1.5u = 18.0\\)",
      ...shuffleOptions(["\\(12\\)", "\\(15\\)", "\\(9\\)", "\\(10\\)"], "\\(12\\)"),
      solutionSteps: [
        { explanation: "To isolate the variable \\(u\\), perform the inverse operation by dividing both sides of the equation by the coefficient \\(1.5\\).", workingOut: "\\(u = \\frac{18.0}{1.5}\\)" },
        { explanation: "Simplify the division to find the value of \\(u\\). Note that \\(18 \\div 1.5 = 12\\).", workingOut: "\\(u = 12\\)" }
      ]
    },
    'y9-5d-q4f': {
      question: "Solve the equation: \\(2.5r = 8\\)",
      ...shuffleOptions(["\\(3.2\\)", "\\(4\\)", "\\(2.8\\)", "\\(3.5\\)"], "\\(3.2\\)"),
      solutionSteps: [
        { explanation: "To isolate the variable \\(r\\), perform the inverse operation by dividing both sides of the equation by \\(2.5\\).", workingOut: "\\(r = \\frac{8}{2.5}\\)" },
        { explanation: "Simplify the division to find the decimal value of \\(r\\).", workingOut: "\\(r = 3.2\\)" }
      ]
    },
    'y9-5d-q4g': {
      question: "Solve the equation: \\(-3.6x = 28.8\\)",
      ...shuffleOptions(["\\(-8\\)", "\\(8\\)", "\\(-7.5\\)", "\\(-9\\)"], "\\(-8\\)"),
      solutionSteps: [
        { explanation: "To isolate the variable \\(x\\), divide both sides of the equation by the negative coefficient \\(-3.6\\).", workingOut: "\\(x = \\frac{28.8}{-3.6}\\)" },
        { explanation: "Simplify the division to solve for \\(x\\). Note that dividing a positive number by a negative number yields a negative result.", workingOut: "\\(x = -8\\)" }
      ]
    },
    'y9-5d-q4h': {
      question: "Solve the equation: \\(-4.5y = 31.5\\)",
      ...shuffleOptions(["\\(-7\\)", "\\(7\\)", "\\(-6.5\\)", "\\(-8\\)"], "\\(-7\\)"),
      solutionSteps: [
        { explanation: "To isolate the variable \\(y\\), divide both sides of the equation by the negative coefficient \\(-4.5\\).", workingOut: "\\(y = \\frac{31.5}{-4.5}\\)" },
        { explanation: "Simplify the division to solve for \\(y\\).", workingOut: "\\(y = -7\\)" }
      ]
    },
    'y9-5d-q4i': {
      question: "Solve the equation: \\(1.5x + 3 = 12\\)",
      ...shuffleOptions(["\\(6\\)", "\\(5\\)", "\\(8\\)", "\\(7.5\\)"], "\\(6\\)"),
      solutionSteps: [
        { explanation: "First, isolate the variable term \\(1.5x\\) by performing the inverse operation on the constant term. Subtract \\(3\\) from both sides.", workingOut: "\\(1.5x = 12 - 3 \\implies 1.5x = 9\\)" },
        { explanation: "Next, isolate the variable \\(x\\) by dividing both sides by \\(1.5\\).", workingOut: "\\(x = \\frac{9}{1.5} \\implies x = 6\\)" }
      ]
    },
    'y9-5d-q4j': {
      question: "Solve the equation: \\(2.4x - 5 = 9.4\\)",
      ...shuffleOptions(["\\(6\\)", "\\(5\\)", "\\(4.5\\)", "\\(7\\)"], "\\(6\\)"),
      solutionSteps: [
        { explanation: "First, isolate the variable term \\(2.4x\\) by performing the inverse operation on the constant term. Add \\(5\\) to both sides.", workingOut: "\\(2.4x = 9.4 + 5 \\implies 2.4x = 14.4\\)" },
        { explanation: "Next, isolate the variable \\(x\\) by dividing both sides by \\(2.4\\).", workingOut: "\\(x = \\frac{14.4}{2.4} \\implies x = 6\\)" }
      ]
    },
    'y9-5d-q4k': {
      question: "Solve the equation: \\(3.5x - 1.5 = 23\\)",
      ...shuffleOptions(["\\(7\\)", "\\(6.5\\)", "\\(8\\)", "\\(6\\)"], "\\(7\\)"),
      solutionSteps: [
        { explanation: "First, isolate the variable term \\(3.5x\\) by performing the inverse operation on the constant term. Add \\(1.5\\) to both sides.", workingOut: "\\(3.5x = 23 + 1.5 \\implies 3.5x = 24.5\\)" },
        { explanation: "Next, isolate the variable \\(x\\) by dividing both sides by \\(3.5\\).", workingOut: "\\(x = \\frac{24.5}{3.5} \\implies x = 7\\)" }
      ]
    },
    'y9-5d-q4l': {
      question: "Solve the equation: \\(6.4x - 38.2 = 51.4\\)",
      ...shuffleOptions(["\\(14\\)", "\\(12\\)", "\\(15\\)", "\\(13.5\\)"], "\\(14\\)"),
      solutionSteps: [
        { explanation: "First, isolate the variable term \\(6.4x\\) by performing the inverse operation on the constant term. Add \\(38.2\\) to both sides.", workingOut: "\\(6.4x = 51.4 + 38.2 \\implies 6.4x = 89.6\\)" },
        { explanation: "Next, isolate the variable \\(x\\) by dividing both sides by \\(6.4\\).", workingOut: "\\(x = \\frac{89.6}{6.4} \\implies x = 14\\)" }
      ]
    },
    'y9-5d-q5a': {
      question: "Solve the equation: \\(\\frac{5x}{6} - 2 = \\frac{x}{3} + 3\\)",
      ...shuffleOptions(["\\(10\\)", "\\(5\\)", "\\(15\\)", "\\(12\\)"], "\\(10\\)"),
      solutionSteps: [
        { explanation: "Find the Lowest Common Multiple (LCM) of all denominators. The denominators are \\(6\\) and \\(3\\), so the LCM is \\(6\\). Multiply every term in the equation by \\(6\\) to clear the fractions.", workingOut: "\\(6 \\times \\left(\\frac{5x}{6}\\right) - 6 \\times 2 = 6 \\times \\left(\\frac{x}{3}\\right) + 6 \\times 3 \\implies 5x - 12 = 2x + 18\\)" },
        { explanation: "Subtract \\(2x\\) from both sides to group the variable terms on the left side of the equation.", workingOut: "\\(5x - 2x - 12 = 18 \\implies 3x - 12 = 18\\)" },
        { explanation: "Add \\(12\\) to both sides to isolate the variable term \\(3x\\), then divide both sides by \\(3\\) to solve for \\(x\\).", workingOut: "\\(3x = 18 + 12 \\implies 3x = 30 \\implies x = 10\\)" }
      ]
    },
    'y9-5d-q5b': {
      question: "Solve the equation: \\(\\frac{x}{4} + 3 = \\frac{5x}{4} + 1\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(4\\)", "\\(3\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "Multiply every term in the equation by the denominator \\(4\\) to clear the fractions.", workingOut: "\\(4 \\times \\left(\\frac{x}{4}\\right) + 4 \\times 3 = 4 \\times \\left(\\frac{5x}{4}\\right) + 4 \\times 1 \\implies x + 12 = 5x + 4\\)" },
        { explanation: "Subtract \\(x\\) from both sides to group the variable terms on the right side.", workingOut: "\\(12 = 5x - x + 4 \\implies 12 = 4x + 4\\)" },
        { explanation: "Subtract \\(4\\) from both sides to isolate \\(4x\\), then divide both sides by \\(4\\) to solve for \\(x\\).", workingOut: "\\(12 - 4 = 4x \\implies 8 = 4x \\implies x = 2\\)" }
      ]
    },
    'y9-5d-q5c': {
      question: "Solve the equation: \\(\\frac{3x}{4} + 5 = \\frac{5x}{8} - 2\\)",
      ...shuffleOptions(["\\(-56\\)", "\\(56\\)", "\\(-48\\)", "\\(-64\\)"], "\\(-56\\)"),
      solutionSteps: [
        { explanation: "Find the LCM of the denominators \\(4\\) and \\(8\\), which is \\(8\\). Multiply every term in the equation by \\(8\\) to clear the fractions.", workingOut: "\\(8 \\times \\left(\\frac{3x}{4}\\right) + 8 \\times 5 = 8 \\times \\left(\\frac{5x}{8}\\right) - 8 \\times 2 \\implies 6x + 40 = 5x - 16\\)" },
        { explanation: "Subtract \\(5x\\) from both sides to group the variable terms on the left.", workingOut: "\\(6x - 5x + 40 = -16 \\implies x + 40 = -16\\)" },
        { explanation: "Subtract \\(40\\) from both sides to solve for \\(x\\).", workingOut: "\\(x = -16 - 40 \\implies x = -56\\)" }
      ]
    },
    'y9-5d-q5d': {
      question: "Solve the equation: \\(\\frac{4x}{5} - 5 = \\frac{7x}{10} + 2\\)",
      ...shuffleOptions(["\\(70\\)", "\\(-70\\)", "\\(60\\)", "\\(80\\)"], "\\(70\\)"),
      solutionSteps: [
        { explanation: "Find the LCM of the denominators \\(5\\) and \\(10\\), which is \\(10\\). Multiply every term in the equation by \\(10\\) to clear the fractions.", workingOut: "\\(10 \\times \\left(\\frac{4x}{5}\\right) - 10 \\times 5 = 10 \\times \\left(\\frac{7x}{10}\\right) + 10 \\times 2 \\implies 8x - 50 = 7x + 20\\)" },
        { explanation: "Subtract \\(7x\\) from both sides to group the variable terms on the left.", workingOut: "\\(8x - 7x - 50 = 20 \\implies x - 50 = 20\\)" },
        { explanation: "Add \\(50\\) to both sides to solve for \\(x\\).", workingOut: "\\(x = 20 + 50 \\implies x = 70\\)" }
      ]
    },
    'y9-5d-q5e': {
      question: "Solve the equation: \\(\\frac{3x}{4} - 4 = 8 - \\frac{x}{2}\\)",
      ...shuffleOptions(["\\(9.6\\)", "\\(-9.6\\)", "\\(8.4\\)", "\\(10\\)"], "\\(9.6\\)"),
      solutionSteps: [
        { explanation: "Find the LCM of the denominators \\(4\\) and \\(2\\), which is \\(4\\). Multiply every term in the equation by \\(4\\) to clear the fractions.", workingOut: "\\(4 \\times \\left(\\frac{3x}{4}\\right) - 4 \\times 4 = 4 \\times 8 - 4 \\times \\left(\\frac{x}{2}\\right) \\implies 3x - 16 = 32 - 2x\\)" },
        { explanation: "Add \\(2x\\) to both sides to group all variable terms on the left.", workingOut: "\\(3x + 2x - 16 = 32 \\implies 5x - 16 = 32\\)" },
        { explanation: "Add \\(16\\) to both sides to isolate \\(5x\\), then divide both sides by \\(5\\) to solve for \\(x\\).", workingOut: "\\(5x = 32 + 16 \\implies 5x = 48 \\implies x = 9.6\\)" }
      ]
    },
    'y9-5d-q5f': {
      question: "Solve the equation: \\(\\frac{x}{2} - 3 = 5 - \\frac{3x}{4}\\)",
      ...shuffleOptions(["\\(6.4\\)", "\\(-6.4\\)", "\\(5.6\\)", "\\(7.2\\)"], "\\(6.4\\)"),
      solutionSteps: [
        { explanation: "Find the LCM of the denominators \\(2\\) and \\(4\\), which is \\(4\\). Multiply every term in the equation by \\(4\\) to clear the fractions.", workingOut: "\\(4 \\times \\left(\\frac{x}{2}\\right) - 4 \\times 3 = 4 \\times 5 - 4 \\times \\left(\\frac{3x}{4}\\right) \\implies 2x - 12 = 20 - 3x\\)" },
        { explanation: "Add \\(3x\\) to both sides to group all variable terms on the left.", workingOut: "\\(2x + 3x - 12 = 20 \\implies 5x - 12 = 20\\)" },
        { explanation: "Add \\(12\\) to both sides to isolate \\(5x\\), then divide both sides by \\(5\\) to solve for \\(x\\).", workingOut: "\\(5x = 20 + 12 \\implies 5x = 32 \\implies x = 6.4\\)" }
      ]
    }
  };

  for (const [id, data] of Object.entries(updates)) {
    console.log(`Converting ${id} to multiple_choice with shuffled options and highly detailed steps...`);
    const docRef = questionsCol.doc(id);
    batch.update(docRef, {
      type: 'multiple_choice',
      question: data.question,
      options: data.options,
      answer: data.answer,
      solutionSteps: data.solutionSteps
    });
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed detailed step expansion and MCQ conversion for third set of 15 questions in y9-5d!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
