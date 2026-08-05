const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const steps = [
    {
      explanation: 'Write the two numbers in a column, aligning the decimal points. Pad with zeros so both numbers have the same number of decimal places.',
      workingOut: '\\(\\begin{array}{r} 14.004500 \\\\ +\\phantom{0}2.386884 \\\\ \\hline \\end{array}\\)',
      graphData: null
    },
    {
      explanation: 'Add the digits column by column from right to left, carrying where needed.',
      workingOut: [
        '\\(0 + 4 = 4\\)',
        '\\(0 + 8 = 8\\)',
        '\\(5 + 8 = 13\\) → write 3, carry 1',
        '\\(4 + 6 + 1 = 11\\) → write 1, carry 1',
        '\\(0 + 8 + 1 = 9\\) → write 9',
        '\\(0 + 3 = 3\\)',
        '\\(4 + 2 = 6\\)',
        '\\(1 + 0 = 1\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Write the final answer.',
      workingOut: '\\(14.004500 + 2.386884 = 16.391384\\)',
      graphData: null
    }
  ];

  await db.collection('questions').doc('I56htMc3hA7aC5vnuUid').update({
    solutionSteps: steps,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated I56htMc3hA7aC5vnuUid - clean LaTeX steps");
  process.exit(0);
}

run().catch(console.error);
