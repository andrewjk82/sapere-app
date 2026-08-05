const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

function makeSvgS() {
  const svg = `<svg viewBox="0 0 350 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #94a3b8; stroke-width: 2; }
.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
.pt { fill: #1e293b; }
.grid { stroke: #e2e8f0; stroke-width: 1; stroke-dasharray: 4 4; }
</style>
</defs>
<rect width="350" height="300" fill="#ffffff" />
<g>
  <!-- Grid -->
  <line x1="50" y1="20" x2="50" y2="280" class="grid" />
  <line x1="90" y1="20" x2="90" y2="280" class="grid" />
  <line x1="130" y1="20" x2="130" y2="280" class="grid" />
  <line x1="170" y1="20" x2="170" y2="280" class="grid" />
  <line x1="210" y1="20" x2="210" y2="280" class="grid" />
  <line x1="250" y1="20" x2="250" y2="280" class="grid" />
  <line x1="290" y1="20" x2="290" y2="280" class="grid" />
  
  <line x1="20" y1="50" x2="320" y2="50" class="grid" />
  <line x1="20" y1="150" x2="320" y2="150" class="grid" />
  <line x1="20" y1="230" x2="320" y2="230" class="grid" />

  <!-- Axes -->
  <line x1="20" y1="150" x2="320" y2="150" class="axis" />
  <text x="310" y="170" class="label">x</text>\n  <line x1="50" y1="280" x2="50" y2="20" class="axis" />
  <text x="35" y="25" class="label">y'</text>
  <text x="35" y="170" class="label">0</text>
  
  <text x="125" y="170" class="label">2</text>
  <text x="285" y="170" class="label">6</text>
  
  <text x="35" y="55" class="label">5</text>
  <text x="25" y="235" class="label">-4</text>
  
  <!-- Curve -->
  <polyline points="50,50 130,150 290,230" class="curve" />
  
  <!-- Points -->
  <circle cx="50" cy="50" r="4" class="pt" />
  <circle cx="130" cy="150" r="4" class="pt" />
  <circle cx="290" cy="230" r="4" class="pt" />
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
        { text: '$2 < x \\leq 6$', imageUrl: '' },
        { text: 'Nowhere', imageUrl: '' }
      ],
      answer: '0',
      solutionSteps: [
        {
          explanation: 'A function $f(x)$ is increasing when its derivative $f\'(x) > 0$.',
          workingOut: 'f(x) \\text{ increasing} \\implies f\'(x) > 0'
        },
        {
          explanation: 'Looking at the graph of $f\'(x)$, the values are positive (above the $x$-axis) between $x = 0$ and $x = 2$.',
          workingOut: 'f\'(x) > 0 \\text{ for } 0 \\leq x < 2'
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
      answer: '1',
      solutionSteps: [
        {
          explanation: 'The maximum value occurs where $f\'(x)$ changes from positive to negative, which is at $x = 2$.',
          workingOut: 'f\'(x) = 0 \\text{ at } x = 2'
        },
        {
          explanation: 'The value of $f(2)$ is equal to the initial value $f(0)$ plus the area under the $f\'(x)$ curve from $0$ to $2$.',
          workingOut: 'f(2) = f(0) + \\int_0^2 f\'(x) dx'
        },
        {
          explanation: 'The area from $x = 0$ to $x = 2$ is a triangle with base $2$ and height $5$.',
          workingOut: '\\text{Area} = \\frac{1}{2} \\times 2 \\times 5 = 5'
        },
        {
          explanation: 'Since $f(0) = 0$, the maximum value is $0 + 5 = 5$.',
          workingOut: 'f(2) = 0 + 5 = 5'
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
        { text: '$f(6) = -3$', imageUrl: '' },
        { text: '$f(6) = -4$', imageUrl: '' },
        { text: '$f(6) = 2$', imageUrl: '' }
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'To find $f(6)$, we add the signed area from $x=2$ to $x=6$ to the value of $f(2)$.',
          workingOut: 'f(6) = f(2) + \\int_2^6 f\'(x) dx'
        },
        {
          explanation: 'The area from $x = 2$ to $x = 6$ forms a triangle below the $x$-axis, with base $4$ (from 2 to 6) and height $4$ (down to -4).',
          workingOut: '\\text{Area} = - \\left( \\frac{1}{2} \\times 4 \\times 4 \\right) = -8'
        },
        {
          explanation: 'Add this area to $f(2)$.',
          workingOut: 'f(6) = 5 + (-8) = -3'
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
          explanation: 'Plot the key points we found: $(0,0)$, maximum at $(2,5)$, and endpoint at $(6,-3)$. The curve should be concave down everywhere because $f\'(x)$ is decreasing.',
          workingOut: '\\text{Points: } (0,0), (2,5), (6,-3) \\\\ f\'\'(x) < 0 \\implies \\text{Concave Down}'
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

  console.log("Fixed girr2020-mc29s in Firestore.");
  process.exit(0);
}

run().catch(console.error);
