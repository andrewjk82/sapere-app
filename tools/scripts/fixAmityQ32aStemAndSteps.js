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

function baseFrame(body = '') {
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

  ${body}
</svg>`;
}

// Step 1: Physical Problem Setup & t = 0 interpretation
const step1Svg = baseFrame(`
  <!-- Base cosine path (light dashed to indicate prospective motion) -->
  <path d="${fullCurve}" fill="none" stroke="#cbd5e1" stroke-width="2.5" stroke-dasharray="5 4"/>
  
  <!-- Initial point at t = 0 on t-axis -->
  <circle cx="100" cy="310" r="5" fill="#2563eb"/>
  <line x1="100" y1="310" x2="100" y2="106" stroke="#2563eb" stroke-width="2" stroke-dasharray="4 3"/>
  <circle cx="100" cy="106" r="6" fill="#2563eb"/>

  <!-- Callout box explaining t = 0 -->
  <rect x="145" y="210" width="250" height="72" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="158" y="234" fill="#1e40af" font-size="12" font-weight="bold">Step 1: Reference Time</text>
  <text x="158" y="252" fill="#1e40af" font-size="11">t is defined as hours elapsed after 5:00 am</text>
  <text x="158" y="270" fill="#2563eb" font-size="12" font-weight="bold">→ At 5:00 am: t = 0</text>
`);

// Step 2: Evaluating the angle and cosine value: cos(0) = 1
const step2Svg = baseFrame(`
  <!-- Base cosine curve -->
  <path d="${fullCurve}" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
  
  <!-- Focus on t = 0 -->
  <line x1="100" y1="310" x2="100" y2="106" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5 3"/>
  <circle cx="100" cy="106" r="7" fill="#f59e0b"/>
  
  <!-- Info card explaining angle evaluation -->
  <rect x="150" y="65" width="280" height="72" rx="8" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="162" y="88" fill="#b45309" font-size="12" font-weight="bold">Step 2: Evaluate the Cosine Argument</text>
  <text x="162" y="106" fill="#92400e" font-size="11">Substitute t = 0: (π × 0) / 12 = 0 radians</text>
  <text x="162" y="125" fill="#b45309" font-size="12" font-weight="bold">cos(0) = 1  (Peak / Maximum of cosine)</text>
`);

// Step 3: Calculation: Midline + Amplitude = Water Height
const step3Svg = baseFrame(`
  <!-- Full curve -->
  <path d="${fullCurve}" fill="none" stroke="#4f46e5" stroke-width="3.5"/>
  
  <!-- Amplitude vertical arrow from midline (100, 178) to peak (100, 106) -->
  <line x1="112" y1="178" x2="112" y2="106" stroke="#059669" stroke-width="2"/>
  <polyline points="108,114 112,106 116,114" fill="none" stroke="#059669" stroke-width="2"/>
  <text x="120" y="146" fill="#059669" font-size="11" font-weight="bold">+1.2 m (amplitude)</text>
  
  <!-- Highlight peak point (0, 3.4) -->
  <circle cx="100" cy="106" r="6.5" fill="#059669"/>
  
  <!-- Result card -->
  <rect x="160" y="65" width="250" height="58" rx="8" fill="#ecfdf5" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="172" y="88" fill="#065f46" font-size="12" font-weight="bold">Step 3: Midline + Amplitude</text>
  <text x="172" y="109" fill="#047857" font-size="12" font-weight="bold">h(0) = 2.2 + 1.2(1) = 3.4 m</text>
`);

// Step 4: Tidal cycle context
const step4Svg = baseFrame(`
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

// 1. Remove figure from question stem as explicitly requested ("문제에 그림이 있으면 안되")
delete targetQ.figure;

// 2. Clear, pedagogical step by step
targetQ.steps = [
  {
    explain: "시간 변수 \\(t\\)의 기준 시점을 파악합니다.\n문제에서 \\(t\\)는 **5 am 이후 경과한 시간(hours after 5 am)**으로 정의되어 있습니다.\n따라서 구하고자 하는 시점인 **5 am**은 시작 시점이므로 \\(t = 0\\)에 해당합니다.",
    work: "\\(t = 5\\text{ am} - 5\\text{ am} = 0\\)",
    figure: { svg: step1Svg }
  },
  {
    explain: "물높이 모델 \\(h(t) = 2.2 + 1.2\\cos\\left(\\frac{\\pi t}{12}\\right)\\)에 \\(t = 0\\)을 대입합니다.\n코사인 안의 각도는 \\(\\frac{\\pi \\cdot 0}{12} = 0\\text{ rad}\\)이 되며, 코사인 함수는 \\(0\\)에서 최댓값 \\(\\cos(0) = 1\\)을 갖습니다.",
    work: "\\(h(0) = 2.2 + 1.2\\cos\\left(\\frac{\\pi \\cdot 0}{12}\\right) = 2.2 + 1.2\\cos(0)\\)",
    figure: { svg: step2Svg }
  },
  {
    explain: "\\(\\cos(0) = 1\\)을 대입하여 물높이를 계산합니다.\n수학적으로 이는 중심선(Midline) 높이인 \\(2.2\\text{ m}\\)에 최대 진폭(Amplitude)인 \\(+1.2\\text{ m}\\)를 더한 최고점(만조, High tide)에 해당합니다.",
    work: "\\(h(0) = 2.2 + 1.2(1) = 2.2 + 1.2 = \\boxed{3.4\\text{ m}}\\)",
    figure: { svg: step3Svg }
  },
  {
    explain: "24시간 조석 주기(Tidal Cycle)를 통해 검산합니다.\n주기는 \\(T = \\frac{2\\pi}{\\pi/12} = 24\\text{시간}\\)이며, 물높이는 최솟값(간조) \\(1.0\\text{ m}\\)에서 최댓값(만조) \\(3.4\\text{ m}\\) 사이를 진동합니다.\n따라서 5 am(\\(\\mathbf{t = 0}\\))에서의 물높이는 정확히 \\(3.4\\text{ m}\\)입니다.",
    work: "\\(\\text{Range: } [2.2 - 1.2,\\; 2.2 + 1.2] = [1.0\\text{ m},\\; 3.4\\text{ m}]\\)",
    figure: { svg: step4Svg }
  }
];

fs.writeFileSync(y12a2Path, JSON.stringify(y12a2Data, null, 2), 'utf8');
console.log('Successfully updated amity2020-ma-q32a: figure removed from stem, detailed Korean/English pedagogical steps added!');
