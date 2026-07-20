import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to encode SVG to Data URL
function encodeSvg(svg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// Generate single inequality SVG
function generateInequalitySvg(type, boundaryVal) {
  const width = 360;
  const height = 65;
  const yAxis = 35;
  const centerCoord = width / 2;
  const scale = 25;

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

// Generate double inequality SVG
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

// Parses a math formula like "-2 < y <= 7" or "x >= 3" into an SVG number line
function parseFormulaToSvg(formula) {
  if (!formula) return null;
  // Strip backslashes and dollar signs
  const clean = formula.replace(/\\/g, '').replace(/\$/g, '').replace(/\s+/g, '');

  // 1. Double inequality: e.g. "-2<y<=7" or "-2\le y<7"
  // Note: we check for 'le', 'leq', 'ge', 'geq' since backslashes are stripped.
  const doubleMatch = clean.match(/^([-\d]+)(<|<=|le|leq|≤)(x|y|a|b|k|m)(<|<=|le|leq|≤)([-\d]+)$/i);
  if (doubleMatch) {
    const val1 = parseInt(doubleMatch[1]);
    const op1 = doubleMatch[2];
    const val2 = parseInt(doubleMatch[5]);
    const op2 = doubleMatch[4];

    const inclusive1 = op1.includes('=') || op1.includes('le') || op1.includes('≤');
    const inclusive2 = op2.includes('=') || op2.includes('le') || op2.includes('≤');

    return generateDoubleInequalitySvg(val1, inclusive1, val2, inclusive2);
  }

  // 2. Single inequality: e.g. "x>=3" or "y<-3"
  const singleMatch = clean.match(/^(x|y|a|b|k|m)(>=|<=|>|<|ge|le|geq|leq|≥|≤)([-\d]+)$/i);
  if (singleMatch) {
    const op = singleMatch[2];
    const boundary = parseFloat(singleMatch[3]);

    let type = '';
    if (op.includes('>=') || op.includes('ge') || op === '≥') {
      type = 'greater_equal';
    } else if (op.includes('<=') || op.includes('le') || op === '≤') {
      type = 'less_equal';
    } else if (op === '>') {
      type = 'greater';
    } else if (op === '<') {
      type = 'less';
    }

    if (type) {
      return generateInequalitySvg(type, boundary);
    }
  }

  return null;
}

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y11a-4A')
    .get();

  console.log('Detecting and adding SVG diagrams to formula options for "choose the graph" questions...');
  let updatedCount = 0;
  const batch = db.batch();

  snap.forEach(d => {
    const data = d.data();
    const qText = data.question || '';
    const isChooseGraph = qText.toLowerCase().includes('choose the graph') || qText.toLowerCase().includes('choose the correct graph');
    
    if (!isChooseGraph || data.type !== 'multiple_choice' || !data.options) return;

    let optionsChanged = false;
    const newOptions = data.options.map(opt => {
      const optObj = typeof opt === 'object' ? opt : { text: opt, imageUrl: '' };
      
      const svg = parseFormulaToSvg(optObj.text);
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
      console.log('Adding SVGs to formula options for question: ' + d.id);
      batch.update(d.ref, {
        options: newOptions,
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
    console.log('Successfully added SVG diagrams to formula options for ' + updatedCount + ' questions!');
  } else {
    console.log('No formula options needed SVG additions.');
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
