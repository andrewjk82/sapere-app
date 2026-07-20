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
    // ==========================================
    // Group 1: 2-step with fractions (q2m to q2r)
    // ==========================================
    'y9-5b-q2m': {
      question: "Solve the equation: \\(2b + 3 = 8\\frac{1}{2}\\)",
      ...shuffleOptions(["\\(2.75\\)", "\\(5.5\\)", "\\(3.25\\)", "\\(1.75\\)"], "\\(2.75\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(3\\) from both sides of the equation to isolate the variable term \\(2b\\). Note that \\(8\\frac{1}{2} = 8.5\\).", workingOut: "\\(2b = 8.5 - 3 \\implies 2b = 5.5\\)" },
        { explanation: "Divide both sides by \\(2\\) to solve for \\(b\\).", workingOut: "\\(b = \\frac{5.5}{2} \\implies b = 2.75\\)" }
      ]
    },
    'y9-5b-q2n': {
      question: "Solve the equation: \\(2x + 9 = 5\\frac{1}{4}\\)",
      ...shuffleOptions(["\\(-1.875\\)", "\\(1.875\\)", "\\(-2.125\\)", "\\(-3.75\\)"], "\\(-1.875\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(9\\) from both sides of the equation to isolate \\(2x\\). Note that \\(5\\frac{1}{4} = 5.25\\).", workingOut: "\\(2x = 5.25 - 9 \\implies 2x = -3.75\\)" },
        { explanation: "Divide both sides by \\(2\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{-3.75}{2} \\implies x = -1.875\\)" }
      ]
    },
    'y9-5b-q2o': {
      question: "Solve the equation: \\(2x - 11 = 4\\frac{2}{3}\\)",
      ...shuffleOptions(["\\(7\\frac{5}{6}\\)", "\\(7\\frac{1}{3}\\)", "\\(15\\frac{2}{3}\\)", "\\(8\\frac{5}{6}\\)"], "\\(7\\frac{5}{6}\\)"),
      solutionSteps: [
        { explanation: "Add \\(11\\) to both sides of the equation to isolate \\(2x\\). Convert \\(4\\frac{2}{3}\\) to an improper fraction: \\(\\frac{14}{3}\\).", workingOut: "\\(2x = \\frac{14}{3} + 11 \\implies 2x = \\frac{47}{3}\\)" },
        { explanation: "Divide both sides by \\(2\\) (multiply the denominator by \\(2\\)) to solve for \\(x\\), then convert to a mixed fraction.", workingOut: "\\(x = \\frac{47}{6} \\implies x = 7\\frac{5}{6}\\)" }
      ]
    },
    'y9-5b-q2p': {
      question: "Solve the equation: \\(3a + 5 = -7\\frac{1}{2}\\)",
      ...shuffleOptions(["\\(-\\frac{25}{6}\\)", "\\(-\\frac{25}{2}\\)", "\\(-5\\)", "\\(-\\frac{15}{6}\\)"], "\\(-\\frac{25}{6}\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(5\\) from both sides of the equation to isolate \\(3a\\). Convert \\(-7\\frac{1}{2}\\) to an improper fraction: \\(-\\frac{15}{2}\\).", workingOut: "\\(3a = -\\frac{15}{2} - 5 \\implies 3a = -\\frac{25}{2}\\)" },
        { explanation: "Divide both sides by \\(3\\) (multiply the denominator by \\(3\\)) to solve for \\(a\\).", workingOut: "\\(a = -\\frac{25}{6}\\)" }
      ]
    },
    'y9-5b-q2q': {
      question: "Solve the equation: \\(5m - 8 = -11\\frac{3}{5}\\)",
      ...shuffleOptions(["\\(-\\frac{18}{25}\\)", "\\(-\\frac{18}{5}\\)", "\\(-2\\)", "\\(-\\frac{9}{25}\\)"], "\\(-\\frac{18}{25}\\)"),
      solutionSteps: [
        { explanation: "Add \\(8\\) to both sides of the equation to isolate \\(5m\\). Convert \\(-11\\frac{3}{5}\\) to \\(-\\frac{58}{5}\\).", workingOut: "\\(5m = -\\frac{58}{5} + 8 \\implies 5m = -\\frac{18}{5}\\)" },
        { explanation: "Divide both sides by \\(5\\) (multiply the denominator by \\(5\\)) to solve for \\(m\\).", workingOut: "\\(m = -\\frac{18}{25}\\)" }
      ]
    },
    'y9-5b-q2r': {
      question: "Solve the equation: \\(-3b + 5 = 11\\frac{1}{4}\\)",
      ...shuffleOptions(["\\(-\\frac{25}{12}\\)", "\\(\\frac{25}{12}\\)", "\\(-\\frac{25}{4}\\)", "\\(-\\frac{25}{3}\\)"], "\\(-\\frac{25}{12}\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(5\\) from both sides of the equation to isolate \\(-3b\\). Convert \\(11\\frac{1}{4}\\) to \\(\\frac{45}{4}\\).", workingOut: "\\(-3b = \\frac{45}{4} - 5 \\implies -3b = \\frac{25}{4}\\)" },
        { explanation: "Divide both sides by \\(-3\\) (multiply the denominator by \\(-3\\)) to solve for \\(b\\).", workingOut: "\\(b = -\\frac{25}{12}\\)" }
      ]
    },

    // ==========================================
    // Group 2: Subtracted Variable term (q3a to q3f)
    // ==========================================
    'y9-5b-q3a': {
      question: "Solve the equation: \\(3 - 2a = 9\\)",
      ...shuffleOptions(["\\(-3\\)", "\\(3\\)", "\\(-6\\)", "\\(6\\)"], "\\(-3\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(3\\) from both sides to isolate the variable term \\(-2a\\). Keep the negative sign with the term.", workingOut: "\\(-2a = 9 - 3 \\implies -2a = 6\\)" },
        { explanation: "Divide both sides by \\(-2\\) to solve for \\(a\\).", workingOut: "\\(a = \\frac{6}{-2} \\implies a = -3\\)" }
      ]
    },
    'y9-5b-q3b': {
      question: "Solve the equation: \\(4 - 3b = 19\\)",
      ...shuffleOptions(["\\(-5\\)", "\\(5\\)", "\\(-7.67\\)", "\\(7.67\\)"], "\\(-5\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(4\\) from both sides to isolate the variable term \\(-3b\\).", workingOut: "\\(-3b = 19 - 4 \\implies -3b = 15\\)" },
        { explanation: "Divide both sides by \\(-3\\) to solve for \\(b\\).", workingOut: "\\(b = \\frac{15}{-3} \\implies b = -5\\)" }
      ]
    },
    'y9-5b-q3c': {
      question: "Solve the equation: \\(6 - 3c = -12\\)",
      ...shuffleOptions(["\\(6\\)", "\\(-6\\)", "\\(2\\)", "\\(-2\\)"], "\\(6\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(6\\) from both sides to isolate the variable term \\(-3c\\).", workingOut: "\\(-3c = -12 - 6 \\implies -3c = -18\\)" },
        { explanation: "Divide both sides by \\(-3\\) to solve for \\(c\\). Note that dividing a negative by a negative yields a positive result.", workingOut: "\\(c = \\frac{-18}{-3} \\implies c = 6\\)" }
      ]
    },
    'y9-5b-q3d': {
      question: "Solve the equation: \\(2 - 4d = -22\\)",
      ...shuffleOptions(["\\(6\\)", "\\(-6\\)", "\\(5\\)", "\\(-5\\)"], "\\(6\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(2\\) from both sides to isolate the variable term \\(-4d\\).", workingOut: "\\(-4d = -22 - 2 \\implies -4d = -24\\)" },
        { explanation: "Divide both sides by \\(-4\\) to solve for \\(d\\).", workingOut: "\\(d = \\frac{-24}{-4} \\implies d = 6\\)" }
      ]
    },
    'y9-5b-q3e': {
      question: "Solve the equation: \\(-5 - 6e = 13\\)",
      ...shuffleOptions(["\\(-3\\)", "\\(3\\)", "\\(-4\\)", "\\(4\\)"], "\\(-3\\)"),
      solutionSteps: [
        { explanation: "Add \\(5\\) to both sides to isolate the variable term \\(-6e\\).", workingOut: "\\(-6e = 13 + 5 \\implies -6e = 18\\)" },
        { explanation: "Divide both sides by \\(-6\\) to solve for \\(e\\).", workingOut: "\\(e = \\frac{18}{-6} \\implies e = -3\\)" }
      ]
    },
    'y9-5b-q3f': {
      question: "Solve the equation: \\(-3 - 4f = 17\\)",
      ...shuffleOptions(["\\(-5\\)", "\\(5\\)", "\\(-3.5\\)", "\\(3.5\\)"], "\\(-5\\)"),
      solutionSteps: [
        { explanation: "Add \\(3\\) to both sides to isolate the variable term \\(-4f\\).", workingOut: "\\(-4f = 17 + 3 \\implies -4f = 20\\)" },
        { explanation: "Divide both sides by \\(-4\\) to solve for \\(f\\).", workingOut: "\\(f = \\frac{20}{-4} \\implies f = -5\\)" }
      ]
    },

    // ==========================================
    // Group 3: Variables on both sides (q4a to q4l)
    // ==========================================
    'y9-5b-q4a': {
      question: "Solve the equation: \\(6x + 7 = 4x + 3\\)",
      ...shuffleOptions(["\\(-2\\)", "\\(2\\)", "\\(-5\\)", "\\(5\\)"], "\\(-2\\)"),
      solutionSteps: [
        { explanation: "Subtract the smaller variable term (\\(4x\\)) from both sides to group the variable terms on the left.", workingOut: "\\(6x - 4x + 7 = 3 \\implies 2x + 7 = 3\\)" },
        { explanation: "Subtract \\(7\\) from both sides to isolate the variable term \\(2x\\).", workingOut: "\\(2x = 3 - 7 \\implies 2x = -4\\)" },
        { explanation: "Divide both sides by \\(2\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{-4}{2} \\implies x = -2\\)" }
      ]
    },
    'y9-5b-q4b': {
      question: "Solve the equation: \\(6x + 14 = 3x + 20\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(11.33\\)", "\\(6\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(3x\\) from both sides to group the variable terms on the left.", workingOut: "\\(6x - 3x + 14 = 20 \\implies 3x + 14 = 20\\)" },
        { explanation: "Subtract \\(14\\) from both sides to isolate the variable term \\(3x\\).", workingOut: "\\(3x = 20 - 14 \\implies 3x = 6\\)" },
        { explanation: "Divide both sides by \\(3\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{6}{3} \\implies x = 2\\)" }
      ]
    },
    'y9-5b-q4c': {
      question: "Solve the equation: \\(7x + 4 = 3x + 24\\)",
      ...shuffleOptions(["\\(5\\)", "\\(-5\\)", "\\(7\\)", "\\(2.8\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(3x\\) from both sides to group the variable terms on the left.", workingOut: "\\(7x - 3x + 4 = 24 \\implies 4x + 4 = 24\\)" },
        { explanation: "Subtract \\(4\\) from both sides to isolate the variable term \\(4x\\).", workingOut: "\\(4x = 24 - 4 \\implies 4x = 20\\)" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{20}{4} \\implies x = 5\\)" }
      ]
    },
    'y9-5b-q4d': {
      question: "Solve the equation: \\(8x - 5 = 5x + 7\\)",
      ...shuffleOptions(["\\(4\\)", "\\(-4\\)", "\\(0.67\\)", "\\(6\\)"], "\\(4\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(5x\\) from both sides to group the variable terms on the left.", workingOut: "\\(8x - 5x - 5 = 7 \\implies 3x - 5 = 7\\)" },
        { explanation: "Add \\(5\\) to both sides to isolate the variable term \\(3x\\).", workingOut: "\\(3x = 7 + 5 \\implies 3x = 12\\)" },
        { explanation: "Divide both sides by \\(3\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{12}{3} \\implies x = 4\\)" }
      ]
    },
    'y9-5b-q4e': {
      question: "Solve the equation: \\(6x - 7 = x - 2\\)",
      ...shuffleOptions(["\\(1\\)", "\\(-1\\)", "\\(1.8\\)", "\\(-1.8\\)"], "\\(1\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(x\\) from both sides to group the variable terms on the left.", workingOut: "\\(6x - x - 7 = -2 \\implies 5x - 7 = -2\\)" },
        { explanation: "Add \\(7\\) to both sides to isolate the variable term \\(5x\\).", workingOut: "\\(5x = -2 + 7 \\implies 5x = 5\\)" },
        { explanation: "Divide both sides by \\(5\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{5}{5} \\implies x = 1\\)" }
      ]
    },
    'y9-5b-q4f': {
      question: "Solve the equation: \\(5x + 8 = x - 4\\)",
      ...shuffleOptions(["\\(-3\\)", "\\(3\\)", "\\(-1\\)", "\\(1\\)"], "\\(-3\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(x\\) from both sides to group the variable terms on the left.", workingOut: "\\(5x - x + 8 = -4 \\implies 4x + 8 = -4\\)" },
        { explanation: "Subtract \\(8\\) from both sides to isolate the variable term \\(4x\\).", workingOut: "\\(4x = -4 - 8 \\implies 4x = -12\\)" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{-12}{4} \\implies x = -3\\)" }
      ]
    },
    'y9-5b-q4g': {
      question: "Solve the equation: \\(4x + 2 = 11 - x\\)",
      ...shuffleOptions(["\\(1.8\\)", "\\(-1.8\\)", "\\(3\\)", "\\(2.2\\)"], "\\(1.8\\)"),
      solutionSteps: [
        { explanation: "Add \\(x\\) to both sides to group all variable terms on the left.", workingOut: "\\(4x + x + 2 = 11 \\implies 5x + 2 = 11\\)" },
        { explanation: "Subtract \\(2\\) from both sides to isolate the variable term \\(5x\\).", workingOut: "\\(5x = 11 - 2 \\implies 5x = 9\\)" },
        { explanation: "Divide both sides by \\(5\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{9}{5} \\implies x = 1.8\\)" }
      ]
    },
    'y9-5b-q4h': {
      question: "Solve the equation: \\(5x - 4 = 17 - 2x\\)",
      ...shuffleOptions(["\\(3\\)", "\\(-3\\)", "\\(7\\)", "\\(2.14\\)"], "\\(3\\)"),
      solutionSteps: [
        { explanation: "Add \\(2x\\) to both sides to group all variable terms on the left.", workingOut: "\\(5x + 2x - 4 = 17 \\implies 7x - 4 = 17\\)" },
        { explanation: "Add \\(4\\) to both sides to isolate the variable term \\(7x\\).", workingOut: "\\(7x = 17 + 4 \\implies 7x = 21\\)" },
        { explanation: "Divide both sides by \\(7\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{21}{7} \\implies x = 3\\)" }
      ]
    },
    'y9-5b-q4i': {
      question: "Solve the equation: \\(3x - 5 = 7 - x\\)",
      ...shuffleOptions(["\\(3\\)", "\\(-3\\)", "\\(0.5\\)", "\\(1\\)"], "\\(3\\)"),
      solutionSteps: [
        { explanation: "Add \\(x\\) to both sides to group all variable terms on the left.", workingOut: "\\(3x + x - 5 = 7 \\implies 4x - 5 = 7\\)" },
        { explanation: "Add \\(5\\) to both sides to isolate the variable term \\(4x\\).", workingOut: "\\(4x = 7 + 5 \\implies 4x = 12\\)" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{12}{4} \\implies x = 3\\)" }
      ]
    },
    'y9-5b-q4j': {
      question: "Solve the equation: \\(9 - 2x = 3x - 6\\)",
      ...shuffleOptions(["\\(3\\)", "\\(-3\\)", "\\(0.6\\)", "\\(1\\)"], "\\(3\\)"),
      solutionSteps: [
        { explanation: "Add \\(2x\\) to both sides to group all variable terms on the right.", workingOut: "\\(9 = 3x + 2x - 6 \\implies 9 = 5x - 6\\)" },
        { explanation: "Add \\(6\\) to both sides to isolate the variable term \\(5x\\).", workingOut: "\\(9 + 6 = 5x \\implies 15 = 5x\\)" },
        { explanation: "Divide both sides by \\(5\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{15}{5} \\implies x = 3\\)" }
      ]
    },
    'y9-5b-q4k': {
      question: "Solve the equation: \\(4x - 2 = 7 - x\\)",
      ...shuffleOptions(["\\(1.8\\)", "\\(-1.8\\)", "\\(3\\)", "\\(2.25\\)"], "\\(1.8\\)"),
      solutionSteps: [
        { explanation: "Add \\(x\\) to both sides to group all variable terms on the left.", workingOut: "\\(4x + x - 2 = 7 \\implies 5x - 2 = 7\\)" },
        { explanation: "Add \\(2\\) to both sides to isolate the variable term \\(5x\\).", workingOut: "\\(5x = 7 + 2 \\implies 5x = 9\\)" },
        { explanation: "Divide both sides by \\(5\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{9}{5} \\implies x = 1.8\\)" }
      ]
    },
    'y9-5b-q4l': {
      question: "Solve the equation: \\(3x + 8 = 13 - 2x\\)",
      ...shuffleOptions(["\\(1\\)", "\\(-1\\)", "\\(5\\)", "\\(10\\)"], "\\(1\\)"),
      solutionSteps: [
        { explanation: "Add \\(2x\\) to both sides to group all variable terms on the left.", workingOut: "\\(3x + 2x + 8 = 13 \\implies 5x + 8 = 13\\)" },
        { explanation: "Subtract \\(8\\) from both sides to isolate the variable term \\(5x\\).", workingOut: "\\(5x = 13 - 8 \\implies 5x = 5\\)" },
        { explanation: "Divide both sides by \\(5\\) to solve for \\(x\\).", workingOut: "\\(x = \\frac{5}{5} \\implies x = 1\\)" }
      ]
    }
  };

  for (const [id, data] of Object.entries(updates)) {
    console.log(`Converting remaining ${id} to multiple_choice with shuffled options and highly detailed steps...`);
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
  console.log('Successfully completed detailed step expansion and MCQ conversion for remaining 24 questions in y9-5b!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
