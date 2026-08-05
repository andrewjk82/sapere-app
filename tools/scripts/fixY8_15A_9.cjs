const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const newSteps = [
    {
      explanation: 'First, find the area of the square room. The room is "6 m square", which means it is a square with sides of 6 m.',
      workingOut: [
        '\\(\\text{Area of room} = 6 \\times 6\\)',
        '\\(\\text{Area of room} = 36\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Next, find the area of the carpet that is placed in the room. The carpet is a rectangle measuring 5 m by 4 m.',
      workingOut: [
        '\\(\\text{Area of carpet} = 5 \\times 4\\)',
        '\\(\\text{Area of carpet} = 20\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Finally, subtract the carpet area from the room area to find the uncovered floor area.',
      workingOut: [
        '\\(\\text{Uncovered area} = \\text{Area of room} - \\text{Area of carpet}\\)',
        '\\(\\text{Uncovered area} = 36 - 20\\)',
        '\\(\\text{Uncovered area} = 16\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  await db.collection('questions').doc('y8-15a-q9').update({
    solutionSteps: newSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated solutionSteps for y8-15a-q9");
  process.exit(0);
}

run().catch(console.error);
