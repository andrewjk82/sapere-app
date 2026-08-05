const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

function makeSvgS() {
  const svg = `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #94a3b8; stroke-width: 2; }
.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
.pt { fill: #1e293b; }
.grid { stroke: #e2e8f0; stroke-width: 1; stroke-dasharray: 4 4; }
</style>
</defs>
<rect width="400" height="300" fill="#ffffff" />
<g>
  <!-- Grid -->
  <line x1="50" y1="20" x2="50" y2="280" class="grid" />
  <line x1="100" y1="20" x2="100" y2="280" class="grid" />
  <line x1="150" y1="20" x2="150" y2="280" class="grid" />
  <line x1="200" y1="20" x2="200" y2="280" class="grid" />
  <line x1="250" y1="20" x2="250" y2="280" class="grid" />
  <line x1="300" y1="20" x2="300" y2="280" class="grid" />
  <line x1="350" y1="20" x2="350" y2="280" class="grid" />
  
  <line x1="20" y1="70" x2="370" y2="70" class="grid" />
  <line x1="20" y1="150" x2="370" y2="150" class="grid" />
  <line x1="20" y1="270" x2="370" y2="270" class="grid" />

  <!-- Axes -->
  <line x1="20" y1="150" x2="370" y2="150" class="axis" />
  <text x="360" y="170" class="label">x</text>
  <line x1="50" y1="280" x2="50" y2="20" class="axis" />
  <text x="35" y="25" class="label">y'</text>
  <text x="35" y="170" class="label">0</text>
  
  <text x="145" y="170" class="label">2</text>
  <text x="245" y="170" class="label">4</text>
  <text x="345" y="170" class="label">6</text>
  
  <text x="35" y="75" class="label">2</text>
  <text x="25" y="275" class="label">-3</text>
  
  <!-- Curve: (0,2)->(2,2)->(4,0)->(6,-3) -->
  <polyline points="50,70 150,70 250,150 350,270" class="curve" />
  
  <!-- Points -->
  <circle cx="50" cy="70" r="4" class="pt" />
  <circle cx="150" cy="70" r="4" class="pt" />
  <circle cx="250" cy="150" r="4" class="pt" />
  <circle cx="350" cy="270" r="4" class="pt" />
</g>
</svg>`;
  return svg;
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svg = makeSvgS();

  const subQuestions = [
    {
      id: 'girr2020-mc29as',
      q: 'From the derivative graph $f\'(x)$, where is $f(x)$ increasing?',
      question: 'From the derivative graph $f\'(x)$, where is $f(x)$ increasing?',
      type: 'multiple_choice',
      options: [
        { text: '$0 \\leq x < 2$', imageUrl: '' },
        { text: '$x < 0$', imageUrl: '' },
        { text: '$0 \\leq x < 4$', imageUrl: '' },
        { text: 'Nowhere', imageUrl: '' }
      ],
      answer: '2',
      solutionSteps: [
        {
          explanation: 'A function $f(x)$ is increasing when its derivative $f\'(x) > 0$.',
          workingOut: 'f(x) \\text{ increasing} \\implies f\'(x) > 0'
        },
        {
          explanation: 'Looking at the graph of $f\'(x)$, the values are positive (above the $x$-axis) between $x = 0$ and $x = 4$.',
          workingOut: 'f\'(x) > 0 \\text{ for } 0 \\leq x < 4'
        }
      ]
    },
    {
      id: 'girr2020-mc29bs',
      q: 'Assuming $f(0) = 0$, what is the maximum value of $f(x)$ for $0 \\leq x \\leq 6$?',
      question: 'Assuming $f(0) = 0$, what is the maximum value of $f(x)$ for $0 \\leq x \\leq 6$?',
      type: 'multiple_choice',
      options: [
        { text: '$f(x)_{max} = 3$', imageUrl: '' },
        { text: '$f(x)_{max} = 5$', imageUrl: '' },
        { text: '$f(x)_{max} = 6$', imageUrl: '' },
        { text: '$f(x)_{max} = 8$', imageUrl: '' }
      ],
      answer: '2',
      solutionSteps: [
        {
          explanation: 'The maximum value occurs where $f\'(x)$ changes from positive to negative, which is at $x = 4$.',
          workingOut: 'f\'(x) = 0 \\text{ at } x = 4'
        },
        {
          explanation: 'The value of $f(4)$ is equal to the initial value $f(0)$ plus the area under the $f\'(x)$ curve from $0$ to $4$.',
          workingOut: 'f(4) = f(0) + \\int_0^4 f\'(x) dx'
        },
        {
          explanation: 'The area from $x = 0$ to $x = 4$ can be split into a rectangle (from 0 to 2) and a triangle (from 2 to 4).',
          workingOut: '\\text{Area}_{rect} = 2 \\times 2 = 4 \\\\ \\text{Area}_{tri} = \\frac{1}{2} \\times 2 \\times 2 = 2 \\\\ \\text{Total Area} = 4 + 2 = 6'
        },
        {
          explanation: 'Since $f(0) = 0$, the maximum value is $0 + 6 = 6$.',
          workingOut: 'f(4) = 0 + 6 = 6'
        }
      ]
    },
    {
      id: 'girr2020-mc29cs',
      q: 'Find the value of $f(6)$.',
      question: 'Find the value of $f(6)$.',
      type: 'multiple_choice',
      options: [
        { text: '$f(6) = 0$', imageUrl: '' },
        { text: '$f(6) = 3$', imageUrl: '' },
        { text: '$f(6) = -3$', imageUrl: '' },
        { text: '$f(6) = 2$', imageUrl: '' }
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'To find $f(6)$, we add the signed area from $x=4$ to $x=6$ to the value of $f(4)$.',
          workingOut: 'f(6) = f(4) + \\int_4^6 f\'(x) dx'
        },
        {
          explanation: 'The area from $x = 4$ to $x = 6$ forms a triangle below the $x$-axis, with base $2$ (from 4 to 6) and height $3$ (down to -3).',
          workingOut: '\\text{Area} = - \\left( \\frac{1}{2} \\times 2 \\times 3 \\right) = -3'
        },
        {
          explanation: 'Add this area to $f(4)$.',
          workingOut: 'f(6) = 6 + (-3) = 3'
        }
      ]
    },
    {
      id: 'girr2020-mc29ds',
      q: 'Draw a graph of $y = f(x)$ for $0 \\leq x \\leq 6$. **(Teacher-graded sketch)**',
      question: 'Draw a graph of $y = f(x)$ for $0 \\leq x \\leq 6$. **(Teacher-graded sketch)**',
      type: 'teacher_review',
      options: [{ text: 'Sketch provided', imageUrl: '' }],
      answer: 'sketch',
      solutionSteps: [
        {
          explanation: 'Plot the key points: $(0,0)$, $(2, 4)$, maximum at $(4,6)$, and endpoint at $(6,3)$. Between $x=0$ and $x=2$, the derivative is constant, so $f(x)$ is a straight line. Between $x=2$ and $x=6$, $f\'(x)$ is decreasing, so the curve is concave down.',
          workingOut: '\\text{Points: } (0,0), (2,4), (4,6), (6,3)'
        }
      ]
    }
  ];

  await db.collection('questions').doc('girr2020-mc29s').update({
    graphData: { svg },
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  });

  const now = Date.now();
  await db.doc('sync_meta/questions').update({
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Fixed girr2020-mc29s in Firestore with completely new graph.");
  process.exit(0);
}

run().catch(console.error);
