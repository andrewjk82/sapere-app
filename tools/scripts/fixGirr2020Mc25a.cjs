const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgData = JSON.parse(fs.readFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/genSvg25a.json', 'utf8'));

  const steps25a = [
    {
      explanation: 'First, find the key features of the absolute value function $y = |x - 1|$. The vertex occurs where $x - 1 = 0$, which is $(1, 0)$.',
      workingOut: 'y = |x - 1| \\implies \\text{Vertex at } (1, 0)'
    },
    {
      explanation: 'Find the $y$-intercept for the absolute value function by setting $x = 0$.',
      workingOut: 'y = |0 - 1| = 1 \\implies y\\text{-intercept at } (0, 1)'
    },
    {
      explanation: 'Next, find the key features of the linear function $y = 2x + 4$. The $y$-intercept is $(0, 4)$ and the $x$-intercept is $(-2, 0)$.',
      workingOut: 'y = 2x + 4 \\implies y\\text{-intercept: } 4, \\; x\\text{-intercept: } -2'
    },
    {
      explanation: 'Calculate the endpoints for both functions at $x = -4$ and $x = 4$ to plot them over the required domain.',
      workingOut: '\\text{For } y = |x - 1|: (-4, 5) \\text{ and } (4, 3) \\\\ \\text{For } y = 2x + 4: (-4, -4) \\text{ and } (4, 12)'
    },
    {
      explanation: 'Finally, plot the points and draw the lines. The graph of $y = |x - 1|$ is a V-shape, and $y = 2x + 4$ is a straight line.',
      workingOut: '\\text{Draw the graphs over } -4 \\leq x \\leq 4',
      graphData: { svg: svgData.svg }
    }
  ];

  await db.collection('questions').doc('girr2020-mc25a').update({
    q: 'Sketch the graph of $y = |x - 1|$ and $y = 2x + 4$ for $-4 \\leq x \\leq 4$ on the grid given below.',
    solutionSteps: steps25a,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  await questionsMetaRef.update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated 25a in Firestore.");
  process.exit(0);
}

run().catch(console.error);
