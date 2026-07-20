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
    'y9-5b-q1a': {
      question: "Solve the equation: \\(a + 3 = 8\\)",
      ...shuffleOptions(["\\(5\\)", "\\(11\\)", "\\(-5\\)", "\\(24\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Perform the inverse operation by subtracting \\(3\\) from both sides to isolate \\(a\\).", workingOut: "a = 8 - 3 ⇒ 5" }
      ]
    },
    'y9-5b-q1b': {
      question: "Solve the equation: \\(b + 5 = 11\\)",
      ...shuffleOptions(["\\(16\\)", "\\(6\\)", "\\(-6\\)", "\\(55\\)"], "\\(6\\)"),
      solutionSteps: [
        { explanation: "Perform the inverse operation by subtracting \\(5\\) from both sides to isolate \\(b\\).", workingOut: "b = 11 - 5 ⇒ 6" }
      ]
    },
    'y9-5b-q1c': {
      question: "Solve the equation: \\(c - 4 = 12\\)",
      ...shuffleOptions(["\\(8\\)", "\\(-8\\)", "\\(16\\)", "\\(48\\)"], "\\(16\\)"),
      solutionSteps: [
        { explanation: "Perform the inverse operation by adding \\(4\\) to both sides to isolate \\(c\\).", workingOut: "c = 12 + 4 ⇒ 16" }
      ]
    },
    'y9-5b-q1d': {
      question: "Solve the equation: \\(d - 12 = 7\\)",
      ...shuffleOptions(["\\(5\\)", "\\(-5\\)", "\\(19\\)", "\\(84\\)"], "\\(19\\)"),
      solutionSteps: [
        { explanation: "Perform the inverse operation by adding \\(12\\) to both sides to isolate \\(d\\).", workingOut: "d = 7 + 12 ⇒ 19" }
      ]
    },
    'y9-5b-q1e': {
      question: "Solve the equation: \\(3a = 15\\)",
      ...shuffleOptions(["\\(12\\)", "\\(5\\)", "\\(18\\)", "\\(45\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Perform the inverse operation by dividing both sides by \\(3\\) to isolate \\(a\\).", workingOut: "a = 15 / 3 ⇒ 5" }
      ]
    },
    'y9-5b-q1f': {
      question: "Solve the equation: \\(4b = 16\\)",
      ...shuffleOptions(["\\(12\\)", "\\(20\\)", "\\(4\\)", "\\(64\\)"], "\\(4\\)"),
      solutionSteps: [
        { explanation: "Perform the inverse operation by dividing both sides by \\(4\\) to isolate \\(b\\).", workingOut: "b = 16 / 4 ⇒ 4" }
      ]
    },
    'y9-5b-q1g': {
      question: "Solve the equation: \\(6c = 48\\)",
      ...shuffleOptions(["\\(42\\)", "\\(8\\)", "\\(54\\)", "\\(288\\)"], "\\(8\\)"),
      solutionSteps: [
        { explanation: "Perform the inverse operation by dividing both sides by \\(6\\) to isolate \\(c\\).", workingOut: "c = 48 / 6 ⇒ 8" }
      ]
    },
    'y9-5b-q1h': {
      question: "Solve the equation: \\(7d = 35\\)",
      ...shuffleOptions(["\\(28\\)", "\\(42\\)", "\\(5\\)", "\\(245\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Perform the inverse operation by dividing both sides by \\(7\\) to isolate \\(d\\).", workingOut: "d = 35 / 7 ⇒ 5" }
      ]
    },
    'y9-5b-q1i': {
      question: "Solve the equation: \\(-4m = 12\\)",
      ...shuffleOptions(["\\(3\\)", "\\(-3\\)", "\\(-8\\)", "\\(16\\)"], "\\(-3\\)"),
      solutionSteps: [
        { explanation: "Perform the inverse operation by dividing both sides by \\(-4\\) to isolate \\(m\\).", workingOut: "m = 12 / -4 ⇒ -3" }
      ]
    },
    'y9-5b-q1j': {
      question: "Solve the equation: \\(-3n = 15\\)",
      ...shuffleOptions(["\\(5\\)", "\\(-5\\)", "\\(-12\\)", "\\(18\\)"], "\\(-5\\)"),
      solutionSteps: [
        { explanation: "Perform the inverse operation by dividing both sides by \\(-3\\) to isolate \\(n\\).", workingOut: "n = 15 / -3 ⇒ -5" }
      ]
    }
  };

  for (const [id, data] of Object.entries(updates)) {
    console.log(`Converting ${id} to multiple_choice with shuffled options and clean LaTeX...`);
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
  console.log('Successfully converted 10 questions in y9-5b to MCQs!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
