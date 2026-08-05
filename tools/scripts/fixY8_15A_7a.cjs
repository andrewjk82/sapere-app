const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Triangle: base=20, hypotenuse=13, h=12 (5-12-13 right triangle on each side)
  // Vertices: A(30,230), B(230,230), C(130,50)
  // Dashed height from C(130,50) to H(130,230)
  // Base AB = 200px (represents 20 units)
  // Height = 180px (represents 12 units... scaled)
  // Scale: 10px = 1 unit  -> base=200, h=120
  // Hypotenuse from A(30,230) to C(130,110) -> 5 units from A horizontally, 12 units height
  // A(30,230), B(230,230), C(130,110): base=200px(20), left horizontal=100px(10->5? no)
  // Actually 5-12-13: horizontal=5, vertical=12, hyp=13
  // So horizontal offset from base-edge to foot of altitude = 5
  // Left side: A(30,230) to foot H, H is 5 units right of A = H(80, 230)... 
  // Wait - we need to centre it nicely. Let scale: 1 unit = 15px
  // base = 20 units = 300px (too wide for 300 viewbox)
  // Let scale: 1 unit = 12px
  // base = 20 * 12 = 240px, h = 12 * 12 = 144px
  // A(30, 214), B(270, 214), H(30 + 5*12, 214) = H(90, 214), C(90, 70)
  // Hypotenuse AC: from A(30,214) to C(90,70): dx=60(5 units), dy=144(12 units) -> hyp=sqrt(60^2+144^2)=sqrt(3600+20736)=sqrt(24336)=156px=13units ✓
  // BC: from B(270,214) to C(90,70): dx=180(15 units), dy=144(12 units) -> hyp=sqrt(180^2+144^2)=sqrt(32400+20736)=sqrt(53136)≠13 units
  // So this is NOT a symmetric triangle. It's a 5-12-13 triangle on the left, 
  // with base from A to B. The altitude splits base into left=5, right=15? Then Area = ½×20×12=120 ✓
  // Let's use scale 1unit=13px to keep it manageable:
  // base=260, h=156. ViewBox=320x280
  // A(30,226), B(290,226), H(30+65,226)=H(95,226)... H is 5 units from A = 5*13=65px from A
  // C(95, 226-156) = C(95, 70)
  // 

  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 280" width="340" height="280" style="font-family:sans-serif;">
  <defs>
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
      <path d="M6,0 L0,2 L6,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-end-rot" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-start-rot" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
      <path d="M6,0 L0,2 L6,4 Z" fill="#555"/>
    </marker>
  </defs>

  <!-- Triangle A(30,220) B(290,220) C(95,64) -->
  <!-- Scale: 1 unit = 13px -->
  <!-- base AB = 20 units = 260px -->
  <!-- H = foot of altitude, 5 units from A = (30+65, 220) = (95, 220) -->
  <!-- height HC = 12 units = 156px -> C = (95, 220-156) = (95, 64) -->
  <!-- Verify AC: sqrt(65^2+156^2) = sqrt(4225+24336) = sqrt(28561) = 169 = 13*13... so 169px = 13 units ✓ -->

  <polygon points="30,220 290,220 95,64" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Dashed height line -->
  <line x1="95" y1="64" x2="95" y2="220" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
  
  <!-- Right angle at H(95,220) -->
  <polyline points="95,205 110,205 110,220" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Label h on the dashed line -->
  <text x="75" y="148" text-anchor="middle" font-size="15" font-style="italic" font-weight="bold" fill="#1e40af">h</text>

  <!-- Hypotenuse label: 13 -->
  <text x="52" y="155" text-anchor="middle" font-size="13" font-weight="bold" fill="#333" transform="rotate(-68,52,155)">13</text>

  <!-- Right part label for base context -->
  <!-- Label "20" for the whole base -->
  <!-- Dimension line for base 20 -->
  <line x1="30" y1="220" x2="30" y2="258" stroke="#777" stroke-width="1"/>
  <line x1="290" y1="220" x2="290" y2="258" stroke="#777" stroke-width="1"/>
  <line x1="30" y1="248" x2="290" y2="248" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="160" y="241" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">20</text>

  <!-- Label "13" on hypotenuse AC more clearly -->
  <text x="48" y="140" text-anchor="end" font-size="14" font-weight="bold" fill="#333">13</text>
</svg>
</div>`;

  const questionText = `Use Pythagoras' theorem to find \\(h\\).

${svg}`;

  const newSteps = [
    {
      explanation: "Looking at the triangle, the dashed line \\(h\\) is the height (altitude) which creates a right angle with the base. This splits the triangle into a right-angled triangle with hypotenuse 13.",
      workingOut: "\\(\\text{We can see a right-angled triangle with hypotenuse} = 13 \\text{ and one leg} = 5\\)",
      graphData: null
    },
    {
      explanation: "Apply Pythagoras' theorem: \\(c^2 = a^2 + b^2\\). Here \\(c = 13\\) (hypotenuse) and one leg \\(a = 5\\). Rearrange to find \\(h\\).",
      workingOut: [
        "\\(13^2 = 5^2 + h^2\\)",
        "\\(169 = 25 + h^2\\)",
        "\\(h^2 = 169 - 25 = 144\\)"
      ].join('\n'),
      graphData: null
    },
    {
      explanation: "Take the square root of both sides to find \\(h\\).",
      workingOut: [
        "\\(h = \\sqrt{144}\\)",
        "\\(h = 12\\)"
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is 12 -> shuffle to B (index 1)
  const newOpts = [
    { text: '\\(11\\)', imageUrl: '' },
    { text: '\\(12\\)', imageUrl: '' }, // Correct -> B
    { text: '\\(13\\)', imageUrl: '' },
    { text: '\\(-12\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15a-q7a').update({
    question: questionText,
    type: 'multiple_choice',
    options: newOpts,
    answer: '1',
    solutionSteps: newSteps,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q7');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q7a') {
          return {
            ...sq,
            question: questionText,
            type: 'multiple_choice',
            options: newOpts,
            answer: '1',
            solutionSteps: newSteps,
            graphData: null
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated y8-15a-q7a with SVG, clean steps, shuffled options");
  process.exit(0);
}

run().catch(console.error);
