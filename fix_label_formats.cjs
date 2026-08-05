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

const replacements = [
  ['>h = 10<', '>10 cm<'],
  ['>Width = 16 cm<', '>16 cm<'],
  ['>Height = 12 cm<', '>12 cm<'],
  ['>Length = 14 cm<', '>14 cm<'],
  ['>Width = 30 cm<', '>30 cm<'],
  ['>Height = 12<', '>12 cm<'],
  ['>Length = 10 cm<', '>10 cm<'],
  ['>h=15<', '>15 mm<'],
  ['>Base = 16 mm<', '>16 mm<'],
  ['>h=2<', '>2 cm<'],
  ['>r=4<', '>4 cm<'],
  ['>r=5<', '>5 cm<'],
  ['>h=6<', '>6 cm<'],
  ['>r=2<', '>2 cm<'],
  ['>l = 20 cm<', '>20 cm<'],
  ['>l = 15 cm<', '>15 cm<'],
  ['>l = 8 cm<', '>8 cm<']
];

const updatedIds = new Set();

for (const q of questions) {
  if (q.graphData && q.graphData.svg) {
    let svg = q.graphData.svg;
    let changed = false;
    for (const [oldStr, newStr] of replacements) {
      if (svg.includes(oldStr)) {
        // Also handle halo stroke text which might match the exact inner content
        // But the pattern >...< is exact for SVG text nodes
        svg = svg.split(oldStr).join(newStr);
        changed = true;
      }
    }
    if (changed) {
      q.graphData.svg = svg;
      updatedIds.add(q.id);
    }
  }
}

if (updatedIds.size > 0) {
  const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filepath, output, 'utf8');
  console.log("Successfully updated format in " + updatedIds.size + " SVGs in local file.");
  console.log(Array.from(updatedIds).join(', '));
  
  async function runPush() {
    const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
    initializeApp({ credential: cert(serviceAccount) });
    const db = getFirestore();
  
    for (const id of Array.from(updatedIds)) {
      const q = questions.find(q => q.id === id);
      if (q) {
        const ref = db.collection('questions').doc(id);
        await ref.set({ graphData: q.graphData }, { merge: true });
        console.log("Updated " + id + " in Firestore.");
      }
    }
  }
  runPush().catch(console.error);
} else {
  console.log('No inconsistent formats found.');
}
