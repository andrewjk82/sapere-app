const fs = require('fs');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filepath = 'src/constants/seedYear11Ch7CQuestions.js';
const code = fs.readFileSync(filepath, 'utf8');
const ast = parse(code, { sourceType: 'module', plugins: ['jsx'] });

let questions = null;
traverse(ast, {
  ExportNamedDeclaration(path) {
    const decl = path.node.declaration;
    if (decl && decl.type === 'VariableDeclaration') {
      for (const declarator of decl.declarations) {
        if (declarator.id.name === 'Y11_CH7C_QUESTIONS') {
          const { start, end } = declarator.init;
          const arrSrc = code.slice(start, end);
          questions = (new Function(`return ${arrSrc}`))();
        }
      }
    }
  }
});

function fixOptions(id, distractors) {
  const q = questions.find(q => q.id === id);
  if (!q) return;
  const correctOptText = q.solution;
  const opts = [];
  opts.push({text: correctOptText, imageUrl: ""});
  distractors.forEach(d => {
    opts.push({text: d, imageUrl: ""});
  });
  // shuffle them slightly by placing correct option at original answer index
  const answerIdx = q.answer || 0;
  // swap answerIdx with 0
  if (answerIdx !== 0 && answerIdx < opts.length) {
    const temp = opts[answerIdx];
    opts[answerIdx] = opts[0];
    opts[0] = temp;
  }
  q.options = opts;
}

fixOptions('y11a-7c-q10a-angle', ["\\( 135^\\circ \\)", "\\( 90^\\circ \\)", "\\( 60^\\circ \\)"]);
fixOptions('y11a-7c-q10b-angle', ["\\( 45^\\circ \\)", "\\( 90^\\circ \\)", "\\( 150^\\circ \\)"]);
fixOptions('y11a-7c-q10c-angle', ["\\( 108^\\circ \\)", "\\( 18^\\circ \\)", "\\( 71^\\circ \\)"]);
fixOptions('y11a-7c-q10d-angle', ["\\( 27^\\circ \\)", "\\( 63^\\circ \\)", "\\( 117^\\circ \\)"]);

const output = `export const Y11_CH7C_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const idsToUpdate = ['y11a-7c-q10a-angle', 'y11a-7c-q10b-angle', 'y11a-7c-q10c-angle', 'y11a-7c-q10d-angle'];
  for (const q of questions) {
    if (idsToUpdate.includes(q.id)) {
      const ref = db.collection('questions').doc(q.id);
      await ref.set(q, { merge: true });
      console.log(`Updated ${q.id} in Firestore.`);
    }
  }
  console.log('Successfully fixed negative distractors.');
}

run().catch(console.error);
