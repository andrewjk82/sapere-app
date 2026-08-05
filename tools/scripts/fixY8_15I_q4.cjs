const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [
    {
      id: 'y8-15i-q4a',
      opts: [
        { text: '\\(50\\)', imageUrl: '' },
        { text: '\\(500\\)', imageUrl: '' }, // Correct -> B
        { text: '\\(5000\\)', imageUrl: '' },
        { text: '\\(0.5\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: [
        { explanation: 'Recall the conversion factor for length.', workingOut: '\\(1\\text{ cm} = 10\\text{ mm}\\)' },
        { explanation: 'Square the conversion factor for area.', workingOut: '\\(1\\text{ cm}^2 = 10^2 = 100\\text{ mm}^2\\)' },
        { explanation: 'Multiply the given value by 100 to convert from \\(\\text{cm}^2\\) to \\(\\text{mm}^2\\).', workingOut: '\\(5 \\times 100 = 500\\text{ mm}^2\\)' }
      ]
    },
    {
      id: 'y8-15i-q4b',
      opts: [
        { text: '\\(12000\\)', imageUrl: '' },
        { text: '\\(1200\\)', imageUrl: '' },
        { text: '\\(120000\\)', imageUrl: '' }, // Correct -> C
        { text: '\\(120\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: [
        { explanation: 'Recall the conversion factor for length.', workingOut: '\\(1\\text{ m} = 100\\text{ cm}\\)' },
        { explanation: 'Square the conversion factor for area.', workingOut: '\\(1\\text{ m}^2 = 100^2 = 10000\\text{ cm}^2\\)' },
        { explanation: 'Multiply the given value by 10,000 to convert from \\(\\text{m}^2\\) to \\(\\text{cm}^2\\).', workingOut: '\\(12 \\times 10000 = 120000\\text{ cm}^2\\)' }
      ]
    },
    {
      id: 'y8-15i-q4c',
      opts: [
        { text: '\\(4\\)', imageUrl: '' },
        { text: '\\(400\\)', imageUrl: '' },
        { text: '\\(40000\\)', imageUrl: '' },
        { text: '\\(40\\)', imageUrl: '' } // Correct -> D
      ],
      answer: '3',
      steps: [
        { explanation: 'Recall the conversion factor for area.', workingOut: '\\(1\\text{ cm}^2 = 100\\text{ mm}^2\\)' },
        { explanation: 'To convert from a smaller unit (\\(\\text{mm}^2\\)) to a larger unit (\\(\\text{cm}^2\\)), we divide by the conversion factor.', workingOut: 'Divide by 100' },
        { explanation: 'Perform the division.', workingOut: '\\(4000 \\div 100 = 40\\text{ cm}^2\\)' }
      ]
    },
    {
      id: 'y8-15i-q4d',
      opts: [
        { text: '\\(7200\\)', imageUrl: '' },
        { text: '\\(72000\\)', imageUrl: '' }, // Correct -> B
        { text: '\\(720\\)', imageUrl: '' },
        { text: '\\(720000\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: [
        { explanation: 'Recall the conversion factor for hectares.', workingOut: '\\(1\\text{ hectare (ha)} = 10000\\text{ m}^2\\)' },
        { explanation: 'To convert from hectares to square metres, multiply by 10,000.', workingOut: '\\(7.2 \\times 10000 = 72000\\text{ m}^2\\)' }
      ]
    },
    {
      id: 'y8-15i-q4e',
      opts: [
        { text: '\\(50\\)', imageUrl: '' },
        { text: '\\(5\\)', imageUrl: '' },
        { text: '\\(0.5\\)', imageUrl: '' }, // Correct -> C
        { text: '\\(0.05\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: [
        { explanation: 'Recall the conversion factor for length.', workingOut: '\\(1\\text{ cm} = 10\\text{ mm}\\)' },
        { explanation: 'Cube the conversion factor for volume.', workingOut: '\\(1\\text{ cm}^3 = 10^3 = 1000\\text{ mm}^3\\)' },
        { explanation: 'To convert from a smaller unit (\\(\\text{mm}^3\\)) to a larger unit (\\(\\text{cm}^3\\)), divide by the conversion factor.', workingOut: 'Divide by 1000' },
        { explanation: 'Perform the division.', workingOut: '\\(500 \\div 1000 = 0.5\\text{ cm}^3\\)' }
      ]
    }
  ];

  for (const u of updates) {
    await db.collection('questions').doc(u.id).update({
      type: 'multiple_choice',
      options: u.opts,
      answer: u.answer,
      solutionSteps: u.steps.map(s => ({ explanation: s.explanation, workingOut: s.workingOut, graphData: null })),
      requiresManualGrading: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  // Update parent subQuestions array
  const pRef = db.collection('questions').doc('y8-15i-q4');
  const pSnap = await pRef.get();
  if (pSnap.exists) {
    const pData = pSnap.data();
    if (pData.subQuestions) {
      const newSubQs = pData.subQuestions.map(sq => {
        const u = updates.find(x => x.id === sq.id);
        if (u) {
          return {
            ...sq,
            type: 'multiple_choice',
            options: u.opts,
            answer: u.answer,
            solutionSteps: u.steps.map(s => ({ explanation: s.explanation, workingOut: s.workingOut, graphData: null })),
            requiresManualGrading: FieldValue.delete()
          };
        }
        return sq;
      });
      await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated q4a, q4b, q4c, q4d, q4e");
  process.exit(0);
}

run().catch(console.error);
