const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q3D -----
  const svgQ3d = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="140" y="145" class="text-math">O</text>

  <path d="M 150,50 L 63.4,200 L 242.7,112.6 Z" class="line" />
  <path d="M 150,150 L 150,50" class="line" />
  <path d="M 150,150 L 242.7,112.6" class="line" />

  <path d="M 168.5,142.5 A 20 20 0 0 0 150,130" class="arc" />
  <text x="165" y="120" class="text-label">68°</text>

  <path d="M 75.9,178.4 A 25 25 0 0 1 85.8,189.1" class="arc" />
  <text x="85" y="175" class="text-math" fill="#3b82f6">β</text>

  <text x="145" y="40" class="text-math">J</text>
  <text x="45" y="210" class="text-math">K</text>
  <text x="250" y="105" class="text-math">M</text>
</svg>`;

  const stepsQ3d = [
    {
      explanation: "Identify the relationship between the central angle and inscribed angle.",
      workingOut: "The central angle \\( \\angle MOJ = 68^\\circ \\) and the inscribed angle \\( \\beta = \\angle MKJ \\) both subtend the same arc \\( MJ \\).",
      graphData: null
    },
    {
      explanation: "Calculate the value of \\( \\beta \\).",
      workingOut: "The inscribed angle is half of the central angle subtending the same arc. Therefore, \\( \\beta = \\frac{1}{2} \\times 68^\\circ = 34^\\circ \\).",
      graphData: null
    }
  ];

  const optionsQ3d = [
    { text: "\\( \\beta = 36^\\circ \\)", imageUrl: "" },
    { text: "\\( \\beta = 33^\\circ \\)", imageUrl: "" },
    { text: "\\( \\beta = 34^\\circ \\)", imageUrl: "" },
    { text: "\\( \\beta = 35^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q3E -----
  const svgQ3e = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="140" y="165" class="text-math">O</text>

  <path d="M 150,50 L 63.4,200 L 247.8,170.7 Z" class="line" />
  <path d="M 150,150 L 150,50" class="line" />
  <path d="M 150,150 L 247.8,170.7" class="line" />

  <path d="M 169.5,154.1 A 20 20 0 1 0 150,130" class="arc" />
  <text x="140" y="195" class="text-label">258°</text>

  <path d="M 73.4,182.7 A 20 20 0 0 1 83.1,196.9" class="arc" />
  <text x="85" y="185" class="text-math" fill="#3b82f6">θ</text>

  <text x="145" y="40" class="text-math">J</text>
  <text x="45" y="210" class="text-math">K</text>
  <text x="255" y="180" class="text-math">M</text>
</svg>`;

  const stepsQ3e = [
    {
      explanation: "Identify the relationship between the reflex central angle and inscribed angle.",
      workingOut: "The reflex central angle \\( \\text{reflex } \\angle MOJ = 258^\\circ \\) and the inscribed angle \\( \\theta = \\angle JKM \\) both subtend the same major arc \\( MJ \\).",
      graphData: null
    },
    {
      explanation: "Calculate the value of \\( \\theta \\).",
      workingOut: "The inscribed angle is half of the central angle subtending the same arc. Therefore, \\( \\theta = \\frac{1}{2} \\times 258^\\circ = 129^\\circ \\).",
      graphData: null
    }
  ];

  const optionsQ3e = [
    { text: "\\( \\theta = 127^\\circ \\)", imageUrl: "" },
    { text: "\\( \\theta = 129^\\circ \\)", imageUrl: "" },
    { text: "\\( \\theta = 130^\\circ \\)", imageUrl: "" },
    { text: "\\( \\theta = 131^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q3F -----
  const svgQ3f = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="145" y="140" class="text-math">O</text>

  <path d="M 85.7,226.6 L 150,50 L 214.3,226.6 Z" class="line" />
  <path d="M 150,150 L 85.7,226.6" class="line" />
  <path d="M 150,150 L 214.3,226.6" class="line" />

  <path d="M 137.1,165.3 A 20 20 0 0 0 162.9,165.3" class="arc" />
  <text x="140" y="185" class="text-label">80°</text>

  <path d="M 139.7,78.2 A 30 30 0 0 0 160.3,78.2" class="arc" />
  <text x="145" y="100" class="text-math" fill="#3b82f6">α</text>

  <text x="70" y="240" class="text-math">A</text>
  <text x="220" y="240" class="text-math">B</text>
  <text x="145" y="40" class="text-math">P</text>
</svg>`;

  const stepsQ3f = [
    {
      explanation: "Identify the relationship between the central angle and inscribed angle.",
      workingOut: "The central angle \\( \\angle BOA = 80^\\circ \\) and the inscribed angle \\( \\alpha = \\angle APB \\) both subtend the same arc \\( AB \\).",
      graphData: null
    },
    {
      explanation: "Calculate the value of \\( \\alpha \\).",
      workingOut: "The inscribed angle is half of the central angle. Therefore, \\( \\alpha = \\frac{1}{2} \\times 80^\\circ = 40^\\circ \\).",
      graphData: null
    }
  ];

  const optionsQ3f = [
    { text: "\\( \\alpha = 42^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 39^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 40^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 41^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q3G -----
  const svgQ3g = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="135" y="145" class="text-math">O</text>

  <path d="M 200,236.6 L 50,150 L 250,150 Z" class="line" />
  <path d="M 150,150 L 200,236.6" class="line" />
  <path d="M 150,150 L 250,150" class="line" />

  <path d="M 175,150 A 25 25 0 0 1 162.5,171.6" class="arc" />
  <text x="180" y="170" class="text-label">60°</text>

  <path d="M 80,150 A 30 30 0 0 1 76,165" class="arc" />
  <text x="90" y="163" class="text-math" fill="#3b82f6">β</text>

  <text x="195" y="255" class="text-math">X</text>
  <text x="30" y="155" class="text-math">Q</text>
  <text x="260" y="155" class="text-math">P</text>
</svg>`;

  const stepsQ3g = [
    {
      explanation: "Identify the relationship between the central angle and inscribed angle.",
      workingOut: "The central angle \\( \\angle POX = 60^\\circ \\) and the inscribed angle \\( \\beta = \\angle PQX \\) both subtend the same arc \\( PX \\).",
      graphData: null
    },
    {
      explanation: "Calculate the value of \\( \\beta \\).",
      workingOut: "The inscribed angle is half of the central angle. Therefore, \\( \\beta = \\frac{1}{2} \\times 60^\\circ = 30^\\circ \\).",
      graphData: null
    }
  ];

  const optionsQ3g = [
    { text: "\\( \\beta = 32^\\circ \\)", imageUrl: "" },
    { text: "\\( \\beta = 29^\\circ \\)", imageUrl: "" },
    { text: "\\( \\beta = 30^\\circ \\)", imageUrl: "" },
    { text: "\\( \\beta = 31^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q3H -----
  const svgQ3h = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="145" y="140" class="text-math">O</text>

  <path d="M 85.7,226.6 L 150,50 L 214.3,226.6 Z" class="line" />
  <path d="M 150,150 L 85.7,226.6" class="line" />
  <path d="M 150,150 L 214.3,226.6" class="line" />

  <path d="M 160.3,78.2 A 30 30 0 0 1 139.7,78.2" class="arc" />
  <text x="140" y="95" class="text-label">50°</text>

  <path d="M 162.9,165.3 A 20 20 0 0 1 137.1,165.3" class="arc" />
  <text x="145" y="185" class="text-math" fill="#3b82f6">γ</text>

  <text x="70" y="240" class="text-math">K</text>
  <text x="145" y="40" class="text-math">L</text>
  <text x="220" y="240" class="text-math">J</text>
</svg>`;

  const stepsQ3h = [
    {
      explanation: "Identify the relationship between the central angle and inscribed angle.",
      workingOut: "The central angle \\( \\gamma = \\angle JOK \\) and the inscribed angle \\( \\angle JLK = 50^\\circ \\) both subtend the same arc \\( JK \\).",
      graphData: null
    },
    {
      explanation: "Calculate the value of \\( \\gamma \\).",
      workingOut: "The central angle is twice the inscribed angle subtending the same arc. Therefore, \\( \\gamma = 2 \\times 50^\\circ = 100^\\circ \\).",
      graphData: null
    }
  ];

  const optionsQ3h = [
    { text: "\\( \\gamma = 102^\\circ \\)", imageUrl: "" },
    { text: "\\( \\gamma = 100^\\circ \\)", imageUrl: "" },
    { text: "\\( \\gamma = 101^\\circ \\)", imageUrl: "" },
    { text: "\\( \\gamma = 99^\\circ \\)", imageUrl: "" }
  ];

  const updates = [
    { id: 'y10-13a-q3d', svg: svgQ3d, steps: stepsQ3d, options: optionsQ3d },
    { id: 'y10-13a-q3e', svg: svgQ3e, steps: stepsQ3e, options: optionsQ3e },
    { id: 'y10-13a-q3f', svg: svgQ3f, steps: stepsQ3f, options: optionsQ3f },
    { id: 'y10-13a-q3g', svg: svgQ3g, steps: stepsQ3g, options: optionsQ3g },
    { id: 'y10-13a-q3h', svg: svgQ3h, steps: stepsQ3h, options: optionsQ3h }
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
