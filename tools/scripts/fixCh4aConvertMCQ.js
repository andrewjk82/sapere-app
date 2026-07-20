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
    'y9-4a-3a': {
      question: "Factorise fully: \\(8y + 32\\)",
      ...shuffleOptions(["\\(8(y + 32)\\)", "\\(8(y + 4)\\)", "\\(4(2y + 8)\\)", "\\(8y(1 + 4)\\)"], "\\(8(y + 4)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(8y\\) and \\(32\\), which is \\(8\\), and factor it out.", workingOut: "8(y + 4)" }
      ]
    },
    'y9-4a-3b': {
      question: "Factorise fully: \\(7b + 21\\)",
      ...shuffleOptions(["\\(7(b + 21)\\)", "\\(b(7 + 21)\\)", "\\(7(b + 3)\\)", "\\(7b(1 + 3)\\)"], "\\(7(b + 3)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(7b\\) and \\(21\\), which is \\(7\\), and factor it out.", workingOut: "7(b + 3)" }
      ]
    },
    'y9-4a-3c': {
      question: "Factorise fully: \\(pq + 6p\\)",
      ...shuffleOptions(["\\(p(q + 6)\\)", "\\(p(q + 6p)\\)", "\\(q(p + 6)\\)", "\\(6(pq + p)\\)"], "\\(p(q + 6)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(pq\\) and \\(6p\\), which is \\(p\\), and factor it out.", workingOut: "p(q + 6)" }
      ]
    },
    'y9-4a-3d': {
      question: "Factorise fully: \\(m^2 + m\\)",
      ...shuffleOptions(["\\(m(m + 0)\\)", "\\(m(m + 1)\\)", "\\(m(m^2 + 1)\\)", "\\(m^2(1 + 1)\\)"], "\\(m(m + 1)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(m^2\\) and \\(m\\), which is \\(m\\), and factor it out.", workingOut: "m(m + 1)" }
      ]
    },
    'y9-4a-3e': {
      question: "Factorise fully: \\(v^2 + uv\\)",
      ...shuffleOptions(["\\(v(1 + u)\\)", "\\(u(v + 1)\\)", "\\(v(v + u)\\)", "\\(v(v + uv)\\)"], "\\(v(v + u)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(v^2\\) and \\(uv\\), which is \\(v\\), and factor it out.", workingOut: "v(v + u)" }
      ]
    },
    'y9-4a-3f': {
      question: "Factorise fully: \\(4y + 36\\)",
      ...shuffleOptions(["\\(4(y + 36)\\)", "\\(4(y + 9)\\)", "\\(2(2y + 18)\\)", "\\(4y(1 + 9)\\)"], "\\(4(y + 9)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(4y\\) and \\(36\\), which is \\(4\\), and factor it out.", workingOut: "4(y + 9)" }
      ]
    },
    'y9-4a-3g': {
      question: "Factorise fully: \\(5z + 30\\)",
      ...shuffleOptions(["\\(5(z + 6)\\)", "\\(5(z + 30)\\)", "\\(5z(1 + 6)\\)", "\\(2.5(2z + 12)\\)"], "\\(5(z + 6)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(5z\\) and \\(30\\), which is \\(5\\), and factor it out.", workingOut: "5(z + 6)" }
      ]
    },
    'y9-4a-3h': {
      question: "Factorise fully: \\(8m - 72\\)",
      ...shuffleOptions(["\\(8(m - 72)\\)", "\\(4(2m - 18)\\)", "\\(8(m - 9)\\)", "\\(8m(1 - 9)\\)"], "\\(8(m - 9)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(8m\\) and \\(-72\\), which is \\(8\\), and factor it out.", workingOut: "8(m - 9)" }
      ]
    },
    'y9-4a-3i': {
      question: "Factorise fully: \\(10c + 40\\)",
      ...shuffleOptions(["\\(10(c + 40)\\)", "\\(10(c + 4)\\)", "\\(5(2c + 8)\\)", "\\(10c(1 + 4)\\)"], "\\(10(c + 4)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(10c\\) and \\(40\\), which is \\(10\\), and factor it out.", workingOut: "10(c + 4)" }
      ]
    },
    'y9-4a-3j': {
      question: "Factorise fully: \\(p^2 + 8p\\)",
      ...shuffleOptions(["\\(p(p + 8p)\\)", "\\(8(p + p)\\)", "\\(p^2(1 + 8)\\)", "\\(p(p + 8)\\)"], "\\(p(p + 8)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(p^2\\) and \\(8p\\), which is \\(p\\), and factor it out.", workingOut: "p(p + 8)" }
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
  console.log('Successfully converted 10 questions in y9-4a starting from Q27 to MCQs!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
