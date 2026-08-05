const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const newSteps = [
    {
      explanation: 'Find the coordinates of the midpoint of $AB$.',
      workingOut: 'C = \\left(\\frac{3 + 7}{2}, \\frac{4 + 12}{2}\\right) = (5, 8)',
      graphData: null
    },
    {
      explanation: 'Find the gradient of $AB$, then determine the perpendicular gradient.',
      workingOut: 'm_{AB} = \\frac{12 - 4}{7 - 3} = 2 \\implies m_{\\perp} = -\\frac{1}{2}',
      graphData: null
    },
    {
      explanation: 'Use the point-gradient formula to find the equation of the perpendicular bisector.',
      workingOut: 'y - 8 = -\\frac{1}{2}(x - 5) \\implies y = -\\frac{1}{2}x + \\frac{21}{2}',
      graphData: null
    },
    {
      explanation: 'Identify the $y$-intercept ($c$) from the equation $y = mx + c$ and convert it to a decimal.',
      workingOut: 'c = \\frac{21}{2} = 10.5',
      graphData: null
    }
  ];

  // Update standalone doc
  batch.update(db.collection('questions').doc('y9-11g-q12d'), {
    solutionSteps: newSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update inside parent doc
  const parentRef = db.collection('questions').doc('y9-11g-q12');
  const parentDoc = await parentRef.get();
  let parentData = parentDoc.data();
  
  let newSubQs = parentData.subQuestions;
  newSubQs[3].solutionSteps = newSteps;
  
  newSubQs.forEach(sq => delete sq.updatedAt);

  batch.update(parentRef, {
    subQuestions: newSubQs,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q12d solution steps to be self-contained successfully.");
  process.exit(0);
}

run().catch(console.error);
