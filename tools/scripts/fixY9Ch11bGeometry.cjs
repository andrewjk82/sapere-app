const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11BQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');

const matchOrig = contentOrig.match(/export const Y9_CH11B_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

function generateDistractorsForPoint(x, y) {
  const dist = [
    `\\((${x + 1}, ${y})\\)`,
    `\\((${x}, ${y - 1})\\)`,
    `\\((${y}, ${x})\\)`,
    `\\((${x - 1}, ${y + 1})\\)`,
    `\\((${x + 2}, ${y - 2})\\)`,
    `\\((${x - 2}, ${y})\\)`,
    `\\((${x + 1}, ${y + 1})\\)`,
    `\\((${x - 1}, ${y - 1})\\)`,
    `\\((${x * -1}, ${y})\\)`,
    `\\((${x}, ${y * -1})\\)`
  ];
  const unique = [...new Set(dist.filter(d => d !== `\\((${x}, ${y})\\)`))];
  return unique.slice(0, 3);
}

function generateDistractorsForNumber(val) {
  const dist = [
    val + 1,
    val - 1,
    val + 2,
    val - 2,
    val * -1,
    val * 2
  ];
  const unique = [...new Set(dist.filter(d => d !== val))];
  return unique.slice(0, 3).map(n => n.toString());
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const batch = db.batch();
  let updatedCount = 0;
  
  for (let i = 0; i < qOrig.length; i++) {
    const q = qOrig[i];
    if (q.type !== 'multiple_choice') continue;

    // Fix options
    let correctOpt = q.opts[q.a];
    let newOpts = [];
    
    // Check if correctOpt is a point like \( (x, y) \)
    let pointMatch = correctOpt.match(/\\\(\s*\(\s*([-.\d]+)\s*,\s*([-.\d]+)\s*\)\s*\\\)/);
    if (pointMatch) {
      let x = parseFloat(pointMatch[1]);
      let y = parseFloat(pointMatch[2]);
      let dists = generateDistractorsForPoint(x, y);
      newOpts = [correctOpt, ...dists];
    } else {
      // Check if it's a number
      let numMatch = correctOpt.match(/^[-.\d]+$/) || correctOpt.match(/^\\\([-.\d]+\\\)$/);
      if (numMatch) {
        let valMatch = correctOpt.match(/[-.\d]+/);
        let val = parseFloat(valMatch[0]);
        let dists = generateDistractorsForNumber(val);
        // keep same formatting
        if (correctOpt.includes('\\(')) {
           newOpts = [correctOpt, ...dists.map(d => `\\(${d}\\)`)];
        } else {
           newOpts = [correctOpt, ...dists];
        }
      } else {
        // Safe string fallback
        newOpts = [correctOpt, "Not enough information", "Cannot be determined", "None of the above"];
      }
    }

    // Ensure 4 unique options
    newOpts = [...new Set(newOpts)];
    while(newOpts.length < 4) {
      newOpts.push("Distractor " + newOpts.length);
    }
    newOpts = newOpts.slice(0, 4);

    // Shuffle options
    const shuffled = newOpts.map(value => ({ value, sort: Math.random() }))
                            .sort((a, b) => a.sort - b.sort)
                            .map(({ value }) => value);
    const newAnswerIndex = shuffled.indexOf(correctOpt);

    qOrig[i].opts = shuffled;
    qOrig[i].a = newAnswerIndex;
    qOrig[i].answer = newAnswerIndex.toString();
    qOrig[i].options = shuffled.map(opt => ({ text: opt, imageUrl: "" }));

    // Now fix solutionSteps
    let x1, y1, x2, y2, xM, yM;
    let isFindingMidpoint = false;
    let isFindingEndpoint = false;

    // Extract coordinates from solution
    let midRegex = /M = \\left\\(\\frac{([-.\d]+)\s*\+\s*([-.\d]+)}{2},\s*\\frac{([-.\d]+)\s*\+\s*([-.\d]+)}{2}\\right\\)/;
    let midRegex2 = /M = \\left\\(\\frac{\(([-.\d]+)\)\s*\+\s*\(([-.\d]+)\)}{2},\s*\\frac{\(([-.\d]+)\)\s*\+\s*\(([-.\d]+)\)}{2}\\right\\)/;
    let midMatch = q.solution.match(midRegex) || q.solution.match(midRegex2);
    
    if (!midMatch) {
       // alternative midpoint regex:
       let mRegex3 = /\\frac{([-.\d]+) \+ ([-.\d]+)}{2}/g;
       let matches = [...q.solution.matchAll(mRegex3)];
       if (matches.length === 2) {
          x1 = parseFloat(matches[0][1]);
          x2 = parseFloat(matches[0][2]);
          y1 = parseFloat(matches[1][1]);
          y2 = parseFloat(matches[1][2]);
          isFindingMidpoint = true;
       }
    } else {
       x1 = parseFloat(midMatch[1]);
       x2 = parseFloat(midMatch[2]);
       y1 = parseFloat(midMatch[3]);
       y2 = parseFloat(midMatch[4]);
       isFindingMidpoint = true;
    }

    if (!isFindingMidpoint) {
       // Check if finding endpoint
       let solXMatch = q.solution.match(/\\frac{([-.\d]+) \+ x_2}{2} = ([-.\d]+)/) || q.solution.match(/\\frac{x_1 \+ ([-.\d]+)}{2} = ([-.\d]+)/);
       let solYMatch = q.solution.match(/\\frac{([-.\d]+) \+ y_2}{2} = ([-.\d]+)/) || q.solution.match(/\\frac{y_1 \+ ([-.\d]+)}{2} = ([-.\d]+)/);
       if (solXMatch && solYMatch) {
          x1 = parseFloat(solXMatch[1]);
          xM = parseFloat(solXMatch[2]);
          y1 = parseFloat(solYMatch[1]);
          yM = parseFloat(solYMatch[2]);
          isFindingEndpoint = true;
       }
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
          "explanation": "Step 2: State the midpoint formula \\( M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right) \\).",
          "workingOut": "The midpoint is the average of the \\(x\\)-coordinates and the average of the \\(y\\)-coordinates.",
          "graphData": null
        },
        {
          "explanation": "Step 3: Substitute the coordinates and calculate the midpoint.",
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
    }
    
    // Batch update DB
    batch.update(db.collection('questions').doc(qOrig[i].id), {
      opts: qOrig[i].opts,
      options: qOrig[i].options,
      a: qOrig[i].a,
      answer: qOrig[i].answer,
      solutionSteps: qOrig[i].solutionSteps,
      updatedAt: FieldValue.serverTimestamp()
    });
    updatedCount++;
  }

  // Update sync metadata
  batch.update(db.doc('sync_meta/questions'), {
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();

  fs.writeFileSync(pathOrig, `export const Y9_CH11B_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');

  console.log(`Successfully updated ${updatedCount} multiple-choice questions in 11B!`);
  process.exit(0);
}

run().catch(console.error);
