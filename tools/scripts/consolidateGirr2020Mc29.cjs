const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

function makeSvg() {
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
  
  <line x1="20" y1="70" x2="320" y2="70" class="grid" />
  <line x1="20" y1="150" x2="320" y2="150" class="grid" />
  <line x1="20" y1="250" x2="320" y2="250" class="grid" />

  <!-- Axes -->
  <line x1="20" y1="150" x2="320" y2="150" class="axis" />
  <text x="310" y="170" class="label">x</text>
  <line x1="50" y1="280" x2="50" y2="20" class="axis" />
  <text x="35" y="25" class="label">y'</text>
  <text x="35" y="170" class="label">0</text>
  
  <text x="125" y="170" class="label">2</text>
  <text x="285" y="170" class="label">6</text>
  
  <text x="35" y="75" class="label">4</text>
  <text x="25" y="255" class="label">-5</text>
  
  <!-- Curve -->
  <polyline points="50,70 130,150 290,250" class="curve" />
  
  <!-- Points -->
  <circle cx="50" cy="70" r="4" class="pt" />
  <circle cx="130" cy="150" r="4" class="pt" />
  <circle cx="290" cy="250" r="4" class="pt" />
</g>
</svg>`;
  return svg;
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svg = makeSvg();

  const subQuestions = [
    {
      id: 'girr2020-mc29a',
      q: 'For what values of $x$ is $f(x)$ increasing?',
      type: 'multiple_choice',
      opts: [
        '$0 \\leq x < 1$',
        '$0 \\leq x < 2$',
        '$2 \\leq x \\leq 6$',
        '$0 \\leq x \\leq 6$'
      ],
      a: '1',
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
      id: 'girr2020-mc29b',
      q: 'Assuming $f(0) = 0$, what is the maximum value of $f(x)$ for $0 \\leq x \\leq 6$?',
      type: 'multiple_choice',
      opts: [
        '$f(x)_{max} = 2$',
        '$f(x)_{max} = 4$',
        '$f(x)_{max} = 6$',
        '$f(x)_{max} = 8$'
      ],
      a: '1',
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
          explanation: 'The area from $x = 0$ to $x = 2$ is a triangle with base $2$ and height $4$.',
          workingOut: '\\text{Area} = \\frac{1}{2} \\times 2 \\times 4 = 4'
        },
        {
          explanation: 'Since $f(0) = 0$, the maximum value is $0 + 4 = 4$.',
          workingOut: 'f(2) = 0 + 4 = 4'
        }
      ]
    },
    {
      id: 'girr2020-mc29c',
      q: 'Find the value of $f(6)$.',
      type: 'multiple_choice',
      opts: [
        '$f(6) = 0$',
        '$f(6) = 2$',
        '$f(6) = -6$',
        '$f(6) = -4$'
      ],
      a: '2',
      solutionSteps: [
        {
          explanation: 'To find $f(6)$, we add the signed area from $x=2$ to $x=6$ to the value of $f(2)$.',
          workingOut: 'f(6) = f(2) + \\int_2^6 f\'(x) dx'
        },
        {
          explanation: 'The area from $x = 2$ to $x = 6$ forms a triangle below the $x$-axis, with base $4$ (from 2 to 6) and height $5$ (down to -5).',
          workingOut: '\\text{Area} = - \\left( \\frac{1}{2} \\times 4 \\times 5 \\right) = -10'
        },
        {
          explanation: 'Add this area to $f(2)$.',
          workingOut: 'f(6) = 4 + (-10) = -6'
        }
      ]
    },
    {
      id: 'girr2020-mc29d',
      q: 'Draw a graph of $y = f(x)$ for $0 \\leq x \\leq 6$. **(Teacher-graded sketch)**',
      type: 'teacher_review',
      opts: ['Sketch provided'],
      a: 'sketch',
      solutionSteps: [
        {
          explanation: 'Plot the key points we found: $(0,0)$, maximum at $(2,4)$, and endpoint at $(6,-6)$. The curve should be concave down everywhere because $f\'(x)$ is decreasing.',
          workingOut: '\\text{Points: } (0,0), (2,4), (6,-6) \\\\ f\'\'(x) < 0 \\implies \\text{Concave Down}'
        }
      ]
    }
  ];

  const mainDoc = {
    id: 'girr2020-mc29',
    topicId: 'y12a-exam-girr',
    c: '3A',
    t: 'Using derivatives to sketch curves',
    source: 'Girraween 2020 Trial Q29',
    type: 'multipart',
    difficulty: 'medium',
    q: 'The diagram shows the graph of the derivative function $y = f\'(x)$ for a continuous function $y = f(x)$. Use the graph to answer the following questions.',
    graphData: { svg },
    subQuestions: subQuestions,
    updatedAt: FieldValue.serverTimestamp()
  };

  const mainDocS = { ...mainDoc };
  mainDocS.id = 'girr2020-mc29s';
  mainDocS.source = 'Girraween 2020 Trial Q29 (Similar)';
  mainDocS.subQuestions = subQuestions.map(sq => {
    return { ...sq, id: sq.id + 's' };
  });

  const batch = db.batch();
  
  // Set new consolidated docs
  batch.set(db.collection('questions').doc('girr2020-mc29'), mainDoc);
  batch.set(db.collection('questions').doc('girr2020-mc29s'), mainDocS);

  // Delete old docs
  const toDelete = ['girr2020-mc29a', 'girr2020-mc29b', 'girr2020-mc29c', 'girr2020-mc29d',
                    'girr2020-mc29as', 'girr2020-mc29bs', 'girr2020-mc29cs', 'girr2020-mc29ds'];
  for (let id of toDelete) {
    batch.delete(db.collection('questions').doc(id));
  }

  const now = Date.now();
  batch.update(db.doc('sync_meta/questions'), {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();

  console.log("Consolidated girr2020-mc29 and 29s in Firestore.");
  process.exit(0);
}

run().catch(console.error);
