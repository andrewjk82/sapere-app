const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedCranbrook2023Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const CRANBROOK_2023_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'cra2023-q27c');
if (qIndex === -1) throw new Error("Question not found");

const safeText = "Curve starts at (0, 1), rises to the local maximum (1, 145/64), falls through the horizontal point of inflection (4, 1), continues falling and crosses the x-axis between x = 5 and x = 6, ending at (6, -5/4).";

questions[qIndex].answer = safeText;
questions[qIndex].solution = safeText;

const newContent = `export const CRANBROOK_2023_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('cra2023-q27c').update({
    answer: safeText,
    solution: safeText,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully fixed LaTeX error in cra2023-q27c!');
  process.exit(0);
}
run();
