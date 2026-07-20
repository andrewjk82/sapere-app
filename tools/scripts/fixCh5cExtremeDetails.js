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
    'y9-5c-q1a': {
      question: "Solve the equation: \\(3(x + 2) = 15\\)",
      ...shuffleOptions(["\\(3\\)", "\\(7\\)", "\\(5\\)", "\\(1\\)"], "\\(3\\)"),
      solutionSteps: [
        { explanation: "To solve an equation with brackets, first eliminate the factor outside the brackets. Since \\(x + 2\\) is multiplied by \\(3\\), perform the inverse operation by dividing both sides of the equation by \\(3\\).", workingOut: "\\(\\frac{3(x + 2)}{3} = \\frac{15}{3} \\implies x + 2 = 5\\)" },
        { explanation: "Now, isolate the variable \\(x\\) by performing the inverse operation on the constant term. Since \\(2\\) is added to \\(x\\), subtract \\(2\\) from both sides of the equation.", workingOut: "\\(x = 5 - 2 \\implies x = 3\\)" }
      ]
    },
    'y9-5c-q1b': {
      question: "Solve the equation: \\(2(x - 4) = 10\\)",
      ...shuffleOptions(["\\(9\\)", "\\(1\\)", "\\(5\\)", "\\(14\\)"], "\\(9\\)"),
      solutionSteps: [
        { explanation: "To solve an equation with brackets, first eliminate the factor outside the brackets. Since \\(x - 4\\) is multiplied by \\(2\\), perform the inverse operation by dividing both sides of the equation by \\(2\\).", workingOut: "\\(\\frac{2(x - 4)}{2} = \\frac{10}{2} \\implies x - 4 = 5\\)" },
        { explanation: "Now, isolate the variable \\(x\\) by performing the inverse operation on the constant term. Since \\(4\\) is subtracted from \\(x\\), add \\(4\\) to both sides of the equation.", workingOut: "\\(x = 5 + 4 \\implies x = 9\\)" }
      ]
    },
    'y9-5c-q1c': {
      question: "Solve the equation: \\(5(x - 1) = 20\\)",
      ...shuffleOptions(["\\(5\\)", "\\(3\\)", "\\(4\\)", "\\(21\\)"], "\\(5\\)"),
      solutionSteps: [
        { explanation: "To solve an equation with brackets, first eliminate the factor outside the brackets. Since \\(x - 1\\) is multiplied by \\(5\\), perform the inverse operation by dividing both sides of the equation by \\(5\\).", workingOut: "\\(\\frac{5(x - 1)}{5} = \\frac{20}{5} \\implies x - 1 = 4\\)" },
        { explanation: "Now, isolate the variable \\(x\\) by performing the inverse operation on the constant term. Since \\(1\\) is subtracted from \\(x\\), add \\(1\\) to both sides of the equation.", workingOut: "\\(x = 4 + 1 \\implies x = 5\\)" }
      ]
    },
    'y9-5c-q1d': {
      question: "Solve the equation: \\(4(x + 2) = 16\\)",
      ...shuffleOptions(["\\(2\\)", "\\(6\\)", "\\(4\\)", "\\(14\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "To solve an equation with brackets, first eliminate the factor outside the brackets. Since \\(x + 2\\) is multiplied by \\(4\\), perform the inverse operation by dividing both sides of the equation by \\(4\\).", workingOut: "\\(\\frac{4(x + 2)}{4} = \\frac{16}{4} \\implies x + 2 = 4\\)" },
        { explanation: "Now, isolate the variable \\(x\\) by performing the inverse operation on the constant term. Since \\(2\\) is added to \\(x\\), subtract \\(2\\) from both sides of the equation.", workingOut: "\\(x = 4 - 2 \\implies x = 2\\)" }
      ]
    },
    'y9-5c-q1e': {
      question: "Solve the equation: \\(2(x - 5) = 12\\)",
      ...shuffleOptions(["\\(11\\)", "\\(1\\)", "\\(6\\)", "\\(17\\)"], "\\(11\\)"),
      solutionSteps: [
        { explanation: "To solve an equation with brackets, first eliminate the factor outside the brackets. Since \\(x - 5\\) is multiplied by \\(2\\), perform the inverse operation by dividing both sides of the equation by \\(2\\).", workingOut: "\\(\\frac{2(x - 5)}{2} = \\frac{12}{2} \\implies x - 5 = 6\\)" },
        { explanation: "Now, isolate the variable \\(x\\) by performing the inverse operation on the constant term. Since \\(5\\) is subtracted from \\(x\\), add \\(5\\) to both sides of the equation.", workingOut: "\\(x = 6 + 5 \\implies x = 11\\)" }
      ]
    },
    'y9-5c-q1f': {
      question: "Solve the equation: \\(3(x + 3) = 18\\)",
      ...shuffleOptions(["\\(3\\)", "\\(9\\)", "\\(6\\)", "\\(15\\)"], "\\(3\\)"),
      solutionSteps: [
        { explanation: "To solve an equation with brackets, first eliminate the factor outside the brackets. Since \\(x + 3\\) is multiplied by \\(3\\), perform the inverse operation by dividing both sides of the equation by \\(3\\).", workingOut: "\\(\\frac{3(x + 3)}{3} = \\frac{18}{3} \\implies x + 3 = 6\\)" },
        { explanation: "Now, isolate the variable \\(x\\) by performing the inverse operation on the constant term. Since \\(3\\) is added to \\(x\\), subtract \\(3\\) from both sides of the equation.", workingOut: "\\(x = 6 - 3 \\implies x = 3\\)" }
      ]
    },
    'y9-5c-q1g': {
      question: "Solve the equation: \\(3(4 - x) = 6\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(6\\)", "\\(10\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "First, eliminate the factor outside the brackets by dividing both sides of the equation by \\(3\\).", workingOut: "\\(\\frac{3(4 - x)}{3} = \\frac{6}{3} \\implies 4 - x = 2\\)" },
        { explanation: "Next, isolate the variable term \\(-x\\) by subtracting \\(4\\) from both sides.", workingOut: "\\(-x = 2 - 4 \\implies -x = -2\\)" },
        { explanation: "Finally, solve for \\(x\\) by dividing or multiplying both sides by \\(-1\\) to eliminate the negative sign.", workingOut: "\\(x = \\frac{-2}{-1} \\implies x = 2\\)" }
      ]
    },
    'y9-5c-q1h': {
      question: "Solve the equation: \\(2(6 - x) = 8\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(4\\)", "\\(10\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "First, eliminate the factor outside the brackets by dividing both sides of the equation by \\(2\\).", workingOut: "\\(\\frac{2(6 - x)}{2} = \\frac{8}{2} \\implies 6 - x = 4\\)" },
        { explanation: "Next, isolate the variable term \\(-x\\) by subtracting \\(6\\) from both sides.", workingOut: "\\(-x = 4 - 6 \\implies -x = -2\\)" },
        { explanation: "Finally, solve for \\(x\\) by dividing or multiplying both sides by \\(-1\\) to eliminate the negative sign.", workingOut: "\\(x = \\frac{-2}{-1} \\implies x = 2\\)" }
      ]
    },
    'y9-5c-q1i': {
      question: "Solve the equation: \\(5(7 - x) = 25\\)",
      ...shuffleOptions(["\\(2\\)", "\\(-2\\)", "\\(5\\)", "\\(12\\)"], "\\(2\\)"),
      solutionSteps: [
        { explanation: "First, eliminate the factor outside the brackets by dividing both sides of the equation by \\(5\\).", workingOut: "\\(\\frac{5(7 - x)}{5} = \\frac{25}{5} \\implies 7 - x = 5\\)" },
        { explanation: "Next, isolate the variable term \\(-x\\) by subtracting \\(7\\) from both sides.", workingOut: "\\(-x = 5 - 7 \\implies -x = -2\\)" },
        { explanation: "Finally, solve for \\(x\\) by dividing or multiplying both sides by \\(-1\\) to eliminate the negative sign.", workingOut: "\\(x = \\frac{-2}{-1} \\implies x = 2\\)" }
      ]
    },
    'y9-5c-q1j': {
      question: "Solve the equation: \\(-3(2x - 4) = 18\\)",
      ...shuffleOptions(["\\(-1\\)", "\\(1\\)", "\\(-3\\)", "\\(-5\\)"], "\\(-1\\)"),
      solutionSteps: [
        { explanation: "First, eliminate the factor outside the brackets by dividing both sides of the equation by \\(-3\\). Note that dividing a positive number by a negative number yields a negative result.", workingOut: "\\(\\frac{-3(2x - 4)}{-3} = \\frac{18}{-3} \\implies 2x - 4 = -6\\)" },
        { explanation: "Next, isolate the variable term \\(2x\\) by performing the inverse operation on the constant term. Since \\(4\\) is subtracted, add \\(4\\) to both sides of the equation.", workingOut: "\\(2x = -6 + 4 \\implies 2x = -2\\)" },
        { explanation: "Finally, isolate the variable \\(x\\) by dividing both sides by the coefficient \\(2\\).", workingOut: "\\(x = \\frac{-2}{2} \\implies x = -1\\)" }
      ]
    }
  };

  for (const [id, data] of Object.entries(updates)) {
    console.log(`Making steps even more detailed for ${id}...`);
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
  console.log('Successfully completed extreme detail step expansion for first 10 questions in y9-5c!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
