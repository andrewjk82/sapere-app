import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Generates a clean, modern SVG number line diagram for inequalities
function generateInequalitySvg(type, boundaryVal, boundaryVal2 = null) {
  const width = 400;
  const height = 70;
  const yAxis = 40;
  const centerCoord = width / 2;

  let centerVal = boundaryVal;
  let scale = 30; // default scale
  
  if (boundaryVal2 !== null) {
    centerVal = (boundaryVal + boundaryVal2) / 2;
    const span = Math.abs(boundaryVal2 - boundaryVal);
    // If the span is wide, dynamically adjust scale to fit within viewport width
    scale = Math.min(30, 240 / span);
  } else {
    // Single boundary: ensure scale keeps things clean
    const absVal = Math.abs(boundaryVal);
    if (absVal > 10) {
      scale = Math.min(30, 150 / absVal);
    }
  }

  // Ticks spacing: if scale is small, show fewer ticks (e.g. step by 2 or 5)
  let step = 1;
  if (scale < 15) step = 2;
  if (scale < 8) step = 5;

  const halfTicks = Math.floor(180 / (scale * step));
  const startTick = Math.floor(centerVal) - halfTicks * step;
  const endTick = Math.ceil(centerVal) + halfTicks * step;

  let ticksHtml = '';
  for (let val = startTick; val <= endTick; val += step) {
    const x = centerCoord + (val - centerVal) * scale;
    if (x >= 25 && x <= width - 25) {
      ticksHtml += `
        <line x1="${x}" y1="${yAxis - 6}" x2="${x}" y2="${yAxis + 6}" stroke="#64748b" stroke-width="1.5" />
        <text x="${x}" y="${yAxis + 22}" text-anchor="middle" fill="#475569" font-size="11" font-weight="600" font-family="'Outfit', sans-serif">${val}</text>
      `;
    }
  }

  // Draw the ray/segment representing the solution region
  let solutionHtml = '';
  const x1 = centerCoord + (boundaryVal - centerVal) * scale;

  if (type === 'greater_equal' || type === 'greater') {
    const isSolid = type === 'greater_equal';
    const fillStyle = isSolid ? '#4f46e5' : '#ffffff';
    solutionHtml = `
      <!-- Line ray to the right -->
      <line x1="${x1}" y1="${yAxis}" x2="${width - 15}" y2="${yAxis}" stroke="#4f46e5" stroke-width="4.5" stroke-linecap="round" />
      <!-- Arrowhead -->
      <polygon points="${width - 10},${yAxis} ${width - 18},${yAxis - 5} ${width - 18},${yAxis + 5}" fill="#4f46e5" />
      <!-- Boundary Circle -->
      <circle cx="${x1}" cy="${yAxis}" r="6.5" fill="${fillStyle}" stroke="#4f46e5" stroke-width="2.5" />
    `;
  } else if (type === 'less_equal' || type === 'less') {
    const isSolid = type === 'less_equal';
    const fillStyle = isSolid ? '#4f46e5' : '#ffffff';
    solutionHtml = `
      <!-- Line ray to the left -->
      <line x1="${x1}" y1="${yAxis}" x2="15" y2="${yAxis}" stroke="#4f46e5" stroke-width="4.5" stroke-linecap="round" />
      <!-- Arrowhead -->
      <polygon points="10,${yAxis} 18,${yAxis - 5} 18,${yAxis + 5}" fill="#4f46e5" />
      <!-- Boundary Circle -->
      <circle cx="${x1}" cy="${yAxis}" r="6.5" fill="${fillStyle}" stroke="#4f46e5" stroke-width="2.5" />
    `;
  }

  return `<svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" style="background:#f8fafc; border-radius:12px; display:block; margin:8px auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Main axis line -->
    <line x1="15" y1="${yAxis}" x2="${width - 15}" y2="${yAxis}" stroke="#64748b" stroke-width="2" stroke-linecap="round" />
    <!-- Ticks and labels -->
    ${ticksHtml}
    <!-- Solution Ray -->
    ${solutionHtml}
  </svg>`;
}

