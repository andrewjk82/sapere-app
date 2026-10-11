import fs from 'fs';
import path from 'path';

// Coordinate mapping for viewBox 0 0 600 340
// x: [ -0.5, 6.5 ] -> X = 110 + x * 60
// y: [ -20, 10 ]   -> Y = 135 - y * 8
function mapX(x) {
  return Number((110 + x * 60).toFixed(1));
}
function mapY(y) {
  return Number((135 - y * 8).toFixed(1));
}

function fx(x) {
  return x * (x - 2) * (x - 6);
}

function gx(x) {
  return fx(6 - x);
}

function makePath(fn, xStart, xEnd, steps = 60) {
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const x = xStart + (i / steps) * (xEnd - xStart);
    const y = fn(x);
    const X = mapX(x);
    const Y = mapY(y);
    if (i === 0) d += `M ${X} ${Y}`;
    else d += ` L ${X} ${Y}`;
  }
  return d;
}

function makeClosedAreaPath(fn, xStart, xEnd, steps = 40) {
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const x = xStart + (i / steps) * (xEnd - xStart);
    const y = fn(x);
    const X = mapX(x);
    const Y = mapY(y);
    if (i === 0) d += `M ${X} ${Y}`;
    else d += ` L ${X} ${Y}`;
  }
  const endX = mapX(xEnd);
  const startX = mapX(xStart);
  d += ` L ${endX} 135 L ${startX} 135 Z`;
  return d;
}

const fCurveFull = makePath(fx, -0.4, 6.35, 70);
const gCurveFull = makePath(gx, -0.35, 6.4, 70);

const fAreaA1 = makeClosedAreaPath(fx, 0, 2, 30);
const fAreaA2 = makeClosedAreaPath(fx, 2, 6, 50);

const gAreaA2 = makeClosedAreaPath(gx, 0, 4, 50);
const gAreaA1 = makeClosedAreaPath(gx, 4, 6, 30);

function baseFrame(content = '', curveLabel = 'y = f(x)') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" style="display:block;margin:0 auto;max-width:760px;height:auto;font-family:Arial,sans-serif">
  <rect x="1" y="1" width="598" height="338" rx="12" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Subtle grid lines -->
  <line x1="80" y1="55" x2="535" y2="55" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="80" y1="215" x2="535" y2="215" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="80" y1="295" x2="535" y2="295" stroke="#f1f5f9" stroke-width="1"/>
  
  <!-- Axes -->
  <line x1="70" y1="135" x2="540" y2="135" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
  <line x1="110" y1="315" x2="110" y2="35" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
  
  <!-- x-axis ticks & labels -->
  ${[0, 1, 2, 3, 4, 5, 6].map(x => {
    const X = mapX(x);
    return `<line x1="${X}" y1="131" x2="${X}" y2="139" stroke="#94a3b8" stroke-width="1"/>
  <text x="${X}" y="152" fill="#1e293b" font-size="11" text-anchor="middle">${x}</text>`;
  }).join('\n  ')}
  
  <!-- y-axis ticks -->
  <line x1="104" y1="55" x2="110" y2="55" stroke="#94a3b8" stroke-width="1"/>
  <text x="98" y="59" fill="#64748b" font-size="10" text-anchor="end">+10</text>
  <line x1="104" y1="95" x2="110" y2="95" stroke="#94a3b8" stroke-width="1"/>
  <text x="98" y="99" fill="#64748b" font-size="10" text-anchor="end">+5</text>
  <line x1="104" y1="215" x2="110" y2="215" stroke="#94a3b8" stroke-width="1"/>
  <text x="98" y="219" fill="#64748b" font-size="10" text-anchor="end">-10</text>
  <line x1="104" y1="255" x2="110" y2="255" stroke="#94a3b8" stroke-width="1"/>
  <text x="98" y="259" fill="#64748b" font-size="10" text-anchor="end">-15</text>

  <!-- Axis Titles -->
  <text x="548" y="139" fill="#1e293b" font-size="12" text-anchor="start" font-weight="600">x</text>
  <text x="110" y="26" fill="#1e293b" font-size="12" text-anchor="middle" font-weight="600">y</text>
  <text x="530" y="48" fill="#475569" font-size="11" text-anchor="end" font-weight="600">${curveLabel}</text>

  ${content}
