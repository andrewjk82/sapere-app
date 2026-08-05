const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

function makeMc2Svg() {
  return `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #94a3b8; stroke-width: 2; }
.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
.grid { stroke: #e2e8f0; stroke-width: 1; stroke-dasharray: 4 4; }
</style>
</defs>
<rect width="350" height="200" fill="#ffffff" />
<g>
  <line x1="30" y1="160" x2="320" y2="160" class="axis" />
  <text x="310" y="180" class="label">t</text>
  <line x1="50" y1="180" x2="50" y2="20" class="axis" />
  <text x="25" y="30" class="label">v</text>
  <text x="35" y="180" class="label">0</text>
  
  <text x="165" y="180" class="label">6</text>
  <line x1="170" y1="155" x2="170" y2="165" class="axis" />
  <line x1="170" y1="160" x2="170" y2="40" class="grid" />
  
  <path d="M 50 140 Q 170 -60 290 140" class="curve" />
</g>
</svg>`;
}

function makeMc2sSvg() {
  return `<svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #94a3b8; stroke-width: 2; }
.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
.grid { stroke: #e2e8f0; stroke-width: 1; stroke-dasharray: 4 4; }
</style>
</defs>
<rect width="350" height="200" fill="#ffffff" />
<g>
  <line x1="30" y1="160" x2="320" y2="160" class="axis" />
  <text x="310" y="180" class="label">t</text>
  <line x1="50" y1="180" x2="50" y2="20" class="axis" />
  <text x="25" y="30" class="label">v</text>
  <text x="35" y="180" class="label">0</text>
  
  <text x="205" y="180" class="label">8</text>
  <line x1="210" y1="155" x2="210" y2="165" class="axis" />
  <line x1="210" y1="160" x2="210" y2="40" class="grid" />
  
  <path d="M 50 140 Q 210 -60 330 160" class="curve" />
</g>
</svg>`;
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // 1. Add SVG to mc2 and mc2s
  batch.update(db.collection('questions').doc('girr2020-mc2'), {
    graphData: { svg: makeMc2Svg() },
    updatedAt: FieldValue.serverTimestamp()
  });
  batch.update(db.collection('questions').doc('girr2020-mc2s'), {
    graphData: { svg: makeMc2sSvg() },
    updatedAt: FieldValue.serverTimestamp()
  });

  // 2. Consolidate mc30a,b,c
  const subQuestions30 = [
    {
      id: 'girr2020-mc30a',
      question: 'What is the length at birth ($t=0$)?',
      type: 'multiple_choice',
      options: [
        {text: '$0.4$ m', imageUrl: ''},
        {text: '$0.5$ m', imageUrl: ''},
        {text: '$0.6$ m', imageUrl: ''},
        {text: '$1.0$ m', imageUrl: ''}
      ],
      answer: '2',
      solutionSteps: [
        {
          explanation: 'To find the length at birth, we substitute $t = 0$ into the length equation.',
          workingOut: 'L = 5.2 - 4.6 e^{-k(0)}'
        },
        {
          explanation: 'Since $e^0 = 1$, we can solve for $L$.',
          workingOut: 'L = 5.2 - 4.6(1) = 0.6 \\text{ m}'
        }
      ]
    },
    {
      id: 'girr2020-mc30b',
      question: 'If the length of the animal is $4.45$ m when $t = 3$, find the value of $k$ (to 2 decimal places).',
      type: 'multiple_choice',
      options: [
        {text: '$0.50$', imageUrl: ''},
        {text: '$0.55$', imageUrl: ''},
        {text: '$0.60$', imageUrl: ''},
        {text: '$0.65$', imageUrl: ''}
      ],
      answer: '2',
      solutionSteps: [
        {
          explanation: 'Substitute the given values $L = 4.45$ and $t = 3$ into the equation.',
          workingOut: '4.45 = 5.2 - 4.6 e^{-3k}'
        },
        {
          explanation: 'Rearrange the equation to isolate the exponential term.',
          workingOut: '4.6 e^{-3k} = 5.2 - 4.45 \\\\ 4.6 e^{-3k} = 0.75'
        },
        {
          explanation: 'Divide by 4.6 and take the natural logarithm of both sides.',
          workingOut: 'e^{-3k} = \\frac{0.75}{4.6} \\\\ -3k = \\ln\\left(\\frac{0.75}{4.6}\\right)'
        },
        {
          explanation: 'Calculate the value of $k$.',
          workingOut: 'k = -\\frac{1}{3} \\ln\\left(\\frac{0.75}{4.6}\\right) \\approx 0.604 \\approx 0.60'
        }
      ]
    },
    {
      id: 'girr2020-mc30c',
      question: 'Find the limiting length of the animal as $t \\to \\infty$.',
      type: 'multiple_choice',
      options: [
        {text: '$4.6$ m', imageUrl: ''},
        {text: '$5.2$ m', imageUrl: ''},
        {text: '$10$ m', imageUrl: ''},
        {text: '$\\infty$', imageUrl: ''}
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'To find the limiting length, we evaluate the limit of $L$ as $t \\to \\infty$.',
          workingOut: '\\lim_{t \\to \\infty} L = \\lim_{t \\to \\infty} (5.2 - 4.6 e^{-kt})'
        },
        {
          explanation: 'Since $k > 0$, as $t$ becomes very large, $e^{-kt}$ approaches $0$.',
          workingOut: '\\lim_{t \\to \\infty} e^{-kt} = 0'
        },
        {
          explanation: 'Substitute this back into the limit expression.',
          workingOut: '\\lim_{t \\to \\infty} L = 5.2 - 4.6(0) = 5.2 \\text{ m}'
        }
      ]
    }
  ];

  const main30 = {
    id: 'girr2020-mc30',
    topicId: 'y12a-exam-girr',
    c: '5A',
    t: 'Exponential models',
    source: 'Girraween 2020 Trial Q30',
    type: 'multipart',
    difficulty: 'medium',
    question: 'The length $L$ in metres of a certain species of animal after $t$ years is modeled by the equation $L = 5.2 - 4.6 e^{-kt}$, where $k$ is a positive constant.',
    subQuestions: subQuestions30,
    updatedAt: FieldValue.serverTimestamp()
  };

  const subQuestions30s = [
    {
      id: 'girr2020-mc30as',
      question: 'What is the length at birth ($t=0$)?',
      type: 'multiple_choice',
      options: [
        {text: '$0.3$ m', imageUrl: ''},
        {text: '$0.5$ m', imageUrl: ''},
        {text: '$1.0$ m', imageUrl: ''},
        {text: '$0.8$ m', imageUrl: ''}
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'To find the length at birth, we substitute $t = 0$ into the length equation.',
          workingOut: 'L = 6.0 - 5.5 e^{-k(0)}'
        },
        {
          explanation: 'Since $e^0 = 1$, we can solve for $L$.',
          workingOut: 'L = 6.0 - 5.5(1) = 0.5 \\text{ m}'
        }
      ]
    },
    {
      id: 'girr2020-mc30bs',
      question: 'If the length of the animal is $5.0$ m when $t = 2$, find the value of $k$ (to 2 decimal places).',
      type: 'multiple_choice',
      options: [
        {text: '$0.75$', imageUrl: ''},
        {text: '$0.80$', imageUrl: ''},
        {text: '$0.85$', imageUrl: ''},
        {text: '$0.90$', imageUrl: ''}
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'Substitute the given values $L = 5.0$ and $t = 2$ into the equation.',
          workingOut: '5.0 = 6.0 - 5.5 e^{-2k}'
        },
        {
          explanation: 'Rearrange the equation to isolate the exponential term.',
          workingOut: '5.5 e^{-2k} = 6.0 - 5.0 \\\\ 5.5 e^{-2k} = 1.0'
        },
        {
          explanation: 'Divide by 5.5 and take the natural logarithm of both sides.',
          workingOut: 'e^{-2k} = \\frac{1}{5.5} \\\\ -2k = \\ln\\left(\\frac{1}{5.5}\\right)'
        },
        {
          explanation: 'Calculate the value of $k$.',
          workingOut: 'k = -\\frac{1}{2} \\ln\\left(\\frac{1}{5.5}\\right) \\approx 0.852 \\approx 0.85'
        }
      ]
    },
    {
      id: 'girr2020-mc30cs',
      question: 'Find the limiting length of the animal as $t \\to \\infty$.',
      type: 'multiple_choice',
      options: [
        {text: '$5.5$ m', imageUrl: ''},
        {text: '$6.0$ m', imageUrl: ''},
        {text: '$12$ m', imageUrl: ''},
        {text: '$\\infty$', imageUrl: ''}
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'To find the limiting length, we evaluate the limit of $L$ as $t \\to \\infty$.',
          workingOut: '\\lim_{t \\to \\infty} L = \\lim_{t \\to \\infty} (6.0 - 5.5 e^{-kt})'
        },
        {
          explanation: 'Since $k > 0$, as $t$ becomes very large, $e^{-kt}$ approaches $0$.',
          workingOut: '\\lim_{t \\to \\infty} e^{-kt} = 0'
        },
        {
          explanation: 'Substitute this back into the limit expression.',
          workingOut: '\\lim_{t \\to \\infty} L = 6.0 - 5.5(0) = 6.0 \\text{ m}'
        }
      ]
    }
  ];

  const main30s = {
    id: 'girr2020-mc30s',
    topicId: 'y12a-exam-girr',
    c: '5A',
    t: 'Exponential models',
    source: 'Girraween 2020 Trial Q30 (Similar)',
    type: 'multipart',
    difficulty: 'medium',
    question: 'The length $L$ in metres of a certain species of animal after $t$ years is modeled by the equation $L = 6.0 - 5.5 e^{-kt}$, where $k$ is a positive constant.',
    subQuestions: subQuestions30s,
    updatedAt: FieldValue.serverTimestamp()
  };

  batch.set(db.collection('questions').doc('girr2020-mc30'), main30);
  batch.set(db.collection('questions').doc('girr2020-mc30s'), main30s);

  // Delete old docs
  const toDelete = ['girr2020-mc30a', 'girr2020-mc30b', 'girr2020-mc30c', 'girr2020-mc30as', 'girr2020-mc30bs', 'girr2020-mc30cs'];
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
  console.log("Updated mc2 graphs and consolidated mc30 in Firestore.");
  process.exit(0);
}

run().catch(console.error);
