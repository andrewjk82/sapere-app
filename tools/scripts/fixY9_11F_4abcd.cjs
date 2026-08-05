const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // --- q4a ---
  batch.update(db.collection('questions').doc('y9-11f-q4a'), {
    solutionSteps: [
      {
        explanation: 'State the gradient formula for two points $(x_1, y_1)$ and $(x_2, y_2)$.',
        workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $A(4, 5)$ and $B(1, -1)$ to find the gradient $m$.',
        workingOut: 'm = \\frac{-1 - 5}{1 - 4} \\\\ m = \\frac{-6}{-3} \\\\ m = 2',
        graphData: null
      },
      {
        explanation: 'State the point-gradient formula for the equation of a line.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: 'Substitute $m = 2$ and point $A(4, 5)$ into the formula.',
        workingOut: 'y - 5 = 2(x - 4)',
        graphData: null
      },
      {
        explanation: 'Expand the brackets and rearrange into the slope-intercept form $y = mx + c$.',
        workingOut: 'y - 5 = 2x - 8 \\\\ y = 2x - 3',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // --- q4b ---
  batch.update(db.collection('questions').doc('y9-11f-q4b'), {
    solutionSteps: [
      {
        explanation: 'State the gradient formula for two points $(x_1, y_1)$ and $(x_2, y_2)$.',
        workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $A(3, 2)$ and $B(5, 8)$ to find the gradient $m$.',
        workingOut: 'm = \\frac{8 - 2}{5 - 3} \\\\ m = \\frac{6}{2} \\\\ m = 3',
        graphData: null
      },
      {
        explanation: 'State the point-gradient formula for the equation of a line.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: 'Substitute $m = 3$ and point $A(3, 2)$ into the formula.',
        workingOut: 'y - 2 = 3(x - 3)',
        graphData: null
      },
      {
        explanation: 'Expand the brackets and rearrange into the slope-intercept form $y = mx + c$.',
        workingOut: 'y - 2 = 3x - 9 \\\\ y = 3x - 7',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // --- q4c ---
  batch.update(db.collection('questions').doc('y9-11f-q4c'), {
    solutionSteps: [
      {
        explanation: 'State the gradient formula for two points $(x_1, y_1)$ and $(x_2, y_2)$.',
        workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $A(2, 3)$ and $B(3, 5)$ to find the gradient $m$.',
        workingOut: 'm = \\frac{5 - 3}{3 - 2} \\\\ m = \\frac{2}{1} \\\\ m = 2',
        graphData: null
      },
      {
        explanation: 'State the point-gradient formula for the equation of a line.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: 'Substitute $m = 2$ and point $A(2, 3)$ into the formula.',
        workingOut: 'y - 3 = 2(x - 2)',
        graphData: null
      },
      {
        explanation: 'Expand the brackets and rearrange into the slope-intercept form $y = mx + c$.',
        workingOut: 'y - 3 = 2x - 4 \\\\ y = 2x - 1',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // --- q4d ---
  batch.update(db.collection('questions').doc('y9-11f-q4d'), {
    solutionSteps: [
      {
        explanation: 'State the gradient formula for two points $(x_1, y_1)$ and $(x_2, y_2)$.',
        workingOut: 'm = \\frac{y_2 - y_1}{x_2 - x_1}',
        graphData: null
      },
      {
        explanation: 'Substitute the coordinates of $A(-2, 5)$ and $B(1, -4)$ to find the gradient $m$.',
        workingOut: 'm = \\frac{-4 - 5}{1 - (-2)} \\\\ m = \\frac{-9}{3} \\\\ m = -3',
        graphData: null
      },
      {
        explanation: 'State the point-gradient formula for the equation of a line.',
        workingOut: 'y - y_1 = m(x - x_1)',
        graphData: null
      },
      {
        explanation: 'Substitute $m = -3$ and point $A(-2, 5)$ into the formula.',
        workingOut: 'y - 5 = -3(x - (-2))',
        graphData: null
      },
      {
        explanation: 'Expand the brackets and rearrange into the slope-intercept form $y = mx + c$.',
        workingOut: 'y - 5 = -3(x + 2) \\\\ y - 5 = -3x - 6 \\\\ y = -3x - 1',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated 4a, 4b, 4c, 4d successfully.");
  process.exit(0);
}

run().catch(console.error);
