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

let updatedCount = 0;
const updatedIds = [];

for (const q of questions) {
  if (q.graphData && q.graphData.svg) {
    let svg = q.graphData.svg;
    if (svg.includes('font-size="18"')) {
      svg = svg.replace(/font-size="18"/g, 'font-size="14"');
      svg = svg.replace(/font-weight="700"/g, 'font-weight="600"');
      q.graphData.svg = svg;
      updatedCount++;
      updatedIds.push(q.id);
    }
  }
}

if (updatedCount > 0) {
  const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filepath, output, 'utf8');
  console.log(`Successfully updated text sizes for ${updatedCount} SVGs in local file.`);
  
  async function runPush() {
    const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
    initializeApp({ credential: cert(serviceAccount) });
    const db = getFirestore();
  
    for (const id of updatedIds) {
      const q = questions.find(q => q.id === id);
      if (q) {
        const ref = db.collection('questions').doc(q.id);
        await ref.set({ graphData: q.graphData }, { merge: true });
        console.log(`Updated graphData for ${q.id} in Firestore.`);
      }
    }
    console.log('Finished pushing text size updates.');
  }
  
  runPush().catch(console.error);
} else {
  console.log('No SVGs found with font-size="18".');
}
