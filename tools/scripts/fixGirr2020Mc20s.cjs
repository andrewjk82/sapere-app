const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----------------------------------------------------
  // girr2020-mc20s
  // ----------------------------------------------------
  const steps20s = [
    {
      explanation: 'To differentiate $y = \\cos^2(3x)$, we rewrite it as $y = (\\cos(3x))^2$ and apply the chain rule.',
      workingOut: '$y = (\\cos(3x))^2$'
    },
    {
      explanation: 'First, apply the power rule (the outer layer of the chain rule). Bring down the exponent 2 and subtract 1 from the power.',
      workingOut: '$\\frac{dy}{dx} = 2(\\cos(3x))^1 \\cdot \\frac{d}{dx}(\\cos(3x))$'
    },
    {
      explanation: 'Next, differentiate the inner function $\\cos(3x)$. The derivative of $\\cos(kx)$ is $-k\\sin(kx)$.',
      workingOut: '$\\frac{d}{dx}(\\cos(3x)) = -3\\sin(3x)$'
    },
    {
      explanation: 'Multiply the parts together to find the final derivative.',
      workingOut: '$\\begin{aligned} \\frac{dy}{dx} &= 2\\cos(3x) \\cdot (-3\\sin(3x)) \\\\ &= -6\\sin(3x)\\cos(3x) \\end{aligned}$'
    },
    {
      explanation: 'Looking at the expression $-6\\sin(3x)\\cos(3x)$, the coefficient of the leading term is $-6$.',
      workingOut: '$m = -6$'
    }
  ];

  await db.collection('questions').doc('girr2020-mc20s').update({
    solutionSteps: steps20s,
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

  console.log("Updated 20s in Firestore.");
  process.exit(0);
}

run().catch(console.error);
