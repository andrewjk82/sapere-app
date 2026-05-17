const fs = require('fs');

const questions = [];

// ========================================================
// SVG Generators
// ========================================================

// 1. Ruler cm (0 to 8)
function getRuler1SVG() {
  let ticks = '';
  // 0 to 8 cm, mapped to x from 25 to 305 (width = 280)
  // 1 cm = 35 pixels
  // Minor ticks every mm (3.5 pixels)
  for (let mm = 0; mm <= 80; mm++) {
    const x = 25 + mm * 3.5;
    let h = 8;
    let stroke = '#64748b';
    if (mm % 10 === 0) {
      h = 18;
      stroke = '#1e293b';
      // Label
      const cmVal = mm / 10;
      ticks += `<text x="${x}" y="${75}" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="600" font-family="'Outfit'">${cmVal}</text>`;
    } else if (mm % 5 === 0) {
      h = 12;
      stroke = '#475569';
    }
    ticks += `<line x1="${x}" y1="30" x2="${x}" y2="${30 + h}" stroke="${stroke}" stroke-width="${mm % 10 === 0 ? 1.5 : 1}"/>`;
  }
  
  // Arrow pointing to 5.4 cm (mm = 54) -> x = 25 + 54 * 3.5 = 214
  const arrowX = 25 + 54 * 3.5;
  
  return `<svg width="340" height="100" viewBox="0 0 340 100" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <!-- Ruler body -->
    <rect x="15" y="30" width="310" height="50" rx="3" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="28" y="47" fill="#64748b" font-size="10" font-weight="bold" font-family="'Outfit'">cm</text>
    ${ticks}
    <!-- Indicator Arrow -->
    <path d="M ${arrowX} 5 L ${arrowX - 5} 17 L ${arrowX + 5} 17 Z" fill="#ef4444"/>
    <line x1="${arrowX}" y1="5" x2="${arrowX}" y2="28" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
  </svg>`;
}

// 2. Beaker mL (5 to 30)
function getBeaker1SVG() {
  let markings = '';
  // 5, 10, 15, 20, 25, 30 mL
  // y ranges from 120 (0 mL) to 30 (30 mL) -> 30px per 10 mL
  // Fill to 15 mL -> y = 75
  const fillY = 75;
  
  for (let val = 5; val <= 30; val += 5) {
    const y = 120 - (val * 3);
    markings += `<line x1="160" y1="${y}" x2="175" y2="${y}" stroke="#475569" stroke-width="1.5"/>`;
    markings += `<text x="180" y="${y + 4}" fill="#475569" font-size="10" font-weight="600" font-family="'Outfit'">${val}</text>`;
  }

  return `<svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <!-- Water liquid fill (15 mL) -->
    <path d="M 85 ${fillY} L 155 ${fillY} L 145 130 L 95 130 Z" fill="#bae6fd" opacity="0.8"/>
    <!-- Glass Beaker Outline -->
    <path d="M 80 20 L 80 25 L 85 25 L 95 130 C 95 133, 100 135, 120 135 C 140 135, 145 133, 145 130 L 155 25 L 160 25 L 160 20 Z" fill="none" stroke="#64748b" stroke-width="2.5"/>
    <text x="120" y="145" text-anchor="middle" fill="#64748b" font-size="9" font-weight="bold" font-family="'Outfit'">mL</text>
    ${markings}
    <!-- Liquid Surface Highlight -->
    <ellipse cx="120" cy="${fillY}" rx="33" ry="4" fill="#7dd3fc" opacity="0.6"/>
    <!-- Red Indicator Arrow -->
    <path d="M 60 ${fillY} L 72 ${fillY - 4} L 72 ${fillY + 4} Z" fill="#ef4444"/>
    <line x1="45" y1="${fillY}" x2="65" y2="${fillY}" stroke="#ef4444" stroke-width="2"/>
  </svg>`;
}

// 3. Dial scale kg (40 to 70)
function getDial1SVG() {
  // Center: (150, 150), radius = 100
  // Needle points to 53 kg.
  // 40 kg is at -135deg, 50 kg is at -45deg, 60 kg is at 45deg, 70 kg is at 135deg.
  // 53 kg corresponds to -18 degrees.
  const angleRad = -18 * Math.PI / 180;
  const needleX = 150 + 75 * Math.cos(angleRad);
  const needleY = 130 + 75 * Math.sin(angleRad);

  return `<svg width="300" height="170" viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <!-- Scale Outer Housing -->
    <path d="M 50 150 L 80 40 C 90 20, 210 20, 220 40 L 250 150 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
    <!-- Dial face -->
    <circle cx="150" cy="130" r="70" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <circle cx="150" cy="130" r="3" fill="#1e293b"/>
    <!-- Core Markings -->
    <!-- 40 kg -->
    <line x1="100" y1="80" x2="108" y2="88" stroke="#1e293b" stroke-width="2"/>
    <text x="92" y="78" fill="#1e293b" font-size="11" font-weight="bold" font-family="'Outfit'">40</text>
    <!-- 50 kg -->
    <line x1="150" y1="60" x2="150" y2="70" stroke="#1e293b" stroke-width="2"/>
    <text x="150" y="52" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="bold" font-family="'Outfit'">50</text>
    <!-- 60 kg -->
    <line x1="200" y1="80" x2="192" y2="88" stroke="#1e293b" stroke-width="2"/>
    <text x="210" y="78" fill="#1e293b" font-size="11" font-weight="bold" font-family="'Outfit'">60</text>
    <!-- Unit label -->
    <text x="150" y="110" text-anchor="middle" fill="#64748b" font-size="10" font-weight="bold" font-family="'Outfit'">kg</text>
    <!-- Red Needle pointing to 53 kg -->
    <line x1="150" y1="130" x2="${needleX}" y2="${needleY}" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="150" cy="130" r="6" fill="#ef4444"/>
    <!-- Red Arrow Indicator pointing from top -->
    <path d="M 150 10 L 150 22 L 146 17 M 150 22 L 154 17" fill="none" stroke="#ef4444" stroke-width="2"/>
  </svg>`;
}

