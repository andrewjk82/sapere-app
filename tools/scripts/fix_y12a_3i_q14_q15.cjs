const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let q14 = questions.find(x => x.id === 'y12a-3i-q14');
let q15 = questions.find(x => x.id === 'y12a-3i-q15');

let q14b = q14.subQuestions.find(x => x.id === 'y12a-3i-q14b');
if (q14b) {
  q14b.type = 'multiple_choice';
  q14b.opts = ['0', '16', '-4', '-16'];
  q14b.a = 3;
  q14b.answer = 3;
  q14b.solutionSteps = [
    { explanation: "Understand the requirement", workingOut: "\\text{The gradient of a curve at any point is given by its first derivative, } y'." },
    { explanation: "Find the first derivative", workingOut: "\\text{Differentiate } y = x^4 - 4x^3 + 12 \\text{ to get }\\\\ y' = 4x^3 - 12x^2" },
    { explanation: "Evaluate at the given point", workingOut: "\\text{The point of inflection is at } x = 2 \\text{. Substitute } x = 2 \\text{ into } y':\\\\ y'(2) = 4(2)^3 - 12(2)^2 = 32 - 48 = -16" }
  ];
}

let q15a = q15.subQuestions.find(x => x.id === 'y12a-3i-q15a');
if (q15a) {
  q15a.type = 'multiple_choice';
  q15a.opts = ['75', '600', '651', '54'];
  q15a.a = 1;
  q15a.answer = 1;
  q15a.solutionSteps = [
    { explanation: "Understand 'initial'", workingOut: "\\text{The word 'initial' refers to the very beginning of the period, which is when time } t = 0." },
    { explanation: "Evaluate the formula", workingOut: "\\text{Substitute } t = 0 \\text{ into the formula } S = 600 + 54t^2 - 3t^4:\\\\ S(0) = 600 + 54(0)^2 - 3(0)^4 = 600" }
  ];
}

let q15b = q15.subQuestions.find(x => x.id === 'y12a-3i-q15b');
if (q15b) {
  q15b.type = 'multiple_choice';
  q15b.opts = ['3825', '-525', '75', '696'];
  q15b.a = 2;
  q15b.answer = 2;
  q15b.solutionSteps = [
    { explanation: "Understand 'end of the five hours'", workingOut: "\\text{The period is 5 hours long, so the end corresponds to time } t = 5." },
    { explanation: "Evaluate the formula", workingOut: "\\text{Substitute } t = 5 \\text{ into the formula } S = 600 + 54t^2 - 3t^4." },
    { explanation: "Calculate the terms", workingOut: "54(5)^2 = 54(25) = 1350\\\\ -3(5)^4 = -3(625) = -1875" },
    { explanation: "Find the final value", workingOut: "S(5) = 600 + 1350 - 1875 = 75" }
  ];
}

let q15c = q15.subQuestions.find(x => x.id === 'y12a-3i-q15c');
if (q15c) {
  q15c.type = 'multiple_choice';
  q15c.opts = ['843', '3', '600', '735'];
  q15c.a = 0;
  q15c.answer = 0;
  q15c.solutionSteps = [
    { explanation: "Understand 'maximum number'", workingOut: "\\text{To find the maximum value of } S \\text{, we need to find the critical points by setting the derivative } \\frac{dS}{dt} \\text{ to zero.}" },
    { explanation: "Find the derivative", workingOut: "\\text{Differentiate } S \\text{ with respect to } t:\\\\ \\frac{dS}{dt} = 108t - 12t^3" },
    { explanation: "Find critical points", workingOut: "\\text{Set the derivative to zero:}\\\\ 12t(9 - t^2) = 0 \\implies t = 0 \\text{ or } t = 3 \\text{ or } t = -3.\\\\ \\text{Since } 0 \\le t \\le 5\\text{, the valid times are } t = 0 \\text{ and } t = 3." },
    { explanation: "Evaluate S at critical points and endpoints", workingOut: "\\text{We know } S(0) = 600 \\text{ and } S(5) = 75.\\\\ \\text{Now evaluate at } t = 3:\\\\ S(3) = 600 + 54(3)^2 - 3(3)^4 = 600 + 486 - 243 = 843.\\\\ \\text{Comparing 600, 75, and 843, the maximum is 843.}" }
  ];
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let convertOpts = (opts) => opts.map(o => ({ text: o, imageUrl: '' }));
  
  let doc14 = await db.collection('questions').doc('y12a-3i-q14').get();
  if (doc14.exists) {
    let db_q14 = doc14.data();
    db_q14.subQuestions = db_q14.subQuestions.map(sq => {
      if (sq.id === 'y12a-3i-q14b') return { ...q14b, options: convertOpts(q14b.opts) };
      return sq;
    });
    await db.collection('questions').doc('y12a-3i-q14').update({ subQuestions: db_q14.subQuestions });
  }

  let doc15 = await db.collection('questions').doc('y12a-3i-q15').get();
  if (doc15.exists) {
    let db_q15 = doc15.data();
    db_q15.subQuestions = db_q15.subQuestions.map(sq => {
      if (sq.id === 'y12a-3i-q15a') return { ...q15a, options: convertOpts(q15a.opts) };
      if (sq.id === 'y12a-3i-q15b') return { ...q15b, options: convertOpts(q15b.opts) };
      if (sq.id === 'y12a-3i-q15c') return { ...q15c, options: convertOpts(q15c.opts) };
      return sq;
    });
    await db.collection('questions').doc('y12a-3i-q15').update({ subQuestions: db_q15.subQuestions });
  }

  console.log('Successfully updated q14 and q15 in Firestore.');
  process.exit(0);
}
updateDb();
