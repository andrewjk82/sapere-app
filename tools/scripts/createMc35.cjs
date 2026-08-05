const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

function makeSvg35() {
  return `<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #94a3b8; stroke-width: 2; }
.curve { stroke: #3b82f6; stroke-width: 2; fill: none; }
.line { stroke: #64748b; stroke-width: 1.5; stroke-dasharray: 4 4; }
.solid-line { stroke: #1e293b; stroke-width: 1.5; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
.pt-label { font-size: 14px; fill: #1e293b; font-weight: bold; font-family: sans-serif; }
.shaded { fill: #e2e8f0; stroke: none; }
</style>
</defs>
<rect width="400" height="320" fill="#ffffff" />
<g>
  <!-- Shaded Area M A L C Q ctrl B Z -->
  <path d="M 120,240 L 320,40 Q 280,180 240,240 Z" class="shaded" />
  
  <!-- Axes -->
  <line x1="20" y1="240" x2="380" y2="240" class="axis" />
  <text x="370" y="260" class="label">x</text>
  <line x1="40" y1="300" x2="40" y2="20" class="axis" />
  <text x="25" y="30" class="label">y</text>
  <text x="25" y="260" class="label">O</text>
  
  <!-- Dashed line y=10 -->
  <line x1="40" y1="40" x2="320" y2="40" class="line" />
  
  <!-- Parabola -->
  <path d="M 40,40 Q 180,530 320,40" class="curve" />
  
  <!-- Line AC -->
  <line x1="120" y1="240" x2="320" y2="40" class="solid-line" />
  
  <!-- Labels -->
  <text x="105" y="260" class="pt-label">A</text>
  <text x="245" y="260" class="pt-label">B</text>
  <text x="325" y="45" class="pt-label">C</text>
</g>
</svg>`;
}

