const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgData = JSON.parse(fs.readFileSync('tools/scripts/genSvg27.json', 'utf8'));

  const steps27 = [
    {
      explanation: 'The standard absolute value graph $y = |x|$ opens upwards with a vertex at $(0, 0)$.',
      workingOut: 'f(x) = |x| \\implies \\text{Vertex } (0,0)'
    },
    {
      explanation: 'The given graph opens downwards, which means it has been reflected across the $x$-axis. This implies $k$ is negative.',
      workingOut: 'k < 0'
    },
    {
      explanation: 'The vertex of the given graph is at $(3, 2)$. This represents a horizontal shift of $3$ units to the right, so $b = -3$.',
      workingOut: 'b = -3'
    },
    {
      explanation: 'It also represents a vertical shift of $2$ units up, so $c = 2$.',
      workingOut: 'c = 2'
    },
    {
      explanation: 'Let\'s check a point on the graph, for example the $y$-intercept $(0, -1)$, to find the exact value of $k$.',
      workingOut: '\\begin{aligned} y &= k|x - 3| + 2 \\\\ -1 &= k|0 - 3| + 2 \\\\ -1 &= 3k + 2 \\\\ 3k &= -3 \\\\ k &= -1 \\end{aligned}'
    },
    {
      explanation: 'Therefore, $k = -1, b = -3, c = 2$.',
      workingOut: 'k = -1, \\quad b = -3, \\quad c = 2'
    }
  ];

  const steps27s = [
    {
      explanation: 'Substitute $f(x) = |x|$ into the general form $y = kf(x + b) + c$.',
      workingOut: 'y = k|x + b| + c'
    },
    {
      explanation: 'Compare this transformed equation to the given equation $y = 2|x - 1| + 3$.',
      workingOut: 'k|x + b| + c \\quad \\text{vs} \\quad 2|x - 1| + 3'
    },
    {
      explanation: 'By matching the coefficient outside the absolute value, we see $k = 2$.',
      workingOut: 'k = 2'
    },
    {
      explanation: 'By matching the expression inside the absolute value, $x + b = x - 1$, which gives $b = -1$.',
      workingOut: 'x + b = x - 1 \\implies b = -1'
    },
    {
      explanation: 'By matching the constant term at the end, we see $c = 3$.',
      workingOut: 'c = 3'
    }
  ];

  const steps28a = [
    {
      explanation: 'Draw a right-angled triangle representing the situation for observer B. Let the top of the tower be $Z$ and the base of the tower be $Y$. The height of the tower is $YZ = h$.',
      workingOut: '\\text{Triangle } \\triangle BYZ \\text{ with } \\angle BYZ = 90^\\circ \\text{ and } YZ = h'
    },
    {
      explanation: 'The observer is at point $B$, and the angle of elevation to the top of the tower is $\\angle YBZ = 12^\\circ$.',
      workingOut: '\\angle YBZ = 12^\\circ'
    },
    {
      explanation: 'In the right-angled triangle $\\triangle BYZ$, use the tangent trigonometric ratio: $\\tan(\\theta) = \\frac{\\text{Opposite}}{\\text{Adjacent}}$.',
      workingOut: '\\tan(12^\\circ) = \\frac{YZ}{BY}'
    },
    {
      explanation: 'Substitute the known height $h$ and rearrange the equation to make $BY$ the subject.',
      workingOut: '\\begin{aligned} \\tan(12^\\circ) &= \\frac{h}{BY} \\\\ BY \\cdot \\tan(12^\\circ) &= h \\\\ BY &= \\frac{h}{\\tan(12^\\circ)} \\end{aligned}'
    },
    {
      explanation: 'Since $\\frac{1}{\\tan(\\theta)} = \\cot(\\theta)$, this simplifies exactly to $BY = h \\cot 12^\\circ$.',
      workingOut: 'BY = h \\cot 12^\\circ'
    }
  ];

  await db.collection('questions').doc('girr2020-mc27').update({
    solutionSteps: steps27,
    graphData: { svg: svgData.svg },
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('girr2020-mc27s').update({
    solutionSteps: steps27s,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('girr2020-mc28a').update({
    solutionSteps: steps28a,
    updatedAt: FieldValue.serverTimestamp()
  });

  const now = Date.now();
  await db.doc('sync_meta/questions').update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated 27, 27s, 28a with solutionSteps and SVG.");
  process.exit(0);
}

run().catch(console.error);
