const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y7-23a-q2d');
  
  const options = [
    { text: '\\(-20pq\\)', imageUrl: '' },
    { text: '\\(9pq\\)', imageUrl: '' },
    { text: '\\(21pq\\)', imageUrl: '' },
    { text: '\\(20pq\\)', imageUrl: '' }
  ];

  const solutionSteps = [
    {
      explanation: 'The word "product" means to multiply the terms together.',
      workingOut: '\\( 5p \\times 4q \\)',
      graphData: null
    },
    {
      explanation: 'Multiply the coefficients (numbers) together and write the variables next to each other.',
      workingOut: '\\( (5 \\times 4) \\times (p \\times q) \\)',
      graphData: null
    },
    {
      explanation: 'Simplify to get the final algebraic expression.',
      workingOut: '\\( 20pq \\)',
      graphData: null
    }
  ];

  await docRef.update({
    options: options,
    answer: "3", // index 3 is 20pq
    solutionSteps: solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Fixed y7-23a-q2d');
  
  // also update parent
  const parentId = 'y7-23a-q2';
  const pSnap = await db.collection('questions').doc(parentId).get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
      const cSnap = await db.collection('questions').doc(sq.id).get();
      return cSnap.exists ? { ...sq, options: cSnap.data().options, answer: cSnap.data().answer, solutionSteps: cSnap.data().solutionSteps } : sq;
    }));
    await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    console.log(`Updated parent ${parentId}`);
  }

  process.exit(0);
}

run().catch(console.error);
