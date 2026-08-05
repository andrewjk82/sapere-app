const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedBarker2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const BARKER_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'bar2020-q15aiv');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].opts = [
  "Horizontal point of inflection at \\((0, 5)\\); local minimum at \\((3, -49)\\)",
  "Local maximum at \\((0, 5)\\); local minimum at \\((3, -49)\\)",
  "Local minimum at \\((0, 5)\\); local maximum at \\((3, -49)\\)",
  "Horizontal point of inflection at \\((0, 5)\\); local maximum at \\((3, -49)\\)"
];

questions[qIndex].solution = "The correct answer is Horizontal point of inflection at \\((0, 5)\\); local minimum at \\((3, -49)\\).";

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: Find the first derivative \\(f'(x)\\) and set it to zero to find the \\(x\\)-coordinates of the stationary points.",
    workingOut: "$$ \\begin{aligned} f(x) &= 2x^4 - 8x^3 + 5 \\\\\\\\ f'(x) &= 8x^3 - 24x^2 \\\\\\\\ 8x^2(x - 3) &= 0 \\implies x = 0 \\text{ or } x = 3 \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Substitute these \\(x\\)-values back into \\(f(x)\\) to find the corresponding \\(y\\)-coordinates.",
    workingOut: "$$ \\begin{aligned} f(0) &= 2(0)^4 - 8(0)^3 + 5 = 5 \\implies (0, 5) \\\\\\\\ f(3) &= 2(3)^4 - 8(3)^3 + 5 = 2(81) - 8(27) + 5 = 162 - 216 + 5 = -49 \\implies (3, -49) \\end{aligned} $$"
  },
  {
    explanation: "Step 3: Find the second derivative \\(f''(x)\\) to determine the nature of the stationary points.",
    workingOut: "$$ \\begin{aligned} f''(x) &= \\frac{d}{dx}(8x^3 - 24x^2) = 24x^2 - 48x \\\\\\\\ x = 3: \\quad f''(3) &= 24(3)^2 - 48(3) = 216 - 144 = 72 > 0 \\implies \\text{Local Minimum at } (3, -49) \\end{aligned} $$"
  },
  {
    explanation: "Step 4: At \\(x = 0\\), the second derivative is \\(f''(0) = 0\\). Since the second derivative test is inconclusive, we use the first derivative test around \\(x = 0\\).",
    workingOut: "$$ \\begin{aligned} \\text{Test } x = -1: \\quad f'(-1) &= 8(-1)^3 - 24(-1)^2 = -8 - 24 = -32 < 0 \\\\\\\\ \\text{Test } x = 1: \\quad f'(1) &= 8(1)^3 - 24(1)^2 = 8 - 24 = -16 < 0 \\end{aligned} $$"
  },
  {
    explanation: "Step 5: The gradient is negative on both sides of \\(x = 0\\), meaning the function continues to decrease. Therefore, \\((0, 5)\\) is a horizontal point of inflection.",
    workingOut: "$$ \\therefore \\text{Horizontal point of inflection at } (0, 5) \\text{ and local minimum at } (3, -49) $$"
  }
];

const newContent = `export const BARKER_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('bar2020-q15aiv').update({
    opts: questions[qIndex].opts,
    options: questions[qIndex].opts.map(text => ({ text, imageUrl: '' })),
    solution: questions[qIndex].solution,
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated bar2020-q15aiv distractors and steps!');
  process.exit(0);
}
run();
