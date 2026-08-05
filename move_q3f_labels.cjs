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

const q = questions.find(q => q.id === 'y9-16d-q3f');

if (q && q.graphData && q.graphData.svg) {
  let svg = q.graphData.svg;
  
  // Update "10 cm" position: y=145 -> y=155
  svg = svg.replace(/<text x="125" y="145"([^>]*)>10 cm<\/text>/g, '<text x="125" y="155"$1>10 cm</text>');
  
  // Update "6 cm" position: x=105 -> x=115
  svg = svg.replace(/<text x="105" y="138"([^>]*)>6 cm<\/text>/g, '<text x="115" y="138"$1>6 cm</text>');
  
  q.graphData.svg = svg;
  
  const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filepath, output, 'utf8');
  console.log('Successfully moved labels in local file.');
  
  async function runPush() {
    const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
    initializeApp({ credential: cert(serviceAccount) });
    const db = getFirestore();
  
    const ref = db.collection('questions').doc('y9-16d-q3f');
    await ref.set({ graphData: q.graphData }, { merge: true });
    console.log(`Updated y9-16d-q3f in Firestore.`);
  }
  runPush().catch(console.error);
} else {
  console.log('Failed to find question or SVG.');
}
