const fs = require('fs');
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');

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

const basicDefs = `<defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/></marker></defs>`;

// q5b: Vertical Cylinder
const q5b_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Bottom back arc (hidden) -->
  <path d="M 140 210 A 60 20 0 0 1 260 210" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Bottom front arc (visible) -->
  <path d="M 140 210 A 60 20 0 0 0 260 210" fill="none" stroke="#475569" stroke-width="2"/>
  <!-- Sides -->
  <line x1="140" y1="60" x2="140" y2="210" stroke="#475569" stroke-width="2"/>
  <line x1="260" y1="60" x2="260" y2="210" stroke="#475569" stroke-width="2"/>
  <!-- Top circle -->
  <ellipse cx="200" cy="60" rx="60" ry="20" fill="#bfdbfe" stroke="#3b82f6" stroke-width="3"/>
  <line x1="200" y1="60" x2="260" y2="60" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="230" y="55" font-family="sans-serif" font-size="14" fill="#1d4ed8" text-anchor="middle">10 cm</text>
  
  <line x1="280" y1="60" x2="280" y2="210" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="290" y="140" font-family="sans-serif" font-size="14" fill="#475569">15 cm</text>
</svg>`;

updateQ('y9-16d-q5b', "\\( 4712.39 \\text{ cm}^3 \\)", ["\\( 4510.50 \\text{ cm}^3 \\)", "\\( 4920.80 \\text{ cm}^3 \\)", "\\( 4280.12 \\text{ cm}^3 \\)"], [
  { explanation: "State the formula for the volume of a cylinder.", workingOut: "\\( V = \\pi r^2 h \\)", graphData: null },
  { explanation: "Substitute the given radius \\(r = 10\\) and height \\(h = 15\\).", workingOut: "\\( V = \\pi \\times 10^2 \\times 15 \\)", graphData: null },
  { explanation: "Square the radius and multiply.", workingOut: "\\( V = \\pi \\times 100 \\times 15 = 1500\\pi \\)", graphData: null },
  { explanation: "Calculate the decimal value and round to two decimal places.", workingOut: "\\( V \\approx 4712.389... \\rightarrow 4712.39 \\text{ cm}^3 \\)", graphData: null }
], 0, q5b_svg);

// q5c: Horizontal Cylinder
const q5c_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Left back arc (hidden) -->
  <path d="M 120 200 A 30 70 0 0 1 120 60" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Left front arc (visible) -->
  <path d="M 120 60 A 30 70 0 0 1 120 200" fill="none" stroke="#475569" stroke-width="2"/>
  <!-- Sides -->
  <line x1="120" y1="60" x2="260" y2="60" stroke="#475569" stroke-width="2"/>
  <line x1="120" y1="200" x2="260" y2="200" stroke="#475569" stroke-width="2"/>
  <!-- Right circle (front face) -->
  <ellipse cx="260" cy="130" rx="30" ry="70" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
  <line x1="260" y1="130" x2="260" y2="60" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="275" y="100" font-family="sans-serif" font-size="14" fill="#a16207" text-anchor="middle">8 cm</text>
  
  <line x1="120" y1="220" x2="260" y2="220" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="190" y="240" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">10 cm</text>
</svg>`;

updateQ('y9-16d-q5c', "\\( 2010.62 \\text{ cm}^3 \\)", ["\\( 1820.50 \\text{ cm}^3 \\)", "\\( 2240.80 \\text{ cm}^3 \\)", "\\( 1680.12 \\text{ cm}^3 \\)"], [
  { explanation: "State the formula for the volume of a cylinder.", workingOut: "\\( V = \\pi r^2 l \\)", graphData: null },
  { explanation: "Substitute the given radius \\(r = 8\\) and length \\(l = 10\\).", workingOut: "\\( V = \\pi \\times 8^2 \\times 10 \\)", graphData: null },
  { explanation: "Square the radius and multiply.", workingOut: "\\( V = \\pi \\times 64 \\times 10 = 640\\pi \\)", graphData: null },
  { explanation: "Calculate the decimal value and round to two decimal places.", workingOut: "\\( V \\approx 2010.619... \\rightarrow 2010.62 \\text{ cm}^3 \\)", graphData: null }
], 0, q5c_svg);

