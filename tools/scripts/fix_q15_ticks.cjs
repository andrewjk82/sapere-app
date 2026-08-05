const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const q15_svg = `<svg viewBox="10 10 280 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,40 50,200 250,200" fill="none" stroke="#000" stroke-width="1.5"/>
  <line x1="125" y1="80" x2="175" y2="80" stroke="#000" stroke-width="1.5"/>
  <line x1="50" y1="200" x2="175" y2="80" stroke="#000" stroke-width="1"/>
  <line x1="250" y1="200" x2="125" y2="80" stroke="#000" stroke-width="1"/>
  
  <circle cx="150" cy="40" r="2" fill="#000"/>
  <circle cx="50" cy="200" r="2" fill="#000"/>
  <circle cx="250" cy="200" r="2" fill="#000"/>
  <circle cx="125" cy="80" r="2" fill="#000"/>
  <circle cx="175" cy="80" r="2" fill="#000"/>
  <circle cx="150" cy="104" r="2" fill="#000"/>
  
  <text x="145" y="30" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">A</text>
  <text x="35" y="215" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">B</text>
  <text x="255" y="215" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">C</text>
  <text x="105" y="75" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">M</text>
  <text x="185" y="75" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">N</text>
  <text x="145" y="125" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">P</text>
  
  <!-- Ticks on AM (1 part) -->
  <line x1="133.5" y1="57.5" x2="141.5" y2="62.5" stroke="#000" stroke-width="1.5"/>
  
  <!-- Ticks on MB (3 parts) -->
  <line x1="83.5" y1="137.5" x2="91.5" y2="142.5" stroke="#000" stroke-width="1.5"/>
  <line x1="85.5" y1="134.1" x2="93.5" y2="139.1" stroke="#000" stroke-width="1.5"/>
  <line x1="81.5" y1="140.9" x2="89.5" y2="145.9" stroke="#000" stroke-width="1.5"/>
  
  <!-- Ticks on AN (1 part) -->
  <line x1="158.5" y1="62.5" x2="166.5" y2="57.5" stroke="#000" stroke-width="1.5"/>
  
  <!-- Ticks on NC (3 parts) -->
  <line x1="208.5" y1="142.5" x2="216.5" y2="137.5" stroke="#000" stroke-width="1.5"/>
  <line x1="206.5" y1="139.1" x2="214.5" y2="134.1" stroke="#000" stroke-width="1.5"/>
  <line x1="210.5" y1="145.9" x2="218.5" y2="140.9" stroke="#000" stroke-width="1.5"/>
</svg>`;

  const p15Snap = await db.collection('questions').doc('y10-8e-q15').get();
  if (p15Snap.exists) {
    let subQs = p15Snap.data().subQuestions;
    if (subQs) {
      subQs = subQs.map(sq => {
        if (sq.graphData && sq.graphData.svg) {
          return { ...sq, graphData: { svg: q15_svg } };
        }
        return sq;
      });
      await p15Snap.ref.update({
        graphData: { svg: q15_svg },
        subQuestions: subQs,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Updated parent y10-8e-q15 and its subquestions');
    }
  }

  const subIds = ['y10-8e-q15a', 'y10-8e-q15b'];
  for (const sid of subIds) {
    const sSnap = await db.collection('questions').doc(sid).get();
    if (sSnap.exists) {
      await sSnap.ref.update({
        graphData: { svg: q15_svg },
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Updated subquestion doc', sid);
    }
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
