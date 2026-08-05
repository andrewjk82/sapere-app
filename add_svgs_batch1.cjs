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

const q1a_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
    </marker>
  </defs>
  <polygon points="120,50 320,50 320,150 120,150" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="120" y1="50" x2="60" y2="90" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="320" y1="50" x2="260" y2="90" stroke="#475569" stroke-width="2"/>
  <line x1="320" y1="150" x2="260" y2="190" stroke="#475569" stroke-width="2"/>
  <line x1="120" y1="150" x2="60" y2="190" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <polygon points="60,90 260,90 260,190 60,190" fill="#dbeafe" stroke="#3b82f6" stroke-width="3" stroke-linejoin="round"/>
  <text x="160" y="140" font-family="system-ui,sans-serif" font-size="18" font-weight="700" fill="#1e40af" text-anchor="middle">A = 28 cm²</text>
  <line x1="270" y1="200" x2="330" y2="160" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="315" y="195" font-family="system-ui,sans-serif" font-size="16" font-weight="600" fill="#475569">h = 6 cm</text>
</svg>`;

const q1b_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
    </marker>
  </defs>
  <polygon points="120,50 320,50 320,150 120,150" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="120" y1="50" x2="60" y2="90" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="320" y1="50" x2="260" y2="90" stroke="#475569" stroke-width="2"/>
  <line x1="320" y1="150" x2="260" y2="190" stroke="#475569" stroke-width="2"/>
  <line x1="120" y1="150" x2="60" y2="190" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <polygon points="60,90 260,90 260,190 60,190" fill="#dcfce7" stroke="#22c55e" stroke-width="3" stroke-linejoin="round"/>
  <text x="160" y="140" font-family="system-ui,sans-serif" font-size="18" font-weight="700" fill="#166534" text-anchor="middle">A = 35 cm²</text>
  <line x1="270" y1="200" x2="330" y2="160" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="315" y="195" font-family="system-ui,sans-serif" font-size="16" font-weight="600" fill="#475569">d = 9 cm</text>
</svg>`;

const q1c_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
    </marker>
  </defs>
  <polygon points="260,50 340,160 180,160" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="260" y1="50" x2="160" y2="80" stroke="#475569" stroke-width="2"/>
  <line x1="340" y1="160" x2="240" y2="190" stroke="#475569" stroke-width="2"/>
  <line x1="180" y1="160" x2="80" y2="190" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <polygon points="160,80 240,190 80,190" fill="#fee2e2" stroke="#ef4444" stroke-width="3" stroke-linejoin="round"/>
  <text x="160" y="155" font-family="system-ui,sans-serif" font-size="18" font-weight="700" fill="#991b1b" text-anchor="middle">A = 22 cm²</text>
  <line x1="250" y1="200" x2="350" y2="170" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="310" y="200" font-family="system-ui,sans-serif" font-size="16" font-weight="600" fill="#475569">l = 12 cm</text>
</svg>`;

const q1d_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
    </marker>
  </defs>
  <path d="M220,50 Q300,50 320,120 Q340,190 260,190 Q180,190 200,120 Q220,50 220,50" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="220" y1="50" x2="120" y2="80" stroke="#475569" stroke-width="2"/>
  <line x1="320" y1="120" x2="220" y2="150" stroke="#475569" stroke-width="2"/>
  <line x1="260" y1="190" x2="160" y2="220" stroke="#475569" stroke-width="2"/>
  <path d="M120,80 Q200,80 220,150 Q240,220 160,220 Q80,220 100,150 Q120,80 120,80" fill="#fef3c7" stroke="#f59e0b" stroke-width="3" stroke-linejoin="round"/>
  <text x="160" y="160" font-family="system-ui,sans-serif" font-size="18" font-weight="700" fill="#b45309" text-anchor="middle">A = 14 cm²</text>
  <line x1="170" y1="235" x2="270" y2="205" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="240" y="240" font-family="system-ui,sans-serif" font-size="16" font-weight="600" fill="#475569">l = 20 cm</text>
</svg>`;

const q1e_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
    </marker>
  </defs>
  <ellipse cx="280" cy="125" rx="40" ry="90" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="280" y1="35" x2="140" y2="35" stroke="#475569" stroke-width="2"/>
  <line x1="280" y1="215" x2="140" y2="215" stroke="#475569" stroke-width="2"/>
  <ellipse cx="140" cy="125" rx="40" ry="90" fill="#f3e8ff" stroke="#a855f7" stroke-width="3"/>
  <text x="140" y="130" font-family="system-ui,sans-serif" font-size="18" font-weight="700" fill="#6b21a8" text-anchor="middle">A = 85 cm²</text>
  <line x1="140" y1="235" x2="280" y2="235" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="210" y="250" font-family="system-ui,sans-serif" font-size="16" font-weight="600" fill="#475569" text-anchor="middle">h = 8 cm</text>
</svg>`;

const q1f_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
    </marker>
  </defs>
  <path d="M260,190 A60,80 0 0,0 260,30" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="260" y1="190" x2="260" y2="30" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="260" y1="30" x2="120" y2="60" stroke="#475569" stroke-width="2"/>
  <line x1="260" y1="190" x2="120" y2="220" stroke="#475569" stroke-width="2"/>
  <path d="M120,220 A60,80 0 0,0 120,60 Z" fill="#ccfbf1" stroke="#14b8a6" stroke-width="3"/>
  <text x="160" y="145" font-family="system-ui,sans-serif" font-size="18" font-weight="700" fill="#0f766e" text-anchor="middle">A = 30 cm²</text>
  <line x1="130" y1="235" x2="270" y2="205" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="220" y="240" font-family="system-ui,sans-serif" font-size="16" font-weight="600" fill="#475569">l = 16 cm</text>
</svg>`;

const svgs = {
  'y9-16d-q1a': q1a_svg,
  'y9-16d-q1b': q1b_svg,
  'y9-16d-q1c': q1c_svg,
  'y9-16d-q1d': q1d_svg,
  'y9-16d-q1e': q1e_svg,
  'y9-16d-q1f': q1f_svg,
};

for (const id in svgs) {
  const q = questions.find(q => q.id === id);
  if (q) {
    q.graphData = { svg: svgs[id] };
  }
}

const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');
console.log('Successfully added SVG strings to batch 1 local file.');

async function runPush() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  for (const id in svgs) {
    const q = questions.find(q => q.id === id);
    if (q) {
      const ref = db.collection('questions').doc(q.id);
      await ref.set({ graphData: q.graphData }, { merge: true });
      console.log(`Updated graphData for ${q.id} in Firestore.`);
    }
  }
}

runPush().catch(console.error);
