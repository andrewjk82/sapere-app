const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11BQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11B_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

const prettyTable = `Fill in the missing entries in the table below, where \\(M\\) is the midpoint of the interval \\(AB\\).

| Row | Point \\(A\\) | Point \\(B\\) | Midpoint \\(M\\) |
| :---: | :---: | :---: | :---: |
| **a** | \\((2, 5)\\) | \\((6, 11)\\) | **?** |
| **b** | **?** | \\((4, 5)\\) | \\((8, 10)\\) |
| **c** | \\((-2, -5)\\) | **?** | \\((2, -2)\\) |
| **d** | \\((1.5, 5.3)\\) | \\((7.7, 2.2)\\) | **?** |
| **e** | **?** | \\((-2.5, -3.1)\\) | \\((0.5, -1.5)\\) |
| **f** | \\((-4.8, 5)\\) | **?** | \\((0, 4)\\) |

`;

const rowData = {
  'y9-11b-q3a': { x1: 2, y1: 5, x2: 6, y2: 11, finding: 'M', row: 'a' },
  'y9-11b-q3b': { x2: 4, y2: 5, xM: 8, yM: 10, finding: 'A', row: 'b' },
  'y9-11b-q3c': { x1: -2, y1: -5, xM: 2, yM: -2, finding: 'B', row: 'c' },
  'y9-11b-q3d': { x1: 1.5, y1: 5.3, x2: 7.7, y2: 2.2, finding: 'M', row: 'd' },
  'y9-11b-q3e': { x2: -2.5, y2: -3.1, xM: 0.5, yM: -1.5, finding: 'A', row: 'e' },
  'y9-11b-q3f': { x1: -4.8, y1: 5, xM: 0, yM: 4, finding: 'B', row: 'f' }
};

function generateGraphData(x1, y1, x2, y2, xM, yM) {
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

  return {
    jsxGraph: {
      width: 400,
      height: 400,
      boundingbox: [minX, Math.max(maxY, 1), maxX, Math.min(minY, -1)],
      boardOptions: { axis: true, grid: true },
      script: jsxScript
    }
  };
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();
  let updatedCount = 0;
  
  for (let i = 0; i < qOrig.length; i++) {
    const q = qOrig[i];
    
    if (rowData[q.id]) {
      const data = rowData[q.id];
      qOrig[i].question = prettyTable + `Find the missing point for row **${data.row}**.`;

      if (data.finding === 'M') {
        const xM = (data.x1 + data.x2) / 2;
        const yM = (data.y1 + data.y2) / 2;
        
        qOrig[i].solutionSteps = [
          {
            "explanation": "Step 1: Identify the coordinates of the given endpoints.",
            "workingOut": `$$ A(${data.x1}, ${data.y1}), \\; B(${data.x2}, ${data.y2}) $$`,
            "graphData": null
          },
          {
            "explanation": "Step 2: State the midpoint formula.",
            "workingOut": "\\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\)",
            "graphData": null
          },
          {
            "explanation": "Step 3: Substitute the coordinates and calculate.",
            "workingOut": `$$ \\begin{aligned} x_M &= \\frac{${data.x1} + ${data.x2}}{2} = ${xM} \\\\\\\\ y_M &= \\frac{${data.y1} + ${data.y2}}{2} = ${yM} \\end{aligned} $$`,
            "graphData": null
          },
          {
            "explanation": "Step 4: State the final coordinates of the midpoint \\(M\\).",
            "workingOut": `$$ M(${xM}, ${yM}) $$`,
            "graphData": generateGraphData(data.x1, data.y1, data.x2, data.y2, xM, yM)
          }
        ];
      } else if (data.finding === 'B') {
        const x2 = 2 * data.xM - data.x1;
        const y2 = 2 * data.yM - data.y1;
        
        qOrig[i].solutionSteps = [
          {
            "explanation": "Step 1: Identify the coordinates of the known endpoint and the midpoint.",
            "workingOut": `$$ A(${data.x1}, ${data.y1}), \\; M(${data.xM}, ${data.yM}) $$`,
            "graphData": null
          },
          {
            "explanation": "Step 2: Set up equations using the midpoint formula \\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\).",
            "workingOut": `$$ \\frac{${data.x1} + x_2}{2} = ${data.xM}, \\quad \\frac{${data.y1} + y_2}{2} = ${data.yM} $$`,
            "graphData": null
          },
          {
            "explanation": "Step 3: Solve for the unknown coordinates.",
            "workingOut": `$$ \\begin{aligned} \\frac{${data.x1} + x_2}{2} &= ${data.xM} \\implies ${data.x1} + x_2 = ${2 * data.xM} \\implies x_2 = ${x2} \\\\\\\\ \\frac{${data.y1} + y_2}{2} &= ${data.yM} \\implies ${data.y1} + y_2 = ${2 * data.yM} \\implies y_2 = ${y2} \\end{aligned} $$`,
            "graphData": null
          },
          {
            "explanation": "Step 4: State the final coordinates of point \\(B\\).",
            "workingOut": `$$ B(${x2}, ${y2}) $$`,
            "graphData": generateGraphData(data.x1, data.y1, x2, y2, data.xM, data.yM)
          }
        ];
      } else if (data.finding === 'A') {
        const x1 = 2 * data.xM - data.x2;
        const y1 = 2 * data.yM - data.y2;
        
        qOrig[i].solutionSteps = [
          {
            "explanation": "Step 1: Identify the coordinates of the known endpoint and the midpoint.",
            "workingOut": `$$ B(${data.x2}, ${data.y2}), \\; M(${data.xM}, ${data.yM}) $$`,
            "graphData": null
          },
          {
            "explanation": "Step 2: Set up equations using the midpoint formula \\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\).",
            "workingOut": `$$ \\frac{x_1 + ${data.x2}}{2} = ${data.xM}, \\quad \\frac{y_1 + ${data.y2}}{2} = ${data.yM} $$`,
            "graphData": null
          },
          {
            "explanation": "Step 3: Solve for the unknown coordinates.",
            "workingOut": `$$ \\begin{aligned} \\frac{x_1 + ${data.x2}}{2} &= ${data.xM} \\implies x_1 + ${data.x2} = ${2 * data.xM} \\implies x_1 = ${x1} \\\\\\\\ \\frac{y_1 + ${data.y2}}{2} &= ${data.yM} \\implies y_1 + ${data.y2} = ${2 * data.yM} \\implies y_1 = ${y1} \\end{aligned} $$`,
            "graphData": null
          },
          {
            "explanation": "Step 4: State the final coordinates of point \\(A\\).",
            "workingOut": `$$ A(${x1}, ${y1}) $$`,
            "graphData": generateGraphData(x1, y1, data.x2, data.y2, data.xM, data.yM)
          }
        ];
      }

      batch.update(db.collection('questions').doc(qOrig[i].id), {
        question: qOrig[i].question,
        solutionSteps: qOrig[i].solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    }
  }

  batch.update(db.doc('sync_meta/questions'), {
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();

  fs.writeFileSync(pathOrig, `export const Y9_CH11B_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');

  console.log(`Successfully updated ${updatedCount} q3 table questions!`);
  process.exit(0);
}

run().catch(console.error);
