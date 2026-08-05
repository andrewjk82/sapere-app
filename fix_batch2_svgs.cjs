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

// q3d: Trapezoidal Prism
// Front: (50,200), (250,200), (210,120), (90,120)
// dx=80, dy=-40
const q3d_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Hidden Back edges -->
  <line x1="130" y1="160" x2="330" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="130" y1="160" x2="170" y2="80" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="50" y1="200" x2="130" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Visible Back edges -->
  <line x1="170" y1="80" x2="290" y2="80" stroke="#475569" stroke-width="2"/>
  <line x1="290" y1="80" x2="330" y2="160" stroke="#475569" stroke-width="2"/>
  <!-- Connecting Visible edges -->
  <line x1="250" y1="200" x2="330" y2="160" stroke="#475569" stroke-width="2"/>
  <line x1="90" y1="120" x2="170" y2="80" stroke="#475569" stroke-width="2"/>
  <line x1="210" y1="120" x2="290" y2="80" stroke="#475569" stroke-width="2"/>
  <!-- Front face -->
  <polygon points="50,200 250,200 210,120 90,120" fill="#dbeafe" stroke="#3b82f6" stroke-width="3" stroke-linejoin="round"/>
  
  <text x="150" y="110" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">15 cm</text>
  <text x="150" y="215" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">25 cm</text>
  <line x1="90" y1="200" x2="90" y2="120" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="50" y="165" font-family="sans-serif" font-size="14" fill="#1d4ed8">h = 10</text>
  
  <line x1="260" y1="210" x2="340" y2="170" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="310" y="200" font-family="sans-serif" font-size="14" fill="#475569">40 cm</text>
</svg>`;

// q3e: Stepped block
// Front: 1(60,200), 2(220,200), 3(220,110), 4(120,110), 5(120,80), 6(60,80)
// dx=80, dy=-40
const q3e_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Hidden Back edges -->
  <line x1="140" y1="160" x2="300" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="140" y1="160" x2="140" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="60" y1="200" x2="140" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Visible Back edges -->
  <line x1="300" y1="160" x2="300" y2="70" stroke="#475569" stroke-width="2"/>
  <line x1="300" y1="70" x2="200" y2="70" stroke="#475569" stroke-width="2"/>
  <line x1="200" y1="70" x2="200" y2="40" stroke="#475569" stroke-width="2"/>
  <line x1="200" y1="40" x2="140" y2="40" stroke="#475569" stroke-width="2"/>
  <!-- Connecting Visible edges -->
  <line x1="220" y1="200" x2="300" y2="160" stroke="#475569" stroke-width="2"/>
  <line x1="220" y1="110" x2="300" y2="70" stroke="#475569" stroke-width="2"/>
  <line x1="120" y1="110" x2="200" y2="70" stroke="#475569" stroke-width="2"/>
  <line x1="120" y1="80" x2="200" y2="40" stroke="#475569" stroke-width="2"/>
  <line x1="60" y1="80" x2="140" y2="40" stroke="#475569" stroke-width="2"/>
  <!-- Front face -->
  <polygon points="60,200 220,200 220,110 120,110 120,80 60,80" fill="#dcfce7" stroke="#22c55e" stroke-width="3" stroke-linejoin="round"/>
  
  <text x="140" y="215" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">Width = 16 cm</text>
  <text x="45" y="140" font-family="sans-serif" font-size="14" fill="#475569" transform="rotate(-90 45 140)" text-anchor="middle">Height = 12 cm</text>
  
  <line x1="230" y1="210" x2="310" y2="170" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="280" y="200" font-family="sans-serif" font-size="14" fill="#475569">Length = 14 cm</text>
</svg>`;

