const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const path = './src/constants/seedAscham2020Questions.js';
let content = fs.readFileSync(path, 'utf8');

const arrayMatch = content.match(/export const ASCHAM_2020_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (!arrayMatch) throw new Error("No array found");

let questions = eval(arrayMatch[1]);
const qIndex = questions.findIndex(x => x.id === 'asc2020-q17-a');
if (qIndex === -1) throw new Error("Question not found");

questions[qIndex].solutionSteps = [
  {
    explanation: "To find Pearson's correlation coefficient (\\(r\\)) using a Casio fx-82AU PLUS calculator, first set it to the correct statistical mode for bivariate (two-variable) data.\n\n1. Press **MODE**, then select **2 (STAT)**.\n2. Select **2 (A+BX)** for linear regression.",
    workingOut: "$$\\text{MODE} \\rightarrow 2: \\text{STAT} \\rightarrow 2: A+BX$$"
  },
  {
    explanation: "Next, input your data into the table that appears on the screen.\n\n1. Enter all the \\(x\\)-values in the left column, pressing **=** after each number.\n2. Use the arrow keys to move to the top of the \\(y\\)-column.\n3. Enter the corresponding \\(y\\)-values, pressing **=** after each one.\n4. Once all data is entered, press **AC**. (Don't worry, your data is saved in the calculator's memory!)",
    workingOut: "$$\\text{Enter data} \\rightarrow \\text{Press AC}$$"
  },
  {
    explanation: "Finally, retrieve the correlation coefficient \\(r\\) from the regression menu.\n\n1. Press **SHIFT** and then **1 (STAT)**.\n2. Select **5 (Reg)** for regression variables.\n3. Select **3 (r)** for Pearson's correlation coefficient.\n4. Press **=** to calculate the value.\n\nRounding to 3 decimal places, you should get \\(-0.980\\).",
    workingOut: "$$ \\begin{aligned} \\text{SHIFT} \\rightarrow 1 \\rightarrow 5:\\text{Reg} \\rightarrow 3:r \\rightarrow = \\\\\\\\ r \\approx -0.980 \\end{aligned} $$"
  }
];

const newContent = `export const ASCHAM_2020_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(path, newContent, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  await db.collection('questions').doc('asc2020-q17-a').update({
    solutionSteps: questions[qIndex].solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.doc('sync_meta/questions').update({
    version: Date.now(),
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Successfully updated Casio fx-82AU instructions for asc2020-q17-a!');
  process.exit(0);
}
run();
