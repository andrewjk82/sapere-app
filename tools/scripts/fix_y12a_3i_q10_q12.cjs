const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let q10 = questions.find(x => x.id === 'y12a-3i-q10');
let q12 = questions.find(x => x.id === 'y12a-3i-q12');

// q10a
let q10a = q10.subQuestions.find(sq => sq.id === 'y12a-3i-q10a');
q10a.type = 'multiple_choice';
q10a.opts = [
  'P(1,-20), Q(-3,12)',
  'P(-1,20), Q(3,-12)',
  'P(20,-1), Q(-12,3)',
  'P(3,20), Q(-1,-12)'
];
q10a.a = 1;
q10a.answer = 1;

// q10b
let q10b = q10.subQuestions.find(sq => sq.id === 'y12a-3i-q10b');
q10b.type = 'multiple_choice';
q10b.opts = [
  'x < 1',
  'x > -1',
  'x > 1',
  'x > 3'
];
q10b.a = 2;
q10b.answer = 2;

// q10c
let q10c = q10.subQuestions.find(sq => sq.id === 'y12a-3i-q10c');
q10c.type = 'multiple_choice';
q10c.opts = [
  '-1 < k < 3',
  '-12 \\le k \\le 20',
  '-20 < k < 12',
  '-12 < k < 20'
];
q10c.a = 3;
q10c.answer = 3;

// q12b
let q12b = q12.subQuestions.find(sq => sq.id === 'y12a-3i-q12b');
q12b.type = 'multiple_choice';
q12b.opts = [
  'global maximum: 56, global minimum: -52',
  'global maximum: 46, global minimum: -52',
  'global maximum: 56, global minimum: -8',
  'global maximum: 46, global minimum: -8'
];
q12b.a = 0;
q12b.answer = 0;

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let convertOpts = (opts) => opts.map(o => ({ text: o, imageUrl: '' }));
  
  let doc10 = await db.collection('questions').doc('y12a-3i-q10').get();
  if (doc10.exists) {
    let db_q10 = doc10.data();
    db_q10.subQuestions = db_q10.subQuestions.map(sq => {
      if (sq.id === 'y12a-3i-q10a') return { ...q10a, options: convertOpts(q10a.opts) };
      if (sq.id === 'y12a-3i-q10b') return { ...q10b, options: convertOpts(q10b.opts) };
      if (sq.id === 'y12a-3i-q10c') return { ...q10c, options: convertOpts(q10c.opts) };
      return sq;
    });
    await db.collection('questions').doc('y12a-3i-q10').update({ subQuestions: db_q10.subQuestions });
  }

  let doc12 = await db.collection('questions').doc('y12a-3i-q12').get();
  if (doc12.exists) {
    let db_q12 = doc12.data();
    db_q12.subQuestions = db_q12.subQuestions.map(sq => {
      if (sq.id === 'y12a-3i-q12b') return { ...q12b, options: convertOpts(q12b.opts) };
      return sq;
    });
    await db.collection('questions').doc('y12a-3i-q12').update({ subQuestions: db_q12.subQuestions });
  }

  console.log('Successfully updated q10 and q12 in Firestore.');
  process.exit(0);
}
updateDb();
