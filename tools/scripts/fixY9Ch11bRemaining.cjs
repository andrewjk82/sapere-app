const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11BQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11B_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();
  let updatedCount = 0;
  
  for (let i = 0; i < qOrig.length; i++) {
    const q = qOrig[i];
    
    // Only target those that failed (i.e. still have the raw template)
    if (!JSON.stringify(q.solutionSteps).includes("Given: read the full stem carefully")) {
      continue;
    }

    let x1, y1, x2, y2, xM, yM;
    let isFindingMidpoint = false;
    let isFindingEndpoint = false;

    // Parse from question
    let epMatch = q.question.match(/endpoints? \\\(\s*\(([-.\d]+),\s*([-.\d]+)\)\s*\\\) and \\\(\s*\(([-.\d]+),\s*([-.\d]+)\)\s*\\\)/);
    if (epMatch) {
      x1 = parseFloat(epMatch[1]);
      y1 = parseFloat(epMatch[2]);
      x2 = parseFloat(epMatch[3]);
      y2 = parseFloat(epMatch[4]);
      isFindingMidpoint = true;
    }

    let endPMatch = q.question.match(/A\s*\(\s*([-.\d]+),\s*([-.\d]+)\s*\)\\\)\s*and\s*\\\(M\s*\(\s*([-.\d]+),\s*([-.\d]+)\s*\)/);
    if (!endPMatch) {
       endPMatch = q.question.match(/A\\\(\s*\(([-.\d]+),\s*([-.\d]+)\)\s*\\\) and \\\(M\\\(\s*\(([-.\d]+),\s*([-.\d]+)\)\s*\\\)/);
    }
    if (endPMatch) {
      x1 = parseFloat(endPMatch[1]);
      y1 = parseFloat(endPMatch[2]);
      xM = parseFloat(endPMatch[3]);
      yM = parseFloat(endPMatch[4]);
      isFindingEndpoint = true;
    }

    if (isFindingMidpoint) {
      xM = (x1 + x2) / 2;
      yM = (y1 + y2) / 2;
      
      let minX = Math.min(x1, x2, xM) - 2;
      let maxX = Math.max(x1, x2, xM) + 2;
      let minY = Math.min(y1, y2, yM) - 2;
      let maxY = Math.max(y1, y2, yM) + 2;

      let jsxScript = `board.suspendUpdate();
board.create('arrow', [[${minX}, 0], [${maxX}, 0]], {strokeColor: 'black'});
board.create('arrow', [[0, ${minY}], [0, ${maxY}]], {strokeColor: 'black'});
board.create('point', [${x1}, ${y1}], {name:'A(${x1}, ${y1})', size:3, color:'red', label:{offset:[5,10]}});
board.create('point', [${x2}, ${y2}], {name:'B(${x2}, ${y2})', size:3, color:'red', label:{offset:[5,10]}});
board.create('point', [${xM}, ${yM}], {name:'M(${xM}, ${yM})', size:3, color:'green', label:{offset:[5,10]}});
board.create('segment', [[${x1}, ${y1}], [${x2}, ${y2}]], {strokeColor: 'blue', dash: 2});
board.unsuspendUpdate();`;

      qOrig[i].solutionSteps = [
        {
          "explanation": "Step 1: Identify the coordinates of the given endpoints.",
          "workingOut": `$$ A(${x1}, ${y1}), \\; B(${x2}, ${y2}) $$`,
          "graphData": null
        },
        {
          "explanation": "Step 2: State the midpoint formula.",
          "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
          "graphData": null
        },
        {
          "explanation": "Step 3: Substitute the coordinates and calculate.",
          "workingOut": `$$ \\begin{aligned} x_M &= \\frac{${x1} + ${x2}}{2} = ${xM} \\\\\\\\ y_M &= \\frac{${y1} + ${y2}}{2} = ${yM} \\end{aligned} $$`,
          "graphData": null
        },
        {
          "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
          "workingOut": `$$ M(${xM}, ${yM}) $$`,
          "graphData": {
            "jsxGraph": {
              "width": 400,
              "height": 400,
              "boundingbox": [minX, Math.max(maxY, 1), maxX, Math.min(minY, -1)],
              "boardOptions": { "axis": true, "grid": true },
              "script": jsxScript
            }
          }
        }
      ];
      updatedCount++;
    } else if (isFindingEndpoint) {
      x2 = 2 * xM - x1;
      y2 = 2 * yM - y1;

      let minX = Math.min(x1, x2, xM) - 2;
      let maxX = Math.max(x1, x2, xM) + 2;
      let minY = Math.min(y1, y2, yM) - 2;
      let maxY = Math.max(y1, y2, yM) + 2;

      let jsxScript = `board.suspendUpdate();
board.create('arrow', [[${minX}, 0], [${maxX}, 0]], {strokeColor: 'black'});
board.create('arrow', [[0, ${minY}], [0, ${maxY}]], {strokeColor: 'black'});
board.create('point', [${x1}, ${y1}], {name:'A(${x1}, ${y1})', size:3, color:'red', label:{offset:[5,10]}});
board.create('point', [${xM}, ${yM}], {name:'M(${xM}, ${yM})', size:3, color:'green', label:{offset:[5,10]}});
board.create('point', [${x2}, ${y2}], {name:'B(${x2}, ${y2})', size:3, color:'red', label:{offset:[5,10]}});
board.create('segment', [[${x1}, ${y1}], [${x2}, ${y2}]], {strokeColor: 'blue', dash: 2});
board.unsuspendUpdate();`;

      qOrig[i].solutionSteps = [
        {
          "explanation": "Step 1: Identify the coordinates of the known endpoint and the midpoint.",
          "workingOut": `$$ A(${x1}, ${y1}), \\; M(${xM}, ${yM}) $$`,
          "graphData": null
        },
        {
          "explanation": "Step 2: Set up equations using the midpoint formula \\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\).",
          "workingOut": `$$ \\frac{${x1} + x_2}{2} = ${xM}, \\quad \\frac{${y1} + y_2}{2} = ${yM} $$`,
          "graphData": null
        },
        {
          "explanation": "Step 3: Solve for the unknown coordinates \\(x_2\\) and \\(y_2\\).",
          "workingOut": `$$ \\begin{aligned} \\frac{${x1} + x_2}{2} &= ${xM} \\implies ${x1} + x_2 = ${2 * xM} \\implies x_2 = ${x2} \\\\\\\\ \\frac{${y1} + y_2}{2} &= ${yM} \\implies ${y1} + y_2 = ${2 * yM} \\implies y_2 = ${y2} \\end{aligned} $$`,
          "graphData": null
        },
        {
          "explanation": "Step 4: State the final coordinates of the unknown endpoint \\(B\\).",
          "workingOut": `$$ B(${x2}, ${y2}) $$`,
          "graphData": {
            "jsxGraph": {
              "width": 400,
              "height": 400,
              "boundingbox": [minX, Math.max(maxY, 1), maxX, Math.min(minY, -1)],
              "boardOptions": { "axis": true, "grid": true },
              "script": jsxScript
            }
          }
        }
      ];
      updatedCount++;
    }

    if (isFindingMidpoint || isFindingEndpoint) {
      batch.update(db.collection('questions').doc(qOrig[i].id), {
        solutionSteps: qOrig[i].solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
    }
  }

  batch.update(db.doc('sync_meta/questions'), {
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();

  fs.writeFileSync(pathOrig, `export const Y9_CH11B_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');

  console.log(`Successfully updated ${updatedCount} remaining questions!`);
  process.exit(0);
}

run().catch(console.error);