// q5d: Horizontal Cylinder
const q5d_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Left back arc (hidden) -->
  <path d="M 80 160 A 15 40 0 0 1 80 80" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Left front arc (visible) -->
  <path d="M 80 80 A 15 40 0 0 1 80 160" fill="none" stroke="#475569" stroke-width="2"/>
  <!-- Sides -->
  <line x1="80" y1="80" x2="320" y2="80" stroke="#475569" stroke-width="2"/>
  <line x1="80" y1="160" x2="320" y2="160" stroke="#475569" stroke-width="2"/>
  <!-- Right circle (front face) -->
  <ellipse cx="320" cy="120" rx="15" ry="40" fill="#bbf7d0" stroke="#22c55e" stroke-width="3"/>
  <line x1="320" y1="120" x2="320" y2="80" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="345" y="105" font-family="sans-serif" font-size="14" fill="#166534" text-anchor="middle">2 cm</text>
  
  <line x1="80" y1="180" x2="320" y2="180" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="200" y="200" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">20 cm</text>
</svg>`;

updateQ('y9-16d-q5d', "\\( 251.33 \\text{ cm}^3 \\)", ["\\( 220.45 \\text{ cm}^3 \\)", "\\( 280.12 \\text{ cm}^3 \\)", "\\( 198.88 \\text{ cm}^3 \\)"], [
  { explanation: "State the formula for the volume of a cylinder.", workingOut: "\\( V = \\pi r^2 l \\)", graphData: null },
  { explanation: "Substitute the given radius \\(r = 2\\) and length \\(l = 20\\).", workingOut: "\\( V = \\pi \\times 2^2 \\times 20 \\)", graphData: null },
  { explanation: "Square the radius and multiply.", workingOut: "\\( V = \\pi \\times 4 \\times 20 = 80\\pi \\)", graphData: null },
  { explanation: "Calculate the decimal value and round to two decimal places.", workingOut: "\\( V \\approx 251.327... \\rightarrow 251.33 \\text{ cm}^3 \\)", graphData: null }
], 0, q5d_svg);


// q5e: Half-cylinder
const q5e_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Back half-circle hidden bottom straight edge -->
  <line x1="220" y1="70" x2="100" y2="70" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Back half-circle visible top arc -->
  <path d="M 100 70 A 60 40 0 0 1 220 70" fill="none" stroke="#475569" stroke-width="2"/>
  
  <!-- Connecting depth edges -->
  <!-- Top edge -->
  <line x1="160" y1="30" x2="260" y2="80" stroke="#475569" stroke-width="2"/>
  <!-- Left edge (dashed) -->
  <line x1="100" y1="70" x2="200" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Right edge (solid) -->
  <line x1="220" y1="70" x2="320" y2="120" stroke="#475569" stroke-width="2"/>
  
  <!-- Front half-circle -->
  <path d="M 200 120 A 60 40 0 0 1 320 120 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/>
  <line x1="260" y1="120" x2="320" y2="120" stroke="#db2777" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="290" y="115" font-family="sans-serif" font-size="14" fill="#9d174d" text-anchor="middle">8 cm</text>
  
  <line x1="235" y1="70" x2="335" y2="120" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="310" y="90" font-family="sans-serif" font-size="14" fill="#475569">12 cm</text>
</svg>`;

updateQ('y9-16d-q5e', "\\( 1206.37 \\text{ cm}^3 \\)", ["\\( 1105.50 \\text{ cm}^3 \\)", "\\( 1312.80 \\text{ cm}^3 \\)", "\\( 2412.74 \\text{ cm}^3 \\)"], [
  { explanation: "The volume of a half-cylinder is half the volume of a full cylinder.", workingOut: "\\( V = \\frac{1}{2} \\pi r^2 l \\)", graphData: null },
  { explanation: "Substitute the given radius \\(r = 8\\) and length \\(l = 12\\).", workingOut: "\\( V = \\frac{1}{2} \\pi (8^2)(12) \\)", graphData: null },
  { explanation: "Square the radius and multiply.", workingOut: "\\( V = \\frac{1}{2} \\pi (64)(12) = \\frac{1}{2} \\times 768\\pi = 384\\pi \\)", graphData: null },
  { explanation: "Calculate the decimal value and round to two decimal places.", workingOut: "\\( V \\approx 1206.371... \\rightarrow 1206.37 \\text{ cm}^3 \\)", graphData: null }
], 0, q5e_svg);


