const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

function makeSvg38b() {
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #1e293b; stroke-width: 1.5; }
.curve { stroke: #3b82f6; stroke-width: 2; fill: none; }
.secant { stroke: #ef4444; stroke-width: 1.5; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
.shaded { fill: #fca5a5; opacity: 0.5; stroke: none; }
.dashed { stroke: #94a3b8; stroke-width: 1; stroke-dasharray: 4 4; }
</style>
<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b" />
</marker>
</defs>
<rect width="400" height="300" fill="#ffffff" />
<g>
  <!-- Axes -->
  <!-- Origin at (50, 220) -->
  <line x1="30" y1="220" x2="350" y2="220" class="axis" marker-end="url(#arrow)" />
  <text x="360" y="225" class="label">x</text>
  
  <line x1="50" y1="240" x2="50" y2="30" class="axis" marker-end="url(#arrow)" />
  <text x="35" y="40" class="label">y</text>
  <text x="35" y="235" class="label">0</text>
  
  <!-- Let's map x: 1 unit = 80px -> x=1 is 130, x=2 is 210, x=3 is 290 -->
  <!-- Let's map y: 1 unit = 120px -> ln(2) approx 0.693 -> 83px -> y = 220 - 83 = 137 -->
  <!-- ln(3) approx 1.098 -> 132px -> y = 220 - 132 = 88 -->
  
  <text x="125" y="240" class="label">1</text>
  <text x="205" y="240" class="label">2</text>
  <text x="285" y="240" class="label">3</text>
  
  <line x1="45" y1="100" x2="55" y2="100" class="axis" />
  <text x="30" y="105" class="label">1</text>
  
  <!-- Shaded region (Trapezoids) -->
  <polygon points="130,220 210,137 210,220" class="shaded" />
  <polygon points="210,220 210,137 290,88 290,220" class="shaded" />
  
  <!-- Vertical lines -->
  <line x1="210" y1="220" x2="210" y2="137" class="dashed" />
  <line x1="290" y1="220" x2="290" y2="88" class="dashed" />
  
  <!-- Curve y = ln(x) from x=0.5 to x=3.3 -->
  <!-- We'll just draw a quadratic approximation for the curve that passes through these points -->
  <!-- Curve should be slightly ABOVE the secants since ln(x) is concave down -->
  <path d="M 90,295 Q 150,110 290,88 T 330,68" class="curve" />
  
  <!-- Secant lines -->
  <line x1="130" y1="220" x2="210" y2="137" class="secant" />
  <line x1="210" y1="137" x2="290" y2="88" class="secant" />
  
  <!-- Text -->
  <text x="150" y="270" class="label">Trapezoids lie below</text>
  <text x="150" y="290" class="label">the curve y = ln(x)</text>
</g>
</svg>`;
}

function makeSvg38bs() {
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #1e293b; stroke-width: 1.5; }
.curve { stroke: #3b82f6; stroke-width: 2; fill: none; }
.secant { stroke: #ef4444; stroke-width: 1.5; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
.shaded { fill: #fca5a5; opacity: 0.5; stroke: none; }
.dashed { stroke: #94a3b8; stroke-width: 1; stroke-dasharray: 4 4; }
</style>
<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b" />
</marker>
</defs>
<rect width="400" height="300" fill="#ffffff" />
<g>
  <!-- Axes -->
  <!-- Origin at (50, 260) -->
  <line x1="30" y1="260" x2="350" y2="260" class="axis" marker-end="url(#arrow)" />
  <text x="360" y="265" class="label">x</text>
  
  <line x1="50" y1="280" x2="50" y2="20" class="axis" marker-end="url(#arrow)" />
  <text x="35" y="30" class="label">y</text>
  <text x="35" y="275" class="label">0</text>
  
  <!-- Map x: 1 unit = 100px -> x=1 is 150, x=2 is 250 -->
  <!-- Map y: y=e^x. e^0 = 1, e^1 = 2.718, e^2 = 7.389 -->
  <!-- Let's map y=8 to 20px, y=0 to 260px. So 1 unit = 30px -->
  <!-- y=1 -> 260 - 30 = 230 -->
  <!-- y=e (2.718) -> 260 - 81.5 = 178.5 -->
  <!-- y=e^2 (7.389) -> 260 - 221.7 = 38.3 -->
  
  <text x="145" y="280" class="label">1</text>
  <text x="245" y="280" class="label">2</text>
  
  <!-- Shaded region (Trapezoids) -->
  <polygon points="50,260 50,230 150,178.5 150,260" class="shaded" />
  <polygon points="150,260 150,178.5 250,38.3 250,260" class="shaded" />
  
  <!-- Vertical lines -->
  <line x1="150" y1="260" x2="150" y2="178.5" class="dashed" />
  <line x1="250" y1="260" x2="250" y2="38.3" class="dashed" />
  
  <!-- Curve y = e^x -->
  <!-- Concave up curve that lies BELOW the secant lines -->
  <path d="M 50,230 Q 120,225 150,178.5 Q 210,120 250,38.3" class="curve" />
  
  <!-- Secant lines -->
  <line x1="50" y1="230" x2="150" y2="178.5" class="secant" />
  <line x1="150" y1="178.5" x2="250" y2="38.3" class="secant" />
  
  <!-- Text -->
  <text x="80" y="80" class="label">Trapezoids lie above</text>
  <text x="80" y="100" class="label">the curve y = e^x</text>
</g>
</svg>`;
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // 1. mc38
  const subQuestions38 = [
    {
      id: 'girr2020-mc38a',
      question: 'Use the trapezoidal rule with three function values to find an approximation to $\\int_1^3 \\ln x \\,dx$.',
      type: 'multiple_choice',
      options: [
        { text: '$\\frac{1}{2} \\ln 12$', imageUrl: '' },
        { text: '$\\ln 12$', imageUrl: '' },
        { text: '$\\frac{1}{2} \\ln 6$', imageUrl: '' },
        { text: '$\\frac{1}{2} \\ln 5$', imageUrl: '' }
      ],
      answer: '0',
      solutionSteps: [
        {
          explanation: 'Set up a table of values for $x$ and $y = \\ln x$ using three function values. The domain is from $x=1$ to $x=3$, so the step size is $h = 1$.',
          workingOut: '\\begin{array}{|c|c|c|c|} \\hline x & 1 & 2 & 3 \\\\ \\hline y & 0 & \\ln 2 & \\ln 3 \\\\ \\hline \\end{array}'
        },
        {
          explanation: 'Apply the trapezoidal rule formula: $\\int_a^b f(x) dx \\approx \\frac{h}{2} [y_0 + 2(y_1) + y_2]$.',
          workingOut: '\\int_1^3 \\ln x \\,dx \\approx \\frac{1}{2} (0 + 2\\ln 2 + \\ln 3)'
        },
        {
          explanation: 'Simplify the expression using logarithm laws ($2\\ln 2 = \\ln(2^2) = \\ln 4$).',
          workingOut: '\\approx \\frac{1}{2} (\\ln 4 + \\ln 3)'
        },
        {
          explanation: 'Combine the logarithms ($\\ln a + \\ln b = \\ln(ab)$).',
          workingOut: '\\approx \\frac{1}{2} \\ln 12'
        }
      ]
    },
    {
      id: 'girr2020-mc38b',
      question: 'State whether the approximation found in the previous part is greater than or less than the exact value of $\\int_1^3 \\ln x \\,dx$.',
      type: 'multiple_choice',
      options: [
        { text: 'Less than, because the curve is concave down.', imageUrl: '' },
        { text: 'Greater than, because the curve is concave up.', imageUrl: '' },
        { text: 'Greater than, because the curve is concave down.', imageUrl: '' },
        { text: 'Less than, because the curve is concave up.', imageUrl: '' }
      ],
      answer: '0',
      solutionSteps: [
        {
          explanation: 'Consider the shape of the curve $y = \\ln x$. The second derivative $y\'\' = -\\frac{1}{x^2}$ is always negative for $x > 0$, meaning the curve is concave down.',
          workingOut: '\\text{Curve is concave down.}'
        },
        {
          explanation: 'When applying the trapezoidal rule to a concave down curve, the straight line segments (secants) that form the top of the trapezoids lie entirely below the actual curve.',
          workingOut: '\\text{Trapezoids} < \\text{Actual Area}'
        },
        {
          explanation: 'Therefore, the area calculated using the trapezoids is less than the exact area under the curve.',
          workingOut: '\\text{Approximation is less than the exact value.}'
        }
      ]
    }
  ];

  const main38 = {
    id: 'girr2020-mc38',
    topicId: 'y12a-exam-girr',
    c: '4C',
    t: 'Trapezoidal rule and concavity',
    source: 'Girraween 2020 Trial Q38',
    type: 'multipart',
    difficulty: 'hard',
    question: 'Answer the following two parts:',
    subQuestions: subQuestions38,
    solutionSteps: [
      {
        explanation: 'Reference sketch for part (b):',
        workingOut: ' '
      }
    ],
    graphData: { svg: makeSvg38b() },
    updatedAt: FieldValue.serverTimestamp()
  };

  // 2. mc38s
  const subQuestions38s = [
    {
      id: 'girr2020-mc38as',
      question: 'Use the trapezoidal rule with three function values to find an approximation to $\\int_0^2 e^x \\,dx$.',
      type: 'multiple_choice',
      options: [
        { text: '$\\frac{1}{2} (1 + e)^2$', imageUrl: '' },
        { text: '$(1 + e)^2$', imageUrl: '' },
        { text: '$\\frac{1}{2} (1 + e^2)$', imageUrl: '' },
        { text: '$\\frac{1}{2} (1 + 2e)$', imageUrl: '' }
      ],
      answer: '0',
      solutionSteps: [
        {
          explanation: 'Set up a table of values using 3 function values. The domain is $[0, 2]$, so $h = 1$.',
          workingOut: '\\begin{array}{|c|c|c|c|} \\hline x & 0 & 1 & 2 \\\\ \\hline y & 1 & e & e^2 \\\\ \\hline \\end{array}'
        },
        {
          explanation: 'Apply the trapezoidal rule.',
          workingOut: '\\int_0^2 e^x \\,dx \\approx \\frac{1}{2} [1 + 2e + e^2]'
        },
        {
          explanation: 'Recognize the perfect square in the bracket.',
          workingOut: '\\approx \\frac{1}{2} (1 + e)^2'
        }
      ]
    },
    {
      id: 'girr2020-mc38bs',
      question: 'State whether the approximation found in the previous part is greater than or less than the exact value of $\\int_0^2 e^x \\,dx$.',
      type: 'multiple_choice',
      options: [
        { text: 'Greater than, because the curve is concave up.', imageUrl: '' },
        { text: 'Less than, because the curve is concave down.', imageUrl: '' },
        { text: 'Greater than, because the curve is concave down.', imageUrl: '' },
        { text: 'Less than, because the curve is concave up.', imageUrl: '' }
      ],
      answer: '0',
      solutionSteps: [
        {
          explanation: 'The function $y = e^x$ has a positive second derivative ($y\'\' = e^x > 0$), meaning the curve is concave up.',
          workingOut: '\\text{Curve is concave up.}'
        },
        {
          explanation: 'For a concave up curve, the secant lines connecting the points on the curve lie entirely above the curve.',
          workingOut: '\\text{Trapezoids} > \\text{Actual Area}'
        },
        {
          explanation: 'Therefore, the trapezoidal approximation overestimates the exact integral.',
          workingOut: '\\text{Approximation is greater than the exact value.}'
        }
      ]
    }
  ];

  const main38s = {
    id: 'girr2020-mc38s',
    topicId: 'y12a-exam-girr',
    c: '4C',
    t: 'Trapezoidal rule and concavity',
    source: 'Girraween 2020 Trial Q38 (Similar)',
    type: 'multipart',
    difficulty: 'hard',
    question: 'Answer the following two parts:',
    subQuestions: subQuestions38s,
    solutionSteps: [
      {
        explanation: 'Reference sketch for part (b):',
        workingOut: ' '
      }
    ],
    graphData: { svg: makeSvg38bs() },
    updatedAt: FieldValue.serverTimestamp()
  };

  batch.set(db.collection('questions').doc('girr2020-mc38'), main38);
  batch.set(db.collection('questions').doc('girr2020-mc38s'), main38s);

  const toDelete = ['girr2020-mc38a', 'girr2020-mc38b', 'girr2020-mc38as', 'girr2020-mc38bs'];
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
  console.log("Created mc38 and mc38s multi-part questions in Firestore.");
  process.exit(0);
}

run().catch(console.error);
