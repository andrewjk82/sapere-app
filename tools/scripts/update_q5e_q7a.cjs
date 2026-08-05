const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q5E -----
  const svgQ5e = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 14px; }
      .point { fill: #dc2626; }
      .parallel-arrow { fill: #1e293b; stroke: none; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="145" y="165" class="text-math">O</text>

  <!-- Q(0°): 250, 150 -->
  <!-- P(160°): 56, 115.8 -->
  <!-- R(20°): 244, 115.8 -->

  <path d="M 150,150 L 250,150" class="line" /> <!-- OQ -->
  <path d="M 56,115.8 L 244,115.8" class="line" /> <!-- PR -->
  
  <!-- Parallel arrows -->
  <polygon points="195,150 185,145 185,155" class="parallel-arrow" /> <!-- on OQ -->
  <polygon points="155,115.8 145,110.8 145,120.8" class="parallel-arrow" /> <!-- on PR -->

  <path d="M 150,150 L 56,115.8" class="line" /> <!-- OP -->
  <path d="M 150,150 L 244,115.8" class="line" /> <!-- OR -->
  <path d="M 250,150 L 244,115.8" class="line" /> <!-- QR -->

  <!-- 160 deg arc at O -->
  <path d="M 175,150 A 25,25 0 0,0 126.5,141.5" class="arc" />
  <text x="145" y="130" class="text-label">160°</text>

  <!-- alpha arc at POR -->
  <path d="M 168.8,143.2 A 20,20 0 0,0 131.2,143.2" class="arc" />
  <text x="145" y="120" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at OQR -->
  <!-- Q(250,150), QO(-100,0), QR(-6,-34.2) -->
  <path d="M 230,150 A 20,20 0 0,1 246.5,130.1" class="arc" />
  <text x="220" y="145" class="text-math" fill="#3b82f6">β</text>

  <!-- gamma arc at ORP -->
  <!-- R(244,115.8), RO(-94,34.2), RP(-188,0) -->
  <path d="M 224,115.8 A 20,20 0 0,0 225.2,122.6" class="arc" />
  <text x="210" y="135" class="text-math" fill="#3b82f6">γ</text>

  <text x="255" y="155" class="text-math">Q</text>
  <text x="40" y="115" class="text-math">P</text>
  <text x="255" y="115" class="text-math">R</text>
</svg>`;

  const stepsQ5e = [
    { explanation: "Use alternate interior angles for parallel lines \\(OQ\\) and \\(PR\\).", workingOut: "Since \\(OQ \\parallel PR\\), the alternate interior angle to \\(\\angle ROQ\\) is \\(\\angle ORP\\), so \\(\\angle ROQ = \\angle ORP = \\gamma\\).", graphData: null },
    { explanation: "Find \\(\\alpha\\) and \\(\\gamma\\).", workingOut: "We know \\(\\angle POQ = 160^\\circ\\). In isosceles \\(\\triangle OPR\\) (where \\(OP = OR\\)), base angles are equal: \\(\\angle OPR = \\angle ORP = \\gamma\\). Because \\(OQ \\parallel PR\\), \\(\\angle POQ + \\angle OPR = 180^\\circ\\) (consecutive interior angles), so \\(160^\\circ + \\gamma = 180^\\circ \\implies \\gamma = 20^\\circ\\).\nThe angle \\(\\alpha = \\angle POR = 180^\\circ - 2\\gamma = 180^\\circ - 40^\\circ = 140^\\circ\\).", graphData: null },
    { explanation: "Find \\(\\beta\\).", workingOut: "Since \\(\\angle ROQ = \\gamma = 20^\\circ\\), and \\(\\triangle OQR\\) is isosceles (with \\(OQ = OR\\)), the base angles are equal: \\(\\beta = \\angle OQR = (180^\\circ - 20^\\circ) / 2 = 80^\\circ\\).", graphData: null }
  ];

  // ----- Q5F -----
  const svgQ5f = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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

  <!-- A(170°): 51.5, 132.6 -->
  <!-- B(70°): 184.2, 56.0 -->
  <!-- C(330°): 236.6, 200.0 -->

  <path d="M 150,150 L 51.5,132.6" class="line" />
  <path d="M 150,150 L 184.2,56.0" class="line" />
  <path d="M 150,150 L 236.6,200.0" class="line" />
  <path d="M 51.5,132.6 L 184.2,56.0 L 236.6,200.0 Z" class="line" />
  <path d="M 51.5,132.6 L 236.6,200.0" class="line" />

  <!-- Ticks on AB and BC -->
  <!-- Mid AB: 117.8, 94.3. Dir AB: (132.7, -76.6). Normal: (76.6, 132.7) -->
  <path d="M 113.8,92 L 121.8,96.6" class="tick" />
  <!-- Mid BC: 210.4, 128. Dir BC: (52.4, 144). Normal: (-144, 52.4) -->
  <path d="M 206.8,126.7 L 214,129.3" class="tick" />

  <!-- Reflex angle AOC (200 deg) -->
  <!-- From C(330°) to A(170°) through top -->
  <path d="M 167.3,160 A 20,20 0 1,0 130.3,146.5" class="arc" />
  <text x="140" y="115" class="text-label">200°</text>

  <!-- alpha arc at OAB -->
  <path d="M 70.8,121.5 A 25,25 0 0,1 76.1,136.9" class="arc" />
  <text x="75" y="125" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at OBC -->
  <path d="M 175.5,79.9 A 25,25 0 0,1 192.8,79.6" class="arc" />
  <text x="180" y="90" class="text-math" fill="#3b82f6">β</text>

  <!-- gamma arc at OCA -->
  <path d="M 213.1,191.5 A 25,25 0 0,1 214.9,212.5" class="arc" />
  <text x="200" y="210" class="text-math" fill="#3b82f6">γ</text>

  <text x="35" y="135" class="text-math">A</text>
  <text x="195" y="50" class="text-math">B</text>
  <text x="245" y="215" class="text-math">C</text>
</svg>`;

  const stepsQ5f = [
    { explanation: "Find the interior central angle \\(\\angle AOC\\).", workingOut: "The reflex angle \\(\\angle AOC\\) is \\(200^\\circ\\). The interior angle \\(\\angle AOC = 360^\\circ - 200^\\circ = 160^\\circ\\).", graphData: null },
    { explanation: "Use equal chords to find \\(\\angle AOB\\) and \\(\\angle BOC\\).", workingOut: "Equal chords subtend equal angles at the centre. Since chord \\(AB = BC\\), \\(\\angle AOB = \\angle BOC\\). They add up to the interior angle \\(160^\\circ\\) (which corresponds to minor arc \\(ABC\\)), so \\(\\angle AOB = \\angle BOC = 160^\\circ / 2 = 80^\\circ\\).", graphData: null },
    { explanation: "Find \\(\\alpha\\), \\(\\beta\\), and \\(\\gamma\\) using isosceles triangles.", workingOut: "In isosceles \\(\\triangle OAB\\) (radii), \\(\\alpha = (180^\\circ - 80^\\circ)/2 = 50^\\circ\\).\nIn isosceles \\(\\triangle OBC\\), \\(\\beta = (180^\\circ - 80^\\circ)/2 = 50^\\circ\\).\nIn isosceles \\(\\triangle OAC\\), the central angle is the interior angle \\(160^\\circ\\), so \\(\\gamma = (180^\\circ - 160^\\circ)/2 = 10^\\circ\\).", graphData: null }
  ];


  // ----- Q6A -----
  const svgQ6a = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .line-dashed { stroke: #dc2626; stroke-width: 1.5; fill: none; stroke-dasharray: 4,4; stroke-linecap: round; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="145" y="165" class="text-math">O</text>

  <!-- A(180°): 50, 150 -->
  <!-- B(0°): 250, 150 -->
  <!-- P(60°): 200, 63.4 -->
  <!-- X: 243.3, 38.4 -->

  <path d="M 50,150 L 250,150" class="line" />
  <path d="M 50,150 L 200,63.4" class="line" />
  <path d="M 250,150 L 200,63.4" class="line" />
  <path d="M 200,63.4 L 243.3,38.4" class="line-dashed" />
  <path d="M 150,150 L 200,63.4" class="line-dashed" />

  <!-- alpha arc at PAB -->
  <path d="M 75,150 A 25,25 0 0,0 71.6,137.5" class="arc" />
  <text x="80" y="145" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at PBA -->
  <path d="M 225,150 A 25,25 0 0,1 237.5,128.3" class="arc" />
  <text x="215" y="140" class="text-math" fill="#3b82f6">β</text>

  <text x="35" y="155" class="text-math">A</text>
  <text x="260" y="155" class="text-math">B</text>
  <text x="185" y="55" class="text-math">P</text>
  <text x="250" y="35" class="text-math">X</text>
</svg>`;

  const stepsQ6a = [
    { explanation: "Use the isosceles triangles formed by the radii to find \\(\\angle APB\\).", workingOut: "In \\(\\triangle AOP\\), \\(OA = OP\\) (radii), so \\(\\angle APO = \\angle PAB = \\alpha\\).\nIn \\(\\triangle BOP\\), \\(OB = OP\\) (radii), so \\(\\angle BPO = \\angle PBA = \\beta\\).\nTherefore, \\(\\angle APB = \\angle APO + \\angle BPO = \\alpha + \\beta\\).", graphData: null },
    { explanation: "Use the exterior angle theorem on \\(\\triangle APB\\).", workingOut: "The exterior angle of a triangle is equal to the sum of the two opposite interior angles.\nFor \\(\\triangle APB\\), producing side \\(AP\\) to \\(X\\) gives exterior angle \\(\\angle XPB = \\angle PAB + \\angle PBA = \\alpha + \\beta\\).", graphData: null },
    { explanation: "Use angles on a straight line to conclude.", workingOut: "The angles on the straight line \\(APX\\) add up to \\(180^\\circ\\):\n\\(\\angle APB + \\angle XPB = 180^\\circ\\)\n\\((\\alpha + \\beta) + (\\alpha + \\beta) = 180^\\circ\\)\n\\(2(\\alpha + \\beta) = 180^\\circ \\implies \\alpha + \\beta = 90^\\circ\\).", graphData: null }
  ];


  // ----- Q6B -----
  const svgQ6b = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .line-dashed { stroke: #dc2626; stroke-width: 1.5; fill: none; stroke-dasharray: 4,4; stroke-linecap: round; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="145" y="165" class="text-math">O</text>

  <!-- A(180°): 50, 150 -->
  <!-- B(0°): 250, 150 -->
  <!-- P(60°): 200, 63.4 -->
  <!-- M(240°): 100, 236.6 -->

  <path d="M 50,150 L 250,150" class="line" />
  <path d="M 50,150 L 200,63.4" class="line" />
  <path d="M 250,150 L 200,63.4" class="line" />
  <path d="M 200,63.4 L 150,150" class="line-dashed" />
  <path d="M 150,150 L 100,236.6" class="line-dashed" />

  <!-- alpha arc at PAB -->
  <path d="M 75,150 A 25,25 0 0,0 71.6,137.5" class="arc" />
  <text x="80" y="145" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at PBA -->
  <path d="M 225,150 A 25,25 0 0,1 237.5,128.3" class="arc" />
  <text x="215" y="140" class="text-math" fill="#3b82f6">β</text>

  <text x="35" y="155" class="text-math">A</text>
  <text x="260" y="155" class="text-math">B</text>
  <text x="185" y="55" class="text-math">P</text>
  <text x="90" y="250" class="text-math">M</text>
</svg>`;

  const stepsQ6b = [
    { explanation: "Use the exterior angle theorem on the two isosceles triangles.", workingOut: "In \\(\\triangle AOP\\), \\(OA = OP\\) (radii), so \\(\\angle APO = \\alpha\\). The exterior angle \\(\\angle AOM = \\angle OAP + \\angle APO = \\alpha + \\alpha = 2\\alpha\\).\nIn \\(\\triangle BOP\\), \\(OB = OP\\) (radii), so \\(\\angle BPO = \\beta\\). The exterior angle \\(\\angle BOM = \\angle OBP + \\angle BPO = \\beta + \\beta = 2\\beta\\).", graphData: null },
    { explanation: "Use the straight angle of the diameter \\(AOB\\).", workingOut: "Since \\(AOB\\) is a straight line, the angles \\(\\angle AOM\\) and \\(\\angle BOM\\) add up to a straight angle: \\(\\angle AOM + \\angle BOM = 180^\\circ\\).\nTherefore, \\(2\\alpha + 2\\beta = 180^\\circ\\).", graphData: null },
    { explanation: "Conclude the proof.", workingOut: "Dividing by 2 gives \\(\\alpha + \\beta = 90^\\circ\\).\nSince we also know from earlier logic that \\(\\angle APB = \\angle APO + \\angle BPO = \\alpha + \\beta\\), we deduce that \\(\\angle APB = 90^\\circ\\).", graphData: null }
  ];


  // ----- Q7A -----
  const svgQ7a = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .circle { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .line-dashed { stroke: #dc2626; stroke-width: 1.5; fill: none; stroke-dasharray: 4,4; stroke-linecap: round; }
      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 16px; font-style: italic; }
      .point { fill: #dc2626; }
    </style>
  </defs>

  <circle cx="150" cy="150" r="100" class="circle" />
  <circle cx="150" cy="150" r="3" class="point" />
  <text x="155" y="150" class="text-math">O</text>

  <!-- P(90° up): 150, 50 -->
  <!-- A(220° down-left): 73.4, 214.3 -->
  <!-- B(320° down-right): 226.6, 214.3 -->
  <!-- X: 150, 250 -->

  <path d="M 150,50 L 73.4,214.3" class="line" /> <!-- PA -->
  <path d="M 150,50 L 226.6,214.3" class="line" /> <!-- PB -->
  
  <path d="M 150,150 L 73.4,214.3" class="line-dashed" /> <!-- OA -->
  <path d="M 150,150 L 226.6,214.3" class="line-dashed" /> <!-- OB -->
  <path d="M 150,50 L 150,250" class="line-dashed" /> <!-- POX -->

  <!-- alpha arc at OPA -->
  <path d="M 150,75 A 25,25 0 0,0 139.4,72.7" class="arc" />
  <text x="130" y="85" class="text-math" fill="#3b82f6">α</text>

  <!-- beta arc at OPB -->
  <path d="M 160.6,72.7 A 25,25 0 0,0 150,75" class="arc" />
  <text x="165" y="85" class="text-math" fill="#3b82f6">β</text>

  <text x="145" y="40" class="text-math">P</text>
  <text x="55" y="225" class="text-math">A</text>
  <text x="235" y="225" class="text-math">B</text>
  <text x="155" y="260" class="text-math">X</text>
</svg>`;

  const stepsQ7a = [
    { explanation: "Express the angle \\(\\angle APB\\) in terms of \\(\\alpha\\) and \\(\\beta\\).", workingOut: "From the diagram, \\(PO\\) splits \\(\\angle APB\\) into two angles. Thus, \\(\\angle APB = \\angle OPA + \\angle OPB = \\alpha + \\beta\\).", graphData: null },
    { explanation: "Use the exterior angle theorem on the two isosceles triangles.", workingOut: "In \\(\\triangle OPA\\), \\(OA = OP\\) (radii), so \\(\\angle OAP = \\alpha\\). Producing \\(PO\\) to \\(X\\) creates the exterior angle \\(\\angle AOX = \\angle OAP + \\angle OPA = 2\\alpha\\).\nSimilarly, in \\(\\triangle OPB\\), \\(OB = OP\\) (radii), so \\(\\angle OBP = \\beta\\). The exterior angle \\(\\angle BOX = \\angle OBP + \\angle OPB = 2\\beta\\).", graphData: null },
    { explanation: "Combine to find \\(\\angle AOB\\).", workingOut: "The central angle \\(\\angle AOB\\) is the sum of \\(\\angle AOX\\) and \\(\\angle BOX\\):\n\\(\\angle AOB = 2\\alpha + 2\\beta = 2(\\alpha + \\beta)\\).\nSince \\(\\angle APB = \\alpha + \\beta\\), we conclude that \\(\\angle AOB = 2\\angle APB\\).", graphData: null }
  ];


  // Update db
  await db.collection('questions').doc('y10-13a-q5e').update({ 'graphData.svg': svgQ5e, solutionSteps: stepsQ5e, updatedAt: FieldValue.serverTimestamp() });
  await db.collection('questions').doc('y10-13a-q5f').update({ 'graphData.svg': svgQ5f, solutionSteps: stepsQ5f, updatedAt: FieldValue.serverTimestamp() });
  await db.collection('questions').doc('y10-13a-q6a').update({ 'graphData.svg': svgQ6a, solutionSteps: stepsQ6a, updatedAt: FieldValue.serverTimestamp() });
  await db.collection('questions').doc('y10-13a-q6b').update({ 'graphData.svg': svgQ6b, solutionSteps: stepsQ6b, updatedAt: FieldValue.serverTimestamp() });
  await db.collection('questions').doc('y10-13a-q7a').update({ 'graphData.svg': svgQ7a, solutionSteps: stepsQ7a, updatedAt: FieldValue.serverTimestamp() });
  
  console.log('Fixed Q5E, Q5F, Q6A, Q6B, Q7A');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
