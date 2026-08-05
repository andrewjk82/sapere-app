const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // --- Update y8-15a-q3 ---
  const stepsQ3 = [
    {
      explanation: 'First, find the area of the rectangular orchard in square meters by multiplying its length and width.',
      workingOut: [
        '\\(\\text{Area} = \\text{length} \\times \\text{width}\\)',
        '\\(\\text{Area} = 720 \\times 350\\)',
        '\\(\\text{Area} = 252\\,000\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Next, convert the area from square meters to hectares. The question tells us that \\(1\\text{ hectare} = 10\\,000\\text{ m}^2\\), so we divide our result by \\(10\\,000\\).',
      workingOut: [
        '\\(\\text{Area in hectares} = \\frac{252\\,000}{10\\,000}\\)',
        '\\(\\text{Area in hectares} = 25.2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  await db.collection('questions').doc('y8-15a-q3').update({
    solutionSteps: stepsQ3,
    updatedAt: FieldValue.serverTimestamp()
  });

  // --- Update y8-15a-q4 ---
  const stepsQ4 = [
    {
      explanation: 'First, write down the formula for the area of a triangle.',
      workingOut: '\\(\\text{Area} = \\frac{\\text{base} \\times \\text{height}}{2}\\)',
      graphData: null
    },
    {
      explanation: 'Substitute the given area (10) into the formula and solve for the product of the base and height (\\(b \\times h\\)). Multiply both sides by 2.',
      workingOut: [
        '\\(\\frac{b \\times h}{2} = 10\\)',
        '\\(b \\times h = 20\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Finally, find all pairs of whole numbers that multiply together to make 20. Since either number can be the base or the height, we also include the reverses.',
      workingOut: '\\(\\text{Pairs: } (1, 20), (2, 10), (4, 5) \\text{ and their reverses}\\)',
      graphData: null
    }
  ];

  // Shuffle options for q4 so the answer is not A
  const optsQ4 = [
    {"text":"\\((1, 10), (2, 5) and their reverses\\)","imageUrl":""},
    {"text":"\\((1, 20), (2, 10), (4, 5) and their reverses\\)","imageUrl":""}, // Correct -> B
    {"text":"\\((1, 40), (2, 20), (4, 10), (5, 8) and their reverses\\)","imageUrl":""},
    {"text":"\\((2, 10), (4, 5) and their reverses\\)","imageUrl":""}
  ];

  await db.collection('questions').doc('y8-15a-q4').update({
    options: optsQ4,
    answer: '1',
    solutionSteps: stepsQ4,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated steps for q3 and q4, shuffled q4 options");
  process.exit(0);
}

run().catch(console.error);
