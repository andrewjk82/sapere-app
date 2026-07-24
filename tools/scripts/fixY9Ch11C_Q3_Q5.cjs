const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11CQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11C_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

function toFractionLatex(num) {
  if (Number.isInteger(num)) return `\\\\(${num}\\\\)`;
  for (let denom = 2; denom <= 20; denom++) {
    let nom = Math.round(num * denom);
    if (Math.abs(num - nom / denom) < 0.0001) {
      if (nom < 0) return `\\\\(-\\\\frac{${-nom}}{${denom}}\\\\)`;
      return `\\\\(\\\\frac{${nom}}{${denom}}\\\\)`;
    }
  }
  return `\\\\(${num.toFixed(2)}\\\\)`;
}
function getFractionString(num) {
  if (Number.isInteger(num)) return `${num}`;
  for (let denom = 2; denom <= 20; denom++) {
    let nom = Math.round(num * denom);
    if (Math.abs(num - nom / denom) < 0.0001) {
      if (nom < 0) return `-\\frac{${-nom}}{${denom}}`;
      return `\\frac{${nom}}{${denom}}`;
    }
  }
  return `${num.toFixed(2)}`;
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();
  let updatedCount = 0;
  
  const gradientQ = ['y9-11c-q3c', 'y9-11c-q3d', 'y9-11c-q3e', 'y9-11c-q3f'];

  // Manual data for q4 and q5
  const eqData = {
    'y9-11c-q4a': { x1: 3, y1: 5, mStr: '2', m: 2, varGiven: 'x', valGiven: 4, solveFor: 'y', ans: 7 },
    'y9-11c-q4b': { x1: 6, y1: 10, mStr: '\\frac{1}{2}', m: 0.5, varGiven: 'x', valGiven: 12, solveFor: 'y', ans: 13 },
    'y9-11c-q4c': { x1: -2, y1: 7, mStr: '-1', m: -1, varGiven: 'x', valGiven: 5, solveFor: 'y', ans: 0 },
    'y9-11c-q5a': { x1: 1, y1: 4, mStr: '4', m: 4, varGiven: 'y', valGiven: 16, solveFor: 'x', ans: 4 },
    'y9-11c-q5b': { x1: 1, y1: 4, mStr: '4', m: 4, varGiven: 'x', valGiven: 3, solveFor: 'y', ans: 12 },
    'y9-11c-q5c': { x1: 1, y1: 4, mStr: '4', m: 4, varGiven: 'y', valGiven: 0, solveFor: 'x', ans: 0 },
  };

  for (let i = 0; i < qOrig.length; i++) {
    const q = qOrig[i];
    
    // Gradients
    if (gradientQ.includes(q.id)) {
      const textToSearch = q.solution + ' ' + q.question;
      const pointRegex = /\\?\((-?\d+),\s*(-?\d+)\\?\)/g;
      
      let matches = [];
      let match;
      while ((match = pointRegex.exec(textToSearch)) !== null) {
        matches.push({ x: parseInt(match[1]), y: parseInt(match[2]) });
      }
      
      if (matches.length >= 2) {
        const p1 = matches[0];
        const p2 = matches[1];
        
        const dy = p2.y - p1.y;
        const dx = p2.x - p1.x;
        const gradient = dy / dx;
        
        let distractors = [gradient, -gradient, dx===0?0:dx/(dy===0?1:dy), -(dx===0?0:dx/(dy===0?1:dy))];
        if (distractors[0] === distractors[1]) distractors[1] = gradient + 1;
        if (distractors[0] === distractors[2]) distractors[2] = gradient - 1;
        if (distractors[0] === distractors[3]) distractors[3] = gradient * 2;
        distractors = [...new Set(distractors)];
        while (distractors.length < 4) {
          let rand = gradient + (Math.floor(Math.random() * 5) + 1);
          if (!distractors.includes(rand)) distractors.push(rand);
        }
        distractors = distractors.slice(0, 4);
        
        let formattedOpts = distractors.map(toFractionLatex);
        let answerIndex = formattedOpts.indexOf(toFractionLatex(gradient));
        if (answerIndex === -1) {
          formattedOpts[0] = toFractionLatex(gradient);
          answerIndex = 0;
        }
        const shuffled = formattedOpts.map(val => ({ val, sort: Math.random() }))
                                      .sort((a, b) => a.sort - b.sort)
                                      .map(({ val }) => val);
        const newAnsIndex = shuffled.indexOf(toFractionLatex(gradient));
        
        if (q.type === 'multiple_choice') {
          qOrig[i].opts = shuffled;
          qOrig[i].a = newAnsIndex;
          qOrig[i].answer = newAnsIndex.toString();
          qOrig[i].options = shuffled.map(opt => ({ text: opt, imageUrl: "" }));
        }
        
        const fracStr = getFractionString(gradient);
        
        const minX = Math.min(p1.x, p2.x) - 2;
        const maxX = Math.max(p1.x, p2.x) + 2;
        const minY = Math.min(p1.y, p2.y) - 2;
        const maxY = Math.max(p1.y, p2.y) + 2;
        
        qOrig[i].solutionSteps = [
          {
            explanation: "Step 1: Identify the coordinates of the two points.",
            workingOut: `Let $(x_1, y_1) = (${p1.x}, ${p1.y})$ and $(x_2, y_2) = (${p2.x}, ${p2.y})$.`,
            graphData: null
          },
          {
            explanation: "Step 2: State the formula for the gradient \\(m\\).",
            workingOut: `$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$`,
            graphData: null
          },
          {
            explanation: "Step 3: Substitute the coordinates into the formula.",
            workingOut: `$$ m = \\frac{${p2.y} - (${p1.y})}{${p2.x} - (${p1.x})} = \\frac{${dy}}{${dx}} $$`,
            graphData: null
          },
          {
            explanation: "Step 4: Simplify the fraction to find the final gradient.",
            workingOut: `$$ m = ${fracStr} $$`,
            graphData: {
              jsxGraph: {
                width: 400,
                height: 400,
                boundingbox: [minX, maxY, maxX, minY],
                boardOptions: { axis: true, grid: true },
                script: `board.suspendUpdate();
board.create('point', [${p1.x}, ${p1.y}], {name:'(${p1.x}, ${p1.y})', size:3, color:'red', label:{offset:[-20,10]}});
board.create('point', [${p2.x}, ${p2.y}], {name:'(${p2.x}, ${p2.y})', size:3, color:'red', label:{offset:[10,10]}});
board.create('line', [[${p1.x}, ${p1.y}], [${p2.x}, ${p2.y}]], {strokeColor: 'blue', straightFirst: true, straightLast: true});
board.create('segment', [[${p1.x}, ${p1.y}], [${p2.x}, ${p1.y}]], {strokeColor: 'green', dash: 2, name: 'Run', withLabel: true});
board.create('segment', [[${p2.x}, ${p1.y}], [${p2.x}, ${p2.y}]], {strokeColor: 'orange', dash: 2, name: 'Rise', withLabel: true});
board.unsuspendUpdate();`
              }
            }
          }
        ];
        
        batch.update(db.collection('questions').doc(qOrig[i].id), {
          opts: qOrig[i].opts || null,
          a: qOrig[i].a || null,
          answer: qOrig[i].answer,
          options: qOrig[i].options || null,
          solutionSteps: qOrig[i].solutionSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        updatedCount++;
      }
    }
    
    // Equations q4 and q5
    if (eqData[q.id]) {
      const d = eqData[q.id];
      const p1 = { x: d.x1, y: d.y1 };
      
      let step3, step4;
      if (d.solveFor === 'y') {
        const dx = d.valGiven - p1.x;
        const rhs = d.m * dx;
        step3 = `Substitute $x = ${d.valGiven}$:\n$$ \\frac{y - (${p1.y})}{${d.valGiven} - (${p1.x})} = ${d.mStr} $$`;
        step4 = `$$ \\begin{aligned} \\frac{y - (${p1.y})}{${dx}} &= ${d.mStr} \\\\ y - (${p1.y}) &= ${rhs} \\\\ y &= ${d.ans} \\end{aligned} $$`;
      } else {
        const dy = d.valGiven - p1.y;
        const dx = dy / d.m;
        step3 = `Substitute $y = ${d.valGiven}$:\n$$ \\frac{${d.valGiven} - (${p1.y})}{x - (${p1.x})} = ${d.mStr} $$`;
        step4 = `$$ \\begin{aligned} \\frac{${dy}}{x - (${p1.x})} &= ${d.mStr} \\\\ ${dy} &= ${d.mStr}(x - (${p1.x})) \\\\ x - (${p1.x}) &= ${dx} \\\\ x &= ${d.ans} \\end{aligned} $$`;
      }

      const p2 = d.solveFor === 'y' ? { x: d.valGiven, y: d.ans } : { x: d.ans, y: d.valGiven };
      const minX = Math.min(p1.x, p2.x) - 2;
      const maxX = Math.max(p1.x, p2.x) + 2;
      const minY = Math.min(p1.y, p2.y) - 2;
      const maxY = Math.max(p1.y, p2.y) + 2;

      qOrig[i].solutionSteps = [
        {
          explanation: "Step 1: Write down the point-gradient formula.",
          workingOut: "$$ m = \\frac{y - y_1}{x - x_1} $$",
          graphData: null
        },
        {
          explanation: "Step 2: Substitute the known point and gradient.",
          workingOut: `Substitute $(x_1, y_1) = (${p1.x}, ${p1.y})$ and $m = ${d.mStr}$:\n$$ \\frac{y - (${p1.y})}{x - (${p1.x})} = ${d.mStr} $$`,
          graphData: null
        },
        {
          explanation: "Step 3: Substitute the given coordinate.",
          workingOut: step3,
          graphData: null
        },
        {
          explanation: `Step 4: Solve for the unknown coordinate $${d.solveFor}$.`,
          workingOut: step4,
          graphData: {
            jsxGraph: {
              width: 400,
              height: 400,
              boundingbox: [minX, maxY, maxX, minY],
              boardOptions: { axis: true, grid: true },
              script: `board.suspendUpdate();
board.create('point', [${p1.x}, ${p1.y}], {name:'(${p1.x}, ${p1.y})', size:3, color:'red', label:{offset:[-20,10]}});
board.create('point', [${p2.x}, ${p2.y}], {name:'(${p2.x}, ${p2.y})', size:3, color:'red', label:{offset:[10,10]}});
board.create('line', [[${p1.x}, ${p1.y}], [${p2.x}, ${p2.y}]], {strokeColor: 'blue', straightFirst: true, straightLast: true});
board.create('segment', [[${p1.x}, ${p1.y}], [${p2.x}, ${p1.y}]], {strokeColor: 'green', dash: 2});
board.create('segment', [[${p2.x}, ${p1.y}], [${p2.x}, ${p2.y}]], {strokeColor: 'orange', dash: 2});
board.unsuspendUpdate();`
            }
          }
        }
      ];
      
      batch.update(db.collection('questions').doc(qOrig[i].id), {
        solutionSteps: qOrig[i].solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    }
  }

  if (updatedCount > 0) {
    batch.update(db.doc('sync_meta/questions'), {
      version: Date.now(),
      updatedAt: FieldValue.serverTimestamp()
    });
    await batch.commit();
    fs.writeFileSync(pathOrig, `export const Y9_CH11C_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');
    console.log(`Successfully updated ${updatedCount} question(s)!`);
  }
  process.exit(0);
}

run().catch(console.error);
