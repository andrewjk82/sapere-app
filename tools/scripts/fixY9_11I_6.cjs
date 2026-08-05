const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Rhombus ABCD: A(1,1), B(5,4), C(2,8), D(-2,5)
  // Build a shared SVG for the rhombus

  function makeSVG(highlightSeg, highlightPt) {
    // All coordinates in math space. SVG: x same, y flipped.
    // Bounding box: x in [-4, 8], y in [-1, 10]
    // ViewBox: min-x=-4, min-y=-10 (SVG), width=12, height=12
    const pts = {
      A: [1, 1], B: [5, 4], C: [2, 8], D: [-2, 5]
    };
    const colors = { A: '#4f46e5', B: '#4f46e5', C: '#4f46e5', D: '#4f46e5' };
    if (highlightPt) colors[highlightPt] = '#ef4444';

    const segColors = { AB: '#6366f1', BC: '#6366f1', CD: '#6366f1', DA: '#6366f1' };
    if (highlightSeg) segColors[highlightSeg] = '#ef4444';

    return `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="260" height="260" viewBox="-4 -10 12 12" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#e2e8f0" stroke-width="0.05">
    ${[-4,-3,-2,-1,0,1,2,3,4,5,6,7].map(i=>`<line x1="${i}" y1="-10" x2="${i}" y2="2"/>`).join('')}
    ${[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2].map(i=>`<line x1="-4" y1="${i}" x2="8" y2="${i}"/>`).join('')}
  </g>
  <!-- axes -->
  <line x1="-4" y1="0" x2="8" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
  <line x1="0" y1="-10" x2="0" y2="2" stroke="#94a3b8" stroke-width="0.12"/>
  <!-- sides -->
  <line x1="${pts.A[0]}" y1="${-pts.A[1]}" x2="${pts.B[0]}" y2="${-pts.B[1]}" stroke="${segColors.AB}" stroke-width="0.12"/>
  <line x1="${pts.B[0]}" y1="${-pts.B[1]}" x2="${pts.C[0]}" y2="${-pts.C[1]}" stroke="${segColors.BC}" stroke-width="0.12"/>
  <line x1="${pts.C[0]}" y1="${-pts.C[1]}" x2="${pts.D[0]}" y2="${-pts.D[1]}" stroke="${segColors.CD}" stroke-width="0.12"/>
  <line x1="${pts.D[0]}" y1="${-pts.D[1]}" x2="${pts.A[0]}" y2="${-pts.A[1]}" stroke="${segColors.DA}" stroke-width="0.12"/>
  <!-- vertices -->
  <circle cx="${pts.A[0]}" cy="${-pts.A[1]}" r="0.2" fill="${colors.A}"/>
  <circle cx="${pts.B[0]}" cy="${-pts.B[1]}" r="0.2" fill="${colors.B}"/>
  <circle cx="${pts.C[0]}" cy="${-pts.C[1]}" r="0.2" fill="${colors.C}"/>
  <circle cx="${pts.D[0]}" cy="${-pts.D[1]}" r="0.2" fill="${colors.D}"/>
  <!-- labels -->
  <text x="${pts.A[0] + 0.2}" y="${-pts.A[1] + 0.5}" font-size="0.6" font-family="sans-serif" fill="${colors.A}">A(1, 1)</text>
  <text x="${pts.B[0] + 0.2}" y="${-pts.B[1] - 0.2}" font-size="0.6" font-family="sans-serif" fill="${colors.B}">B(5, 4)</text>
  <text x="${pts.C[0] + 0.2}" y="${-pts.C[1] - 0.2}" font-size="0.6" font-family="sans-serif" fill="${colors.C}">C(2, 8)</text>
  <text x="${pts.D[0] - 2.5}" y="${-pts.D[1] - 0.2}" font-size="0.6" font-family="sans-serif" fill="${colors.D}">D(−2, 5)</text>
</svg>
</div>`;
  }

  const svgBase = makeSVG(null, null);
  const svgAB   = makeSVG('AB', 'B');
  const svgBC   = makeSVG('BC', 'C');
  const svgCD   = makeSVG('CD', null);
  const svgD    = makeSVG('DA', 'D');

  // ─── q6a: Find b (x-coord of B). Answer: 5. Correct at index 3 (D) ───
  await db.collection('questions').doc('y9-11i-q6a').update({
    type: 'multiple_choice',
    options: [
      { text: '\\(b = 3\\)', imageUrl: '' },
      { text: '\\(b = 2\\)', imageUrl: '' },
      { text: '\\(b = 7\\)', imageUrl: '' },
      { text: '\\(b = 5\\)', imageUrl: '' }
    ],
    answer: '3',
    solution: 'The correct answer is \\(b = 5\\).',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'The gradient of \\(AB\\) is given as \\(\\frac{3}{4}\\). Use the gradient formula with \\(A(1, 1)\\) and \\(B(b, 4)\\).',
        workingOut: '\\(m_{AB} = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{4 - 1}{b - 1} = \\dfrac{3}{b - 1}\\)',
        graphData: { html: svgBase }
      },
      {
        explanation: 'Set this equal to the given gradient \\(\\dfrac{3}{4}\\) and solve for \\(b\\).',
        workingOut: [
          '\\(\\dfrac{3}{b - 1} = \\dfrac{3}{4}\\)',
          '\\(b - 1 = 4\\)',
          '\\(b = 5\\)'
        ].join('\n'),
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q6b: Length of AB. Answer: 5. Correct at index 1 (B) ───
  await db.collection('questions').doc('y9-11i-q6b').update({
    type: 'multiple_choice',
    options: [
      { text: '\\(4\\)', imageUrl: '' },
      { text: '\\(5\\)', imageUrl: '' },
      { text: '\\(3\\sqrt{2}\\)', imageUrl: '' },
      { text: '\\(\\sqrt{7}\\)', imageUrl: '' }
    ],
    answer: '1',
    solution: 'The correct answer is \\(5\\).',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Use the distance formula with \\(A(1, 1)\\) and \\(B(5, 4)\\).',
        workingOut: '\\(AB = \\sqrt{(5 - 1)^2 + (4 - 1)^2}\\)',
        graphData: { html: svgAB }
      },
      {
        explanation: 'Evaluate the squares.',
        workingOut: [
          '\\(AB = \\sqrt{4^2 + 3^2}\\)',
          '\\(AB = \\sqrt{16 + 9}\\)',
          '\\(AB = \\sqrt{25} = 5\\)'
        ].join('\n'),
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q6c: Find c (y-coord of C). Answer: 8. Correct at index 2 (C) ───
  // C = (2, c). Since ABCD is a rhombus, BC = AB = 5.
  // BC^2 = (2-5)^2 + (c-4)^2 = 9 + (c-4)^2 = 25 => (c-4)^2=16 => c=8 (positive)
  await db.collection('questions').doc('y9-11i-q6c').update({
    type: 'multiple_choice',
    options: [
      { text: '\\(c = 6\\)', imageUrl: '' },
      { text: '\\(c = 4\\)', imageUrl: '' },
      { text: '\\(c = 8\\)', imageUrl: '' },
      { text: '\\(c = 10\\)', imageUrl: '' }
    ],
    answer: '2',
    solution: 'The correct answer is \\(c = 8\\).',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Since \\(ABCD\\) is a rhombus, all four sides are equal in length. So \\(BC = AB = 5\\). Let \\(C = (2, c)\\) and use the distance formula with \\(B(5, 4)\\).',
        workingOut: '\\(BC = \\sqrt{(2 - 5)^2 + (c - 4)^2} = 5\\)',
        graphData: { html: svgBC }
      },
      {
        explanation: 'Square both sides and expand.',
        workingOut: [
          '\\((2 - 5)^2 + (c - 4)^2 = 25\\)',
          '\\(9 + (c - 4)^2 = 25\\)',
          '\\((c - 4)^2 = 16\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Take the square root. Since \\(c\\) is a positive integer, we keep the positive solution.',
        workingOut: [
          '\\(c - 4 = \\pm 4\\)',
          '\\(c = 8 \\text{ or } c = 0\\)',
          '\\(\\therefore c = 8\\) (since \\(c\\) is a positive integer)'
        ].join('\n'),
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q6d: Gradient of BC. Answer: -4/3. Correct at index 0 (A) ───
  // Wait, need to NOT put correct at index 0. Let's put at index 2 (C).
  // m_BC = (8-4)/(2-5) = 4/(-3) = -4/3
  await db.collection('questions').doc('y9-11i-q6d').update({
    type: 'multiple_choice',
    options: [
      { text: '\\(\\dfrac{3}{4}\\)', imageUrl: '' },
      { text: '\\(-\\dfrac{3}{4}\\)', imageUrl: '' },
      { text: '\\(-\\dfrac{4}{3}\\)', imageUrl: '' },
      { text: '\\(\\dfrac{4}{3}\\)', imageUrl: '' }
    ],
    answer: '2',
    solution: 'The correct answer is \\(-\\dfrac{4}{3}\\).',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'Use the gradient formula with \\(B(5, 4)\\) and \\(C(2, 8)\\).',
        workingOut: [
          '\\(m_{BC} = \\dfrac{8 - 4}{2 - 5} = \\dfrac{4}{-3} = -\\dfrac{4}{3}\\)'
        ].join('\n'),
        graphData: { html: svgBC }
      },
      {
        explanation: 'Notice that \\(m_{AB} \\times m_{BC} = \\dfrac{3}{4} \\times \\left(-\\dfrac{4}{3}\\right) = -1\\). This confirms that \\(AB \\perp BC\\), which is expected — adjacent sides of a rhombus are perpendicular when it is a square, but more importantly this validates our gradient calculation.',
        workingOut: '\\(m_{AB} \\times m_{BC} = \\dfrac{3}{4} \\times \\left(-\\dfrac{4}{3}\\right) = -1\\)',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q6e: Gradients of CD and AD. Answer: CD: 3/4, AD: -4/3. Correct at index 1 (B) ───
  await db.collection('questions').doc('y9-11i-q6e').update({
    type: 'multiple_choice',
    options: [
      { text: '\\(m_{CD} = -\\dfrac{4}{3},\\ m_{AD} = \\dfrac{3}{4}\\)', imageUrl: '' },
      { text: '\\(m_{CD} = \\dfrac{3}{4},\\ m_{AD} = -\\dfrac{4}{3}\\)', imageUrl: '' },
      { text: '\\(m_{CD} = \\dfrac{4}{3},\\ m_{AD} = -\\dfrac{3}{4}\\)', imageUrl: '' },
      { text: '\\(m_{CD} = \\dfrac{3}{4},\\ m_{AD} = \\dfrac{3}{4}\\)', imageUrl: '' }
    ],
    answer: '1',
    solution: '\\(m_{CD} = \\dfrac{3}{4},\\ m_{AD} = -\\dfrac{4}{3}\\)',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'In a rhombus, opposite sides are parallel. This means they have equal gradients.',
        workingOut: '\\(CD \\parallel AB \\implies m_{CD} = m_{AB} = \\dfrac{3}{4}\\)',
        graphData: { html: svgCD }
      },
      {
        explanation: 'Similarly, \\(AD\\) is parallel to \\(BC\\), so they share the same gradient.',
        workingOut: '\\(AD \\parallel BC \\implies m_{AD} = m_{BC} = -\\dfrac{4}{3}\\)',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  // ─── q6f: Coordinates of D. Answer: (-2, 5). Correct at index 3 (D) ───
  // D is intersection of line through C(2,8) with gradient 3/4, and line through A(1,1) with gradient -4/3
  // Line CD: y - 8 = 3/4(x - 2) => y = 3x/4 - 3/2 + 8 = 3x/4 + 13/2
  // Line AD: y - 1 = -4/3(x - 1) => y = -4x/3 + 4/3 + 1 = -4x/3 + 7/3
  // Solve: 3x/4 + 13/2 = -4x/3 + 7/3
  // multiply by 12: 9x + 78 = -16x + 28 => 25x = -50 => x = -2, y = -4(-2)/3 + 7/3 = 8/3 + 7/3 = 15/3 = 5
  await db.collection('questions').doc('y9-11i-q6f').update({
    type: 'multiple_choice',
    options: [
      { text: '\\((0, 5)\\)', imageUrl: '' },
      { text: '\\((-1, 4)\\)', imageUrl: '' },
      { text: '\\((-3, 3)\\)', imageUrl: '' },
      { text: '\\((-2, 5)\\)', imageUrl: '' }
    ],
    answer: '3',
    solution: 'The correct answer is \\((-2, 5)\\).',
    graphData: null,
    solutionSteps: [
      {
        explanation: 'To find \\(D\\), we use the fact that \\(D\\) lies on two lines: line \\(CD\\) (through \\(C(2,8)\\) with gradient \\(\\frac{3}{4}\\)) and line \\(AD\\) (through \\(A(1,1)\\) with gradient \\(-\\frac{4}{3}\\)). Let\'s find the equation of each line.',
        workingOut: '',
        graphData: { html: svgD }
      },
      {
        explanation: 'Equation of line \\(CD\\): through \\(C(2, 8)\\) with gradient \\(m = \\dfrac{3}{4}\\).',
        workingOut: [
          '\\(y - 8 = \\dfrac{3}{4}(x - 2)\\)',
          '\\(y = \\dfrac{3}{4}x - \\dfrac{3}{2} + 8\\)',
          '\\(y = \\dfrac{3}{4}x + \\dfrac{13}{2}\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Equation of line \\(AD\\): through \\(A(1, 1)\\) with gradient \\(m = -\\dfrac{4}{3}\\).',
        workingOut: [
          '\\(y - 1 = -\\dfrac{4}{3}(x - 1)\\)',
          '\\(y = -\\dfrac{4}{3}x + \\dfrac{4}{3} + 1\\)',
          '\\(y = -\\dfrac{4}{3}x + \\dfrac{7}{3}\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Set the two equations equal to find \\(x\\). Multiply through by 12 to clear all fractions.',
        workingOut: [
          '\\(\\dfrac{3}{4}x + \\dfrac{13}{2} = -\\dfrac{4}{3}x + \\dfrac{7}{3}\\)',
          '\\(9x + 78 = -16x + 28\\)',
          '\\(25x = -50\\)',
          '\\(x = -2\\)'
        ].join('\n'),
        graphData: null
      },
      {
        explanation: 'Substitute \\(x = -2\\) into the equation for line \\(AD\\) to find \\(y\\).',
        workingOut: [
          '\\(y = -\\dfrac{4}{3}(-2) + \\dfrac{7}{3} = \\dfrac{8}{3} + \\dfrac{7}{3} = \\dfrac{15}{3} = 5\\)',
          '\\(\\therefore D = (-2, 5)\\)'
        ].join('\n'),
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated y9-11i-q6a through q6f");
  process.exit(0);
}

run().catch(console.error);
