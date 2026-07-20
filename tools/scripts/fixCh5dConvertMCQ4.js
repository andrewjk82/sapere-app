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
    'y9-5d-q5g': {
      question: "Solve the equation: \\(\\frac{7}{4} - \\frac{x}{3} = \\frac{5x}{6} + \\frac{11}{12}\\)",
      ...shuffleOptions(["\\(\\frac{5}{7}\\)", "\\(-\\frac{5}{7}\\)", "\\(\\frac{10}{7}\\)", "\\(\\frac{3}{7}\\)"], "\\(\\frac{5}{7}\\)"),
      solutionSteps: [
        { explanation: "Find the Lowest Common Multiple (LCM) of all denominators. The denominators are \\(4, 3, 6,\\) and \\(12\\), so the LCM is \\(12\\). Multiply every term in the equation by \\(12\\) to clear the fractions.", workingOut: "\\(12 \\times \\left(\\frac{7}{4}\\right) - 12 \\times \\left(\\frac{x}{3}\\right) = 12 \\times \\left(\\frac{5x}{6}\\right) + 12 \\times \\left(\\frac{11}{12}\\right) \\implies 21 - 4x = 10x + 11\\)" },
        { explanation: "Add \\(4x\\) to both sides of the equation to group all variable terms on the right side.", workingOut: "\\(21 = 10x + 4x + 11 \\implies 21 = 14x + 11\\)" },
        { explanation: "Subtract \\(11\\) from both sides to isolate the variable term.", workingOut: "\\(21 - 11 = 14x \\implies 10 = 14x\\)" },
        { explanation: "Divide both sides by \\(14\\) to solve for \\(x\\), then reduce the fraction to its simplest form.", workingOut: "\\(x = \\frac{10}{14} \\implies x = \\frac{5}{7}\\)" }
      ]
    },
    'y9-5d-q5h': {
      question: "Solve the equation: \\(\\frac{7}{10} - \\frac{3x}{5} = \\frac{x}{2} - \\frac{1}{2}\\)",
      ...shuffleOptions(["\\(\\frac{12}{11}\\)", "\\(-\\frac{12}{11}\\)", "\\(\\frac{6}{11}\\)", "\\(\\frac{13}{11}\\)"], "\\(\\frac{12}{11}\\)"),
      solutionSteps: [
        { explanation: "Find the LCM of all denominators. The denominators are \\(10, 5, 2,\\) and \\(2\\), so the LCM is \\(10\\). Multiply every term in the equation by \\(10\\) to clear the fractions.", workingOut: "\\(10 \\times \\left(\\frac{7}{10}\\right) - 10 \\times \\left(\\frac{3x}{5}\\right) = 10 \\times \\left(\\frac{x}{2}\\right) - 10 \\times \\left(\\frac{1}{2}\\right) \\implies 7 - 6x = 5x - 5\\)" },
        { explanation: "Add \\(6x\\) to both sides of the equation to group all variable terms on the right side.", workingOut: "\\(7 = 5x + 6x - 5 \\implies 7 = 11x - 5\\)" },
        { explanation: "Add \\(5\\) to both sides to isolate the variable term \\(11x\\), then divide both sides by \\(11\\) to solve for \\(x\\).", workingOut: "\\(7 + 5 = 11x \\implies 12 = 11x \\implies x = \\frac{12}{11}\\)" }
      ]
    },
    'y9-5d-q6a': {
      question: "Solve the equation: \\(2.4x + 15 = 1.6x + 19\\)",
      ...shuffleOptions(["\\(5\\)", "\\(-5\\)", "\\(4\\)", "\\(6.5\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(1.6x\\) from both sides to group the variable terms on the left.", workingOut: "\\(2.4x - 1.6x + 15 = 19 \\implies 0.8x + 15 = 19\\)" },
        { explanation: "Subtract \\(15\\) from both sides to isolate the variable term \\(0.8x\\).", workingOut: "\\(0.8x = 19 - 15 \\implies 0.8x = 4\\)" },
        { explanation: "Divide both sides by \\(0.8\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{4}{0.8} \\implies x = 5\\)" }
      ]
    },
    'y9-5d-q6b': {
      question: "Solve the equation: \\(4.8x - 9 = 1.3x + 26\\)",
      ...shuffleOptions(["\\(10\\)", "\\(-10\\)", "\\(8\\)", "\\(12.5\\)"], "\\(10\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(1.3x\\) from both sides to group the variable terms on the left.", workingOut: "\\(4.8x - 1.3x - 9 = 26 \\implies 3.5x - 9 = 26\\)" },
        { explanation: "Add \\(9\\) to both sides to isolate the variable term \\(3.5x\\).", workingOut: "\\(3.5x = 26 + 9 \\implies 3.5x = 35\\)" },
        { explanation: "Divide both sides by \\(3.5\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{35}{3.5} \\implies x = 10\\)" }
      ]
    },
    'y9-5d-q6c': {
      question: "Solve the equation: \\(6.4x + 18 = 54 - 2.6x\\)",
      ...shuffleOptions(["\\(4\\)", "\\(-4\\)", "\\(3\\)", "\\(4.5\\)"], "\\(4\\)"),
      solutionSteps: [
        { explanation: "Add \\(2.6x\\) to both sides of the equation to group all variable terms on the left.", workingOut: "\\(6.4x + 2.6x + 18 = 54 \\implies 9x + 18 = 54\\)" },
        { explanation: "Subtract \\(18\\) from both sides to isolate the variable term \\(9x\\).", workingOut: "\\(9x = 54 - 18 \\implies 9x = 36\\)" },
        { explanation: "Divide both sides by \\(9\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{36}{9} \\implies x = 4\\)" }
      ]
    },
    'y9-5d-q6d': {
      question: "Solve the equation: \\(3.5 - 2.4x = 14 + 1.1x\\)",
      ...shuffleOptions(["\\(-3\\)", "\\(3\\)", "\\(-2.5\\)", "\\(-4\\)"], "\\(-3\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(1.1x\\) from both sides to group all variable terms on the left.", workingOut: "\\(3.5 - 2.4x - 1.1x = 14 \\implies 3.5 - 3.5x = 14\\)" },
        { explanation: "Subtract \\(3.5\\) from both sides to isolate the variable term \\(-3.5x\\).", workingOut: "\\(-3.5x = 14 - 3.5 \\implies -3.5x = 10.5\\)" },
        { explanation: "Divide both sides by \\(-3.5\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{10.5}{-3.5} \\implies x = -3\\)" }
      ]
    },
    'y9-5d-q6e': {
      question: "Solve the equation: \\(2.5x + 4.8 = 9.3 - 0.5x\\)",
      ...shuffleOptions(["\\(1.5\\)", "\\(-1.5\\)", "\\(2\\)", "\\(1.25\\)"], "\\(1.5\\)"),
      solutionSteps: [
        { explanation: "Add \\(0.5x\\) to both sides to group all variable terms on the left.", workingOut: "\\(2.5x + 0.5x + 4.8 = 9.3 \\implies 3x + 4.8 = 9.3\\)" },
        { explanation: "Subtract \\(4.8\\) from both sides to isolate the variable term \\(3x\\).", workingOut: "\\(3x = 9.3 - 4.8 \\implies 3x = 4.5\\)" },
        { explanation: "Divide both sides by \\(3\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{4.5}{3} \\implies x = 1.5\\)" }
      ]
    },
    'y9-5d-q6f': {
      question: "Solve the equation: \\(8.7x + 5.4 = 47.4 - 1.8x\\)",
      ...shuffleOptions(["\\(4\\)", "\\(-4\\)", "\\(5\\)", "\\(3.5\\)"], "\\(4\\)"),
      solutionSteps: [
        { explanation: "Add \\(1.8x\\) to both sides to group all variable terms on the left.", workingOut: "\\(8.7x + 1.8x + 5.4 = 47.4 \\implies 10.5x + 5.4 = 47.4\\)" },
        { explanation: "Subtract \\(5.4\\) from both sides to isolate the variable term \\(10.5x\\).", workingOut: "\\(10.5x = 47.4 - 5.4 \\implies 10.5x = 42\\)" },
        { explanation: "Divide both sides by \\(10.5\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{42}{10.5} \\implies x = 4\\)" }
      ]
    },
    'y9-5d-q7a': {
      question: "Solve the equation for \\(a\\): \\(\\frac{a + 4}{3} = \\frac{a + 1}{4}\\)",
      ...shuffleOptions(["\\(-13\\)", "\\(13\\)", "\\(-12\\)", "\\(-15\\)"], "\\(-13\\)"),
      solutionSteps: [
        { explanation: "Cross-multiply to eliminate the denominators. Multiply the numerator of each side by the denominator of the other side.", workingOut: "\\(4(a + 4) = 3(a + 1)\\)" },
        { explanation: "Expand the brackets on both sides of the equation.", workingOut: "\\(4a + 16 = 3a + 3\\)" },
        { explanation: "Subtract \\(3a\\) from both sides to group the variable terms on the left.", workingOut: "\\(4a - 3a + 16 = 3 \\implies a + 16 = 3\\)" },
        { explanation: "Subtract \\(16\\) from both sides to solve for \\(a\\).", workingOut: "\\(a = 3 - 16 \\implies a = -13\\)" }
      ]
    },
    'y9-5d-q7b': {
      question: "Solve the equation for \\(a\\): \\(\\frac{a + 2}{4} = \\frac{2a - 3}{9}\\)",
      ...shuffleOptions(["\\(-30\\)", "\\(30\\)", "\\(-24\\)", "\\(-28\\)"], "\\(-30\\)"),
      solutionSteps: [
        { explanation: "Cross-multiply to eliminate the denominators.", workingOut: "\\(9(a + 2) = 4(2a - 3)\\)" },
        { explanation: "Expand the brackets on both sides of the equation.", workingOut: "\\(9a + 18 = 8a - 12\\)" },
        { explanation: "Subtract \\(8a\\) from both sides to group the variable terms on the left.", workingOut: "\\(9a - 8a + 18 = -12 \\implies a + 18 = -12\\)" },
        { explanation: "Subtract \\(18\\) from both sides to solve for \\(a\\).", workingOut: "\\(a = -12 - 18 \\implies a = -30\\)" }
      ]
    },
    'y9-5d-q7c': {
      question: "Solve the equation for \\(a\\): \\(\\frac{2a + 3}{5} = \\frac{3a + 2}{7}\\)",
      ...shuffleOptions(["\\(11\\)", "\\(-11\\)", "\\(9\\)", "\\(13\\)"], "\\(11\\)"),
      solutionSteps: [
        { explanation: "Cross-multiply to eliminate the denominators.", workingOut: "\\(7(2a + 3) = 5(3a + 2)\\)" },
        { explanation: "Expand the brackets on both sides of the equation.", workingOut: "\\(14a + 21 = 15a + 10\\)" },
        { explanation: "Subtract \\(14a\\) from both sides to group the variable terms on the right side.", workingOut: "\\(21 = 15a - 14a + 10 \\implies 21 = a + 10\\)" },
        { explanation: "Subtract \\(10\\) from both sides to solve for \\(a\\).", workingOut: "\\(21 - 10 = a \\implies a = 11\\)" }
      ]
    },
    'y9-5d-q7d': {
      question: "Solve the equation for \\(a\\): \\(\\frac{a + 2}{3} + 1 = \\frac{a - 2}{4}\\)",
      ...shuffleOptions(["\\(-26\\)", "\\(26\\)", "\\(-24\\)", "\\(-30\\)"], "\\(-26\\)"),
      solutionSteps: [
        { explanation: "Find the LCM of the denominators \\(3\\) and \\(4\\), which is \\(12\\). Multiply every term in the equation by \\(12\\) to clear the fractions.", workingOut: "\\(12 \\times \\left(\\frac{a + 2}{3}\\right) + 12 \\times 1 = 12 \\times \\left(\\frac{a - 2}{4}\\right) \\implies 4(a + 2) + 12 = 3(a - 2)\\)" },
        { explanation: "Expand the brackets on both sides.", workingOut: "\\(4a + 8 + 12 = 3a - 6 \\implies 4a + 20 = 3a - 6\\)" },
        { explanation: "Subtract \\(3a\\) from both sides to group the variable terms on the left.", workingOut: "\\(4a - 3a + 20 = -6 \\implies a + 20 = -6\\)" },
        { explanation: "Subtract \\(20\\) from both sides to solve for \\(a\\).", workingOut: "\\(a = -6 - 20 \\implies a = -26\\)" }
      ]
    },
    'y9-5d-q7e': {
      question: "Solve the equation for \\(a\\): \\(\\frac{2a + 3}{5} + 3 = a\\)",
      ...shuffleOptions(["\\(6\\)", "\\(-6\\)", "\\(5\\)", "\\(8\\)"], "\\(6\\)"),
      solutionSteps: [
        { explanation: "Multiply every term in the equation by \\(5\\) to clear the fractions.", workingOut: "\\(5 \\times \\left(\\frac{2a + 3}{5}\\right) + 5 \\times 3 = 5 \\times a \\implies (2a + 3) + 15 = 5a\\)" },
        { explanation: "Simplify the constant terms on the left side.", workingOut: "\\(2a + 18 = 5a\\)" },
        { explanation: "Subtract \\(2a\\) from both sides to isolate the variable term \\(3a\\) on the right side.", workingOut: "\\(18 = 5a - 2a \\implies 18 = 3a\\)" },
        { explanation: "Divide both sides by \\(3\\) to solve for \\(a\\).", workingOut: "\\(a = \\frac{18}{3} \\implies a = 6\\)" }
      ]
    },
    'y9-5d-q7f': {
      question: "Solve the equation for \\(a\\): \\(\\frac{2a + 3}{4} + \\frac{a}{2} = 6\\)",
      ...shuffleOptions(["\\(\\frac{21}{4}\\)", "\\(-\\frac{21}{4}\\)", "\\(5\\)", "\\(\\frac{19}{4}\\)"], "\\(\\frac{21}{4}\\)"),
      solutionSteps: [
        { explanation: "Find the LCM of the denominators \\(4\\) and \\(2\\), which is \\(4\\). Multiply every term in the equation by \\(4\\) to clear the fractions.", workingOut: "\\(4 \\times \\left(\\frac{2a + 3}{4}\\right) + 4 \\times \\left(\\frac{a}{2}\\right) = 4 \\times 6 \\implies (2a + 3) + 2a = 24\\)" },
        { explanation: "Combine the variable terms on the left side.", workingOut: "\\(4a + 3 = 24\\)" },
        { explanation: "Subtract \\(3\\) from both sides to isolate \\(4a\\).", workingOut: "\\(4a = 24 - 3 \\implies 4a = 21\\)" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(a\\).", workingOut: "\\(a = \\frac{21}{4}\\)" }
      ]
    },
    'y9-5d-q7g': {
      question: "Solve the equation for \\(a\\): \\(\\frac{3a - 4}{6} = \\frac{a - 3}{3}\\)",
      ...shuffleOptions(["\\(-2\\)", "\\(2\\)", "\\(-1\\)", "\\(-4\\)"], "\\(-2\\)"),
      solutionSteps: [
        { explanation: "Multiply both sides by \\(6\\) (the Lowest Common Multiple) to clear the denominators.", workingOut: "\\(3a - 4 = 2(a - 3)\\)" },
        { explanation: "Expand the bracket on the right side.", workingOut: "\\(3a - 4 = 2a - 6\\)" },
        { explanation: "Subtract \\(2a\\) from both sides to isolate the variable on the left.", workingOut: "\\(3a - 2a - 4 = -6 \\implies a - 4 = -6\\)" },
        { explanation: "Add \\(4\\) to both sides to solve for \\(a\\).", workingOut: "\\(a = -6 + 4 \\implies a = -2\\)" }
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
  console.log('Successfully completed detailed step expansion and MCQ conversion for fourth set of 15 questions in y9-5d!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
