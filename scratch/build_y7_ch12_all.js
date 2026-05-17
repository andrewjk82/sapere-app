const fs = require('fs');

const questions = [];

// ========================================================
// Helper: Clean raw LaTeX expressions into readable Unicode for SVGs
// ========================================================
function cleanLatexForSvg(str) {
  if (!str) return '';
  return str
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\theta/g, 'θ')
    .replace(/\\circ/g, '°')
    .replace(/\^\\circ/g, '°')
    .replace(/\^circ/g, '°')
    .replace(/gamma/g, 'γ')
    .replace(/alpha/g, 'α')
    .replace(/beta/g, 'β')
    .replace(/theta/g, 'θ')
    .replace(/\\/g, '');
}

// ========================================================
// Helper: Draw standard sleek SVG triangle with custom coordinates and labels
// ========================================================
function makeTriangleSVG({ ax, ay, bx, by, cx, cy, alabel, blabel, clabel, aangle, bangle, cangle, showRightAngle = false, extraLines = '' }) {
  // Clean all LaTeX strings into standard clean Unicode for the SVG text nodes
  const cleanA = cleanLatexForSvg(aangle);
  const cleanB = cleanLatexForSvg(bangle);
  const cleanC = cleanLatexForSvg(cangle);
  const cleanExtra = cleanLatexForSvg(extraLines);

  // Let's create an elegant, responsive SVG wrapper
  const minX = Math.min(ax, bx, cx) - 20;
  const maxX = Math.max(ax, bx, cx) + 20;
  const minY = Math.min(ay, by, cy) - 20;
  const maxY = Math.max(ay, by, cy) + 20;
  const width = maxX - minX;
  const height = maxY - minY;

  // Render a clean square right angle marker if needed
  let rightAngleMarker = '';
  if (showRightAngle) {
    const size = 12;
    rightAngleMarker = `<path d="M ${cx + size} ${cy} L ${cx + size} ${cy - size} L ${cx} ${cy - size}" stroke="#475569" stroke-width="1.5" fill="none" />`;
  }

  return `<div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg viewBox="${minX} ${minY} ${width} ${height}" width="100%" style="max-width: 280px; height: auto;" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
        </marker>
      </defs>
      
      <!-- Triangle Path -->
      <polygon points="${ax},${ay} ${bx},${by} ${cx},${cy}" stroke="#1e293b" stroke-width="2.5" fill="#f8fafc" stroke-linejoin="round" />
      
      ${rightAngleMarker}
      ${cleanExtra}

      <!-- Text Labels for Vertices -->
      <text x="${ax}" y="${ay - 10}" font-family="Outfit, Inter, sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">${alabel}</text>
      <text x="${bx - 12}" y="${by + 16}" font-family="Outfit, Inter, sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">${blabel}</text>
      <text x="${cx + 12}" y="${cy + 16}" font-family="Outfit, Inter, sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">${clabel}</text>

      <!-- Angle Values -->
      ${cleanA ? `<text x="${ax}" y="${ay + 25}" font-family="Outfit, Inter, sans-serif" font-size="13" fill="#2563eb" font-weight="600" text-anchor="middle">${cleanA}</text>` : ''}
      ${cleanB ? `<text x="${bx + 25}" y="${by - 10}" font-family="Outfit, Inter, sans-serif" font-size="13" fill="#2563eb" font-weight="600" text-anchor="middle">${cleanB}</text>` : ''}
      ${cleanC ? `<text x="${cx - 25}" y="${cy - 10}" font-family="Outfit, Inter, sans-serif" font-size="13" fill="#2563eb" font-weight="600" text-anchor="middle">${cleanC}</text>` : ''}
    </svg>
  </div>`;
}

