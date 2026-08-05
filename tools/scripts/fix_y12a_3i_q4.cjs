const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

const q4a = questions.find(x => x.id === 'y12a-3i-q4a');
const q4b = questions.find(x => x.id === 'y12a-3i-q4b');
const q4c = questions.find(x => x.id === 'y12a-3i-q4c');
const q4d = questions.find(x => x.id === 'y12a-3i-q4d');

const opts = ['increasing', 'decreasing', 'stationary'];

q4a.type = 'multiple_choice';
q4a.opts = opts;
q4a.a = 0;
q4a.answer = 0;

q4b.type = 'multiple_choice';
q4b.opts = opts;
q4b.a = 1;
q4b.answer = 1;

q4c.type = 'multiple_choice';
q4c.opts = opts;
q4c.a = 2;
q4c.answer = 2;

q4d.type = 'multiple_choice';
q4d.opts = opts;
q4d.a = 1;
q4d.answer = 1;

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  const toUpdate = [q4a, q4b, q4c, q4d];
  
  for (let q of toUpdate) {
    let optionsFormat = opts.map(o => ({ text: o, imageUrl: '' }));
    
    await db.collection('questions').doc(q.id).update({
      type: 'multiple_choice',
      opts: opts,
      options: optionsFormat,
      a: q.a,
      answer: q.answer
    });
    console.log('Updated in DB:', q.id);
  }
  
  console.log('Successfully converted q4a-q4d to multiple choice.');
  process.exit(0);
}

updateDb();
