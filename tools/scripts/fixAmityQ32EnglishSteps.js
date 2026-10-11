import fs from 'fs';
import path from 'path';

// Generator for accurate cosine curve: h(t) = 2.2 + 1.2 * cos(pi * t / 12)
// viewBox 0 0 600 340
// t in [0, 24] -> x = 100 + t * 18
// h in [0, 4] -> y = 310 - h * 60
function makeCosinePath(tMax = 24, steps = 120) {
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * tMax;
    const h = 2.2 + 1.2 * Math.cos((Math.PI * t) / 12);
    const x = (100 + t * 18).toFixed(1);
    const y = (310 - h * 60).toFixed(1);
    if (i === 0) d += `M${x} ${y}`;
    else d += ` L${x} ${y}`;
  }
  return d;
}

const fullCurve = makeCosinePath(24);

function baseFrame(body = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" style="display:block;margin:0 auto;max-width:760px;height:auto;font-family:Arial,sans-serif">
  <rect x="1" y="1" width="598" height="338" rx="12" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Grid lines -->
  <line x1="100" y1="250" x2="532" y2="250" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="100" y1="178" x2="532" y2="178" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="100" y1="106" x2="532" y2="106" stroke="#f1f5f9" stroke-width="1"/>
  
  <!-- Axes -->
  <line x1="60" y1="310" x2="550" y2="310" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
  <line x1="100" y1="330" x2="100" y2="40" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
  
  <!-- t-axis ticks & labels -->
  ${[0, 4, 8, 12, 16, 20, 24].map(t => {
    const x = 100 + t * 18;
    return `<line x1="${x}" y1="306" x2="${x}" y2="314" stroke="#94a3b8" stroke-width="1"/>
  <text x="${x}" y="328" fill="#1e293b" font-size="11" text-anchor="middle">${t}</text>`;
  }).join('\n  ')}
  
  <!-- h-axis ticks & labels -->
  ${[
    { val: '1.0', y: 250 },
    { val: '1.6', y: 214 },
    { val: '2.2', y: 178 },
    { val: '3.4', y: 106 }
  ].map(tick => `
  <line x1="94" y1="${tick.y}" x2="100" y2="${tick.y}" stroke="#94a3b8" stroke-width="1"/>
  <text x="88" y="${tick.y + 4}" fill="#64748b" font-size="11" text-anchor="end">${tick.val}</text>`).join('')}

  <!-- Axis Titles -->
  <text x="546" y="302" fill="#1e293b" font-size="12" text-anchor="end" font-weight="600">t (hours after 5 am)</text>
  <text x="108" y="52" fill="#1e293b" font-size="12" text-anchor="start" font-weight="600">h (metres)</text>
  
  <!-- Midline h = 2.2 -->
  <line x1="100" y1="178" x2="532" y2="178" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="536" y="182" fill="#64748b" font-size="10" text-anchor="start">midline 2.2</text>

  ${body}
</svg>`;
}

// -------------------------------------------------------------------------
// Part (a) Step SVGs
// -------------------------------------------------------------------------
const q32aStep1Svg = baseFrame(`
  <path d="${fullCurve}" fill="none" stroke="#cbd5e1" stroke-width="2.5" stroke-dasharray="5 4"/>
  <circle cx="100" cy="310" r="5" fill="#2563eb"/>
  <line x1="100" y1="310" x2="100" y2="106" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="100" cy="106" r="6" fill="#2563eb"/>
  <rect x="145" y="210" width="250" height="72" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="158" y="234" fill="#1e40af" font-size="12" font-weight="bold">Step 1: Reference Time</text>
  <text x="158" y="252" fill="#1e40af" font-size="11">t is defined as hours elapsed after 5:00 am</text>
  <text x="158" y="270" fill="#2563eb" font-size="12" font-weight="bold">→ At 5:00 am: t = 0</text>
`);

const q32aStep2Svg = baseFrame(`
  <path d="${fullCurve}" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
  <line x1="100" y1="310" x2="100" y2="106" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5 3"/>
  <circle cx="100" cy="106" r="7" fill="#f59e0b"/>
  <rect x="150" y="65" width="280" height="72" rx="8" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="162" y="88" fill="#b45309" font-size="12" font-weight="bold">Step 2: Evaluate the Cosine Argument</text>
  <text x="162" y="106" fill="#92400e" font-size="11">Substitute t = 0: (π × 0) / 12 = 0 radians</text>
  <text x="162" y="125" fill="#b45309" font-size="12" font-weight="bold">cos(0) = 1  (Peak / Maximum of cosine)</text>
`);

const q32aStep3Svg = baseFrame(`
  <path d="${fullCurve}" fill="none" stroke="#4f46e5" stroke-width="3.5"/>
  <line x1="112" y1="178" x2="112" y2="106" stroke="#059669" stroke-width="2"/>
  <polyline points="108,114 112,106 116,114" fill="none" stroke="#059669" stroke-width="2"/>
  <text x="120" y="146" fill="#059669" font-size="11" font-weight="bold">+1.2 m (amplitude)</text>
  <circle cx="100" cy="106" r="6.5" fill="#059669"/>
  <rect x="160" y="65" width="250" height="58" rx="8" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="172" y="88" fill="#065f46" font-size="12" font-weight="bold">Step 3: Midline + Amplitude</text>
  <text x="172" y="109" fill="#047857" font-size="12" font-weight="bold">h(0) = 2.2 + 1.2(1) = 3.4 m</text>
`);

const q32aStep4Svg = baseFrame(`
  <path d="${fullCurve}" fill="none" stroke="#4f46e5" stroke-width="3.5"/>
  <circle cx="100" cy="106" r="6" fill="#059669"/>
  <text x="100" y="88" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">5 am (3.4 m)</text>
  <line x1="316" y1="310" x2="316" y2="250" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="316" cy="250" r="6" fill="#dc2626"/>
  <text x="316" y="240" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">5 pm: 1.0 m</text>
  <text x="316" y="270" fill="#b91c1c" font-size="10" text-anchor="middle">(Low tide at t = 12)</text>
  <circle cx="532" cy="106" r="6" fill="#059669"/>
  <text x="532" y="88" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Next 5 am (3.4 m)</text>
  <line x1="100" y1="65" x2="532" y2="65" stroke="#4f46e5" stroke-width="2"/>
  <polyline points="108,61 100,65 108,69" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <polyline points="524,61 532,65 524,69" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <text x="316" y="58" fill="#3730a3" font-size="12" font-weight="bold" text-anchor="middle">Period T = 24 hours (Full tidal cycle)</text>
`);

// -------------------------------------------------------------------------
// Part (b) Step SVGs
// -------------------------------------------------------------------------
const q32bStepSvg = baseFrame(`
  <path d="${fullCurve}" fill="none" stroke="#4f46e5" stroke-width="3.5"/>
  <!-- Key quarter points -->
  <circle cx="100" cy="106" r="5" fill="#10b981"/>
  <text x="100" y="90" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">(0, 3.4)</text>
  
  <circle cx="208" cy="178" r="5" fill="#6366f1"/>
  <text x="208" y="165" fill="#4338ca" font-size="11" font-weight="bold" text-anchor="middle">(6, 2.2)</text>

  <circle cx="316" cy="250" r="5" fill="#ef4444"/>
  <text x="316" y="272" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">(12, 1.0)</text>

  <circle cx="424" cy="178" r="5" fill="#6366f1"/>
  <text x="424" y="165" fill="#4338ca" font-size="11" font-weight="bold" text-anchor="middle">(18, 2.2)</text>

  <circle cx="532" cy="106" r="5" fill="#10b981"/>
  <text x="532" y="90" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">(24, 3.4)</text>
`);

// -------------------------------------------------------------------------
// Part (c) Step SVGs
// -------------------------------------------------------------------------
const q32cStep1Svg = baseFrame(`
  <path d="${fullCurve}" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
  <!-- Threshold line h = 1.6 m -->
  <line x1="100" y1="214" x2="532" y2="214" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="536" y="218" fill="#b45309" font-size="11" font-weight="bold">h = 1.6 m</text>
  
  <!-- Info card -->
  <rect x="150" y="65" width="280" height="64" rx="8" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="162" y="88" fill="#b45309" font-size="12" font-weight="bold">Step 1: Set h(t) = 1.6</text>
  <text x="162" y="106" fill="#92400e" font-size="11">2.2 + 1.2 cos(πt / 12) = 1.6</text>
  <text x="162" y="122" fill="#b45309" font-size="11" font-weight="bold">⟹ cos(πt / 12) = −0.6 / 1.2 = −1/2</text>
`);

const q32cStep2Svg = baseFrame(`
  <path d="${fullCurve}" fill="none" stroke="#4f46e5" stroke-width="3"/>
  <line x1="100" y1="214" x2="532" y2="214" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="536" y="218" fill="#b45309" font-size="11" font-weight="bold">h = 1.6 m</text>

  <!-- First crossing point (8, 1.6) -->
  <line x1="244" y1="310" x2="244" y2="214" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="244" cy="214" r="6.5" fill="#2563eb"/>
  <text x="244" y="202" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">(8, 1.6)</text>
  
  <!-- Card explaining quadrant II angle -->
  <rect x="270" y="65" width="260" height="74" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="282" y="88" fill="#1e40af" font-size="12" font-weight="bold">Step 2: Solve for First Angle</text>
  <text x="282" y="106" fill="#1e40af" font-size="11">On descending phase (0 &lt; θ &lt; π):</text>
  <text x="282" y="124" fill="#2563eb" font-size="11" font-weight="bold">cos(θ) = −1/2 ⟹ θ = 2π / 3</text>
`);

const q32cStep3Svg = baseFrame(`
  <path d="${fullCurve}" fill="none" stroke="#4f46e5" stroke-width="3"/>
  <line x1="100" y1="214" x2="532" y2="214" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="536" y="218" fill="#b45309" font-size="11" font-weight="bold">h = 1.6 m</text>

  <!-- First crossing highlight -->
  <line x1="244" y1="310" x2="244" y2="214" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4 3"/>
  <circle cx="244" cy="214" r="7" fill="#10b981"/>
  <text x="244" y="200" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">t = 8 h (1:00 pm)</text>
  <circle cx="244" cy="310" r="5" fill="#10b981"/>

  <!-- Callout showing final time solution -->
  <rect x="275" y="65" width="250" height="70" rx="8" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="287" y="88" fill="#065f46" font-size="12" font-weight="bold">Step 3: Solve for t</text>
  <text x="287" y="106" fill="#047857" font-size="11">πt / 12 = 2π / 3 ⟹ t = 12 × (2/3)</text>
  <text x="287" y="124" fill="#065f46" font-size="12" font-weight="bold">t = 8 hours after 5 am</text>
`);

// -------------------------------------------------------------------------
// Load and update y12a-2.json
// -------------------------------------------------------------------------
const filePath = path.resolve('content/chapters/y12a-2.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

let targetQuestion = null;
for (const topic of data.topics) {
  const found = topic.questions.find(q => q.id === 'amity2020-ma-q32');
  if (found) {
    targetQuestion = found;
    break;
  }
}

if (!targetQuestion) {
  console.error('Question amity2020-ma-q32 not found!');
  process.exit(1);
}

// 1. Update Part (a)
const partA = targetQuestion.parts.find(p => p.id === 'amity2020-ma-q32a');
if (partA) {
  delete partA.figure;
  partA.hint = "At 5:00 am, zero hours have elapsed, so t = 0. Substitute t = 0 into the height formula.";
  partA.keyPoints = [
    {
      text: "5:00 am corresponds to t = 0",
      note: "Because t is defined as hours elapsed after 5:00 am, at 5:00 am we have t = 0."
    }
  ];
  partA.steps = [
    {
      explain: "Identify the elapsed time \\(t\\) corresponding to 5:00 am.\nThe variable \\(t\\) represents the number of hours elapsed after 5:00 am. At 5:00 am, zero hours have passed, so \\(t = 0\\).",
      work: "\\(t = 5\\text{:00 am} - 5\\text{:00 am} = 0\\)",
      figure: { svg: q32aStep1Svg }
    },
    {
      explain: "Substitute \\(t = 0\\) into the height function \\(h(t) = 2.2 + 1.2\\cos\\left(\\frac{\\pi t}{12}\\right)\\).\nThe cosine argument becomes \\(\\frac{\\pi \\times 0}{12} = 0\\text{ radians}\\). The cosine function achieves its maximum value \\(\\cos(0) = 1\\) at this angle.",
      work: "\\(h(0) = 2.2 + 1.2\\cos\\left(\\frac{\\pi \\cdot 0}{12}\\right) = 2.2 + 1.2\\cos(0)\\)",
      figure: { svg: q32aStep2Svg }
    },
    {
      explain: "Calculate the water height using the midline and amplitude.\nEvaluating \\(\\cos(0) = 1\\) gives the midline height \\(2.2\\text{ m}\\) plus the full positive amplitude \\(+1.2\\text{ m}\\), which represents high tide.",
      work: "\\(h(0) = 2.2 + 1.2(1) = 2.2 + 1.2 = \\boxed{3.4\\text{ m}}\\)",
      figure: { svg: q32aStep3Svg }
    },
    {
      explain: "Verify using the 24-hour tidal cycle.\nThe period is \\(T = \\frac{2\\pi}{\\pi/12} = 24\\text{ hours}\\). The water oscillates between low tide \\(2.2 - 1.2 = 1.0\\text{ m}\\) (at \\(t = 12\\), 5:00 pm) and high tide \\(2.2 + 1.2 = 3.4\\text{ m}\\) (at \\(t = 0\\) and \\(t = 24\\)). Therefore, at 5:00 am the water height is \\(3.4\\text{ m}\\).",
      work: "\\(\\text{Range: } [2.2 - 1.2,\\; 2.2 + 1.2] = [1.0\\text{ m},\\; 3.4\\text{ m}]\\)",
      figure: { svg: q32aStep4Svg }
    }
  ];
}

// 2. Update Part (b)
const partB = targetQuestion.parts.find(p => p.id === 'amity2020-ma-q32b');
if (partB) {
  partB.hint = "Determine the midline, amplitude, and period, then plot the five quarter-period points across 0 ≤ t ≤ 24.";
  partB.keyPoints = [
    {
      text: "0 ≤ t ≤ 24",
      note: "A complete 24-hour cycle of the cosine function starts at its peak value of 3.4 m."
    }
  ];
  partB.steps = [
    {
      explain: "Determine the midline, amplitude, and period of the sinusoidal function.",
      work: "\\(h(t) = 2.2 + 1.2\\cos\\left(\\frac{\\pi t}{12}\\right) \\implies \\text{Midline: } h = 2.2\\text{ m},\\; \\text{Amplitude: } A = 1.2\\text{ m},\\; \\text{Period: } T = \\frac{2\\pi}{\\pi/12} = 24\\text{ hours}\\)"
    },
    {
      explain: "Compute the five key quarter-period points at intervals of \\(\\frac{T}{4} = 6\\text{ hours}\\).",
      work: "\\(h(0) = 3.4\\text{ m},\\; h(6) = 2.2\\text{ m},\\; h(12) = 1.0\\text{ m},\\; h(18) = 2.2\\text{ m},\\; h(24) = 3.4\\text{ m}\\)"
    },
    {
      explain: "Plot the points and connect them with a smooth cosine curve over the domain \\(0 \\le t \\le 24\\).",
      work: "\\(\\text{Range: } [1.0\\text{ m},\\; 3.4\\text{ m}]\\)",
      figure: { svg: q32bStepSvg }
    }
  ];
}

// 3. Update Part (c)
const partC = targetQuestion.parts.find(p => p.id === 'amity2020-ma-q32c');
if (partC) {
  partC.hint = "Set h(t) = 1.6, isolate the cosine term, and solve for the first value of t in the cycle.";
  partC.keyPoints = [
    {
      text: "first time after 5:00 am",
      note: "The first crossing occurs on the descending phase of the cosine curve where cos(θ) = -1/2."
    }
  ];
  partC.steps = [
    {
      explain: "Set the height function equal to \\(1.6\\text{ m}\\) and isolate the cosine term.",
      work: "\\(2.2 + 1.2\\cos\\left(\\frac{\\pi t}{12}\\right) = 1.6 \\implies 1.2\\cos\\left(\\frac{\\pi t}{12}\\right) = -0.6 \\implies \\cos\\left(\\frac{\\pi t}{12}\\right) = -\\frac{1}{2}\\)",
      figure: { svg: q32cStep1Svg }
    },
    {
      explain: "Find the angle where the cosine equals \\(-\\frac{1}{2}\\) for the first time.\nAs the tide recedes from high tide toward low tide (\\(0 \\le \\theta \\le \\pi\\)), the angle lies in Quadrant II where cosine is negative: \\(\\theta = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}\\).",
      work: "\\(\\text{Reference angle: } \\cos^{-1}\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{3} \\implies \\frac{\\pi t}{12} = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}\\)",
      figure: { svg: q32cStep2Svg }
    },
    {
      explain: "Solve the linear equation for \\(t\\) to find the elapsed hours after 5:00 am.",
      work: "\\(\\frac{\\pi t}{12} = \\frac{2\\pi}{3} \\implies t = 12 \\times \\frac{2}{3} = \\boxed{8\\text{ hours after 5:00 am (1:00 pm)}}\\)",
      figure: { svg: q32cStep3Svg }
    }
  ];
}

// 4. Update Part (d)
const partD = targetQuestion.parts.find(p => p.id === 'amity2020-ma-q32d');
if (partD) {
  partD.hint = "Use symmetry: the water is below 1.6 m between its two crossings at t = 8 and t = 16. Subtract that duration from 24 hours.";
  partD.keyPoints = [
    {
      text: "above 1.6 m",
      note: "The water stays below 1.6 m between t = 8 and t = 16 (8 hours). Thus it is above 1.6 m for 24 - 8 = 16 hours."
    }
  ];
  partD.steps = [
    {
      explain: "Identify the symmetry of the two crossings at \\(h = 1.6\\text{ m}\\).\nThe water drops below \\(1.6\\text{ m}\\) on the downward cycle at \\(t = 8\\) and rises back above \\(1.6\\text{ m}\\) on the upward cycle at \\(t = 24 - 8 = 16\\).",
      work: "\\(h(t) = 1.6 \\implies t = 8\\text{ hours (1:00 pm)} \\quad\\text{and}\\quad t = 16\\text{ hours (9:00 pm)}\\)"
    },
    {
      explain: "Calculate the duration during which the water level is below \\(1.6\\text{ m}\\).",
      work: "\\(\\Delta t_{\\text{below}} = 16 - 8 = 8\\text{ hours}\\)"
    },
    {
      explain: "Subtract the duration below the threshold from the total 24-hour period to find the time it remains above \\(1.6\\text{ m}\\).",
      work: "\\(\\Delta t_{\\text{above}} = 24 - 8 = \\boxed{16\\text{ hours}}\\)"
    }
  ];
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated amity2020-ma-q32 with English step-by-step explanations and math graphs!');
