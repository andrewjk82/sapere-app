const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ─── Shared SVG builder ───
  function makeSVG(highlightSeg) {
    const pts = { A: [1, 1], B: [5, 4], C: [2, 8], D: [-2, 5] };
    const segColors = { AB: '#6366f1', BC: '#6366f1', CD: '#6366f1', DA: '#6366f1' };
    if (highlightSeg) {
      Object.keys(segColors).forEach(k => segColors[k] = '#cbd5e1');
      segColors[highlightSeg] = '#ef4444';
    }
    const cols = { A: '#4f46e5', B: '#4f46e5', C: '#4f46e5', D: '#4f46e5' };
    return `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="260" height="260" viewBox="-4 -10 12 12" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#e2e8f0" stroke-width="0.05">
    ${[-4,-3,-2,-1,0,1,2,3,4,5,6,7].map(i=>`<line x1="${i}" y1="-10" x2="${i}" y2="2"/>`).join('')}
    ${Array.from({length:13},(_,i)=>i-10).map(i=>`<line x1="-4" y1="${i}" x2="8" y2="${i}"/>`).join('')}
  </g>
  <line x1="-4" y1="0" x2="8" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
  <line x1="0" y1="-10" x2="0" y2="2" stroke="#94a3b8" stroke-width="0.12"/>
  <line x1="${pts.A[0]}" y1="${-pts.A[1]}" x2="${pts.B[0]}" y2="${-pts.B[1]}" stroke="${segColors.AB}" stroke-width="0.14"/>
  <line x1="${pts.B[0]}" y1="${-pts.B[1]}" x2="${pts.C[0]}" y2="${-pts.C[1]}" stroke="${segColors.BC}" stroke-width="0.14"/>
  <line x1="${pts.C[0]}" y1="${-pts.C[1]}" x2="${pts.D[0]}" y2="${-pts.D[1]}" stroke="${segColors.CD}" stroke-width="0.14"/>
  <line x1="${pts.D[0]}" y1="${-pts.D[1]}" x2="${pts.A[0]}" y2="${-pts.A[1]}" stroke="${segColors.DA}" stroke-width="0.14"/>
  <circle cx="${pts.A[0]}" cy="${-pts.A[1]}" r="0.2" fill="${cols.A}"/>
  <circle cx="${pts.B[0]}" cy="${-pts.B[1]}" r="0.2" fill="${cols.B}"/>
  <circle cx="${pts.C[0]}" cy="${-pts.C[1]}" r="0.2" fill="${cols.C}"/>
  <circle cx="${pts.D[0]}" cy="${-pts.D[1]}" r="0.2" fill="${cols.D}"/>
  <text x="1.2" y="-0.7" font-size="0.6" font-family="sans-serif" fill="${cols.A}">A(1, 1)</text>
  <text x="5.2" y="-4.2" font-size="0.6" font-family="sans-serif" fill="${cols.B}">B(b, 4)</text>
  <text x="2.2" y="-8.2" font-size="0.6" font-family="sans-serif" fill="${cols.C}">C(2, c)</text>
  <text x="-4.2" y="-5.2" font-size="0.6" font-family="sans-serif" fill="${cols.D}">D</text>
</svg>
</div>`;
  }

  const svgBase = makeSVG(null);
  const svgAB   = makeSVG('AB');
  const svgBC   = makeSVG('BC');
  const svgCD   = makeSVG('CD');
  const svgDA   = makeSVG('DA');

  const subQuestions = [
    // ─── q6a: Find b. Answer b=5. Correct at D (index 3) ───
    {
      id: 'y9-11i-q6a',
      type: 'multiple_choice',
      question: 'a) Find the value of \\(b\\).',
      options: [
        { text: '\\(b = 3\\)', imageUrl: '' },
        { text: '\\(b = 2\\)', imageUrl: '' },
        { text: '\\(b = 7\\)', imageUrl: '' },
        { text: '\\(b = 5\\)', imageUrl: '' }
      ],
      answer: '\\(b = 5\\)',
      solutionSteps: [
        {
          explanation: 'We know \\(A(1, 1)\\), \\(B(b, 4)\\), and \\(m_{AB} = \\dfrac{3}{4}\\). Write the gradient formula and set it equal to \\(\\dfrac{3}{4}\\).',
          workingOut: '\\(m_{AB} = \\dfrac{4 - 1}{b - 1} = \\dfrac{3}{b - 1}\\)',
          graphData: { html: svgAB }
        },
        {
          explanation: 'Set equal to the given gradient and solve for \\(b\\).',
          workingOut: '\\(\\dfrac{3}{b-1} = \\dfrac{3}{4} \\implies b - 1 = 4 \\implies b = 5\\)',
          graphData: null
        }
      ],
      graphData: null
    },
    // ─── q6b: Length of AB. Answer 5. Correct at B (index 1) ───
    {
      id: 'y9-11i-q6b',
      type: 'multiple_choice',
      question: 'b) Find the length of \\(AB\\).',
      options: [
        { text: '\\(4\\)', imageUrl: '' },
        { text: '\\(5\\)', imageUrl: '' },
        { text: '\\(3\\sqrt{2}\\)', imageUrl: '' },
        { text: '\\(\\sqrt{7}\\)', imageUrl: '' }
      ],
      answer: '\\(5\\)',
      solutionSteps: [
        {
          explanation: 'Use the distance formula with \\(A(1, 1)\\) and \\(B(5, 4)\\).',
          workingOut: '\\(AB = \\sqrt{(5-1)^2 + (4-1)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\)',
          graphData: { html: svgAB }
        }
      ],
      graphData: null
    },
    // ─── q6c: Find c. Answer c=8. Correct at C (index 2) ───
    {
      id: 'y9-11i-q6c',
      type: 'multiple_choice',
      question: 'c) The point \\(C\\) has coordinates \\((2, c)\\), where \\(c\\) is a positive integer. Find the value of \\(c\\).',
      options: [
        { text: '\\(c = 6\\)', imageUrl: '' },
        { text: '\\(c = 4\\)', imageUrl: '' },
        { text: '\\(c = 8\\)', imageUrl: '' },
        { text: '\\(c = 10\\)', imageUrl: '' }
      ],
      answer: '\\(c = 8\\)',
      solutionSteps: [
        {
          explanation: 'In a rhombus all sides are equal, so \\(BC = AB = 5\\). Use the distance formula with \\(B(5, 4)\\) and \\(C(2, c)\\).',
          workingOut: '\\(BC = \\sqrt{(2-5)^2 + (c-4)^2} = 5\\)',
          graphData: { html: svgBC }
        },
        {
          explanation: 'Square both sides and solve for \\(c\\).',
          workingOut: [
            '\\(9 + (c-4)^2 = 25\\)',
            '\\((c-4)^2 = 16\\)',
            '\\(c - 4 = \\pm 4\\)',
            '\\(c = 8 \\text{ or } c = 0\\)',
            '\\(\\therefore c = 8\\) (since \\(c\\) is a positive integer)'
          ].join('\n'),
          graphData: null
        }
      ],
      graphData: null
    },
    // ─── q6d: Gradient of BC. Answer -4/3. Correct at C (index 2) ───
    {
      id: 'y9-11i-q6d',
      type: 'multiple_choice',
      question: 'd) Find the gradient of \\(BC\\).',
      options: [
        { text: '\\(\\dfrac{3}{4}\\)', imageUrl: '' },
        { text: '\\(-\\dfrac{3}{4}\\)', imageUrl: '' },
        { text: '\\(-\\dfrac{4}{3}\\)', imageUrl: '' },
        { text: '\\(\\dfrac{4}{3}\\)', imageUrl: '' }
      ],
      answer: '\\(-\\dfrac{4}{3}\\)',
      solutionSteps: [
        {
          explanation: 'Use the gradient formula with \\(B(5, 4)\\) and \\(C(2, 8)\\).',
          workingOut: '\\(m_{BC} = \\dfrac{8 - 4}{2 - 5} = \\dfrac{4}{-3} = -\\dfrac{4}{3}\\)',
          graphData: { html: svgBC }
        }
      ],
      graphData: null
    },
    // ─── q6e: Gradients of CD and AD. Correct at B (index 1) ───
    {
      id: 'y9-11i-q6e',
      type: 'multiple_choice',
      question: 'e) State the gradient of \\(CD\\) and \\(AD\\).',
      options: [
        { text: '\\(m_{CD} = -\\dfrac{4}{3},\\ m_{AD} = \\dfrac{3}{4}\\)', imageUrl: '' },
        { text: '\\(m_{CD} = \\dfrac{3}{4},\\ m_{AD} = -\\dfrac{4}{3}\\)', imageUrl: '' },
        { text: '\\(m_{CD} = \\dfrac{4}{3},\\ m_{AD} = -\\dfrac{3}{4}\\)', imageUrl: '' },
        { text: '\\(m_{CD} = \\dfrac{3}{4},\\ m_{AD} = \\dfrac{3}{4}\\)', imageUrl: '' }
      ],
      answer: '\\(m_{CD} = \\dfrac{3}{4},\\ m_{AD} = -\\dfrac{4}{3}\\)',
      solutionSteps: [
        {
          explanation: 'In a rhombus, opposite sides are parallel, so opposite sides share the same gradient.',
          workingOut: [
            '\\(CD \\parallel AB \\implies m_{CD} = m_{AB} = \\dfrac{3}{4}\\)',
            '\\(AD \\parallel BC \\implies m_{AD} = m_{BC} = -\\dfrac{4}{3}\\)'
          ].join('\n'),
          graphData: { html: svgBase }
        }
      ],
      graphData: null
    },
    // ─── q6f: Coordinates of D. Answer (-2,5). Correct at D (index 3) ───
    {
      id: 'y9-11i-q6f',
      type: 'multiple_choice',
      question: 'f) Find the coordinates of \\(D\\).',
      options: [
        { text: '\\((0, 5)\\)', imageUrl: '' },
        { text: '\\((-1, 4)\\)', imageUrl: '' },
        { text: '\\((-3, 3)\\)', imageUrl: '' },
        { text: '\\((-2, 5)\\)', imageUrl: '' }
      ],
      answer: '\\((-2, 5)\\)',
      solutionSteps: [
        {
          explanation: '\\(D\\) lies on line \\(CD\\) (through \\(C(2,8)\\), gradient \\(\\frac{3}{4}\\)) AND line \\(AD\\) (through \\(A(1,1)\\), gradient \\(-\\frac{4}{3}\\)). Find each equation then solve simultaneously.',
          workingOut: '',
          graphData: { html: svgDA }
        },
        {
          explanation: 'Equation of line \\(CD\\):',
          workingOut: [
            '\\(y - 8 = \\dfrac{3}{4}(x - 2)\\)',
            '\\(y = \\dfrac{3}{4}x + \\dfrac{13}{2}\\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Equation of line \\(AD\\):',
          workingOut: [
            '\\(y - 1 = -\\dfrac{4}{3}(x - 1)\\)',
            '\\(y = -\\dfrac{4}{3}x + \\dfrac{7}{3}\\)'
          ].join('\n'),
          graphData: null
        },
        {
          explanation: 'Set the two equations equal, multiply by 12 to clear fractions:',
          workingOut: [
            '\\(\\dfrac{3}{4}x + \\dfrac{13}{2} = -\\dfrac{4}{3}x + \\dfrac{7}{3}\\)',
            '\\(9x + 78 = -16x + 28\\)',
            '\\(25x = -50 \\implies x = -2\\)',
            '\\(y = -\\dfrac{4}{3}(-2) + \\dfrac{7}{3} = \\dfrac{8+7}{3} = 5\\)',
            '\\(\\therefore D = (-2,\\ 5)\\)'
          ].join('\n'),
          graphData: null
        }
      ],
      graphData: null
    }
  ];

  await db.collection('questions').doc('y9-11i-q6').update({
    type: 'multiple_choice',
    subQuestions,
    solution: '',
    solutionSteps: [],
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Updated y9-11i-q6 parent doc with all subQuestions');
  process.exit(0);
}

run().catch(console.error);
