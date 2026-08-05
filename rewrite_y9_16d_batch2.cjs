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

// q3d: Trapezoidal Prism
const q3d_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Back trapezoid (Hidden edges) -->
  <line x1="220" y1="50" x2="160" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="160" y1="130" x2="360" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Visible back edges -->
  <line x1="220" y1="50" x2="300" y2="50" stroke="#475569" stroke-width="2"/>
  <line x1="300" y1="50" x2="360" y2="130" stroke="#475569" stroke-width="2"/>
  <!-- Connecting depth edges -->
  <line x1="220" y1="50" x2="120" y2="90" stroke="#475569" stroke-width="2"/>
  <line x1="300" y1="50" x2="200" y2="90" stroke="#475569" stroke-width="2"/>
  <line x1="360" y1="130" x2="260" y2="170" stroke="#475569" stroke-width="2"/>
  <line x1="160" y1="130" x2="60" y2="170" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Front trapezoid -->
  <polygon points="120,90 200,90 260,170 60,170" fill="#dbeafe" stroke="#3b82f6" stroke-width="3" stroke-linejoin="round"/>
  <text x="160" y="80" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">15 cm</text>
  <text x="160" y="185" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">25 cm</text>
  <line x1="60" y1="130" x2="120" y2="130" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="90" y="125" font-family="sans-serif" font-size="14" fill="#1d4ed8">h = 10</text>
  <line x1="270" y1="180" x2="370" y2="140" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="330" y="175" font-family="sans-serif" font-size="14" fill="#475569">40 cm</text>
</svg>`;

updateQ('y9-16d-q3d', "\\( 8000 \\text{ cm}^3 \\)", ["\\( 16000 \\text{ cm}^3 \\)", "\\( 4000 \\text{ cm}^3 \\)", "\\( 15000 \\text{ cm}^3 \\)"], [
  { explanation: "Identify the shape. It is a prism with a trapezoidal cross-section.", workingOut: "\\( V = A_{\\text{trapezoid}} \\times l \\)", graphData: null },
  { explanation: "Calculate the area of the trapezoidal face.", workingOut: "\\( A = \\frac{1}{2} \\times (a + b) \\times h = \\frac{1}{2} \\times (15 + 25) \\times 10 \\)", graphData: null },
  { explanation: "Simplify the area calculation.", workingOut: "\\( A = \\frac{1}{2} \\times 40 \\times 10 = 20 \\times 10 = 200 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Multiply the cross-sectional area by the length of the prism to find the volume.", workingOut: "\\( V = 200 \\times 40 = 8000 \\text{ cm}^3 \\)", graphData: null }
], 0, q3d_svg);


// q3e: Stepped block
const q3e_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Simplified representation of a stepped block front face -->
  <polygon points="80,180 240,180 240,60 140,60 140,90 80,90" fill="#dcfce7" stroke="#22c55e" stroke-width="3" stroke-linejoin="round"/>
  <text x="160" y="195" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">Width = 16 cm</text>
  <text x="250" y="120" font-family="sans-serif" font-size="14" fill="#475569" transform="rotate(-90 250 120)">Height = 12 cm</text>
  <text x="160" y="135" font-family="sans-serif" font-size="16" font-weight="bold" fill="#166534" text-anchor="middle">Cross-section Area</text>
  <line x1="260" y1="170" x2="320" y2="130" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="300" y="165" font-family="sans-serif" font-size="14" fill="#475569">Length = 14 cm</text>
</svg>`;

updateQ('y9-16d-q3e', "\\( 2268 \\text{ cm}^3 \\)", ["\\( 2420 \\text{ cm}^3 \\)", "\\( 2180 \\text{ cm}^3 \\)", "\\( 2688 \\text{ cm}^3 \\)"], [
  { explanation: "Calculate the total area of the solid rectangle before the step was cut out.", workingOut: "\\( A_{\\text{total}} = 16 \\times 12 = 192 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Calculate the area of the step cut-out.", workingOut: "\\( A_{\\text{cut}} = 10 \\times 3 = 30 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Subtract the cut-out area from the total area to find the cross-sectional area.", workingOut: "\\( A = 192 - 30 = 162 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Multiply the cross-sectional area by the length to find the volume.", workingOut: "\\( V = 162 \\times 14 = 2268 \\text{ cm}^3 \\)", graphData: null }
], 0, q3e_svg);


// q3f: U-shaped channel block
const q3f_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Simplified U shape -->
  <polygon points="60,60 110,60 110,120 210,120 210,60 260,60 260,180 60,180" fill="#fef3c7" stroke="#f59e0b" stroke-width="3" stroke-linejoin="round"/>
  <text x="160" y="195" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">Width = 30 cm</text>
  <text x="45" y="120" font-family="sans-serif" font-size="14" fill="#475569" transform="rotate(-90 45 120)">Height = 12</text>
  <text x="160" y="100" font-family="sans-serif" font-size="14" fill="#b45309" text-anchor="middle">Channel: 10 x 6</text>
  <line x1="280" y1="170" x2="340" y2="130" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="320" y="165" font-family="sans-serif" font-size="14" fill="#475569">Length = 10 cm</text>
