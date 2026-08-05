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
  const SW_ARC = '0.8';
  const R = '1.2';

  const updates = {
    'y10-8a-q2a': {
      graphData: {
        svg: `<svg viewBox="-40 -40 280 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,20 30,140 170,140" fill="none" stroke="#000" stroke-width="${SW}"/>
  <circle cx="100" cy="20" r="${R}" fill="#000"/>
  <circle cx="30" cy="140" r="${R}" fill="#000"/>
  <circle cx="170" cy="140" r="${R}" fill="#000"/>
  <text x="95" y="12" ${P_FONT}>R</text>
  <text x="15" y="145" ${P_FONT}>S</text>
  <text x="175" y="145" ${P_FONT}>T</text>
  <line x1="60" y1="77" x2="70" y2="83" stroke="#000" stroke-width="${SW}"/>
  <line x1="130" y1="83" x2="140" y2="77" stroke="#000" stroke-width="${SW}"/>
  <line x1="100" y1="135" x2="100" y2="145" stroke="#000" stroke-width="${SW}"/>
  <path d="M 90 37 A 20 20 0 0 0 110 37" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="96" y="55" ${P_FONT}>α</text>
  <path d="M 45 140 A 20 20 0 0 0 40 122" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="45" y="132" ${P_FONT}>β</text>
  <path d="M 155 140 A 20 20 0 0 1 160 122" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="145" y="132" ${P_FONT}>γ</text>
</svg>`
      }
    },
    'y10-8a-q2b-theta': {
      graphData: {
        svg: `<svg viewBox="-40 -40 330 230" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,130 140,40 200,130" fill="none" stroke="#000" stroke-width="${SW}"/>
  <line x1="40" y1="130" x2="180" y2="4" stroke="#000" stroke-width="${SW}" stroke-dasharray="4"/>
  <circle cx="40" cy="130" r="${R}" fill="#000"/>
  <circle cx="140" cy="40" r="${R}" fill="#000"/>
  <circle cx="200" cy="130" r="${R}" fill="#000"/>
  <text x="20" y="140" ${P_FONT}>W</text>
  <text x="120" y="30" ${P_FONT}>X</text>
  <text x="205" y="140" ${P_FONT}>Y</text>
  <path d="M 140 40 A 25 25 0 0 0 162 20" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="165" y="30" ${V_FONT}>80°</text>
  <line x1="84" y1="82" x2="92" y2="91" stroke="#000" stroke-width="${SW}"/>
  <line x1="88" y1="78" x2="96" y2="87" stroke="#000" stroke-width="${SW}"/>
  <line x1="163" y1="86" x2="173" y2="79" stroke="#000" stroke-width="${SW}"/>
  <line x1="167" y1="91" x2="177" y2="84" stroke="#000" stroke-width="${SW}"/>
  <path d="M 60 130 A 20 20 0 0 0 55 116" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="65" y="125" ${P_FONT}>θ</text>
</svg>`
      }
    },
    'y10-8a-q2c-theta': {
      graphData: {
        svg: `<svg viewBox="-40 -40 280 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,20 30,140 170,140" fill="none" stroke="#000" stroke-width="${SW}"/>
  <circle cx="100" cy="20" r="${R}" fill="#000"/>
  <circle cx="30" cy="140" r="${R}" fill="#000"/>
  <circle cx="170" cy="140" r="${R}" fill="#000"/>
  <text x="95" y="12" ${P_FONT}>Q</text>
  <text x="15" y="145" ${P_FONT}>P</text>
  <text x="175" y="145" ${P_FONT}>R</text>
  <line x1="60" y1="77" x2="70" y2="83" stroke="#000" stroke-width="${SW}"/>
  <line x1="130" y1="83" x2="140" y2="77" stroke="#000" stroke-width="${SW}"/>
  <text x="145" y="80" ${V_FONT}>7 cm</text>
  <path d="M 90 37 A 20 20 0 0 0 110 37" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="92" y="55" ${V_FONT}>60°</text>
  <path d="M 45 140 A 20 20 0 0 0 40 122" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="45" y="132" ${P_FONT}>θ</text>
</svg>`
      }
    },
    'y10-8a-q2c-y': {
      graphData: {
        svg: `<svg viewBox="-40 -40 280 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,20 30,140 170,140" fill="none" stroke="#000" stroke-width="${SW}"/>
  <circle cx="100" cy="20" r="${R}" fill="#000"/>
  <circle cx="30" cy="140" r="${R}" fill="#000"/>
  <circle cx="170" cy="140" r="${R}" fill="#000"/>
  <text x="95" y="12" ${P_FONT}>Q</text>
  <text x="15" y="145" ${P_FONT}>P</text>
  <text x="175" y="145" ${P_FONT}>R</text>
  <line x1="60" y1="77" x2="70" y2="83" stroke="#000" stroke-width="${SW}"/>
  <line x1="130" y1="83" x2="140" y2="77" stroke="#000" stroke-width="${SW}"/>
  <text x="145" y="80" ${V_FONT}>7 cm</text>
  <path d="M 90 37 A 20 20 0 0 0 110 37" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="92" y="55" ${V_FONT}>60°</text>
  <text x="100" y="155" ${P_FONT}>y</text>
</svg>`
      }
    }
  };

  const parentSet = new Set();
  for (const [id, updateData] of Object.entries(updates)) {
    const docRef = db.collection('questions').doc(id);
    await docRef.update({
      ...updateData,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log("Restyled " + id);
    
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

  console.log('Finished fixing tick marks');
  process.exit(0);
}

run().catch(console.error);
