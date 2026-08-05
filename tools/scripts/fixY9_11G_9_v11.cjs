const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  // Get the graphData from the corrupted solutionSteps
  const doc = await db.collection('questions').doc('y9-11g-q9g').get();
  let solutionGraphData = null;
  if (doc.exists) {
    const data = doc.data();
    if (data.solutionSteps && data.solutionSteps['2'] && data.solutionSteps['2'].graphData) {
      solutionGraphData = data.solutionSteps['2'].graphData;
    }
  }

  const steps = [
    {
      explanation: 'In the quadrilateral \\(MNPQ\\), check if the opposite pair of sides \\(MN\\) and \\(PQ\\) are parallel.',
      workingOut: 'm_{MN} = m_{PQ} = -0.5 \\implies MN \\parallel PQ',
      graphData: null
    },
    {
      explanation: 'Check if the other pair of opposite sides \\(QM\\) and \\(PN\\) are parallel.',
      workingOut: 'm_{QM} = m_{PN} = -4.5 \\implies QM \\parallel PN',
      graphData: null
    },
    {
      explanation: 'Since both pairs of opposite sides are parallel respectively, it satisfies the definition of a parallelogram.',
      workingOut: '\\text{MNPQ is a parallelogram}',
      graphData: solutionGraphData
    },
    {
      explanation: 'Therefore, the correct answer is Parallelogram.',
      workingOut: '\\text{Parallelogram}',
      graphData: null
    }
  ];

  await db.collection('questions').doc('y9-11g-q9g').update({
    solutionSteps: steps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent subQuestions array
  const subIds = ['y9-11g-q9a', 'y9-11g-q9b', 'y9-11g-q9c', 'y9-11g-q9d', 'y9-11g-q9e', 'y9-11g-q9f', 'y9-11g-q9g'];
  const subQuestions = [];
  for (const id of subIds) {
    const d = await db.collection('questions').doc(id).get();
    if (d.exists) {
      subQuestions.push({
        id: id,
        ...d.data(),
      });
    }
  }
  
  await db.collection('questions').doc('y9-11g-q9').update({
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Restored solutionSteps array for q9g.");
  process.exit(0);
}

run().catch(console.error);
