const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const newSvg4a = `<svg viewBox="40 15 420 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .line { stroke: #1e293b; stroke-width: 1.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }
      .text-label { fill: #0f172a; font-family: KaTeX_Main, Times New Roman, serif; font-size: 13px; }
      .text-math { fill: #0f172a; font-family: KaTeX_Math, Times New Roman, serif; font-size: 14px; font-style: italic; }
      .angle-text { fill: #3b82f6; font-family: KaTeX_Main, Times New Roman, serif; font-size: 12px; }
    </style>
  </defs>

  <path d="M 100,40 L 70,92 L 220,40 Z" class="line" fill="#f8fafc" />
  
  <text x="95" y="32" class="text-math" text-anchor="middle">A</text>
  <text x="62" y="102" class="text-math" text-anchor="middle">B</text>
  <text x="228" y="32" class="text-math" text-anchor="middle">C</text>
  
  <text x="115" y="55" class="angle-text">120°</text>
  <text x="195" y="50" class="angle-text">25°</text>
  
  <text x="75" y="60" class="text-label" text-anchor="end">4 cm</text>
  <text x="160" y="32" class="text-label" text-anchor="middle">8 cm</text>

  <path d="M 340,50 L 317.5,89 L 430,50 Z" class="line" fill="#f8fafc" />
  
  <text x="335" y="42" class="text-math" text-anchor="middle">D</text>
  <text x="310" y="99" class="text-math" text-anchor="middle">E</text>
  <text x="438" y="42" class="text-math" text-anchor="middle">F</text>
  
  <text x="355" y="65" class="angle-text">120°</text>
  <text x="405" y="60" class="angle-text">25°</text>
  
  <text x="320" y="65" class="text-label" text-anchor="end">x cm</text>
  <text x="385" y="42" class="text-label" text-anchor="middle">6 cm</text>
</svg>`;

  const pSnap = await db.collection('questions').doc('y10-8e-q4').get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      let updatedSq = { ...sq };
      
      if (sq.id === 'y10-8e-q4a-i') {
        updatedSq.type = 'short_answer';
        updatedSq.requiresManualGrading = true;
        updatedSq.answer = 'AAA';
        if (updatedSq.graphData) {
          updatedSq.graphData.svg = newSvg4a;
        }
      }
      if (sq.id === 'y10-8e-q4a-ii') {
        if (updatedSq.graphData) {
          updatedSq.graphData.svg = newSvg4a;
        }
      }
      if (sq.id === 'y10-8e-q4b') {
        updatedSq.type = 'short_answer';
        updatedSq.requiresManualGrading = true;
        updatedSq.answer = 'AAS';
      }
      return updatedSq;
    });
    
    await pSnap.ref.update({
      subQuestions: newSubQs,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log('Updated parent subQuestions for y10-8e-q4');
    
    for (const sq of newSubQs) {
      if (['y10-8e-q4a-i', 'y10-8e-q4a-ii', 'y10-8e-q4b'].includes(sq.id)) {
        const sSnap = await db.collection('questions').doc(sq.id).get();
        if (sSnap.exists) {
          const updateObj = { updatedAt: FieldValue.serverTimestamp() };
          if (sq.type !== undefined) updateObj.type = sq.type;
          if (sq.requiresManualGrading !== undefined) updateObj.requiresManualGrading = sq.requiresManualGrading;
          if (sq.answer !== undefined) updateObj.answer = sq.answer;
          if (sq.graphData !== undefined) updateObj.graphData = sq.graphData;
          
          await sSnap.ref.update(updateObj);
          console.log('Updated subquestion doc', sq.id);
        }
      }
    }
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
