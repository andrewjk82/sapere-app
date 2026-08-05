const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const q5b_id = 'y8-15i-q5b';
  const opts = [
    { text: '\\(2\\)', imageUrl: '' },
    { text: '\\(30\\)', imageUrl: '' },
    { text: '\\(4\\)', imageUrl: '' },
    { text: '\\(3\\)', imageUrl: '' } // Correct -> D
  ];
  const answer = '3';
  const steps = [
    { explanation: 'Recall the conversion factor for time.', workingOut: '\\(1\\text{ hour (h)} = 60\\text{ minutes (min)}\\)', graphData: null },
    { explanation: 'To convert from a smaller unit (minutes) to a larger unit (hours), divide by 60.', workingOut: 'Divide by 60', graphData: null },
    { explanation: 'Perform the division.', workingOut: '\\(180 \\div 60 = 3\\text{ h}\\)', graphData: null }
  ];

  await db.collection('questions').doc(q5b_id).update({
    type: 'multiple_choice',
    options: opts,
    answer: answer,
    solutionSteps: steps,
    requiresManualGrading: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });

  const pRef = db.collection('questions').doc('y8-15i-q5');
  const pSnap = await pRef.get();
  if (pSnap.exists) {
    const pData = pSnap.data();
    if (pData.subQuestions) {
      const newSubQs = pData.subQuestions.map(sq => {
        if (sq.id === q5b_id) {
          return {
            ...sq,
            type: 'multiple_choice',
            options: opts,
            answer: answer,
            solutionSteps: steps,
            requiresManualGrading: FieldValue.delete()
          };
        }
        return sq;
      });
      await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated q5b");
  process.exit(0);
}

run().catch(console.error);
