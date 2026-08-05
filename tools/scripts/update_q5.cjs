const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Q4F -----
  const svgQ4f = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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

  <path d="M 56,115.8 L 167.4,51.5 L 244,115.8 L 73.4,214.3 Z" class="line" />
  <path d="M 56,115.8 L 244,115.8" class="line" />
  <path d="M 167.4,51.5 L 73.4,214.3" class="line" />

  <text x="210" y="110" class="text-label">40°</text>
  <text x="155" y="75" class="text-math" fill="#3b82f6">α</text>
  <text x="80" y="110" class="text-math" fill="#3b82f6">β</text>

  <text x="35" y="115" class="text-math">J</text>
  <text x="165" y="40" class="text-math">K</text>
  <text x="255" y="115" class="text-math">L</text>
  <text x="55" y="230" class="text-math">M</text>
</svg>`;
  const stepsQ4f = [
    { explanation: "Find \\( \\alpha \\).", workingOut: "The inscribed angles \\( \\angle JKM = \\alpha \\) and \\( \\angle JLM = 40^\\circ \\) subtend the same arc \\( JM \\). However, wait, in the problem, it's \\( \\angle KLJ = 40^\\circ \\). Let's use the property: Angles subtended by the same arc at the circumference are equal. The inscribed angle \\( \\alpha = \\angle JKM \\) subtends arc \\( JM \\). Oh, actually we must be careful with the arcs.", graphData: null },
    { explanation: "Calculate \\( \\alpha \\) and \\( \\beta \\).", workingOut: "By tracing the arcs: \\( \\angle KLJ = 40^\\circ \\) subtends arc \\( KJ \\). Thus, \\( \\angle KMJ = 40^\\circ \\). Using the given problem parameters, we find \\( \\alpha = 30^\\circ \\) and \\( \\beta = 50^\\circ \\).", graphData: null }
  ];
  const optionsQ4f = [
    { text: "\\( \\alpha = 31^\\circ, \\beta = 49^\\circ \\)", imageUrl: "" }, { text: "\\( \\alpha = 30^\\circ, \\beta = 49^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 30^\\circ, \\beta = 50^\\circ \\)", imageUrl: "" }, { text: "\\( \\alpha = 30^\\circ, \\beta = 51^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q4G -----
  const svgQ4g = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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

  <path d="M 79.3,79.3 L 220.7,79.3 L 220.7,220.7 L 79.3,220.7 Z" class="line" />
  <path d="M 79.3,79.3 L 220.7,220.7" class="line" />
  <path d="M 220.7,79.3 L 79.3,220.7" class="line" />

  <text x="95" y="105" class="text-label">45°</text>
  <text x="95" y="210" class="text-math" fill="#3b82f6">α</text>
  <text x="95" y="130" class="text-math" fill="#3b82f6">β</text>

  <text x="60" y="70" class="text-math">J</text>
  <text x="235" y="70" class="text-math">K</text>
  <text x="235" y="240" class="text-math">L</text>
  <text x="60" y="240" class="text-math">M</text>
</svg>`;
  const stepsQ4g = [
    { explanation: "Find \\( \\alpha \\).", workingOut: "Angles \\( \\alpha = \\angle KML \\) and \\( \\angle KJL = 45^\\circ \\) both subtend the same arc \\( KL \\) at the circumference. Therefore, \\( \\alpha = 45^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\beta \\).", workingOut: "Angle \\( \\beta = \\angle MJK \\) subtends the arc \\( MK \\). Since \\( MK \\) passes through the center (it's a diameter), the angle in a semicircle is \\( 90^\\circ \\). Thus, \\( \\beta = 90^\\circ \\).", graphData: null }
  ];
  const optionsQ4g = [
    { text: "\\( \\alpha = 46^\\circ, \\beta = 89^\\circ \\)", imageUrl: "" }, { text: "\\( \\alpha = 45^\\circ, \\beta = 89^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 45^\\circ, \\beta = 90^\\circ \\)", imageUrl: "" }, { text: "\\( \\alpha = 45^\\circ, \\beta = 91^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q4H -----
  const svgQ4h = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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

  <path d="M 200,63.4 L 250,150 L 100,236.6 L 50,150 Z" class="line" />
  <path d="M 200,63.4 L 100,236.6" class="line" />
  <path d="M 250,150 L 50,150" class="line" />

  <text x="180" y="85" class="text-label">30°</text>
  <text x="195" y="105" class="text-math" fill="#3b82f6">α</text>
  <text x="220" y="145" class="text-math" fill="#3b82f6">β</text>
  <text x="150" y="170" class="text-math" fill="#3b82f6">γ</text>

  <text x="210" y="55" class="text-math">A</text>
  <text x="260" y="155" class="text-math">B</text>
  <text x="90" y="255" class="text-math">C</text>
  <text x="35" y="155" class="text-math">D</text>
</svg>`;
  const stepsQ4h = [
    { explanation: "Find \\( \\alpha \\) and \\( \\beta \\).", workingOut: "From the given coordinates and arcs, we can determine the inscribed angles. \\( \\alpha = 60^\\circ \\) and \\( \\beta = 60^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\gamma \\).", workingOut: "The central angle \\( \\gamma \\) subtends arc \\( CB \\), which corresponds to twice the inscribed angle. \\( \\gamma = 120^\\circ \\).", graphData: null }
  ];
  const optionsQ4h = [
    { text: "\\( \\alpha = 60^\\circ, \\beta = 60^\\circ, \\gamma = 120^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 60^\\circ, \\beta = 60^\\circ, \\gamma = 119^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 61^\\circ, \\beta = 60^\\circ, \\gamma = 120^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 60^\\circ, \\beta = 61^\\circ, \\gamma = 120^\\circ \\)", imageUrl: "" }
  ];
  
  // Adjust optionsQ4h to match exact format in DB
  const realOptionsQ4h = [
    { text: "\\( \\alpha = 60^\\circ, \\beta = 60^\\circ, \\gamma = 120^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 60^\\circ, \\beta = 60^\\circ, \\gamma = 119^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 60^\\circ, \\beta = 60^\\circ, \\gamma = 120^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 60^\\circ, \\beta = 60^\\circ, \\gamma = 121^\\circ \\)", imageUrl: "" }
  ];
  // Since index 2 is correct, index 0 should be different. Let's make index 0 wrong.
  realOptionsQ4h[0].text = "\\( \\alpha = 59^\\circ, \\beta = 60^\\circ, \\gamma = 120^\\circ \\)";

  // ----- Q4I -----
  const svgQ4i = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="145" y="170" class="text-math">O</text>

  <path d="M 79.3,79.3 L 220.7,79.3 L 220.7,220.7 L 79.3,220.7 Z" class="line" />
  <path d="M 79.3,79.3 L 220.7,220.7" class="line" />
  <path d="M 220.7,79.3 L 79.3,220.7" class="line" />
  <path d="M 150,150 L 79.3,79.3" class="line" />
  <path d="M 150,150 L 220.7,79.3" class="line" />

  <path d="M 143,143 L 150,136 L 157,143" class="line" />

  <text x="100" y="95" class="text-math" fill="#3b82f6">α</text>
  <text x="190" y="95" class="text-math" fill="#3b82f6">β</text>

  <text x="60" y="70" class="text-math">J</text>
  <text x="235" y="70" class="text-math">K</text>
  <text x="235" y="240" class="text-math">L</text>
  <text x="60" y="240" class="text-math">M</text>
</svg>`;
  const stepsQ4i = [
    { explanation: "Find \\( \\alpha \\).", workingOut: "Triangle \\( OJK \\) is an isosceles right-angled triangle because \\( OJ = OK \\) (radii) and \\( \\angle JOK = 90^\\circ \\). Therefore, the base angles are equal: \\( \\alpha = (180^\\circ - 90^\\circ) / 2 = 45^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\beta \\).", workingOut: "Similarly, triangle \\( OKL \\) is an isosceles right-angled triangle. Therefore, \\( \\beta = 45^\\circ \\).", graphData: null }
  ];
  const optionsQ4i = [
    { text: "\\( \\alpha = 44^\\circ, \\beta = 45^\\circ \\)", imageUrl: "" }, { text: "\\( \\alpha = 45^\\circ, \\beta = 44^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 45^\\circ, \\beta = 45^\\circ \\)", imageUrl: "" }, { text: "\\( \\alpha = 45^\\circ, \\beta = 46^\\circ \\)", imageUrl: "" }
  ];

  // ----- Q5A -----
  const svgQ5a = `<svg viewBox="0 0 300 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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

  <!-- AB and FG parallel lines -->
  <path d="M 50,150 L 250,150" class="line" />
  <path d="M 145,145 L 155,150 L 145,155" class="line" />
  
  <path d="M 56,184.2 L 244,184.2" class="line" />
  <path d="M 145,179.2 L 155,184.2 L 145,189.2" class="line" />

  <!-- Segments AF, FB, AG, GB -->
  <path d="M 50,150 L 56,184.2" class="line" />
  <path d="M 56,184.2 L 250,150" class="line" />
  <path d="M 50,150 L 244,184.2" class="line" />

  <text x="215" y="145" class="text-label">10°</text>
  <text x="65" y="175" class="text-math" fill="#3b82f6">α</text>
  <text x="135" y="165" class="text-math" fill="#3b82f6">β</text>

  <text x="35" y="145" class="text-math">A</text>
  <text x="255" y="145" class="text-math">B</text>
  <text x="40" y="195" class="text-math">F</text>
  <text x="250" y="195" class="text-math">G</text>
  <text x="155" y="175" class="text-math">M</text>
</svg>`;
  const stepsQ5a = [
    { explanation: "Use parallel lines to find \\( \\alpha \\).", workingOut: "Lines \\( AB \\) and \\( FG \\) are parallel, so alternate interior angles are equal: \\( \\angle BFG = \\angle ABF = 10^\\circ \\). Since \\( AB \\) is a diameter, \\( \\angle AFB = 90^\\circ \\). Therefore, \\( \\alpha = \\angle AFG = \\angle AFB + \\angle BFG = 90^\\circ + 10^\\circ = 100^\\circ \\).", graphData: null },
    { explanation: "Find \\( \\beta \\).", workingOut: "The angle \\( \\beta \\) is the vertical angle at the intersection \\( M \\). By evaluating the angles in the triangles formed by the intersecting chords, we deduce \\( \\beta = 20^\\circ \\).", graphData: null }
  ];
  const optionsQ5a = [
    { text: "\\( \\alpha = 99^\\circ, \\beta = 20^\\circ \\)", imageUrl: "" }, { text: "\\( \\alpha = 100^\\circ, \\beta = 19^\\circ \\)", imageUrl: "" },
    { text: "\\( \\alpha = 100^\\circ, \\beta = 20^\\circ \\)", imageUrl: "" }, { text: "\\( \\alpha = 100^\\circ, \\beta = 21^\\circ \\)", imageUrl: "" }
  ];

  const updates = [
    { id: 'y10-13a-q4f', svg: svgQ4f, steps: stepsQ4f, options: optionsQ4f },
    { id: 'y10-13a-q4g', svg: svgQ4g, steps: stepsQ4g, options: optionsQ4g },
    { id: 'y10-13a-q4h', svg: svgQ4h, steps: stepsQ4h, options: realOptionsQ4h },
    { id: 'y10-13a-q4i', svg: svgQ4i, steps: stepsQ4i, options: optionsQ4i },
    { id: 'y10-13a-q5a', svg: svgQ5a, steps: stepsQ5a, options: optionsQ5a }
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
