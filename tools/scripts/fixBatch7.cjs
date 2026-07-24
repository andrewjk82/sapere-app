const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const pathCraSim = './src/constants/seedCranbrook2023SimilarQuestions.js';
const pathDane = './src/constants/seedDanebank2020Questions.js';
const pathDaneSim = './src/constants/seedDanebank2020SimilarQuestions.js';
const pathFort = './src/constants/seedFortSt2020Questions.js';
const pathFortSim = './src/constants/seedFortSt2020SimilarQuestions.js';

let cCraSim = fs.readFileSync(pathCraSim, 'utf8');
let cDane = fs.readFileSync(pathDane, 'utf8');
let cDaneSim = fs.readFileSync(pathDaneSim, 'utf8');
let cFort = fs.readFileSync(pathFort, 'utf8');
let cFortSim = fs.readFileSync(pathFortSim, 'utf8');

const mCraSim = cCraSim.match(/export const CRANBROOK_2023_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);
const mDane = cDane.match(/export const DANEBANK_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
const mDaneSim = cDaneSim.match(/export const DANEBANK_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);
const mFort = cFort.match(/export const FORTST_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
const mFortSim = cFortSim.match(/export const FORTST_2020_SIMILAR_QUESTIONS = (\[[\s\S]*?\]);\n/);

let qCraSim = eval(mCraSim[1]);
let qDane = eval(mDane[1]);
let qDaneSim = eval(mDaneSim[1]);
let qFort = eval(mFort[1]);
let qFortSim = eval(mFortSim[1]);

function findAndSet(arr, id, newOpts, ansIndex, newSolution, newSteps) {
  const q = arr.find(x => x.id === id);
  if (!q) throw new Error("Not found: " + id);
  q.opts = newOpts;
  q.a = ansIndex;
  q.answer = ansIndex.toString();
  q.solution = newSolution;
  q.solutionSteps = newSteps;
  return q;
}

const updates = [];

updates.push(findAndSet(qCraSim, 'cra2023s-q27b', [
  "\\(g(4) = -\\dfrac{19}{27} < 0\\) and \\(g(5) = \\dfrac{53}{27} > 0\\); since \\(g\\) is continuous and changes sign, it must cross the \\(x\\)-axis.",
  "\\(g(4) = \\dfrac{19}{27} > 0\\) and \\(g(5) = \\dfrac{53}{27} > 0\\); since the derivative changes sign, it must cross the \\(x\\)-axis.",
  "\\(g(4) = -\\dfrac{19}{27} < 0\\) and \\(g(5) = -\\dfrac{53}{27} < 0\\); since the second derivative is zero, it must cross the \\(x\\)-axis.",
  "\\(g(4) = \\dfrac{19}{27} > 0\\) and \\(g(5) = -\\dfrac{53}{27} < 0\\); since \\(g\\) is continuous and changes sign, it must cross the \\(x\\)-axis."
], 3, "The correct answer is \\(g(4) = \\dfrac{19}{27} > 0\\) and \\(g(5) = -\\dfrac{53}{27} < 0\\); since \\(g\\) is continuous and changes sign, it must cross the \\(x\\)-axis.", [
  {
    explanation: "Step 1: To show that a curve crosses the \\(x\\)-axis between two points, evaluate the function at those points and check for a change in sign.",
    workingOut: "$$ \\text{Find } g(4) \\text{ and } g(5). $$", graphData: null
  },
  {
    explanation: "Step 2: Substitute \\(x = 4\\) into the given function.",
    workingOut: "$$ g(4) = 2(4)\\left(1 - \\dfrac{4}{3}\\right)^3 + 1 = 8\\left(-\\dfrac{1}{3}\\right)^3 + 1 = 8\\left(-\\dfrac{1}{27}\\right) + 1 = \\dfrac{19}{27} $$", graphData: null
  },
  {
    explanation: "Step 3: Substitute \\(x = 5\\) into the given function.",
    workingOut: "$$ g(5) = 2(5)\\left(1 - \\dfrac{5}{3}\\right)^3 + 1 = 10\\left(-\\dfrac{2}{3}\\right)^3 + 1 = 10\\left(-\\dfrac{8}{27}\\right) + 1 = -\\dfrac{53}{27} $$", graphData: null
  },
  {
    explanation: "Step 4: Use the Intermediate Value Theorem. Since polynomials are continuous everywhere and the function values have opposite signs, there must be a root.",
    workingOut: "$$ \\text{Since } g(x) \\text{ is continuous, and } g(4) > 0, g(5) < 0, \\text{ the graph crosses the } x\\text{-axis between } x=4 \\text{ and } x=5. $$", graphData: null
  }
]));

updates.push(findAndSet(qDane, 'dane2020-q21a', [
  "\\((0, 0)\\) is a minimum turning point; \\((3, 27)\\) is a maximum turning point.",
  "\\((0, 0)\\) is a maximum turning point; \\((3, 27)\\) is a horizontal point of inflection.",
  "\\((0, 0)\\) is a horizontal point of inflection; \\((3, 27)\\) is a minimum turning point.",
  "\\((0, 0)\\) is a horizontal point of inflection; \\((3, 27)\\) is a maximum turning point."
], 3, "The correct answer is \\((0, 0)\\) is a horizontal point of inflection; \\((3, 27)\\) is a maximum turning point.", [
  { explanation: "Step 1: Differentiate \\(f(x)\\) to find the first derivative \\(f'(x)\\).", workingOut: "$$ f'(x) = 12x^2 - 4x^3 $$", graphData: null },
  { explanation: "Step 2: Set \\(f'(x) = 0\\) and factorise to find the stationary points.", workingOut: "$$ 4x^2(3 - x) = 0 \\implies x = 0 \\text{ (double root)} \\quad \\text{or} \\quad x = 3 $$", graphData: null },
  { explanation: "Step 3: Find the \\(y\\)-coordinates for these stationary points.", workingOut: "$$ \\begin{aligned} f(0) &= 4(0)^3 - (0)^4 = 0 \\implies (0, 0) \\\\\\\\ f(3) &= 4(3)^3 - (3)^4 = 108 - 81 = 27 \\implies (3, 27) \\end{aligned} $$", graphData: null },
  { explanation: "Step 4: Use the second derivative to determine the nature of the turning point at \\(x = 3\\).", workingOut: "$$ f''(x) = 24x - 12x^2 \\implies f''(3) = 72 - 108 = -36 < 0 \\implies \\text{Maximum at } (3, 27) $$", graphData: null },
  { explanation: "Step 5: Test \\(x = 0\\). Since \\(f''(0) = 0\\), we use a first derivative sign test. \\(f'(x)\\) is positive on both sides of \\(x = 0\\), so there is no sign change.", workingOut: "$$ \\text{Since } f'(x) \\text{ does not change sign, } (0, 0) \\text{ is a horizontal point of inflection.} $$", graphData: null }
]));

updates.push(findAndSet(qDaneSim, 'dane2020s-q21a', [
  "\\((0, 0)\\) is a minimum turning point; \\((2, 16)\\) is a maximum turning point.",
  "\\((0, 0)\\) is a maximum turning point; \\((2, 16)\\) is a horizontal point of inflection.",
  "\\((0, 0)\\) is a horizontal point of inflection; \\((2, 16)\\) is a minimum turning point.",
  "\\((0, 0)\\) is a horizontal point of inflection; \\((2, 16)\\) is a maximum turning point."
], 3, "The correct answer is \\((0, 0)\\) is a horizontal point of inflection; \\((2, 16)\\) is a maximum turning point.", [
  { explanation: "Step 1: Differentiate \\(f(x)\\) to find the first derivative \\(f'(x)\\).", workingOut: "$$ f'(x) = 24x^2 - 12x^3 $$", graphData: null },
  { explanation: "Step 2: Set \\(f'(x) = 0\\) and factorise to find the stationary points.", workingOut: "$$ 12x^2(2 - x) = 0 \\implies x = 0 \\text{ (double root)} \\quad \\text{or} \\quad x = 2 $$", graphData: null },
  { explanation: "Step 3: Find the \\(y\\)-coordinates for these stationary points.", workingOut: "$$ \\begin{aligned} f(0) &= 8(0)^3 - 3(0)^4 = 0 \\implies (0, 0) \\\\\\\\ f(2) &= 8(2)^3 - 3(2)^4 = 64 - 48 = 16 \\implies (2, 16) \\end{aligned} $$", graphData: null },
  { explanation: "Step 4: Use the second derivative to determine the nature of the turning point at \\(x = 2\\).", workingOut: "$$ f''(x) = 48x - 36x^2 \\implies f''(2) = 96 - 144 = -48 < 0 \\implies \\text{Maximum at } (2, 16) $$", graphData: null },
  { explanation: "Step 5: Test \\(x = 0\\). Since \\(f''(0) = 0\\), we use a first derivative sign test. \\(f'(x)\\) is positive on both sides of \\(x = 0\\), so there is no sign change.", workingOut: "$$ \\text{Since } f'(x) \\text{ does not change sign, } (0, 0) \\text{ is a horizontal point of inflection.} $$", graphData: null }
]));

updates.push(findAndSet(qFort, 'fortst2020-q10c', [
  "\\((-1, -27)\\) is a maximum turning point; \\((2, 0)\\) is a horizontal point of inflexion.",
  "\\((-1, -27)\\) is a horizontal point of inflexion; \\((2, 0)\\) is a minimum turning point.",
  "\\((-1, -27)\\) is a minimum turning point; \\((2, 0)\\) is a maximum turning point.",
  "\\((-1, -27)\\) is a minimum turning point; \\((2, 0)\\) is a horizontal point of inflexion."
], 3, "The correct answer is \\((-1, -27)\\) is a minimum turning point; \\((2, 0)\\) is a horizontal point of inflexion.", [
  { explanation: "Step 1: Set \\(f'(x) = 0\\) to find the \\(x\\)-coordinates of the stationary points.", workingOut: "$$ 4(x-2)^2(x+1) = 0 \\implies x = 2 \\quad \\text{or} \\quad x = -1 $$", graphData: null },
  { explanation: "Step 2: Find the corresponding \\(y\\)-coordinates by substituting into \\(f(x)\\).", workingOut: "$$ \\begin{aligned} f(-1) &= (-1+2)(-1-2)^3 = 1(-27) = -27 \\implies (-1, -27) \\\\\\\\ f(2) &= (2+2)(2-2)^3 = 0 \\implies (2, 0) \\end{aligned} $$", graphData: null },
  { explanation: "Step 3: Use the given second derivative \\(f''(x) = 12x(x-2)\\) to classify \\(x = -1\\).", workingOut: "$$ f''(-1) = 12(-1)(-1-2) = 36 > 0 \\implies \\text{Minimum turning point at } (-1, -27) $$", graphData: null },
  { explanation: "Step 4: Classify \\(x = 2\\). Since \\(f''(2) = 0\\), use the first derivative test. The squared factor \\((x-2)^2\\) means \\(f'(x)\\) does not change sign across \\(x = 2\\).", workingOut: "$$ \\text{Since } f'(x) \\text{ does not change sign, } (2, 0) \\text{ is a horizontal point of inflexion.} $$", graphData: null }
]));

updates.push(findAndSet(qFort, 'fortst2020-q10d', [
  "Points of inflection at \\((0, -16)\\) and \\((2, 0)\\) only.",
  "Points of inflection at \\((0, 0)\\) and \\((2, -16)\\).",
  "Points of inflection at \\((-2, 0)\\) and \\((2, 0)\\).",
  "Point of inflection at \\((2, 0)\\) only."
], 0, "The correct answer is Points of inflection at \\((0, -16)\\) and \\((2, 0)\\) only.", [
  { explanation: "Step 1: Set the second derivative \\(f''(x) = 0\\) to find possible points of inflection.", workingOut: "$$ 12x(x-2) = 0 \\implies x = 0 \\quad \\text{or} \\quad x = 2 $$", graphData: null },
  { explanation: "Step 2: Check for a change in concavity around \\(x = 0\\) and \\(x = 2\\) using test points.", workingOut: "$$ \\begin{aligned} f''(-1) &= 36 > 0 \\quad (\\text{Concave up}) \\\\\\\\ f''(1) &= -12 < 0 \\quad (\\text{Concave down}) \\\\\\\\ f''(3) &= 36 > 0 \\quad (\\text{Concave up}) \\end{aligned} $$", graphData: null },
  { explanation: "Step 3: Since concavity changes across both \\(x = 0\\) and \\(x = 2\\), they are both true points of inflection. Find their \\(y\\)-coordinates.", workingOut: "$$ \\begin{aligned} f(0) &= (0+2)(0-2)^3 = 2(-8) = -16 \\implies (0, -16) \\\\\\\\ f(2) &= (2+2)(2-2)^3 = 0 \\implies (2, 0) \\end{aligned} $$", graphData: null },
  { explanation: "Step 4: State the final coordinates of the points of inflection.", workingOut: "$$ \\text{Points of inflection at } (0, -16) \\text{ and } (2, 0). $$", graphData: null }
]));

updates.push(findAndSet(qFortSim, 'fortst2020s-q10c', [
  "\\((-2, -27)\\) is a maximum; \\((1, 0)\\) is a horizontal point of inflexion.",
  "\\((-2, -27)\\) is a horizontal point of inflexion; \\((1, 0)\\) is a minimum.",
  "\\((-2, -27)\\) is a minimum; \\((1, 0)\\) is a maximum.",
  "\\((-2, -27)\\) is a minimum; \\((1, 0)\\) is a horizontal point of inflexion."
], 3, "The correct answer is \\((-2, -27)\\) is a minimum; \\((1, 0)\\) is a horizontal point of inflexion.", [
  { explanation: "Step 1: Set \\(f'(x) = 0\\) to find the \\(x\\)-coordinates of the stationary points.", workingOut: "$$ 4(x-1)^2(x+2) = 0 \\implies x = 1 \\quad \\text{or} \\quad x = -2 $$", graphData: null },
  { explanation: "Step 2: Find the corresponding \\(y\\)-coordinates by substituting into \\(f(x)\\).", workingOut: "$$ \\begin{aligned} f(-2) &= (-2+3)(-2-1)^3 = 1(-27) = -27 \\implies (-2, -27) \\\\\\\\ f(1) &= (1+3)(1-1)^3 = 0 \\implies (1, 0) \\end{aligned} $$", graphData: null },
  { explanation: "Step 3: Use the given second derivative \\(f''(x) = 12(x-1)(x+1)\\) to classify \\(x = -2\\).", workingOut: "$$ f''(-2) = 12(-2-1)(-2+1) = 12(-3)(-1) = 36 > 0 \\implies \\text{Minimum turning point at } (-2, -27) $$", graphData: null },
  { explanation: "Step 4: Classify \\(x = 1\\). Since \\(f''(1) = 0\\), use the first derivative test. The squared factor \\((x-1)^2\\) means \\(f'(x)\\) does not change sign across \\(x = 1\\).", workingOut: "$$ \\text{Since } f'(x) \\text{ does not change sign, } (1, 0) \\text{ is a horizontal point of inflexion.} $$", graphData: null }
]));

updates.push(findAndSet(qFortSim, 'fortst2020s-q10d', [
  "Points of inflection at \\((-1, -16)\\) and \\((1, 0)\\) only.",
  "Points of inflection at \\((-1, 0)\\) and \\((1, -16)\\).",
  "Point of inflection at \\((1, 0)\\) only.",
  "Points of inflection at \\((-3, 0)\\) and \\((1, 0)\\)."
], 0, "The correct answer is Points of inflection at \\((-1, -16)\\) and \\((1, 0)\\) only.", [
  { explanation: "Step 1: Set the second derivative \\(f''(x) = 0\\) to find possible points of inflection.", workingOut: "$$ 12(x-1)(x+1) = 0 \\implies x = 1 \\quad \\text{or} \\quad x = -1 $$", graphData: null },
  { explanation: "Step 2: Check for a change in concavity around \\(x = 1\\) and \\(x = -1\\) using test points.", workingOut: "$$ \\begin{aligned} f''(-2) &= 36 > 0 \\quad (\\text{Concave up}) \\\\\\\\ f''(0) &= -12 < 0 \\quad (\\text{Concave down}) \\\\\\\\ f''(2) &= 36 > 0 \\quad (\\text{Concave up}) \\end{aligned} $$", graphData: null },
  { explanation: "Step 3: Since concavity changes across both \\(x = -1\\) and \\(x = 1\\), they are both true points of inflection. Find their \\(y\\)-coordinates.", workingOut: "$$ \\begin{aligned} f(-1) &= (-1+3)(-1-1)^3 = 2(-8) = -16 \\implies (-1, -16) \\\\\\\\ f(1) &= (1+3)(1-1)^3 = 0 \\implies (1, 0) \\end{aligned} $$", graphData: null },
  { explanation: "Step 4: State the final coordinates of the points of inflection.", workingOut: "$$ \\text{Points of inflection at } (-1, -16) \\text{ and } (1, 0). $$", graphData: null }
]));


fs.writeFileSync(pathCraSim, `export const CRANBROOK_2023_SIMILAR_QUESTIONS = ${JSON.stringify(qCraSim, null, 2)};\n`, 'utf8');
fs.writeFileSync(pathDane, `export const DANEBANK_2020_QUESTIONS = ${JSON.stringify(qDane, null, 2)};\n`, 'utf8');
fs.writeFileSync(pathDaneSim, `export const DANEBANK_2020_SIMILAR_QUESTIONS = ${JSON.stringify(qDaneSim, null, 2)};\n`, 'utf8');
fs.writeFileSync(pathFort, `export const FORT_STREET_2020_QUESTIONS = ${JSON.stringify(qFort, null, 2)};\n`, 'utf8');
fs.writeFileSync(pathFortSim, `export const FORT_STREET_2020_SIMILAR_QUESTIONS = ${JSON.stringify(qFortSim, null, 2)};\n`, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();
  
  for (const q of updates) {
    batch.update(db.collection('questions').doc(q.id), {
      opts: q.opts,
      options: q.opts.map(text => ({ text, imageUrl: '' })),
      solution: q.solution,
      solutionSteps: q.solutionSteps,
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  await batch.commit();
  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated 7 questions in batch!');
  process.exit(0);
}
run();