// Custom specialized SVGs for double inequations with dynamic scale
function generateDoubleInequalitySvg(val1, inclusive1, val2, inclusive2) {
  const width = 400;
  const height = 70;
  const yAxis = 40;
  const centerCoord = width / 2;
  const centerVal = (val1 + val2) / 2;
  const span = Math.abs(val2 - val1);

  // Dynamically size scale so it occupies about 60% of the canvas width
  const scale = Math.min(30, 240 / span);

  let step = 1;
  if (scale < 15) step = 2;
  if (scale < 8) step = 5;

  const halfTicks = Math.floor(180 / (scale * step));
  const startTick = Math.floor(centerVal) - halfTicks * step;
  const endTick = Math.ceil(centerVal) + halfTicks * step;

  let ticksHtml = '';
  for (let val = startTick; val <= endTick; val += step) {
    const x = centerCoord + (val - centerVal) * scale;
    if (x >= 25 && x <= width - 25) {
      ticksHtml += `
        <line x1="${x}" y1="${yAxis - 6}" x2="${x}" y2="${yAxis + 6}" stroke="#64748b" stroke-width="1.5" />
        <text x="${x}" y="${yAxis + 22}" text-anchor="middle" fill="#475569" font-size="11" font-weight="600" font-family="'Outfit', sans-serif">${val}</text>
      `;
    }
  }

  const x1 = centerCoord + (val1 - centerVal) * scale;
  const x2 = centerCoord + (val2 - centerVal) * scale;

  const fill1 = inclusive1 ? '#4f46e5' : '#ffffff';
  const fill2 = inclusive2 ? '#4f46e5' : '#ffffff';

  return `<svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" style="background:#f8fafc; border-radius:12px; display:block; margin:8px auto;" xmlns="http://www.w3.org/2000/svg">
    <line x1="15" y1="${yAxis}" x2="${width - 15}" y2="${yAxis}" stroke="#64748b" stroke-width="2" stroke-linecap="round" />
    ${ticksHtml}
    <!-- Segment between boundaries -->
    <line x1="${x1}" y1="${yAxis}" x2="${x2}" y2="${yAxis}" stroke="#4f46e5" stroke-width="4.5" />
    <!-- Boundary circle 1 -->
    <circle cx="${x1}" cy="${yAxis}" r="6.5" fill="${fill1}" stroke="#4f46e5" stroke-width="2.5" />
    <!-- Boundary circle 2 -->
    <circle cx="${x2}" cy="${yAxis}" r="6.5" fill="${fill2}" stroke="#4f46e5" stroke-width="2.5" />
  </svg>`;
}

