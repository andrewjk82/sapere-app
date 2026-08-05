const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Fetch the current document to get the graphData
  const docRef = db.collection('questions').doc('y8-15a-q2a');
  const docSnap = await docRef.get();
  const data = docSnap.data();
  
  // Extract graphData from the first step
  const originalGraphData = data.solutionSteps && data.solutionSteps.length > 0 
      ? data.solutionSteps[0].graphData 
      : null;

  // The correct answer is 32. Shuffle to A (index 0).
  const newOpts = [
    { text: '\\(32\\text{ m}^2\\)', imageUrl: '' }, // Correct
    { text: '\\(40\\text{ m}^2\\)', imageUrl: '' },
    { text: '\\(36\\text{ m}^2\\)', imageUrl: '' },
    { text: '\\(24\\text{ m}^2\\)', imageUrl: '' }
  ];
  
  const newSteps = [
    {
      explanation: 'First, find the area of the large outer rectangle. The length is 8 m and the width is 5 m.',
      workingOut: [
        '\\(\\text{Area of large rectangle} = \\text{length} \\times \\text{width}\\)',
        '\\(\\text{Area} = 8 \\times 5 = 40\\text{ m}^2\\)'
      ].join('\n'),
      graphData: originalGraphData // Keep the original diagram here
    },
    {
      explanation: 'Next, find the area of the two small inner squares that are cut out. Each square has a side length of 2 m (indicated by the tick marks).',
      workingOut: [
        '\\(\\text{Area of one square} = 2 \\times 2 = 4\\text{ m}^2\\)',
        '\\(\\text{Area of two squares} = 4 + 4 = 8\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Finally, subtract the area of the two small squares from the area of the large rectangle to find the shaded area.',
      workingOut: [
        '\\(\\text{Shaded Area} = \\text{Total Area} - \\text{Cut-out Area}\\)',
        '\\(\\text{Shaded Area} = 40 - 8 = 32\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  await docRef.update({
    type: 'multiple_choice',
    options: newOpts,
    answer: '0',
    solutionSteps: newSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Also check if there's a parent doc y8-15a-q2
  const parentRef = db.collection('questions').doc('y8-15a-q2');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q2a') {
          return {
            ...sq,
            type: 'multiple_choice',
            options: newOpts,
            answer: '0',
            solutionSteps: newSteps
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated y8-15a-q2a");
  process.exit(0);
}

run().catch(console.error);
