const fs = require('fs');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

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

function updateQ(id, correctOpt, distractors, solutionSteps, answerIdx = 0, svg = null) {
  const q = questions.find(q => q.id === id);
  if (!q) return;
  q.type = "multiple_choice";
  const opts = [];
  distractors.forEach((d, i) => {
    if (i === answerIdx) opts.push({text: correctOpt, imageUrl: ""});
    opts.push({text: d, imageUrl: ""});
  });
  if (opts.length === distractors.length) opts.push({text: correctOpt, imageUrl: ""});
  q.options = opts.slice(0, 4);
  q.answer = answerIdx;
  q.solution = correctOpt;
  q.solutionSteps = solutionSteps;
  if (svg) q.graphData = { svg: svg };
  else delete q.graphData;
  delete q.opts;
  delete q.requiresManualGrading;
}

// q3a: Rectangular prism (Length=12, Width=10, Height=7)
// Let's draw it as front face 120x70. Base = 120. Height = 70. Depth = 100?
// Actually length is often the longest. Let's make front face width=100, height=70, depth(length)=120.
// Front face: (80, 160) to (180, 160) to (180, 90) to (80, 90)
// dx = 120, dy = -50
// Back face: (200, 110) to (300, 110) to (300, 40) to (200, 40)
const q3a_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Hidden Back edges -->
  <line x1="80" y1="160" x2="200" y2="110" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="200" y1="110" x2="300" y2="110" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="200" y1="110" x2="200" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  
  <!-- Visible Back edges -->
  <line x1="200" y1="40" x2="300" y2="40" stroke="#475569" stroke-width="2"/>
  <line x1="300" y1="40" x2="300" y2="110" stroke="#475569" stroke-width="2"/>
  
  <!-- Connecting Visible edges -->
  <line x1="80" y1="90" x2="200" y2="40" stroke="#475569" stroke-width="2"/>
  <line x1="180" y1="90" x2="300" y2="40" stroke="#475569" stroke-width="2"/>
  <line x1="180" y1="160" x2="300" y2="110" stroke="#475569" stroke-width="2"/>
  
  <!-- Front face -->
  <polygon points="80,160 180,160 180,90 80,90" fill="#dbeafe" stroke="#3b82f6" stroke-width="3" stroke-linejoin="round"/>
  
  <text x="130" y="185" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">Width = 10 cm</text>
  <text x="70" y="130" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="end">Height = 7 cm</text>
  
  <line x1="190" y1="170" x2="310" y2="120" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="260" y="160" font-family="sans-serif" font-size="14" fill="#475569">Length = 12 cm</text>
</svg>`;

updateQ('y9-16d-q3a', "\\( 840 \\text{ cm}^3 \\)", ["\\( 800 \\text{ cm}^3 \\)", "\\( 910 \\text{ cm}^3 \\)", "\\( 720 \\text{ cm}^3 \\)"], [
  { explanation: "The volume of a rectangular prism is length multiplied by width multiplied by height.", workingOut: "\\( V = l \\times w \\times h \\)", graphData: null },
  { explanation: "Substitute the given dimensions: length = 12, width = 10, height = 7.", workingOut: "\\( V = 12 \\times 10 \\times 7 \\)", graphData: null },
  { explanation: "Multiply the values together.", workingOut: "\\( V = 120 \\times 7 = 840 \\)", graphData: null },
  { explanation: "State the final volume.", workingOut: "\\( V = 840 \\text{ cm}^3 \\)", graphData: null }
], 0, q3a_svg);

// q3b: Cube (side 8)
// Front: 100x100. (100, 160) to (200, 160) to (200, 60) to (100, 60)
// dx = 60, dy = -40
const q3b_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Hidden Back edges -->
  <line x1="100" y1="160" x2="160" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="160" y1="120" x2="260" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="160" y1="120" x2="160" y2="20" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  
  <!-- Visible Back edges -->
  <line x1="160" y1="20" x2="260" y2="20" stroke="#475569" stroke-width="2"/>
  <line x1="260" y1="20" x2="260" y2="120" stroke="#475569" stroke-width="2"/>
  
  <!-- Connecting Visible edges -->
  <line x1="100" y1="60" x2="160" y2="20" stroke="#475569" stroke-width="2"/>
  <line x1="200" y1="60" x2="260" y2="20" stroke="#475569" stroke-width="2"/>
  <line x1="200" y1="160" x2="260" y2="120" stroke="#475569" stroke-width="2"/>
  
  <!-- Front face -->
  <polygon points="100,160 200,160 200,60 100,60" fill="#fef08a" stroke="#ca8a04" stroke-width="3" stroke-linejoin="round"/>
  
  <text x="150" y="185" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">8 cm</text>
  <text x="90" y="115" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="end">8 cm</text>
  
  <line x1="210" y1="170" x2="270" y2="130" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="250" y="165" font-family="sans-serif" font-size="14" fill="#475569">8 cm</text>
</svg>`;

