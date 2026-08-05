const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const newSteps = [
    {
      explanation: 'First, find the total wall area. There are 4 walls, each measuring 8 m wide and 4 m tall.',
      workingOut: [
        '\\(\\text{Area of one wall} = 8 \\times 4 = 32\\text{ m}^2\\)',
        '\\(\\text{Total wall area} = 4 \\times 32 = 128\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Next, find the total area of the 2 doorways that do NOT need to be painted. Each doorway is 1 m wide and 2 m tall.',
      workingOut: [
        '\\(\\text{Area of one doorway} = 1 \\times 2 = 2\\text{ m}^2\\)',
        '\\(\\text{Total doorway area} = 2 \\times 2 = 4\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Subtract the doorway area from the total wall area to find the paintable area.',
      workingOut: [
        '\\(\\text{Paintable area} = 128 - 4 = 124\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Finally, multiply the paintable area by the painting rate ($6 per m²) to find the total cost.',
      workingOut: [
        '\\(\\text{Cost} = 124 \\times 6\\)',
        '\\(\\text{Cost} = \\$744\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is 744 -> index 2 (C). Already at C, keep it.
  await db.collection('questions').doc('y8-15a-q6').update({
    solutionSteps: newSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated solutionSteps for y8-15a-q6");
  process.exit(0);
}

run().catch(console.error);
