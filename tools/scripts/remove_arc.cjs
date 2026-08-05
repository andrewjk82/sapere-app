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
  <text x="165" y="30" ${V_FONT}>80°</text>
  <line x1="84" y1="82" x2="92" y2="91" stroke="#000" stroke-width="${SW}"/>
  <line x1="88" y1="78" x2="96" y2="87" stroke="#000" stroke-width="${SW}"/>
  <line x1="163" y1="86" x2="173" y2="79" stroke="#000" stroke-width="${SW}"/>
  <line x1="167" y1="91" x2="177" y2="84" stroke="#000" stroke-width="${SW}"/>
  <path d="M 60 130 A 20 20 0 0 0 55 116" fill="none" stroke="#000" stroke-width="${SW_ARC}"/>
  <text x="65" y="125" ${P_FONT}>θ</text>
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
    console.log("Removed arc from " + id);
    
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

  console.log('Finished removing arc');
  process.exit(0);
}

run().catch(console.error);
