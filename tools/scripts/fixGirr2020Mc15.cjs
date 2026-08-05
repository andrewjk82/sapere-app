const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

function makeSvg() {
  const svg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.line1 { stroke: #3b82f6; stroke-width: 2; }.line2 { stroke: #10b981; stroke-width: 2; }.point { fill: #ef4444; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }</style></defs><rect width="400" height="400" fill="#ffffff" /><g><line x1="30" y1="350" x2="380" y2="350" class="axis" /><text x="370" y="380" class="label">x</text><line x1="50" y1="370" x2="50" y2="20" class="axis" /><text x="20" y="30" class="label">y</text><line x1="50" y1="355" x2="50" y2="345" class="axis" /><text x="40" y="375" class="label">0</text><line x1="350" y1="355" x2="350" y2="345" class="axis" /><text x="340" y="375" class="label">15</text><line x1="45" y1="50" x2="55" y2="50" class="axis" /><text x="20" y="55" class="label">15</text><line x1="50" y1="50" x2="350" y2="350" class="line1" /><text x="300" y="330" fill="#3b82f6" class="label">x + y = 15</text><line x1="50" y1="350" x2="350" y2="250" class="line2" /><text x="310" y="240" fill="#10b981" class="label">x = 3y</text><circle cx="275" cy="275" r="5" class="point" /><text x="285" y="270" class="label" font-weight="bold">(11.25, 3.75)</text></g></svg>`;
  return svg;
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgStr = makeSvg();

  const steps15as = [
    {
      explanation: 'First, let $x$ and $y$ be the costs of the two items.',
      workingOut: '$\\text{Let the costs be } x \\text{ and } y$'
    },
    {
      explanation: 'The problem states "Two items cost £15 total". This gives us our first equation.',
      workingOut: '$x + y = 15$'
    },
    {
      explanation: 'The problem also states "One item costs 3 times the other". This gives us our second equation.',
      workingOut: '$x = 3y$'
    },
    {
      explanation: 'Combining these gives the system of linear equations.',
      workingOut: '$\\text{The equations are } x + y = 15 \\text{ and } x = 3y$'
    }
  ];

  const steps15bs = [
    {
      explanation: 'We are given the system of equations $x + y = 15$ and $x = 3y$. Substitute the expression for $x$ from the second equation into the first equation.',
      workingOut: '$\\begin{aligned} x + y &= 15 \\\\ (3y) + y &= 15 \\end{aligned}$'
    },
    {
      explanation: 'Combine like terms and solve for $y$.',
      workingOut: '$\\begin{aligned} 4y &= 15 \\\\ y &= \\frac{15}{4} = 3.75 \\end{aligned}$'
    },
    {
      explanation: 'Substitute the value of $y$ back into the second equation to find $x$.',
      workingOut: '$\\begin{aligned} x &= 3(3.75) \\\\ x &= 11.25 \\end{aligned}$'
    },
    {
      explanation: 'The solution is the intersection of the two lines.',
      workingOut: '$\\text{Solution: } x = 11.25, y = 3.75$'
    }
  ];

  await db.collection('questions').doc('girr2020-mc15as').update({
    solutionSteps: steps15as,
    graphData: { svg: svgStr },
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('girr2020-mc15bs').update({
    solutionSteps: steps15bs,
    graphData: { svg: svgStr },
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

  console.log("Updated girr2020-mc15as and girr2020-mc15bs in Firestore.");
  process.exit(0);
}

run().catch(console.error);