updateQ('y9-16d-q3b', "\\( 512 \\text{ cm}^3 \\)", ["\\( 24 \\text{ cm}^3 \\)", "\\( 384 \\text{ cm}^3 \\)", "\\( 64 \\text{ cm}^3 \\)"], [
  { explanation: "The volume of a cube is the side length cubed.", workingOut: "\\( V = s^3 \\)", graphData: null },
  { explanation: "Substitute the given side length \\(s = 8\\).", workingOut: "\\( V = 8^3 \\)", graphData: null },
  { explanation: "Calculate the final volume.", workingOut: "\\( V = 8 \\times 8 \\times 8 = 512 \\text{ cm}^3 \\)", graphData: null }
], 0, q3b_svg);


// q3c: Triangular prism (Base=8, height=6, length=12)
// Front: Triangle. Base 80, height 60. Center at x=140.
// (100, 160) to (180, 160) to (140, 100).
// dx = 120, dy = -50
const q3c_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Hidden Back edges -->
  <line x1="100" y1="160" x2="220" y2="110" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="220" y1="110" x2="300" y2="110" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="220" y1="110" x2="260" y2="50" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  
  <!-- Visible Back edges -->
  <line x1="260" y1="50" x2="300" y2="110" stroke="#475569" stroke-width="2"/>
  
  <!-- Connecting Visible edges -->
  <line x1="140" y1="100" x2="260" y2="50" stroke="#475569" stroke-width="2"/>
  <line x1="180" y1="160" x2="300" y2="110" stroke="#475569" stroke-width="2"/>
  
  <!-- Front face -->
  <polygon points="100,160 180,160 140,100" fill="#bbf7d0" stroke="#22c55e" stroke-width="3" stroke-linejoin="round"/>
  
  <line x1="140" y1="160" x2="140" y2="100" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="135" y="135" font-family="sans-serif" font-size="14" fill="#166534" text-anchor="end">6 cm</text>
  <text x="140" y="185" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">8 cm</text>
  
  <line x1="190" y1="170" x2="310" y2="120" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="260" y="160" font-family="sans-serif" font-size="14" fill="#475569">12 cm</text>
</svg>`;

updateQ('y9-16d-q3c', "\\( 288 \\text{ cm}^3 \\)", ["\\( 576 \\text{ cm}^3 \\)", "\\( 144 \\text{ cm}^3 \\)", "\\( 26 \\text{ cm}^3 \\)"], [
  { explanation: "The volume of a triangular prism is the area of the triangular base multiplied by the length of the prism.", workingOut: "\\( V = A \\times l \\)", graphData: null },
  { explanation: "First, calculate the area of the triangular cross-section.", workingOut: "\\( A = \\frac{1}{2} \\times b \\times h = \\frac{1}{2} \\times 8 \\times 6 = 24 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Now, multiply the area by the length of the prism.", workingOut: "\\( V = 24 \\times 12 \\)", graphData: null },
  { explanation: "Calculate the final volume.", workingOut: "\\( V = 288 \\text{ cm}^3 \\)", graphData: null }
], 0, q3c_svg);

const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');
console.log('Successfully updated q3a, q3b, q3c in local file.');

async function runPush() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (const id of ['y9-16d-q3a', 'y9-16d-q3b', 'y9-16d-q3c']) {
    const q = questions.find(q => q.id === id);
    if (q) {
      const ref = db.collection('questions').doc(id);
      const updateData = { ...q };
      updateData.opts = FieldValue.delete();
      updateData.requiresManualGrading = FieldValue.delete();
      await ref.set(updateData, { merge: true });
      console.log(`Updated ${id} in Firestore.`);
    }
  }
}

runPush().catch(console.error);
