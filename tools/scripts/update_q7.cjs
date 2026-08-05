const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgQ7 = `<svg viewBox="0 40 260 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .bank { stroke: #334155; stroke-width: 2; fill: none; }
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 13px; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 15px; font-style: italic; }
      .right-angle { fill: none; stroke: #94a3b8; stroke-width: 1.5; }
      .water { fill: #e0f2fe; }
    </style>
  </defs>

  <!-- Canal Water -->
  <rect x="0" y="80" width="260" height="120" class="water" />
  
  <!-- Banks -->
  <path d="M 0,80 L 260,80" class="bank" />
  <path d="M 0,200 L 260,200" class="bank" />

  <!-- Triangles -->
  <path d="M 60,80 L 60,200" class="line" /> <!-- PQ -->
  <path d="M 180,200 L 180,260" class="line" /> <!-- MN -->
  <path d="M 60,80 L 180,260" class="line" /> <!-- PN -->

  <!-- Right angles -->
  <polyline points="60,190 70,190 70,200" class="right-angle" />
  <polyline points="170,200 170,210 180,210" class="right-angle" />

  <!-- Point labels -->
  <text x="50" y="75" class="text-math">P</text>
  <text x="50" y="215" class="text-math">Q</text>
  <text x="140" y="190" class="text-math">L</text>
  <text x="185" y="190" class="text-math">M</text>
  <text x="190" y="265" class="text-math">N</text>

  <!-- Side labels -->
  <text x="100" y="215" class="text-label" text-anchor="middle">80 m</text>
  <text x="160" y="215" class="text-label" text-anchor="middle">40 m</text>
  <text x="190" y="235" class="text-label" text-anchor="start">60 m</text>
  
  <text x="120" y="145" class="text-label" fill="#0284c7" font-weight="bold">Canal</text>
</svg>`;

  const pSnap = await db.collection('questions').doc('y10-8e-q7').get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      let updatedSq = { ...sq };
      
      updatedSq.graphData = null;

      if (sq.id === 'y10-8e-q7a') {
        updatedSq.type = 'multiple_choice';
        updatedSq.options = [
          { text: '\\(\\Delta PQL \\sim \\Delta NML \\text{ (AAA)}\\)', imageUrl: '' },
          { text: '\\(\\Delta PLT \\sim \\Delta NML \\text{ (SAS)}\\)', imageUrl: '' },
          { text: '\\(\\Delta PQL \\sim \\Delta TLQ \\text{ (AAA)}\\)', imageUrl: '' },
          { text: '\\(\\Delta PQL \\sim \\Delta NML \\text{ (RHS)}\\)', imageUrl: '' }
        ];
        updatedSq.answer = '0';
        updatedSq.requiresManualGrading = false;
        updatedSq.solutionSteps = [
          {
            explanation: "Identify the corresponding right angles.",
            workingOut: "\\( \\angle PQL = 90^\\circ \\) and \\( \\angle NML = 90^\\circ \\), so \\( \\angle PQL = \\angle NML \\).",
            graphData: null
          },
          {
            explanation: "Identify vertically opposite angles.",
            workingOut: "The line segment \\( PN \\) crosses the banks at \\( L \\), creating vertically opposite angles. Therefore, \\( \\angle PLQ = \\angle NLM \\).",
            graphData: null
          },
          {
            explanation: "Conclude similarity.",
            workingOut: "Since two angles are equal, the third must also be equal. The triangles \\( \\Delta PQL \\) and \\( \\Delta NML \\) are similar by the AA (or AAA) similarity test.",
            graphData: null
          }
        ];
      }
      
      if (sq.id === 'y10-8e-q7b') {
        updatedSq.type = 'multiple_choice';
        updatedSq.options = [
          { text: '100', imageUrl: '' },
          { text: '120', imageUrl: '' },
          { text: '160', imageUrl: '' },
          { text: '80', imageUrl: '' }
        ];
        updatedSq.answer = '1';
        updatedSq.requiresManualGrading = false;
        updatedSq.solutionSteps = [
          {
            explanation: "Set up the ratio of corresponding sides.",
            workingOut: "From part (a), we know \\( \\Delta PQL \\sim \\Delta NML \\). Therefore, the ratio of corresponding sides is equal: \\( \\frac{PQ}{NM} = \\frac{QL}{ML} \\).",
            graphData: null
          },
          {
            explanation: "Substitute the known measurements.",
            workingOut: "Substituting the given lengths into our ratio gives \\( \\frac{PQ}{60} = \\frac{80}{40} \\).",
            graphData: null
          },
          {
            explanation: "Simplify and solve for PQ.",
            workingOut: "The right side simplifies to \\( \\frac{80}{40} = 2 \\). Multiplying both sides by 60 yields \\( PQ = 60 \\times 2 = 120 \\text{ m} \\).",
            graphData: null
          }
        ];
      }
      
      return updatedSq;
    });
    
    await pSnap.ref.update({
      graphData: { svg: svgQ7 },
      subQuestions: newSubQs,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log('Updated parent document y10-8e-q7 with new graphData');
    
    for (const sq of newSubQs) {
      if (['y10-8e-q7a', 'y10-8e-q7b'].includes(sq.id)) {
        const sSnap = await db.collection('questions').doc(sq.id).get();
        if (sSnap.exists) {
          await sSnap.ref.update({
            graphData: null,
            type: sq.type,
            options: sq.options,
            answer: sq.answer,
            requiresManualGrading: sq.requiresManualGrading,
            solutionSteps: sq.solutionSteps,
            updatedAt: FieldValue.serverTimestamp()
          });
          console.log('Updated subquestion doc', sq.id);
        }
      }
    }

    console.log('Syncing chapter index for y10-8...');
    await touchChapterIndex(db, 'y10-8');
    console.log('Sync complete.');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
