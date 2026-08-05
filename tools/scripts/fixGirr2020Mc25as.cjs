const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgData = JSON.parse(fs.readFileSync('tools/scripts/genSvg25as.json', 'utf8'));

  const steps25as = [
    {
      explanation: 'First, find the key features of the absolute value function $y = |2x + 3|$. The vertex occurs where $2x + 3 = 0$, which is $(-1.5, 0)$.',
      workingOut: 'y = |2x + 3| \\implies \\text{Vertex at } (-1.5, 0)'
    },
    {
      explanation: 'Find the $y$-intercept for the absolute value function by setting $x = 0$.',
      workingOut: 'y = |2(0) + 3| = 3 \\implies y\\text{-intercept at } (0, 3)'
    },
    {
      explanation: 'Next, find the key features of the linear function $y = -x + 5$. The $y$-intercept is $(0, 5)$ and the $x$-intercept is $(5, 0)$.',
      workingOut: 'y = -x + 5 \\implies y\\text{-intercept: } 5, \\; x\\text{-intercept: } 5'
    },
    {
      explanation: 'Calculate the endpoints for both functions at $x = -9$ and $x = 4$ to plot them over the required domain.',
      workingOut: '\\text{For } y = |2x + 3|: (-9, 15) \\text{ and } (4, 11) \\\\ \\text{For } y = -x + 5: (-9, 14) \\text{ and } (4, 1)'
    },
    {
      explanation: 'Finally, plot the points and draw the lines. Notice how the graphs intersect on the left side at $(-8, 13)$.',
      workingOut: '\\text{Draw the graphs over } -9 \\leq x \\leq 4',
      graphData: { svg: svgData.svg }
    }
  ];

  await db.collection('questions').doc('girr2020-mc25as').update({
    q: 'Sketch $y = |2x + 3|$ and $y = -x + 5$ for $-9 \\leq x \\leq 4$.',
    question: 'Sketch $y = |2x + 3|$ and $y = -x + 5$ for $-9 \\leq x \\leq 4$.',
    solutionSteps: steps25as,
    updatedAt: FieldValue.serverTimestamp()
  });

  const now = Date.now();
  await db.doc('sync_meta/questions').update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated girr2020-mc25as domain and SVG.");
  process.exit(0);
}

run().catch(console.error);
