import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to encode SVG into Data URL
function encodeSvg(svg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// Generate single inequality number line SVG
function generateInequalitySvg(type, boundaryVal) {
  const width = 360;
  const height = 65;
  const yAxis = 35;
  const centerCoord = width / 2;
  const scale = 25; // slightly smaller scale to fit option boxes

  const centerVal = boundaryVal;
  const startTick = Math.floor(centerVal - 4);
  const endTick = Math.ceil(centerVal + 4);

  let ticksHtml = '';
  for (let val = startTick; val <= endTick; val++) {
    const x = centerCoord + (val - centerVal) * scale;
    if (x >= 20 && x <= width - 20) {
      ticksHtml += `
        <line x1="${x}" y1="${yAxis - 5}" x2="${x}" y2="${yAxis + 5}" stroke="#94a3b8" stroke-width="1.2" />
        <text x="${x}" y="${yAxis + 18}" text-anchor="middle" fill="#64748b" font-size="10" font-weight="600" font-family="'Outfit', sans-serif">${val}</text>
      `;
    }
  }

  let solutionHtml = '';
  const x1 = centerCoord + (boundaryVal - centerVal) * scale;

  if (type === 'greater_equal' || type === 'greater') {
    const isSolid = type === 'greater_equal';
    const fillStyle = isSolid ? '#6366f1' : '#ffffff';
    solutionHtml = `
      <line x1="${x1}" y1="${yAxis}" x2="${width - 15}" y2="${yAxis}" stroke="#6366f1" stroke-width="4" stroke-linecap="round" />
      <polygon points="${width - 10},${yAxis} ${width - 17},${yAxis - 4.5} ${width - 17},${yAxis + 4.5}" fill="#6366f1" />
      <circle cx="${x1}" cy="${yAxis}" r="5.5" fill="${fillStyle}" stroke="#6366f1" stroke-width="2.2" />
    `;
  } else if (type === 'less_equal' || type === 'less') {
    const isSolid = type === 'less_equal';
    const fillStyle = isSolid ? '#6366f1' : '#ffffff';
    solutionHtml = `
      <line x1="${x1}" y1="${yAxis}" x2="15" y2="${yAxis}" stroke="#6366f1" stroke-width="4" stroke-linecap="round" />
      <polygon points="10,${yAxis} 17,${yAxis - 4.5} 17,${yAxis + 4.5}" fill="#6366f1" />
      <circle cx="${x1}" cy="${yAxis}" r="5.5" fill="${fillStyle}" stroke="#6366f1" stroke-width="2.2" />
    `;
  }

  return `<svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" style="background:#f8fafc; border-radius:8px; display:block;" xmlns="http://www.w3.org/2000/svg">
    <line x1="15" y1="${yAxis}" x2="${width - 15}" y2="${yAxis}" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round" />
    ${ticksHtml}
    ${solutionHtml}
  </svg>`;
}

// Generate double inequality/segment number line SVG
function generateDoubleInequalitySvg(val1, inclusive1, val2, inclusive2) {
  const width = 360;
  const height = 65;
  const yAxis = 35;
  const centerCoord = width / 2;
  const centerVal = (val1 + val2) / 2;
  const span = Math.abs(val2 - val1);
  const scale = Math.min(25, 200 / span);

  let step = 1;
  if (scale < 12) step = 2;

  const halfTicks = Math.floor(160 / (scale * step));
  const startTick = Math.floor(centerVal) - halfTicks * step;
  const endTick = Math.ceil(centerVal) + halfTicks * step;

  let ticksHtml = '';
  for (let val = startTick; val <= endTick; val += step) {
    const x = centerCoord + (val - centerVal) * scale;
    if (x >= 20 && x <= width - 20) {
      ticksHtml += `
        <line x1="${x}" y1="${yAxis - 5}" x2="${x}" y2="${yAxis + 5}" stroke="#94a3b8" stroke-width="1.2" />
        <text x="${x}" y="${yAxis + 18}" text-anchor="middle" fill="#64748b" font-size="10" font-weight="600" font-family="'Outfit', sans-serif">${val}</text>
      `;
    }
  }

  const x1 = centerCoord + (val1 - centerVal) * scale;
  const x2 = centerCoord + (val2 - centerVal) * scale;

  const fill1 = inclusive1 ? '#6366f1' : '#ffffff';
  const fill2 = inclusive2 ? '#6366f1' : '#ffffff';

  return `<svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" style="background:#f8fafc; border-radius:8px; display:block;" xmlns="http://www.w3.org/2000/svg">
    <line x1="15" y1="${yAxis}" x2="${width - 15}" y2="${yAxis}" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round" />
    ${ticksHtml}
    <line x1="${x1}" y1="${yAxis}" x2="${x2}" y2="${yAxis}" stroke="#6366f1" stroke-width="4" />
    <circle cx="${x1}" cy="${yAxis}" r="5.5" fill="${fill1}" stroke="#6366f1" stroke-width="2.2" />
    <circle cx="${x2}" cy="${yAxis}" r="5.5" fill="${fill2}" stroke="#6366f1" stroke-width="2.2" />
  </svg>`;
}

// Parses an option description string into an SVG graph diagram
function parseOptionToSvg(text) {
  const clean = text.replace(/\\/g, '').replace(/\$/g, '').toLowerCase().trim();

  // Match pattern: "x >= 3; solid circle at 3, arrow right"
  // Match single inequality
  const singleMatch = clean.match(/(solid|open)\s+circle\s+at\s+(-?\d+(\.\d+)?),\s+arrow\s+(right|left)/i);
  if (singleMatch) {
    const isSolid = singleMatch[1] === 'solid';
    const boundary = parseFloat(singleMatch[2]);
    const isRight = singleMatch[4] === 'right';

    let type = '';
    if (isRight) {
      type = isSolid ? 'greater_equal' : 'greater';
    } else {
      type = isSolid ? 'less_equal' : 'less';
    }
    return generateInequalitySvg(type, boundary);
  }

  // Match pattern: "solid circle at -6, open circle at 8, line segment between them"
  const doubleCircleMatch = clean.match(/(solid|open)\s+circle[s]?\s+at\s+(-?\d+)\s+and\s+(-?\d+)/i) || 
                            clean.match(/(solid|open)\s+circle\s+at\s+(-?\d+),\s+(solid|open)\s+circle\s+at\s+(-?\d+)/i);

  if (doubleCircleMatch) {
    // If it matched the second format (e.g. solid circle at -6, open circle at 8)
    if (doubleCircleMatch[3] === 'solid' || doubleCircleMatch[3] === 'open') {
      const isSolid1 = doubleCircleMatch[1] === 'solid';
      const val1 = parseInt(doubleCircleMatch[2]);
      const isSolid2 = doubleCircleMatch[3] === 'solid';
      const val2 = parseInt(doubleCircleMatch[4]);
      return generateDoubleInequalitySvg(val1, isSolid1, val2, isSolid2);
    } else {
      // E.g. "solid circles at -6 and 8" or "open circles at -6 and 8"
      const isSolid = doubleCircleMatch[1] === 'solid';
      const val1 = parseInt(doubleCircleMatch[2]);
      const val2 = parseInt(doubleCircleMatch[3]);
      return generateDoubleInequalitySvg(val1, isSolid, val2, isSolid);
    }
  }

  // Match basic ranges like "arrows pointing outwards from -1 and 4" (complementary region)
  if (clean.includes('arrows pointing outwards')) {
    // Return empty axis or basic visual
    return null;
  }

  return null;
}

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y11a-4A')
    .get();

  console.log('Embedding SVGs directly into the MCQ options of Year 11 Advanced Chapter 4A questions...');
  let updatedCount = 0;
  const batch = db.batch();

  snap.forEach(d => {
    const data = d.data();
    if (data.type !== 'multiple_choice' || !data.options) return;

    let optionsChanged = false;
    const newOptions = data.options.map(opt => {
      const optObj = typeof opt === 'object' ? opt : { text: opt, imageUrl: '' };
      const svg = parseOptionToSvg(optObj.text);

      if (svg) {
        optionsChanged = true;
        return {
          ...optObj,
          imageUrl: encodeSvg(svg)
        };
      }
      return optObj;
    });

    if (optionsChanged) {
      console.log('Adding SVGs to option images of question: ' + d.id);
      batch.update(d.ref, {
        options: newOptions,
        // Also remove the redundant root diagramSvg if it was added, so it doesn't show twice!
        // We only want the graphs on the choices!
        graphData: FieldValue.delete()
      });
      updatedCount++;
    }
  });

  if (updatedCount > 0) {
    const questionsMetaRef = db.doc('sync_meta/questions');
    const now = Date.now();
    batch.update(questionsMetaRef, {
      version: now,
      membershipVersion: now,
      updatedAt: FieldValue.serverTimestamp()
    });

    await batch.commit();
    console.log('Successfully embedded option SVGs for ' + updatedCount + ' questions!');
  } else {
    console.log('No matching questions found.');
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