</svg>`;
}

// -------------------------------------------------------------------------
// Part (a) SVGs
// -------------------------------------------------------------------------

// Step 1: Curve with roots 0, 2, 6 highlighted
const q34aStep1Svg = baseFrame(`
  <path d="${fCurveFull}" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <!-- Root markers -->
  <circle cx="${mapX(0)}" cy="135" r="5" fill="#2563eb"/>
  <circle cx="${mapX(2)}" cy="135" r="5" fill="#2563eb"/>
  <circle cx="${mapX(6)}" cy="135" r="5" fill="#2563eb"/>
  
  <!-- Info card in empty upper space -->
  <rect x="235" y="45" width="275" height="74" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="247" y="68" fill="#1e40af" font-size="12" font-weight="bold">Step 1: Intercepts &amp; Expansion</text>
  <text x="247" y="86" fill="#1e40af" font-size="11">f(x) = x(x - 2)(x - 6) = 0 ⟹ x = 0, 2, 6</text>
  <text x="247" y="104" fill="#2563eb" font-size="11" font-weight="bold">f(x) = x³ − 8x² + 12x</text>
`, 'y = x(x-2)(x-6)');

// Step 2: Both regions shaded, distinguishing above/below axis
const q34aStep2Svg = baseFrame(`
  <!-- Shaded Area A1 -->
  <path d="${fAreaA1}" fill="#10b981" fill-opacity="0.25" stroke="#059669" stroke-width="1.5"/>
  <!-- Shaded Area A2 -->
  <path d="${fAreaA2}" fill="#3b82f6" fill-opacity="0.25" stroke="#2563eb" stroke-width="1.5"/>
  <!-- Curve -->
  <path d="${fCurveFull}" fill="none" stroke="#1e40af" stroke-width="2.5"/>
  
  <text x="${mapX(1)}" y="115" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">A₁ (above axis)</text>
  <text x="${mapX(4)}" y="210" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">A₂ (below axis)</text>
  
  <!-- Info card -->
  <rect x="235" y="45" width="275" height="74" rx="8" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="247" y="68" fill="#065f46" font-size="12" font-weight="bold">Step 2: Split Area into Two Regions</text>
  <text x="247" y="86" fill="#047857" font-size="11">A₁ = ∫₀² f(x) dx  (f ≥ 0 on [0, 2])</text>
  <text x="247" y="104" fill="#065f46" font-size="11" font-weight="bold">A₂ = −∫₂⁶ f(x) dx  (f ≤ 0 on [2, 6])</text>
`, 'y = x(x-2)(x-6)');

// Step 3: Highlighting A1 evaluation
const q34aStep3Svg = baseFrame(`
  <!-- Shaded Area A1 -->
  <path d="${fAreaA1}" fill="#10b981" fill-opacity="0.35" stroke="#059669" stroke-width="2"/>
  <!-- Outline of A2 subtle -->
  <path d="${fAreaA2}" fill="#f1f5f9" fill-opacity="0.5" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 3"/>
  <!-- Curve -->
  <path d="${fCurveFull}" fill="none" stroke="#1e40af" stroke-width="2.5"/>
  
  <circle cx="${mapX(0)}" cy="135" r="4.5" fill="#059669"/>
  <circle cx="${mapX(2)}" cy="135" r="4.5" fill="#059669"/>
  <text x="${mapX(1)}" y="112" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">A₁ = 20/3</text>
  
  <!-- Info card -->
  <rect x="235" y="45" width="275" height="74" rx="8" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="247" y="68" fill="#065f46" font-size="12" font-weight="bold">Step 3: Evaluate Area A₁ on [0, 2]</text>
  <text x="247" y="86" fill="#047857" font-size="11">F(x) = x⁴/4 − 8x³/3 + 6x²</text>
  <text x="247" y="104" fill="#065f46" font-size="11" font-weight="bold">A₁ = F(2) − F(0) = 28 − 64/3 = 20/3</text>
