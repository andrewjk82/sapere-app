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
    'y9-4a-4e': {
      question: "Factorise fully: \\(6m^2 + 9m\\)",
      ...shuffleOptions(["\\(3(2m^2 + 3m)\\)", "\\(3m(2m + 3)\\)", "\\(3m(2m + 9)\\)", "\\(m(6m + 9)\\)"], "\\(3m(2m + 3)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(6m^2\\) and \\(9m\\), which is \\(3m\\), and factor it out.", workingOut: "\\(3m(2m + 3)\\)" }
      ]
    },
    'y9-4a-4f': {
      question: "Factorise fully: \\(10y^2 + 15xy\\)",
      ...shuffleOptions(["\\(5y(2y + 3x)\\)", "\\(5(2y^2 + 3xy)\\)", "\\(5y(2y + 15x)\\)", "\\(y(10y + 15x)\\)"], "\\(5y(2y + 3x)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(10y^2\\) and \\(15xy\\), which is \\(5y\\), and factor it out.", workingOut: "\\(5y(2y + 3x)\\)" }
      ]
    },
    'y9-4a-5a': {
      question: "Factorise fully: \\(4c - 8c^2\\)",
      ...shuffleOptions(["\\(4(c - 2c^2)\\)", "\\(4c(1 - 8c)\\)", "\\(4c(1 - 2c)\\)", "\\(2c(2 - 4c)\\)"], "\\(4c(1 - 2c)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(4c\\) and \\(-8c^2\\), which is \\(4c\\), and factor it out.", workingOut: "\\(4c(1 - 2c)\\)" }
      ]
    },
    'y9-4a-5b': {
      question: "Factorise fully: \\(6y^2 - 9xy\\)",
      ...shuffleOptions(["\\(3y(2y - 3x)\\)", "\\(3(2y^2 - 3xy)\\)", "\\(3y(2y - 9x)\\)", "\\(y(6y - 9x)\\)"], "\\(3y(2y - 3x)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(6y^2\\) and \\(-9xy\\), which is \\(3y\\), and factor it out.", workingOut: "\\(3y(2y - 3x)\\)" }
      ]
    },
    'y9-4a-5c': {
      question: "Factorise fully: \\(12pq - 16p^2q\\)",
      ...shuffleOptions(["\\(4p(3q - 4pq)\\)", "\\(4pq(3 - 16p)\\)", "\\(4pq(3 - 4p)\\)", "\\(2pq(6 - 8p)\\)"], "\\(4pq(3 - 4p)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(12pq\\) and \\(-16p^2q\\), which is \\(4pq\\), and factor it out.", workingOut: "\\(4pq(3 - 4p)\\)" }
      ]
    },
    'y9-4a-5d': {
      question: "Factorise fully: \\(24z - 12z^2\\)",
      ...shuffleOptions(["\\(12(2z - z^2)\\)", "\\(12z(2 - z)\\)", "\\(12z(2 - 12z)\\)", "\\(6z(4 - 2z)\\)"], "\\(12z(2 - z)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(24z\\) and \\(-12z^2\\), which is \\(12z\\), and factor it out.", workingOut: "\\(12z(2 - z)\\)" }
      ]
    },
    'y9-4a-5e': {
      question: "Factorise fully: \\(5b - 10bc^2\\)",
      ...shuffleOptions(["\\(5b(1 - 2c^2)\\)", "\\(5(b - 2bc^2)\\)", "\\(5b(1 - 10c^2)\\)", "\\(b(5 - 10c^2)\\)"], "\\(5b(1 - 2c^2)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(5b\\) and \\(-10bc^2\\), which is \\(5b\\), and factor it out.", workingOut: "\\(5b(1 - 2c^2)\\)" }
      ]
    },
    'y9-4a-5f': {
      question: "Factorise fully: \\(8uv - 6u^2\\)",
      ...shuffleOptions(["\\(2(4uv - 3u^2)\\)", "\\(2u(4v - 3u)\\)", "\\(2u(4v - 6u)\\)", "\\(u(8v - 6u)\\)"], "\\(2u(4v - 3u)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(8uv\\) and \\(-6u^2\\), which is \\(2u\\), and factor it out.", workingOut: "\\(2u(4v - 3u)\\)" }
      ]
    },
    'y9-4a-5g': {
      question: "Factorise fully: \\(18ab^2 - 27a^2b\\)",
      ...shuffleOptions(["\\(9ab(2b - 3a)\\)", "\\(9(2ab^2 - 3a^2b)\\)", "\\(9ab(2b - 27a)\\)", "\\(3ab(6b - 9a)\\)"], "\\(9ab(2b - 3a)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(18ab^2\\) and \\(-27a^2b\\), which is \\(9ab\\), and factor it out.", workingOut: "\\(9ab(2b - 3a)\\)" }
      ]
    },
    'y9-4a-5h': {
      question: "Factorise fully: \\(8xy^2 - 28yx^2\\)",
      ...shuffleOptions(["\\(4(2xy^2 - 7x^2y)\\)", "\\(4xy(2y - 28x)\\)", "\\(4xy(2y - 7x)\\)", "\\(2xy(4y - 14x)\\)"], "\\(4xy(2y - 7x)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(8xy^2\\) and \\(-28yx^2\\), which is \\(4xy\\), and factor it out.", workingOut: "\\(4xy(2y - 7x)\\)" }
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
  console.log('Successfully converted next 10 questions in y9-4a to MCQs!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
