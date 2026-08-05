const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

function buildGraphData(text) {
  if (!text || typeof text !== 'string') return null;
  const t = text.toLowerCase();
  const cleanText = text.replace(/\\\(\s*/g, '').replace(/\s*\\\)/g, '');
  
  const pts = [];
  
  const pointRegex = /(open|closed|solid)(?:\s+circle)?(?:\s+at)?\s+(-?\d+(?:\.\d+)?)/gi;
  let m;
  while ((m = pointRegex.exec(cleanText)) !== null) {
    const type = m[1].toLowerCase() === 'open' ? 'open' : 'closed';
    const val = parseFloat(m[2]);
    pts.push({ val, type });
  }

  const bothRegex = /(open|closed|solid)\s+circles(?:\s+at)?(?:\s+both)?\s+(-?\d+(?:\.\d+)?)\s+and\s+(-?\d+(?:\.\d+)?)/gi;
  while ((m = bothRegex.exec(cleanText)) !== null) {
    const type = m[1].toLowerCase() === 'open' ? 'open' : 'closed';
    pts.push({ val: parseFloat(m[2]), type });
    pts.push({ val: parseFloat(m[3]), type });
  }

  if (pts.length === 0 && t.includes('outward')) {
    const numRegex = /(-?\d+(?:\.\d+)?)/g;
    let matches = [...cleanText.matchAll(numRegex)].map(x => parseFloat(x[1]));
    if (matches.length >= 2) {
      pts.push({ val: matches[matches.length-2], type: 'open' }); 
      pts.push({ val: matches[matches.length-1], type: 'open' });
    }
  }

  const uniquePts = [];
  const seen = new Set();
  for (const p of pts) {
    if (!seen.has(p.val)) {
      seen.add(p.val);
      uniquePts.push(p);
    }
  }

  if (uniquePts.length === 0) return null;
  uniquePts.sort((a,b) => a.val - b.val);
  
  const isLeft = t.includes('left');
  const isRight = t.includes('right');
  const isOutwards = t.includes('outward');
  const hasSegment = t.includes('segment') || t.includes('line connecting') || (uniquePts.length === 2 && !isOutwards);

  let min = Math.floor(uniquePts[0].val - 4);
  let max = Math.ceil(uniquePts[uniquePts.length - 1].val + 4);
  if (uniquePts.length === 1 && uniquePts[0].val === 5) {
      min = 1; max = 9;
  }
  
  const rays = [];
  const segments = [];

  if (uniquePts.length === 1) {
    const p = uniquePts[0];
    if (isRight) rays.push({ start: p.val, direction: 'right' });
    else if (isLeft) rays.push({ start: p.val, direction: 'left' });
  } else if (uniquePts.length === 2) {
    const p1 = uniquePts[0];
    const p2 = uniquePts[1];
    if (hasSegment && !isOutwards) {
      segments.push({ start: p1.val, end: p2.val });
    } else if (isOutwards) {
      rays.push({ start: p1.val, direction: 'left' });
      rays.push({ start: p2.val, direction: 'right' });
    }
  }

  return {
    numberLine: { min, max, points: uniquePts, rays, segments }
  };
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const qs = await db.collection('questions').where('chapterId', '==', 'y11a-4').get();
  console.log(`Found ${qs.docs.length} questions in y11a-4`);

  let count = 0;
  for (const doc of qs.docs) {
    const data = doc.data();
    if (!data.options) continue;

    let modified = false;
    const newOptions = data.options.map(opt => {
      if (!opt.text) return opt;
      const gd = buildGraphData(opt.text);
      if (gd) {
        modified = true;
        return {
          text: opt.text,
          imageUrl: opt.imageUrl || "",
          graphData: gd
        };
      }
      return opt;
    });

    if (modified) {
      await doc.ref.update({ options: newOptions });
      count++;
    }
  }
  console.log(`Successfully updated ${count} questions in Firestore.`);
}

run().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
