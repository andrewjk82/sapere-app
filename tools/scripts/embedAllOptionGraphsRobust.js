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

// Generate double inequality SVG with readable tick stepping
function generateDoubleInequalitySvg(val1, inclusive1, val2, inclusive2) {
  const width = 360;
  const height = 65;
  const yAxis = 35;
  const centerCoord = width / 2;

  // Ensure val1 is smaller
  const minVal = Math.min(val1, val2);
  const maxVal = Math.max(val1, val2);
  const inc1 = minVal === val1 ? inclusive1 : inclusive2;
  const inc2 = minVal === val1 ? inclusive2 : inclusive1;

  const centerVal = (minVal + maxVal) / 2;
  const span = maxVal - minVal;

  // Determine scale and step size
  const scale = Math.min(25, 200 / Math.max(1, span));
  
  let step = 1;
  if (span > 80) step = 20;
  else if (span > 40) step = 10;
  else if (span > 20) step = 5;
  else if (span > 10) step = 2;

  // Determine tick range to cover the viewable area (from centerCoord - 160 to centerCoord + 160)
  const viewRadius = 160 / scale;
  const startTick = Math.floor(centerVal - viewRadius);
  const endTick = Math.ceil(centerVal + viewRadius);

  // We want to collect all tick values, ensuring the boundaries minVal and maxVal are always included!
  const tickValues = new Set();
  tickValues.add(minVal);
  tickValues.add(maxVal);

  // Add step-based ticks
  const startAligned = Math.ceil(startTick / step) * step;
  for (let v = startAligned; v <= endTick; v += step) {
    tickValues.add(v);
  }

  // Generate ticks HTML
  let ticksHtml = '';
  const sortedTicks = Array.from(tickValues).sort((a, b) => a - b);
  
  // Track last x coordinate to prevent labels overlapping if a boundary is too close to a step tick
  let lastLabelX = -999;

  for (const val of sortedTicks) {
    const x = centerCoord + (val - centerVal) * scale;
    if (x >= 20 && x <= width - 20) {
      const isBoundary = val === minVal || val === maxVal;
      // Skip if this label is too close to the last printed label (minimum 22px spacing), unless it's a boundary
      if (!isBoundary && Math.abs(x - lastLabelX) < 22) {
        continue;
      }
      
      ticksHtml += `
        <line x1="${x}" y1="${yAxis - 5}" x2="${x}" y2="${yAxis + 5}" stroke="#94a3b8" stroke-width="1.2" />
        <text x="${x}" y="${yAxis + 18}" text-anchor="middle" fill="#64748b" font-size="10" font-weight="600" font-family="'Outfit', sans-serif">${val}</text>
      `;
      lastLabelX = x;
    }
  }

  const x1 = centerCoord + (minVal - centerVal) * scale;
  const x2 = centerCoord + (maxVal - centerVal) * scale;

  const fill1 = inc1 ? '#6366f1' : '#ffffff';
  const fill2 = inc2 ? '#6366f1' : '#ffffff';

  return `<svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" style="background:#f8fafc; border-radius:8px; display:block;" xmlns="http://www.w3.org/2000/svg">
    <line x1="15" y1="${yAxis}" x2="${width - 15}" y2="${yAxis}" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round" />
    ${ticksHtml}
    <line x1="${x1}" y1="${yAxis}" x2="${x2}" y2="${yAxis}" stroke="#6366f1" stroke-width="4" />
    <circle cx="${x1}" cy="${yAxis}" r="5.5" fill="${fill1}" stroke="#6366f1" stroke-width="2.2" />
    <circle cx="${x2}" cy="${yAxis}" r="5.5" fill="${fill2}" stroke="#6366f1" stroke-width="2.2" />
  </svg>`;
}

