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

  // Add marker definition for yellow arrow
  const oldDefs = '<defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/></marker></defs>';
  const newDefs = `<defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/></marker>
    <marker id="arrow-yellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#ca8a04"/></marker>
  </defs>`;
  svg = svg.replace(oldDefs, newDefs);

  // Remove the old 270° text and angle arc
  svg = svg.replace(/<text[^>]*270°<\/text>/g, '');
  svg = svg.replace('<path d="M 195 65 A 15 6 0 1 0 215 75" fill="none" stroke="#ca8a04" stroke-width="1.5"/>', '');
  
  // Remove the old 4 cm text (including any halo if it exists)
  svg = svg.replace(/<text[^>]*4 cm<\/text>/g, '');

  // Add the new 270° arc on the solid face
  const newArc = `<path d="M 215 80 A 15 6 0 1 1 200 74" fill="none" stroke="#ca8a04" stroke-width="1.5" marker-end="url(#arrow-yellow)"/>`;
  
  // Add the new 270° text
  const new270Text = `
  <text x="170" y="100" font-family="sans-serif" font-size="14" stroke="#fde047" stroke-width="4" stroke-linejoin="round" text-anchor="middle">270°</text>
  <text x="170" y="100" font-family="sans-serif" font-size="14" fill="#a16207" font-weight="bold" text-anchor="middle">270°</text>
  `;
  
  // Add the new 4 cm text
  const new4cm = `
  <text x="225" y="72" font-family="sans-serif" font-size="14" stroke="#f8fafc" stroke-width="4" stroke-linejoin="round" text-anchor="middle">4 cm</text>
  <text x="225" y="72" font-family="sans-serif" font-size="14" fill="#a16207" text-anchor="middle">4 cm</text>
  `;

  // We append these right before </svg>
  svg = svg.replace('</svg>', `  ${newArc}\n  ${new270Text}\n  ${new4cm}\n</svg>`);
  
  q5g.graphData.svg = svg;
  
  const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(filepath, output, 'utf8');
  console.log('Successfully updated 270 degree arc in local file.');
  
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
