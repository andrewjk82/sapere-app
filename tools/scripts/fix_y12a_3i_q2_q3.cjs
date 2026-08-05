const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let q2a = questions.find(x => x.id === 'y12a-3i-q2a') || (questions.find(x => x.id === 'y12a-3i-q2')?.subQuestions.find(sq => sq.id === 'y12a-3i-q2a'));
if (q2a) {
  q2a.type = 'multiple_choice';
  q2a.opts = ['\\( 3x^2 - 3x - 9 \\)', '\\( x^2 - 6x - 9 \\)', '\\( 3x^2 - 6x + 5 \\)', '\\( 3x^2 - 6x - 9 \\)'];
  q2a.a = 3;
  q2a.answer = 3;
}

let q2bi = questions.find(x => x.id === 'y12a-3i-q2bi') || (questions.find(x => x.id === 'y12a-3i-q2')?.subQuestions.find(sq => sq.id === 'y12a-3i-q2bi'));
if (q2bi) {
  q2bi.type = 'multiple_choice';
  q2bi.opts = ['increasing', 'decreasing', 'stationary'];
  q2bi.a = 1;
  q2bi.answer = 1;
}

let q2bii = questions.find(x => x.id === 'y12a-3i-q2bii') || (questions.find(x => x.id === 'y12a-3i-q2')?.subQuestions.find(sq => sq.id === 'y12a-3i-q2bii'));
if (q2bii) {
  q2bii.type = 'multiple_choice';
  q2bii.opts = ['decreasing', 'stationary', 'increasing'];
  q2bii.a = 2;
  q2bii.answer = 2;
}

let q2biii = questions.find(x => x.id === 'y12a-3i-q2biii') || (questions.find(x => x.id === 'y12a-3i-q2')?.subQuestions.find(sq => sq.id === 'y12a-3i-q2biii'));
if (q2biii) {
  q2biii.type = 'multiple_choice';
  q2biii.opts = ['stationary', 'increasing', 'decreasing'];
  q2biii.a = 0;
  q2biii.answer = 0;
}

let q2biv = questions.find(x => x.id === 'y12a-3i-q2biv') || (questions.find(x => x.id === 'y12a-3i-q2')?.subQuestions.find(sq => sq.id === 'y12a-3i-q2biv'));
if (q2biv) {
  q2biv.type = 'multiple_choice';
  q2biv.opts = ['increasing', 'stationary', 'decreasing'];
  q2biv.a = 1;
  q2biv.answer = 1;
}

let q3a = questions.find(x => x.id === 'y12a-3i-q3a') || (questions.find(x => x.id === 'y12a-3i-q3')?.subQuestions.find(sq => sq.id === 'y12a-3i-q3a'));
if (q3a) {
  q3a.type = 'multiple_choice';
  q3a.opts = ['\\( 2x - 6 \\)', '\\( x - 6 \\)', '\\( 2x + 8 \\)', '\\( x^2 - 6 \\)'];
  q3a.a = 0;
  q3a.answer = 0;
}

let q3bi = questions.find(x => x.id === 'y12a-3i-q3bi') || (questions.find(x => x.id === 'y12a-3i-q3')?.subQuestions.find(sq => sq.id === 'y12a-3i-q3bi'));
if (q3bi) {
  q3bi.type = 'multiple_choice';
  q3bi.opts = ['\\( x < 3 \\)', '\\( x > 3 \\)', '\\( x = 3 \\)', '\\( x > 6 \\)'];
  q3bi.a = 1;
  q3bi.answer = 1;
}

let q3bii = questions.find(x => x.id === 'y12a-3i-q3bii') || (questions.find(x => x.id === 'y12a-3i-q3')?.subQuestions.find(sq => sq.id === 'y12a-3i-q3bii'));
if (q3bii) {
  q3bii.type = 'multiple_choice';
  q3bii.opts = ['\\( x > -3 \\)', '\\( x > 3 \\)', '\\( x < 3 \\)', '\\( x < -3 \\)'];
  q3bii.a = 2;
  q3bii.answer = 2;
}

let q3biii = questions.find(x => x.id === 'y12a-3i-q3biii') || (questions.find(x => x.id === 'y12a-3i-q3')?.subQuestions.find(sq => sq.id === 'y12a-3i-q3biii'));
if (q3biii) {
  q3biii.type = 'multiple_choice';
  q3biii.opts = ['\\( -3 \\)', '\\( 6 \\)', '\\( -6 \\)', '\\( 3 \\)'];
  q3biii.a = 3;
  q3biii.answer = 3;
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let convertOpts = (opts) => opts.map(o => ({ text: o, imageUrl: '' }));
  
  const qs = [q2a, q2bi, q2bii, q2biii, q2biv, q3a, q3bi, q3bii, q3biii];
  
  for (let q of qs) {
    if (q) {
      let isSub = !questions.find(x => x.id === q.id);
      if (!isSub) {
        await db.collection('questions').doc(q.id).update({
          type: 'multiple_choice',
          opts: q.opts,
          options: convertOpts(q.opts),
          a: q.a,
          answer: q.answer
        });
      } else {
        let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === q.id));
        if (parent) {
          let parentDoc = await db.collection('questions').doc(parent.id).get();
          if (parentDoc.exists) {
            let pData = parentDoc.data();
            let sqIdx = pData.subQuestions.findIndex(sq => sq.id === q.id);
            if (sqIdx > -1) {
              pData.subQuestions[sqIdx].type = 'multiple_choice';
              pData.subQuestions[sqIdx].opts = q.opts;
              pData.subQuestions[sqIdx].options = convertOpts(q.opts);
              pData.subQuestions[sqIdx].a = q.a;
              pData.subQuestions[sqIdx].answer = q.answer;
              await db.collection('questions').doc(parent.id).update({
                subQuestions: pData.subQuestions
              });
            }
          }
        }
      }
    }
  }

  console.log('Successfully updated q2 and q3 in Firestore.');
  process.exit(0);
}
updateDb();
