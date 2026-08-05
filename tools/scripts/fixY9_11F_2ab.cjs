const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // --- q2a ---
  batch.update(db.collection('questions').doc('y9-11f-q2a'), {
    solutionSteps: [
      {
        explanation: 'Compare the given equation to the slope-intercept form of a line, $y = mx + c$.',
        workingOut: 'y = 2x + 6 \\\\ y = mx + c',
        graphData: null
      },
      {
        explanation: 'Identify the value of $c$, which represents the $y$-intercept.',
        workingOut: 'c = 6',
        graphData: null
      },
      {
        explanation: 'Therefore, the $y$-intercept is $6$.',
        workingOut: '6',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // --- q2b ---
  batch.update(db.collection('questions').doc('y9-11f-q2b'), {
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: [
      { text: '\\(6\\)', imageUrl: '' },
      { text: '\\(2\\)', imageUrl: '' },
      { text: '\\(-2\\)', imageUrl: '' },
      { text: '\\(-6\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'Compare the given equation to the slope-intercept form of a line, $y = mx + c$.',
        workingOut: 'y = 2x + 6 \\\\ y = mx + c',
        graphData: null
      },
      {
        explanation: 'Identify the value of $m$, which represents the gradient.',
        workingOut: 'm = 2',
        graphData: null
      },
      {
        explanation: 'Therefore, the gradient is $2$.',
        workingOut: '2',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated q2a and q2b successfully.");
  process.exit(0);
}

run().catch(console.error);
