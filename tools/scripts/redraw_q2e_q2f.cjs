const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const P_FONT = 'font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000"';
  const V_FONT = 'font-family="serif" font-size="14" fill="#000"';
  const SW = '1';
  const R = '1.2';

  const SVG_Q2E_BASE = `<svg viewBox="-30 0 290 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="150" x2="200" y2="150" stroke="#000" stroke-width="${SW}"/>
  <polygon points="80,93 40,150 120,150" fill="none" stroke="#000" stroke-width="${SW}"/>
  <line x1="40" y1="150" x2="94" y2="73" stroke="#000" stroke-width="${SW}"/>
  <line x1="66" y1="73" x2="140" y2="178.5" stroke="#000" stroke-width="${SW}"/>
  <line x1="70" y1="164.25" x2="140" y2="64.5" stroke="#000" stroke-width="${SW}"/>
  <g transform="translate(68, 110) rotate(-55)"><polygon points="0,0 -8,-4 -8,4" fill="#000"/></g>
  <g transform="translate(108, 110) rotate(-55)"><polygon points="0,0 -8,-4 -8,4" fill="#000"/></g>
  <circle cx="40" cy="150" r="${R}" fill="#000"/>
  <circle cx="120" cy="150" r="${R}" fill="#000"/>
  <circle cx="80" cy="93" r="${R}" fill="#000"/>
  <circle cx="100" cy="121.5" r="${R}" fill="#000"/>
  <text x="35" y="165" ${P_FONT}>C</text>
  <text x="115" y="165" ${P_FONT}>D</text>
  <text x="175" y="165" ${P_FONT}>E</text>
  <text x="75" y="85" ${P_FONT}>A</text>
  <text x="82" y="125" ${P_FONT}>G</text>
  <text x="60" y="172" ${P_FONT}>H</text>
  <text x="145" y="70" ${P_FONT}>J</text>
  <line x1="56" y1="113" x2="64" y2="119" stroke="#000" stroke-width="${SW}"/>
  <line x1="96" y1="119" x2="104" y2="113" stroke="#000" stroke-width="${SW}"/>
  <text x="50" y="145" ${V_FONT}>55°</text>`;

  const SVG_Q2E_ALPHA = SVG_Q2E_BASE + `
  <text x="110" y="127" ${P_FONT}>α</text>
</svg>`;

  const SVG_Q2E_THETA = SVG_Q2E_BASE + `
  <text x="130" y="145" ${P_FONT}>θ</text>
</svg>`;

  const SVG_Q2F_BASE = `<svg viewBox="-30 0 290 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="150" x2="200" y2="150" stroke="#000" stroke-width="${SW}"/>
  <polygon points="100,93 60,150 140,150" fill="none" stroke="#000" stroke-width="${SW}"/>
  <line x1="100" y1="93" x2="150" y2="43" stroke="#000" stroke-width="${SW}"/>
  <line x1="20" y1="190" x2="110" y2="100" stroke="#000" stroke-width="${SW}"/>
  <g transform="translate(125, 68) rotate(-45)"><polygon points="0,0 -8,-4 -8,4" fill="#000"/></g>
  <g transform="translate(85, 125) rotate(-45)"><polygon points="0,0 -8,-4 -8,4" fill="#000"/></g>
  <circle cx="60" cy="150" r="${R}" fill="#000"/>
  <circle cx="140" cy="150" r="${R}" fill="#000"/>
  <circle cx="100" cy="93" r="${R}" fill="#000"/>
  <text x="50" y="165" ${P_FONT}>G</text>
  <text x="135" y="165" ${P_FONT}>C</text>
  <text x="95" y="85" ${P_FONT}>D</text>
  <text x="155" y="45" ${P_FONT}>B</text>
  <text x="15" y="195" ${P_FONT}>E</text>
  <text x="115" y="105" ${P_FONT}>F</text>
  <text x="10" y="165" ${P_FONT}>H</text>
  <text x="190" y="165" ${P_FONT}>A</text>
  <line x1="75" y1="125" x2="83" y2="119" stroke="#000" stroke-width="${SW}"/>
  <line x1="117" y1="119" x2="125" y2="125" stroke="#000" stroke-width="${SW}"/>
  <text x="110" y="145" ${V_FONT}>55°</text>`;

  const SVG_Q2F_ALPHA = SVG_Q2F_BASE + `
  <text x="76" y="145" ${P_FONT}>α</text>
</svg>`;

  const SVG_Q2F_BETA = SVG_Q2F_BASE + `
  <text x="35" y="145" ${P_FONT}>β</text>
</svg>`;

  const updates = {
    'y10-8a-q2e-alpha': { graphData: { svg: SVG_Q2E_ALPHA } },
    'y10-8a-q2e-theta': { graphData: { svg: SVG_Q2E_THETA } },
    'y10-8a-q2f-alpha': { graphData: { svg: SVG_Q2F_ALPHA } },
    'y10-8a-q2f-beta': { graphData: { svg: SVG_Q2F_BETA } }
  };

  const parentSet = new Set();
  for (const [id, updateData] of Object.entries(updates)) {
    const docRef = db.collection('questions').doc(id);
    await docRef.update({
      ...updateData,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log("Redrew " + id);
    
    let parentId = id;
    if (id.includes('-')) {
       let parts = id.split('-');
       if (parts.length > 3) {
          parentId = parts.slice(0, 3).join('-');
       } else {
          parentId = id.replace(/[a-z]$/, '');
       }
    }
    parentSet.add(parentId);
  }

  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, graphData: cSnap.data().graphData } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('Finished redrawing specific SVGs');
  process.exit(0);
}

run().catch(console.error);
