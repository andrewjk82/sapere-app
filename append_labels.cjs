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

function appendToSvg(id, appendStr) {
  const q = questions.find(q => q.id === id);
  if (q && q.graphData && q.graphData.svg) {
    q.graphData.svg = q.graphData.svg.replace('</svg>', `  ${appendStr}\n</svg>`);
    return q;
  }
  return null;
}

const q3e_add = `
  <text x="170" y="105" font-family="sans-serif" font-size="14" fill="#166534" text-anchor="middle">10 cm</text>
  <text x="115" y="98" font-family="sans-serif" font-size="14" fill="#166534" text-anchor="end">3 cm</text>
`;

const q3f_add = `
  <text x="125" y="145" font-family="sans-serif" font-size="14" fill="#b45309" text-anchor="middle">10 cm</text>
  <text x="105" y="138" font-family="sans-serif" font-size="14" fill="#b45309" text-anchor="end">6 cm</text>
`;

const q3j_add = `
  <line x1="85" y1="90" x2="85" y2="190" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="75" y="140" font-family="sans-serif" font-size="14" fill="#475569" transform="rotate(-90 75 140)" text-anchor="middle">7 cm</text>
`;

const u1 = appendToSvg('y9-16d-q3e', q3e_add);
const u2 = appendToSvg('y9-16d-q3f', q3f_add);
const u3 = appendToSvg('y9-16d-q3j', q3j_add);

if (u1 && u2 && u3) {
  const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filepath, output, 'utf8');
  console.log('Successfully appended labels in local file.');
  
  async function runPush() {
    const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
    initializeApp({ credential: cert(serviceAccount) });
    const db = getFirestore();
  
    for (const id of ['y9-16d-q3e', 'y9-16d-q3f', 'y9-16d-q3j']) {
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
  console.log('Failed to find one or more questions.');
}
