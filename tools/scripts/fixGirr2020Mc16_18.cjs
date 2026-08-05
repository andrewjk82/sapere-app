const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgs = JSON.parse(fs.readFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/genSvgs16_17_18.json', 'utf8'));

  // ----------------------------------------------------
  // girr2020-mc16s
  // ----------------------------------------------------
  const steps16s = [
    {
      explanation: 'We need to differentiate $y = e^{-2x} \\sin x$. We will use the product rule: $(uv)\' = u\'v + uv\'$.',
      workingOut: '$\\text{Let } u = e^{-2x} \\text{ and } v = \\sin x$'
    },
    {
      explanation: 'Find the derivatives of $u$ and $v$ with respect to $x$.',
      workingOut: '$\\begin{aligned} u\' &= -2e^{-2x} \\\\ v\' &= \\cos x \\end{aligned}$'
    },
    {
      explanation: 'Apply the product rule formula by substituting the expressions.',
      workingOut: '$\\begin{aligned} y\' &= u\'v + uv\' \\\\ y\' &= (-2e^{-2x})(\\sin x) + (e^{-2x})(\\cos x) \\end{aligned}$'
    },
    {
      explanation: 'Factor out the common term $e^{-2x}$.',
      workingOut: '$\\begin{aligned} y\' &= e^{-2x}(-2\\sin x + \\cos x) \\\\ y\' &= e^{-2x}(\\cos x - 2\\sin x) \\end{aligned}$',
      graphData: { svg: svgs.svg16 }
    }
  ];

  await db.collection('questions').doc('girr2020-mc16s').update({
    solutionSteps: steps16s,
    graphData: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });

  // ----------------------------------------------------
  // girr2020-mc17s
  // ----------------------------------------------------
  const steps17s = [
    {
      explanation: 'We are given the functions $f(x) = 2x - 1$ and $g(x) = x^2 + 3$. We need to find the composite function $f(g(x))$.',
      workingOut: '$\\text{Find } f(g(x)) = f(x^2 + 3)$'
    },
    {
      explanation: 'Substitute the entire expression for $g(x)$ in place of $x$ in the function $f(x)$.',
      workingOut: '$f(x^2 + 3) = 2(x^2 + 3) - 1$'
    },
    {
      explanation: 'Expand the expression by distributing the $2$.',
      workingOut: '$f(x^2 + 3) = 2x^2 + 6 - 1$'
    },
    {
      explanation: 'Simplify the constant terms.',
      workingOut: '$f(g(x)) = 2x^2 + 5$',
      graphData: { svg: svgs.svg17 }
    }
  ];

  await db.collection('questions').doc('girr2020-mc17s').update({
    solutionSteps: steps17s,
    graphData: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });

  // ----------------------------------------------------
  // girr2020-mc18as
  // ----------------------------------------------------
  const steps18as = [
    {
      explanation: 'The formula for the arc length of a sector is $l = r\\theta$, where $r$ is the radius and $\\theta$ is the angle in radians.',
      workingOut: '$l = r\\theta$'
    },
    {
      explanation: 'We are given the arc length $l = 5$ cm and the angle $\\theta = 0.8$ radians. Substitute these values into the formula.',
      workingOut: '$5 = r(0.8)$'
    },
    {
      explanation: 'Rearrange the equation to solve for $r$.',
      workingOut: '$r = \\frac{5}{0.8}$'
    },
    {
      explanation: 'Calculate the value. Note that $0.8 = \\frac{4}{5}$.',
      workingOut: '$\\begin{aligned} r &= \\frac{5}{4/5} \\\\ r &= \\frac{25}{4} = 6.25 \\end{aligned}$',
      graphData: { svg: svgs.svg18 }
    }
  ];

  await db.collection('questions').doc('girr2020-mc18as').update({
    q: 'A sector has arc length $5$ cm and angle $\\theta = 0.8$ radians. Find the radius $r$.',
    question: 'A sector has arc length $5$ cm and angle $\\theta = 0.8$ radians. Find the radius $r$.',
    opts: [
      '$r = 5$',
      '$r = 6.25$',
      '$r = 7.5$',
      '$r = 10$'
    ],
    solutionSteps: steps18as,
    graphData: FieldValue.delete(),
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

  console.log("Updated 16s, 17s, 18as in Firestore.");
  process.exit(0);
}

run().catch(console.error);