// ========================================================
// Q1: Interior angle sum and exterior angle theorems (2 questions)
// ========================================================
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'What is the sum of the three interior angles of any triangle?',
  options: ['$180^\\circ$', '$90^\\circ$', '$360^\\circ$', '$270^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Interior Angle Sum Theorem:</strong></p>
    <p>The sum of the interior angles of any triangle is always constant and equals exactly $180^\\circ$.</p>
    <p>$$\\angle A + \\angle B + \\angle C = 180^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'According to the exterior angle theorem, the exterior angle of a triangle is equal to...',
  options: [
    'The sum of the two opposite interior angles.',
    'The difference between the two opposite interior angles.',
    'The sum of all three interior angles.',
    'Exactly $180^\\circ$ minus the opposite interior angle.'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Exterior Angle Theorem:</strong></p>
    <p>An exterior angle of a triangle is equal to the sum of the two opposite (non-adjacent) interior angles.</p>
    <p>$$\\text{Exterior Angle} = \\text{Interior Angle 1} + \\text{Interior Angle 2}$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q2: Interior angle sum of a triangle (9 questions)
// ========================================================
// Q2a: Triangle ABC with interior angles alpha, 75, 35
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Use the interior angle sum of a triangle to find the value of $\\alpha$ in the diagram below:
  ${makeTriangleSVG({ ax: 100, ay: 30, bx: 30, by: 120, cx: 180, cy: 120, alabel: 'A', blabel: 'B', clabel: 'C', aangle: '\\alpha', bangle: '75^\\circ', cangle: '35^\\circ' })}`,
  options: ['$70^\\circ$', '$80^\\circ$', '$60^\\circ$', '$90^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> The sum of all interior angles of a triangle is $180^\\circ$:</p>
    <p>$$\\alpha + 75^\\circ + 35^\\circ = 180^\\circ$$</p>
    <p><strong>Step 2:</strong> Add the known interior angles:</p>
    <p>$$75^\\circ + 35^\\circ = 110^\\circ$$</p>
    <p><strong>Step 3:</strong> Subtract this sum from $180^\\circ$ to find $\\alpha$:</p>
    <p>$$\\alpha = 180^\\circ - 110^\\circ = 70^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q2b: Obtuse flat triangle
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Use the interior angle sum of a triangle to find the value of $\\beta$ in the diagram below:
  ${makeTriangleSVG({ ax: 120, ay: 40, bx: 20, by: 110, cx: 220, cy: 110, alabel: 'I', blabel: 'B', clabel: 'T', aangle: '20^\\circ', bangle: '\\beta', cangle: '20^\\circ' })}`,
  options: ['$140^\\circ$', '$130^\\circ$', '$150^\\circ$', '$120^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> The sum of all interior angles of a triangle is $180^\\circ$:</p>
    <p>$$\\beta + 20^\\circ + 20^\\circ = 180^\\circ$$</p>
    <p><strong>Step 2:</strong> Add the known interior angles:</p>
    <p>$$20^\\circ + 20^\\circ = 40^\\circ$$</p>
    <p><strong>Step 3:</strong> Subtract this sum from $180^\\circ$ to find $\\beta$:</p>
    <p>$$\\beta = 180^\\circ - 40^\\circ = 140^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q2c: Right-angled triangle
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Find the value of $\\gamma$ in the right-angled triangle below:
  ${makeTriangleSVG({ ax: 30, ay: 30, bx: 150, by: 120, cx: 30, cy: 120, alabel: 'C', blabel: 'U', clabel: 'T', aangle: '\\gamma', bangle: '40^\\circ', cangle: '', showRightAngle: true })}`,
  options: ['$50^\\circ$', '$40^\\circ$', '$60^\\circ$', '$45^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> A right angle (at vertex $T$) is exactly $90^\\circ$:</p>
    <p>$$\\gamma + 40^\\circ + 90^\\circ = 180^\\circ$$</p>
    <p><strong>Step 2:</strong> Add the known interior angles:</p>
    <p>$$40^\\circ + 90^\\circ = 130^\\circ$$</p>
    <p><strong>Step 3:</strong> Subtract this sum from $180^\\circ$ to find $\\gamma$:</p>
    <p>$$\\gamma = 180^\\circ - 130^\\circ = 50^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q2d: Triangle JAB with angles theta, 80, 82
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Find the value of $\\theta$ in the triangle below:
  ${makeTriangleSVG({ ax: 100, ay: 30, bx: 40, by: 120, cx: 160, cy: 120, alabel: 'J', blabel: 'A', clabel: 'B', aangle: '\\theta', bangle: '80^\\circ', cangle: '82^\\circ' })}`,
  options: ['$18^\\circ$', '$28^\\circ$', '$8^\\circ$', '$38^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> The sum of all interior angles of a triangle is $180^\\circ$:</p>
    <p>$$\\theta + 80^\\circ + 82^\\circ = 180^\\circ$$</p>
    <p><strong>Step 2:</strong> Add the known interior angles:</p>
    <p>$$80^\\circ + 82^\\circ = 162^\\circ$$</p>
    <p><strong>Step 3:</strong> Subtract from $180^\\circ$:</p>
    <p>$$\\theta = 180^\\circ - 162^\\circ = 18^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q2e: Two triangles sharing a vertex O (Vertically opposite & Parallel lines)
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: `In the diagram below, lines $QP$ and $MN$ are parallel. Find the value of $\\alpha$.
  <div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg viewBox="0 0 200 160" width="100%" style="max-width: 250px; height: auto;" xmlns="http://www.w3.org/2000/svg">
      <!-- Parallel arrowheads -->
      <polygon points="30,120 170,120 100,70 30,20 170,20" stroke="#1e293b" stroke-width="2" fill="none"/>
      <text x="30" y="15" font-size="12" font-weight="bold">M</text>
      <text x="170" y="15" font-size="12" font-weight="bold">N</text>
      <text x="100" y="65" font-size="12" font-weight="bold">O</text>
      <text x="30" y="135" font-size="12" font-weight="bold">Q</text>
      <text x="170" y="135" font-size="12" font-weight="bold">P</text>
      
      <!-- Labeled angles -->
      <text x="40" y="115" font-size="11" fill="#2563eb" font-weight="bold">40°</text>
      <text x="145" y="115" font-size="11" fill="#2563eb" font-weight="bold">75°</text>
      <text x="45" y="35" font-size="11" fill="#2563eb" font-weight="bold">α</text>
    </svg>
  </div>`,
  options: ['$40^\\circ$', '$75^\\circ$', '$65^\\circ$', '$80^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Identify the alternate interior angles formed by the parallel lines $MN \\parallel QP$ and transversal line $MQ$:</p>
    <p>$$\\angle NMO = \\angle OQP$$</p>
    <p><strong>Step 2:</strong> Since $\\angle OQP = 40^\\circ$, we have:</p>
    <p>$$\\alpha = 40^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q2f: Vertically opposite triangles again
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `In the diagram below, two lines intersect at $K$. Find the value of $\\beta$.
  <div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg viewBox="0 0 200 140" width="100%" style="max-width: 250px; height: auto;" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="20" x2="180" y2="120" stroke="#1e293b" stroke-width="2" />
      <line x1="20" y1="120" x2="180" y2="20" stroke="#1e293b" stroke-width="2" />
      <line x1="20" y1="20" x2="20" y2="120" stroke="#1e293b" stroke-width="2" />
      <line x1="180" y1="20" x2="180" y2="120" stroke="#1e293b" stroke-width="2" />
      <text x="15" y="15" font-size="12" font-weight="bold">B</text>
      <text x="15" y="135" font-size="12" font-weight="bold">R</text>
      <text x="185" y="15" font-size="12" font-weight="bold">T</text>
      <text x="185" y="135" font-size="12" font-weight="bold">E</text>
      <text x="105" y="65" font-size="12" font-weight="bold">K</text>
      
      <text x="30" y="35" font-size="11" fill="#2563eb" font-weight="bold">β</text>
      <text x="30" y="110" font-size="11" fill="#2563eb" font-weight="bold">35°</text>
      <text x="110" y="82" font-size="11" fill="#2563eb" font-weight="bold">105°</text>
    </svg>
  </div>`,
  options: ['$40^\\circ$', '$45^\\circ$', '$35^\\circ$', '$50^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Identify the vertically opposite angles at the intersection $K$:</p>
    <p>$$\\angle BKR = \\angle TKE = 105^\\circ$$</p>
    <p><strong>Step 2:</strong> In triangle $BKR$, the sum of the angles is $180^\\circ$:</p>
    <p>$$\\beta + 35^\\circ + 105^\\circ = 180^\\circ$$</p>
    <p><strong>Step 3:</strong> Solve for $\\beta$:</p>
    <p>$$\\beta + 140^\\circ = 180^\\circ \\implies \\beta = 40^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q3: Use the exterior angle theorem to find values (8 questions)
// ========================================================
// Q3a: Triangle with interior angles 65, 55 and exterior alpha
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Use the exterior angle theorem to find the value of $\\alpha$ in the diagram below:
  ${makeTriangleSVG({ ax: 100, ay: 30, bx: 40, by: 120, cx: 160, cy: 120, alabel: 'A', blabel: 'B', clabel: 'C', aangle: '65^\\circ', bangle: '55^\\circ', cangle: '', extraLines: '<line x1="160" y1="120" x2="220" y2="120" stroke="#1e293b" stroke-width="2" /><text x="180" y="110" font-family="Outfit" font-size="13" font-weight="bold" fill="#2563eb">\\alpha</text><text x="225" y="135" font-size="12" font-weight="bold">D</text>' })}`,
  options: ['$120^\\circ$', '$110^\\circ$', '$130^\\circ$', '$115^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> By the exterior angle theorem, the exterior angle $\\alpha$ at vertex $C$ is equal to the sum of the two opposite interior angles:</p>
    <p>$$\\alpha = \\angle A + \\angle B$$</p>
    <p><strong>Step 2:</strong> Add the given values:</p>
    <p>$$\\alpha = 65^\\circ + 55^\\circ = 120^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q3b: Obtuse triangle with interior 15, 25 and exterior beta
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Find the value of the exterior angle $\\beta$ in the diagram below:
  ${makeTriangleSVG({ ax: 120, ay: 40, bx: 20, by: 110, cx: 180, cy: 110, alabel: 'E', blabel: 'T', clabel: 'R', aangle: '15^\\circ', bangle: '25^\\circ', cangle: '', extraLines: '<line x1="20" y1="110" x2="200" y2="70" stroke="#1e293b" stroke-width="2" /><text x="130" y="90" font-family="Outfit" font-size="13" font-weight="bold" fill="#2563eb">\\beta</text>' })}`,
  options: ['$40^\\circ$', '$35^\\circ$', '$45^\\circ$', '$50^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> According to the exterior angle theorem, the exterior angle is the sum of the two opposite interior angles:</p>
    <p>$$\\beta = 15^\\circ + 25^\\circ$$</p>
    <p><strong>Step 2:</strong> Calculate the sum:</p>
    <p>$$\\beta = 40^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q3c: Right angle exterior 130 and interior gamma
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Use the exterior angle theorem to find the value of $\\gamma$ in the diagram below:
  ${makeTriangleSVG({ ax: 30, ay: 30, bx: 150, by: 120, cx: 30, cy: 120, alabel: 'N', blabel: 'G', clabel: 'E', aangle: '', bangle: '\\gamma', cangle: '', showRightAngle: true, extraLines: '<line x1="30" y1="30" x2="30" y2="-20" stroke="#1e293b" stroke-width="2" /><text x="15" y="10" font-size="12" fill="#2563eb" font-weight="bold">130°</text>' })}`,
  options: ['$40^\\circ$', '$30^\\circ$', '$50^\\circ$', '$45^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Set up the exterior angle equation where the exterior angle ($130^\\circ$) is equal to the sum of the opposite interior angles ($90^\\circ$ and $\\gamma$):</p>
    <p>$$130^\\circ = 90^\\circ + \\gamma$$</p>
    <p><strong>Step 2:</strong> Solve for $\\gamma$:</p>
    <p>$$\\gamma = 130^\\circ - 90^\\circ = 40^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q3d: Exterior angle 80, opposite interior 45 and theta
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Find the value of $\\theta$ in the diagram below:
  ${makeTriangleSVG({ ax: 100, ay: 30, bx: 40, by: 120, cx: 160, cy: 120, alabel: 'R', blabel: 'D', clabel: 'E', aangle: '', bangle: '\\theta', cangle: '45^\\circ', extraLines: '<line x1="100" y1="30" x2="140" y2="-10" stroke="#1e293b" stroke-width="2" /><text x="110" y="10" font-size="12" fill="#2563eb" font-weight="bold">80°</text>' })}`,
  options: ['$35^\\circ$', '$45^\\circ$', '$25^\\circ$', '$55^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> The exterior angle ($80^\\circ$) equals the sum of the two opposite interior angles ($\\theta$ and $45^\\circ$):</p>
    <p>$$80^\\circ = \\theta + 45^\\circ$$</p>
    <p><strong>Step 2:</strong> Solve for $\\theta$:</p>
    <p>$$\\theta = 80^\\circ - 45^\\circ = 35^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q4: Conceptual Questions (5 questions)
// ========================================================
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Can a triangle have two obtuse angles?',
  options: [
    'No, because two obtuse angles would sum to more than $180^\\circ$.',
    'Yes, but only in an isosceles triangle.',
    'Yes, but only in a scalene triangle.',
    'No, because a triangle can only have at most one right angle.'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>An obtuse angle is strictly greater than $90^\\circ$. If a triangle had two obtuse angles, their sum alone would exceed $180^\\circ$ ($91^\\circ + 91^\\circ = 182^\\circ > 180^\\circ$), which is impossible for any triangle.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Can a triangle have two right angles?',
  options: [
    'No, because two right angles would sum to exactly $180^\\circ$, leaving $0^\\circ$ for the third angle.',
    'Yes, in a right-angled isosceles triangle.',
    'Yes, if the third angle is obtuse.',
    'No, because right angles can only exist in quadrilaterals.'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>A right angle is exactly $90^\\circ$. Two right angles would sum to $90^\\circ + 90^\\circ = 180^\\circ$. This leaves exactly $0^\\circ$ for the third angle, which means a closed three-sided triangle cannot be formed.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'What is the minimum number of acute angles a triangle can have?',
  options: ['$2$', '$1$', '$3$', '$0$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p>Since a triangle can have at most one right or obtuse angle, the remaining two angles must be acute ($< 90^\\circ$). Therefore, every triangle must have at least $2$ acute angles.</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// ========================================================
// Q6: Find the values of the pronumerals (6 questions)
// ========================================================
// Q6a: Right-angled triangle with acute angles alpha and 2*alpha
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Find the value of $\\alpha$ in the right-angled triangle below:
  ${makeTriangleSVG({ ax: 30, ay: 30, bx: 150, by: 120, cx: 30, cy: 120, alabel: 'A', blabel: 'C', clabel: 'B', aangle: '\\alpha', bangle: '2\\alpha', cangle: '', showRightAngle: true })}`,
  options: ['$30^\\circ$', '$20^\\circ$', '$40^\\circ$', '$25^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> The sum of the interior angles is $180^\\circ$. Since one angle is $90^\\circ$, the other two acute angles must sum to $90^\\circ$:</p>
    <p>$$\\alpha + 2\\alpha = 90^\\circ$$</p>
    <p><strong>Step 2:</strong> Combine like terms:</p>
    <p>$$3\\alpha = 90^\\circ$$</p>
    <p><strong>Step 3:</strong> Divide by $3$:</p>
    <p>$$\\alpha = 30^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q6b: Triangle with 100, beta, beta+20
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Find the value of $\\beta$ in the triangle below:
  ${makeTriangleSVG({ ax: 100, ay: 30, bx: 40, by: 120, cx: 160, cy: 120, alabel: 'P', blabel: 'R', clabel: 'Q', aangle: '\\beta + 20^\\circ', bangle: '100^\\circ', cangle: '\\beta' })}`,
  options: ['$30^\\circ$', '$40^\\circ$', '$25^\\circ$', '$35^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Apply the interior angle sum theorem ($180^\\circ$):</p>
    <p>$$100^\\circ + \\beta + (\\beta + 20^\\circ) = 180^\\circ$$</p>
    <p><strong>Step 2:</strong> Combine like terms:</p>
    <p>$$2\\beta + 120^\\circ = 180^\\circ$$</p>
    <p><strong>Step 3:</strong> Subtract $120^\\circ$ from both sides:</p>
    <p>$$2\\beta = 60^\\circ$$</p>
    <p><strong>Step 4:</strong> Divide by $2$:</p>
    <p>$$\\beta = 30^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q6c: Equilateral triangle with all interior angles marked as gamma
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Find the value of $\\gamma$ in the equilateral triangle below:
  ${makeTriangleSVG({ ax: 100, ay: 30, bx: 40, by: 120, cx: 160, cy: 120, alabel: 'X', blabel: 'Y', clabel: 'Z', aangle: '\\gamma', bangle: '\\gamma', cangle: '\\gamma' })}`,
  options: ['$60^\\circ$', '$50^\\circ$', '$70^\\circ$', '$90^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> An equilateral triangle has three equal angles $\\gamma$:</p>
    <p>$$\\gamma + \\gamma + \\gamma = 180^\\circ$$</p>
    <p>$$3\\gamma = 180^\\circ$$</p>
    <p><strong>Step 2:</strong> Divide by $3$:</p>
    <p>$$\\gamma = 60^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q6d: Isosceles triangle with base angles theta, theta and exterior top angle 110
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `Find the value of $\\theta$ in the isosceles triangle below:
  ${makeTriangleSVG({ ax: 100, ay: 30, bx: 40, by: 120, cx: 160, cy: 120, alabel: 'F', blabel: 'I', clabel: 'S', aangle: '', bangle: '\\theta', cangle: '\\theta', extraLines: '<line x1="100" y1="30" x2="100" y2="-20" stroke="#1e293b" stroke-width="2" /><text x="115" y="10" font-size="12" fill="#2563eb" font-weight="bold">110°</text>' })}`,
  options: ['$55^\\circ$', '$45^\\circ$', '$65^\\circ$', '$50^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> By the exterior angle theorem, the exterior angle at the top vertex is equal to the sum of the two opposite interior angles $\\theta$:</p>
    <p>$$\\theta + \\theta = 110^\\circ$$</p>
    <p><strong>Step 2:</strong> Simplify and divide:</p>
    <p>$$2\\theta = 110^\\circ \\implies \\theta = 55^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});


// Q6e: Vertically opposite triangles
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `In the diagram below, two triangles share a vertex $A$ at the intersection. Find the value of $\\alpha$.
  <div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg viewBox="0 0 200 140" width="100%" style="max-width: 250px; height: auto;" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,20 80,70 20,120" stroke="#1e293b" stroke-width="2" fill="none" />
      <polygon points="180,20 80,70 180,120" stroke="#1e293b" stroke-width="2" fill="none" />
      <text x="15" y="15" font-size="12" font-weight="bold">B</text>
      <text x="15" y="135" font-size="12" font-weight="bold">C</text>
      <text x="80" y="60" font-size="12" font-weight="bold">A</text>
      <text x="185" y="15" font-size="12" font-weight="bold">D</text>
      <text x="185" y="135" font-size="12" font-weight="bold">E</text>
      
      <text x="35" y="45" font-size="11" fill="#2563eb" font-weight="bold">40°</text>
      <text x="35" y="105" font-size="11" fill="#2563eb" font-weight="bold">50°</text>
      <text x="150" y="45" font-size="11" fill="#2563eb" font-weight="bold">2α</text>
      <text x="150" y="105" font-size="11" fill="#2563eb" font-weight="bold">α</text>
    </svg>
  </div>`,
  options: ['$30^\\circ$', '$20^\\circ$', '$40^\\circ$', '$25^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Find the third angle in the left triangle $\\angle BAC$ using the angle sum of a triangle ($180^\\circ$):</p>
    <p>$$\\angle BAC = 180^\\circ - (40^\\circ + 50^\\circ) = 180^\\circ - 90^\\circ = 90^\\circ$$</p>
    <p><strong>Step 2:</strong> Vertically opposite angles are equal, so the interior angle of the right triangle is also $90^\\circ$:</p>
    <p>$$\\angle DAE = \\angle BAC = 90^\\circ$$</p>
    <p><strong>Step 3:</strong> Sum the angles in the right triangle to $180^\\circ$:</p>
    <p>$$\\alpha + 2\\alpha + 90^\\circ = 180^\\circ$$</p>
    <p>$$3\\alpha = 90^\\circ \\implies \\alpha = 30^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q7a: Parallel lines HO and ER with transversal
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: `In the diagram below, lines $HO$ and $ER$ are parallel. Find the value of $\\alpha$.
  <div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg viewBox="0 0 200 120" width="100%" style="max-width: 250px; height: auto;" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="30" x2="180" y2="30" stroke="#1e293b" stroke-width="2" />
      <line x1="20" y1="90" x2="180" y2="90" stroke="#1e293b" stroke-width="2" />
      <line x1="140" y1="30" x2="60" y2="90" stroke="#1e293b" stroke-width="2" />
      <line x1="140" y1="30" x2="160" y2="90" stroke="#1e293b" stroke-width="2" />
      <text x="15" y="25" font-size="12" font-weight="bold">H</text>
      <text x="185" y="25" font-size="12" font-weight="bold">O</text>
      <text x="15" y="105" font-size="12" font-weight="bold">E</text>
      <text x="185" y="105" font-size="12" font-weight="bold">R</text>
      
      <text x="100" y="45" font-size="11" fill="#2563eb" font-weight="bold">35°</text>
      <text x="140" y="85" font-size="11" fill="#2563eb" font-weight="bold">70°</text>
      <text x="125" y="45" font-size="11" fill="#2563eb" font-weight="bold">α</text>
    </svg>
  </div>`,
  options: ['$75^\\circ$', '$65^\\circ$', '$70^\\circ$', '$80^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Identify alternate interior angles formed by parallel lines $HO \\parallel ER$:</p>
    <p>The transversal creates a corresponding/alternate interior angle relationship. By alternate interior angles, the left angle inside the triangle is $35^\\circ$.</p>
    <p><strong>Step 2:</strong> Use the interior angle sum of the formed triangle to find $\\alpha$:</p>
    <p>$$\\alpha + 35^\\circ + 70^\\circ = 180^\\circ$$</p>
    <p>$$\\alpha + 105^\\circ = 180^\\circ \\implies \\alpha = 75^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q7d: Parallelogram PLYA with diagonal
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: `In the parallelogram $PLYA$ shown below, find the value of $\\gamma$.
  <div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg viewBox="0 0 200 120" width="100%" style="max-width: 250px; height: auto;" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,20 180,20 140,100 20,100" stroke="#1e293b" stroke-width="2" fill="none"/>
      <line x1="40" y1="20" x2="140" y2="100" stroke="#1e293b" stroke-width="1.5" />
      <text x="35" y="15" font-size="12" font-weight="bold">P</text>
      <text x="185" y="15" font-size="12" font-weight="bold">L</text>
      <text x="145" y="115" font-size="12" font-weight="bold">Y</text>
      <text x="10" y="115" font-size="12" font-weight="bold">A</text>
      
      <text x="50" y="38" font-size="11" fill="#2563eb" font-weight="bold">70°</text>
      <text x="100" y="90" font-size="11" fill="#2563eb" font-weight="bold">50°</text>
      <text x="125" y="90" font-size="11" fill="#2563eb" font-weight="bold">γ</text>
    </svg>
  </div>`,
  options: ['$60^\\circ$', '$50^\\circ$', '$70^\\circ$', '$55^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Identify alternate interior angles since parallel lines $PL \\parallel AY$ are cut by the transversal diagonal $PY$:</p>
    <p>$$\\angle LPY = \\angle APY = 70^\\circ$$</p>
    <p><strong>Step 2:</strong> Use the angle sum of triangle $PAY$ to evaluate $\\gamma$:</p>
    <p>$$\\gamma + 70^\\circ + 50^\\circ = 180^\\circ$$</p>
    <p>$$\\gamma + 120^\\circ = 180^\\circ \\implies \\gamma = 60^\\circ$$</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q8a: Advanced marked angle angle AVB
questions.push({
  chapterId: 'y7-12',
  chapterTitle: 'Chapter 12: Triangles and constructions',
  topicId: 'y7-12a',
  topicCode: '12A',
  topicTitle: 'Angles in triangles',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: `Find the size of the marked angle $\\angle AVB$ in the diagram below:
  <div style="display: flex; justify-content: center; margin: 16px 0;">
    <svg viewBox="0 0 200 160" width="100%" style="max-width: 250px; height: auto;" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,20 30,130 170,130" stroke="#1e293b" stroke-width="2" fill="none" />
      <line x1="30" y1="130" x2="135" y2="75" stroke="#1e293b" stroke-width="1.5" />
      <text x="100" y="15" font-size="12" font-weight="bold">V</text>
      <text x="20" y="145" font-size="12" font-weight="bold">A</text>
      <text x="175" y="145" font-size="12" font-weight="bold">B</text>
      <text x="140" y="70" font-size="12" font-weight="bold">Q</text>
      
      <text x="90" y="45" font-size="11" fill="#2563eb" font-weight="bold">80°</text>
      <text x="50" y="125" font-size="11" fill="#2563eb" font-weight="bold">75°</text>
    </svg>
  </div>`,
  options: ['$25^\\circ$', '$35^\\circ$', '$15^\\circ$', '$45^\\circ$'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Find the third angle in the larger triangle using the angle sum of a triangle ($180^\\circ$):</p>
    <p>$$\\angle B = 180^\\circ - (80^\\circ + 75^\\circ) = 25^\\circ$$</p>
    <p><strong>Step 2:</strong> Therefore, the angle $\\angle AVB$ equals exactly $25^\\circ$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});


console.log('Total combined Chapter 12 questions built:', questions.length);

// Generate file content
const output = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = ${JSON.stringify(questions, null, 2)};

export const importYear7Ch12A = async (forceReset = false) => {
  console.log('[Ch12A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch12 (12a to 12e) questions...');
      const topicsToDelete = ['y7-12a', 'y7-12b', 'y7-12c', 'y7-12d', 'y7-12e'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch12 topic questions.');
    }

    // To prevent duplicates, query all existing questions in Ch12 topics
    const existingQuestions = new Set();
    const topicsToCheck = ['y7-12a', 'y7-12b', 'y7-12c', 'y7-12d', 'y7-12e'];
    for (const tId of topicsToCheck) {
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
      existingSnap.docs.forEach(doc => {
        existingQuestions.add(doc.data().question.trim());
      });
    }
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log('[Ch12A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch12A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync('src/scripts/importYear7Ch12A.js', output);
console.log('Done!');