// q3f: U-shaped channel block
// Front: 1(60,180), 2(190,180), 3(190,120), 4(140,120), 5(140,150), 6(110,150), 7(110,120), 8(60,120)
// To clear the right arm, dx=120, dy=-30.
// Back: 1b(180,150), 2b(310,150), 3b(310,90), 4b(260,90), 5b(260,120), 6b(230,120), 7b(230,90), 8b(180,90)
const q3f_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Hidden Back edges -->
  <line x1="180" y1="150" x2="310" y2="150" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="180" y1="150" x2="180" y2="90" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="60" y1="180" x2="180" y2="150" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Visible Back edges -->
  <line x1="310" y1="150" x2="310" y2="90" stroke="#475569" stroke-width="2"/>
  <line x1="310" y1="90" x2="260" y2="90" stroke="#475569" stroke-width="2"/>
  <line x1="260" y1="90" x2="260" y2="120" stroke="#475569" stroke-width="2"/>
  <line x1="260" y1="120" x2="230" y2="120" stroke="#475569" stroke-width="2"/>
  <line x1="230" y1="120" x2="230" y2="90" stroke="#475569" stroke-width="2"/>
  <line x1="230" y1="90" x2="180" y2="90" stroke="#475569" stroke-width="2"/>
  <!-- Connecting Visible edges -->
  <line x1="190" y1="180" x2="310" y2="150" stroke="#475569" stroke-width="2"/>
  <line x1="190" y1="120" x2="310" y2="90" stroke="#475569" stroke-width="2"/>
  <line x1="140" y1="120" x2="260" y2="90" stroke="#475569" stroke-width="2"/>
  <line x1="140" y1="150" x2="260" y2="120" stroke="#475569" stroke-width="2"/>
  <line x1="110" y1="150" x2="230" y2="120" stroke="#475569" stroke-width="2"/>
  <line x1="110" y1="120" x2="230" y2="90" stroke="#475569" stroke-width="2"/>
  <line x1="60" y1="120" x2="180" y2="90" stroke="#475569" stroke-width="2"/>
  <!-- Front face -->
  <polygon points="60,180 190,180 190,120 140,120 140,150 110,150 110,120 60,120" fill="#fef3c7" stroke="#f59e0b" stroke-width="3" stroke-linejoin="round"/>
  
  <text x="125" y="195" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">Width = 30 cm</text>
  <text x="45" y="150" font-family="sans-serif" font-size="14" fill="#475569" transform="rotate(-90 45 150)" text-anchor="middle">Height = 12</text>
  
  <line x1="200" y1="195" x2="320" y2="165" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="270" y="195" font-family="sans-serif" font-size="14" fill="#475569">Length = 10 cm</text>
</svg>`;

// q3g: Right-angled triangular prism
// Front: (80,180), (220,180), (80,80)
// dx=100, dy=-50
// Back: (180,130), (320,130), (180,30)
const q3g_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Hidden Back edges -->
  <line x1="180" y1="130" x2="320" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="180" y1="130" x2="180" y2="30" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="80" y1="180" x2="180" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Visible Back edges -->
  <line x1="180" y1="30" x2="320" y2="130" stroke="#475569" stroke-width="2"/>
  <!-- Connecting Visible edges -->
  <line x1="80" y1="80" x2="180" y2="30" stroke="#475569" stroke-width="2"/>
  <line x1="220" y1="180" x2="320" y2="130" stroke="#475569" stroke-width="2"/>
  <!-- Front face -->
  <polygon points="80,180 220,180 80,80" fill="#fee2e2" stroke="#ef4444" stroke-width="3" stroke-linejoin="round"/>
  <rect x="80" y="170" width="10" height="10" fill="none" stroke="#ef4444" stroke-width="1.5"/>
  
  <text x="65" y="130" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="end">30 cm</text>
  <text x="150" y="195" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">40 cm</text>
  <line x1="230" y1="190" x2="330" y2="140" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="290" y="180" font-family="sans-serif" font-size="14" fill="#475569">80 cm</text>
</svg>`;

// q3h: Triangular prism (isosceles-like)
// Front: (60,180), (200,180), (130,80)
// dx=120, dy=-40
// Back: (180,140), (320,140), (250,40)
const q3h_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Hidden Back edges -->
  <line x1="180" y1="140" x2="320" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="180" y1="140" x2="250" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="60" y1="180" x2="180" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Visible Back edges -->
  <line x1="320" y1="140" x2="250" y2="40" stroke="#475569" stroke-width="2"/>
  <!-- Connecting Visible edges -->
  <line x1="200" y1="180" x2="320" y2="140" stroke="#475569" stroke-width="2"/>
  <line x1="130" y1="80" x2="250" y2="40" stroke="#475569" stroke-width="2"/>
  <!-- Front face -->
  <polygon points="60,180 200,180 130,80" fill="#e0e7ff" stroke="#6366f1" stroke-width="3" stroke-linejoin="round"/>
  
  <line x1="130" y1="180" x2="130" y2="80" stroke="#6366f1" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="115" y="140" font-family="sans-serif" font-size="14" fill="#4338ca" text-anchor="end">h=15</text>
  <text x="130" y="195" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">Base = 16 mm</text>
  
  <line x1="210" y1="190" x2="330" y2="150" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="280" y="190" font-family="sans-serif" font-size="14" fill="#475569">120 mm</text>
