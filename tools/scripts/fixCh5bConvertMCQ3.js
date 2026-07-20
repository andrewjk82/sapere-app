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
    'y9-5b-q2c': {
      ...shuffleOptions(["\\(3.5\\)", "\\(6\\)", "\\(5\\)", "\\(20\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Add \\(3\\) to both sides to isolate the variable term: \\(4c = 20\\).", workingOut: "4c = 20" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(c\\).", workingOut: "c = 5" }
      ]
    },
    'y9-5b-q2d': {
      ...shuffleOptions(["\\(3.33\\)", "\\(6\\)", "\\(5\\)", "\\(30\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Add \\(5\\) to both sides to isolate the variable term: \\(6d = 30\\).", workingOut: "6d = 30" },
        { explanation: "Divide both sides by \\(6\\) to solve for \\(d\\).", workingOut: "d = 5" }
      ]
    },
    'y9-5b-q2e': {
      ...shuffleOptions(["\\(4.5\\)", "\\(6\\)", "\\(5\\)", "\\(20\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "Add \\(1\\) to both sides to isolate the variable term: \\(4e = 20\\).", workingOut: "4e = 20" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(e\\).", workingOut: "e = 5" }
      ]
    },
    'y9-5b-q2f': {
      ...shuffleOptions(["\\(3.2\\)", "\\(5\\)", "\\(4\\)", "\\(20\\)"], "\\(4\\)"),
      solutionSteps: [
        { explanation: "Add \\(2\\) to both sides to isolate the variable term: \\(5f = 20\\).", workingOut: "5f = 20" },
        { explanation: "Divide both sides by \\(5\\) to solve for \\(f\\).", workingOut: "f = 4" }
      ]
    },
    'y9-5b-q2g': {
      ...shuffleOptions(["\\(4\\)", "\\(11\\)", "\\(-4\\)", "\\(-11\\)"], "\\(-4\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(15\\) from both sides to isolate the variable term: \\(2g = -8\\).", workingOut: "2g = -8" },
        { explanation: "Divide both sides by \\(2\\) to solve for \\(g\\).", workingOut: "g = -4" }
      ]
    },
    'y9-5b-q2h': {
      ...shuffleOptions(["\\(3\\)", "\\(-8.5\\)", "\\(-3\\)", "\\(8.5\\)"], "\\(-3\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(23\\) from both sides to isolate the variable term: \\(4h = -12\\).", workingOut: "4h = -12" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(h\\).", workingOut: "h = -3" }
      ]
    },
    'y9-5b-q2i': {
      ...shuffleOptions(["\\(4\\)", "\\(-3.6\\)", "\\(-4\\)", "\\(3.6\\)"], "\\(-4\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(19\\) from both sides to isolate the variable term: \\(5a = -20\\).", workingOut: "5a = -20" },
        { explanation: "Divide both sides by \\(5\\) to solve for \\(a\\).", workingOut: "a = -4" }
      ]
    },
    'y9-5b-q2j': {
      ...shuffleOptions(["\\(11\\)", "\\(-5.67\\)", "\\(-11\\)", "\\(5.67\\)"], "\\(-11\\)"),
      solutionSteps: [
        { explanation: "Subtract \\(25\\) from both sides to isolate the variable term: \\(3a = -33\\).", workingOut: "3a = -33" },
        { explanation: "Divide both sides by \\(3\\) to solve for \\(a\\).", workingOut: "a = -11" }
      ]
    },
    'y9-5b-q2k': {
      ...shuffleOptions(["\\(4\\)", "\\(-9.5\\)", "\\(-4\\)", "\\(9.5\\)"], "\\(-4\\)"),
      solutionSteps: [
        { explanation: "Add \\(11\\) to both sides to isolate the variable term: \\(4a = -16\\).", workingOut: "4a = -16" },
        { explanation: "Divide both sides by \\(4\\) to solve for \\(a\\).", workingOut: "a = -4" }
      ]
    },
    'y9-5b-q2l': {
      ...shuffleOptions(["\\(7\\)", "\\(-11.33\\)", "\\(-7\\)", "\\(11.33\\)"], "\\(-7\\)"),
      solutionSteps: [
        { explanation: "Add \\(13\\) to both sides to isolate the variable term: \\(6b = -42\\).", workingOut: "6b = -42" },
        { explanation: "Divide both sides by \\(6\\) to solve for \\(b\\).", workingOut: "b = -7" }
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
  console.log('Successfully converted third batch of 10 questions in y9-5b to MCQs!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
