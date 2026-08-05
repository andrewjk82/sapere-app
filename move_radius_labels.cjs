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

  if (id === 'y9-16d-q5e') {
    // Remove the old 8 cm text with halo
    const old8 = `
    <text x="290" y="115" font-family="sans-serif" font-size="14" stroke="#fbcfe8" stroke-width="4" stroke-linejoin="round" text-anchor="middle">8 cm</text>
    <text x="290" y="115" font-family="sans-serif" font-size="14" fill="#9d174d" text-anchor="middle">8 cm</text>
  `;
    const new8 = `
  <circle cx="140" cy="70" r="3" fill="#64748b"/>
  <line x1="140" y1="70" x2="80" y2="70" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="110" y="60" font-family="sans-serif" font-size="14" stroke="#f8fafc" stroke-width="4" stroke-linejoin="round" text-anchor="middle">8 cm</text>
  <text x="110" y="60" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">8 cm</text>
  `;
    // We might have formatted it slightly differently, let's just use regex to remove the texts containing "8 cm"
    svg = svg.replace(/<text[^>]*>8 cm<\/text>/g, '');
    
    // Insert new radius arrow and text before </svg>
    svg = svg.replace('</svg>', `${new8}\n</svg>`);
  }

  if (id === 'y9-16d-q5f') {
    // We might have formatted it slightly differently, let's just use regex to remove the texts containing "20 cm"
    svg = svg.replace(/<text[^>]*>20 cm<\/text>/g, '');
    
    const new20 = `
  <circle cx="170" cy="70" r="3" fill="#64748b"/>
  <line x1="170" y1="70" x2="120" y2="70" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="145" y="60" font-family="sans-serif" font-size="14" stroke="#f8fafc" stroke-width="4" stroke-linejoin="round" text-anchor="middle">20 cm</text>
  <text x="145" y="60" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">20 cm</text>
  `;
    // Insert new radius arrow and text before </svg>
    svg = svg.replace('</svg>', `${new20}\n</svg>`);
  }
  
  q.graphData.svg = svg;
  return true;
}

const u1 = updateSvg('y9-16d-q5e');
const u2 = updateSvg('y9-16d-q5f');

if (u1 || u2) {
  const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filepath, output, 'utf8');
  console.log('Successfully moved radius labels in local file.');
  
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
