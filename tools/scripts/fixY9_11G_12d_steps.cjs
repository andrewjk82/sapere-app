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
      explanation: 'State the condition for finding a $y$-intercept.',
      workingOut: '\\text{The } y\\text{-intercept occurs where } x = 0.',
      graphData: null
    },
    {
      explanation: 'Substitute $x = 0$ into the equation of the perpendicular bisector from part c).',
      workingOut: 'y = -\\frac{1}{2}(0) + \\frac{21}{2}',
      graphData: null
    },
    {
      explanation: 'Evaluate the expression to find the $y$-coordinate.',
      workingOut: 'y = 0 + \\frac{21}{2} = \\frac{21}{2}',
      graphData: null
    },
    {
      explanation: 'Convert the improper fraction to a decimal as required by the options.',
      workingOut: 'y = 10.5',
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
  console.log("Updated q12d solution steps successfully.");
  process.exit(0);
}

run().catch(console.error);
