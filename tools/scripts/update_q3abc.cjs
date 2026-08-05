const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q3A -----
  const svgQ3a = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="145" y="145" class="text-math">O</text>

  <!-- Triangle ABC -->
  <path d="M 150,50 L 63.4,200 L 236.6,200 Z" class="line" />
  <!-- Radii -->
  <path d="M 150,150 L 63.4,200" class="line" />
  <path d="M 150,150 L 236.6,200" class="line" />

  <!-- Arcs -->
  <path d="M 167.3,160 A 20 20 0 0 1 132.7,160" class="arc" />
  <text x="140" y="185" class="text-label">55°</text>

  <path d="M 162.5,71.6 A 25 25 0 0 1 137.5,71.6" class="arc" />
  <text x="145" y="95" class="text-math" fill="#3b82f6">α</text>

  <text x="145" y="40" class="text-math">A</text>
  <text x="45" y="210" class="text-math">B</text>
  <text x="245" y="210" class="text-math">C</text>
</svg>`;

  const stepsQ3a = [
    {
      explanation: "Identify the relationship between the central angle and inscribed angle.",
      workingOut: "The central angle \\( \\angle COB = 55^\\circ \\) and the inscribed angle \\( \\alpha = \\angle CAB \\) both subtend the same arc \\( CB \\).",
      graphData: null
    },
    {
      explanation: "Calculate the value of \\( \\alpha \\).",
      workingOut: "The inscribed angle theorem states that an angle inscribed in a circle is half of the central angle that subtends the same arc on the circle. Therefore, \\( \\alpha = \\frac{1}{2} \\times 55^\\circ = 27.5^\\circ \\).",
      graphData: null
    }
  ];

  const optionsQ3a = [
    { text: "\\( \\alpha = -27.5^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 26.5^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 27.5^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 28.5^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q3B -----
  const svgQ3b = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="145" y="145" class="text-math">O</text>

  <!-- Triangle ABC -->
  <path d="M 73.4,85.7 L 226.6,85.7 L 150,250 Z" class="line" />
  <!-- Radii -->
  <path d="M 150,150 L 73.4,85.7" class="line" />
  <path d="M 150,150 L 226.6,85.7" class="line" />

  <!-- Arcs -->
  <path d="M 165.3,137.1 A 20 20 0 0 0 134.7,137.1" class="arc" />
  <text x="140" y="125" class="text-label">88°</text>

  <path d="M 160.5,227.4 A 25 25 0 0 0 139.5,227.4" class="arc" />
  <text x="145" y="215" class="text-math" fill="#3b82f6">γ</text>

  <text x="55" y="85" class="text-math">A</text>
  <text x="235" y="85" class="text-math">B</text>
  <text x="145" y="270" class="text-math">C</text>
</svg>`;

  const stepsQ3b = [
    {
      explanation: "Identify the relationship between the central angle and inscribed angle.",
      workingOut: "The central angle \\( \\angle AOB = 88^\\circ \\) and the inscribed angle \\( \\gamma = \\angle ACB \\) both subtend the same arc \\( AB \\).",
      graphData: null
    },
    {
      explanation: "Calculate the value of \\( \\gamma \\).",
      workingOut: "The inscribed angle is half of the central angle subtending the same arc. Therefore, \\( \\gamma = \\frac{1}{2} \\times 88^\\circ = 44^\\circ \\).",
      graphData: null
    }
  ];

  const optionsQ3b = [
    { text: "\\( \\gamma = 46^\\circ \\)", imageUrl: "" },
    { text: "\\( \\gamma = 43^\\circ \\)", imageUrl: "" },
    { text: "\\( \\gamma = 44^\\circ \\)", imageUrl: "" },
    { text: "\\( \\gamma = 45^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q3C -----
  const svgQ3c = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="145" y="170" class="text-math">O</text>

  <!-- Triangle ABC -->
  <path d="M 51.5,167.4 L 248.5,167.4 L 150,50 Z" class="line" />
  <!-- Radii -->
  <path d="M 150,150 L 51.5,167.4" class="line" />
  <path d="M 150,150 L 248.5,167.4" class="line" />

  <!-- Arcs -->
  <path d="M 137.2,65.2 A 20 20 0 0 0 162.8,65.2" class="arc" />
  <text x="140" y="90" class="text-label">95°</text>

  <path d="M 125.4,154.3 A 25 25 0 1 1 174.6,154.3" class="arc" />
  <text x="145" y="115" class="text-math" fill="#3b82f6">α</text>

  <text x="35" y="175" class="text-math">A</text>
  <text x="255" y="175" class="text-math">B</text>
  <text x="145" y="40" class="text-math">C</text>
</svg>`;

  const stepsQ3c = [
    {
      explanation: "Identify the relationship between the inscribed angle and reflex central angle.",
      workingOut: "The inscribed angle \\( \\angle ACB = 95^\\circ \\) subtends the major arc \\( AB \\). The central angle that subtends this same major arc is the reflex angle \\( \\alpha = \\text{reflex } \\angle AOB \\).",
      graphData: null
    },
    {
      explanation: "Calculate the value of \\( \\alpha \\).",
      workingOut: "The central angle is twice the inscribed angle subtending the same arc. Therefore, \\( \\alpha = 2 \\times 95^\\circ = 190^\\circ \\).",
      graphData: null
    }
  ];

  const optionsQ3c = [
    { text: "\\( \\alpha = 192^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 189^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 190^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 191^\\circ \\)", imageUrl: "" }
  ];

  const updates = [
    { id: 'y10-13a-q3a', svg: svgQ3a, steps: stepsQ3a, options: optionsQ3a },
    { id: 'y10-13a-q3b', svg: svgQ3b, steps: stepsQ3b, options: optionsQ3b },
    { id: 'y10-13a-q3c', svg: svgQ3c, steps: stepsQ3c, options: optionsQ3c }
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
