const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathOrig = './src/constants/seedYear9Ch11CQuestions.js';
let contentOrig = fs.readFileSync(pathOrig, 'utf8');
const matchOrig = contentOrig.match(/export const Y9_CH11C_QUESTIONS = (\[[\s\S]*?\]);\n/);
let qOrig = eval(matchOrig[1]);

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();
  let updatedCount = 0;

  const data = {
    'y9-11c-q6a': {
      eq: 'y = 3x',
      ans: ['-6', '-1', '3', '3'],
      working: [
        '$y$ when $x = -2$: $y = 3(-2) = -6$',
        '$x$ when $y = -3$: $-3 = 3x \\implies x = -1$',
        '$y$ when $x = 1$: $y = 3(1) = 3$',
        '$x$ when $y = 9$: $9 = 3x \\implies x = 3$'
      ],
      distractors: [
        '\\\\(-6, 1, -3, 3\\\\)',
        '\\\\(6, -1, 3, -3\\\\)',
        '\\\\(-6, -1, 3, 3\\\\)',
        '\\\\(6, 1, 3, 3\\\\)'
      ],
      ansIndex: 2
    },
    'y9-11c-q6b': {
      eq: 'y = \\frac{3}{5}x + 2',
      ans: ['-10', '-1', '5', '10'],
      working: [
        '$x$ when $y = -4$: $-4 = \\frac{3}{5}x + 2 \\implies -6 = \\frac{3}{5}x \\implies x = -10$',
        '$y$ when $x = -5$: $y = \\frac{3}{5}(-5) + 2 = -3 + 2 = -1$',
        '$y$ when $x = 5$: $y = \\frac{3}{5}(5) + 2 = 3 + 2 = 5$',
        '$x$ when $y = 8$: $8 = \\frac{3}{5}x + 2 \\implies 6 = \\frac{3}{5}x \\implies x = 10$'
      ],
      distractors: [
        '\\\\(-10, -1, 5, 10\\\\)',
        '\\\\(10, 1, 5, -10\\\\)',
        '\\\\(-10, 1, -5, 10\\\\)',
        '\\\\(10, -1, 5, -10\\\\)'
      ],
      ansIndex: 0
    },
    'y9-11c-q6c': {
      eq: 'y = \\frac{1}{2}x + 3',
      ans: ['-14', '1', '6'],
      working: [
        '$x$ when $y = -4$: $-4 = \\frac{1}{2}x + 3 \\implies -7 = \\frac{1}{2}x \\implies x = -14$',
        '$y$ when $x = -4$: $y = \\frac{1}{2}(-4) + 3 = -2 + 3 = 1$',
        '$x$ when $y = 6$: $6 = \\frac{1}{2}x + 3 \\implies 3 = \\frac{1}{2}x \\implies x = 6$'
      ],
      distractors: [
        '\\\\(14, -1, -6\\\\)',
        '\\\\(-14, 1, 6\\\\)',
        '\\\\(-7, 1, 3\\\\)',
        '\\\\(-14, -1, 6\\\\)'
      ],
      ansIndex: 1
    },
    'y9-11c-q6d': {
      eq: 'y = -3x + 3',
      ans: ['-2', '6', '0', '0'],
      working: [
        '$x$ when $y = 9$: $9 = -3x + 3 \\implies 6 = -3x \\implies x = -2$',
        '$y$ when $x = -1$: $y = -3(-1) + 3 = 3 + 3 = 6$',
        '$x$ when $y = 3$: $3 = -3x + 3 \\implies 0 = -3x \\implies x = 0$',
        '$y$ when $x = 1$: $y = -3(1) + 3 = -3 + 3 = 0$'
      ],
      distractors: [
        '\\\\(-2, 6, 0, 0\\\\)',
        '\\\\(2, -6, 0, 0\\\\)',
        '\\\\(-2, 6, 1, 1\\\\)',
        '\\\\(2, 6, 0, 1\\\\)'
      ],
      ansIndex: 0
    }
  };

  for (let i = 0; i < qOrig.length; i++) {
    const q = qOrig[i];
    if (data[q.id]) {
      const d = data[q.id];
      
      qOrig[i].type = 'multiple_choice';
      qOrig[i].opts = d.distractors;
      qOrig[i].a = d.ansIndex;
      qOrig[i].answer = d.ansIndex.toString();
      qOrig[i].options = d.distractors.map(opt => ({ text: opt, imageUrl: "" }));
      
      let step3Text = d.working.map(w => w).join('\\n\\n');

      qOrig[i].solutionSteps = [
        {
          explanation: "Step 1: Write down the point-gradient formula.",
          workingOut: "$$ y - y_1 = m(x - x_1) $$",
          graphData: null
        },
        {
          explanation: "Step 2: Substitute the known point and gradient to find the equation of the line.",
          workingOut: `The equation of the line simplifies to:\n$$ ${d.eq} $$`,
          graphData: null
        },
        {
          explanation: "Step 3: For each given value in the table, substitute it into the equation to find the missing coordinate.",
          workingOut: step3Text,
          graphData: null
        },
        {
          explanation: "Step 4: Combine the missing values in order to form the final answer.",
          workingOut: `$$ ${d.ans.join(', ')} $$`,
          graphData: null
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
