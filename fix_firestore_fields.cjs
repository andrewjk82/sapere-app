const fs = require('fs');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

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

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  console.log(`Fixing ${questions.length} questions in Firestore to remove 'opts' and 'requiresManualGrading'...`);

  let count = 0;
  for (const question of questions) {
    const ref = db.collection('questions').doc(question.id);
    
    // Set up the update object, overriding the deprecated fields with FieldValue.delete()
    const updateData = { ...question };
    updateData.opts = FieldValue.delete();
    updateData.requiresManualGrading = FieldValue.delete();

    // Re-push using merge: true to avoid deleting missing fields, but it will apply FieldValue.delete()
    await ref.set(updateData, { merge: true });
    count++;
    if (count % 10 === 0) console.log(`  ${count}/${questions.length} updated...`);
  }
  console.log(`Successfully fixed ${count} questions in Firebase.`);
}

run().catch(console.error);
