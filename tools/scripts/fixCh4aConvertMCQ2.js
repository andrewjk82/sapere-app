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
    'y9-4a-3k': {
      question: "Factorise fully: \\(q^2 - 4q\\)",
      ...shuffleOptions(["\\(q(q - 4q)\\)", "\\(q(q - 4)\\)", "\\(4(q - q)\\)", "\\(q^2(1 - 4)\\)"], "\\(q(q - 4)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(q^2\\) and \\(-4q\\), which is \\(q\\), and factor it out.", workingOut: "q(q - 4)" }
      ]
    },
    'y9-4a-3l': {
      question: "Factorise fully: \\(15z + 20\\)",
      ...shuffleOptions(["\\(5(3z + 20)\\)", "\\(15(z + 20)\\)", "\\(5(3z + 4)\\)", "\\(5z(3 + 4)\\)"], "\\(5(3z + 4)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(15z\\) and \\(20\\), which is \\(5\\), and factor it out.", workingOut: "5(3z + 4)" }
      ]
    },
    'y9-4a-3m': {
      question: "Factorise fully: \\(30x - 45\\)",
      ...shuffleOptions(["\\(15(2x - 45)\\)", "\\(15(2x - 3)\\)", "\\(5(6x - 9)\\)", "\\(30(x - 1.5)\\)"], "\\(15(2x - 3)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(30x\\) and \\(-45\\), which is \\(15\\), and factor it out.", workingOut: "15(2x - 3)" }
      ]
    },
    'y9-4a-3n': {
      question: "Factorise fully: \\(-16b - 24\\)",
      ...shuffleOptions(["\\(-8(2b - 3)\\)", "\\(8(-2b + 3)\\)", "\\(-8(2b + 3)\\)", "\\(-4(4b + 6)\\)"], "\\(-8(2b + 3)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(-16b\\) and \\(-24\\), which is \\(-8\\), and factor it out.", workingOut: "-8(2b + 3)" }
      ]
    },
    'y9-4a-3o': {
      question: "Factorise fully: \\(-8x - 12\\)",
      ...shuffleOptions(["\\(-4(2x - 3)\\)", "\\(-4(2x + 3)\\)", "\\(4(-2x + 3)\\)", "\\(-2(4x + 6)\\)"], "\\(-4(2x + 3)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(-8x\\) and \\(-12\\), which is \\(-4\\), and factor it out.", workingOut: "-4(2x + 3)" }
      ]
    },
    'y9-4a-3p': {
      question: "Factorise fully: \\(-5 - 15p\\)",
      ...shuffleOptions(["\\(-5(1 + 3p)\\)", "\\(-5(1 - 3p)\\)", "\\(5(-1 + 3p)\\)", "\\(-5(5 + 15p)\\)"], "\\(-5(1 + 3p)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(-5\\) and \\(-15p\\), which is \\(-5\\), and factor it out.", workingOut: "-5(1 + 3p)" }
      ]
    },
    'y9-4a-4a': {
      question: "Factorise fully: \\(5pq + 20p\\)",
      ...shuffleOptions(["\\(5(pq + 4p)\\)", "\\(5p(q + 20)\\)", "\\(5p(q + 4)\\)", "\\(p(5q + 20)\\)"], "\\(5p(q + 4)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(5pq\\) and \\(20p\\), which is \\(5p\\), and factor it out.", workingOut: "5p(q + 4)" }
      ]
    },
    'y9-4a-4b': {
      question: "Factorise fully: \\(15b^2 + 10b\\)",
      ...shuffleOptions(["\\(5(3b^2 + 2b)\\)", "\\(5b(3b + 2)\\)", "\\(5b(3b + 10)\\)", "\\(b(15b + 10)\\)"], "\\(5b(3b + 2)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(15b^2\\) and \\(10b\\), which is \\(5b\\), and factor it out.", workingOut: "5b(3b + 2)" }
      ]
    },
    'y9-4a-4c': {
      question: "Factorise fully: \\(24x^2y + 12xy^2\\)",
      ...shuffleOptions(["\\(12xy(2x + y)\\)", "\\(12(2x^2y + xy^2)\\)", "\\(12xy(2x + y^2)\\)", "\\(6xy(4x + 2y)\\)"], "\\(12xy(2x + y)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(24x^2y\\) and \\(12xy^2\\), which is \\(12xy\\), and factor it out.", workingOut: "12xy(2x + y)" }
      ]
    },
    'y9-4a-4d': {
      question: "Factorise fully: \\(20u^2v^2 + 15uv^2\\)",
      ...shuffleOptions(["\\(5uv(4uv + 3v)\\)", "\\(5uv^2(4u + 3v)\\)", "\\(5uv^2(4u + 3)\\)", "\\(5u^2v^2(4 + 3)\\)"], "\\(5uv^2(4u + 3)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(20u^2v^2\\) and \\(15uv^2\\), which is \\(5uv^2\\), and factor it out.", workingOut: "5uv^2(4u + 3)" }
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
  console.log('Successfully converted 10 more questions in y9-4a to MCQs!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