// q5f: Half-cylinder
const q5f_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Back half-circle hidden bottom straight edge -->
  <line x1="220" y1="70" x2="100" y2="70" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Back half-circle visible top arc -->
  <path d="M 100 70 A 60 40 0 0 1 220 70" fill="none" stroke="#475569" stroke-width="2"/>
  
  <!-- Connecting depth edges -->
  <!-- Top edge -->
  <line x1="160" y1="30" x2="260" y2="80" stroke="#475569" stroke-width="2"/>
  <!-- Left edge (dashed) -->
  <line x1="100" y1="70" x2="200" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Right edge (solid) -->
  <line x1="220" y1="70" x2="320" y2="120" stroke="#475569" stroke-width="2"/>
  
  <!-- Front half-circle -->
  <path d="M 200 120 A 60 40 0 0 1 320 120 Z" fill="#e0e7ff" stroke="#6366f1" stroke-width="3"/>
  <line x1="260" y1="120" x2="320" y2="120" stroke="#6366f1" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="290" y="115" font-family="sans-serif" font-size="14" fill="#4338ca" text-anchor="middle">20 cm</text>
  
  <line x1="235" y1="70" x2="335" y2="120" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="310" y="90" font-family="sans-serif" font-size="14" fill="#475569">30 cm</text>
</svg>`;

updateQ('y9-16d-q5f', "\\( 18849.56 \\text{ cm}^3 \\)", ["\\( 16450.20 \\text{ cm}^3 \\)", "\\( 37699.11 \\text{ cm}^3 \\)", "\\( 15400.12 \\text{ cm}^3 \\)"], [
  { explanation: "The volume of a half-cylinder is half the volume of a full cylinder.", workingOut: "\\( V = \\frac{1}{2} \\pi r^2 l \\)", graphData: null },
  { explanation: "Substitute the given radius \\(r = 20\\) and length \\(l = 30\\).", workingOut: "\\( V = \\frac{1}{2} \\pi (20^2)(30) \\)", graphData: null },
  { explanation: "Square the radius and multiply.", workingOut: "\\( V = \\frac{1}{2} \\pi (400)(30) = \\frac{1}{2} \\times 12000\\pi = 6000\\pi \\)", graphData: null },
  { explanation: "Calculate the decimal value and round to two decimal places.", workingOut: "\\( V \\approx 18849.555... \\rightarrow 18849.56 \\text{ cm}^3 \\)", graphData: null }
], 0, q5f_svg);

// q5g: 270-degree cylinder sector block
const q5g_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Bottom pacman (hidden and visible arcs) -->
  <path d="M 200 200 L 250 200 A 50 20 0 1 1 200 180 Z" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <path d="M 200 200 L 250 200 A 50 20 0 0 1 150 200" fill="none" stroke="#475569" stroke-width="2"/>
  
  <!-- Vertical edges -->
  <!-- Inner center edge (Solid) -->
  <line x1="200" y1="80" x2="200" y2="200" stroke="#475569" stroke-width="2"/>
  <!-- Right cut edge (Solid) -->
  <line x1="250" y1="80" x2="250" y2="200" stroke="#475569" stroke-width="2"/>
  <!-- Top cut edge (Hidden? No, the slice is taken out from the top right quadrant in 3D perspective. Wait, if pacman mouth is open to top right...) -->
  <!-- Let's just draw the top face solid pacman, and connect outer bounds -->
  <line x1="150" y1="80" x2="150" y2="200" stroke="#475569" stroke-width="2"/>
  
  <!-- Top pacman -->
  <path d="M 200 80 L 250 80 A 50 20 0 1 1 200 60 Z" fill="#fde047" stroke="#ca8a04" stroke-width="3" stroke-linejoin="round"/>
  <text x="215" y="75" font-family="sans-serif" font-size="12" fill="#a16207">r=4</text>
  
  <line x1="260" y1="80" x2="260" y2="200" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="270" y="145" font-family="sans-serif" font-size="14" fill="#475569">h=2</text>
  <text x="110" y="60" font-family="sans-serif" font-size="14" fill="#ca8a04" font-weight="bold">270°</text>
  <path d="M 195 65 A 15 6 0 1 0 215 75" fill="none" stroke="#ca8a04" stroke-width="1.5"/>
</svg>`;

