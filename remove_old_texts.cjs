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

const q5g = questions.find(q => q.id === 'y9-16d-q5g');
if (q5g && q5g.graphData && q5g.graphData.svg) {
  let svg = q5g.graphData.svg;

  // Exact replacement for the floating old texts
  svg = svg.replace('<text x="110" y="60" font-family="sans-serif" font-size="14" fill="#ca8a04" font-weight="bold">270°</text>', '');
  svg = svg.replace('<text x="215" y="75" font-family="sans-serif" font-size="12" fill="#a16207">4 cm</text>', '');
  
  // Clean up any double empty lines this might have caused
  svg = svg.replace(/\n\s*\n\s*\n/g, '\n\n');

  q5g.graphData.svg = svg;
  
  const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filepath, output, 'utf8');
  console.log('Successfully removed old floating texts in local file.');
  
  async function runPush() {
    const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
    initializeApp({ credential: cert(serviceAccount) });
    const db = getFirestore();
  
    const ref = db.collection('questions').doc('y9-16d-q5g');
    await ref.set({ graphData: q5g.graphData }, { merge: true });
    console.log(`Updated y9-16d-q5g in Firestore.`);
  }
  runPush().catch(console.error);
} else {
  console.log('Failed to find q5g or SVG.');
}
