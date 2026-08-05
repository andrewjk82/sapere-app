const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----------------------------------------------------
  // girr2020-mc18bs
  // ----------------------------------------------------
  const steps18bs = [
    {
      explanation: 'The formula for the area of a sector is $A = \\frac{1}{2}r^2\\theta$, where $r$ is the radius and $\\theta$ is the angle in radians.',
      workingOut: '$A = \\frac{1}{2}r^2\\theta$'
    },
    {
      explanation: 'Substitute the given values $r = 5$ and $\\theta = 0.64$ into the formula.',
      workingOut: '$A = \\frac{1}{2}(5)^2(0.64)$'
    },
    {
      explanation: 'Calculate the square of the radius.',
      workingOut: '$\\begin{aligned} A &= \\frac{1}{2}(25)(0.64) \\end{aligned}$'
    },
    {
      explanation: 'Multiply the terms to find the final area.',
      workingOut: '$\\begin{aligned} A &= 12.5 \\times 0.64 \\\\ A &= 8 \\end{aligned}$'
    }
  ];

  await db.collection('questions').doc('girr2020-mc18bs').update({
    q: 'Find the area of the sector when $r = 5$ cm and $\\theta = 0.64$ radians.',
    question: 'Find the area of the sector when $r = 5$ cm and $\\theta = 0.64$ radians.',
    solutionSteps: steps18bs,
    updatedAt: FieldValue.serverTimestamp()
  });

  // ----------------------------------------------------
  // girr2020-mc19as
  // ----------------------------------------------------
  const steps19as = [
    {
      explanation: 'For a discrete probability distribution to be valid, all individual probabilities must be between 0 and 1, and their sum must equal exactly $1$.',
      workingOut: '$\\sum P(Y=y) = 1$'
    },
    {
      explanation: 'Add all the given probabilities together.',
      workingOut: '$\\begin{aligned} \\sum P(Y=y) &= P(Y=0) + P(Y=1) + P(Y=2) + P(Y=3) \\\\ &= 0.15 + 0.25 + 0.35 + 0.25 \\end{aligned}$'
    },
    {
      explanation: 'Calculate the total sum.',
      workingOut: '$\\sum P(Y=y) = 1.0$'
    },
    {
      explanation: 'Since the sum is $1.0$, the distribution is valid.',
      workingOut: '$\\text{Valid: sum } = 1.0$'
    }
  ];

  await db.collection('questions').doc('girr2020-mc19as').update({
    solutionSteps: steps19as,
    updatedAt: FieldValue.serverTimestamp()
  });

  // ----------------------------------------------------
  // girr2020-mc19bs
  // ----------------------------------------------------
  const steps19bs = [
    {
      explanation: 'The expected value $E(Y)$ of a discrete random variable is found by multiplying each outcome $y$ by its probability $P(Y=y)$, and summing the results.',
      workingOut: '$E(Y) = \\sum y \\cdot P(Y=y)$'
    },
    {
      explanation: 'Substitute the values from the probability distribution.',
      workingOut: '$E(Y) = 0(0.15) + 1(0.25) + 2(0.35) + 3(0.25)$'
    },
    {
      explanation: 'Multiply each pair of values.',
      workingOut: '$\\begin{aligned} E(Y) &= 0 + 0.25 + 0.70 + 0.75 \\end{aligned}$'
    },
    {
      explanation: 'Add the products to find the expected value.',
      workingOut: '$\\begin{aligned} E(Y) &= 1.7 \\end{aligned}$'
    }
  ];

  await db.collection('questions').doc('girr2020-mc19bs').update({
    solutionSteps: steps19bs,
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

  console.log("Updated 18bs, 19as, 19bs in Firestore.");
  process.exit(0);
}

run().catch(console.error);
