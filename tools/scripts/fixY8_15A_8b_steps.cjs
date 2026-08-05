const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const newSteps = [
    {
      explanation: 'First, find \\(x\\) using Pythagoras\' theorem. The diagonal of the rectangle is the hypotenuse (17), and the height is one leg (8). The width \\(x\\) is the other leg.',
      workingOut: [
        '\\(\\text{hypotenuse}^2 = \\text{base}^2 + \\text{height}^2\\)',
        '\\(17^2 = x^2 + 8^2\\)',
        '\\(289 = x^2 + 64\\)',
        '\\(x^2 = 289 - 64 = 225\\)',
        '\\(x = \\sqrt{225} = 15\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Now that we know \\(x = 15\\), we have both dimensions of the rectangle: width = 15 and height = 8. Use the area formula for a rectangle.',
      workingOut: [
        '\\(\\text{Area} = \\text{width} \\times \\text{height}\\)',
        '\\(\\text{Area} = 15 \\times 8\\)',
        '\\(\\text{Area} = 120\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  await db.collection('questions').doc('y8-15a-q8b').update({
    solutionSteps: newSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q8');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q8b') {
          return { ...sq, solutionSteps: newSteps };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Added Pythagoras x-finding steps to y8-15a-q8b");
  process.exit(0);
}

run().catch(console.error);
