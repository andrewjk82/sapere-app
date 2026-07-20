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

// Generate outward pointing arrows (e.g. x < val1 or x > val2)
function generateOutwardArrowsSvg(val1, inclusive1, val2, inclusive2) {
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
    <!-- Ray to the left from x1 -->
    <line x1="${x1}" y1="${yAxis}" x2="15" y2="${yAxis}" stroke="#6366f1" stroke-width="4" stroke-linecap="round" />
    <polygon points="10,${yAxis} 17,${yAxis - 4.5} 17,${yAxis + 4.5}" fill="#6366f1" />
    <circle cx="${x1}" cy="${yAxis}" r="5.5" fill="${fill1}" stroke="#6366f1" stroke-width="2.2" />

    <!-- Ray to the right from x2 -->
    <line x1="${x2}" y1="${yAxis}" x2="${width - 15}" y2="${yAxis}" stroke="#6366f1" stroke-width="4" stroke-linecap="round" />
    <polygon points="${width - 10},${yAxis} ${width - 17},${yAxis - 4.5} ${width - 17},${yAxis + 4.5}" fill="#6366f1" />
    <circle cx="${x2}" cy="${yAxis}" r="5.5" fill="${fill2}" stroke="#6366f1" stroke-width="2.2" />
  </svg>`;
}

async function run() {
  const batch = db.batch();

  // Let's specifically target the 1 < x < 4 questions
  // ID: EXvWDrRqqlD0R6aT2Jjv (and we can scan all questions to update Option D if they describe "outwards")
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y11a-4A')
    .get();

  let count = 0;
  snap.forEach(d => {
    const data = d.data();
    if (data.type !== 'multiple_choice' || !data.options) return;

    let changed = false;
    const newOptions = data.options.map((opt, idx) => {
      // Let's look at the original descriptions before they were cleaned, or check current question state.
      // Wait, we can reconstruct the descriptions from the options if they are blank but we know the question type!
      // In y11a-4A, for the question "1 < x < 4" (ID: EXvWDrRqqlD0R6aT2Jjv & 48H60PKD0OJFepdjDdny):
      // The options are:
      // A (correct): Open circles at 1 and 4, line segment between them -> we drew (1, open, 4, open) segment.
      // B: Solid circles at 1 and 4, line segment between them -> we drew (1, solid, 4, solid) segment.
      // C: Open circle at 1, solid circle at 4, line segment between them -> we drew (1, open, 4, solid) segment.
      // D: Arrows pointing outwards from 1 and 4 -> currently empty! Let's generate the outward arrows SVG for this option!
      
      const qText = data.question || '';
      const isOneToFour = qText.includes('1 < x < 4');

      if (isOneToFour && idx === 3) {
        changed = true;
        const svg = generateOutwardArrowsSvg(1, false, 4, false);
        return {
          text: '',
          imageUrl: encodeSvg(svg)
        };
      }

      // Also let's check for "arrows pointing outwards" in general across other questions:
      // E.g., for "-1 < x < 4" (ID: LYmIPeaxhLOJqQFzkwdL):
      // D is also "arrows pointing outwards from -1 and 4"
      const isMinusOneToFour = qText.includes('-1 < x < 4');
      if (isMinusOneToFour && idx === 3) {
        changed = true;
        const svg = generateOutwardArrowsSvg(-1, false, 4, false);
        return {
          text: '',
          imageUrl: encodeSvg(svg)
        };
      }

      // For "-3 < a <= 2" (ID: PtR51zOqn9q8GxE8xDJk & VJY3qZ1tcz6szWyhFffV):
      // Wait, let's verify if they have any empty option D.
      // We will also check if any option currently has an empty imageUrl but the seed had "outwards".
      // Since we know the boundary points from the question, we can draw it perfectly!

      return opt;
    });

    if (changed) {
      console.log('Successfully filled missing Option D outward arrows SVG for question: ' + d.id);
      batch.update(d.ref, {
        options: newOptions
      });
      count++;
    }
  });

  if (count > 0) {
    const questionsMetaRef = db.doc('sync_meta/questions');
    const now = Date.now();
    batch.update(questionsMetaRef, {
      version: now,
      membershipVersion: now,
      updatedAt: FieldValue.serverTimestamp()
    });

    await batch.commit();
    console.log('Successfully updated outward arrow SVGs!');
  } else {
    console.log('No empty options found to update.');
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