`, 'A₁ = 20/3');

// Step 4: Full evaluation with A1 + A2 = 148/3
const q34aStep4Svg = baseFrame(`
  <!-- Shaded Area A1 -->
  <path d="${fAreaA1}" fill="#10b981" fill-opacity="0.3" stroke="#059669" stroke-width="1.5"/>
  <!-- Shaded Area A2 -->
  <path d="${fAreaA2}" fill="#3b82f6" fill-opacity="0.3" stroke="#2563eb" stroke-width="1.5"/>
  <!-- Curve -->
  <path d="${fCurveFull}" fill="none" stroke="#1e40af" stroke-width="2.5"/>
  
  <text x="${mapX(1)}" y="112" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">A₁ = 20/3</text>
  <text x="${mapX(4)}" y="210" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">A₂ = 128/3</text>
  
  <!-- Info card -->
  <rect x="235" y="45" width="275" height="74" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="247" y="68" fill="#1e40af" font-size="12" font-weight="bold">Step 4: Total Area Calculation</text>
  <text x="247" y="86" fill="#1e40af" font-size="11">A₂ = |F(6) − F(2)| = |−36 − 20/3| = 128/3</text>
  <text x="247" y="104" fill="#1d4ed8" font-size="11" font-weight="bold">Total Area = 20/3 + 128/3 = 148/3</text>
`, 'Total Area = 148/3');

// -------------------------------------------------------------------------
// Part (b) SVGs
// -------------------------------------------------------------------------

// Step 1: Interpreting the two signed integrals for g(x)
const q34bStep1Svg = baseFrame(`
  <!-- Background shaded areas for g(x) -->
  <path d="${gAreaA2}" fill="#3b82f6" fill-opacity="0.25" stroke="#2563eb" stroke-width="1.5"/>
  <path d="${gAreaA1}" fill="#10b981" fill-opacity="0.25" stroke="#059669" stroke-width="1.5"/>
  <!-- Curve of g(x) -->
  <path d="${gCurveFull}" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  
  <circle cx="${mapX(0)}" cy="135" r="4.5" fill="#7c3aed"/>
  <circle cx="${mapX(4)}" cy="135" r="4.5" fill="#7c3aed"/>
  <circle cx="${mapX(6)}" cy="135" r="4.5" fill="#7c3aed"/>
  
  <text x="${mapX(2)}" y="210" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">−∫₀⁴ g(x) dx = 128/3</text>
  <text x="${mapX(5)}" y="112" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">∫₄⁶ g(x) dx = 20/3</text>
  
  <!-- Info card placed in top-left empty space -->
  <rect x="130" y="45" width="280" height="74" rx="8" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.5"/>
  <text x="142" y="68" fill="#6d28d9" font-size="12" font-weight="bold">Step 1: Integral Limit Reversal</text>
  <text x="142" y="86" fill="#5b21b6" font-size="11">∫₄⁰ g(x) dx = −∫₀⁴ g(x) dx (gives +128/3)</text>
  <text x="142" y="104" fill="#6d28d9" font-size="11" font-weight="bold">⟹ g ≤ 0 on [0, 4] and g ≥ 0 on [4, 6]</text>
`, 'y = g(x)');

// Step 2: Comparing f(x) vs g(x) showing horizontal reflection
const q34bStep2Svg = baseFrame(`
  <!-- Ghost of original f(x) in dashed grey -->
  <path d="${fCurveFull}" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="490" y="32" fill="#94a3b8" font-size="10" font-weight="bold">f(x)</text>
  
  <!-- Transformed g(x) in purple -->
  <path d="${gCurveFull}" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  <text x="490" y="195" fill="#7c3aed" font-size="10" font-weight="bold">g(x)</text>
  
  <!-- Arrow indicating reflection -->
  <path d="M 270 200 C 290 220, 310 220, 330 200" fill="none" stroke="#6d28d9" stroke-width="1.5"/>
  <text x="300" y="235" fill="#6d28d9" font-size="10" text-anchor="middle" font-weight="bold">reflection: a = −1</text>
  
  <!-- Info card -->
  <rect x="130" y="45" width="280" height="74" rx="8" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.5"/>
  <text x="142" y="68" fill="#6d28d9" font-size="12" font-weight="bold">Step 2: Horizontal Reflection (a = −1)</text>
  <text x="142" y="86" fill="#5b21b6" font-size="11">f has widths [2] then [4]; g has [4] then [2]</text>
  <text x="142" y="104" fill="#6d28d9" font-size="11" font-weight="bold">Reversed lobe order ⟹ a = −1</text>
