const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q2A -----
  const svgQ2a = `<svg viewBox="0 0 300 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="145" y="170" class="text-math">O</text>

  <!-- Triangle APB: A=(50,150), B=(250,150), P=(100, 63.4) -->
  <path d="M 50,150 L 250,150 L 100,63.4 Z" class="line" />

  <!-- Arcs -->
  <!-- alpha at P(100, 63.4) -->
  <path d="M 113.8,71.4 A 16 16 0 0 1 91.3,78.4" class="arc" />
  <text x="96" y="94" class="text-math" fill="#3b82f6">α</text>

  <!-- 15 deg at A(50, 150) -->
  <path d="M 90,150 A 40 40 0 0 0 70,115.4" class="arc" />
  <text x="95" y="138" class="text-label">15°</text>

  <!-- beta at B(250, 150) -->
  <path d="M 235,141.3 A 18 18 0 0 0 232,150" class="arc" />
  <text x="216" y="142" class="text-math" fill="#3b82f6">β</text>

  <!-- Labels -->
  <text x="30" y="155" class="text-math">A</text>
  <text x="260" y="155" class="text-math">B</text>
  <text x="95" y="50" class="text-math">P</text>
</svg>`;

  const stepsQ2a = [
    {
      explanation: "Identify the angle in a semicircle.",
      workingOut: "The triangle \\( APB \\) is inscribed in a semicircle because \\( AB \\) passes through the center \\( O \\), making it a diameter. According to Thales' theorem, the angle subtended by a diameter at the circumference is a right angle. Therefore, \\( \\alpha = \\angle APB = 90^\\circ \\).",
      graphData: null
    },
    {
      explanation: "Use the angle sum of a triangle.",
      workingOut: "The sum of the interior angles in any triangle is \\( 180^\\circ \\). For \\( \\Delta APB \\), we have \\( \\angle BAP + \\angle APB + \\angle PBA = 180^\\circ \\).",
      graphData: null
    },
    {
      explanation: "Calculate the unknown angle \\( \\beta \\).",
      workingOut: "Substituting the known values gives \\( 15^\\circ + 90^\\circ + \\beta = 180^\\circ \\). Solving this yields \\( \\beta = 180^\\circ - 105^\\circ = 75^\\circ \\).",
      graphData: null
    },
    {
      explanation: "State the final answer.",
      workingOut: "The values are \\( \\alpha = 90 \\) and \\( \\beta = 75 \\).",
      graphData: null
    }
  ];

  // ----- Q2B -----
  const svgQ2b = `<svg viewBox="0 0 300 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="145" y="170" class="text-math">O</text>

  <!-- Triangle PTQ: P=(50,150), Q=(250,150), T=(200, 63.4) -->
  <path d="M 50,150 L 250,150 L 200,63.4 Z" class="line" />

  <!-- Arcs -->
  <!-- theta at T(200, 63.4) -->
  <path d="M 208.7,78.4 A 16 16 0 0 1 186.2,71.4" class="arc" />
  <text x="194" y="94" class="text-math" fill="#3b82f6">θ</text>

  <!-- 65 deg at P(50, 150) -->
  <path d="M 90,150 A 40 40 0 0 0 84.6,130" class="arc" />
  <text x="95" y="142" class="text-label">65°</text>

  <!-- Labels -->
  <text x="30" y="155" class="text-math">P</text>
  <text x="260" y="155" class="text-math">Q</text>
  <text x="195" y="50" class="text-math">T</text>
</svg>`;

  const stepsQ2b = [
    {
      explanation: "Identify the angle in a semicircle.",
      workingOut: "The triangle \\( PTQ \\) is inscribed in a semicircle because \\( PQ \\) passes through the center \\( O \\), making it a diameter. According to Thales' theorem, the angle subtended by a diameter at the circumference is always a right angle.",
      graphData: null
    },
    {
      explanation: "Determine the value of \\( \\theta \\).",
      workingOut: "Since \\( T \\) lies on the circumference and subtends the diameter \\( PQ \\), the angle \\( \\angle PTQ \\) must be \\( 90^\\circ \\). Therefore, \\( \\theta = 90^\\circ \\). (Note: The angle \\( 65^\\circ \\) is extra information not needed to find \\( \\theta \\)).",
      graphData: null
    }
  ];

  // ----- Q2C -----
  const svgQ2c = `<svg viewBox="0 0 220 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="110" cy="150" r="100" class="circle" />
  <circle cx="110" cy="150" r="3" class="point" />
  <text x="120" y="155" class="text-math">O</text>

  <!-- Triangle JLK: J=(110,50), K=(110,250), L=(196.6, 100) -->
  <path d="M 110,50 L 110,250 L 196.6,100 Z" class="line" />

  <!-- Arcs -->
  <!-- theta at L(196.6, 100) -->
  <path d="M 182.7,108 A 16 16 0 0 1 182.7,92" class="arc" />
  <text x="165" y="105" class="text-math" fill="#3b82f6">θ</text>

  <!-- 80 deg at J(110, 50) -->
  <path d="M 110,90 A 40 40 0 0 0 130,84.6" class="arc" />
  <text x="115" y="95" class="text-label">80°</text>

  <!-- Labels -->
  <text x="105" y="40" class="text-math">J</text>
  <text x="105" y="270" class="text-math">K</text>
  <text x="205" y="100" class="text-math">L</text>
</svg>`;

  const stepsQ2c = [
    {
      explanation: "Identify the angle in a semicircle.",
      workingOut: "The triangle \\( JLK \\) is inscribed in a semicircle because \\( JK \\) passes through the center \\( O \\), making it a diameter. According to Thales' theorem, the angle subtended by a diameter at the circumference is always a right angle.",
      graphData: null
    },
    {
      explanation: "Determine the value of \\( \\theta \\).",
      workingOut: "Since \\( L \\) lies on the circumference and subtends the diameter \\( JK \\), the angle \\( \\angle JLK \\) must be \\( 90^\\circ \\). Therefore, \\( \\theta = 90^\\circ \\). (Note: The angle \\( 80^\\circ \\) is extra information not needed to find \\( \\theta \\)).",
      graphData: null
    }
  ];

  const updates = [
    { id: 'y10-13a-q2a', svg: svgQ2a, steps: stepsQ2a },
    { id: 'y10-13a-q2b', svg: svgQ2b, steps: stepsQ2b },
    { id: 'y10-13a-q2c', svg: svgQ2c, steps: stepsQ2c }
  ];

  let anyUpdated = false;
  for (const update of updates) {
    const docRef = db.collection('questions').doc(update.id);
    const docSnap = await docRef.get();
    
    if (docSnap.exists) {
      let updateObj = {
        graphData: { svg: update.svg },
        solutionSteps: update.steps,
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