</svg>`;

// q3i: Trapezoidal prism
// Front: (100,180), (220,180), (200,120), (120,120)
// dx=100, dy=-40
const q3i_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Hidden Back edges -->
  <line x1="200" y1="140" x2="320" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="200" y1="140" x2="220" y2="80" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="100" y1="180" x2="200" y2="140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Visible Back edges -->
  <line x1="220" y1="80" x2="300" y2="80" stroke="#475569" stroke-width="2"/>
  <line x1="300" y1="80" x2="320" y2="140" stroke="#475569" stroke-width="2"/>
  <!-- Connecting Visible edges -->
  <line x1="220" y1="180" x2="320" y2="140" stroke="#475569" stroke-width="2"/>
  <line x1="200" y1="120" x2="300" y2="80" stroke="#475569" stroke-width="2"/>
  <line x1="120" y1="120" x2="220" y2="80" stroke="#475569" stroke-width="2"/>
  <!-- Front face -->
  <polygon points="100,180 220,180 200,120 120,120" fill="#fce7f3" stroke="#ec4899" stroke-width="3" stroke-linejoin="round"/>
  
  <text x="160" y="110" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">4 cm</text>
  <text x="160" y="195" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">6 cm</text>
  <line x1="120" y1="180" x2="120" y2="120" stroke="#ec4899" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="110" y="155" font-family="sans-serif" font-size="14" fill="#be185d" text-anchor="end">h=2</text>
  
  <line x1="230" y1="190" x2="330" y2="150" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="290" y="190" font-family="sans-serif" font-size="14" fill="#475569">12 cm</text>
</svg>`;

// q3j: Hexagonal prism
// Front: 1(100,140), 2(130,190), 3(190,190), 4(220,140), 5(190,90), 6(130,90)
// dx=100, dy=-30
// Back: 1b(200,110), 2b(230,160), 3b(290,160), 4b(320,110), 5b(290,60), 6b(230,60)
const q3j_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Hidden Back edges -->
  <line x1="200" y1="110" x2="230" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="230" y1="160" x2="290" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="200" y1="110" x2="230" y2="60" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  
  <line x1="100" y1="140" x2="200" y2="110" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="130" y1="190" x2="230" y2="160" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Visible Back edges -->
  <line x1="290" y1="160" x2="320" y2="110" stroke="#475569" stroke-width="2"/>
  <line x1="320" y1="110" x2="290" y2="60" stroke="#475569" stroke-width="2"/>
  <line x1="290" y1="60" x2="230" y2="60" stroke="#475569" stroke-width="2"/>
  <!-- Connecting Visible edges -->
  <line x1="190" y1="190" x2="290" y2="160" stroke="#475569" stroke-width="2"/>
  <line x1="220" y1="140" x2="320" y2="110" stroke="#475569" stroke-width="2"/>
  <line x1="190" y1="90" x2="290" y2="60" stroke="#475569" stroke-width="2"/>
  <line x1="130" y1="90" x2="230" y2="60" stroke="#475569" stroke-width="2"/>
  <!-- Front face -->
  <polygon points="100,140 130,190 190,190 220,140 190,90 130,90" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="3" stroke-linejoin="round"/>
  
  <text x="160" y="80" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">5 cm</text>
  <line x1="100" y1="140" x2="220" y2="140" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="160" y="135" font-family="sans-serif" font-size="14" fill="#0284c7" text-anchor="middle">10 cm</text>
  
  <line x1="200" y1="195" x2="300" y2="165" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="260" y="195" font-family="sans-serif" font-size="14" fill="#475569">14 cm</text>
</svg>`;

const fixes = {
  'y9-16d-q3d': q3d_svg,
  'y9-16d-q3e': q3e_svg,
  'y9-16d-q3f': q3f_svg,
  'y9-16d-q3g': q3g_svg,
  'y9-16d-q3h': q3h_svg,
  'y9-16d-q3i': q3i_svg,
  'y9-16d-q3j': q3j_svg,
};

for (const id in fixes) {
  const q = questions.find(q => q.id === id);
  if (q) {
    q.graphData = { svg: fixes[id] };
  }
}

const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');
console.log('Successfully updated batch 2 SVGs in local file.');

async function runPush() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (const id in fixes) {
    const q = questions.find(q => q.id === id);
    if (q) {
      const ref = db.collection('questions').doc(q.id);
      await ref.set({ graphData: q.graphData }, { merge: true });
      console.log(`Updated graphData for ${q.id} in Firestore.`);
    }
  }
}

runPush().catch(console.error);