`, 'f(x) vs g(x)');

// Step 3: Determining b = 6 and verifying the solution
const q34bStep3Svg = baseFrame(`
  <!-- Shaded areas for g(x) -->
  <path d="${gAreaA2}" fill="#3b82f6" fill-opacity="0.3" stroke="#2563eb" stroke-width="1.5"/>
  <path d="${gAreaA1}" fill="#10b981" fill-opacity="0.3" stroke="#059669" stroke-width="1.5"/>
  <path d="${gCurveFull}" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  
  <circle cx="${mapX(0)}" cy="135" r="5" fill="#7c3aed"/>
  <circle cx="${mapX(4)}" cy="135" r="5" fill="#7c3aed"/>
  <circle cx="${mapX(6)}" cy="135" r="5" fill="#7c3aed"/>
  
  <text x="${mapX(0)}" y="152" fill="#7c3aed" font-size="11" font-weight="bold" text-anchor="middle">0 (u=6)</text>
  <text x="${mapX(4)}" y="152" fill="#7c3aed" font-size="11" font-weight="bold" text-anchor="middle">4 (u=2)</text>
  <text x="${mapX(6)}" y="152" fill="#7c3aed" font-size="11" font-weight="bold" text-anchor="middle">6 (u=0)</text>
  
  <!-- Info card -->
  <rect x="130" y="45" width="280" height="74" rx="8" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="142" y="68" fill="#065f46" font-size="12" font-weight="bold">Step 3: Solve for b and Conclude</text>
  <text x="142" y="86" fill="#047857" font-size="11">u = −x + b: x = 0 ⟹ u = 6 ⟹ b = 6</text>
  <text x="142" y="104" fill="#065f46" font-size="11" font-weight="bold">g(x) = f(6 − x) ⟹ (a, b) = (−1, 6)</text>
