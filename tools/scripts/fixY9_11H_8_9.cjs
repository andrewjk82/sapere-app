const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ─────────────────────────────────────────────────
  // SHARED SVG BUILDERS
  // ─────────────────────────────────────────────────

  function makeSvgQ8() {
    // Circle x²+y²=169, r=13. Rectangle ABCD: A(5,12), B(-5,12), C(-5,-12), D(5,-12)
    const bound = 16;
    const r = 13;
    let grid = '';
    for (let i = -bound; i <= bound; i++) {
      grid += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
      grid += `<line x1="${i}" y1="${-bound}" x2="${i}" y2="${bound}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    }
    const pts = [{x:5,y:12,label:'A(5, 12)'},{x:-5,y:12,label:'B(−5, 12)'},{x:-5,y:-12,label:'C(−5, −12)'},{x:5,y:-12,label:'D(5, −12)'}];
    const rectStr = `<polygon points="5,12 -5,12 -5,-12 5,-12" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-width="0.12"/>`;
    let dots = '';
    let labels = '';
    pts.forEach(p => {
      dots += `<circle cx="${p.x}" cy="${-p.y}" r="0.2" fill="#ef4444"/>`;
    });
    // labels outside transform (no flip)
    const lbls = [
      {x:5.4,y:-12.4,t:'A(5, 12)'},{x:-9.5,y:-12.4,t:'B(−5, 12)'},
      {x:-9.5,y:12.6,t:'C(−5, −12)'},{x:5.4,y:12.6,t:'D(5, −12)'}
    ];
    lbls.forEach(l => { labels += `<text x="${l.x}" y="${l.y}" font-size="0.65" font-family="sans-serif" fill="#ef4444">${l.t}</text>`; });

    return `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="340" height="340" viewBox="${-bound} ${-bound} ${bound*2} ${bound*2}" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1)">
    ${grid}
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <line x1="0" y1="${-bound}" x2="0" y2="${bound}" stroke="#94a3b8" stroke-width="0.12"/>
    <circle cx="0" cy="0" r="${r}" fill="none" stroke="#6366f1" stroke-width="0.1"/>
    ${rectStr}
    ${dots}
  </g>
  ${labels}
  <text x="-14" y="-13" font-size="0.8" fill="#4f46e5" font-family="sans-serif">x²+y²=169</text>
</svg>
</div>`;
  }

  function makeSvgQ9() {
    // Circle x²+y²=36, r=6. Square ABCD: A(0,6), B(6,0), C(0,-6), D(-6,0)
    const bound = 9;
    const r = 6;
    let grid = '';
    for (let i = -bound; i <= bound; i++) {
      grid += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
      grid += `<line x1="${i}" y1="${-bound}" x2="${i}" y2="${bound}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    }
    const squareStr = `<polygon points="0,6 6,0 0,-6 -6,0" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-width="0.12"/>`;
    let dots = '';
    [{x:0,y:6},{x:6,y:0},{x:0,y:-6},{x:-6,y:0}].forEach(p => {
      dots += `<circle cx="${p.x}" cy="${-p.y}" r="0.2" fill="#ef4444"/>`;
    });

    return `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="300" height="300" viewBox="${-bound} ${-bound} ${bound*2} ${bound*2}" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1)">
    ${grid}
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <line x1="0" y1="${-bound}" x2="0" y2="${bound}" stroke="#94a3b8" stroke-width="0.12"/>
    <circle cx="0" cy="0" r="${r}" fill="none" stroke="#6366f1" stroke-width="0.1"/>
    ${squareStr}
    ${dots}
  </g>
  <text x="0.4" y="-6.4" font-size="0.65" font-family="sans-serif" fill="#ef4444">A(0, 6)</text>
  <text x="6.2" y="-0.3" font-size="0.65" font-family="sans-serif" fill="#ef4444">B(6, 0)</text>
  <text x="0.4" y="7" font-size="0.65" font-family="sans-serif" fill="#ef4444">C(0, −6)</text>
  <text x="-8.5" y="-0.3" font-size="0.65" font-family="sans-serif" fill="#ef4444">D(−6, 0)</text>
  <text x="-8.5" y="-7.5" font-size="0.8" fill="#4f46e5" font-family="sans-serif">x²+y²=36</text>
</svg>
</div>`;
  }

  // ─────────────────────────────────────────────────
  // Q8: Rectangle ABCD on circle x²+y²=169
  // A(5,12) given → B(-5,12), C(-5,-12), D(5,-12)
  // ─────────────────────────────────────────────────
  const svgQ8 = makeSvgQ8();
  const stepsQ8 = [
    {
      explanation: "The point \\(A(5, 12)\\) lies on the circle \\(x^2 + y^2 = 169\\). The rectangle \\(ABCD\\) has the \\(x\\)-axis and \\(y\\)-axis as its axes of symmetry. This means the rectangle is perfectly centred at the origin, so each vertex is a reflection of \\(A\\).",
      workingOut: "\\(\\text{Circle: } x^2 + y^2 = 169, \\quad A = (5, 12)\\)",
      graphData: { html: svgQ8 }
    },
    {
      explanation: "To find \\(B\\): The rectangle is symmetric about the \\(y\\)-axis, so \\(B\\) is the reflection of \\(A\\) in the \\(y\\)-axis. Reflect by negating the \\(x\\)-coordinate.",
      workingOut: "\\(B = (-5, 12)\\)"
    },
    {
      explanation: "To find \\(C\\): \\(C\\) is opposite \\(A\\) (reflected through the origin), so both coordinates are negated.",
      workingOut: "\\(C = (-5, -12)\\)"
    },
    {
      explanation: "To find \\(D\\): \\(D\\) is the reflection of \\(A\\) in the \\(x\\)-axis. Reflect by negating the \\(y\\)-coordinate.",
      workingOut: "\\(D = (5, -12)\\)"
    },
    {
      explanation: "All four vertices lie on the circle \\(x^2 + y^2 = 169\\). We can verify: for \\(B(-5,12)\\), \\((-5)^2 + 12^2 = 25 + 144 = 169\\). Confirmed.",
      workingOut: "\\(B(-5, 12), \\quad C(-5, -12), \\quad D(5, -12)\\)"
    }
  ];

  // Shuffled options — correct at index 2
  const optionsQ8 = [
    { text: "\\(B(5, -12), C(-5, 12), D(-5, -12)\\)", imageUrl: "" },
    { text: "\\(B(-5, 12), C(5, -12), D(-5, -12)\\)", imageUrl: "" },
    { text: "\\(B(-5, 12), C(-5, -12), D(5, -12)\\)", imageUrl: "" },
    { text: "\\(B(5, 12), C(-5, 12), D(5, -12)\\)", imageUrl: "" }
  ];

  await db.collection('questions').doc('y9-11h-q8').update({
    options: optionsQ8,
    opts: FieldValue.delete(),
    answer: "\\(B(-5, 12), C(-5, -12), D(5, -12)\\)",
    solution: "",
    solutionSteps: stepsQ8,
    graphData: { html: svgQ8 },
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log("Updated y9-11h-q8");

  // ─────────────────────────────────────────────────
  // Q9: Parent question (teacher_review) — add SVG + steps
  // ─────────────────────────────────────────────────
  const svgQ9 = makeSvgQ9();
  await db.collection('questions').doc('y9-11h-q9').update({
    graphData: { html: svgQ9 },
    solution: "",
    solutionSteps: [],
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log("Updated y9-11h-q9");

  // ─────────────────────────────────────────────────
  // Q9a: Find distance AB where A(0,6), B(6,0)
  // AB = sqrt((6-0)² + (0-6)²) = sqrt(36+36) = 6√2
  // ─────────────────────────────────────────────────
  const stepsQ9a = [
    {
      explanation: "We need the distance between \\(A(0, 6)\\) and \\(B(6, 0)\\). Use the distance formula: \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).",
      workingOut: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
      graphData: { html: svgQ9 }
    },
    {
      explanation: "Substitute the coordinates of \\(A(0, 6)\\) and \\(B(6, 0)\\) into the formula.",
      workingOut: "\\(AB = \\sqrt{(6-0)^2 + (0-6)^2}\\)"
    },
    {
      explanation: "Evaluate each bracket separately.",
      workingOut: "\\(AB = \\sqrt{6^2 + (-6)^2} = \\sqrt{36 + 36} = \\sqrt{72}\\)"
    },
    {
      explanation: "Simplify \\(\\sqrt{72}\\) by finding the largest perfect square factor. \\(72 = 36 \\times 2\\), so \\(\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}\\).",
      workingOut: "\\(AB = 6\\sqrt{2}\\)"
    }
  ];

  // Shuffled options — correct at index 1
  const optionsQ9a = [
    { text: "\\(6\\)", imageUrl: "" },
    { text: "\\(6\\sqrt{2}\\)", imageUrl: "" },
    { text: "\\(\\sqrt{2}\\)", imageUrl: "" },
    { text: "\\(12\\)", imageUrl: "" }
  ];

  await db.collection('questions').doc('y9-11h-q9a').update({
    options: optionsQ9a,
    opts: FieldValue.delete(),
    answer: "\\(6\\sqrt{2}\\)",
    solution: "",
    solutionSteps: stepsQ9a,
    graphData: { html: svgQ9 },
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log("Updated y9-11h-q9a");

  // ─────────────────────────────────────────────────
  // Q9b: Find area of square ABCD
  // side = 6√2, area = (6√2)² = 72
  // ─────────────────────────────────────────────────
  const stepsQ9b = [
    {
      explanation: "We know from part (a) that the side length of the square is \\(AB = 6\\sqrt{2}\\). To find the area of a square, use the formula: Area \\(= \\text{side}^2\\).",
      workingOut: "\\(\\text{Area} = AB^2 = (6\\sqrt{2})^2\\)",
      graphData: { html: svgQ9 }
    },
    {
      explanation: "Expand the square. Remember: \\((a\\sqrt{b})^2 = a^2 \\times b\\).",
      workingOut: "\\((6\\sqrt{2})^2 = 6^2 \\times (\\sqrt{2})^2 = 36 \\times 2\\)"
    },
    {
      explanation: "Multiply to get the final answer.",
      workingOut: "\\(\\text{Area} = 72 \\text{ square units}\\)"
    }
  ];

  // Shuffled options — correct at index 2
  const optionsQ9b = [
    { text: "\\(36\\)", imageUrl: "" },
    { text: "\\(144\\)", imageUrl: "" },
    { text: "\\(72\\)", imageUrl: "" },
    { text: "\\(6\\sqrt{2}\\)", imageUrl: "" }
  ];

  await db.collection('questions').doc('y9-11h-q9b').update({
    options: optionsQ9b,
    opts: FieldValue.delete(),
    answer: "\\(72\\)",
    solution: "",
    solutionSteps: stepsQ9b,
    graphData: { html: svgQ9 },
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log("Updated y9-11h-q9b");

  console.log("All done.");
  process.exit(0);
}

run().catch(console.error);
