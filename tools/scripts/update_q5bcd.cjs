const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q5B -----
  const svgQ5b = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
      .tick { stroke: #1e293b; stroke-width: 1.5; fill: none; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="145" y="165" class="text-math">O</text>

  <!-- P(0): 250, 150 -->
  <!-- A(60): 200, 63.4 -->
  <!-- B(240): 100, 236.6 -->
  
  <!-- AB diameter -->
  <path d="M 100,236.6 L 200,63.4" class="line" />
  <!-- OP radius -->
  <path d="M 150,150 L 250,150" class="line" />
  <!-- AP, BP chords -->
  <path d="M 200,63.4 L 250,150 L 100,236.6" class="line" />

  <!-- Ticks for equilateral triangle OAP -->
  <!-- OA midpoint: (175, 106.7) -->
  <path d="M 170.7,104.2 L 179.3,109.2" class="tick" />
  <!-- OP midpoint: (200, 150) -->
  <path d="M 200,145 L 200,155" class="tick" />
  <!-- AP midpoint: (225, 106.7) -->
  <path d="M 229.3,104.2 L 220.7,109.2" class="tick" />

  <!-- alpha arc at O (AOP) -->
  <path d="M 170,150 A 20,20 0 0,0 160,132.7" class="arc" />
  <text x="175" y="145" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at B (OBP) -->
  <path d="M 121.6,224.1 A 25,25 0 0,0 112.5,215.0" class="arc" />
  <text x="125" y="220" class="text-math" fill="#3b82f6">β</text>

  <text x="205" y="55" class="text-math">A</text>
  <text x="85" y="250" class="text-math">B</text>
  <text x="260" y="155" class="text-math">P</text>
</svg>`;

  const stepsQ5b = [
    { explanation: "Find \\( \\alpha \\).", workingOut: "In \\( \\triangle OAP \\), we have \\( OA = OP \\) (radii) and \\( OA = AP \\) (given by tick marks). Thus \\( \\triangle OAP \\) is an equilateral triangle, so \\( \\alpha = \\angle AOP = 60^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\angle POB \\).", workingOut: "Since \\( AB \\) is a straight line (a diameter), angles on the straight line add up to \\( 180^\\circ \\). Therefore, \\( \\angle POB = 180^\\circ - 60^\\circ = 120^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\beta \\).", workingOut: "In isosceles \\( \\triangle OPB \\) (where \\( OB = OP \\) because they are both radii), the base angles are equal. So \\( \\beta = \\angle OBP = (180^\\circ - 120^\\circ) / 2 = 30^\\circ \\).", graphData: null }
  ];
  
  const optionsQ5b = [
    { text: "\\( \\alpha = 60^\\circ, \\beta = 29^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 59^\\circ, \\beta = 30^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 60^\\circ, \\beta = 30^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 60^\\circ, \\beta = 31^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q5C -----
  const svgQ5c = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="140" y="145" class="text-math">O</text>

  <!-- P(150): 63.4, 100 -->
  <!-- Q(250): 115.8, 244 -->
  <!-- R(290): 184.2, 244 -->
  
  <path d="M 63.4,100 L 115.8,244 L 184.2,244 Z" class="line" />
  <path d="M 150,150 L 63.4,100" class="line" />
  <path d="M 150,150 L 184.2,244" class="line" />

  <!-- Parallel arrow on PQ -->
  <!-- Midpoint (89.6, 172), Dir (0.34, 0.94) -->
  <path d="M 82,165 L 89.6,172 L 82,179" class="line" />
  <!-- Parallel arrow on OR -->
  <!-- Midpoint (167.1, 197), Dir (0.34, 0.94) -->
  <path d="M 159.5,190 L 167.1,197 L 159.5,204" class="line" />

  <!-- 20 deg arc at ORP -->
  <!-- R(184.2, 244). RO unit: (-0.34, -0.94). RP unit: (-0.76, -0.64) -->
  <!-- Let's just place text for clarity instead of complex arc for 20 -->
  <text x="155" y="225" class="text-label">20°</text>

  <!-- gamma arc at POR -->
  <text x="110" y="180" class="text-math" fill="#3b82f6">γ</text>

  <!-- alpha arc at OPQ -->
  <text x="85" y="125" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at PQR -->
  <text x="115" y="225" class="text-math" fill="#3b82f6">β</text>

  <text x="50" y="95" class="text-math">P</text>
  <text x="105" y="260" class="text-math">Q</text>
  <text x="195" y="260" class="text-math">R</text>
</svg>`;

  const stepsQ5c = [
    { explanation: "Find \\( \\gamma \\).", workingOut: "In isosceles \\( \\triangle ORP \\) (radii \\( OR = OP \\)), the base angles are equal, so \\( \\angle ORP = \\angle OPR = 20^\\circ \\). Therefore, \\( \\gamma = \\angle POR = 180^\\circ - (20^\\circ + 20^\\circ) = 140^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\alpha \\).", workingOut: "Since chord \\( PQ \\) is parallel to radius \\( OR \\), the alternate interior angles are equal, giving \\( \\angle QPR = \\angle ORP = 20^\\circ \\). Thus, \\( \\alpha = \\angle OPQ = \\angle OPR + \\angle QPR = 20^\\circ + 20^\\circ = 40^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\beta \\).", workingOut: "The angle \\( \\beta = \\angle PQR \\) is an inscribed angle that subtends the major arc \\( PR \\). The central angle corresponding to the major arc \\( PR \\) is \\( 360^\\circ - 140^\\circ = 220^\\circ \\). Therefore, \\( \\beta = 220^\\circ / 2 = 110^\\circ \\).", graphData: null }
  ];

  const optionsQ5c = [
    { text: "\\( \\alpha = 40^\\circ, \\beta = 110^\\circ, \\gamma = 139^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 39^\\circ, \\beta = 110^\\circ, \\gamma = 140^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 40^\\circ, \\beta = 110^\\circ, \\gamma = 140^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 40^\\circ, \\beta = 111^\\circ, \\gamma = 140^\\circ \\)", imageUrl: "" }
  ];


  // ----- Q5D -----
  const svgQ5d = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="145" y="165" class="text-math">O</text>

  <!-- A(160): 56, 115.8 -->
  <!-- B(20): 244, 115.8 -->
  <!-- C(280): 167.4, 248.5 -->

  <path d="M 56,115.8 L 244,115.8 L 167.4,248.5 Z" class="line" />
  <path d="M 150,150 L 56,115.8" class="line" />
  <path d="M 150,150 L 244,115.8" class="line" />
  <path d="M 150,150 L 167.4,248.5" class="line" />

  <text x="135" y="130" class="text-label">140°</text>
  <text x="75" y="135" class="text-label">50°</text>

  <text x="125" y="180" class="text-math" fill="#3b82f6">α</text>
  <text x="215" y="135" class="text-math" fill="#3b82f6">β</text>
  <text x="165" y="225" class="text-math" fill="#3b82f6">γ</text>

  <text x="40" y="115" class="text-math">A</text>
  <text x="255" y="115" class="text-math">B</text>
  <text x="175" y="265" class="text-math">C</text>
</svg>`;

  const stepsQ5d = [
    { explanation: "Find the central angle \\( \\angle BOC \\).", workingOut: "The inscribed angle \\( \\angle BAC = 50^\\circ \\) subtends arc \\( BC \\). The central angle subtending the same arc is twice the inscribed angle, so \\( \\angle BOC = 2 \\times 50^\\circ = 100^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\alpha \\).", workingOut: "We are given that \\( \\angle AOB = 140^\\circ \\). Angles around the center point \\( O \\) add up to \\( 360^\\circ \\). Thus, \\( \\alpha = \\angle AOC = 360^\\circ - \\angle AOB - \\angle BOC = 360^\\circ - 140^\\circ - 100^\\circ = 120^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\beta \\) and \\( \\gamma \\).", workingOut: "The inscribed angle \\( \\beta = \\angle ABC \\) subtends arc \\( AC \\) (which has a central angle of \\( 120^\\circ \\)), so \\( \\beta = 120^\\circ / 2 = 60^\\circ \\). The inscribed angle \\( \\gamma = \\angle ACB \\) subtends arc \\( AB \\) (which has a central angle of \\( 140^\\circ \\)), so \\( \\gamma = 140^\\circ / 2 = 70^\\circ \\).", graphData: null }
  ];

  const optionsQ5d = [
    { text: "\\( \\alpha = 119^\\circ, \\beta = 60^\\circ, \\gamma = 70^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 120^\\circ, \\beta = 59^\\circ, \\gamma = 70^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 120^\\circ, \\beta = 60^\\circ, \\gamma = 70^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 120^\\circ, \\beta = 60^\\circ, \\gamma = 71^\\circ \\)", imageUrl: "" }
  ];


  // Update db
  await db.collection('questions').doc('y10-13a-q5b').update({
    'graphData.svg': svgQ5b, solutionSteps: stepsQ5b, options: optionsQ5b, updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Fixed y10-13a-q5b');

  await db.collection('questions').doc('y10-13a-q5c').update({
    'graphData.svg': svgQ5c, solutionSteps: stepsQ5c, options: optionsQ5c, updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Fixed y10-13a-q5c');

  await db.collection('questions').doc('y10-13a-q5d').update({
    'graphData.svg': svgQ5d, solutionSteps: stepsQ5d, options: optionsQ5d, updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Fixed y10-13a-q5d');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