</svg>`;

updateQ('y9-16d-q3f', "\\( 3000 \\text{ cm}^3 \\)", ["\\( 2800 \\text{ cm}^3 \\)", "\\( 3600 \\text{ cm}^3 \\)", "\\( 3200 \\text{ cm}^3 \\)"], [
  { explanation: "Calculate the total area of the rectangle before the channel was cut out.", workingOut: "\\( A_{\\text{total}} = 30 \\times 12 = 360 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Calculate the area of the inner channel cut-out.", workingOut: "\\( A_{\\text{cut}} = 10 \\times 6 = 60 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Subtract the cut-out area from the total area to find the cross-sectional area.", workingOut: "\\( A = 360 - 60 = 300 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Multiply the cross-sectional area by the length to find the volume.", workingOut: "\\( V = 300 \\times 10 = 3000 \\text{ cm}^3 \\)", graphData: null }
], 0, q3f_svg);

// q3g: Right-angled triangular prism
const q3g_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Visible back edges -->
  <line x1="220" y1="50" x2="220" y2="130" stroke="#475569" stroke-width="2"/>
  <line x1="220" y1="130" x2="360" y2="130" stroke="#475569" stroke-width="2"/>
  <!-- Connecting depth edges -->
  <line x1="220" y1="50" x2="120" y2="90" stroke="#475569" stroke-width="2"/>
  <line x1="360" y1="130" x2="260" y2="170" stroke="#475569" stroke-width="2"/>
  <!-- Front triangle -->
  <polygon points="120,90 120,170 260,170" fill="#fee2e2" stroke="#ef4444" stroke-width="3" stroke-linejoin="round"/>
  <rect x="120" y="160" width="10" height="10" fill="none" stroke="#ef4444" stroke-width="1.5"/>
  <text x="100" y="130" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">30 cm</text>
  <text x="190" y="185" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">40 cm</text>
  <line x1="270" y1="180" x2="370" y2="140" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="330" y="175" font-family="sans-serif" font-size="14" fill="#475569">80 cm</text>
</svg>`;

updateQ('y9-16d-q3g', "\\( 48000 \\text{ cm}^3 \\)", ["\\( 96000 \\text{ cm}^3 \\)", "\\( 36000 \\text{ cm}^3 \\)", "\\( 24000 \\text{ cm}^3 \\)"], [
  { explanation: "The volume of a triangular prism is the area of the triangular base multiplied by the length of the prism.", workingOut: "\\( V = A \\times l \\)", graphData: null },
  { explanation: "Calculate the area of the right-angled triangular base.", workingOut: "\\( A = \\frac{1}{2} \\times b \\times h = \\frac{1}{2} \\times 40 \\times 30 = 20 \\times 30 = 600 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Multiply the base area by the length of the prism.", workingOut: "\\( V = 600 \\times 80 = 48000 \\text{ cm}^3 \\)", graphData: null }
], 0, q3g_svg);

// q3h: Triangular prism
const q3h_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Front shaded triangle -->
  <polygon points="160,80 240,190 80,190" fill="#e0e7ff" stroke="#6366f1" stroke-width="3" stroke-linejoin="round"/>
  <line x1="160" y1="80" x2="160" y2="190" stroke="#6366f1" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="140" y="145" font-family="sans-serif" font-size="14" fill="#4338ca" text-anchor="middle">h = 15</text>
  <text x="160" y="205" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">Base = 16 mm</text>
  <line x1="250" y1="200" x2="350" y2="170" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="310" y="200" font-family="sans-serif" font-size="14" fill="#475569">l = 120 mm</text>
</svg>`;

updateQ('y9-16d-q3h', "\\( 14400 \\text{ mm}^3 \\)", ["\\( 28800 \\text{ mm}^3 \\)", "\\( 12800 \\text{ mm}^3 \\)", "\\( 19200 \\text{ mm}^3 \\)"], [
  { explanation: "The volume of a triangular prism is the area of the triangular base multiplied by the length of the prism.", workingOut: "\\( V = A \\times l \\)", graphData: null },
  { explanation: "Calculate the area of the triangular base.", workingOut: "\\( A = \\frac{1}{2} \\times 16 \\times 15 = 8 \\times 15 = 120 \\text{ mm}^2 \\)", graphData: null },
  { explanation: "Multiply the base area by the length of the prism.", workingOut: "\\( V = 120 \\times 120 = 14400 \\text{ mm}^3 \\)", graphData: null }
], 0, q3h_svg);

// q3i: Trapezoidal prism
const q3i_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Front trapezoid -->
  <polygon points="140,100 180,100 220,160 100,160" fill="#fce7f3" stroke="#ec4899" stroke-width="3" stroke-linejoin="round"/>
  <text x="160" y="90" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">4 cm</text>
  <text x="160" y="175" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">6 cm</text>
  <line x1="140" y1="100" x2="140" y2="160" stroke="#ec4899" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="125" y="135" font-family="sans-serif" font-size="14" fill="#be185d">h=2</text>
  <line x1="230" y1="170" x2="330" y2="140" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="290" y="170" font-family="sans-serif" font-size="14" fill="#475569">12 cm</text>
</svg>`;