async function run() {
  const snap = await db.collection('questions')
    .where('topicId', '==', 'y11a-4A')
    .get();

  console.log('Regenerating and embedding correctly-scaled SVG diagrams for Year 11 Advanced Chapter 4A...');
  let updatedCount = 0;
  const batch = db.batch();

  snap.forEach(d => {
    const data = d.data();
    const qText = data.question || '';
    let steps = data.solutionSteps || [];
    
    if (steps.length > 0) {
      let svg = null;

      // 1. Solve and choose the graph: 3x + 4 >= x + 10 (Result: x >= 3)
      if (qText.includes('3x + 4 \\ge x + 10') || qText.includes('3x + 4 >= x + 10')) {
        svg = generateInequalitySvg('greater_equal', 3);
      }
      // 2. Solve and choose the graph: 5b - 2 < 2b - 11 (Result: b < -3)
      else if (qText.includes('5b - 2 < 2b - 11')) {
        svg = generateInequalitySvg('less', -3);
      }
      // 3. Solve and choose the graph: 5a - 4 <= -14 (Result: a <= -2)
      else if (qText.includes('5a - 4 \\le -14') || qText.includes('5a - 4 <= -14')) {
        svg = generateInequalitySvg('less_equal', -2);
      }
      // 4. Solve and choose the graph: 2k + 6 > 16 (Result: k > 5)
      else if (qText.includes('2k + 6 > 16')) {
        svg = generateInequalitySvg('greater', 5);
      }
      // 5. Solve and choose the graph: 4y >= -12 (Result: y >= -3)
      else if (qText.includes('4y \\ge -12') || qText.includes('4y >= -12')) {
        svg = generateInequalitySvg('greater_equal', -3);
      }
      // 6. Solve and choose the graph: x - 5 < 2 (Result: x < 7)
      else if (qText.includes('x - 5 < 2')) {
        svg = generateInequalitySvg('less', 7);
      }
      // 7. Choose the correct graph for: y <= 5
      else if (qText.includes('y \\le 5') || qText.includes('y <= 5')) {
        svg = generateInequalitySvg('less_equal', 5);
      }
      // 8. Choose the correct graph for: k >= -2
      else if (qText.includes('k \\ge -2') || qText.includes('k >= -2')) {
        svg = generateInequalitySvg('greater_equal', -2);
      }
      // 9. Choose the correct graph for: x > 3
      else if (qText.includes('x > 3')) {
        svg = generateInequalitySvg('greater', 3);
      }
      // 10. Choose the correct graph for: x <= -2
      else if (qText.includes('x \\le -2') || qText.includes('x <= -2')) {
        svg = generateInequalitySvg('less_equal', -2);
      }
      // 11. Choose the correct graph for: x >= 5
      else if (qText.includes('x \\ge 5') || qText.includes('x >= 5')) {
        svg = generateInequalitySvg('greater_equal', 5);
      }
      // 12. Solve and choose the graph: -6 < y - 4 <= 3 (Result: -2 < y <= 7)
      else if (qText.includes('-6 < y - 4 \\le 3') || qText.includes('-6 < y - 4 <= 3')) {
        svg = generateDoubleInequalitySvg(-2, false, 7, true);
      }
      // 13. Solve and choose the graph: -9 < 3b + 6 <= 9 (Result: -5 < b <= 1)
      else if (qText.includes('-9 < 3b + 6 \\le 9') || qText.includes('-9 < 3b + 6 <= 9')) {
        svg = generateDoubleInequalitySvg(-5, false, 1, true);
      }
      // 14. Solve and choose the graph: -3 <= 3x <= 6 (Result: -1 <= x <= 2)
      else if (qText.includes('-3 \\le 3x \\le 6') || qText.includes('-3 <= 3x <= 6')) {
        svg = generateDoubleInequalitySvg(-1, true, 2, true);
      }
      // 15. Solve and choose the graph: -10 <= 5a < 15 (Result: -2 <= a < 3)
      else if (qText.includes('-10 \\le 5a < 15') || qText.includes('-10 <= 5a < 15')) {
        svg = generateDoubleInequalitySvg(-2, true, 3, false);
      }
      // 16. Solve and choose the graph: -8 < 4k - 4 < 8 (Result: -1 < k < 3)
      else if (qText.includes('-8 < 4k - 4 < 8')) {
        svg = generateDoubleInequalitySvg(-1, false, 3, false);
      }
      // 17. Solve and choose the graph: 4 < x + 3 < 8 (Result: 1 < x < 5)
      else if (qText.includes('4 < x + 3 < 8')) {
        svg = generateDoubleInequalitySvg(1, false, 5, false);
      }
      // 18. Choose the correct graph for: -6 <= x < 8
      else if (qText.includes('-6 \\le x < 8') || qText.includes('-6 <= x < 8')) {
        svg = generateDoubleInequalitySvg(-6, true, 8, false);
      }
      // 19. Describe the graph of: -4 <= x <= 2
      else if (qText.includes('-4 \\le x \\le 2') || qText.includes('-4 <= x <= 2')) {
        svg = generateDoubleInequalitySvg(-4, true, 2, true);
      }
      // 20. Choose the correct graph for: 1 < x < 4
      else if (qText.includes('1 < x < 4')) {
        svg = generateDoubleInequalitySvg(1, false, 4, false);
      }
      // 21. Choose the correct graph for: -3 < a <= 2
      else if (qText.includes('-3 < a \\le 2') || qText.includes('-3 < a <= 2')) {
        svg = generateDoubleInequalitySvg(-3, false, 2, true);
      }
      // 22. Describe the graph of the combined inequality: -1 < x < 4
      else if (qText.includes('-1 < x < 4')) {
        svg = generateDoubleInequalitySvg(-1, false, 4, false);
      }
      // 23. Describe the graph of: 2 <= x < 6
      else if (qText.includes('2 \\le x < 6') || qText.includes('2 <= x < 6')) {
        svg = generateDoubleInequalitySvg(2, true, 6, false);
      }

      if (svg) {
        const lastIdx = steps.length - 1;
        const newSteps = steps.map((step, idx) => {
          if (idx === lastIdx) {
            return {
              ...step,
              graphData: {
                diagramSvg: svg
              }
            };
          }
          return step;
        });

        console.log('Embedding correct SVG in question: ' + d.id);
        batch.update(d.ref, {
          solutionSteps: newSteps
        });
        updatedCount++;
      }
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
    console.log('Successfully updated correctly-scaled SVGs for ' + updatedCount + ' questions!');
  } else {
    console.log('No matching questions found.');
  }
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
