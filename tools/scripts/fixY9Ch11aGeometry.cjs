const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11Questions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');

const matchOrig = contentOrig.match(/export const Y9_CH11_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

function extractPoints(qStr) {
  const pts = [];
  const regex = /(?:([A-Z])\s*)?\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/g;
  let m;
  while ((m = regex.exec(qStr)) !== null) {
    pts.push({
      label: m[1] || null,
      x: parseFloat(m[2]),
      y: parseFloat(m[3])
    });
  }
  if (qStr.toLowerCase().includes('origin')) {
    pts.push({ label: 'O', x: 0, y: 0 });
  }
  return pts;
}

function generateBoundingBox(pts) {
  let minX = Math.min(...pts.map(p => p.x));
  let maxX = Math.max(...pts.map(p => p.x));
  let minY = Math.min(...pts.map(p => p.y));
  let maxY = Math.max(...pts.map(p => p.y));
  
  const padX = Math.max(2, (maxX - minX) * 0.2);
  const padY = Math.max(2, (maxY - minY) * 0.2);
  
  return [minX - padX, maxY + padY, maxX + padX, minY - padY];
}

function formatDist(p1, p2) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const d2 = dx*dx + dy*dy;
  const d = Math.sqrt(d2);
  return { dx, dy, d2, d, str: `\\sqrt{${dx}^2 + ${dy}^2} = \\sqrt{${dx*dx} + ${dy*dy}} = \\sqrt{${d2}}` };
}

for (let i = 0; i < qOrig.length; i++) {
  const q = qOrig[i];
  if (q.topicId !== 'y9-11a') continue; // Only Chapter 11A
  
  const pts = extractPoints(q.question);
  if (pts.length < 2) continue; // Safety check

  let steps = [];
  let script = "board.suspendUpdate();\n";
  const bb = generateBoundingBox(pts);
  
  // Axes
  script += `board.create('arrow', [[${bb[0]+0.5}, 0], [${bb[2]-0.5}, 0]], {strokeColor: 'black'});\n`;
  script += `board.create('arrow', [[0, ${bb[3]+0.5}], [0, ${bb[1]-0.5}]], {strokeColor: 'black'});\n`;
  script += `board.create('text', [${bb[2]-1}, 0.5, 'x'], {fontSize: 12});\n`;
  script += `board.create('text', [0.5, ${bb[1]-1}, 'y'], {fontSize: 12});\n`;

  // Plot points
  pts.forEach((p, idx) => {
    const labelText = p.label ? `${p.label}(${p.x}, ${p.y})` : `(${p.x}, ${p.y})`;
    script += `board.create('point', [${p.x}, ${p.y}], {name:'${labelText}', size:3, color:'red', label:{offset:[5,10]}});\n`;
  });

  if (pts.length === 2) {
    // Simple distance
    const p1 = pts[0];
    const p2 = pts[1];
    const dist = formatDist(p1, p2);
    
    script += `board.create('segment', [[${p1.x}, ${p1.y}], [${p2.x}, ${p2.y}]], {strokeColor:'blue', strokeWidth:2});\n`;
    // Right triangle
    script += `board.create('segment', [[${p1.x}, ${p1.y}], [${p2.x}, ${p1.y}]], {strokeColor:'gray', dash:2});\n`;
    script += `board.create('segment', [[${p2.x}, ${p1.y}], [${p2.x}, ${p2.y}]], {strokeColor:'gray', dash:2});\n`;

    steps = [
      {
        explanation: "Step 1: Identify the coordinates of the two points.",
        workingOut: `$$ (x_1, y_1) = (${p1.x}, ${p1.y}) \\quad \\text{and} \\quad (x_2, y_2) = (${p2.x}, ${p2.y}) $$`,
        graphData: null
      },
      {
        explanation: "Step 2: State the distance formula based on Pythagoras' theorem.",
        workingOut: `$$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$`,
        graphData: null
      },
      {
        explanation: "Step 3: Substitute the coordinates into the formula to find the horizontal and vertical differences.",
        workingOut: `$$ d = \\sqrt{(${p2.x} - ${p1.x})^2 + (${p2.y} - ${p1.y})^2} $$`,
        graphData: null
      },
      {
        explanation: "Step 4: Calculate the squares and find the final distance.",
        workingOut: `$$ d = ${dist.str}${Number.isInteger(dist.d) ? ` = ${dist.d}` : ''} \\text{ units} $$`,
        graphData: null
      }
    ];
  } else if (pts.length >= 3) {
    // Draw polygon
    const coords = pts.map(p => `[${p.x}, ${p.y}]`).join(', ');
    script += `board.create('polygon', [${coords}], {fillColor:'#3b82f6', fillOpacity:0.1, borders:{strokeColor:'blue', strokeWidth:2}});\n`;

    steps = [
      {
        explanation: "Step 1: Identify the coordinates of the given points.",
        workingOut: `$$ ${pts.map(p => `${p.label || ''}(${p.x}, ${p.y})`).join(', \\; ')} $$`,
        graphData: null
      },
      {
        explanation: "Step 2: Use the distance formula \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) to calculate the required side lengths.",
        workingOut: `The distance formula calculates the length of the line segment between two points on the Cartesian plane.`,
        graphData: null
      }
    ];

    let calcOut = [];
    for (let j = 0; j < pts.length; j++) {
      for (let k = j+1; k < pts.length; k++) {
        const d = formatDist(pts[j], pts[k]);
        const name = (pts[j].label && pts[k].label) ? `${pts[j].label}${pts[k].label}` : `\\text{Distance}`;
        calcOut.push(`${name} &= ${d.str}${Number.isInteger(d.d) ? ` = ${d.d}` : ''} \\text{ units}`);
      }
    }
    
    steps.push({
      explanation: "Step 3: Substitute the coordinates and calculate the lengths.",
      workingOut: `$$ \\begin{aligned} ${calcOut.join(' \\\\\\\\ ')} \\end{aligned} $$`,
      graphData: null
    });

    steps.push({
      explanation: "Step 4: Answer the specific question asked.",
      workingOut: q.answer || `Refer to the calculated distances above.`,
      graphData: null
    });
  }

  script += "board.unsuspendUpdate();";

  const graphData = {
    jsxGraph: {
      width: 400,
      height: 400,
      boundingbox: bb,
      boardOptions: { axis: true, grid: true },
      script: script
    }
  };

  q.solutionSteps = steps;
  q.solutionSteps[q.solutionSteps.length - 1].graphData = graphData;
  q.graphData = null; // Ensure top level is null
}

fs.writeFileSync(pathOrig, `export const Y9_CH11_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const batch = db.batch();
  for (const q of qOrig) {
    if (q.topicId === 'y9-11a') {
      batch.update(db.collection('questions').doc(q.id), {
        graphData: null,
        solutionSteps: q.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
    }
  }

  batch.update(db.doc('sync_meta/questions'), {
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });
  
  await batch.commit();

  console.log('Successfully generated SVGs and step-by-step calculus for Year 9 Ch11A!');
  process.exit(0);
}
run();
