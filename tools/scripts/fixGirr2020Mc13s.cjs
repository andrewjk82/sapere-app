const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('girr2020-mc13s');
  const doc = await docRef.get();
  if (!doc.exists) {
    console.error("girr2020-mc13s not found in Firestore!");
    process.exit(1);
  }

  const solutionSteps = [
      {
        explanation: 'Count the total letters in PAPER: P, A, P, E, R. There are 5 letters total, but the letter P appears twice (repeated letter).',
        workingOut: 'n = 5, \\; n_P = 2'
      },
      {
        explanation: 'When we have repeated letters, the formula for permutations is: Number of arrangements = $\\frac{n!}{n_1! \\cdot n_2! \\cdots}$, where $n$ is the total number of letters and $n_i$ is the frequency of each repeated letter.',
        workingOut: '\\text{Arrangements} = \\frac{n!}{n_1! \\cdot n_2! \\cdots}'
      },
      {
        explanation: 'Apply the formula with 5 letters and 2 Ps: Total arrangements = $\\frac{5!}{2!}$.',
        workingOut: '\\text{Total} = \\frac{5!}{2!} = 60'
      },
      {
        explanation: 'For arrangements starting with P: fix one P at the beginning. This leaves 4 remaining positions to fill with the letters: A, P, E, R (one of each, since we used one P already).',
        workingOut: 'n_{\\text{remaining}} = 4'
      },
      {
        explanation: 'Since the remaining 4 letters are all distinct, the number of ways to arrange them is simply $4!$.',
        workingOut: '\\text{Arrangements starting with P} = 4! = 24'
      },
      {
        explanation: 'The probability of randomly selecting an arrangement that starts with P is the ratio of favorable outcomes to total outcomes.',
        workingOut: 'P(\\text{starts with P}) = \\frac{24}{60}'
      },
      {
        explanation: 'Simplify the fraction by dividing both numerator and denominator by their GCD (12).',
        workingOut: '\\frac{24}{60} = \\frac{2}{5}'
      }
    ];

  await docRef.update({
    solutionSteps: solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Successfully updated girr2020-mc13s LaTeX in Firestore");
  process.exit(0);
}

run().catch(console.error);