function makeSvg35s() {
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #94a3b8; stroke-width: 2; }
.curve { stroke: #3b82f6; stroke-width: 2; fill: none; }
.line { stroke: #64748b; stroke-width: 1.5; stroke-dasharray: 4 4; }
.solid-line { stroke: #1e293b; stroke-width: 1.5; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
.pt-label { font-size: 14px; fill: #1e293b; font-weight: bold; font-family: sans-serif; }
.shaded { fill: #e2e8f0; stroke: none; }
</style>
</defs>
<rect width="400" height="300" fill="#ffffff" />
<g>
  <!-- Shaded Area M A L C Q ctrl B Z -->
  <path d="M 100,250 L 280,70 Q 250,190 220,250 Z" class="shaded" />
  
  <!-- Axes -->
  <line x1="20" y1="250" x2="380" y2="250" class="axis" />
  <text x="370" y="270" class="label">x</text>
  <line x1="40" y1="290" x2="40" y2="20" class="axis" />
  <text x="25" y="30" class="label">y</text>
  <text x="25" y="270" class="label">O</text>
  
  <!-- Dashed line y=12 -->
  <line x1="40" y1="70" x2="280" y2="70" class="line" />
  
  <!-- Parabola -->
  <path d="M 40,70 Q 160,550 280,70" class="curve" />
  
  <!-- Line AC -->
  <line x1="100" y1="250" x2="280" y2="70" class="solid-line" />
  
  <!-- Labels -->
  <text x="85" y="270" class="pt-label">A</text>
  <text x="225" y="270" class="pt-label">B</text>
  <text x="285" y="75" class="pt-label">C</text>
</g>
</svg>`;
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // 1. mc35
  const subQuestions35 = [
    {
      id: 'girr2020-mc35a',
      question: 'Find the $x$-coordinates of Points $A$ and $B$.',
      type: 'multiple_choice',
      options: [
        { text: '$x = 1, 5$', imageUrl: '' },
        { text: '$x = 2, 5$', imageUrl: '' },
        { text: '$x = 2, 7$', imageUrl: '' },
        { text: '$x = 0, 10$', imageUrl: '' }
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'Points A and B are the $x$-intercepts of the curve, so we set $y = 0$.',
          workingOut: 'x^2 - 7x + 10 = 0'
        },
        {
          explanation: 'Factorize the quadratic equation.',
          workingOut: '(x - 2)(x - 5) = 0'
        },
        {
          explanation: 'Solve for $x$ to find the coordinates.',
          workingOut: 'x = 2 \\text{ or } x = 5'
        }
      ]
    },
    {
      id: 'girr2020-mc35b',
      question: 'Write down the coordinates of $C$.',
      type: 'multiple_choice',
      options: [
        { text: '$(10, 7)$', imageUrl: '' },
        { text: '$(7, 10)$', imageUrl: '' },
        { text: '$(7, 5)$', imageUrl: '' },
        { text: '$(5, 10)$', imageUrl: '' }
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'Point C has the same $y$-coordinate as the $y$-intercept. The $y$-intercept is at $x=0$.',
          workingOut: 'y = 0^2 - 7(0) + 10 = 10'
        },
        {
          explanation: 'Set $y=10$ to find the $x$-coordinate of C.',
          workingOut: 'x^2 - 7x + 10 = 10 \\\\ x^2 - 7x = 0 \\\\ x(x - 7) = 0'
        },
        {
          explanation: 'Since $x=0$ is the $y$-intercept, point C corresponds to $x=7$.',
          workingOut: 'C = (7, 10)'
        }
      ]
    },
    {
      id: 'girr2020-mc35c',
      question: 'Evaluate $\\int_0^2 (x^2 - 7x + 10) dx$.',
      type: 'multiple_choice',
      options: [
        { text: '$8 \\frac{1}{3}$', imageUrl: '' },
        { text: '$9 \\frac{2}{3}$', imageUrl: '' },
        { text: '$8 \\frac{2}{3}$', imageUrl: '' },
        { text: '$10 \\frac{1}{3}$', imageUrl: '' }
      ],
      answer: '2',
      solutionSteps: [
        {
          explanation: 'Find the antiderivative of the function.',
          workingOut: '\\int (x^2 - 7x + 10) dx = \\frac{x^3}{3} - \\frac{7x^2}{2} + 10x'
        },
        {
          explanation: 'Evaluate the definite integral from $0$ to $2$.',
          workingOut: '\\left[ \\frac{x^3}{3} - \\frac{7x^2}{2} + 10x \\right]_0^2 = \\left( \\frac{8}{3} - \\frac{28}{2} + 20 \\right) - (0)'
        },
        {
          explanation: 'Simplify the result.',
          workingOut: '\\frac{8}{3} - 14 + 20 = \\frac{8}{3} + 6 = \\frac{8}{3} + \\frac{18}{3} = \\frac{26}{3} = 8 \\frac{2}{3}'
        }
      ]
    },
    {
      id: 'girr2020-mc35d',
      question: 'Hence, or otherwise, find the area of the shaded region.',
      type: 'multiple_choice',
      options: [
        { text: '$8 \\frac{2}{3}$', imageUrl: '' },
        { text: '$15 \\frac{1}{3}$', imageUrl: '' },
        { text: '$17 \\frac{2}{3}$', imageUrl: '' },
        { text: '$16 \\frac{1}{3}$', imageUrl: '' }
      ],
      answer: '3',
      solutionSteps: [
        {
          explanation: 'The shaded area is bounded by the line $AC$, the $x$-axis from $x=2$ to $x=5$, and the curve $BC$ from $x=5$ to $x=7$. It can be calculated as the area of the triangle formed by $(2,0), (7,0), (7,10)$ minus the area under the curve from $x=5$ to $x=7$.',
          workingOut: '\\text{Area} = A_{\\triangle} - \\int_5^7 (x^2 - 7x + 10) dx'
        },
        {
          explanation: 'The area of the triangle is $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$. The base is $7 - 2 = 5$ and the height is $10$.',
          workingOut: 'A_{\\triangle} = \\frac{1}{2} \\times 5 \\times 10 = 25'
        },
        {
          explanation: 'By the symmetry of the parabola, the area under the curve from $x=5$ to $x=7$ is equal to the area from $x=0$ to $x=2$, which we calculated in part (c).',
          workingOut: '\\int_5^7 (x^2 - 7x + 10) dx = \\int_0^2 (x^2 - 7x + 10) dx = \\frac{26}{3}'
        },
        {
          explanation: "Subtract this from the triangle's area.",
          workingOut: '\\text{Area} = 25 - \\frac{26}{3} = \\frac{75}{3} - \\frac{26}{3} = \\frac{49}{3} = 16 \\frac{1}{3}'
        }
      ]
    }
  ];

  const main35 = {
    id: 'girr2020-mc35',
    topicId: 'y12a-exam-girr',
    c: '1C',
    t: 'Integration area and quadratics',
    source: 'Girraween 2020 Trial Q35',
    type: 'multipart',
    difficulty: 'hard',
    question: 'The diagram shows the curve with equation $y = x^2 - 7x + 10$. The curve intersects the $x$-axis at points $A$ and $B$. The point $C$ on the curve has the same $y$-coordinate as the $y$-intercept of the curve.',
    graphData: { svg: makeSvg35() },
    subQuestions: subQuestions35,
    updatedAt: FieldValue.serverTimestamp()
  };

  // 2. mc35s
  const subQuestions35s = [
    {
      id: 'girr2020-mc35as',
      question: 'Find the $x$-coordinates of Points $A$ and $B$.',
      type: 'multiple_choice',
      options: [
        { text: '$x = 2, 4$', imageUrl: '' },
        { text: '$x = 2, 6$', imageUrl: '' },
        { text: '$x = 4, 8$', imageUrl: '' },
        { text: '$x = 0, 12$', imageUrl: '' }
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'Points A and B are the $x$-intercepts, so we set $y = 0$.',
          workingOut: 'x^2 - 8x + 12 = 0'
        },
        {
          explanation: 'Factorize the quadratic equation.',
          workingOut: '(x - 2)(x - 6) = 0'
        },
        {
          explanation: 'Solve for $x$.',
          workingOut: 'x = 2 \\text{ or } x = 6'
        }
      ]
    },
    {
      id: 'girr2020-mc35bs',
      question: 'Write down the coordinates of $C$.',
      type: 'multiple_choice',
      options: [
        { text: '$(12, 8)$', imageUrl: '' },
        { text: '$(6, 12)$', imageUrl: '' },
        { text: '$(8, 12)$', imageUrl: '' },
        { text: '$(8, 6)$', imageUrl: '' }
      ],
      answer: '2',
      solutionSteps: [
        {
          explanation: 'Point C has the same $y$-coordinate as the $y$-intercept. Find the $y$-intercept.',
          workingOut: 'y = 0^2 - 8(0) + 12 = 12'
        },
        {
          explanation: 'Set $y=12$ to find the $x$-coordinate of C.',
          workingOut: 'x^2 - 8x + 12 = 12 \\\\ x^2 - 8x = 0 \\\\ x(x - 8) = 0'
        },
        {
          explanation: 'Since $x=0$ is the $y$-intercept, point C is at $x=8$.',
          workingOut: 'C = (8, 12)'
        }
      ]
    },
    {
      id: 'girr2020-mc35cs',
      question: 'Evaluate $\\int_0^2 (x^2 - 8x + 12) dx$.',
      type: 'multiple_choice',
      options: [
        { text: '$10 \\frac{2}{3}$', imageUrl: '' },
        { text: '$11 \\frac{1}{3}$', imageUrl: '' },
        { text: '$9 \\frac{2}{3}$', imageUrl: '' },
        { text: '$12$', imageUrl: '' }
      ],
      answer: '0',
      solutionSteps: [
        {
          explanation: 'Find the antiderivative.',
          workingOut: '\\int (x^2 - 8x + 12) dx = \\frac{x^3}{3} - 4x^2 + 12x'
        },
        {
          explanation: 'Evaluate from $0$ to $2$.',
          workingOut: '\\left[ \\frac{x^3}{3} - 4x^2 + 12x \\right]_0^2 = \\left( \\frac{8}{3} - 16 + 24 \\right) - (0)'
        },
        {
          explanation: 'Simplify.',
          workingOut: '\\frac{8}{3} + 8 = \\frac{8}{3} + \\frac{24}{3} = \\frac{32}{3} = 10 \\frac{2}{3}'
        }
      ]
    },
    {
      id: 'girr2020-mc35ds',
      question: 'Hence, or otherwise, find the area of the shaded region.',
      type: 'multiple_choice',
      options: [
        { text: '$24 \\frac{1}{3}$', imageUrl: '' },
        { text: '$25 \\frac{1}{3}$', imageUrl: '' },
        { text: '$26 \\frac{2}{3}$', imageUrl: '' },
        { text: '$28$', imageUrl: '' }
      ],
      answer: '1',
      solutionSteps: [
        {
          explanation: 'The shaded area is bounded by the line $AC$, the $x$-axis from $x=2$ to $x=6$, and the curve $BC$ from $x=6$ to $x=8$. It equals the area of the triangle formed by $(2,0), (8,0), (8,12)$ minus the area under the curve from $x=6$ to $x=8$.',
          workingOut: '\\text{Area} = A_{\\triangle} - \\int_6^8 (x^2 - 8x + 12) dx'
        },
        {
          explanation: 'The triangle has base $8 - 2 = 6$ and height $12$.',
          workingOut: 'A_{\\triangle} = \\frac{1}{2} \\times 6 \\times 12 = 36'
        },
        {
          explanation: 'By the symmetry of the parabola (axis of symmetry $x=4$), the area under the curve from $x=6$ to $x=8$ is equal to the area from $x=0$ to $x=2$.',
          workingOut: '\\int_6^8 (x^2 - 8x + 12) dx = \\int_0^2 (x^2 - 8x + 12) dx = \\frac{32}{3}'
        },
        {
          explanation: "Subtract this from the triangle's area.",
          workingOut: '\\text{Area} = 36 - \\frac{32}{3} = \\frac{108}{3} - \\frac{32}{3} = \\frac{76}{3} = 25 \\frac{1}{3}'
        }
      ]
    }
  ];

  const main35s = {
    id: 'girr2020-mc35s',
    topicId: 'y12a-exam-girr',
    c: '1C',
    t: 'Integration area and quadratics',
    source: 'Girraween 2020 Trial Q35 (Similar)',
    type: 'multipart',
    difficulty: 'hard',
    question: 'The diagram shows the curve with equation $y = x^2 - 8x + 12$. The curve intersects the $x$-axis at points $A$ and $B$. The point $C$ on the curve has the same $y$-coordinate as the $y$-intercept of the curve.',
    graphData: { svg: makeSvg35s() },
    subQuestions: subQuestions35s,
    updatedAt: FieldValue.serverTimestamp()
  };

  batch.set(db.collection('questions').doc('girr2020-mc35'), main35);
  batch.set(db.collection('questions').doc('girr2020-mc35s'), main35s);

  const toDelete = ['girr2020-mc35a', 'girr2020-mc35as'];
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
  console.log("Created mc35 and mc35s multi-part questions in Firestore.");
  process.exit(0);
}

run().catch(console.error);
