const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q3I -----
  const svgQ3i = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="145" y="140" class="text-math">O</text>

  <path d="M 63.4,200 L 132.6,248.5 L 250,150 Z" class="line" />
  <path d="M 150,150 L 63.4,200" class="line" />
  <path d="M 150,150 L 250,150" class="line" />

  <text x="135" y="235" class="text-label">12°</text>
  <text x="155" y="170" class="text-math" fill="#3b82f6">θ</text>

  <text x="45" y="205" class="text-math">R</text>
  <text x="125" y="270" class="text-math">S</text>
  <text x="260" y="155" class="text-math">T</text>
</svg>`;
  const stepsQ3i = [
    { explanation: "Identify central and inscribed angles.", workingOut: "Central angle \\( \\theta = \\angle TOR \\) and inscribed angle \\( \\angle TSR = 12^\\circ \\) subtend arc \\( TR \\).", graphData: null },
    { explanation: "Calculate \\( \\theta \\).", workingOut: "\\( \\theta = 2 \\times 12^\\circ = 24^\\circ \\).", graphData: null }
  ];
  const optionsQ3i = [
    { text: "\\( \\theta = 26^\\circ \\)", imageUrl: "" }, { text: "\\( \\theta = 23^\\circ \\)", imageUrl: "" },
    { text: "\\( \\theta = 24^\\circ \\)", imageUrl: "" }, { text: "\\( \\theta = 25^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q4A -----
  const svgQ4a = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="145" y="145" class="text-math">O</text>

  <path d="M 63.4,200 L 150,50 L 236.6,200 Z" class="line" />
  <path d="M 150,150 L 63.4,200" class="line" />
  <path d="M 150,150 L 236.6,200" class="line" />

  <text x="135" y="130" class="text-label">240°</text>
  <text x="145" y="170" class="text-math" fill="#3b82f6">α</text>
  <text x="145" y="80" class="text-math" fill="#3b82f6">β</text>

  <text x="45" y="215" class="text-math">A</text>
  <text x="250" y="215" class="text-math">B</text>
  <text x="145" y="40" class="text-math">P</text>
</svg>`;
  const stepsQ4a = [
    { explanation: "Find \\( \\alpha \\).", workingOut: "The reflex angle \\( \\angle BOA = 240^\\circ \\). The interior central angle \\( \\alpha = 360^\\circ - 240^\\circ = 120^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\beta \\).", workingOut: "The inscribed angle \\( \\beta \\) is half of the central angle \\( \\alpha \\). So \\( \\beta = 120^\\circ / 2 = 60^\\circ \\).", graphData: null }
  ];
  const optionsQ4a = [
    { text: "\\( \\alpha = 120^\\circ, \\beta = 61^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 120^\\circ, \\beta = 59^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 120^\\circ, \\beta = 60^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 121^\\circ, \\beta = 60^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q4B -----
  const svgQ4b = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="145" y="155" class="text-math">O</text>

  <path d="M 50,150 L 115.8,56 L 200,63.4 Z" class="line" />
  <path d="M 150,150 L 50,150" class="line" />
  <path d="M 150,150 L 200,63.4" class="line" />

  <text x="120" y="165" class="text-label">300°</text>
  <text x="105" y="80" class="text-math" fill="#3b82f6">θ</text>

  <text x="35" y="155" class="text-math">P</text>
  <text x="105" y="45" class="text-math">A</text>
  <text x="210" y="60" class="text-math">B</text>
</svg>`;
  const stepsQ4b = [
    { explanation: "Find the minor central angle.", workingOut: "Reflex \\( \\angle BOP = 300^\\circ \\). Minor \\( \\angle BOP = 360^\\circ - 300^\\circ = 60^\\circ \\).", graphData: null },
    { explanation: "Calculate \\( \\theta \\).", workingOut: "\\( \\theta \\) is the inscribed angle for minor arc \\( BP \\). So \\( \\theta = 60^\\circ / 2 = 30^\\circ \\).", graphData: null }
  ];
  const optionsQ4b = [
    { text: "\\( \\theta = 32^\\circ \\)", imageUrl: "" }, { text: "\\( \\theta = 29^\\circ \\)", imageUrl: "" },
    { text: "\\( \\theta = 30^\\circ \\)", imageUrl: "" }, { text: "\\( \\theta = 31^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q4C -----
  const svgQ4c = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="145" y="145" class="text-math">O</text>

  <path d="M 56,184.2 L 200,63.4 L 167.4,248.5 Z" class="line" />
  <path d="M 150,150 L 200,63.4" class="line" />
  <path d="M 150,150 L 167.4,248.5" class="line" />

  <text x="75" y="175" class="text-label">70°</text>
  <text x="165" y="165" class="text-math" fill="#3b82f6">θ</text>

  <text x="40" y="195" class="text-math">T</text>
  <text x="210" y="55" class="text-math">S</text>
  <text x="175" y="265" class="text-math">R</text>
</svg>`;
  const stepsQ4c = [
    { explanation: "Identify central and inscribed angles.", workingOut: "Central angle \\( \\theta = \\angle SOR \\) and inscribed angle \\( \\angle STR = 70^\\circ \\) subtend arc \\( SR \\).", graphData: null },
    { explanation: "Calculate \\( \\theta \\).", workingOut: "\\( \\theta = 2 \\times 70^\\circ = 140^\\circ \\).", graphData: null }
  ];
  const optionsQ4c = [
    { text: "\\( \\theta = 142^\\circ \\)", imageUrl: "" }, { text: "\\( \\theta = 139^\\circ \\)", imageUrl: "" },
    { text: "\\( \\theta = 140^\\circ \\)", imageUrl: "" }, { text: "\\( \\theta = 141^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q4D -----
  const svgQ4d = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="145" y="145" class="text-math">O</text>

  <path d="M 85.7,226.6 L 115.8,56 L 226.6,214.3" class="line" />
  <path d="M 85.7,226.6 L 248.5,132.6 L 226.6,214.3" class="line" />
  <path d="M 150,150 L 85.7,226.6" class="line" />
  <path d="M 150,150 L 226.6,214.3" class="line" />

  <text x="145" y="175" class="text-label">80°</text>
  <text x="125" y="85" class="text-math" fill="#3b82f6">α</text>
  <text x="215" y="145" class="text-math" fill="#3b82f6">β</text>

  <text x="75" y="240" class="text-math">F</text>
  <text x="240" y="225" class="text-math">G</text>
  <text x="105" y="45" class="text-math">P</text>
  <text x="260" y="135" class="text-math">Q</text>
</svg>`;
  const stepsQ4d = [
    { explanation: "Find \\( \\alpha \\).", workingOut: "Inscribed angle \\( \\alpha \\) and central angle \\( 80^\\circ \\) subtend arc \\( FG \\). So \\( \\alpha = 80^\\circ / 2 = 40^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\beta \\).", workingOut: "Inscribed angle \\( \\beta \\) also subtends arc \\( FG \\). Angles subtended by the same arc at the circumference are equal. So \\( \\beta = 40^\\circ \\).", graphData: null }
  ];
  const optionsQ4d = [
    { text: "\\( \\alpha = 41^\\circ, \\beta = 39^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 40^\\circ, \\beta = 39^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 40^\\circ, \\beta = 40^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 40^\\circ, \\beta = 41^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q4E -----
  const svgQ4e = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="145" y="145" class="text-math">O</text>

  <path d="M 56,115.8 L 100,236.6 L 200,236.6" class="line" />
  <path d="M 56,115.8 L 236.6,100 L 200,236.6" class="line" />
  <path d="M 150,150 L 56,115.8" class="line" />
  <path d="M 150,150 L 200,236.6" class="line" />

  <text x="110" y="225" class="text-label">20°</text>
  <text x="210" y="115" class="text-math" fill="#3b82f6">α</text>
  <text x="135" y="175" class="text-math" fill="#3b82f6">θ</text>

  <text x="40" y="110" class="text-math">P</text>
  <text x="215" y="255" class="text-math">R</text>
  <text x="85" y="255" class="text-math">S</text>
  <text x="250" y="95" class="text-math">Q</text>
</svg>`;
  const stepsQ4e = [
    { explanation: "Find \\( \\alpha \\).", workingOut: "Angles \\( \\alpha \\) and \\( 20^\\circ \\) both subtend arc \\( PR \\) at the circumference, so they are equal. \\( \\alpha = 20^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\theta \\).", workingOut: "Central angle \\( \\theta \\) subtends the same arc \\( PR \\) as inscribed angle \\( 20^\\circ \\). So \\( \\theta = 2 \\times 20^\\circ = 40^\\circ \\).", graphData: null }
  ];
  const optionsQ4e = [
    { text: "\\( \\alpha = 20^\\circ, \\beta = 39^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 21^\\circ, \\beta = 39^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 20^\\circ, \\theta = 40^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 20^\\circ, \\theta = 41^\\circ \\)", imageUrl: "" }
  ];

  const updates = [
    { id: 'y10-13a-q3i', svg: svgQ3i, steps: stepsQ3i, options: optionsQ3i },
    { id: 'y10-13a-q4a', svg: svgQ4a, steps: stepsQ4a, options: optionsQ4a },
    { id: 'y10-13a-q4b', svg: svgQ4b, steps: stepsQ4b, options: optionsQ4b },
    { id: 'y10-13a-q4c', svg: svgQ4c, steps: stepsQ4c, options: optionsQ4c },
    { id: 'y10-13a-q4d', svg: svgQ4d, steps: stepsQ4d, options: optionsQ4d },
    { id: 'y10-13a-q4e', svg: svgQ4e, steps: stepsQ4e, options: optionsQ4e }
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