// 4. Ruler 21 to 25 cm
function getRuler2SVG() {
  let ticks = '';
  // 21 to 25 cm, mapped to x from 25 to 305 (width = 280)
  // 1 cm = 70 pixels
  // Minor ticks every mm (7 pixels)
  for (let mm = 0; mm <= 40; mm++) {
    const x = 25 + mm * 7;
    let h = 8;
    let stroke = '#64748b';
    if (mm % 10 === 0) {
      h = 18;
      stroke = '#1e293b';
      // Label
      const cmVal = 21 + mm / 10;
      ticks += `<text x="${x}" y="${75}" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="600" font-family="'Outfit'">${cmVal}</text>`;
    } else if (mm % 5 === 0) {
      h = 12;
      stroke = '#475569';
    }
    ticks += `<line x1="${x}" y1="30" x2="${x}" y2="${30 + h}" stroke="${stroke}" stroke-width="${mm % 10 === 0 ? 1.5 : 1}"/>`;
  }
  
  // Arrow pointing to 23.6 cm (mm = 26) -> x = 25 + 26 * 7 = 207
  const arrowX = 25 + 26 * 7;
  
  return `<svg width="340" height="100" viewBox="0 0 340 100" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <!-- Ruler body -->
    <rect x="15" y="30" width="310" height="50" rx="3" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="28" y="47" fill="#64748b" font-size="10" font-weight="bold" font-family="'Outfit'">cm</text>
    ${ticks}
    <!-- Indicator Arrow -->
    <path d="M ${arrowX} 5 L ${arrowX - 5} 17 L ${arrowX + 5} 17 Z" fill="#ef4444"/>
    <line x1="${arrowX}" y1="5" x2="${arrowX}" y2="28" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
  </svg>`;
}

// 5. Food scale grams (200 to 400)
function getScale2SVG() {
  // Center: (150, 150), radius = 100
  // Needle points to 340 grams.
  // 200 g is at -135deg, 300 g is at -45deg, 400 g is at 45deg.
  // 340 g corresponds to -9 degrees.
  const angleRad = -9 * Math.PI / 180;
  const needleX = 150 + 55 * Math.cos(angleRad);
  const needleY = 120 + 55 * Math.sin(angleRad);

  return `<svg width="300" height="170" viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <!-- Scale Outer Body -->
    <rect x="60" y="30" width="180" height="120" rx="10" fill="#f97316" stroke="#ea580c" stroke-width="2"/>
    <rect x="70" y="20" width="160" height="10" rx="2" fill="#94a3b8"/>
    <!-- Dial face -->
    <circle cx="150" cy="120" r="50" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <circle cx="150" cy="120" r="3" fill="#1e293b"/>
    <!-- Core Markings -->
    <!-- 200 g -->
    <line x1="115" y1="85" x2="122" y2="92" stroke="#1e293b" stroke-width="1.5"/>
    <text x="108" y="78" fill="#1e293b" font-size="9" font-weight="bold" font-family="'Outfit'">200</text>
    <!-- 300 g -->
    <line x1="150" y1="70" x2="150" y2="78" stroke="#1e293b" stroke-width="1.5"/>
    <text x="150" y="62" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="'Outfit'">300</text>
    <!-- 400 g -->
    <line x1="185" y1="85" x2="178" y2="92" stroke="#1e293b" stroke-width="1.5"/>
    <text x="192" y="78" fill="#1e293b" font-size="9" font-weight="bold" font-family="'Outfit'">400</text>
    <!-- Unit label -->
    <text x="150" y="105" text-anchor="middle" fill="#64748b" font-size="8" font-weight="bold" font-family="'Outfit'">grams</text>
    <!-- Red Needle pointing to 340 g -->
    <line x1="150" y1="120" x2="${needleX}" y2="${needleY}" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
    <circle cx="150" cy="120" r="4" fill="#ef4444"/>
    <!-- Red Arrow Indicator pointing to dial -->
    <path d="M 150 15 L 150 25 L 147 21 M 150 25 L 153 21" fill="none" stroke="#ef4444" stroke-width="1.5"/>
  </svg>`;
}