updateQ('y9-16d-q5g', "\\( 75.40 \\text{ cm}^3 \\)", ["\\( 68.50 \\text{ cm}^3 \\)", "\\( 100.53 \\text{ cm}^3 \\)", "\\( 58.12 \\text{ cm}^3 \\)"], [
  { explanation: "The volume of a sector block is a fraction of a full cylinder. A 270-degree sector is \\(\\frac{270}{360} = \\frac{3}{4}\\) of a cylinder.", workingOut: "\\( V = \\frac{3}{4} \\pi r^2 h \\)", graphData: null },
  { explanation: "Substitute the given radius \\(r = 4\\) and height \\(h = 2\\).", workingOut: "\\( V = \\frac{3}{4} \\pi (4^2)(2) \\)", graphData: null },
  { explanation: "Square the radius and multiply.", workingOut: "\\( V = \\frac{3}{4} \\pi (16)(2) = \\frac{3}{4} \\times 32\\pi = 24\\pi \\)", graphData: null },
  { explanation: "Calculate the decimal value and round to two decimal places.", workingOut: "\\( V \\approx 75.398... \\rightarrow 75.40 \\text{ cm}^3 \\)", graphData: null }
], 0, q5g_svg);


// q5h: Composite cylinders
const q5h_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Bottom cylinder (Radius 2, Height 6) -->
  <!-- Bottom back arc (hidden) -->
  <path d="M 170 200 A 30 10 0 0 1 230 200" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Bottom front arc (visible) -->
  <path d="M 170 200 A 30 10 0 0 0 230 200" fill="none" stroke="#475569" stroke-width="2"/>
  <line x1="170" y1="100" x2="170" y2="200" stroke="#475569" stroke-width="2"/>
  <line x1="230" y1="100" x2="230" y2="200" stroke="#475569" stroke-width="2"/>
  <!-- Inner top arc of bottom cylinder is hidden under the top cylinder -->
  
  <line x1="240" y1="100" x2="240" y2="200" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="250" y="155" font-family="sans-serif" font-size="14" fill="#475569">h=6</text>
  <text x="180" y="225" font-family="sans-serif" font-size="14" fill="#475569">r=2</text>
  <line x1="170" y1="210" x2="200" y2="210" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Top cylinder (Radius 5, Height 2) -->
  <path d="M 125 100 A 75 25 0 0 1 275 100" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <path d="M 125 100 A 75 25 0 0 0 275 100" fill="none" stroke="#475569" stroke-width="2"/>
  <line x1="125" y1="60" x2="125" y2="100" stroke="#475569" stroke-width="2"/>
  <line x1="275" y1="60" x2="275" y2="100" stroke="#475569" stroke-width="2"/>
  <ellipse cx="200" cy="60" rx="75" ry="25" fill="#fecaca" stroke="#ef4444" stroke-width="3"/>
  <line x1="200" y1="60" x2="275" y2="60" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="235" y="55" font-family="sans-serif" font-size="14" fill="#b91c1c">r=5</text>
  
  <line x1="290" y1="60" x2="290" y2="100" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="300" y="85" font-family="sans-serif" font-size="14" fill="#475569">h=2</text>
