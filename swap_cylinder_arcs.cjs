const fs = require('fs');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

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

function updateSvg(id, oldHidden, newHidden, oldVisible, newVisible) {
  const q = questions.find(q => q.id === id);
  if (!q || !q.graphData || !q.graphData.svg) return false;
  
  let svg = q.graphData.svg;
  
  // We just swap the paths.
  svg = svg.replace(oldHidden, newHidden);
  svg = svg.replace(oldVisible, newVisible);
  
  q.graphData.svg = svg;
  return true;
}

const u1 = updateSvg(
  'y9-16d-q5c', 
  '<path d="M 120 200 A 30 70 0 0 1 120 60" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>',
  '<path d="M 120 60 A 30 70 0 0 1 120 200" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>',
  '<path d="M 120 60 A 30 70 0 0 1 120 200" fill="none" stroke="#475569" stroke-width="2"/>',
  '<path d="M 120 200 A 30 70 0 0 1 120 60" fill="none" stroke="#475569" stroke-width="2"/>'
);

const u2 = updateSvg(
  'y9-16d-q5d', 
  '<path d="M 80 160 A 15 40 0 0 1 80 80" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>',
  '<path d="M 80 80 A 15 40 0 0 1 80 160" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>',
  '<path d="M 80 80 A 15 40 0 0 1 80 160" fill="none" stroke="#475569" stroke-width="2"/>',
  '<path d="M 80 160 A 15 40 0 0 1 80 80" fill="none" stroke="#475569" stroke-width="2"/>'
);

if (u1 && u2) {
  const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filepath, output, 'utf8');
  console.log('Successfully swapped cylinder arcs in local file.');
  
  async function runPush() {
    const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
    initializeApp({ credential: cert(serviceAccount) });
    const db = getFirestore();
  
    for (const id of ['y9-16d-q5c', 'y9-16d-q5d']) {
      const q = questions.find(q => q.id === id);
      if (q) {
        const ref = db.collection('questions').doc(id);
        await ref.set({ graphData: q.graphData }, { merge: true });
        console.log(`Updated ${id} in Firestore.`);
      }
    }
  }
  runPush().catch(console.error);
} else {
  console.log('Failed to update one or both questions.');
}