// 6. Beaker 100 to 500 mL
function getBeaker2SVG() {
  let markings = '';
  // 100, 200, 300, 400, 500 mL
  // y ranges from 120 (0 mL) to 30 (500 mL) -> 18px per 100 mL
  // Fill to 350 mL -> y = 57
  const fillY = 57;
  
  for (let val = 100; val <= 500; val += 100) {
    const y = 120 - (val * 0.18);
    markings += `<line x1="160" y1="${y}" x2="175" y2="${y}" stroke="#475569" stroke-width="1.5"/>`;
    markings += `<text x="180" y="${y + 4}" fill="#475569" font-size="10" font-weight="600" font-family="'Outfit'">${val}</text>`;
  }

  return `<svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <!-- Water liquid fill (350 mL) -->
    <path d="M 85 ${fillY} L 155 ${fillY} L 145 130 L 95 130 Z" fill="#bae6fd" opacity="0.8"/>
    <!-- Glass Beaker Outline with Handle -->
    <path d="M 155 40 H 175 V 100 H 148" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
    <path d="M 80 20 L 80 25 L 85 25 L 95 130 C 95 133, 100 135, 120 135 C 140 135, 145 133, 145 130 L 155 25 L 160 25 L 160 20 Z" fill="none" stroke="#64748b" stroke-width="2.5"/>
    <text x="120" y="145" text-anchor="middle" fill="#64748b" font-size="9" font-weight="bold" font-family="'Outfit'">mL</text>
    ${markings}
    <!-- Liquid Surface Highlight -->
    <ellipse cx="120" cy="${fillY}" rx="33" ry="4" fill="#7dd3fc" opacity="0.6"/>
    <!-- Red Indicator Arrow -->
    <path d="M 60 ${fillY} L 72 ${fillY - 4} L 72 ${fillY + 4} Z" fill="#ef4444"/>
    <line x1="45" y1="${fillY}" x2="65" y2="${fillY}" stroke="#ef4444" stroke-width="2"/>
  </svg>`;
}


