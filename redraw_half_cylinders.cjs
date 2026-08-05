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

const q5eSvg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/></marker>
    <marker id="arrow-pink" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#9d174d"/></marker>
  </defs>
  
  <!-- 1. Hidden left base edge -->
  <line x1="100" y1="180" x2="180" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- 2. Hidden back base edge -->
  <line x1="180" y1="120" x2="300" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- 3. Hidden back arc -->
  <path d="M 180 120 A 60 60 0 0 1 204 72" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  
  <!-- 4. Visible left tangent edge -->
  <line x1="124" y1="132" x2="204" y2="72" stroke="#475569" stroke-width="2"/>
  <!-- 5. Visible back arc -->
  <path d="M 204 72 A 60 60 0 0 1 300 120" fill="none" stroke="#475569" stroke-width="2"/>
  <!-- 6. Visible right base edge -->
  <line x1="220" y1="180" x2="300" y2="120" stroke="#475569" stroke-width="2"/>
  
  <!-- 7. Front face -->
  <path d="M 100 180 A 60 60 0 0 1 220 180 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="3" stroke-linejoin="round"/>
  
  <!-- Radius 8 cm -->
  <circle cx="160" cy="180" r="3" fill="#9d174d"/>
  <line x1="160" y1="180" x2="100" y2="180" stroke="#9d174d" stroke-width="2" marker-end="url(#arrow-pink)"/>
  <text x="130" y="172" font-family="sans-serif" font-size="14" stroke="#fbcfe8" stroke-width="4" stroke-linejoin="round" text-anchor="middle">8 cm</text>
  <text x="130" y="172" font-family="sans-serif" font-size="14" fill="#9d174d" text-anchor="middle">8 cm</text>

  <!-- Length 12 cm -->
  <line x1="240" y1="190" x2="320" y2="130" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="295" y="175" font-family="sans-serif" font-size="14" stroke="#f8fafc" stroke-width="4" stroke-linejoin="round" text-anchor="middle">12 cm</text>
  <text x="295" y="175" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">12 cm</text>
</svg>`;

const q5fSvg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/></marker>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#3730a3"/></marker>
  </defs>
  
  <!-- 1. Hidden left base edge -->
  <line x1="100" y1="180" x2="180" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- 2. Hidden back base edge -->
  <line x1="180" y1="120" x2="300" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- 3. Hidden back arc -->
  <path d="M 180 120 A 60 60 0 0 1 204 72" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  
  <!-- 4. Visible left tangent edge -->
  <line x1="124" y1="132" x2="204" y2="72" stroke="#475569" stroke-width="2"/>
  <!-- 5. Visible back arc -->
  <path d="M 204 72 A 60 60 0 0 1 300 120" fill="none" stroke="#475569" stroke-width="2"/>
  <!-- 6. Visible right base edge -->
  <line x1="220" y1="180" x2="300" y2="120" stroke="#475569" stroke-width="2"/>
  
  <!-- 7. Front face -->
  <path d="M 100 180 A 60 60 0 0 1 220 180 Z" fill="#e0e7ff" stroke="#4338ca" stroke-width="3" stroke-linejoin="round"/>
  
  <!-- Radius 20 cm -->
  <circle cx="160" cy="180" r="3" fill="#3730a3"/>
  <line x1="160" y1="180" x2="100" y2="180" stroke="#3730a3" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <text x="130" y="172" font-family="sans-serif" font-size="14" stroke="#e0e7ff" stroke-width="4" stroke-linejoin="round" text-anchor="middle">20 cm</text>
  <text x="130" y="172" font-family="sans-serif" font-size="14" fill="#3730a3" text-anchor="middle">20 cm</text>

  <!-- Length 30 cm -->
  <line x1="240" y1="190" x2="320" y2="130" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="295" y="175" font-family="sans-serif" font-size="14" stroke="#f8fafc" stroke-width="4" stroke-linejoin="round" text-anchor="middle">30 cm</text>
  <text x="295" y="175" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">30 cm</text>
</svg>`;

const q5e = questions.find(q => q.id === 'y9-16d-q5e');
if (q5e) q5e.graphData.svg = q5eSvg;

const q5f = questions.find(q => q.id === 'y9-16d-q5f');
if (q5f) q5f.graphData.svg = q5fSvg;

const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');
console.log('Successfully redrew half-cylinders in local file.');

async function runPush() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (const id of ['y9-16d-q5e', 'y9-16d-q5f']) {
    const q = questions.find(q => q.id === id);
    if (q) {
      const ref = db.collection('questions').doc(id);
      await ref.set({ graphData: q.graphData }, { merge: true });
      console.log(`Updated ${id} in Firestore.`);
    }
  }
}
runPush().catch(console.error);
