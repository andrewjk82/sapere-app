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
    'y9-5b-q1k': {
      question: "Solve the equation: \\(6p = -18\\)",
      ...shuffleOptions(["\\(3\\)", "\\(-3\\)", "\\(-12\\)", "\\(-24\\)"], "\\(-3\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(6\\) to isolate \\(p\\).", workingOut: "p = -18 / 6 ⇒ -3" }
      ]
    },
    'y9-5b-q1l': {
      question: "Solve the equation: \\(8q = -32\\)",
      ...shuffleOptions(["\\(4\\)", "\\(-4\\)", "\\(-24\\)", "\\(-40\\)"], "\\(-4\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(8\\) to isolate \\(q\\).", workingOut: "q = -32 / 8 ⇒ -4" }
      ]
    },
    'y9-5b-q1m': {
      question: "Solve the equation: \\(b + 6 = 25\\frac{1}{2}\\)",
      ...shuffleOptions(["\\(19.5\\)", "\\(31.5\\)", "\\(18.5\\)", "\\(19\\)"], "\\(19.5\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(6\\) from both sides: \\(25.5 - 6 = 19.5\\).", workingOut: "b = 25.5 - 6 ⇒ 19.5" }
      ]
    },
    'y9-5b-q1n': {
      question: "Solve the equation: \\(a + 4 = 12\\frac{1}{4}\\)",
      ...shuffleOptions(["\\(16.25\\)", "\\(7.25\\)", "\\(8.25\\)", "\\(8\\)"], "\\(8.25\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(4\\) from both sides: \\(12.25 - 4 = 8.25\\).", workingOut: "a = 12.25 - 4 ⇒ 8.25" }
      ]
    },
    'y9-5b-q1o': {
      question: "Solve the equation: \\(4a = \\frac{2}{5}\\)",
      ...shuffleOptions(["\\(\\frac{1}{10}\\)", "\\(\\frac{8}{5}\\)", "\\(\\frac{1}{5}\\)", "\\(8\\)"], "\\(\\frac{1}{10}\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(4\\) (which is equivalent to multiplying the denominator by \\(4\\)): \\(a = \\frac{2}{20} = \\frac{1}{10}\\).", workingOut: "a = 2 / 20 ⇒ 1/10" }
      ]
    },
    'y9-5b-q1p': {
      question: "Solve the equation: \\(x - 5 = 6\\frac{1}{3}\\)",
      ...shuffleOptions(["\\(1\\frac{1}{3}\\)", "\\(11\\)", "\\(11\\frac{1}{3}\\)", "\\(12\\frac{1}{3}\\)"], "\\(11\\frac{1}{3}\\)"),
      solutionSteps: [
        { explanation: "Add \\(5\\) to both sides: \\(6\\frac{1}{3} + 5 = 11\\frac{1}{3}\\).", workingOut: "x = 6 1/3 + 5 ⇒ 11 1/3" }
      ]
    },
    'y9-5b-q1q': {
      question: "Solve the equation: \\(-3y = \\frac{6}{7}\\)",
      ...shuffleOptions(["\\(\\frac{2}{7}\\)", "\\(-\\frac{2}{7}\\)", "\\(-\\frac{18}{7}\\)", "\\(-\\frac{1}{7}\\)"], "\\(-\\frac{2}{7}\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(-3\\): \\(y = \\frac{6}{7 \\times (-3)} = \\frac{6}{-21} = -\\frac{2}{7}\\).", workingOut: "y = 6 / -21 ⇒ -2/7" }
      ]
    },
    'y9-5b-q1r': {
      question: "Solve the equation: \\(3x = -\\frac{4}{5}\\)",
      ...shuffleOptions(["\\(-\\frac{4}{15}\\)", "\\(-\\frac{12}{5}\\)", "\\(-\\frac{4}{5}\\)", "\\(-\\frac{4}{3}\\)"], "\\(-\\frac{4}{15}\\)"),
      solutionSteps: [
        { explanation: "Divide both sides by \\(3\\): \\(x = -\\frac{4}{5 \\times 3} = -\\frac{4}{15}\\).", workingOut: "x = -4 / 15 ⇒ -4/15" }
      ]
    },
    'y9-5b-q2a': {
      question: "Solve the equation: \\(3a + 4 = 10\\)",
      ...shuffleOptions(["\\(4.67\\)", "\\(2\\)", "\\(6\\)", "\\(1.5\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(4\\) from both sides to isolate the variable term: \\(3a = 6\\).", workingOut: "3a = 6" },
        { explanation: "Divide both sides by \\(3\\) to solve for \\(a\\).", workingOut: "a = 2" }
      ]
    },
    'y9-5b-q2b': {
      question: "Solve the equation: \\(2b + 5 = 17\\)",
      ...shuffleOptions(["\\(11\\)", "\\(5.5\\)", "\\(6\\)", "\\(8\\)"], "\\(6\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(5\\) from both sides to isolate the variable term: \\(2b = 12\\).", workingOut: "2b = 12" },
        { explanation: "Divide both sides by \\(2\\) to solve for \\(b\\).", workingOut: "b = 6" }
      ]
    }
  };

  for (const [id, data] of Object.entries(updates)) {
    console.log(`Converting ${id} to multiple_choice with shuffled options and clean LaTeX...`);
    const docRef = questionsCol.doc(id);
    batch.update(docRef, {
      type: 'multiple_choice',
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
  console.log('Successfully converted 10 more questions in y9-5b to MCQs!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