`, 'g(x) = f(6 − x)');

// -------------------------------------------------------------------------
// Load y12a-4.json and replace standalone questions with multipart parent
// -------------------------------------------------------------------------
const filePath = path.resolve('content/chapters/y12a-4.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Find topic containing amity2020-ma-q34a
let targetTopic = null;
for (const topic of data.topics) {
  if (topic.questions && topic.questions.some(q => q.id === 'amity2020-ma-q34a')) {
    targetTopic = topic;
    break;
  }
}

if (!targetTopic) {
  console.error('Topic containing amity2020-ma-q34a not found!');
  process.exit(1);
}

const originalQ34a = targetTopic.questions.find(q => q.id === 'amity2020-ma-q34a');
const originalQ34b = targetTopic.questions.find(q => q.id === 'amity2020-ma-q34b');

const multipartQ34 = {
  timeLimit: 180,
  xp: 3,
  meta: {
    source: "Amity 2020 Mathematics Advanced HSC Trial",
    school: "Amity",
    sourceYear: 2020
  },
  id: "amity2020-ma-q34",
  type: "multipart",
  difficulty: "hard",
  stem: "Consider the cubic function \\(f(x) = x(x-2)(x-6)\\).",
  parts: [
    {
      id: "amity2020-ma-q34a",
      type: "mc",
      difficulty: "hard",
      stem: "(a) Find the exact total area bounded by the curve and the x-axis.",
      options: [
        "\\(\\frac{108}{3}\\)",
        "\\(\\frac{148}{3}\\)",
        "\\(\\frac{20}{3}\\)",
        "\\(\\frac{128}{3}\\)"
      ],
      answer: 1,
      hint: "Find the three roots where the curve intersects the x-axis, expand f(x), and integrate each section separately taking the absolute value of the region below the axis.",
      keyPoints: [
        {
          text: "exact total area",
          note: "Because the curve dips below the x-axis on [2, 6], the total geometric area is the sum of the positive loop and the absolute value of the negative loop."
        }
      ],
      steps: [
        {
          explain: "Find the \\(x\\)-intercepts by setting \\(f(x) = 0\\), and expand \\(f(x)\\) for integration.\nThe curve intersects the \\(x\\)-axis at three points: \\(x = 0\\), \\(x = 2\\), and \\(x = 6\\). Expanding gives \\(f(x) = x^3 - 8x^2 + 12x\\).",
          work: "\\(x(x-2)(x-6) = 0 \\implies x = 0,\\; 2,\\; 6\\\\\nf(x) = x(x^2 - 8x + 12) = x^3 - 8x^2 + 12x\\)",
          figure: { svg: q34aStep1Svg }
        },
        {
          explain: "Determine where \\(f(x)\\) is above and below the \\(x\\)-axis to set up the area integrals.\n- On \\([0, 2]\\), \\(f(x) \\ge 0\\) (above the axis), so \\(A_1 = \\int_0^2 f(x)\\,dx\\).\n- On \\([2, 6]\\), \\(f(x) \\le 0\\) (below the axis), so its signed integral is negative: \\(A_2 = -\\int_2^6 f(x)\\,dx = \\left|\\int_2^6 f(x)\\,dx\\right|\\).",
          work: "\\(A_1 = \\int_0^2 (x^3 - 8x^2 + 12x)\\,dx\\\\\nA_2 = -\\int_2^6 (x^3 - 8x^2 + 12x)\\,dx\\\\\n\\text{Total Area } A = A_1 + A_2\\)",
          figure: { svg: q34aStep2Svg }
        },
        {
          explain: "Find the antiderivative \\(F(x)\\) and evaluate the area \\(A_1\\) over \\([0, 2]\\).\nIntegrate term by term to obtain \\(F(x) = \\frac{x^4}{4} - \\frac{8x^3}{3} + 6x^2\\).",
          work: "\\(F(x) = \\int (x^3 - 8x^2 + 12x)\\,dx = \\frac{x^4}{4} - \\frac{8x^3}{3} + 6x^2\\\\\nA_1 = F(2) - F(0) = \\left(\\frac{16}{4} - \\frac{8(8)}{3} + 6(4)\\right) - 0 = 28 - \\frac{64}{3} = \\frac{20}{3}\\text{ units}^2\\)",
          figure: { svg: q34aStep3Svg }
        },
        {
          explain: "Evaluate the integral over \\([2, 6]\\), negate it to obtain the positive geometric area \\(A_2\\), and add both areas.\nEvaluating \\(F(6)\\) yields \\(-36\\), giving \\(\\int_2^6 f(x)\\,dx = -36 - \\frac{20}{3} = -\\frac{128}{3}\\).",
          work: "\\(F(6) = \\frac{6^4}{4} - \\frac{8(6^3)}{3} + 6(6^2) = 324 - 576 + 216 = -36\\\\\n\\int_2^6 f(x)\\,dx = F(6) - F(2) = -36 - \\frac{20}{3} = -\\frac{128}{3}\\\\\nA_2 = \\left|-\\frac{128}{3}\\right| = \\frac{128}{3}\\text{ units}^2\\\\\n\\text{Total Area } A = A_1 + A_2 = \\frac{20}{3} + \\frac{128}{3} = \\boxed{\\frac{148}{3}\\text{ units}^2}\\)",
          figure: { svg: q34aStep4Svg }
        }
      ]
    },
    {
      id: "amity2020-ma-q34b",
      type: "mc",
      difficulty: "hard",
      stem: "(b) Let \\(g(x)=f(ax+b)\\). The signed integrals \\(\\int_4^0g(x)\\,dx+\\int_4^6g(x)\\,dx\\) give the same total area as in part (a). Select the intended \\((a,b)\\).",
      options: [
        "\\((a,b)=(1,6)\\)",
        "\\((a,b)=(-1,6)\\)",
        "\\((a,b)=(-1,0)\\)",
        "\\((a,b)=(2,6)\\)"
      ],
      answer: 1,
      hint: "Reverse the reversed integration limits in the first integral: ∫₄⁰ g(x) dx = −∫₀⁴ g(x) dx. Observe which lobes of f(x) correspond to [0, 4] and [4, 6].",
      keyPoints: [
        {
          text: "\\(g(x)=f(ax+b)\\)",
          note: "Reversing the limits gives −∫₀⁴ g(x) dx + ∫₄⁶ g(x) dx. For this to equal the positive total area 128/3 + 20/3, g(x) must be negative on [0, 4] and positive on [4, 6]."
        }
      ],
      steps: [
        {
          explain: "Rewrite the given signed integrals with standard lower-to-upper limits.\nRecall that reversing limits negates the integral: \\(\\int_4^0 g(x)\\,dx = -\\int_0^4 g(x)\\,dx\\).\nTherefore, the expression becomes:\n$$\\int_4^0 g(x)\\,dx + \\int_4^6 g(x)\\,dx = -\\int_0^4 g(x)\\,dx + \\int_4^6 g(x)\\,dx$$\nFor this sum to equal the positive area \\(\\frac{148}{3} = \\frac{128}{3} + \\frac{20}{3}\\):\n1. \\(-\\int_0^4 g(x)\\,dx\\) must equal \\(+\\frac{128}{3}\\), meaning \\(g(x) \\le 0\\) on \\([0, 4]\\).\n2. \\(\\int_4^6 g(x)\\,dx\\) must equal \\(+\\frac{20}{3}\\), meaning \\(g(x) \\ge 0\\) on \\([4, 6]\\).",
          work: "\\(\\int_4^0 g(x)\\,dx + \\int_4^6 g(x)\\,dx = -\\int_0^4 g(x)\\,dx + \\int_4^6 g(x)\\,dx\\\\\n-\\int_0^4 g(x)\\,dx = \\frac{128}{3} \\quad\\text{and}\\quad \\int_4^6 g(x)\\,dx = \\frac{20}{3}\\\\\n\\text{Sum } = \\frac{128}{3} + \\frac{20}{3} = \\frac{148}{3}\\)",
          figure: { svg: q34bStep1Svg }
        },
        {
          explain: "Compare the lobe widths of \\(f(u)\\) and \\(g(x)\\) to determine the reflection factor \\(a\\).\n- In \\(f(u)\\), the smaller lobe (area \\(\\frac{20}{3}\\)) is on \\([0, 2]\\) (width 2), followed by the larger lobe (area \\(\\frac{128}{3}\\)) on \\([2, 6]\\) (width 4).\n- In \\(g(x)\\), the larger lobe (area \\(\\frac{128}{3}\\)) is on \\([0, 4]\\) (width 4), followed by the smaller lobe (area \\(\\frac{20}{3}\\)) on \\([4, 6]\\) (width 2).\nBecause the lobe widths and order are horizontally reversed without scale stretching, \\(g(x)\\) is a horizontal reflection of \\(f\\), so \\(a = -1\\).",
          work: "\\(\\text{Original } f(u): [0, 2] \\text{ (width 2)} \\to [2, 6] \\text{ (width 4)}\\\\\n\\text{Transformed } g(x): [0, 4] \\text{ (width 4)} \\to [4, 6] \\text{ (width 2)}\\\\\n\\implies \\text{Horizontal reflection with no scaling: } a = -1\\)",
          figure: { svg: q34bStep2Svg }
        },
        {
          explain: "Solve for the horizontal translation \\(b\\) and verify the transformation.\nWith \\(a = -1\\), the argument is \\(u = -x + b\\).\n- At \\(x = 0\\), \\(u\\) must equal the original rightmost root \\(u = 6\\): \\(-0 + b = 6 \\implies b = 6\\).\n- Check \\(x = 4\\): \\(u = -4 + 6 = 2\\) (matches intermediate root \\(u = 2\\)).\n- Check \\(x = 6\\): \\(u = -6 + 6 = 0\\) (matches initial root \\(u = 0\\)).\nThus, \\(g(x) = f(6 - x) = f(-x + 6)\\), so \\((a, b) = (-1, 6)\\).",
          work: "\\(u = ax + b = -x + b\\\\\n\\text{At } x = 0:\\; u = 6 \\implies b = 6\\\\\n\\text{Check: } x = 4 \\implies u = 2;\\quad x = 6 \\implies u = 0\\\\\n\\therefore \\boxed{(a, b) = (-1, 6)}\\)",
          figure: { svg: q34bStep3Svg }
        }
      ]
    }
  ]
};

// Replace q34a and q34b with multipartQ34
const idx = targetTopic.questions.findIndex(q => q.id === 'amity2020-ma-q34a');
targetTopic.questions = targetTopic.questions.filter(q => 
  q.id !== 'amity2020-ma-q34a' && 
  q.id !== 'amity2020-ma-q34b'
);

targetTopic.questions.splice(idx, 0, multipartQ34);

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully consolidated amity2020-ma-q34 into a multipart question in y12a-4.json!');
