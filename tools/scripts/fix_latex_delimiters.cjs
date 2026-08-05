const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

const qIds = [
  'y12a-3i-q13a', 'y12a-3i-q13ba', 'y12a-3i-q13bb',
  'y12a-3i-q14b', 'y12a-3i-q15a', 'y12a-3i-q15b', 'y12a-3i-q15c',
  'y12a-3i-q16a', 'y12a-3i-q16b', 'y12a-3i-q17a', 'y12a-3i-q17b',
  'y12a-3i-q18a', 'y12a-3i-q18b', 'y12a-3i-q18c', 'y12a-3i-q18d', 'y12a-3i-q18e',
  'y12a-3i-q19a', 'y12a-3i-q19b', 'y12a-3i-q19c', 'y12a-3i-q20a'
];

let updatedQs = [];

function fixOpts(q) {
  if (q && q.opts) {
    q.opts = q.opts.map(opt => {
      // If it doesn't already have math delimiters, wrap it.
      if (!opt.startsWith('\\(') && !opt.startsWith('$')) {
        return '\\( ' + opt + ' \\)';
      }
      return opt;
    });
  }
}

for (let id of qIds) {
  // Check main array
  let q = questions.find(x => x.id === id);
  if (q) {
    fixOpts(q);
    updatedQs.push(q);
  } else {
    // Check subQuestions
    for (let mainQ of questions) {
      if (mainQ.subQuestions) {
        let sq = mainQ.subQuestions.find(x => x.id === id);
        if (sq) {
          fixOpts(sq);
          updatedQs.push(sq);
        }
      }
    }
  }
}

const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let convertOpts = (opts) => opts.map(o => ({ text: o, imageUrl: '' }));
  
  for (let q of updatedQs) {
    // Need to find if it's a main question or a subQuestion in DB
    const isSub = !questions.find(x => x.id === q.id);
    if (!isSub) {
      await db.collection('questions').doc(q.id).update({
        opts: q.opts,
        options: convertOpts(q.opts)
      });
      console.log('Updated main q:', q.id);
    } else {
      // Find parent
      let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === q.id));
      if (parent) {
        let parentDoc = await db.collection('questions').doc(parent.id).get();
        if (parentDoc.exists) {
          let pData = parentDoc.data();
          let sqIdx = pData.subQuestions.findIndex(sq => sq.id === q.id);
          if (sqIdx > -1) {
            pData.subQuestions[sqIdx].opts = q.opts;
            pData.subQuestions[sqIdx].options = convertOpts(q.opts);
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
            console.log('Updated sub q:', q.id, 'in parent:', parent.id);
          }
        }
      }
    }
  }

  console.log('Successfully wrapped LaTeX delimiters.');
  process.exit(0);
}
updateDb();
