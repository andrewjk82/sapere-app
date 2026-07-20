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
    'y9-4a-5i': {
      question: "Factorise fully: \\(15mn^2 - 35m^2n\\)",
      ...shuffleOptions(["\\(5(3mn^2 - 7m^2n)\\)", "\\(5mn(3n - 35m)\\)", "\\(5mn(3n - 7m)\\)", "\\(5m^2n^2(3 - 7)\\)"], "\\(5mn(3n - 7m)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) of \\(15mn^2\\) and \\(-35m^2n\\), which is \\(5mn\\), and factor it out.", workingOut: "\\(5mn(3n - 7m)\\)" }
      ]
    },
    'y9-4a-6a': {
      question: "Factorise fully (take out a negative common factor if the first term is negative): \\(-12c^2 + 6c\\)",
      ...shuffleOptions(["\\(-6c(2c + 1)\\)", "\\(-6c(2c - 1)\\)", "\\(6c(-2c - 1)\\)", "\\(-6(2c^2 - c)\\)"], "\\(-6c(2c - 1)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) with a negative sign, which is \\(-6c\\), and factor it out.", workingOut: "\\(-6c(2c - 1)\\)" }
      ]
    },
    'y9-4a-6b': {
      question: "Factorise fully (take out a negative common factor if the first term is negative): \\(-20p^2q - 10pq\\)",
      ...shuffleOptions(["\\(-10pq(2p + 1)\\)", "\\(-10pq(2p - 1)\\)", "\\(10pq(-2p + 1)\\)", "\\(-10(2p^2q + pq)\\)"], "\\(-10pq(2p + 1)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) with a negative sign, which is \\(-10pq\\), and factor it out.", workingOut: "\\(-10pq(2p + 1)\\)" }
      ]
    },
    'y9-4a-6c': {
      question: "Factorise fully (take out a negative common factor if the first term is negative): \\(-u^2v - 4uv\\)",
      ...shuffleOptions(["\\(-uv(u - 4)\\)", "\\(uv(-u + 4)\\)", "\\(-uv(u + 4)\\)", "\\(-u(uv + 4v)\\)"], "\\(-uv(u + 4)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) with a negative sign, which is \\(-uv\\), and factor it out.", workingOut: "\\(-uv(u + 4)\\)" }
      ]
    },
    'y9-4a-6d': {
      question: "Factorise fully (take out a negative common factor if the first term is negative): \\(-6ab + 24a^2\\)",
      ...shuffleOptions(["\\(-6a(b - 4a)\\)", "\\(-6a(b + 4a)\\)", "\\(6a(-b - 4a)\\)", "\\(-6(ab - 4a^2)\\)"], "\\(-6a(b - 4a)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) with a negative sign, which is \\(-6a\\), and factor it out.", workingOut: "\\(-6a(b - 4a)\\)" }
      ]
    },
    'y9-4a-6e': {
      question: "Factorise fully (take out a negative common factor if the first term is negative): \\(-8y^2z + 40y\\)",
      ...shuffleOptions(["\\(-8y(yz + 5)\\)", "\\(-8y(yz - 5)\\)", "\\(8y(-yz - 5)\\)", "\\(-8(y^2z - 5y)\\)"], "\\(-8y(yz - 5)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) with a negative sign, which is \\(-8y\\), and factor it out.", workingOut: "\\(-8y(yz - 5)\\)" }
      ]
    },
    'y9-4a-6f': {
      question: "Factorise fully (take out a negative common factor if the first term is negative): \\(24x^2 - 6xy\\)",
      ...shuffleOptions(["\\(6x(4x - y)\\)", "\\(-6x(-4x + y)\\)", "\\(6x(4x + y)\\)", "\\(6(4x^2 - xy)\\)"], "\\(6x(4x - y)\\)"),
      solutionSteps: [
        { explanation: "The first term is positive, so find the positive Highest Common Factor (HCF), which is \\(6x\\), and factor it out.", workingOut: "\\(6x(4x - y)\\)" }
      ]
    },
    'y9-4a-6g': {
      question: "Factorise fully (take out a negative common factor if the first term is negative): \\(-10m^2n^2 - 4mn\\)",
      ...shuffleOptions(["\\(-2mn(5mn - 2)\\)", "\\(-2mn(5mn + 2)\\)", "\\(2mn(-5mn + 2)\\)", "\\(-2(5m^2n^2 + 2mn)\\)"], "\\(-2mn(5mn + 2)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) with a negative sign, which is \\(-2mn\\), and factor it out.", workingOut: "\\(-2mn(5mn + 2)\\)" }
      ]
    },
    'y9-4a-6h': {
      question: "Factorise fully (take out a negative common factor if the first term is negative): \\(16pq^2 - 4p^2q\\)",
      ...shuffleOptions(["\\(4pq(4q - p)\\)", "\\(-4pq(-4q + p)\\)", "\\(4pq(4q + p)\\)", "\\(4(4pq^2 - p^2q)\\)"], "\\(4pq(4q - p)\\)"),
      solutionSteps: [
        { explanation: "The first term is positive, so find the positive Highest Common Factor (HCF), which is \\(4pq\\), and factor it out.", workingOut: "\\(4pq(4q - p)\\)" }
      ]
    },
    'y9-4a-6i': {
      question: "Factorise fully (take out a negative common factor if the first term is negative): \\(-36u^2v^2 - 12uv^2\\)",
      ...shuffleOptions(["\\(-12uv^2(3u - 1)\\)", "\\(-12uv^2(3u + 1)\\)", "\\(12uv^2(-3u + 1)\\)", "\\(-12uv(3uv + v)\\)"], "\\(-12uv^2(3u + 1)\\)"),
      solutionSteps: [
        { explanation: "Find the Highest Common Factor (HCF) with a negative sign, which is \\(-12uv^2\\), and factor it out.", workingOut: "\\(-12uv^2(3u + 1)\\)" }
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
