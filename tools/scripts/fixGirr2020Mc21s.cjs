const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const steps21s = [
    {
      explanation: 'Group the $x$ terms together and the $y$ terms together to prepare for completing the square.',
      workingOut: '(x^2 - 8x) + (y^2 + 4y) = 5'
    },
    {
      explanation: 'Complete the square for the $x$ terms by adding $\\left(\\frac{-8}{2}\\right)^2 = 16$ to both sides.',
      workingOut: '(x^2 - 8x + 16) + (y^2 + 4y) = 5 + 16'
    },
    {
      explanation: 'Complete the square for the $y$ terms by adding $\\left(\\frac{4}{2}\\right)^2 = 4$ to both sides.',
      workingOut: '(x^2 - 8x + 16) + (y^2 + 4y + 4) = 21 + 4'
    },
    {
      explanation: 'Factor the perfect square trinomials on the left side and simplify the right side.',
      workingOut: '(x - 4)^2 + (y + 2)^2 = 25'
    },
    {
      explanation: 'Compare this to the standard equation of a circle $(x - h)^2 + (y - k)^2 = r^2$. Here, $h = 4$, $k = -2$, and $r^2 = 25$.',
      workingOut: '\\text{Centre } (4, -2), \\; \\text{Radius } r = \\sqrt{25} = 5'
    }
  ];

  await db.collection('questions').doc('girr2020-mc21s').update({
    solutionSteps: steps21s,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Bump sync_meta so cache is invalidated
  const now = Date.now();
  await db.doc('sync_meta/questions').update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated girr2020-mc21s with solutionSteps.");
  process.exit(0);
}

run().catch(console.error);
