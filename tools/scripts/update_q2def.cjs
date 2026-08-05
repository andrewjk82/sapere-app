const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q2D -----
  const svgQ2d = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="155" y="155" class="text-math">O</text>

  <!-- RS Diameter -->
  <path d="M 116,56 L 184,244" class="line" />
  <!-- Triangle RST -->
  <path d="M 116,56 L 184,244 L 116,244 Z" class="line" />
  <!-- Radius OT -->
  <path d="M 150,150 L 116,244" class="line" />

  <text x="175" y="235" class="text-label">70°</text>
  <text x="130" y="235" class="text-math" fill="#3b82f6">γ</text>
  <text x="145" y="185" class="text-math" fill="#3b82f6">α</text>
  <text x="122" y="225" class="text-math" fill="#3b82f6">β</text>
  <text x="120" y="145" class="text-math" fill="#3b82f6">θ</text>

  <text x="105" y="50" class="text-math">R</text>
  <text x="195" y="255" class="text-math">S</text>
  <text x="105" y="255" class="text-math">T</text>
</svg>`;

  const stepsQ2d = [
    {
      explanation: "Find \\( \\gamma \\) in isosceles triangle \\( OST \\).",
      workingOut: "Triangle \\( OST \\) is formed by two radii (\\( OS \\) and \\( OT \\)), so it is isosceles. Therefore, \\( \\gamma = \\angle OTS = \\angle OST = 70^\\circ \\).",
      graphData: null
    },
    {
      explanation: "Find \\( \\alpha \\) using the angle sum of triangle \\( OST \\).",
      workingOut: "The angles in \\( \\Delta OST \\) add to \\( 180^\\circ \\). So \\( \\alpha + 70^\\circ + 70^\\circ = 180^\\circ \\), which gives \\( \\alpha = 40^\\circ \\).",
      graphData: null
    },
    {
      explanation: "Find \\( \\theta \\) on the straight line.",
      workingOut: "Angles on the straight line \\( RS \\) add to \\( 180^\\circ \\). Thus, \\( \\theta = 180^\\circ - \\alpha = 180^\\circ - 40^\\circ = 140^\\circ \\).",
      graphData: null
    },
    {
      explanation: "Find \\( \\beta \\) in isosceles triangle \\( ROT \\).",
      workingOut: "Triangle \\( ROT \\) is also isosceles (radii \\( OR \\) and \\( OT \\)). The angles are \\( \\beta, \\beta, \\) and \\( \\theta \\). So \\( 2\\beta + 140^\\circ = 180^\\circ \\), yielding \\( \\beta = 20^\\circ \\).",
      graphData: null
    }
  ];

  const optionsQ2d = [
    { text: "\\( \\alpha = 40^\\circ, \\beta = 70^\\circ, \\gamma = 20^\\circ, \\theta = 140^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 40^\\circ, \\beta = 20^\\circ, \\gamma = 140^\\circ, \\theta = 70^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 40^\\circ, \\beta = 20^\\circ, \\gamma = 70^\\circ, \\theta = 140^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 70^\\circ, \\beta = 20^\\circ, \\gamma = 40^\\circ, \\theta = 140^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q2E -----
  const svgQ2e = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="155" y="165" class="text-math">O</text>

  <!-- XY Diameter -->
  <path d="M 63.4,200 L 236.6,100" class="line" />
  <!-- Triangle XYZ -->
  <path d="M 63.4,200 L 236.6,100 L 132.6,51.5 Z" class="line" />
  <!-- Radius OZ -->
  <path d="M 150,150 L 132.6,51.5" class="line" />

  <text x="165" y="125" class="text-label">70°</text>
  <text x="132" y="70" class="text-math" fill="#3b82f6">α</text>
  <text x="85" y="180" class="text-math" fill="#3b82f6">β</text>

  <text x="50" y="215" class="text-math">X</text>
  <text x="250" y="95" class="text-math">Y</text>
  <text x="125" y="45" class="text-math">Z</text>
</svg>`;

  const stepsQ2e = [
    {
      explanation: "Find \\( \\alpha \\) using the angle in a semicircle.",
      workingOut: "\\( XY \\) is a diameter. The angle \\( \\alpha = \\angle XZY \\) subtends the diameter at the circumference. Therefore, \\( \\alpha = 90^\\circ \\).",
      graphData: null
    },
    {
      explanation: "Find \\( \\beta \\) using the relationship between central and inscribed angles.",
      workingOut: "The angle \\( \\angle ZOY = 70^\\circ \\) is the central angle subtending arc \\( ZY \\). The inscribed angle \\( \\beta = \\angle ZXY \\) subtends the same arc. Therefore, \\( \\beta = \\frac{1}{2} \\times \\angle ZOY = \\frac{70^\\circ}{2} = 35^\\circ \\).",
      graphData: null
    }
  ];

  const optionsQ2e = [
    { text: "\\( \\alpha = 35^\\circ, \\beta = 90^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 90^\\circ, \\beta = 65^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 90^\\circ, \\beta = 35^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 90^\\circ, \\beta = 55^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q2F -----
  const svgQ2f = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="155" y="145" class="text-math">O</text>

  <!-- AB Diameter -->
  <path d="M 51.5,132.6 L 248.5,167.4" class="line" />
  <!-- Triangle AOC -->
  <path d="M 51.5,132.6 L 51.5,167.4 L 150,150 Z" class="line" />

  <text x="145" y="170" class="text-label">160°</text>
  <text x="65" y="145" class="text-math" fill="#3b82f6">θ</text>

  <text x="40" y="125" class="text-math">A</text>
  <text x="260" y="175" class="text-math">B</text>
  <text x="40" y="175" class="text-math">C</text>
</svg>`;

  const stepsQ2f = [
    {
      explanation: "Find the angle \\( \\angle AOC \\) on the straight line.",
      workingOut: "Angles on the straight line \\( AB \\) add to \\( 180^\\circ \\). Therefore, \\( \\angle AOC = 180^\\circ - 160^\\circ = 20^\\circ \\).",
      graphData: null
    },
    {
      explanation: "Find \\( \\theta \\) in the isosceles triangle.",
      workingOut: "Triangle \\( AOC \\) is formed by two radii (\\( OA \\) and \\( OC \\)), so it is isosceles. This means \\( \\angle OAC = \\angle OCA = \\theta \\). The angles sum to \\( 180^\\circ \\): \\( 2\\theta + 20^\\circ = 180^\\circ \\). Solving this yields \\( 2\\theta = 160^\\circ \\), so \\( \\theta = 80^\\circ \\).",
      graphData: null
    }
  ];

  const optionsQ2f = [
    { text: "\\( \\theta = 82^\\circ \\)", imageUrl: "" },
    { text: "\\( \\theta = 79^\\circ \\)", imageUrl: "" },
    { text: "\\( \\theta = 80^\\circ \\)", imageUrl: "" },
    { text: "\\( \\theta = 81^\\circ \\)", imageUrl: "" }
  ];

  const updates = [
    { id: 'y10-13a-q2d', svg: svgQ2d, steps: stepsQ2d, options: optionsQ2d },
    { id: 'y10-13a-q2e', svg: svgQ2e, steps: stepsQ2e, options: optionsQ2e },
    { id: 'y10-13a-q2f', svg: svgQ2f, steps: stepsQ2f, options: optionsQ2f }
  ];

  let anyUpdated = false;
  for (const update of updates) {
    const docRef = db.collection('questions').doc(update.id);
    const docSnap = await docRef.get();
    
    if (docSnap.exists) {
      let updateObj = {
        graphData: { svg: update.svg },
        solutionSteps: update.steps,
        options: update.options,
        updatedAt: FieldValue.serverTimestamp()
      };
      
      await docRef.update(updateObj);
      console.log('Updated ' + update.id);
      anyUpdated = true;
    } else {
      console.log(update.id + ' not found');
    }
  }

  if (anyUpdated) {
    console.log('Syncing chapter index for y10-13a...');
    await touchChapterIndex(db, 'y10-13a'); 
    console.log('Sync complete.');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
