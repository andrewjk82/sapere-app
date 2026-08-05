const fs = require('fs');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const filepath = 'src/constants/seedYear9Ch16DQuestions.js';
const code = fs.readFileSync(filepath, 'utf8');
const ast = parse(code, { sourceType: 'module', plugins: ['jsx'] });

let questions = null;
traverse(ast, {
  ExportNamedDeclaration(path) {
    const decl = path.node.declaration;
    if (decl && decl.type === 'VariableDeclaration') {
      for (const declarator of decl.declarations) {
        if (declarator.id.name === 'Y9_CH16D_QUESTIONS') {
          const { start, end } = declarator.init;
          const arrSrc = code.slice(start, end);
          questions = (new Function(`return ${arrSrc}`))();
        }
      }
    }
  }
});

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const batch = questions.slice(12, 24);
  for (const question of batch) {
    const ref = db.collection('questions').doc(question.id);
    const updateData = { ...question };
    updateData.opts = FieldValue.delete();
    updateData.requiresManualGrading = FieldValue.delete();

    await ref.set(updateData, { merge: true });
    console.log(`Updated ${question.id}`);
  }
  console.log('Successfully pushed batch 2 (12 questions) to Firebase.');
}

run().catch(console.error);
