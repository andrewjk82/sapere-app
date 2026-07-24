const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11CQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11C_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

// Utility to format numbers as LaTeX fractions
function toFractionLatex(num) {
  if (Number.isInteger(num)) return `\\\\(${num}\\\\)`;
  
  // Try to find a simple fraction
  for (let denom = 2; denom <= 20; denom++) {
    let nom = Math.round(num * denom);
    if (Math.abs(num - nom / denom) < 0.0001) {
      if (nom < 0) {
        return `\\\\(-\\\\frac{${-nom}}{${denom}}\\\\)`;
      }
      return `\\\\(\\\\frac{${nom}}{${denom}}\\\\)`;
    }
  }
  // Fallback
  return `\\\\(${num.toFixed(2)}\\\\)`;
}

function getFractionString(num) {
  if (Number.isInteger(num)) return `${num}`;
  for (let denom = 2; denom <= 20; denom++) {
    let nom = Math.round(num * denom);
    if (Math.abs(num - nom / denom) < 0.0001) {
      if (nom < 0) {
        return `-\\frac{${-nom}}{${denom}}`;
      }
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
  
  const toFix = [
    'y9-11c-q1a', 'y9-11c-q1c', 'y9-11c-q1d', 'y9-11c-q2a', 'y9-11c-q2c',
    'y9-11c-q2d', 'y9-11c-q2e', 'y9-11c-q2f', 'y9-11c-q3a', 'y9-11c-q3b'
  ];

  for (let i = 0; i < qOrig.length; i++) {
    const q = qOrig[i];
    
    if (toFix.includes(q.id)) {
      // Find coordinates from solution or question
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
        
        // Generate better distractors
        let distractors = [
          gradient,
          -gradient,
          dx === 0 ? 0 : dx / (dy === 0 ? 1 : dy),
          - (dx === 0 ? 0 : dx / (dy === 0 ? 1 : dy))
        ];
        
        if (distractors[0] === distractors[1]) distractors[1] = gradient + 1;
        if (distractors[0] === distractors[2]) distractors[2] = gradient - 1;
        if (distractors[0] === distractors[3]) distractors[3] = gradient * 2;
        
        // Unique and valid
        distractors = [...new Set(distractors)];
        while (distractors.length < 4) {
          let rand = gradient + (Math.floor(Math.random() * 5) + 1);
          if (!distractors.includes(rand)) distractors.push(rand);
        }
        distractors = distractors.slice(0, 4);
        
        // Format as LaTeX
        let formattedOpts = distractors.map(toFractionLatex);
        
        // Ensure exact answer is correct
        let answerIndex = formattedOpts.indexOf(toFractionLatex(gradient));
        if (answerIndex === -1) {
          formattedOpts[0] = toFractionLatex(gradient);
          answerIndex = 0;
        }
        
        // Shuffle
        const shuffled = formattedOpts.map(val => ({ val, sort: Math.random() }))
                                      .sort((a, b) => a.sort - b.sort)
                                      .map(({ val }) => val);
        const newAnsIndex = shuffled.indexOf(toFractionLatex(gradient));
        
        qOrig[i].opts = shuffled;
        qOrig[i].a = newAnsIndex;
        qOrig[i].answer = newAnsIndex.toString();
        qOrig[i].options = shuffled.map(opt => ({ text: opt, imageUrl: "" }));
        
        const fracStr = getFractionString(gradient);
        
        // Graph Box Calculation
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
          opts: qOrig[i].opts,
          a: qOrig[i].a,
          answer: qOrig[i].answer,
          options: qOrig[i].options,
          solutionSteps: qOrig[i].solutionSteps,
          updatedAt: FieldValue.serverTimestamp()
        });
        updatedCount++;
      } else {
        console.log(`Failed to parse points for ${q.id}`);
      }
    }
  }

  batch.update(db.doc('sync_meta/questions'), {
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();

  fs.writeFileSync(pathOrig, `export const Y9_CH11C_QUESTIONS = ${JSON.stringify(qOrig, null, 2)};\n`, 'utf8');

  console.log(`Successfully updated ${updatedCount} questions!`);
  process.exit(0);
}

run().catch(console.error);
