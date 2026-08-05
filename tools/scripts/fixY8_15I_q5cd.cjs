const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [
    {
      id: 'y8-15i-q5c',
      opts: [
        { text: '\\(48\\)', imageUrl: '' },
        { text: '\\(60\\)', imageUrl: '' }, // Correct -> B
        { text: '\\(72\\)', imageUrl: '' },
        { text: '\\(120\\)', imageUrl: '' }
      ],
      answer: '1',
      steps: [
        { explanation: 'Recall the conversion factor for time.', workingOut: '\\(1\\text{ day} = 24\\text{ hours}\\)' },
        { explanation: 'We have \\(2\\frac{1}{2}\\) days, which can be written as a decimal.', workingOut: '\\(2\\frac{1}{2} = 2.5\\)' },
        { explanation: 'To convert from days to hours, multiply the number of days by 24.', workingOut: '\\(2.5 \\times 24 = 60\\text{ hours}\\)' }
      ]
    },
    {
      id: 'y8-15i-q5d',
      opts: [
        { text: '\\(48\\)', imageUrl: '' },
        { text: '\\(50\\)', imageUrl: '' },
        { text: '\\(52\\)', imageUrl: '' }, // Correct -> C
        { text: '\\(54\\)', imageUrl: '' }
      ],
      answer: '2',
      steps: [
        { explanation: 'Recall the standard number of days in a year.', workingOut: '\\(1\\text{ year} = 365\\text{ days}\\)' },
        { explanation: 'Since there are 7 days in a week, divide 365 by 7 to find the number of full weeks.', workingOut: '\\(365 \\div 7 = 52.14...\\)' },
        { explanation: 'This means there are 52 full weeks in a year (with 1 or 2 days left over).', workingOut: '\\(52\\text{ full weeks}\\)' }
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
  const pRef = db.collection('questions').doc('y8-15i-q5');
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

  console.log("Updated q5c, q5d");
  process.exit(0);
}

run().catch(console.error);