// Generate outward pointing arrows (e.g. x < val1 or x > val2) with readable tick stepping
function generateOutwardArrowsSvg(val1, inclusive1, val2, inclusive2) {
  const width = 360;
  const height = 65;
  const yAxis = 35;
  const centerCoord = width / 2;

  const minVal = Math.min(val1, val2);
  const maxVal = Math.max(val1, val2);
  const inc1 = minVal === val1 ? inclusive1 : inclusive2;
  const inc2 = minVal === val1 ? inclusive2 : inclusive1;

  const centerVal = (minVal + maxVal) / 2;
  const span = maxVal - minVal;
  const scale = Math.min(25, 200 / Math.max(1, span));

  let step = 1;
  if (span > 80) step = 20;
  else if (span > 40) step = 10;
  else if (span > 20) step = 5;
  else if (span > 10) step = 2;

  const viewRadius = 160 / scale;
  const startTick = Math.floor(centerVal - viewRadius);
  const endTick = Math.ceil(centerVal + viewRadius);

  const tickValues = new Set();
  tickValues.add(minVal);
  tickValues.add(maxVal);

  const startAligned = Math.ceil(startTick / step) * step;
  for (let v = startAligned; v <= endTick; v += step) {
    tickValues.add(v);
  }

  let ticksHtml = '';
  const sortedTicks = Array.from(tickValues).sort((a, b) => a - b);
  let lastLabelX = -999;

  for (const val of sortedTicks) {
    const x = centerCoord + (val - centerVal) * scale;
    if (x >= 20 && x <= width - 20) {
      const isBoundary = val === minVal || val === maxVal;
      if (!isBoundary && Math.abs(x - lastLabelX) < 22) {
        continue;
      }
      ticksHtml += `
        <line x1="${x}" y1="${yAxis - 5}" x2="${x}" y2="${yAxis + 5}" stroke="#94a3b8" stroke-width="1.2" />
        <text x="${x}" y="${yAxis + 18}" text-anchor="middle" fill="#64748b" font-size="10" font-weight="600" font-family="'Outfit', sans-serif">${val}</text>
      `;
      lastLabelX = x;
    }
  }

  const x1 = centerCoord + (minVal - centerVal) * scale;
  const x2 = centerCoord + (maxVal - centerVal) * scale;

  const fill1 = inc1 ? '#6366f1' : '#ffffff';
  const fill2 = inc2 ? '#6366f1' : '#ffffff';

  return `<svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" style="background:#f8fafc; border-radius:8px; display:block;" xmlns="http://www.w3.org/2000/svg">
    <line x1="15" y1="${yAxis}" x2="${width - 15}" y2="${yAxis}" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round" />
    ${ticksHtml}
    <line x1="${x1}" y1="${yAxis}" x2="15" y2="${yAxis}" stroke="#6366f1" stroke-width="4" stroke-linecap="round" />
    <polygon points="10,${yAxis} 17,${yAxis - 4.5} 17,${yAxis + 4.5}" fill="#6366f1" />
    <circle cx="${x1}" cy="${yAxis}" r="5.5" fill="${fill1}" stroke="#6366f1" stroke-width="2.2" />

    <line x1="${x2}" y1="${yAxis}" x2="${width - 15}" y2="${yAxis}" stroke="#6366f1" stroke-width="4" stroke-linecap="round" />
    <polygon points="${width - 10},${yAxis} ${width - 17},${yAxis - 4.5} ${width - 17},${yAxis + 4.5}" fill="#6366f1" />
    <circle cx="${x2}" cy="${yAxis}" r="5.5" fill="${fill2}" stroke="#6366f1" stroke-width="2.2" />
  </svg>`;
}

