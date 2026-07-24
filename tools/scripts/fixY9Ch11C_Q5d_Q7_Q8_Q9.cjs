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
    'y9-11c-q5d': {
      type: 'multiple_choice',
      ansIndex: 1,
      distractors: ['\\\\(-7\\\\)', '\\\\(-8\\\\)', '\\\\(-9\\\\)', '\\\\(-10\\\\)'],
      steps: [
        {
          explanation: "Step 1: Write down the point-gradient formula.",
          workingOut: "$$ m = \\frac{y - y_1}{x - x_1} $$",
          graphData: null
        },
        {
          explanation: "Step 2: Substitute the known point and gradient.",
          workingOut: "Substitute $(x_1, y_1) = (1, 4)$ and $m = 4$:\\n$$ \\frac{y - 4}{x - 1} = 4 $$",
          graphData: null
        },
        {
          explanation: "Step 3: Substitute the given $x$-coordinate.",
          workingOut: "Substitute $x = -2$:\\n$$ \\frac{y - 4}{-2 - 1} = 4 $$",
          graphData: null
        },
        {
          explanation: "Step 4: Solve for $y$.",
          workingOut: "$$ \\begin{aligned} \\frac{y - 4}{-3} &= 4 \\\\ y - 4 &= -12 \\\\ y &= -8 \\end{aligned} $$",
          graphData: null
        }
      ]
    },
    'y9-11c-q7a': {
      type: 'multiple_choice',
      ansIndex: 2,
      distractors: ['\\\\(-2\\\\)', '\\\\(-\\\\frac{1}{2}\\\\)', '\\\\(2\\\\)', '\\\\(\\\\frac{1}{2}\\\\)'],
      steps: [
        {
          explanation: "Step 1: Identify the coordinates of the intercepts.",
          workingOut: "The $x$-intercept is $(-2, 0)$ and the $y$-intercept is $(0, 4)$.",
          graphData: null
        },
        {
          explanation: "Step 2: State the formula for the gradient \\(m\\).",
          workingOut: "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
          graphData: null
        },
        {
          explanation: "Step 3: Substitute the coordinates.",
          workingOut: "$$ m = \\frac{4 - 0}{0 - (-2)} $$",
          graphData: null
        },
        {
          explanation: "Step 4: Simplify to find the gradient.",
          workingOut: "$$ m = \\frac{4}{2} = 2 $$",
          graphData: null
        }
      ]
    },
    'y9-11c-q7b': {
      type: 'multiple_choice',
      ansIndex: 2,
      distractors: ['\\\\(-12\\\\)', '\\\\(8\\\\)', '\\\\(12\\\\)', '\\\\(16\\\\)'],
      steps: [
        {
          explanation: "Step 1: Identify the given information.",
          workingOut: "The $x$-intercept is $-3$ (so the point is $(-3, 0)$), and the gradient is $m = 4$.",
          graphData: null
        },
        {
          explanation: "Step 2: Write down the point-gradient formula.",
          workingOut: "$$ y - y_1 = m(x - x_1) $$",
          graphData: null
        },
        {
          explanation: "Step 3: Substitute the known point and gradient.",
          workingOut: "$$ y - 0 = 4(x - (-3)) $$",
          graphData: null
        },
        {
          explanation: "Step 4: Expand to find the $y$-intercept (the constant term).",
          workingOut: "$$ y = 4(x + 3) \\implies y = 4x + 12 $$\\nSo, the $y$-intercept is $12$.",
          graphData: null
        }
      ]
    },
    'y9-11c-q7c': {
      type: 'multiple_choice',
      ansIndex: 0,
      distractors: ['\\\\(-10\\\\)', '\\\\(-5\\\\)', '\\\\(5\\\\)', '\\\\(10\\\\)'],
      steps: [
        {
          explanation: "Step 1: Identify the given information.",
          workingOut: "The $y$-intercept is $5$ (so $c = 5$), and the gradient is $m = \\frac{1}{2}$.",
          graphData: null
        },
        {
          explanation: "Step 2: Write the equation of the line in $y = mx + c$ form.",
          workingOut: "$$ y = \\frac{1}{2}x + 5 $$",
          graphData: null
        },
        {
          explanation: "Step 3: Set $y = 0$ to find the $x$-intercept.",
          workingOut: "$$ 0 = \\frac{1}{2}x + 5 $$",
          graphData: null
        },
        {
          explanation: "Step 4: Solve for $x$.",
          workingOut: "$$ -5 = \\frac{1}{2}x \\implies x = -10 $$",
          graphData: null
        }
      ]
    },
    'y9-11c-q7d': {
      type: 'multiple_choice',
      ansIndex: 3,
      distractors: ['\\\\(-4\\\\)', '\\\\(-3\\\\)', '\\\\(3\\\\)', '\\\\(4\\\\)'],
      steps: [
        {
          explanation: "Step 1: Identify the given information.",
          workingOut: "The $y$-intercept is $-3$ (so $c = -3$), and the gradient is $m = \\frac{3}{4}$.",
          graphData: null
        },
        {
          explanation: "Step 2: Write the equation of the line in $y = mx + c$ form.",
          workingOut: "$$ y = \\frac{3}{4}x - 3 $$",
          graphData: null
        },
        {
          explanation: "Step 3: Set $y = 0$ to find the $x$-intercept.",
          workingOut: "$$ 0 = \\frac{3}{4}x - 3 $$",
          graphData: null
        },
        {
          explanation: "Step 4: Solve for $x$.",
          workingOut: "$$ 3 = \\frac{3}{4}x \\implies x = 4 $$",
          graphData: null
        }
      ]
    },
    'y9-11c-q7e': {
      type: 'multiple_choice',
      ansIndex: 1,
      distractors: ['\\\\(-7\\\\)', '\\\\(-6\\\\)', '\\\\(6\\\\)', '\\\\(7\\\\)'],
      steps: [
        {
          explanation: "Step 1: Identify the given information.",
          workingOut: "The $x$-intercept is $-6$ (so the point is $(-6, 0)$), and the gradient is $m = -1$.",
          graphData: null
        },
        {
          explanation: "Step 2: Write down the point-gradient formula.",
          workingOut: "$$ y - y_1 = m(x - x_1) $$",
          graphData: null
        },
        {
          explanation: "Step 3: Substitute the known point and gradient.",
          workingOut: "$$ y - 0 = -1(x - (-6)) $$",
          graphData: null
        },
        {
          explanation: "Step 4: Expand to find the $y$-intercept.",
          workingOut: "$$ y = -1(x + 6) \\implies y = -x - 6 $$\\nSo, the $y$-intercept is $-6$.",
          graphData: null
        }
      ]
    },
    'y9-11c-q7f': {
      type: 'multiple_choice',
      ansIndex: 2,
      distractors: ['\\\\(-10\\\\)', '\\\\(-5\\\\)', '\\\\(5\\\\)', '\\\\(10\\\\)'],
      steps: [
        {
          explanation: "Step 1: Identify the given information.",
          workingOut: "The $y$-intercept is $10$ (so $c = 10$), and the gradient is $m = -2$.",
          graphData: null
        },
        {
          explanation: "Step 2: Write the equation of the line in $y = mx + c$ form.",
          workingOut: "$$ y = -2x + 10 $$",
          graphData: null
        },
        {
          explanation: "Step 3: Set $y = 0$ to find the $x$-intercept.",
          workingOut: "$$ 0 = -2x + 10 $$",
          graphData: null
        },
        {
          explanation: "Step 4: Solve for $x$.",
          workingOut: "$$ 2x = 10 \\implies x = 5 $$",
          graphData: null
        }
      ]
    },
    'y9-11c-q7g': {
      type: 'multiple_choice',
      ansIndex: 0,
      distractors: ['\\\\(-\\\\frac{1}{4}\\\\)', '\\\\(\\\\frac{1}{4}\\\\)', '\\\\(-4\\\\)', '\\\\(4\\\\)'],
      steps: [
        {
          explanation: "Step 1: Identify the coordinates of the intercepts.",
          workingOut: "The $x$-intercept is $(8, 0)$ and the $y$-intercept is $(0, 2)$.",
          graphData: null
        },
        {
          explanation: "Step 2: State the formula for the gradient \\(m\\).",
          workingOut: "$$ m = \\frac{Rise}{Run} = \\frac{y_2 - y_1}{x_2 - x_1} $$",
          graphData: null
        },
        {
          explanation: "Step 3: Substitute the coordinates.",
          workingOut: "$$ m = \\frac{2 - 0}{0 - 8} $$",
          graphData: null
        },
        {
          explanation: "Step 4: Simplify to find the gradient.",
          workingOut: "$$ m = \\frac{2}{-8} = -\\frac{1}{4} $$",
          graphData: null
        }
      ]
    },
    'y9-11c-q8a': {
      type: 'multiple_choice',
      ansIndex: 1,
      distractors: ['\\\\((1, 0)\\\\)', '\\\\((-1, 0)\\\\)', '\\\\((0, -1)\\\\)', '\\\\((0, 1)\\\\)'],
      steps: [
        {
          explanation: "Step 1: Write down the point-gradient formula.",
          workingOut: "$$ y - y_1 = m(x - x_1) $$",
          graphData: null
        },
        {
          explanation: "Step 2: Find the equation of the line.",
          workingOut: "Substitute $(3, 8)$ and $m = 2$:\\n$$ y - 8 = 2(x - 3) \\implies y - 8 = 2x - 6 \\implies y = 2x + 2 $$",
          graphData: null
        },
        {
          explanation: "Step 3: Set $y = 0$ to find the $x$-intercept.",
          workingOut: "$$ 0 = 2x + 2 $$",
          graphData: null
        },
        {
          explanation: "Step 4: Solve for $x$ and state the coordinate.",
          workingOut: "$$ -2 = 2x \\implies x = -1 $$\\nSo, the $x$-intercept is $(-1, 0)$.",
          graphData: null
        }
      ]
    },
    'y9-11c-q8b': {
      type: 'multiple_choice',
      ansIndex: 2,
      distractors: ['\\\\((0, -2)\\\\)', '\\\\((-2, 0)\\\\)', '\\\\((0, 2)\\\\)', '\\\\((2, 0)\\\\)'],
      steps: [
        {
          explanation: "Step 1: Write down the point-gradient formula.",
          workingOut: "$$ y - y_1 = m(x - x_1) $$",
          graphData: null
        },
        {
          explanation: "Step 2: Find the equation of the line.",
          workingOut: "Substitute $(3, 8)$ and $m = 2$:\\n$$ y - 8 = 2(x - 3) \\implies y - 8 = 2x - 6 \\implies y = 2x + 2 $$",
          graphData: null
        },
        {
          explanation: "Step 3: Identify the $y$-intercept from the equation $y = mx + c$.",
          workingOut: "The constant term $c$ is $2$.",
          graphData: null
        },
        {
          explanation: "Step 4: State the coordinate of the $y$-intercept.",
          workingOut: "The $y$-intercept is $(0, 2)$.",
          graphData: null
        }
      ]
    },
    'y9-11c-q9': {
      type: 'multiple_choice',
      ansIndex: 0,
      distractors: ['\\\\((-2.5, 0)\\\\)', '\\\\((2.5, 0)\\\\)', '\\\\((-5, 0)\\\\)', '\\\\((5, 0)\\\\)'],
      steps: [
        {
          explanation: "Step 1: Identify the $y$-intercept.",
          workingOut: "The line crosses the $y$-axis at $(0, 5)$, so $c = 5$.",
          graphData: null
        },
        {
          explanation: "Step 2: Find the gradient of the line.",
          workingOut: "Using points $(3, 11)$ and $(0, 5)$:\\n$$ m = \\frac{11 - 5}{3 - 0} = \\frac{6}{3} = 2 $$",
          graphData: null
        },
        {
          explanation: "Step 3: Write the equation of the line and set $y = 0$ for the $x$-intercept.",
          workingOut: "$$ y = 2x + 5 $$\\n$$ 0 = 2x + 5 $$",
          graphData: null
        },
        {
          explanation: "Step 4: Solve for $x$ and state the coordinate.",
          workingOut: "$$ -5 = 2x \\implies x = -2.5 $$\\nThe $x$-intercept is $(-2.5, 0)$.",
          graphData: null
        }
      ]
    }
  };

  for (let i = 0; i < qOrig.length; i++) {
    const q = qOrig[i];
    if (data[q.id]) {
      const d = data[q.id];
      qOrig[i].type = d.type;
      qOrig[i].requiresManualGrading = false;
      qOrig[i].opts = d.distractors;
      qOrig[i].a = d.ansIndex;
      qOrig[i].answer = d.ansIndex.toString();
      qOrig[i].options = d.distractors.map(opt => ({ text: opt, imageUrl: "" }));
      qOrig[i].solutionSteps = d.steps;

      batch.update(db.collection('questions').doc(qOrig[i].id), {
        type: qOrig[i].type,
        requiresManualGrading: false,
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
