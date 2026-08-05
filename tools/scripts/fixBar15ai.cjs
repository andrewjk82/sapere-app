const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedBarker2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const BARKER_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'bar2020-q15ai');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].opts = [
  "Horizontal point of inflection at \\((0, 6)\\); local minimum at \\((2, -10)\\)",
  "Local maximum at \\((0, 6)\\); local minimum at \\((2, -10)\\)",
  "Local minimum at \\((0, 6)\\); local maximum at \\((2, -10)\\)",
  "Horizontal point of inflection at \\((0, 6)\\); local maximum at \\((2, -10)\\)"
];

questions[qIndex].solution = "The correct answer is Horizontal point of inflection at \\((0, 6)\\); local minimum at \\((2, -10)\\).";

questions[qIndex].solutionSteps = [
  {
    explanation: "Step 1: To find the stationary points, find the first derivative \\(f'(x)\\) and set it to zero.",
    workingOut: "$$ \\begin{aligned} f(x) &= 3x^4 - 8x^3 + 6 \\\\\\\\ f'(x) &= 12x^3 - 24x^2 \\\\\\\\ 12x^2(x - 2) &= 0 \\implies x = 0 \\text{ or } x = 2 \\end{aligned} $$"
  },
  {
    explanation: "Step 2: Substitute these \\(x\\)-values back into \\(f(x)\\) to find the corresponding \\(y\\)-coordinates.",
    workingOut: "$$ \\begin{aligned} f(0) &= 3(0)^4 - 8(0)^3 + 6 = 6 \\implies (0, 6) \\\\\\\\ f(2) &= 3(2)^4 - 8(2)^3 + 6 = 3(16) - 8(8) + 6 = 48 - 64 + 6 = -10 \\implies (2, -10) \\end{aligned} $$"
  },
  {
    explanation: "Step 3: Find the second derivative \\(f''(x)\\) to test the nature of the stationary points.",
    workingOut: "$$ \\begin{aligned} f''(x) &= \\frac{d}{dx}(12x^3 - 24x^2) = 36x^2 - 48x \\\\\\\\ x = 2: \\quad f''(2) &= 36(2)^2 - 48(2) = 144 - 96 = 48 > 0 \\implies \\text{Local Minimum at } (2, -10) \\end{aligned} $$"
  },
  {
    explanation: "Step 4: At \\(x = 0\\), the second derivative is \\(f''(0) = 0\\), so the test is inconclusive. We must use the first derivative test to check the gradient around \\(x = 0\\).",
    workingOut: "$$ \\begin{aligned} \\text{Test } x = -1: \\quad f'(-1) &= 12(-1)^3 - 24(-1)^2 = -12 - 24 = -36 < 0 \\\\\\\\ \\text{Test } x = 1: \\quad f'(1) &= 12(1)^3 - 24(1)^2 = 12 - 24 = -12 < 0 \\end{aligned} $$"
  },
  {
    explanation: "Step 5: Since the gradient is negative on both sides of \\(x = 0\\), it does not change sign. Therefore, \\((0, 6)\\) is a horizontal point of inflection.",
    workingOut: "$$ \\therefore \\text{Horizontal point of inflection at } (0, 6) \\text{ and local minimum at } (2, -10) $$"
  }
];

const newContent = `export const BARKER_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('bar2020-q15ai').update({
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

  console.log('Successfully updated bar2020-q15ai!');
  process.exit(0);
}
run();
