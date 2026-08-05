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

function updateSvg(id) {
  const q = questions.find(q => q.id === id);
  if (!q || !q.graphData || !q.graphData.svg) return false;
  
  let svg = q.graphData.svg;
  
  // Replace the bad arrow and text
  const oldArrow = `<line x1="235" y1="70" x2="335" y2="120" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>`;
  const newArrow = `<line x1="250" y1="95" x2="350" y2="145" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>`;
  
  // Replace 12 cm text for q5e
  const old12 = `<text x="310" y="90" font-family="sans-serif" font-size="14" fill="#475569">12 cm</text>`;
  const new12 = `
    <text x="315" y="115" font-family="sans-serif" font-size="14" stroke="#f8fafc" stroke-width="4" stroke-linejoin="round">12 cm</text>
    <text x="315" y="115" font-family="sans-serif" font-size="14" fill="#475569">12 cm</text>
  `;
  
  // Replace 30 cm text for q5f
  const old30 = `<text x="310" y="90" font-family="sans-serif" font-size="14" fill="#475569">30 cm</text>`;
  const new30 = `
    <text x="315" y="115" font-family="sans-serif" font-size="14" stroke="#f8fafc" stroke-width="4" stroke-linejoin="round">30 cm</text>
    <text x="315" y="115" font-family="sans-serif" font-size="14" fill="#475569">30 cm</text>
  `;

  // Halo for the inner text "8 cm" in q5e
  const old8 = `<text x="290" y="115" font-family="sans-serif" font-size="14" fill="#9d174d" text-anchor="middle">8 cm</text>`;
  const new8 = `
    <text x="290" y="115" font-family="sans-serif" font-size="14" stroke="#fbcfe8" stroke-width="4" stroke-linejoin="round" text-anchor="middle">8 cm</text>
    <text x="290" y="115" font-family="sans-serif" font-size="14" fill="#9d174d" text-anchor="middle">8 cm</text>
  `;

  // Halo for the inner text "20 cm" in q5f
  const old20 = `<text x="290" y="115" font-family="sans-serif" font-size="14" fill="#4338ca" text-anchor="middle">20 cm</text>`;
  const new20 = `
    <text x="290" y="115" font-family="sans-serif" font-size="14" stroke="#e0e7ff" stroke-width="4" stroke-linejoin="round" text-anchor="middle">20 cm</text>
    <text x="290" y="115" font-family="sans-serif" font-size="14" fill="#4338ca" text-anchor="middle">20 cm</text>
  `;

  svg = svg.replace(oldArrow, newArrow);
  svg = svg.replace(old12, new12);
  svg = svg.replace(old30, new30);
  svg = svg.replace(old8, new8);
  svg = svg.replace(old20, new20);
  
  q.graphData.svg = svg;
  return true;
}

const u1 = updateSvg('y9-16d-q5e');
const u2 = updateSvg('y9-16d-q5f');

if (u1 && u2) {
  const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filepath, output, 'utf8');
  console.log('Successfully updated q5e and q5f SVGs in local file.');
  
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
} else {
  console.log('Failed to update one or both questions.');
}
