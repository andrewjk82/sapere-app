const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // --- 1a ---
  batch.update(db.collection('questions').doc('y9-11f-q1a'), {
    options: [
      { text: '\\(y = 2x\\)', imageUrl: '' },
      { text: '\\(y = 2x + 2\\)', imageUrl: '' },
      { text: '\\(y = 2x + 4\\)', imageUrl: '' },
      { text: '\\(y = x + 2\\)', imageUrl: '' }
    ],
    answer: '1',
    solutionSteps: [
      {
        explanation: 'State the point-gradient formula for the equation of a line.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: 'Substitute the given point $(x_1, y_1) = (1, 4)$ and the given gradient $m = 2$ into the formula.',
        workingOut: 'y - 4 = 2(x - 1)',
        graphData: null
      },
      {
        explanation: 'Expand the brackets on the right-hand side.',
        workingOut: 'y - 4 = 2x - 2',
        graphData: null
      },
      {
        explanation: 'Rearrange the equation into the slope-intercept form $y = mx + c$.',
        workingOut: 'y = 2x - 2 + 4 \\\\ y = 2x + 2',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // --- 1b ---
  batch.update(db.collection('questions').doc('y9-11f-q1b'), {
    options: [
      { text: '\\(y = 3x\\)', imageUrl: '' },
      { text: '\\(y = 3x + 1\\)', imageUrl: '' },
      { text: '\\(y = 3x - 1\\)', imageUrl: '' },
      { text: '\\(y = x - 1\\)', imageUrl: '' }
    ],
    answer: '2',
    solutionSteps: [
      {
        explanation: 'State the point-gradient formula for the equation of a line.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: 'Substitute the given point $(x_1, y_1) = (2, 5)$ and the given gradient $m = 3$ into the formula.',
        workingOut: 'y - 5 = 3(x - 2)',
        graphData: null
      },
      {
        explanation: 'Expand the brackets on the right-hand side.',
        workingOut: 'y - 5 = 3x - 6',
        graphData: null
      },
      {
        explanation: 'Rearrange the equation into the slope-intercept form $y = mx + c$.',
        workingOut: 'y = 3x - 6 + 5 \\\\ y = 3x - 1',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated 1a and 1b successfully.");
  process.exit(0);
}

run().catch(console.error);
