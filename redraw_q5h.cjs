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

const q5hSvg = `<svg viewBox="0 0 450 300" width="100%" height="auto" style="max-width:450px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/></marker>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#e11d48"/></marker>
    <marker id="arrow-gray" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#475569"/></marker>
  </defs>

  <!-- 1. Bottom cylinder back elements -->
  <path d="M 240 220 A 40 12 0 0 0 160 220" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>

  <!-- 2. Bottom cylinder body -->
  <path d="M 160 100 L 160 220 A 40 12 0 0 0 240 220 L 240 100 Z" fill="#ffffff" stroke="none"/>
  <line x1="160" y1="100" x2="160" y2="220" stroke="#475569" stroke-width="2"/>
  <line x1="240" y1="100" x2="240" y2="220" stroke="#475569" stroke-width="2"/>
  <path d="M 160 220 A 40 12 0 0 0 240 220" fill="none" stroke="#475569" stroke-width="2"/>

  <!-- 3. Top cylinder back elements -->
  <path d="M 300 100 A 100 30 0 0 0 100 100" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>

  <!-- 4. Top cylinder body -->
  <path d="M 100 60 L 100 100 A 100 30 0 0 0 300 100 L 300 60 Z" fill="#ffffff" stroke="none"/>
  <line x1="100" y1="60" x2="100" y2="100" stroke="#475569" stroke-width="2"/>
  <line x1="300" y1="60" x2="300" y2="100" stroke="#475569" stroke-width="2"/>
  <path d="M 100 100 A 100 30 0 0 0 300 100" fill="none" stroke="#475569" stroke-width="2"/>

  <!-- 5. Top cylinder top face -->
  <ellipse cx="200" cy="60" rx="100" ry="30" fill="#fecdd3" stroke="#e11d48" stroke-width="3"/>

  <!-- 6. Dimension Lines and Labels -->
  
  <!-- Top Radius (5 cm) -->
  <circle cx="200" cy="60" r="3" fill="#e11d48"/>
  <line x1="200" y1="60" x2="300" y2="60" stroke="#e11d48" stroke-width="2" marker-end="url(#arrow-red)"/>
  <text x="250" y="52" font-family="sans-serif" font-size="14" stroke="#fecdd3" stroke-width="4" stroke-linejoin="round" text-anchor="middle">5 cm</text>
  <text x="250" y="52" font-family="sans-serif" font-size="14" fill="#e11d48" font-weight="bold" text-anchor="middle">5 cm</text>

  <!-- Bottom Radius (2 cm) -->
  <circle cx="200" cy="220" r="3" fill="#475569"/>
  <line x1="200" y1="220" x2="240" y2="220" stroke="#475569" stroke-width="2" marker-end="url(#arrow-gray)"/>
  <text x="220" y="240" font-family="sans-serif" font-size="14" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" text-anchor="middle">2 cm</text>
  <text x="220" y="240" font-family="sans-serif" font-size="14" fill="#475569" font-weight="bold" text-anchor="middle">2 cm</text>

  <!-- Top Height (2 cm) -->
  <line x1="330" y1="60" x2="330" y2="100" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="350" y="85" font-family="sans-serif" font-size="14" stroke="#f8fafc" stroke-width="4" stroke-linejoin="round" text-anchor="start">2 cm</text>
  <text x="350" y="85" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="start">2 cm</text>

  <!-- Bottom Height (6 cm) -->
  <line x1="330" y1="100" x2="330" y2="220" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="350" y="165" font-family="sans-serif" font-size="14" stroke="#f8fafc" stroke-width="4" stroke-linejoin="round" text-anchor="start">6 cm</text>
  <text x="350" y="165" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="start">6 cm</text>

  <!-- Connection lines for dimensions to make it clear what they measure -->
  <line x1="310" y1="60" x2="340" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="310" y1="100" x2="340" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="250" y1="220" x2="340" y2="220" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2"/>
</svg>`;

const q5h = questions.find(q => q.id === 'y9-16d-q5h');
if (q5h) {
  q5h.graphData.svg = q5hSvg;
  const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filepath, output, 'utf8');
  console.log('Successfully redrew composite cylinder in local file.');

  async function runPush() {
    const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
    initializeApp({ credential: cert(serviceAccount) });
    const db = getFirestore();

    const ref = db.collection('questions').doc('y9-16d-q5h');
    await ref.set({ graphData: q5h.graphData }, { merge: true });
    console.log(`Updated y9-16d-q5h in Firestore.`);
  }
  runPush().catch(console.error);
} else {
  console.log('Failed to find q5h or SVG.');
}
