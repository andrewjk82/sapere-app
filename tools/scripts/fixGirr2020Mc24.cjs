const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgData = JSON.parse(fs.readFileSync('tools/scripts/genSvg24.json', 'utf8'));

  const steps24 = [
    {
      explanation: 'Domain is the set of all input values ($x$-values) for which the function is defined. Looking at the graph, it exists for $x \\leq -1$ and $x \\geq 1$, with solid endpoints at $x = -1$ and $x = 1$.',
      workingOut: '\\text{Endpoints at } x = \\pm 1'
    },
    {
      explanation: 'In interval notation, the domain includes these endpoints, so we use square brackets.',
      workingOut: '\\text{Domain: } (-\\infty, -1] \\cup [1, \\infty)'
    },
    {
      explanation: 'Range is the set of all possible output values ($y$-values).',
      workingOut: '\\text{Range: all possible } y\\text{-values}'
    },
    {
      explanation: 'The graph has endpoints at $y = -\\pi/2$ and $y = \\pi/2$, which are included. It has a horizontal asymptote at $y = 0$ (the x-axis), so $y=0$ is excluded.',
      workingOut: '\\text{Horizontal asymptote at } y = 0'
    },
    {
      explanation: 'The range in interval notation includes the endpoints but excludes $0$.',
      workingOut: '\\text{Range: } [-\\pi/2, 0) \\cup (0, \\pi/2]'
    }
  ];

  await db.collection('questions').doc('girr2020-mc24').update({
    s: 'From the graph, the function is defined for $x \\leq -1$ and $x \\geq 1$, with endpoints at $x = \\pm 1$ (included in domain) and a horizontal asymptote at $y = 0$ (excluded from range). Domain: $(-\\infty, -1] \\cup [1, \\infty)$, Range: $[-\\pi/2, 0) \\cup (0, \\pi/2]$.',
    h: 'Domain: all $x$-values for which the function is defined. Range: all possible $y$-values the function takes. Look for gaps (asymptotes) or endpoints in the graph.',
    solutionSteps: steps24,
    graphData: { svg: svgData.svg },
    updatedAt: FieldValue.serverTimestamp()
  });

  const now = Date.now();
  await db.doc('sync_meta/questions').update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated girr2020-mc24 with SVG and correct steps.");
  process.exit(0);
}

run().catch(console.error);
