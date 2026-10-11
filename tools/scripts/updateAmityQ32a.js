import fs from 'fs';

// Accurate cosine path generator
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

// Background grid and axes template
function baseGraph(extraSvg = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" style="display:block;margin:0 auto;max-width:760px;height:auto;font-family:Arial,sans-serif">
  <rect x="1" y="1" width="598" height="338" rx="12" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Subtle horizontal grid lines -->
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

  ${extraSvg}
</svg>`;
}

// Step 1: Start time 5:00 am corresponds to t = 0
const step1Svg = baseGraph(`
  <!-- Base cosine path (light dashed) -->
  <path d="${fullCurve}" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="5 4"/>
  
  <!-- t = 0 highlight -->
  <circle cx="100" cy="310" r="5" fill="#2563eb"/>
  <line x1="100" y1="310" x2="100" y2="116" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 3"/>
  
  <!-- Callout box -->
  <rect x="135" y="215" width="245" height="66" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="148" y="238" fill="#1e40af" font-size="12" font-weight="bold">Reference Time: 5:00 am</text>
  <text x="148" y="256" fill="#1e40af" font-size="11">t is defined as hours after 5:00 am</text>
  <text x="148" y="272" fill="#2563eb" font-size="11" font-weight="bold">→ At 5:00 am: t = 0</text>
`);

// Step 2: Substitute t = 0 into cosine formula
const step2Svg = baseGraph(`
  <!-- Base cosine path -->
  <path d="${fullCurve}" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
  
  <!-- Angle = 0 evaluation highlight -->
  <line x1="100" y1="310" x2="100" y2="106" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5 3"/>
  <circle cx="100" cy="106" r="6" fill="#f59e0b"/>
  
  <!-- Info card -->
  <rect x="145" y="66" width="280" height="70" rx="8" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="158" y="88" fill="#b45309" font-size="12" font-weight="bold">Substitute t = 0 into angle:</text>
  <text x="158" y="106" fill="#92400e" font-size="11">Angle = (π × 0) / 12 = 0 radians</text>
  <text x="158" y="124" fill="#b45309" font-size="11" font-weight="bold">cos(0) = 1  (Maximum of cosine cycle)</text>
`);

// Step 3: Compute h(0) = 2.2 + 1.2(1) = 3.4 m
const step3Svg = baseGraph(`
  <!-- Full curve -->
  <path d="${fullCurve}" fill="none" stroke="#4f46e5" stroke-width="3.5"/>
  
  <!-- Amplitude bracket on the left, clear of axis ticks -->
  <!-- Midline indicator -->
  <line x1="38" y1="310" x2="38" y2="178" stroke="#64748b" stroke-width="1.5"/>
  <line x1="34" y1="310" x2="42" y2="310" stroke="#64748b" stroke-width="1.5"/>
  <line x1="34" y1="178" x2="42" y2="178" stroke="#64748b" stroke-width="1.5"/>
  <text x="32" y="248" fill="#64748b" font-size="10" font-weight="600" text-anchor="end">midline 2.2</text>
  
  <!-- Amplitude indicator -->
  <line x1="38" y1="178" x2="38" y2="106" stroke="#059669" stroke-width="2"/>
  <line x1="34" y1="106" x2="42" y2="106" stroke="#059669" stroke-width="2"/>
  <text x="32" y="146" fill="#059669" font-size="10" font-weight="bold" text-anchor="end">+1.2 (amp)</text>
  
  <!-- Dashed line to (0, 3.4) -->
  <line x1="38" y1="106" x2="94" y2="106" stroke="#059669" stroke-width="1.5" stroke-dasharray="3 3"/>
  <circle cx="100" cy="106" r="6" fill="#059669"/>
  
  <!-- Result card -->
  <rect x="150" y="65" width="245" height="54" rx="8" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="162" y="87" fill="#065f46" font-size="12" font-weight="bold">Water Height at 5:00 am (t = 0)</text>
  <text x="162" y="107" fill="#047857" font-size="12" font-weight="bold">h(0) = 2.2 + 1.2(1) = 3.4 m</text>
`);

// Step 4: Full tidal cycle (period 24h, high tide 3.4m, low tide 1.0m)
const step4Svg = baseGraph(`
  <!-- Full curve -->
  <path d="${fullCurve}" fill="none" stroke="#4f46e5" stroke-width="3.5"/>
  
  <!-- High tide at t = 0 -->
  <circle cx="100" cy="106" r="6" fill="#059669"/>
  <text x="100" y="88" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">5 am (3.4 m)</text>
  
  <!-- Low tide at t = 12 (5 pm) -->
  <line x1="316" y1="310" x2="316" y2="250" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="316" cy="250" r="6" fill="#dc2626"/>
  <text x="316" y="240" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">5 pm: 1.0 m</text>
  <text x="316" y="270" fill="#b91c1c" font-size="10" text-anchor="middle">(Low tide at t = 12)</text>
  
  <!-- Next High tide at t = 24 (next day 5 am) -->
  <circle cx="532" cy="106" r="6" fill="#059669"/>
  <text x="532" y="88" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Next 5 am (3.4 m)</text>
  
  <!-- Period guide arrow -->
  <line x1="100" y1="65" x2="532" y2="65" stroke="#4f46e5" stroke-width="2"/>
  <polyline points="108,61 100,65 108,69" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <polyline points="524,61 532,65 524,69" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <text x="316" y="58" fill="#3730a3" font-size="12" font-weight="bold" text-anchor="middle">Period T = 24 hours (Full tidal cycle)</text>
`);

// Stem figure (clean without spoiler callouts)
const stemFigure = baseGraph(`
  <!-- Full cosine curve -->
  <path d="${fullCurve}" fill="none" stroke="#4f46e5" stroke-width="3.5"/>
  <circle cx="100" cy="106" r="4.5" fill="#4f46e5"/>
  <circle cx="316" cy="250" r="4.5" fill="#4f46e5"/>
  <circle cx="532" cy="106" r="4.5" fill="#4f46e5"/>
`);

// Update y12a-2.json
const y12a2Path = '/Users/andrewkim/Desktop/sapere1/content/chapters/y12a-2.json';
const y12a2Data = JSON.parse(fs.readFileSync(y12a2Path, 'utf8'));

let targetQ = null;
for (const topic of y12a2Data.topics) {
  for (const q of topic.questions) {
    if (q.id === 'amity2020-ma-q32a') {
      targetQ = q;
      break;
    }
  }
}

if (!targetQ) {
  console.error('Target question amity2020-ma-q32a not found!');
  process.exit(1);
}

// Set clean stem figure
targetQ.figure = { svg: stemFigure };

// Set comprehensive pedagogical 4 steps
targetQ.steps = [
  {
    explain: "Identify the reference starting time. The model specifies that \\(t\\) represents the number of hours elapsed after 5:00 am. Therefore, the starting time of 5:00 am corresponds to \\(t = 0\\).",
    work: "\\(t = 5\\text{ am} - 5\\text{ am} = 0\\)",
    figure: { svg: step1Svg }
  },
  {
    explain: "Substitute \\(t = 0\\) into the tide function argument. The inner angle becomes \\(\\frac{\\pi(0)}{12} = 0\\). Since \\(\\cos(0) = 1\\), the cosine factor reaches its positive peak value.",
    work: "\\(h(0) = 2.2 + 1.2\\cos\\left(\\frac{\\pi \\cdot 0}{12}\\right) = 2.2 + 1.2\\cos(0)\\)",
    figure: { svg: step2Svg }
  },
  {
    explain: "Evaluate the water height using \\(\\cos(0) = 1\\). Geometrically, this is the midline height \\(2.2\\text{ m}\\) plus the maximum positive amplitude \\(+1.2\\text{ m}\\).",
    work: "\\(h(0) = 2.2 + 1.2(1) = 2.2 + 1.2 = \\boxed{3.4\\text{ m}}\\)",
    figure: { svg: step3Svg }
  },
  {
    explain: "Contextualize within the full 24-hour tidal cycle: the wave oscillates with midline \\(2.2\\text{ m}\\), amplitude \\(1.2\\text{ m}\\), and period \\(T = \\frac{2\\pi}{\\pi/12} = 24\\text{ hours}\\). High tide (3.4 m) occurs at 5:00 am and the next morning at 5:00 am.",
    work: "\\(\\text{Range: } [2.2 - 1.2,\\; 2.2 + 1.2] = [1.0\\text{ m},\\; 3.4\\text{ m}]\\)",
    figure: { svg: step4Svg }
  }
];

fs.writeFileSync(y12a2Path, JSON.stringify(y12a2Data, null, 2), 'utf8');
console.log('Successfully updated amity2020-ma-q32a in y12a-2.json!');
