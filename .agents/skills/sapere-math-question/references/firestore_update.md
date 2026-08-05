# Firestore Update Template

## Template Script (`.cjs`)

```javascript
const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// ── 1. Read seed file ──
const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear11Ch5IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y11_CH5I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let updatedQs = [];

// ── 2. Define updates ──
const updates = {
  'y11a-5i-q__': {
    type: 'multiple_choice',       // or 'teacher_review'
    opts: [
      "Option A \\(LaTeX\\)",
      "Option B \\(LaTeX\\)",
      "Option C \\(LaTeX\\)",       // ← correct
      "Option D \\(LaTeX\\)"
    ],
    a: 2,                          // 0-indexed correct answer
    steps: [
      {
        explanation: "Step 1 explanation",
        workingOut: "Step 1 LaTeX"
      },
      {
        explanation: "Step 2 explanation",
        workingOut: "Step 2 LaTeX"
      },
      {
        explanation: "Final step",
        workingOut: "Final answer LaTeX"
      }
    ],
    // Optional: graph for last solution step
    graph: {
      jsxGraph: {
        width: 400,
        height: 300,
        boundingbox: [-5, 5, 5, -3],
        script: `board.suspendUpdate();
board.create('arrow', [[-5,0],[5,0]], {strokeColor:'black'});
board.create('arrow', [[0,-3],[0,5]], {strokeColor:'black'});
board.create('functiongraph', [function(x){ return x*x; }, -5, 5],
  {strokeColor:'blue', strokeWidth:2});
board.unsuspendUpdate();`
      }
    }
  }
};

// ── 3. Apply updates to seed array ──
for (let id of Object.keys(updates)) {
  let q = questions.find(x => x.id === id);
  if (!q) {
    let parent = questions.find(x =>
      x.subQuestions && x.subQuestions.some(sq => sq.id === id));
    if (parent) q = parent.subQuestions.find(sq => sq.id === id);
  }
  if (!q) { console.warn(`Question ${id} not found!`); continue; }

  let upd = updates[id];

  if (upd.type === 'multiple_choice') {
    q.type = 'multiple_choice';
    q.opts = upd.opts;
    q.a = upd.a;
    q.answer = upd.a.toString();
    q.requiresManualGrading = false;
    q.graphData = null;
  } else {
    q.type = 'teacher_review';
    delete q.opts;
    delete q.a;
    delete q.answer;
    q.requiresManualGrading = true;
  }

  q.solutionSteps = upd.steps;
  if (upd.graph) {
    q.solutionSteps[q.solutionSteps.length - 1].graphData = upd.graph;
  }
  q.solution = upd.steps[upd.steps.length - 1].workingOut;

  updatedQs.push(q);
}

// ── 4. Write seed file ──
const newArrayStr = JSON.stringify(questions, null, 2)
  .replace(/"([a-zA-Z_$][0-9a-zA-Z_$]*)":/g, '$1:');
fs.writeFileSync(filePath,
  content.substring(0, match.index)
  + 'export const Y11_CH5I_QUESTIONS = ' + newArrayStr + ';\n',
  'utf8');

// ── 5. Update Firestore ──
async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (let q of updatedQs) {
    let isSub = !questions.find(x => x.id === q.id);

    if (!isSub) {
      // Top-level question
      await db.collection('questions').doc(q.id).update({
        type: q.type,
        opts: q.opts || null,
        options: q.opts ? q.opts.map(o => ({ text: o, imageUrl: '' })) : null,
        a: q.a !== undefined ? q.a : null,
        answer: q.answer || null,
        solution: q.solution,
        solutionSteps: q.solutionSteps,
        requiresManualGrading: q.requiresManualGrading,
        graphData: q.graphData
      });
    } else {
      // Sub-question: read parent, patch, write back
      let parent = questions.find(x =>
        x.subQuestions && x.subQuestions.some(sq => sq.id === q.id));
      if (parent) {
        let parentDoc = await db.collection('questions').doc(parent.id).get();
        if (parentDoc.exists) {
          let pData = parentDoc.data();
          let sqIdx = pData.subQuestions.findIndex(sq => sq.id === q.id);
          if (sqIdx > -1) {
            Object.assign(pData.subQuestions[sqIdx], {
              type: q.type,
              opts: q.opts || null,
              options: q.opts ? q.opts.map(o => ({ text: o, imageUrl: '' })) : null,
              a: q.a !== undefined ? q.a : null,
              answer: q.answer || null,
              solution: q.solution,
              solutionSteps: q.solutionSteps,
              requiresManualGrading: q.requiresManualGrading,
              graphData: q.graphData
            });
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully updated all questions.');
  process.exit(0);
}
updateDb();
```

## Usage

1. Copy the template to `tools/scripts/fix_<description>.cjs`
2. Replace `Y11_CH5I_QUESTIONS` with the correct constant name
3. Fill in the `updates` object with actual question data
4. Run: `node tools/scripts/fix_<description>.cjs`

## Adapting for Other Year/Chapter Files

| Year | Constant Name Pattern | File Path |
|------|-----------------------|-----------|
| Y7 | `Y7_CH1F_QUESTIONS` | `seedYear7Ch1FQuestions.js` |
| Y10 | `Y10_CH8_QUESTIONS` | `seedYear10Ch8Questions.js` |
| Y11 | `Y11_CH5I_QUESTIONS` | `seedYear11Ch5IQuestions.js` |

Adjust the regex accordingly:
```javascript
const match = content.match(/export const Y{XX}_CH{YY}_QUESTIONS = (\[[\s\S]*\]);$/m);
```
