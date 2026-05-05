import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

const SOURCE_ID = 't2-y10-algebra-linear-formula-2024';

const topicMeta = {
  '9A': { chapterId: 'y10-9', chapterTitle: 'Chapter 9: Indices, exponentials and logarithms - part 1', topicId: 'y10-9a', topicTitle: 'Review of powers and integer indices' },
  '9B': { chapterId: 'y10-9', chapterTitle: 'Chapter 9: Indices, exponentials and logarithms - part 1', topicId: 'y10-9b', topicTitle: 'Scientific notation and significant figures' },
  '3A': { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3a', topicTitle: 'Expanding brackets and collecting like terms' },
  '3B': { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3b', topicTitle: 'Solving linear equations and inequalities' },
  '3C': { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3c', topicTitle: 'More difficult linear equations and inequalities' },
  '3D': { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3d', topicTitle: 'Formulas' },
  '3H': { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3h', topicTitle: 'An introduction to algebraic fractions' },
  '3I': { chapterId: 'y10-3', chapterTitle: 'Chapter 3: Algebra review', topicId: 'y10-3i', topicTitle: 'Further algebraic fractions' },
  '4A': { chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4a', topicTitle: 'Distance between two points and midpoint of an interval' },
  '4B': { chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4b', topicTitle: 'Gradient' },
  '4C': { chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4c', topicTitle: 'Gradient-intercept form and the general form of the equation of a line' },
  '4D': { chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4d', topicTitle: 'Point-gradient form of an equation of a line' },
  '4E': { chapterId: 'y10-4', chapterTitle: 'Chapter 4: Lines and linear equations', topicId: 'y10-4e', topicTitle: 'Review of simultaneous linear equations' },
  '5A': { chapterId: 'y10-5', chapterTitle: 'Chapter 5: Quadratic equations', topicId: 'y10-5a', topicTitle: 'Solution of quadratic equations' },
  '5B': { chapterId: 'y10-5', chapterTitle: 'Chapter 5: Quadratic equations', topicId: 'y10-5b', topicTitle: 'Rearranging to standard form' },
  '5D': { chapterId: 'y10-5', chapterTitle: 'Chapter 5: Quadratic equations', topicId: 'y10-5d', topicTitle: 'Perfect squares and completing the square' },
  '5F': { chapterId: 'y10-5', chapterTitle: 'Chapter 5: Quadratic equations', topicId: 'y10-5f', topicTitle: 'The quadratic formula' }
};

const escapeXml = value => String(value).replace(/[&<>"']/g, ch => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
}[ch]));

const graphImage = ({ lines = [], points = [], xMin = -6, xMax = 6, yMin = -6, yMax = 6, title = '' }) => {
  const width = 560;
  const height = 420;
  const pad = 44;
  const plotW = width - pad * 2;
  const plotH = height - pad * 2;
  const sx = x => pad + ((x - xMin) / (xMax - xMin)) * plotW;
  const sy = y => pad + plotH - ((y - yMin) / (yMax - yMin)) * plotH;
  const grid = [];

  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x += 1) {
    const isAxis = x === 0;
    grid.push(`<line x1="${sx(x)}" y1="${pad}" x2="${sx(x)}" y2="${height - pad}" stroke="${isAxis ? '#334155' : '#cbd5e1'}" stroke-width="${isAxis ? 2 : 1}"/>`);
    if (!isAxis) grid.push(`<text x="${sx(x)}" y="${sy(0) + 16}" font-size="11" text-anchor="middle" fill="#64748b">${x}</text>`);
  }
  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y += 1) {
    const isAxis = y === 0;
    grid.push(`<line x1="${pad}" y1="${sy(y)}" x2="${width - pad}" y2="${sy(y)}" stroke="${isAxis ? '#334155' : '#cbd5e1'}" stroke-width="${isAxis ? 2 : 1}"/>`);
    if (!isAxis) grid.push(`<text x="${sx(0) - 10}" y="${sy(y) + 4}" font-size="11" text-anchor="end" fill="#64748b">${y}</text>`);
  }

  const renderedLines = lines.map((line, idx) => {
    const colour = line.colour || ['#2563eb', '#dc2626', '#059669'][idx % 3];
    const x1 = xMin;
    const x2 = xMax;
    const y1 = line.m * x1 + line.b;
    const y2 = line.m * x2 + line.b;
    const labelX = Math.min(Math.max(line.labelX ?? 2, xMin + 1), xMax - 1);
    const labelY = line.m * labelX + line.b;
    return [
      `<line x1="${sx(x1)}" y1="${sy(y1)}" x2="${sx(x2)}" y2="${sy(y2)}" stroke="${colour}" stroke-width="3"/>`,
      line.label ? `<text x="${sx(labelX) + 6}" y="${sy(labelY) - 8}" font-size="14" font-weight="700" fill="${colour}">${escapeXml(line.label)}</text>` : ''
    ].join('');
  }).join('');

  const renderedPoints = points.map(point => (
    `<g><circle cx="${sx(point.x)}" cy="${sy(point.y)}" r="5" fill="${point.colour || '#111827'}"/><text x="${sx(point.x) + 8}" y="${sy(point.y) - 8}" font-size="13" font-weight="700" fill="#111827">${escapeXml(point.label || `(${point.x}, ${point.y})`)}</text></g>`
  )).join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="#ffffff"/>
    ${title ? `<text x="${width / 2}" y="24" text-anchor="middle" font-size="17" font-weight="800" fill="#0f172a">${escapeXml(title)}</text>` : ''}
    <rect x="${pad}" y="${pad}" width="${plotW}" height="${plotH}" fill="#f8fafc" stroke="#94a3b8"/>
    ${grid.join('')}
    <text x="${width - 26}" y="${sy(0) - 8}" font-size="14" font-weight="700" fill="#334155">x</text>
    <text x="${sx(0) + 8}" y="34" font-size="14" font-weight="700" fill="#334155">y</text>
    ${renderedLines}
    ${renderedPoints}
  </svg>`;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};

const questions = [
  { id: 'idx-01', c: '9A', q: 'Write $4.53 \\times 10^3$ as a basic numeral.', a: '4530', opts: ['4530', '45300', '0.00453', '453'], h: 'Move the decimal point 3 places to the right.', s: '$4.53 \\times 10^3 = 4530$' },
  { id: 'idx-02', c: '9A', q: 'Write $8.235 \\times 10^{-2}$ as a basic numeral.', a: '0.08235', opts: ['0.08235', '0.8235', '823.5', '0.008235'], h: 'A negative index moves the decimal point left.', s: '$8.235 \\times 10^{-2} = 0.08235$' },
  { id: 'idx-03', c: '9B', q: 'Express $349700$ in scientific notation correct to 3 significant figures.', a: '$3.50 \\times 10^5$', opts: ['$3.50 \\times 10^5$', '$3.49 \\times 10^5$', '$34.9 \\times 10^4$', '$3.50 \\times 10^4$'], h: 'Write one non-zero digit before the decimal point.', s: '$349700 = 3.497 \\times 10^5 \\approx 3.50 \\times 10^5$' },
  { id: 'idx-04', c: '9B', q: 'Express $0.002735$ in scientific notation correct to 3 significant figures.', a: '$2.74 \\times 10^{-3}$', opts: ['$2.74 \\times 10^{-3}$', '$2.73 \\times 10^{-3}$', '$27.4 \\times 10^{-4}$', '$2.74 \\times 10^3$'], h: 'Move the decimal point so the first number is between 1 and 10.', s: '$0.002735 = 2.735 \\times 10^{-3} \\approx 2.74 \\times 10^{-3}$' },
  { id: 'idx-05', c: '9A', q: 'Simplify $x^4 \\times x^3$.', a: '$x^7$', opts: ['$x^7$', '$x^{12}$', '$2x^7$', '$x$'], h: 'When multiplying powers with the same base, add the indices.', s: '$x^4 \\times x^3 = x^{4+3}=x^7$' },
  { id: 'idx-06', c: '9A', q: 'Simplify $\\frac{a^7}{a^3}$ using positive indices.', a: '$a^4$', opts: ['$a^4$', '$a^{10}$', '$\\frac{1}{a^4}$', '$a^3$'], h: 'When dividing powers with the same base, subtract the indices.', s: '$\\frac{a^7}{a^3}=a^{7-3}=a^4$' },
  { id: 'idx-07', c: '9A', q: 'Simplify $(3m^2n)^3$.', a: '$27m^6n^3$', opts: ['$27m^6n^3$', '$9m^5n^3$', '$3m^6n^3$', '$27m^5n$'], h: 'Raise every factor inside the bracket to the power of 3.', s: '$(3m^2n)^3=3^3m^{2\\cdot3}n^3=27m^6n^3$' },
  { id: 'idx-08', c: '9A', q: 'Simplify $\\frac{36p^7q^4}{24p^3q}$ using positive indices.', a: '$\\frac{3p^4q^3}{2}$', opts: ['$\\frac{3p^4q^3}{2}$', '$\\frac{2p^4q^3}{3}$', '$12p^4q^3$', '$\\frac{3p^{10}q^5}{2}$'], h: 'Simplify the coefficient and subtract matching indices.', s: '$\\frac{36}{24}p^{7-3}q^{4-1}=\\frac{3p^4q^3}{2}$' },
  { id: 'lin-01', c: '3B', q: 'Solve $10 - 3y = 16$.', a: '$y=-2$', opts: ['$y=-2$', '$y=2$', '$y=-\\frac{10}{3}$', '$y=\\frac{26}{3}$'], h: 'Subtract 10 from both sides first.', s: '$10-3y=16 \\Rightarrow -3y=6 \\Rightarrow y=-2$' },
  { id: 'lin-02', c: '3B', q: 'Solve $4x - 6 = 9$.', a: '$x=\\frac{15}{4}$', opts: ['$x=\\frac{15}{4}$', '$x=\\frac{3}{4}$', '$x=\\frac{9}{4}$', '$x=\\frac{5}{2}$'], h: 'Add 6 to both sides, then divide by 4.', s: '$4x=15 \\Rightarrow x=\\frac{15}{4}$' },
  { id: 'lin-09', c: '3C', q: 'Solve $2(x-3)=8-3(4x-6)$.', a: '$x=\\frac{16}{7}$', opts: ['$x=\\frac{16}{7}$', '$x=2$', '$x=\\frac{8}{7}$', '$x=-2$'], h: 'Expand the brackets and collect terms.', s: '$2x-6=8-12x+18=26-12x \\Rightarrow 14x=32 \\Rightarrow x=\\frac{16}{7}$' },
  { id: 'lin-10', c: '3H', q: 'Simplify $\\frac{x}{4}-\\frac{x+2}{3}$.', a: '$\\frac{-x-8}{12}$', opts: ['$\\frac{-x-8}{12}$', '$\\frac{x-2}{12}$', '$\\frac{7x+8}{12}$', '$\\frac{-x+8}{12}$'], h: 'Use common denominator 12 and distribute the minus sign.', s: '$\\frac{3x}{12}-\\frac{4(x+2)}{12}=\\frac{3x-4x-8}{12}=\\frac{-x-8}{12}$' },
  { id: 'lin-11', c: '3I', q: 'Simplify $\\frac{3x}{4y}+\\frac{x}{2y}$.', a: '$\\frac{5x}{4y}$', opts: ['$\\frac{5x}{4y}$', '$\\frac{4x}{6y}$', '$\\frac{3x^2}{8y^2}$', '$\\frac{x}{4y}$'], h: 'Use common denominator $4y$.', s: '$\\frac{3x}{4y}+\\frac{2x}{4y}=\\frac{5x}{4y}$' },
  { id: 'lin-13', c: '4E', q: 'Solve simultaneously: $2x-y=7$ and $y=x-3$.', a: '$(4,1)$', opts: ['$(4,1)$', '$(1,4)$', '$(-4,-1)$', '$(2,-1)$'], h: 'Substitute $y=x-3$ into the first equation.', s: '$2x-(x-3)=7 \\Rightarrow x+3=7 \\Rightarrow x=4$. Then $y=1$.' },
  { id: 'lin-14', c: '3B', q: 'Solve and express the answer on a number line: $12-3x<21$.', a: '$x>-3$', opts: ['$x>-3$', '$x<3$', '$x<-3$', '$x>3$'], h: 'Remember to reverse the inequality when dividing by a negative number.', s: '$12-3x<21 \\Rightarrow -3x<9 \\Rightarrow x>-3$' },
  { id: 'form-01', c: '3D', q: 'Make $a$ the subject of $S=\\frac{n(a+l)}{2}$.', a: '$a=\\frac{2S}{n}-l$', opts: ['$a=\\frac{2S}{n}-l$', '$a=\\frac{S}{2n}-l$', '$a=\\frac{2S-l}{n}$', '$a=\\frac{nS}{2}-l$'], h: 'Undo the multiplication by n and division by 2.', s: '$S=\\frac{n(a+l)}{2} \\Rightarrow 2S=n(a+l) \\Rightarrow \\frac{2S}{n}=a+l \\Rightarrow a=\\frac{2S}{n}-l$' },
  { id: 'coord-01', c: '4A', q: 'Given $A(5,-2)$ and $B(3,4)$, find the distance $AB$.', a: '$2\\sqrt{10}$', opts: ['$2\\sqrt{10}$', '$\\sqrt{40}$', '$6$', '$\\sqrt{20}$'], h: 'Use the distance formula.', s: '$AB=\\sqrt{(3-5)^2+(4-(-2))^2}=\\sqrt{4+36}=2\\sqrt{10}$' },
  { id: 'coord-02', c: '4A', q: 'Given $A(5,-2)$ and $B(3,4)$, find the midpoint of $AB$.', a: '$(4,1)$', opts: ['$(4,1)$', '$(1,4)$', '$(8,2)$', '$(2,6)$'], h: 'Average the x-coordinates and y-coordinates.', s: '$M=(\\frac{5+3}{2},\\frac{-2+4}{2})=(4,1)$' },
  { id: 'coord-03', c: '4B', q: 'Given $A(5,-2)$ and $B(3,4)$, find the gradient of $AB$.', a: '$-3$', opts: ['$-3$', '$3$', '$-\\frac{1}{3}$', '$\\frac{1}{3}$'], h: 'Use rise over run.', s: '$m=\\frac{4-(-2)}{3-5}=\\frac{6}{-2}=-3$' },
  { id: 'graph-01', c: '4C', q: 'Use the graph to identify the equation of the line.', a: '$y=-x+3$', opts: ['$y=-x+3$', '$y=x+3$', '$y=-x-3$', '$y=3x-1$'], h: 'Find the y-intercept and the gradient from the graph.', s: 'The line crosses the y-axis at 3 and falls 1 for every 1 step right, so $y=-x+3$.', questionImage: graphImage({ title: 'Line A', lines: [{ m: -1, b: 3, label: 'A', labelX: 2 }], points: [{ x: 0, y: 3, label: '(0, 3)' }, { x: 3, y: 0, label: '(3, 0)' }] }) },
  { id: 'graph-02', c: '4C', q: 'The line shown has equation $2x+3y=6$. What is its y-intercept?', a: '$2$', opts: ['$2$', '$3$', '$-2$', '$6$'], h: 'Set $x=0$ or read where the line crosses the y-axis.', s: '$2(0)+3y=6 \\Rightarrow y=2$.', questionImage: graphImage({ title: '2x + 3y = 6', lines: [{ m: -2 / 3, b: 2, label: '2x + 3y = 6', labelX: 1 }], points: [{ x: 0, y: 2, label: '(0, 2)' }, { x: 3, y: 0, label: '(3, 0)' }] }) },
  { id: 'graph-03', c: '4D', q: 'Find the equation of the line passing through $(0,2)$ and $(1,-2)$.', a: '$y=-4x+2$', opts: ['$y=-4x+2$', '$y=4x+2$', '$y=-2x+4$', '$y=x-2$'], h: 'Find the gradient first, then use the y-intercept.', s: '$m=\\frac{-2-2}{1-0}=-4$ and the y-intercept is 2, so $y=-4x+2$.', questionImage: graphImage({ title: 'Line through two points', lines: [{ m: -4, b: 2, label: 'line', labelX: -1 }], points: [{ x: 0, y: 2, label: '(0, 2)' }, { x: 1, y: -2, label: '(1, -2)' }] }) },
  { id: 'graph-04', c: '4E', q: 'The graphs of $x+y=3$ and $2x-y=0$ intersect at which point?', a: '$(1,2)$', opts: ['$(1,2)$', '$(2,1)$', '$(3,0)$', '$(0,3)$'], h: 'The solution to simultaneous equations is the intersection point.', s: 'From $2x-y=0$, $y=2x$. Substitute into $x+y=3$: $3x=3$, so $x=1$ and $y=2$.', questionImage: graphImage({ title: 'Simultaneous equations', lines: [{ m: -1, b: 3, label: 'x + y = 3', labelX: -2 }, { m: 2, b: 0, label: '2x - y = 0', labelX: 1, colour: '#dc2626' }], points: [{ x: 1, y: 2, label: '(1, 2)', colour: '#111827' }] }) },
  { id: 'quad-01', c: '3A', q: 'Expand and simplify $(2x-3)(3x-5)$.', a: '$6x^2-19x+15$', opts: ['$6x^2-19x+15$', '$6x^2-x+15$', '$6x^2-19x-15$', '$5x^2-19x+15$'], h: 'Use FOIL.', s: '$6x^2-10x-9x+15=6x^2-19x+15$' },
  { id: 'quad-02', c: '3A', q: 'Expand and simplify $(x+5)^2$.', a: '$x^2+10x+25$', opts: ['$x^2+10x+25$', '$x^2+25$', '$x^2+5x+25$', '$2x+10$'], h: 'Use $(a+b)^2=a^2+2ab+b^2$.', s: '$(x+5)^2=x^2+5x+5x+25=x^2+10x+25$' },
  { id: 'quad-03', c: '5B', q: 'Factorise $100-9x^2$.', a: '$(10-3x)(10+3x)$', opts: ['$(10-3x)(10+3x)$', '$(10-9x)(10+x)$', '$(10-3x)^2$', '$(3x-10)(3x+10)$'], h: 'Recognise a difference of two squares.', s: '$100-9x^2=10^2-(3x)^2=(10-3x)(10+3x)$' },
  { id: 'quad-04', c: '5B', q: 'Factorise $m^2+4m-32$.', a: '$(m+8)(m-4)$', opts: ['$(m+8)(m-4)$', '$(m-8)(m+4)$', '$(m+16)(m-2)$', '$(m+4)(m-8)$'], h: 'Find two numbers that multiply to -32 and add to 4.', s: '$8 \\times -4=-32$ and $8-4=4$, so $m^2+4m-32=(m+8)(m-4)$' },
  { id: 'quad-05', c: '5A', q: 'Solve $x^2-25=0$.', a: '$x=\\pm5$', opts: ['$x=\\pm5$', '$x=25$', '$x=-25$', '$x=\\pm\\sqrt{25x}$'], h: 'Use the difference of squares or square root both sides.', s: '$x^2=25 \\Rightarrow x=\\pm5$' },
  { id: 'quad-06', c: '5A', q: 'Solve $x^2+5x+4=0$.', a: '$x=-1,-4$', opts: ['$x=-1,-4$', '$x=1,4$', '$x=-2,-2$', '$x=1,-4$'], h: 'Factor the quadratic.', s: '$x^2+5x+4=(x+1)(x+4)=0$, so $x=-1$ or $x=-4$' },
  { id: 'quad-07', c: '5A', q: 'Solve $x^2-3x-10=0$.', a: '$x=5,-2$', opts: ['$x=5,-2$', '$x=-5,2$', '$x=10,-1$', '$x=3,-10$'], h: 'Find two numbers that multiply to -10 and add to -3.', s: '$x^2-3x-10=(x-5)(x+2)=0$, so $x=5$ or $x=-2$' },
  { id: 'quad-08', c: '5F', q: 'Solve $2x^2-3x-4=0$ using the quadratic formula.', a: '$x=\\frac{3\\pm\\sqrt{41}}{4}$', opts: ['$x=\\frac{3\\pm\\sqrt{41}}{4}$', '$x=\\frac{-3\\pm\\sqrt{41}}{4}$', '$x=\\frac{3\\pm\\sqrt{23}}{4}$', '$x=\\frac{3\\pm\\sqrt{41}}{2}$'], h: 'Use $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$.', s: '$x=\\frac{3\\pm\\sqrt{(-3)^2-4(2)(-4)}}{4}=\\frac{3\\pm\\sqrt{41}}{4}$' },
  { id: 'quad-09', c: '5D', q: 'Complete the square: $x^2+6x+5$.', a: '$(x+3)^2-4$', opts: ['$(x+3)^2-4$', '$(x+6)^2-31$', '$(x+3)^2+5$', '$(x-3)^2-4$'], h: 'Half of 6 is 3; add and subtract $3^2$.', s: '$x^2+6x+5=(x+3)^2-9+5=(x+3)^2-4$' },
  { id: 'quad-10', c: '5D', q: 'Solve $x^2+4x=6$ by completing the square.', a: '$x=-2\\pm\\sqrt{10}$', opts: ['$x=-2\\pm\\sqrt{10}$', '$x=2\\pm\\sqrt{10}$', '$x=-4\\pm\\sqrt{6}$', '$x=-2\\pm\\sqrt{6}$'], h: 'Add $4$ to both sides.', s: '$x^2+4x+4=10 \\Rightarrow (x+2)^2=10 \\Rightarrow x=-2\\pm\\sqrt{10}$' }
];

async function deleteExisting(collRef) {
  const snap = await collRef.where('sourceId', '==', SOURCE_ID).get();
  if (snap.empty) return 0;

  let deleted = 0;
  for (let i = 0; i < snap.docs.length; i += 450) {
    const batch = db.batch();
    snap.docs.slice(i, i + 450).forEach(docSnap => {
      batch.delete(docSnap.ref);
      deleted += 1;
    });
    await batch.commit();
  }
  return deleted;
}

async function seed() {
  const collRef = db.collection('questions');
  const deleted = await deleteExisting(collRef);
  console.log(`Deleted ${deleted} existing questions for ${SOURCE_ID}.`);

  const batchId = `${SOURCE_ID}-${Date.now()}`;
  let written = 0;

  for (let i = 0; i < questions.length; i += 450) {
    const batch = db.batch();
    questions.slice(i, i + 450).forEach(qData => {
      const meta = topicMeta[qData.c];
      if (!meta) throw new Error(`Missing topic metadata for ${qData.c}`);

      const shuffledOpts = qData.opts
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      const correctIndex = shuffledOpts.indexOf(qData.a);
      if (correctIndex < 0) throw new Error(`Correct answer missing from options for ${qData.id}`);

      const docRef = collRef.doc();
      batch.set(docRef, {
        year: 'Year 10',
        course: 'Advanced',
        chapterId: meta.chapterId,
        chapterTitle: meta.chapterTitle,
        topicId: meta.topicId,
        topicCode: qData.c,
        topicTitle: meta.topicTitle,
        isManual: true,
        sourceId: SOURCE_ID,
        sourcePdf: 'T2 math_ algebra, linear, equation & formula.pdf',
        title: qData.q.replace(/\$/g, '').slice(0, 60),
        question: qData.q,
        questionImage: qData.questionImage || '',
        difficulty: qData.difficulty || 'medium',
        timeLimit: qData.timeLimit || 120,
        type: 'multiple_choice',
        options: shuffledOpts.map(o => ({ text: o, imageUrl: '' })),
        answer: correctIndex.toString(),
        hint: qData.h,
        solution: qData.s,
        batchId,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      written += 1;
    });
    await batch.commit();
  }

  console.log(`Successfully added ${written} Year 10 T2 algebra/linear/formula questions.`);
  console.log(`Graph questions added: ${questions.filter(q => q.questionImage).length}`);
}

seed()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