updateQ('y9-16d-q3i', "\\( 120 \\text{ cm}^3 \\)", ["\\( 96 \\text{ cm}^3 \\)", "\\( 240 \\text{ cm}^3 \\)", "\\( 72 \\text{ cm}^3 \\)"], [
  { explanation: "The volume of a prism is the cross-sectional area multiplied by its length.", workingOut: "\\( V = A_{\\text{trapezoid}} \\times l \\)", graphData: null },
  { explanation: "Calculate the area of the trapezoidal face.", workingOut: "\\( A = \\frac{1}{2} \\times (a + b) \\times h = \\frac{1}{2} \\times (4 + 6) \\times 2 \\)", graphData: null },
  { explanation: "Simplify the area calculation.", workingOut: "\\( A = \\frac{1}{2} \\times 10 \\times 2 = 10 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Multiply the cross-sectional area by the length of the prism.", workingOut: "\\( V = 10 \\times 12 = 120 \\text{ cm}^3 \\)", graphData: null }
], 0, q3i_svg);

// q3j: Hexagonal prism
const q3j_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Front Hexagon -->
  <polygon points="120,80 200,80 240,140 200,200 120,200 80,140" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="3" stroke-linejoin="round"/>
  <text x="160" y="70" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">5 cm</text>
  <line x1="80" y1="140" x2="240" y2="140" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="160" y="135" font-family="sans-serif" font-size="14" fill="#0284c7" text-anchor="middle">10 cm</text>
  <line x1="250" y1="80" x2="250" y2="200" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="260" y="145" font-family="sans-serif" font-size="14" fill="#0284c7">h = 7 cm</text>
  <line x1="250" y1="210" x2="350" y2="180" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="310" y="210" font-family="sans-serif" font-size="14" fill="#475569">14 cm</text>
