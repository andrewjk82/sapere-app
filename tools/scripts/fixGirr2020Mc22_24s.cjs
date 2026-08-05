const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const steps22s = [
    {
      explanation: 'Write the expression for $f(x+h)$ and expand it.',
      workingOut: '\\begin{aligned} f(x+h) &= 2(x+h)^2 - 4(x+h) + 5 \\\\ &= 2(x^2 + 2xh + h^2) - 4x - 4h + 5 \\\\ &= 2x^2 + 4xh + 2h^2 - 4x - 4h + 5 \\end{aligned}'
    },
    {
      explanation: 'Find the difference $f(x+h) - f(x)$.',
      workingOut: '\\begin{aligned} f(x+h) - f(x) &= (2x^2 + 4xh + 2h^2 - 4x - 4h + 5) - (2x^2 - 4x + 5) \\\\ &= 4xh + 2h^2 - 4h \\end{aligned}'
    },
    {
      explanation: 'Divide by $h$.',
      workingOut: '\\frac{f(x+h) - f(x)}{h} = \\frac{4xh + 2h^2 - 4h}{h} = 4x + 2h - 4'
    },
    {
      explanation: 'Take the limit as $h \\to 0$.',
      workingOut: 'f\'(x) = \\lim_{h \\to 0} (4x + 2h - 4) = 4x - 4'
    }
  ];

  const steps23s = [
    {
      explanation: 'Integrate the gradient function $f\'(x)$ to find the general form of $f(x)$. Remember to add the constant of integration $C$.',
      workingOut: '\\begin{aligned} f(x) &= \\int (6x + 1) \\,dx \\\\ &= \\frac{6x^2}{2} + x + C \\\\ &= 3x^2 + x + C \\end{aligned}'
    },
    {
      explanation: 'Substitute the given point $(1, 5)$ into the equation to find $C$.',
      workingOut: '\\begin{aligned} f(1) &= 3(1)^2 + (1) + C \\\\ 5 &= 3 + 1 + C \\end{aligned}'
    },
    {
      explanation: 'Solve for $C$.',
      workingOut: '\\begin{aligned} 5 &= 4 + C \\\\ C &= 1 \\end{aligned}'
    },
    {
      explanation: 'Write the final equation for $f(x)$.',
      workingOut: 'f(x) = 3x^2 + x + 1'
    }
  ];

  const steps24s = [
    {
      explanation: 'Observe the vertical asymptote from the graph. The graph approaches but never touches the vertical line $x = 2$, so $x = 2$ is excluded from the domain.',
      workingOut: '\\text{Vertical asymptote at } x = 2'
    },
    {
      explanation: 'The domain is all real numbers except $2$.',
      workingOut: '\\text{Domain: } (-\\infty, 2) \\cup (2, \\infty)'
    },
    {
      explanation: 'Observe the horizontal asymptote from the graph. The graph approaches but never touches the horizontal line $y = 1$, so $y = 1$ is excluded from the range.',
      workingOut: '\\text{Horizontal asymptote at } y = 1'
    },
    {
      explanation: 'The range is all real numbers except $1$.',
      workingOut: '\\text{Range: } (-\\infty, 1) \\cup (1, \\infty)'
    }
  ];

  await db.collection('questions').doc('girr2020-mc22s').update({
    solutionSteps: steps22s,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('girr2020-mc23s').update({
    solutionSteps: steps23s,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('girr2020-mc24s').update({
    solutionSteps: steps24s,
    updatedAt: FieldValue.serverTimestamp()
  });

  const now = Date.now();
  await db.doc('sync_meta/questions').update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated 22s, 23s, 24s with solutionSteps.");
  process.exit(0);
}

run().catch(console.error);
