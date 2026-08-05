const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgs = JSON.parse(fs.readFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/genSvgs.json', 'utf8'));

  const steps14b = [
    {
      explanation: 'First, find the endpoints of the domain $-1 \\leq x \\leq 3$. Evaluate $f(x)$ at $x = -1$ and $x = 3$.',
      workingOut: '$\\begin{aligned} f(-1) &= (-1)^3 - 3(-1)^2 + 3(-1) = -1 - 3 - 3 = -7 \\\\ f(3) &= 3^3 - 3(3)^2 + 3(3) = 27 - 27 + 9 = 9 \\end{aligned}$'
    },
    {
      explanation: 'Next, find the axes intercepts. For the $y$-intercept, set $x = 0$. For the $x$-intercept, set $f(x) = 0$.',
      workingOut: '$f(0) = 0^3 - 3(0)^2 + 3(0) = 0 \\quad \\Rightarrow \\quad (0, 0)$'
    },
    {
      explanation: 'To find the $x$-intercepts, solve $x^3 - 3x^2 + 3x = 0$. Factor out $x$: $x(x^2 - 3x + 3) = 0$. The quadratic has discriminant $\\Delta = (-3)^2 - 4(1)(3) = 9 - 12 = -3 < 0$, so no real roots. The only intercept is $(0, 0)$.',
      workingOut: '$x(x^2 - 3x + 3) = 0 \\quad \\Rightarrow \\quad x = 0$'
    },
    {
      explanation: 'Find the stationary points by setting the first derivative $f\'(x)$ to zero.',
      workingOut: '$\\begin{aligned} f\'(x) &= 3x^2 - 6x + 3 = 3(x^2 - 2x + 1) = 3(x - 1)^2 \\\\ 3(x - 1)^2 &= 0 \\quad \\Rightarrow \\quad x = 1 \\end{aligned}$'
    },
    {
      explanation: 'Find the $y$-coordinate of the stationary point at $x = 1$.',
      workingOut: '$f(1) = 1^3 - 3(1)^2 + 3(1) = 1 \\quad \\Rightarrow \\quad (1, 1)$'
    },
    {
      explanation: 'Determine the nature of the stationary point $(1, 1)$. Since $f\'(x) = 3(x - 1)^2 \\geq 0$ for all $x$, the gradient never becomes negative. It is positive on both sides of $x=1$.',
      workingOut: '$\\text{The point } (1, 1) \\text{ is a horizontal point of inflection.}$'
    }
  ];

  const steps14bs = [
    {
      explanation: 'First, find the endpoints of the domain $-1 \\leq x \\leq 5$. Evaluate $f(x)$ at $x = -1$ and $x = 5$.',
      workingOut: '$\\begin{aligned} f(-1) &= (-1)^3 - 6(-1)^2 + 12(-1) = -1 - 6 - 12 = -19 \\\\ f(5) &= 5^3 - 6(5)^2 + 12(5) = 125 - 150 + 60 = 35 \\end{aligned}$'
    },
    {
      explanation: 'Next, find the axes intercepts. For the $y$-intercept, set $x = 0$. For the $x$-intercept, set $f(x) = 0$.',
      workingOut: '$f(0) = 0^3 - 6(0)^2 + 12(0) = 0 \\quad \\Rightarrow \\quad (0, 0)$'
    },
    {
      explanation: 'To find the $x$-intercepts, solve $x^3 - 6x^2 + 12x = 0$. Factor out $x$: $x(x^2 - 6x + 12) = 0$. The quadratic has discriminant $\\Delta = (-6)^2 - 4(1)(12) = 36 - 48 = -12 < 0$, so no real roots. The only intercept is $(0, 0)$.',
      workingOut: '$x(x^2 - 6x + 12) = 0 \\quad \\Rightarrow \\quad x = 0$'
    },
    {
      explanation: 'Find the stationary points by setting the first derivative $f\'(x)$ to zero.',
      workingOut: '$\\begin{aligned} f\'(x) &= 3x^2 - 12x + 12 = 3(x^2 - 4x + 4) = 3(x - 2)^2 \\\\ 3(x - 2)^2 &= 0 \\quad \\Rightarrow \\quad x = 2 \\end{aligned}$'
    },
    {
      explanation: 'Find the $y$-coordinate of the stationary point at $x = 2$.',
      workingOut: '$f(2) = 2^3 - 6(2)^2 + 12(2) = 8 - 24 + 24 = 8 \\quad \\Rightarrow \\quad (2, 8)$'
    },
    {
      explanation: 'Determine the nature of the stationary point $(2, 8)$. Since $f\'(x) = 3(x - 2)^2 \\geq 0$ for all $x$, the gradient never becomes negative. It is positive on both sides of $x=2$.',
      workingOut: '$\\text{The point } (2, 8) \\text{ is a horizontal point of inflection.}$'
    }
  ];

  await db.collection('questions').doc('girr2020-mc14b').update({
    solutionSteps: steps14b,
    graphData: { svg: svgs.svg1 },
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('girr2020-mc14bs').update({
    solutionSteps: steps14bs,
    graphData: { svg: svgs.svg2 },
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

  console.log("Updated both questions in Firestore with detailed steps and graphs.");
  process.exit(0);
}

run().catch(console.error);