</svg>`;

updateQ('y9-16d-q5h', "\\( 232.48 \\text{ cm}^3 \\)", ["\\( 212.50 \\text{ cm}^3 \\)", "\\( 248.80 \\text{ cm}^3 \\)", "\\( 307.88 \\text{ cm}^3 \\)"], [
  { explanation: "The total volume is the sum of the volumes of the top and bottom cylinders.", workingOut: "\\( V_{\\text{total}} = V_{\\text{top}} + V_{\\text{bottom}} \\)", graphData: null },
  { explanation: "Calculate the volume of the top cylinder (radius 5, height 2).", workingOut: "\\( V_{\\text{top}} = \\pi (5^2)(2) = \\pi (25)(2) = 50\\pi \\)", graphData: null },
  { explanation: "Calculate the volume of the bottom cylinder (radius 2, height 6).", workingOut: "\\( V_{\\text{bottom}} = \\pi (2^2)(6) = \\pi (4)(6) = 24\\pi \\)", graphData: null },
  { explanation: "Add the two volumes together and round to two decimal places.", workingOut: "\\( V_{\\text{total}} = 50\\pi + 24\\pi = 74\\pi \\approx 232.477... \\rightarrow 232.48 \\text{ cm}^3 \\)", graphData: null }
], 0, q5h_svg);

// The remaining questions (6a, 6b, 6c, 6d) are algebra word problems without graphs.

updateQ('y9-16d-q6a', "\\( 3.98 \\text{ cm} \\)", ["\\( 4.12 \\text{ cm} \\)", "\\( 15.92 \\text{ cm} \\)", "\\( 4.50 \\text{ cm} \\)"], [
  { explanation: "State the formula for the volume of a cylinder.", workingOut: "\\( V = \\pi r^2 h \\)", graphData: null },
  { explanation: "Substitute the given volume and radius.", workingOut: "\\( 200 = \\pi (4^2) h \\)", graphData: null },
  { explanation: "Rearrange to solve for height \\(h\\).", workingOut: "\\( h = \\frac{200}{16\\pi} \\)", graphData: null },
  { explanation: "Calculate and round to two decimal places.", workingOut: "\\( h \\approx 3.978... \\rightarrow 3.98 \\text{ cm} \\)", graphData: null }
]);

updateQ('y9-16d-q6b', "\\( 3.86 \\text{ cm} \\)", ["\\( 4.12 \\text{ cm} \\)", "\\( 14.92 \\text{ cm} \\)", "\\( 4.45 \\text{ cm} \\)"], [
  { explanation: "State the formula for the volume of a cylinder.", workingOut: "\\( V = \\pi r^2 h \\)", graphData: null },
  { explanation: "Substitute the given volume and height.", workingOut: "\\( 375 = \\pi r^2 (8) \\)", graphData: null },
  { explanation: "Rearrange to solve for \\(r^2\\).", workingOut: "\\( r^2 = \\frac{375}{8\\pi} \\)", graphData: null },
  { explanation: "Take the square root to find \\(r\\) and round to two decimal places.", workingOut: "\\( r = \\sqrt{\\frac{375}{8\\pi}} \\approx 3.862... \\rightarrow 3.86 \\text{ cm} \\)", graphData: null }
]);

updateQ('y9-16d-q6c', "\\( 6.83 \\text{ cm} \\)", ["\\( 7.12 \\text{ cm} \\)", "\\( 17.84 \\text{ cm} \\)", "\\( 7.50 \\text{ cm} \\)"], [
  { explanation: "We are given that the radius \\(r\\) is equal to the height \\(h\\). Substitute \\(r = h\\) into the cylinder volume formula.", workingOut: "\\( V = \\pi r^2 h = \\pi (h)^2 h = \\pi h^3 \\)", graphData: null },
  { explanation: "Substitute the given volume.", workingOut: "\\( 1000 = \\pi h^3 \\)", graphData: null },
  { explanation: "Rearrange to solve for \\(h^3\\).", workingOut: "\\( h^3 = \\frac{1000}{\\pi} \\)", graphData: null },
  { explanation: "Take the cube root to find \\(h\\) and round to two decimal places.", workingOut: "\\( h = \\sqrt[3]{\\frac{1000}{\\pi}} \\approx 6.827... \\rightarrow 6.83 \\text{ cm} \\)", graphData: null }
]);

updateQ('y9-16d-q6d', "\\( 8.60 \\text{ cm} \\)", ["\\( 9.12 \\text{ cm} \\)", "\\( 17.20 \\text{ cm} \\)", "\\( 8.15 \\text{ cm} \\)"], [
  { explanation: "We are given that the diameter is equal to the height (\\(d = h\\)). Therefore, the radius is half the height (\\(r = \\frac{h}{2}\\)).", workingOut: "\\( r = \\frac{h}{2} \\)", graphData: null },
  { explanation: "Substitute this into the cylinder volume formula.", workingOut: "\\( V = \\pi (\\frac{h}{2})^2 h = \\pi (\\frac{h^2}{4}) h = \\frac{\\pi h^3}{4} \\)", graphData: null },
  { explanation: "Substitute the given volume.", workingOut: "\\( 500 = \\frac{\\pi h^3}{4} \\)", graphData: null },
  { explanation: "Rearrange to solve for \\(h^3\\).", workingOut: "\\( h^3 = \\frac{2000}{\\pi} \\)", graphData: null },
  { explanation: "Take the cube root to find \\(h\\) and round to two decimal places.", workingOut: "\\( h = \\sqrt[3]{\\frac{2000}{\\pi}} \\approx 8.602... \\rightarrow 8.60 \\text{ cm} \\)", graphData: null }
]);

const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');
console.log('Successfully updated batch 3 in local file.');