</svg>`;

updateQ('y9-16d-q3j', "\\( 735 \\text{ cm}^3 \\)", ["\\( 980 \\text{ cm}^3 \\)", "\\( 1470 \\text{ cm}^3 \\)", "\\( 840 \\text{ cm}^3 \\)"], [
  { explanation: "The volume of a prism is the base area multiplied by its length. First, calculate the area of the hexagonal base.", workingOut: "\\( V = A \\times l \\)", graphData: null },
  { explanation: "The hexagon can be split into two identical trapezoids. Let's find the area of the top trapezoid.", workingOut: "\\( A_{\\text{trapezoid}} = \\frac{1}{2} \\times (5 + 10) \\times (7 \\div 2) = \\frac{1}{2} \\times 15 \\times 3.5 = 26.25 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Multiply by 2 for the total area of the hexagon.", workingOut: "\\( A = 26.25 \\times 2 = 52.5 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Multiply the total cross-sectional area by the length of the prism.", workingOut: "\\( V = 52.5 \\times 14 = 735 \\text{ cm}^3 \\)", graphData: null }
], 0, q3j_svg);

// q4a: Reverse volume 
updateQ('y9-16d-q4a', "\\( 30 \\text{ cm}^2 \\)", ["\\( 40 \\text{ cm}^2 \\)", "\\( 1920 \\text{ cm}^2 \\)", "\\( 15 \\text{ cm}^2 \\)"], [
  { explanation: "State the formula for the volume of a prism.", workingOut: "\\( V = A \\times h \\)", graphData: null },
  { explanation: "Substitute the given values into the formula.", workingOut: "\\( 240 = A \\times 8 \\)", graphData: null },
  { explanation: "Divide both sides by 8 to isolate A.", workingOut: "\\( A = \\frac{240}{8} \\)", graphData: null },
  { explanation: "Calculate the final area.", workingOut: "\\( A = 30 \\text{ cm}^2 \\)", graphData: null }
]);

// q4b: Reverse volume
updateQ('y9-16d-q4b', "\\( 3.53 \\text{ cm} \\)", ["\\( 4.15 \\text{ cm} \\)", "\\( 30.00 \\text{ cm} \\)", "\\( 15.00 \\text{ cm} \\)"], [
  { explanation: "State the formula for the volume of a prism.", workingOut: "\\( V = A \\times h \\)", graphData: null },
  { explanation: "Calculate the area of the square base.", workingOut: "\\( A = 8.5 \\times 8.5 = 72.25 \\text{ cm}^2 \\)", graphData: null },
  { explanation: "Substitute the volume and the base area into the volume formula.", workingOut: "\\( 255 = 72.25 \\times h \\)", graphData: null },
  { explanation: "Divide by 72.25 to solve for the height.", workingOut: "\\( h = \\frac{255}{72.25} \\approx 3.53 \\text{ cm} \\)", graphData: null }
]);

// q4c: Cube side
updateQ('y9-16d-q4c', "\\( 2.5 \\text{ m} \\)", ["\\( 3.5 \\text{ m} \\)", "\\( 3.95 \\text{ m} \\)", "\\( 1.5 \\text{ m} \\)"], [
  { explanation: "State the formula for the volume of a cube.", workingOut: "\\( V = s^3 \\)", graphData: null },
  { explanation: "Substitute the given volume.", workingOut: "\\( 15.625 = s^3 \\)", graphData: null },
  { explanation: "Take the cube root of both sides to find the side length.", workingOut: "\\( s = \\sqrt[3]{15.625} \\)", graphData: null },
  { explanation: "Calculate the final side length.", workingOut: "\\( s = 2.5 \\text{ m} \\)", graphData: null }
]);

// q4d: Square base prism
updateQ('y9-16d-q4d', "\\( 8.5 \\text{ mm} \\)", ["\\( 7.2 \\text{ mm} \\)", "\\( 4.25 \\text{ mm} \\)", "\\( 17.0 \\text{ mm} \\)"], [
  { explanation: "Let the side length of the square base be \\(x\\). Then the height is \\(2x\\).", workingOut: "\\( h = 2x \\)", graphData: null },
  { explanation: "State the formula for the volume of the prism.", workingOut: "\\( V = A \\times h = (x \\times x) \\times 2x = 2x^3 \\)", graphData: null },
  { explanation: "Substitute the given volume into the formula.", workingOut: "\\( 1228.25 = 2x^3 \\)", graphData: null },
  { explanation: "Divide by 2, then take the cube root.", workingOut: "\\( x^3 = 614.125 \\)", graphData: null },
  { explanation: "Calculate the final side length.", workingOut: "\\( x = \\sqrt[3]{614.125} = 8.5 \\text{ mm} \\)", graphData: null }
]);

// q5a: Cylinder
const q5a_svg = `<svg viewBox="0 0 400 250" width="100%" height="auto" style="max-width:400px;display:block;margin:1rem auto;background-color:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;padding:1rem;" xmlns="http://www.w3.org/2000/svg">
  ${basicDefs}
  <!-- Hidden left arc -->
  <path d="M 260,215 A 60 90 0 0 1 260 35" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Visible right arc -->
  <path d="M 260,35 A 60 90 0 0 1 260 215" fill="none" stroke="#475569" stroke-width="2"/>
  
  <line x1="260" y1="35" x2="140" y2="35" stroke="#475569" stroke-width="2"/>
  <line x1="260" y1="215" x2="140" y2="215" stroke="#475569" stroke-width="2"/>
  
  <ellipse cx="140" cy="125" rx="60" ry="90" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
  <line x1="140" y1="125" x2="140" y2="35" stroke="#ca8a04" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="120" y="80" font-family="sans-serif" font-size="14" fill="#a16207" text-anchor="middle">r = 4</text>
  
  <line x1="140" y1="235" x2="260" y2="235" stroke="#64748b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
  <text x="200" y="250" font-family="sans-serif" font-size="14" fill="#475569" text-anchor="middle">h = 6 cm</text>
</svg>`;

updateQ('y9-16d-q5a', "\\( 301.59 \\text{ cm}^3 \\)", ["\\( 150.80 \\text{ cm}^3 \\)", "\\( 325.80 \\text{ cm}^3 \\)", "\\( 241.12 \\text{ cm}^3 \\)"], [
  { explanation: "State the formula for the volume of a cylinder.", workingOut: "\\( V = \\pi r^2 h \\)", graphData: null },
  { explanation: "Substitute the given radius \\(r = 4\\) and height \\(h = 6\\).", workingOut: "\\( V = \\pi \\times 4^2 \\times 6 \\)", graphData: null },
  { explanation: "Square the radius and multiply.", workingOut: "\\( V = \\pi \\times 16 \\times 6 = 96\\pi \\)", graphData: null },
  { explanation: "Calculate the final decimal value and round to two decimal places.", workingOut: "\\( V \\approx 301.59 \\text{ cm}^3 \\)", graphData: null }
], 0, q5a_svg);


const output = `export const Y9_CH16D_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(filepath, output, 'utf8');
console.log('Successfully updated batch 2 in local file.');
