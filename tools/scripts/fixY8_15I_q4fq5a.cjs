const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [
    {
      id: 'y8-15i-q4f',
      opts: [
        { text: '\\(300\\)', imageUrl: '' },
        { text: '\\(30000\\)', imageUrl: '' },
        { text: '\\(300000\\)', imageUrl: '' },
        { text: '\\(3000000\\)', imageUrl: '' } // Correct -> D
      ],
      answer: '3',
      steps: [
        { explanation: 'Recall the conversion factor for length.', workingOut: '\\(1\\text{ m} = 100\\text{ cm}\\)' },
        { explanation: 'Cube the conversion factor for volume.', workingOut: '\\(1\\text{ m}^3 = 100^3 = 1000000\\text{ cm}^3\\)' },
        { explanation: 'To convert from a larger unit (\\(\\text{m}^3\\)) to a smaller unit (\\(\\text{cm}^3\\)), multiply by the conversion factor.', workingOut: '\\(3 \\times 1000000 = 3000000\\text{ cm}^3\\)' }
      ]
    },
    {
      id: 'y8-15i-q4g',
      opts: [
        { text: '\\(25\\)', imageUrl: '' },
        { text: '\\(2.5\\)', imageUrl: '' }, // Correct -> B
        { text: '\\(250\\)', imageUrl: '' },
        { text: '\\(0.25\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: [
        { explanation: 'Recall the conversion factor for capacity.', workingOut: '\\(1\\text{ kilolitre (kL)} = 1000\\text{ litres (L)}\\)' },
        { explanation: 'To convert from a smaller unit (L) to a larger unit (kL), divide by 1000.', workingOut: '\\(2500 \\div 1000 = 2.5\\text{ kL}\\)' }
      ]
    },
    {
      id: 'y8-15i-q4h',
      opts: [
        { text: '\\(4000\\)', imageUrl: '' },
        { text: '\\(40000\\)', imageUrl: '' },
        { text: '\\(400000\\)', imageUrl: '' }, // Correct -> C
        { text: '\\(4000000\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: [
        { explanation: 'Recall the conversion factor for capacity.', workingOut: '\\(1\\text{ megalitre (ML)} = 1000000\\text{ litres (L)}\\)' },
        { explanation: 'To convert from a larger unit (ML) to a smaller unit (L), multiply by 1,000,000.', workingOut: '\\(0.4 \\times 1000000 = 400000\\text{ L}\\)' }
      ]
    },
    {
      id: 'y8-15i-q5a',
      opts: [
        { text: '\\(30\\)', imageUrl: '' },
        { text: '\\(35\\)', imageUrl: '' }, // Correct -> B
        { text: '\\(25\\)', imageUrl: '' },
        { text: '\\(40\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: [
        { explanation: 'Recall the conversion factor for time.', workingOut: '\\(1\\text{ week} = 7\\text{ days}\\)' },
        { explanation: 'Multiply the number of weeks by 7.', workingOut: '\\(5 \\times 7 = 35\\text{ days}\\)' }
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
  const pRef4 = db.collection('questions').doc('y8-15i-q4');
  const pSnap4 = await pRef4.get();
  if (pSnap4.exists) {
    const pData4 = pSnap4.data();
    if (pData4.subQuestions) {
      const newSubQs4 = pData4.subQuestions.map(sq => {
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
      await pRef4.update({ subQuestions: newSubQs4, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  const pRef5 = db.collection('questions').doc('y8-15i-q5');
  const pSnap5 = await pRef5.get();
  if (pSnap5.exists) {
    const pData5 = pSnap5.data();
    if (pData5.subQuestions) {
      const newSubQs5 = pData5.subQuestions.map(sq => {
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
      await pRef5.update({ subQuestions: newSubQs5, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated q4f, q4g, q4h, q5a");
  process.exit(0);
}

run().catch(console.error);
