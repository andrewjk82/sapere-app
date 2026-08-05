const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y10-13a-q2e');
  const docSnap = await docRef.get();
  
  if (docSnap.exists) {
    let svg = docSnap.data().graphData.svg;
    
    // Check if arc already exists
    if (!svg.includes('class="arc"')) {
      // Add the arc style if missing (but it might not be missing if we just removed the path)
      if (!svg.includes('.arc {')) {
        svg = svg.replace('.point { fill: #dc2626; }', '.point { fill: #dc2626; }\n      .arc { stroke: #3b82f6; stroke-width: 1.5; fill: none; }');
      }
      
      // Insert the arc path before the labels
      const arcPath = `<path d="M 124.2,69.6 A 20 20 0 0 0 150.7,59.9" class="arc" />\n  `;
      svg = svg.replace('<text x="165" y="125"', arcPath + '<text x="165" y="125"');
      
      // Update alpha label position to be outside the arc
      svg = svg.replace('<text x="132" y="70" class="text-math" fill="#3b82f6">α</text>', '<text x="136" y="85" class="text-math" fill="#3b82f6">α</text>');
      
      await docRef.update({
        'graphData.svg': svg,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Added alpha arc to y10-13a-q2e');
      
      await touchChapterIndex(db, 'y10-13a');
      console.log('Sync complete.');
    } else {
      console.log('Arc already exists in y10-13a-q2e');
    }
  } else {
    console.log('Document not found');
  }

  process.exit(0);
}

run().catch(console.error);
