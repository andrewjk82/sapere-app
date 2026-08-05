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

const basicDefs = `<defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/></marker></defs>`;

const q1d_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Hidden back edges -->
  <line x1="200" y1="50" x2="200" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="200" y1="130" x2="260" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <path d="M 278 126 A 40 40 0 0 1 260 130" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="100" y1="180" x2="200" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>

  <!-- Visible back edges -->
  <line x1="200" y1="50" x2="260" y2="50" stroke="#475569" stroke-width="2"/>
  <path d="M 260 50 A 40 40 0 0 1 278 126" fill="none" stroke="#475569" stroke-width="2"/>

  <!-- Visible connecting edges -->
  <line x1="100" y1="100" x2="200" y2="50" stroke="#475569" stroke-width="2"/>
  <line x1="178" y1="176" x2="278" y2="126" stroke="#475569" stroke-width="2"/>

  <!-- Front face -->
  <path d="M 100 100 L 160 100 A 40 40 0 0 1 160 180 L 100 180 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="3" stroke-linejoin="round"/>
  
  <!-- Text -->
  <text x="140" y="145" font-family="sans-serif" font-size="14" font-weight="600" fill="#b45309" text-anchor="middle">A = 14 cm²</text>
  
  <!-- Arrow for length -->
  <line x1="120" y1="210" x2="220" y2="160" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="190" y="200" font-family="sans-serif" font-size="14" fill="#475569">l = 20 cm</text>
</svg>`;

const targetId = 'y9-16d-q1d';
const q = questions.find(q => q.id === targetId);

if (q) {
  q.graphData = { svg: q1d_svg };
  const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filepath, output, 'utf8');
  console.log('Successfully updated q1d SVG in local file.');
  
  async function runPush() {
    const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
    initializeApp({ credential: cert(serviceAccount) });
    const db = getFirestore();
  
    const ref = db.collection('questions').doc(targetId);
    await ref.set({ graphData: q.graphData }, { merge: true });
    console.log(`Updated graphData for ${targetId} in Firestore.`);
  }
  
  runPush().catch(console.error);
}
