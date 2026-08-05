const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

function makeSvg37b() {
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #94a3b8; stroke-width: 2; }
.curve { stroke: #3b82f6; stroke-width: 2; fill: none; }
.asymptote { stroke: #ef4444; stroke-width: 1.5; stroke-dasharray: 6 6; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
</style>
</defs>
<rect width="400" height="300" fill="#ffffff" />
<g>
  <!-- Axes -->
  <line x1="20" y1="200" x2="380" y2="200" class="axis" />
  <text x="370" y="220" class="label">x</text>
  <line x1="200" y1="280" x2="200" y2="20" class="axis" />
  <text x="180" y="30" class="label">y</text>
  
  <!-- Asymptotes x = -7, x = 7 -->
  <line x1="130" y1="280" x2="130" y2="20" class="asymptote" />
  <text x="110" y="220" class="label">-7</text>
  
  <line x1="270" y1="280" x2="270" y2="20" class="asymptote" />
  <text x="275" y="220" class="label">7</text>
  
  <!-- The x-axis is also an asymptote y = 0 -->
  
  <!-- Curve y = 1 / (x^2 - 49) -->
  <!-- Middle part (-7, 7), y-int at -1/49. Since -1/49 is very small, we exaggerate it for the sketch -->
  <!-- Max point at (0, -1/49), approaches x=-7 and x=7 downwards to -infinity -->
  <path d="M 135,280 Q 200,205 265,280" class="curve" />
  <text x="210" y="215" class="label">-1/49</text>
  
  <!-- Left part x < -7 -->
  <!-- Approaches y=0 as x->-inf, approaches x=-7 upwards -->
  <path d="M 20,195 Q 120,195 125,20" class="curve" />
  
  <!-- Right part x > 7 -->
  <path d="M 380,195 Q 280,195 275,20" class="curve" />
</g>
</svg>`;
}

function makeSvg37bs() {
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #94a3b8; stroke-width: 2; }
.curve { stroke: #3b82f6; stroke-width: 2; fill: none; }
.asymptote { stroke: #ef4444; stroke-width: 1.5; stroke-dasharray: 6 6; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
</style>
</defs>
<rect width="400" height="300" fill="#ffffff" />
<g>
  <!-- Axes -->
  <line x1="20" y1="200" x2="380" y2="200" class="axis" />
  <text x="370" y="220" class="label">x</text>
  <line x1="200" y1="280" x2="200" y2="20" class="axis" />
  <text x="180" y="30" class="label">y</text>
  
  <!-- Asymptotes x = -5, x = 5 -->
  <line x1="150" y1="280" x2="150" y2="20" class="asymptote" />
  <text x="130" y="220" class="label">-5</text>
  
  <line x1="250" y1="280" x2="250" y2="20" class="asymptote" />
  <text x="255" y="220" class="label">5</text>
  
  <!-- Curve y = 1 / (x^2 - 25) -->
  <path d="M 155,280 Q 200,205 245,280" class="curve" />
  <text x="210" y="215" class="label">-1/25</text>
  
  <path d="M 20,195 Q 140,195 145,20" class="curve" />
  <path d="M 380,195 Q 260,195 255,20" class="curve" />
</g>
</svg>`;
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // 1. mc37
  const subQuestions37 = [
    {
      id: 'girr2020-mc37a',
      question: 'The function $f(x) = \\sin x$ is transformed to $g(x) = 3 \\sin 2x$. Describe in words how both the amplitude and period change in this transformation.',
      type: 'multiple_choice',
      options: [
        { text: 'Amplitude is multiplied by 3 and the period is halved.', imageUrl: '' },
        { text: 'Amplitude is multiplied by 3 and the period is doubled.', imageUrl: '' },
        { text: 'Amplitude is halved and the period is multiplied by 3.', imageUrl: '' },
        { text: 'Amplitude is multiplied by 2 and the period is multiplied by 3.', imageUrl: '' }
      ],
      answer: '0',
      solutionSteps: [
        {
          explanation: 'The standard trigonometric function is $y = A \\sin(Bx)$. The amplitude is $|A|$ and the period is $\\frac{2\\pi}{|B|}$.',
          workingOut: 'A = 3, \\quad B = 2'
        },
        {
          explanation: 'For $f(x) = \\sin x$, the amplitude is $1$ and the period is $2\\pi$. For $g(x) = 3 \\sin 2x$, the new amplitude is $3$.',
          workingOut: '\\text{New Amplitude} = 3'
        },
        {
          explanation: 'The new period is $\\frac{2\\pi}{2} = \\pi$, which is exactly half of the original period.',
          workingOut: '\\text{New Period} = \\pi'
        },
        {
          explanation: 'Therefore, the amplitude is multiplied by 3 and the period is halved.',
          workingOut: '\\text{Amplitude } \\times 3, \\quad \\text{Period } \\div 2'
        }
      ]
    },
    {
      id: 'girr2020-mc37b',
      question: 'Sketch $y = \\frac{1}{x^2 - 49}$ clearly showing asymptotes and intercepts. **(Teacher-graded sketch)**',
      type: 'teacher_review',
      options: [
        { text: 'Sketch provided', imageUrl: '' }
      ],
      answer: 'sketch',
      solutionSteps: [
        {
          explanation: 'Find the vertical asymptotes by setting the denominator to zero.',
          workingOut: 'x^2 - 49 = 0 \\implies x = 7 \\text{ or } x = -7'
        },
        {
          explanation: 'Find the horizontal asymptote. As $x \\to \\pm\\infty$, the denominator approaches infinity, so $y \\to 0$.',
          workingOut: '\\text{Horizontal asymptote: } y = 0'
        },
        {
          explanation: 'Find the $y$-intercept by substituting $x = 0$.',
          workingOut: 'y = \\frac{1}{0^2 - 49} = -\\frac{1}{49}'
        },
        {
          explanation: 'Determine the behavior of the graph. For $-7 < x < 7$, the denominator is negative, so $y < 0$, creating a hill shape below the $x$-axis. For $x > 7$ or $x < -7$, $y > 0$, and the curves approach $y=0$.',
          workingOut: '\\text{See the reference sketch for the final shape.}'
        }
      ]
    }
  ];

  const main37 = {
    id: 'girr2020-mc37',
    topicId: 'y12a-exam-girr',
    c: '6A',
    t: 'Trig transformations and sketching',
    source: 'Girraween 2020 Trial Q37',
    type: 'multipart',
    difficulty: 'hard',
    question: 'Answer the following two parts:',
    subQuestions: subQuestions37,
    solutionSteps: [
      {
        explanation: 'Reference sketch for part (b):',
        workingOut: ' ' // Intentionally left blank to just show the explanation
      }
    ],
    graphData: { svg: makeSvg37b() }, // Display the reference sketch for part (b) in the main question body or solution
    updatedAt: FieldValue.serverTimestamp()
  };

  // 2. mc37s
  const subQuestions37s = [
    {
      id: 'girr2020-mc37as',
      question: 'The function $f(x) = \\cos x$ is transformed to $g(x) = \\frac{1}{2} \\cos 4x$. Describe in words how both the amplitude and period change in this transformation.',
      type: 'multiple_choice',
      options: [
        { text: 'Amplitude is halved and the period is divided by 4.', imageUrl: '' },
        { text: 'Amplitude is halved and the period is multiplied by 4.', imageUrl: '' },
        { text: 'Amplitude is multiplied by 2 and the period is divided by 4.', imageUrl: '' },
        { text: 'Amplitude is divided by 4 and the period is halved.', imageUrl: '' }
      ],
      answer: '0',
      solutionSteps: [
        {
          explanation: 'The standard function is $y = A \\cos(Bx)$. Here, $A = 1/2$ and $B = 4$.',
          workingOut: 'A = \\frac{1}{2}, \\quad B = 4'
        },
        {
          explanation: 'The amplitude changes from $1$ to $1/2$ (halved).',
          workingOut: '\\text{New Amplitude} = \\frac{1}{2}'
        },
        {
          explanation: 'The period changes from $2\\pi$ to $\\frac{2\\pi}{4} = \\frac{\\pi}{2}$ (divided by 4).',
          workingOut: '\\text{New Period} = \\frac{\\pi}{2}'
        }
      ]
    },
    {
      id: 'girr2020-mc37bs',
      question: 'Sketch $y = \\frac{1}{x^2 - 25}$ clearly showing asymptotes and intercepts. **(Teacher-graded sketch)**',
      type: 'teacher_review',
      options: [
        { text: 'Sketch provided', imageUrl: '' }
      ],
      answer: 'sketch',
      solutionSteps: [
        {
          explanation: 'Find vertical asymptotes by setting denominator to zero.',
          workingOut: 'x^2 - 25 = 0 \\implies x = 5, \\; x = -5'
        },
        {
          explanation: 'Find horizontal asymptote by taking the limit as $x \\to \\pm\\infty$.',
          workingOut: 'y = 0'
        },
        {
          explanation: 'Find the $y$-intercept.',
          workingOut: 'y = \\frac{1}{0 - 25} = -\\frac{1}{25}'
        }
      ]
    }
  ];

  const main37s = {
    id: 'girr2020-mc37s',
    topicId: 'y12a-exam-girr',
    c: '6A',
    t: 'Trig transformations and sketching',
    source: 'Girraween 2020 Trial Q37 (Similar)',
    type: 'multipart',
    difficulty: 'hard',
    question: 'Answer the following two parts:',
    subQuestions: subQuestions37s,
    graphData: { svg: makeSvg37bs() },
    updatedAt: FieldValue.serverTimestamp()
  };

  batch.set(db.collection('questions').doc('girr2020-mc37'), main37);
  batch.set(db.collection('questions').doc('girr2020-mc37s'), main37s);

  const toDelete = ['girr2020-mc37a', 'girr2020-mc37b', 'girr2020-mc37as', 'girr2020-mc37bs'];
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
  console.log("Created mc37 and mc37s multi-part questions in Firestore.");
  process.exit(0);
}

run().catch(console.error);
