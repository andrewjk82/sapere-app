const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const newSteps = [
    {
      explanation: "Draw an auxiliary parallel line.",
      workingOut: "Draw a vertical line upwards through the \\(90^\\circ\\) vertex. This line is parallel to the two vertical lines on the left and right.",
      graphData: null
    },
    {
      explanation: "Find the angle on the right side of the vertex.",
      workingOut: "Using alternate interior angles (Z-angles) with the right vertical line, the angle between the right slanted line and our new auxiliary vertical line is \\(40^\\circ\\).",
      graphData: null
    },
    {
      explanation: "Find the angle on the left side of the vertex.",
      workingOut: "The two slanted lines meet at a right angle (\\(90^\\circ\\)). Therefore, the remaining angle between the left slanted line and our auxiliary vertical line is \\(90^\\circ - 40^\\circ = 50^\\circ\\).",
      graphData: null
    },
    {
      explanation: "Find \\(\\theta\\).",
      workingOut: "The auxiliary vertical line and the left vertical line are parallel. Using consecutive interior angles (co-interior angles), we know that \\(\\theta + 50^\\circ = 180^\\circ\\). Therefore, \\(\\theta = 180^\\circ - 50^\\circ = 130^\\circ\\).",
      graphData: null
    }
  ];

  const updateSubQ = async (id) => {
    const sSnap = await db.collection('questions').doc(id).get();
    if (sSnap.exists) {
      await sSnap.ref.update({
        answer: 3, // index for 130 degrees
        solutionSteps: newSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Updated subquestion doc', id);
    }
  };

  await updateSubQ('y9-7a-q7c');

  const pSnap = await db.collection('questions').doc('y9-7a-q7').get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (sq.id === 'y9-7a-q7c') {
        return {
          ...sq,
          answer: 3,
          solutionSteps: newSteps
        };
      }
      return sq;
    });
    
    await pSnap.ref.update({
      subQuestions: newSubQs,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log('Updated parent subQuestions for y9-7a-q7');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
