const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedAscham2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const ASCHAM_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qAIndex = questions.findIndex(x => x.id === 'asc2020-q17-a');
const qBIndex = questions.findIndex(x => x.id === 'asc2020-q17-b');

// Fix asc2020-q17-a
questions[qAIndex].opts = [
  "\\(r \\approx 0.980\\)",
  "\\(r \\approx -0.980\\)",
  "\\(r \\approx 0.890\\)",
  "\\(r \\approx -0.890\\)"
];
questions[qAIndex].a = 1;
questions[qAIndex].answer = "1";

// Fix asc2020-q17-b
questions[qBIndex].opts = [
  "\\(\\hat{y} = 1.07x - 9.63\\)",
  "\\(\\hat{y} = -1.07x + 9.63\\)",
  "\\(\\hat{y} = 1.07x + 9.63\\)",
  "\\(\\hat{y} = -1.07x - 9.63\\)"
];
questions[qBIndex].a = 1;
questions[qBIndex].answer = "1";

const newContent = `export const ASCHAM_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('asc2020-q17-a').update({
    opts: questions[qAIndex].opts,
    options: questions[qAIndex].opts.map(text => ({ text, imageUrl: '' })),
    a: 1,
    answer: "1",
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('asc2020-q17-b').update({
    opts: questions[qBIndex].opts,
    options: questions[qBIndex].opts.map(text => ({ text, imageUrl: '' })),
    a: 1,
    answer: "1",
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated options for asc2020-q17-a and asc2020-q17-b!');
  process.exit(0);
}
run();