// Robust parsing of text option descriptions into graphs (handles zero-space commas)
function parseDescriptionOptionToSvg(text) {
  const clean = text.replace(/\\/g, '').replace(/\$/g, '').toLowerCase().trim();

  // Match single boundary: e.g. "open circle at 3 with an arrow pointing to the right"
  const singleMatch = clean.match(/(solid|closed|open)\s+circle\s+at\s+(-?\d+(?:\.\d+)?)(?:(?:,\s*)|(?:\s+with\s+(?:a\s+|an\s+|the\s+)?))?arrow\s+(?:pointing\s+)?(?:to\s+)?(?:the\s+)?(right|left)/i);
  if (singleMatch) {
    const isSolid = singleMatch[1] === 'solid' || singleMatch[1] === 'closed';
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

  // Match double boundary: "closed circle at 2 and open circle at 6" or "open at -5, solid at 1"
  const doubleCircleMatch = clean.match(/(solid|closed|open)\s+circle\s+at\s+(-?\d+)\s*(?:and|,)\s*(solid|closed|open)\s+circle\s+at\s+(-?\d+)/i) ||
                            clean.match(/(solid|closed|open)\s+at\s+(-?\d+)\s*(?:and|,)\s*(solid|closed|open)\s+at\s+(-?\d+)/i);
  if (doubleCircleMatch) {
    const isSolid1 = doubleCircleMatch[1] === 'solid' || doubleCircleMatch[1] === 'closed';
    const val1 = parseInt(doubleCircleMatch[2]);
    const isSolid2 = doubleCircleMatch[3] === 'solid' || doubleCircleMatch[3] === 'closed';
    const val2 = parseInt(doubleCircleMatch[4]);
    return generateDoubleInequalitySvg(val1, isSolid1, val2, isSolid2);
  }

  // Match double boundary of same type: "solid circles at both -1 and 4"
  const doubleBothMatch = clean.match(/(solid|closed|open)\s+circle[s]?\s+at\s+(?:both\s+)?(-?\d+)\s+and\s+(-?\d+)/i);
  if (doubleBothMatch) {
    const isSolid = doubleBothMatch[1] === 'solid' || doubleBothMatch[1] === 'closed';
    const val1 = parseInt(doubleBothMatch[2]);
    const val2 = parseInt(doubleBothMatch[3]);
    return generateDoubleInequalitySvg(val1, isSolid, val2, isSolid);
  }

  if (clean.includes('pointing outwards') || clean.includes('pointing outward') || clean.includes('outwards from')) {
    const nums = clean.match(/-?\d+/g);
    if (nums && nums.length >= 2) {
      const val1 = parseInt(nums[0]);
      const val2 = parseInt(nums[1]);
      return generateOutwardArrowsSvg(val1, false, val2, false);
    }
  }

  return null;
}

// Parses a math formula like "-2 < y <= 7" or "x >= 3" into an SVG number line
function parseFormulaOptionToSvg(formula) {
  if (!formula) return null;
  // If formula contains a semicolon, split and take the formula part
  const part = formula.split(';')[0].trim();
  const clean = part.replace(/\\/g, '').replace(/\$/g, '').replace(/\s+/g, '');

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

// Helper to clean description text from options
function cleanOptionText(text) {
  if (!text) return '';

  if (text.includes(';')) {
    return text.split(';')[0].trim();
  }

  const lower = text.toLowerCase().trim();
  if (
    lower.includes('circle') ||
    lower.includes('segment') ||
    lower.includes('arrow') ||
    lower.includes('line connecting') ||
    lower.includes('point') ||
    lower.includes('closed') ||
    lower.includes('open')
  ) {
    return '';
  }

  return text;
}

async function run() {
  const backup = JSON.parse(readFileSync('/Users/andrewkim/.gemini/antigravity-ide/brain/a055def1-1288-4a20-a812-87f14859d7ad/scratch/y11a_4A_questions.json', 'utf8'));
  
  console.log('Restoring and reprocessing with semicolon splits and readable stepping ticks...');
  
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y11a-4A')
    .get();

  let updatedCount = 0;
  const batch = db.batch();

  snap.forEach(d => {
    const backupQ = backup.find(item => item.id === d.id);
    if (!backupQ || !backupQ.options) return;

    const qText = backupQ.question || '';
    const isGraphTask = qText.toLowerCase().includes('graph') || qText.toLowerCase().includes('describe') || qText.toLowerCase().includes('solve and choose');

    let optionsChanged = false;
    const newOptions = backupQ.options.map(opt => {
      const rawText = typeof opt === 'object' ? opt.text : String(opt);
      const optObj = { text: rawText, imageUrl: '' };

      let svg = null;
      if (isGraphTask) {
        // Try parsing formula first (with semicolon split support), then description
        svg = parseFormulaOptionToSvg(optObj.text) || parseDescriptionOptionToSvg(optObj.text);
      }

      if (svg) {
        optionsChanged = true;
        return {
          text: cleanOptionText(optObj.text),
          imageUrl: encodeSvg(svg)
        };
      }

      return optObj;
    });

    if (optionsChanged) {
      console.log('Processed SVG options for question: ' + d.id);
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
    console.log(`Successfully completed robust run for ${updatedCount} questions!`);
  } else {
    console.log('No questions updated.');
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