// ========================================================
// Q1: Visual scale readings (6 questions)
// ========================================================
questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Units of measurement',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Read the scale shown on the ruler below. What is the measurement indicated by the red arrow in centimetres?<br>${getRuler1SVG()}`,
  options: ['5.4 cm', '5.2 cm', '5.8 cm', '6.4 cm'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Identify the main number before the arrow. The arrow is between the $5$ and $6$ cm marks.</p>
    <p><strong>Step 2:</strong> Count the minor ticks (millimetres) after the $5$ cm mark. The arrow points precisely to the $4\text{th}$ tick.</p>
    <p><strong>Step 3:</strong> Since each minor tick represents $0.1\text{ cm}$, the reading is: <br>$5 + (4 \\times 0.1) = 5.4\text{ cm}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Units of measurement',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Read the volume level indicated by the red arrow on the measuring beaker below.<br>${getBeaker1SVG()}`,
  options: ['15 mL', '10 mL', '20 mL', '5 mL'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Locate the position of the liquid level and the red arrow pointing to the scale.</p>
    <p><strong>Step 2:</strong> The arrow points directly at the mark labeled <strong>15</strong>.</p>
    <p><strong>Step 3:</strong> The unit at the bottom of the beaker is <strong>mL</strong>, so the reading is $15\text{ mL}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Units of measurement',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Read the weight indicated on the weighing scale dial below. What is the value shown in kilograms?<br>${getDial1SVG()}`,
  options: ['53 kg', '55 kg', '51 kg', '63 kg'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Identify the major markings around the dial: $40$, $50$, $60$, $70$ kg.</p>
    <p><strong>Step 2:</strong> Notice that the needle has passed $50$ but has not reached $60$ yet.</p>
    <p><strong>Step 3:</strong> Count the small division ticks between $50$ and $60$. The needle is resting exactly on the $3\text{rd}$ division tick past $50$. Therefore, the reading is $53\text{ kg}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Units of measurement',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Read the measurement indicated by the red arrow on the ruler below. What is the reading in centimetres?<br>${getRuler2SVG()}`,
  options: ['23.6 cm', '23.3 cm', '24.6 cm', '23.9 cm'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Look at the main number mark to the left of the arrow, which is $23$ cm.</p>
    <p><strong>Step 2:</strong> Count the small ticks (millimetres) past $23$. The arrow points to the $6\text{th}$ division tick past $23$.</p>
    <p><strong>Step 3:</strong> Since each tick is $0.1\text{ cm}$, the reading is: <br>$23 + (6 \\times 0.1) = 23.6\text{ cm}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Units of measurement',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Read the measurement on the food scale dial below. What is the reading in grams?<br>${getScale2SVG()}`,
  options: ['340 g', '320 g', '360 g', '400 g'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Identify the dial markings: $200$, $300$, $400$ grams.</p>
    <p><strong>Step 2:</strong> The needle is between $300$ and $400$ grams.</p>
    <p><strong>Step 3:</strong> The scale has division ticks every $10\text{ g}$. The needle points to the $4\text{th}$ mark past $300$. Thus, the weight is: <br>$300 + 40 = 340\text{ g}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Units of measurement',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Read the volume level indicated by the red arrow on the beaker below.<br>${getBeaker2SVG()}`,
  options: ['350 mL', '300 mL', '400 mL', '450 mL'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Check the main scale values which go up by $100\text{ mL}$ ($100$, $200$, $300$, $400$, $500$).</p>
    <p><strong>Step 2:</strong> The arrow points halfway between $300$ and $400\text{ mL}$.</p>
    <p><strong>Step 3:</strong> The value exactly halfway between $300$ and $400$ is $350\text{ mL}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q2: Metric Conversions (20 questions)
// ========================================================
const q2Data = [
  { from: '8 cm', to: 'mm', ans: '80', step: 'Since $1\\text{ cm} = 10\\text{ mm}$, we multiply by $10$:<br>$8 \\times 10 = 80\\text{ mm}$.' },
  { from: '240 mm', to: 'cm', ans: '24', step: 'Since $1\\text{ cm} = 10\\text{ mm}$, we divide by $10$:<br>$240 \\div 10 = 24\\text{ cm}$.' },
  { from: '27 cm', to: 'mm', ans: '270', step: 'Multiply by $10$ to convert from cm to mm:<br>$27 \\times 10 = 270\\text{ mm}$.' },
  { from: '5.9 cm', to: 'mm', ans: '59', step: 'Multiply by $10$ to convert from cm to mm:<br>$5.9 \\times 10 = 59\\text{ mm}$.' },
  { from: '38 mm', to: 'cm', ans: '3.8', step: 'Divide by $10$ to convert from mm to cm:<br>$38 \\div 10 = 3.8\\text{ cm}$.' },
  { from: '714 mm', to: 'cm', ans: '71.4', step: 'Divide by $10$ to convert from mm to cm:<br>$714 \\div 10 = 71.4\\text{ cm}$.' },
  { from: '5 m', to: 'cm', ans: '500', step: 'Since $1\\text{ m} = 100\\text{ cm}$, we multiply by $100$:<br>$5 \\times 100 = 500\\text{ cm}$.' },
  { from: '2.4 m', to: 'cm', ans: '240', step: 'Since $1\\text{ m} = 100\\text{ cm}$, we multiply by $100$:<br>$2.4 \\times 100 = 240\\text{ cm}$.' },
  { from: '4 km', to: 'm', ans: '4000', step: 'Since $1\\text{ km} = 1000\\text{ m}$, we multiply by $1000$:<br>$4 \\times 1000 = 4000\\text{ m}$.' },
  { from: '3 km', to: 'cm', ans: '300000', step: 'To convert km to cm, first convert to metres ($3 \\times 1000 = 3000\\text{ m}$), then to centimetres ($3000 \\times 100 = 300,000\\text{ cm}$).' },
  { from: '7.28 km', to: 'm', ans: '7280', step: 'Multiply by $1000$ to convert from km to m:<br>$7.28 \\times 1000 = 7280\\text{ m}$.' },
  { from: '500000 mm', to: 'km', ans: '0.5', step: 'First, divide by $10$ to convert mm to cm ($50000\\text{ cm}$). Next, divide by $100$ to convert cm to m ($500\\text{ m}$). Finally, divide by $1000$ to convert m to km ($500 \\div 1000 = 0.5\\text{ km}$).' },
  { from: '8000 cm', to: 'km', ans: '0.08', step: 'First, divide by $100$ to convert cm to m ($80\\text{ m}$). Next, divide by $1000$ to convert m to km ($80 \\div 1000 = 0.08\\text{ km}$).' },
  { from: '4356 m', to: 'km', ans: '4.356', step: 'Divide by $1000$ to convert m to km:<br>$4356 \\div 1000 = 4.356\\text{ km}$.' },
  { from: '\\frac{3}{4} km', to: 'm', ans: '750', step: 'Since $1\\text{ km} = 1000\\text{ m}$, multiply by $1000$:<br>$\\frac{3}{4} \\times 1000 = 3 \\times 250 = 750\\text{ m}$.' },
  { from: '\\frac{3}{5} m', to: 'cm', ans: '60', step: 'Since $1\\text{ m} = 100\\text{ cm}$, multiply by $100$:<br>$\\frac{3}{5} \\times 100 = 3 \\times 20 = 60\\text{ cm}$.' },
  { from: '\\frac{2}{5} m', to: 'mm', ans: '400', step: 'First convert m to mm ($1\\text{ m} = 1000\\text{ mm}$):<br>$\\frac{2}{5} \\times 1000 = 2 \\times 200 = 400\\text{ mm}$.' },
  { from: '\\frac{9}{10} cm', to: 'mm', ans: '9', step: 'Since $1\\text{ cm} = 10\\text{ mm}$, multiply by $10$:<br>$\\frac{9}{10} \\times 10 = 9\\text{ mm}$.' },
  { from: '\\frac{3}{8} cm', to: 'mm', ans: '3.75', step: 'Multiply by $10$ to convert cm to mm:<br>$\\frac{3}{8} \\times 10 = \\frac{30}{8} = 3.75\\text{ mm}$.' },
  { from: '\\frac{5}{8} cm', to: 'mm', ans: '6.25', step: 'Multiply by $10$ to convert cm to mm:<br>$\\frac{5}{8} \\times 10 = \\frac{50}{8} = 6.25\\text{ mm}$.' }
];

q2Data.forEach((q, idx) => {
  const fVal = parseFloat(q.ans);
  const opts = [
    `$${q.ans}\\text{ ${q.to}}$`,
    `$${(fVal * 10).toString()}\\text{ ${q.to}}$`,
    `$${(fVal / 10).toString()}\\text{ ${q.to}}$`,
    `$${(fVal * 100).toString()}\\text{ ${q.to}}$`
  ];
  
  questions.push({
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Units of measurement',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: idx < 8 ? 'easy' : 'medium',
    isActive: true,
    isManual: true,
    question: `Complete the statement: $${q.from} = \\text{___ } ${q.to}$.`,
    options: opts,
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q3: Mixed Length Conversions (6 questions)
// ========================================================
const q3Data = [
  { from: '5\\text{ cm } 4\\text{ mm}', to: 'cm', ans: '5.4', step: 'Convert $4\\text{ mm}$ to cm ($4 \\div 10 = 0.4\\text{ cm}$), then add to $5\\text{ cm}$:<br>$5 + 0.4 = 5.4\\text{ cm}$.' },
  { from: '7\\text{ cm } 3\\text{ mm}', to: 'mm', ans: '73', step: 'Convert $7\\text{ cm}$ to mm ($7 \\times 10 = 70\\text{ mm}$), then add $3\\text{ mm}$:<br>$70 + 3 = 73\\text{ mm}$.' },
  { from: '9\\text{ cm } 2\\text{ mm}', to: 'cm', ans: '9.2', step: 'Convert $2\\text{ mm}$ to cm ($2 \\div 10 = 0.2\\text{ cm}$), then add to $9\\text{ cm}$:<br>$9 + 0.2 = 9.2\\text{ cm}$.' },
  { from: '4\\text{ m } 78\\text{ cm}', to: 'cm', ans: '478', step: 'Convert $4\\text{ m}$ to cm ($4 \\times 100 = 400\\text{ cm}$), then add $78\\text{ cm}$:<br>$400 + 78 = 478\\text{ cm}$.' },
  { from: '32\\text{ km } 600\\text{ m}', to: 'm', ans: '32600', step: 'Convert $32\\text{ km}$ to m ($32 \\times 1000 = 32000\\text{ m}$), then add $600\\text{ m}$:<br>$32000 + 600 = 32,600\\text{ m}$.' },
  { from: '27\\text{ km } 85\\text{ m}', to: 'km', ans: '27.085', step: 'Convert $85\\text{ m}$ to km ($85 \\div 1000 = 0.085\\text{ km}$), then add to $27\\text{ km}$:<br>$27 + 0.085 = 27.085\\text{ km}$.' }
];

q3Data.forEach((q, idx) => {
  const fVal = parseFloat(q.ans);
  const opts = [
    `$${q.ans}\\text{ ${q.to}}$`,
    `$${(fVal * 10).toString()}\\text{ ${q.to}}$`,
    `$${(fVal / 10).toString()}\\text{ ${q.to}}$`,
    `$${q.ans.replace('.', '')}\\text{ ${q.to}}$`
  ];
  
  questions.push({
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Units of measurement',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Complete the statement: $${q.from} = \\text{___ } ${q.to}$.`,
    options: opts,
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q4: Mass Conversions (8 questions)
// ========================================================
const q4Data = [
  { from: '674 g', to: 'kg', ans: '0.674', step: 'Since $1\\text{ kg} = 1000\\text{ g}$, divide by $1000$:<br>$674 \\div 1000 = 0.674\\text{ kg}$.' },
  { from: '4.8 kg', to: 'g', ans: '4800', step: 'Multiply by $1000$ to convert kg to g:<br>$4.8 \\times 1000 = 4800\\text{ g}$.' },
  { from: '5.6 t', to: 'kg', ans: '5600', step: 'Since $1\\text{ tonne (t)} = 1000\\text{ kg}$, multiply by $1000$:<br>$5.6 \\times 1000 = 5600\\text{ kg}$.' },
  { from: '\\frac{3}{4} kg', to: 'g', ans: '750', step: 'Multiply by $1000$ to convert kg to g:<br>$\\frac{3}{4} \\times 1000 = 3 \\times 250 = 750\\text{ g}$.' },
  { from: '28.6 kg', to: 'g', ans: '28600', step: 'Multiply by $1000$ to convert kg to g:<br>$28.6 \\times 1000 = 28600\\text{ g}$.' },
  { from: '620 mg', to: 'g', ans: '0.62', step: 'Since $1\\text{ g} = 1000\\text{ mg}$, divide by $1000$:<br>$620 \\div 1000 = 0.62\\text{ g}$.' },
  { from: '840 mg', to: 'g', ans: '0.84', step: 'Divide by $1000$ to convert mg to g:<br>$840 \\div 1000 = 0.84\\text{ g}$.' },
  { from: '\\frac{3}{10} t', to: 'kg', ans: '300', step: 'Multiply by $1000$ to convert tonnes to kg:<br>$\\frac{3}{10} \\times 1000 = 300\\text{ kg}$.' }
];

q4Data.forEach((q, idx) => {
  const fVal = parseFloat(q.ans);
  const opts = [
    `$${q.ans}\\text{ ${q.to}}$`,
    `$${(fVal * 10).toString()}\\text{ ${q.to}}$`,
    `$${(fVal / 10).toString()}\\text{ ${q.to}}$`,
    `$${(fVal * 100).toString()}\\text{ ${q.to}}$`
  ];
  
  questions.push({
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Units of measurement',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Complete the statement: $${q.from} = \\text{___ } ${q.to}$.`,
    options: opts,
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q5: Advanced Mixed Conversions (4 questions)
// ========================================================
const q5Data = [
  { text: 'Express $7\\text{ km } 45\\text{ m}$ in metres.', ans: '7045 m', opts: ['7045 m', '7450 m', '745 m', '70045 m'], step: '$7\\text{ km} = 7 \\times 1000 = 7000\\text{ m}$. Adding $45\\text{ m}$ gives: $7000 + 45 = 7045\\text{ m}$.' },
  { text: 'Express $12\\text{ km } 80\\text{ m}$ in metres.', ans: '12080 m', opts: ['12080 m', '12800 m', '1208 m', '120080 m'], step: '$12\\text{ km} = 12000\\text{ m}$. Adding $80\\text{ m}$ gives: $12000 + 80 = 12080\\text{ m}$.' },
  { text: 'Express $5\\text{ t } 60\\text{ kg}$ in kilograms.', ans: '5060 kg', opts: ['5060 kg', '5600 kg', '50060 kg', '506 kg'], step: '$5\\text{ t} = 5 \\times 1000 = 5000\\text{ kg}$. Adding $60\\text{ kg}$ gives: $5000 + 60 = 5060\\text{ kg}$.' },
  { text: 'Express $18\\text{ t } 90\\text{ kg}$ in kilograms.', ans: '18090 kg', opts: ['18090 kg', '18900 kg', '1809 kg', '180090 kg'], step: '$18\\text{ t} = 18000\\text{ kg}$. Adding $90\\text{ kg}$ gives: $18000 + 90 = 18090\\text{ kg}$.' }
];

q5Data.forEach((q) => {
  questions.push({
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Units of measurement',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: q.text,
    options: q.opts.map(o => `$${o}$`),
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q6: Capacity Conversions (4 questions)
// ========================================================
const q6Data = [
  { from: '600 mL', to: 'L', ans: '0.6', step: 'Since $1\\text{ L} = 1000\\text{ mL}$, divide by $1000$:<br>$600 \\div 1000 = 0.6\\text{ L}$.' },
  { from: '2.4 L', to: 'mL', ans: '2400', step: 'Multiply by $1000$ to convert L to mL:<br>$2.4 \\times 1000 = 2400\\text{ mL}$.' },
  { from: '7005 mL', to: 'L', ans: '7.005', step: 'Divide by $1000$ to convert mL to L:<br>$7005 \\div 1000 = 7.005\\text{ L}$.' },
  { from: '5824 L', to: 'kL', ans: '5.824', step: 'Since $1\\text{ kL} = 1000\\text{ L}$, divide by $1000$:<br>$5824 \\div 1000 = 5.824\\text{ kL}$.' }
];

q6Data.forEach((q, idx) => {
  const fVal = parseFloat(q.ans);
  const opts = [
    `$${q.ans}\\text{ ${q.to}}$`,
    `$${(fVal * 10).toString()}\\text{ ${q.to}}$`,
    `$${(fVal / 10).toString()}\\text{ ${q.to}}$`,
    `$${(fVal * 100).toString()}\\text{ ${q.to}}$`
  ];
  
  questions.push({
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Units of measurement',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Complete the statement: $${q.from} = \\text{___ } ${q.to}$.`,
    options: opts,
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q7: Pool lap question
// ========================================================
questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Units of measurement',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Each lap of a swimming pool is $25\\text{ m}$. How many laps must I swim to cover a total distance of $1.5\\text{ km}$?',
  options: ['60', '40', '50', '80'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Convert the target distance from kilometres to metres:<br>$1.5\\text{ km} = 1.5 \\times 1000 = 1500\\text{ m}$.</p>
    <p><strong>Step 2:</strong> Divide the total distance in metres by the length of one lap:<br>$\\text{Number of laps} = \\frac{1500\\text{ m}}{25\\text{ m}} = 60\\text{ laps}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q8: Flour weight bags
// ========================================================
questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Units of measurement',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'A small bag of flour weighs $250\\text{ g}$ and a large bag weighs $2\\text{ kg}$. What is the total weight in both grams and kilograms if you buy $4$ small bags and $3$ large bags of flour?',
  options: [
    '7000 g or 7 kg',
    '6500 g or 6.5 kg',
    '7500 g or 7.5 kg',
    '8000 g or 8 kg'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Calculate the weight of the 4 small bags:<br>$4 \\times 250\\text{ g} = 1000\\text{ g} = 1\\text{ kg}$.</p>
    <p><strong>Step 2:</strong> Calculate the weight of the 3 large bags:<br>$3 \\times 2\\text{ kg} = 6\\text{ kg} = 6000\\text{ g}$.</p>
    <p><strong>Step 3:</strong> Sum the weights to find the total:<br>$\\text{In kilograms:} \\; 1\\text{ kg} + 6\\text{ kg} = 7\\text{ kg}$<br>$\\text{In grams:} \\; 1000\\text{ g} + 6000\\text{ g} = 7000\\text{ g}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q9: Markers on running track
// ========================================================
questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Units of measurement',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Markers on a running track are placed $50\\text{ m}$ apart. If the total distance from the first marker to the last one is $2\\text{ km}$, how many markers are there in total?',
  options: ['41', '40', '39', '42'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Convert the total track distance to metres:<br>$2\\text{ km} = 2000\\text{ m}$.</p>
    <p><strong>Step 2:</strong> Calculate the number of intervals between the markers:<br>$\\text{Intervals} = \\frac{2000\\text{ m}}{50\\text{ m}} = 40$.</p>
    <p><strong>Step 3:</strong> Since there is a marker at both the starting and ending point, the number of markers is always $1$ more than the number of intervals:<br>$\\text{Total markers} = 40 + 1 = 41$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q10: Whiteboard on wall placement
// ========================================================
questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8a',
  topicCode: '8A',
  topicTitle: 'Units of measurement',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'A whiteboard, which is $1.2\\text{ m}$ wide, is to be placed in the exact centre of a classroom wall. The total length of the wall from left to right is $6\\text{ m}$. What is the distance from the left-hand edge of the wall to the left-hand edge of the whiteboard?',
  options: ['2.4 m', '2.6 m', '2.2 m', '4.8 m'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Convert all measurements to the same unit (metres):<br>Wall length $= 6\\text{ m}$<br>Whiteboard width $= 1.2\\text{ m}$.</p>
    <p><strong>Step 2:</strong> Find the total leftover space on the wall by subtracting the whiteboard width from the total wall length:<br>$\\text{Leftover space} = 6\\text{ m} - 1.2\\text{ m} = 4.8\\text{ m}$.</p>
    <p><strong>Step 3:</strong> Since the whiteboard is centered, this leftover space is divided equally between the left and right sides:<br>$\\text{Left side distance} = \\frac{4.8\\text{ m}}{2} = 2.4\\text{ m}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q11: Metric Multiplication and Division (9 questions)
// ========================================================
const q11Data = [
  { q: '$2.06\\text{ kg} \\times 8$', ans: '16.48 kg', opts: ['16.48 kg', '16.8 kg', '164.8 kg', '1.648 kg'], step: 'Multiply the numbers: $2.06 \\times 8 = 16.48$. Keep the unit: $16.48\\text{ kg}$.' },
  { q: '$3.504\\text{ m} \\times 6$', ans: '21.024 m', opts: ['21.024 m', '21.24 m', '210.24 m', '2.1024 m'], step: 'Multiply the numbers: $3.504 \\times 6 = 21.024$. Keep the unit: $21.024\\text{ m}$.' },
  { q: '$15.4\\text{ cm} \\times 12$', ans: '184.8 cm', opts: ['184.8 cm', '18.48 cm', '1848 cm', '1.848 m'], step: 'Multiply the numbers: $15.4 \\times 12 = 184.8$. Keep the unit: $184.8\\text{ cm}$.' },
  { q: '$135\\text{ kg} \\times 14$', ans: '1890 kg', opts: ['1890 kg', '18900 kg', '189 kg', '18.9 kg'], step: 'Multiply the numbers: $135 \\times 14 = 1890$. Keep the unit: $1890\\text{ kg}$.' },
  { q: '$2.508\\text{ t} \\times 24$', ans: '60.192 t', opts: ['60.192 t', '601.92 t', '6.0192 t', '60192 kg'], step: 'Multiply the numbers: $2.508 \\times 24 = 60.192$. Keep the unit: $60.192\\text{ t}$.' },
  { q: '$96\\text{ m} \\div 8$', ans: '12 m', opts: ['12 m', '14 m', '10.5 m', '11.8 m'], step: 'Divide the numbers: $96 \\div 8 = 12$. Keep the unit: $12\\text{ m}$.' },
  { q: '$42.56\\text{ t} \\div 16$', ans: '2.66 t', opts: ['2.66 t', '2.6 t', '26.6 t', '0.266 t'], step: 'Divide the numbers: $42.56 \\div 16 = 2.66$. Keep the unit: $2.66\\text{ t}$.' },
  { q: '$84.288\\text{ kg} \\div 6$', ans: '14.048 kg', opts: ['14.048 kg', '14.48 kg', '1.4048 kg', '140.48 kg'], step: 'Divide the numbers: $84.288 \\div 6 = 14.048$. Keep the unit: $14.048\\text{ kg}$.' },
  { q: '$7.875\\text{ km} \\div 5$', ans: '1.575 km', opts: ['1.575 km', '1.55 km', '15.75 km', '0.1575 km'], step: 'Divide the numbers: $7.875 \\div 5 = 1.575$. Keep the unit: $1.575\\text{ km}$.' }
];

q11Data.forEach((q) => {
  questions.push({
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Units of measurement',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Calculate: ${q.q}`,
    options: q.opts.map(o => `$${o}$`),
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// ========================================================
// Q12: Unit Pricing and Costing (9 questions)
// ========================================================
const q12Data = [
  { q: '$8\\text{ m}$ of string at $85\\text{ c}$ a metre', ans: '$6.80', opts: ['$6.80', '$68.00', '$0.68', '$7.20'], step: 'Cost = length $\\times$ price $= 8 \\times 85\\text{ c} = 680\\text{ c} = \\$6.80$.' },
  { q: '$400\\text{ mm}$ of ribbon at $95\\text{ c}$ a metre', ans: '$0.38', opts: ['$0.38', '$3.80', '$38.00', '$0.40'], step: 'Convert length to metres: $400\\text{ mm} = 0.4\\text{ m}$. <br>Cost $= 0.4 \\times 95\\text{ c} = 38\\text{ c} = \\$0.38$.' },
  { q: '$6\\text{ L}$ of oil at $\\$1.80$ per litre', ans: '$10.80', opts: ['$10.80', '$108.00', '$1.08', '$12.00'], step: 'Cost = volume $\\times$ price per litre $= 6 \\times \\$1.80 = \\$10.80$.' },
  { q: '$200\\text{ g}$ of fudge at $\\$4.50$ a kilogram', ans: '$0.90', opts: ['$0.90', '$9.00', '$0.09', '$1.80'], step: 'Convert mass to kg: $200\\text{ g} = 0.2\\text{ kg}$.<br>Cost $= 0.2 \\times \\$4.50 = \\$0.90$.' },
  { q: '$12\\text{ kg}$ of rice at $\\$0.95$ a kilogram', ans: '$11.40', opts: ['$11.40', '$114.00', '$1.14', '$10.80'], step: 'Cost = mass $\\times$ price per kg $= 12 \\times \\$0.95 = \\$11.40$.' },
  { q: '$350\\text{ m}$ of rope at $\\$140$ a kilometre', ans: '$49.00', opts: ['$49.00', '$490.00', '$4.90', '$56.00'], step: 'Convert length to km: $350\\text{ m} = 0.35\\text{ km}$.<br>Cost $= 0.35 \\times \\$140 = \\$49.00$.' },
  { q: 'carting $8\\text{ t}$ of rubbish at $\\$35$ a tonne', ans: '$280.00', opts: ['$280.00', '$28.00', '$2800.00', '$240.00'], step: 'Cost = mass $\\times$ rate per tonne $= 8 \\times \\$35 = \\$280.00$.' },
  { q: '$300\\text{ mL}$ of shampoo at $\\$8.50$ a litre', ans: '$2.55', opts: ['$2.55', '$25.50', '$0.255', '$3.00'], step: 'Convert volume to litres: $300\\text{ mL} = 0.3\\text{ L}$.<br>Cost $= 0.3 \\times \\$8.50 = \\$2.55$.' },
  { q: '$800\\text{ kg}$ of sand at $\\$25$ a tonne', ans: '$20.00', opts: ['$20.00', '$2.00', '$200.00', '$25.00'], step: 'Convert mass to tonnes: $800\\text{ kg} = 0.8\\text{ t}$.<br>Cost $= 0.8 \\times \\$25 = \\$20.00$.' }
];

q12Data.forEach((q) => {
  questions.push({
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: 'y7-8a',
    topicCode: '8A',
    topicTitle: 'Units of measurement',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isActive: true,
    isManual: true,
    question: `Find the cost of: ${q.q}`,
    options: q.opts,
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

console.log('Total questions built:', questions.length);

// Generate file content
const output = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = ${JSON.stringify(questions, null, 2)};

export const importYear7Ch8A = async (forceReset = false) => {
  console.log('[Ch8A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch8A questions...');
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-8a')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log('Deleted ' + existingSnap.size + ' existing questions.');
    }

    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-8a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log('[Ch8A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch8A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync('src/scripts/importYear7Ch8A.js', output);
console.log('Done!');
