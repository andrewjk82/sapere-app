const fs = require('fs');

const questions = [];

// ========================================================
// SVG Generators
// ========================================================

// 1. Ruler cm (0 to 8)
function getRuler1SVG() {
  let ticks = '';
  for (let mm = 0; mm <= 80; mm++) {
    const x = 25 + mm * 3.5;
    let h = 8;
    let stroke = '#64748b';
    if (mm % 10 === 0) {
      h = 18;
      stroke = '#1e293b';
      const cmVal = mm / 10;
      ticks += `<text x="${x}" y="${75}" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="600" font-family="'Outfit'">${cmVal}</text>`;
    } else if (mm % 5 === 0) {
      h = 12;
      stroke = '#475569';
    }
    ticks += `<line x1="${x}" y1="30" x2="${x}" y2="${30 + h}" stroke="${stroke}" stroke-width="${mm % 10 === 0 ? 1.5 : 1}"/>`;
  }
  const arrowX = 25 + 54 * 3.5;
  return `<svg width="340" height="100" viewBox="0 0 340 100" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <rect x="15" y="30" width="310" height="50" rx="3" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="28" y="47" fill="#64748b" font-size="10" font-weight="bold" font-family="'Outfit'">cm</text>
    ${ticks}
    <path d="M ${arrowX} 5 L ${arrowX - 5} 17 L ${arrowX + 5} 17 Z" fill="#ef4444"/>
    <line x1="${arrowX}" y1="5" x2="${arrowX}" y2="28" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
  </svg>`;
}

// 2. Beaker mL (5 to 30)
function getBeaker1SVG() {
  let markings = '';
  const fillY = 75;
  for (let val = 5; val <= 30; val += 5) {
    const y = 120 - (val * 3);
    markings += `<line x1="160" y1="${y}" x2="175" y2="${y}" stroke="#475569" stroke-width="1.5"/>`;
    markings += `<text x="180" y="${y + 4}" fill="#475569" font-size="10" font-weight="600" font-family="'Outfit'">${val}</text>`;
  }
  return `<svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <path d="M 85 ${fillY} L 155 ${fillY} L 145 130 L 95 130 Z" fill="#bae6fd" opacity="0.8"/>
    <path d="M 80 20 L 80 25 L 85 25 L 95 130 C 95 133, 100 135, 120 135 C 140 135, 145 133, 145 130 L 155 25 L 160 25 L 160 20 Z" fill="none" stroke="#64748b" stroke-width="2.5"/>
    <text x="120" y="145" text-anchor="middle" fill="#64748b" font-size="9" font-weight="bold" font-family="'Outfit'">mL</text>
    ${markings}
    <ellipse cx="120" cy="${fillY}" rx="33" ry="4" fill="#7dd3fc" opacity="0.6"/>
    <path d="M 60 ${fillY} L 72 ${fillY - 4} L 72 ${fillY + 4} Z" fill="#ef4444"/>
    <line x1="45" y1="${fillY}" x2="65" y2="${fillY}" stroke="#ef4444" stroke-width="2"/>
  </svg>`;
}

// 3. Dial scale kg (40 to 70)
function getDial1SVG() {
  const angleRad = -18 * Math.PI / 180;
  const needleX = 150 + 75 * Math.cos(angleRad);
  const needleY = 130 + 75 * Math.sin(angleRad);
  return `<svg width="300" height="170" viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <path d="M 50 150 L 80 40 C 90 20, 210 20, 220 40 L 250 150 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="150" cy="130" r="70" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <circle cx="150" cy="130" r="3" fill="#1e293b"/>
    <line x1="100" y1="80" x2="108" y2="88" stroke="#1e293b" stroke-width="2"/>
    <text x="92" y="78" fill="#1e293b" font-size="11" font-weight="bold" font-family="'Outfit'">40</text>
    <line x1="150" y1="60" x2="150" y2="70" stroke="#1e293b" stroke-width="2"/>
    <text x="150" y="52" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="bold" font-family="'Outfit'">50</text>
    <line x1="200" y1="80" x2="192" y2="88" stroke="#1e293b" stroke-width="2"/>
    <text x="210" y="78" fill="#1e293b" font-size="11" font-weight="bold" font-family="'Outfit'">60</text>
    <text x="150" y="110" text-anchor="middle" fill="#64748b" font-size="10" font-weight="bold" font-family="'Outfit'">kg</text>
    <line x1="150" y1="130" x2="${needleX}" y2="${needleY}" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="150" cy="130" r="6" fill="#ef4444"/>
    <path d="M 150 10 L 150 22 L 146 17 M 150 22 L 154 17" fill="none" stroke="#ef4444" stroke-width="2"/>
  </svg>`;
}

// 4. Ruler 21 to 25 cm
function getRuler2SVG() {
  let ticks = '';
  for (let mm = 0; mm <= 40; mm++) {
    const x = 25 + mm * 7;
    let h = 8;
    let stroke = '#64748b';
    if (mm % 10 === 0) {
      h = 18;
      stroke = '#1e293b';
      const cmVal = 21 + mm / 10;
      ticks += `<text x="${x}" y="${75}" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="600" font-family="'Outfit'">${cmVal}</text>`;
    } else if (mm % 5 === 0) {
      h = 12;
      stroke = '#475569';
    }
    ticks += `<line x1="${x}" y1="30" x2="${x}" y2="${30 + h}" stroke="${stroke}" stroke-width="${mm % 10 === 0 ? 1.5 : 1}"/>`;
  }
  const arrowX = 25 + 26 * 7;
  return `<svg width="340" height="100" viewBox="0 0 340 100" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <rect x="15" y="30" width="310" height="50" rx="3" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="28" y="47" fill="#64748b" font-size="10" font-weight="bold" font-family="'Outfit'">cm</text>
    ${ticks}
    <path d="M ${arrowX} 5 L ${arrowX - 5} 17 L ${arrowX + 5} 17 Z" fill="#ef4444"/>
    <line x1="${arrowX}" y1="5" x2="${arrowX}" y2="28" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
  </svg>`;
}

// 5. Food scale grams (200 to 400)
function getScale2SVG() {
  const angleRad = -9 * Math.PI / 180;
  const needleX = 150 + 55 * Math.cos(angleRad);
  const needleY = 120 + 55 * Math.sin(angleRad);
  return `<svg width="300" height="170" viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <rect x="60" y="30" width="180" height="120" rx="10" fill="#f97316" stroke="#ea580c" stroke-width="2"/>
    <rect x="70" y="20" width="160" height="10" rx="2" fill="#94a3b8"/>
    <circle cx="150" cy="120" r="50" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <circle cx="150" cy="120" r="3" fill="#1e293b"/>
    <line x1="115" y1="85" x2="122" y2="92" stroke="#1e293b" stroke-width="1.5"/>
    <text x="108" y="78" fill="#1e293b" font-size="9" font-weight="bold" font-family="'Outfit'">200</text>
    <line x1="150" y1="70" x2="150" y2="78" stroke="#1e293b" stroke-width="1.5"/>
    <text x="150" y="62" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="'Outfit'">300</text>
    <line x1="185" y1="85" x2="178" y2="92" stroke="#1e293b" stroke-width="1.5"/>
    <text x="192" y="78" fill="#1e293b" font-size="9" font-weight="bold" font-family="'Outfit'">400</text>
    <text x="150" y="105" text-anchor="middle" fill="#64748b" font-size="8" font-weight="bold" font-family="'Outfit'">grams</text>
    <line x1="150" y1="120" x2="${needleX}" y2="${needleY}" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
    <circle cx="150" cy="120" r="4" fill="#ef4444"/>
    <path d="M 150 15 L 150 25 L 147 21 M 150 25 L 153 21" fill="none" stroke="#ef4444" stroke-width="1.5"/>
  </svg>`;
}

// 6. Beaker 100 to 500 mL
function getBeaker2SVG() {
  let markings = '';
  const fillY = 57;
  for (let val = 100; val <= 500; val += 100) {
    const y = 120 - (val * 0.18);
    markings += `<line x1="160" y1="${y}" x2="175" y2="${y}" stroke="#475569" stroke-width="1.5"/>`;
    markings += `<text x="180" y="${y + 4}" fill="#475569" font-size="10" font-weight="600" font-family="'Outfit'">${val}</text>`;
  }
  return `<svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <path d="M 85 ${fillY} L 155 ${fillY} L 145 130 L 95 130 Z" fill="#bae6fd" opacity="0.8"/>
    <path d="M 155 40 H 175 V 100 H 148" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
    <path d="M 80 20 L 80 25 L 85 25 L 95 130 C 95 133, 100 135, 120 135 C 140 135, 145 133, 145 130 L 155 25 L 160 25 L 160 20 Z" fill="none" stroke="#64748b" stroke-width="2.5"/>
    <text x="120" y="145" text-anchor="middle" fill="#64748b" font-size="9" font-weight="bold" font-family="'Outfit'">mL</text>
    ${markings}
    <ellipse cx="120" cy="${fillY}" rx="33" ry="4" fill="#7dd3fc" opacity="0.6"/>
    <path d="M 60 ${fillY} L 72 ${fillY - 4} L 72 ${fillY + 4} Z" fill="#ef4444"/>
    <line x1="45" y1="${fillY}" x2="65" y2="${fillY}" stroke="#ef4444" stroke-width="2"/>
  </svg>`;
}


// ========================================================
// REVIEW SPECIAL SVGS
// ========================================================

// R1: Ruler mm (100 to 180)
function getReviewRulerSVG() {
  let ticks = '';
  // 100 to 180 mm. Mapped to x from 25 to 305 (width = 280)
  // Each mm is 3.5px
  for (let mm = 0; mm <= 80; mm++) {
    const x = 25 + mm * 3.5;
    let h = 8;
    let stroke = '#64748b';
    if (mm % 10 === 0) {
      h = 18;
      stroke = '#1e293b';
      const mmVal = 100 + mm;
      ticks += `<text x="${x}" y="${75}" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="600" font-family="'Outfit'">${mmVal}</text>`;
    } else if (mm % 5 === 0) {
      h = 12;
      stroke = '#475569';
    }
    ticks += `<line x1="${x}" y1="30" x2="${x}" y2="${30 + h}" stroke="${stroke}" stroke-width="${mm % 10 === 0 ? 1.5 : 1}"/>`;
  }
  const arrowX = 25 + 30 * 3.5; // 130 mm
  return `<svg width="340" height="100" viewBox="0 0 340 100" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <rect x="15" y="30" width="310" height="50" rx="3" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="28" y="47" fill="#64748b" font-size="10" font-weight="bold" font-family="'Outfit'">mm</text>
    ${ticks}
    <path d="M ${arrowX} 5 L ${arrowX - 5} 17 L ${arrowX + 5} 17 Z" fill="#ef4444"/>
    <line x1="${arrowX}" y1="5" x2="${arrowX}" y2="28" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
  </svg>`;
}

// R2: Beaker (Capacity 600 mL)
function getReviewBeakerSVG() {
  let markings = '';
  const fillY = 65; // 300 mL level
  for (let val = 100; val <= 600; val += 100) {
    const y = 140 - (val * 0.18);
    markings += `<line x1="160" y1="${y}" x2="175" y2="${y}" stroke="#475569" stroke-width="1.5"/>`;
    markings += `<text x="180" y="${y + 4}" fill="#475569" font-size="10" font-weight="600" font-family="'Outfit'">${val}</text>`;
  }
  return `<svg width="220" height="160" viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <path d="M 85 ${fillY} L 155 ${fillY} L 145 140 L 95 140 Z" fill="#bae6fd" opacity="0.8"/>
    <path d="M 155 40 H 175 V 100 H 148" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
    <path d="M 80 20 L 80 25 L 85 25 L 95 140 C 95 143, 100 145, 120 145 C 140 145, 145 143, 145 140 L 155 25 L 160 25 L 160 20 Z" fill="none" stroke="#64748b" stroke-width="2.5"/>
    <text x="120" y="153" text-anchor="middle" fill="#64748b" font-size="9" font-weight="bold" font-family="'Outfit'">mL</text>
    ${markings}
    <ellipse cx="120" cy="${fillY}" rx="33" ry="4" fill="#7dd3fc" opacity="0.6"/>
    <path d="M 60 ${fillY} L 72 ${fillY - 4} L 72 ${fillY + 4} Z" fill="#ef4444"/>
    <line x1="45" y1="${fillY}" x2="65" y2="${fillY}" stroke="#ef4444" stroke-width="2"/>
  </svg>`;
}

// R3: Syringe (10 mL)
function getReviewSyringeSVG() {
  let ticks = '';
  // 0 to 10 mL, plunger is at 3 mL
  for (let val = 0; val <= 10; val += 2) {
    const x = 70 + val * 16;
    ticks += `<line x1="${x}" y1="40" x2="${x}" y2="52" stroke="#1e293b" stroke-width="1.5"/>`;
    ticks += `<text x="${x}" y="35" text-anchor="middle" fill="#1e293b" font-size="9" font-weight="bold" font-family="'Outfit'">${val}</text>`;
  }
  const plungerX = 70 + 3 * 16;
  return `<svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <!-- Syringe barrel -->
    <rect x="50" y="40" width="190" height="35" rx="2" fill="none" stroke="#64748b" stroke-width="2"/>
    <rect x="35" y="52" width="15" height="10" fill="#94a3b8"/>
    <!-- Liquid fill up to 3 mL (from 0 to 3, which is from 70 to 118) -->
    <rect x="70" y="42" width="48" height="31" fill="#fef08a" opacity="0.8"/>
    <!-- Plunger rod -->
    <rect x="118" y="48" width="150" height="19" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="118" y="41" width="10" height="33" fill="#ef4444"/> <!-- plunger seal -->
    <rect x="258" y="35" width="8" height="45" rx="2" fill="#94a3b8"/>
    ${ticks}
    <text x="210" y="70" fill="#64748b" font-size="9" font-weight="bold" font-family="'Outfit'">mL</text>
    <!-- Arrow indicator -->
    <path d="M ${plungerX} 88 L ${plungerX - 4} 76 L ${plungerX + 4} 76 Z" fill="#ef4444"/>
    <line x1="${plungerX}" y1="88" x2="${plungerX}" y2="70" stroke="#ef4444" stroke-width="1.5"/>
  </svg>`;
}

// R4: Thermometer (-20 to +40 °C)
function getReviewThermometerSVG() {
  let marks = '';
  // y ranges from 30 (40 C) to 130 (-20 C) -> 1.66 px per degree
  // level points to -8 C -> y = 130 - (-8 - (-20)) * 1.66 = 130 - 12 * 1.66 = 110
  const fillY = 110;
  for (let val = -20; val <= 40; val += 10) {
    const y = 130 - (val + 20) * 1.66;
    marks += `<line x1="158" y1="${y}" x2="168" y2="${y}" stroke="#475569" stroke-width="1.5"/>`;
    marks += `<text x="175" y="${y + 4}" fill="#475569" font-size="9" font-weight="bold" font-family="'Outfit'">${val}</text>`;
  }
  return `<svg width="220" height="170" viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <!-- Outer glass body -->
    <rect x="135" y="15" width="20" height="120" rx="10" fill="none" stroke="#64748b" stroke-width="2"/>
    <circle cx="145" cy="142" r="14" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
    <!-- Red Liquid column and bulb -->
    <circle cx="145" cy="142" r="11" fill="#ef4444"/>
    <rect x="142" y="${fillY}" width="6" height="${142 - fillY}" fill="#ef4444"/>
    ${marks}
    <text x="145" y="163" text-anchor="middle" fill="#64748b" font-size="9" font-weight="bold" font-family="'Outfit'">°C</text>
  </svg>`;
}

// R8: L-shaped compound figure (corridor style)
function getReviewLFigureSVG() {
  return `<svg width="280" height="240" viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:8px; border:1px solid #e2e8f0; display:block; margin:10px auto;">
    <!-- Grid pattern background -->
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" stroke-width="1"/>
      </pattern>
    </defs>
    <rect width="280" height="240" fill="url(#grid)" />
    
    <!-- Closed Geometrically Consistent Step Polygon -->
    <!-- Top is 8 cm (160px), Right vertical is 3 cm (60px), Inner horizontal is 5 cm (100px), Inner vertical is 4 cm (80px), Bottom is 3 cm (60px), Left vertical is 7 cm (140px) -->
    <path d="M 50 40 H 210 V 100 H 110 V 180 H 50 Z" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5" stroke-linejoin="round"/>
    
    <!-- Labeled dimensions -->
    <text x="130" y="32" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="bold" font-family="'Outfit'">8 cm</text>
    <text x="225" y="75" fill="#1e293b" font-size="11" font-weight="bold" font-family="'Outfit'">3 cm</text>
    <text x="160" y="115" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="bold" font-family="'Outfit'">5 cm</text>
    <text x="120" y="145" fill="#1e293b" font-size="11" font-weight="bold" font-family="'Outfit'">4 cm</text>
    <text x="80" y="195" text-anchor="middle" fill="#1e293b" font-size="11" font-weight="bold" font-family="'Outfit'">3 cm</text>
    <text x="35" y="115" fill="#1e293b" font-size="11" font-weight="bold" font-family="'Outfit'">7 cm</text>
  </svg>`;
}


// ========================================================
// PUSH ALL original 70 questions (using dynamic generators)
// ========================================================

// original Q1 scale readings (6 questions)
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
    <p><strong>Step 2:</strong> Count the minor ticks (millimetres) after the $5$ cm mark. The arrow points precisely to the $4\\text{th}$ tick.</p>
    <p><strong>Step 3:</strong> Since each minor tick represents $0.1\\text{ cm}$, the reading is: <br>$5 + (4 \\times 0.1) = 5.4\\text{ cm}$.</p>
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
    <p><strong>Step 3:</strong> The unit at the bottom of the beaker is <strong>mL</strong>, so the reading is $15\\text{ mL}$.</p>
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
    <p><strong>Step 3:</strong> Count the small division ticks between $50$ and $60$. The needle is resting exactly on the $3\\text{rd}$ division tick past $50$. Therefore, the reading is $53\\text{ kg}$.</p>
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
    <p><strong>Step 2:</strong> Count the small ticks (millimetres) past $23$. The arrow points to the $6\\text{th}$ division tick past $23$.</p>
    <p><strong>Step 3:</strong> Since each tick is $0.1\\text{ cm}$, the reading is: <br>$23 + (6 \\times 0.1) = 23.6\\text{ cm}$.</p>
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
    <p><strong>Step 3:</strong> The scale has division ticks every $10\\text{ g}$. The needle points to the $4\\text{th}$ mark past $300$. Thus, the weight is: <br>$300 + 40 = 340\\text{ g}$.</p>
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
    <p><strong>Step 1:</strong> Check the main scale values which go up by $100\\text{ mL}$ ($100$, $200$, $300$, $400$, $500$).</p>
    <p><strong>Step 2:</strong> The arrow points halfway between $300$ and $400\\text{ mL}$.</p>
    <p><strong>Step 3:</strong> The value exactly halfway between $300$ and $400$ is $350\\text{ mL}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// original Q2 metric conversions (20 questions)
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

// original Q3 mixed length conversions (6 questions)
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

// original Q4 mass conversions (8 questions)
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

// original Q5 advanced mixed conversions (4 questions)
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

// original Q6 capacity conversions (4 questions)
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

// original Q7 pool lap question
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

// original Q8 flour weight bags
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

// original Q9 markers on track
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

// original Q10 whiteboard wall
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

// original Q11 math calculations (9 questions)
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

// original Q12 unit pricing (9 questions)
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


// ========================================================
// NEW 36 REVIEW QUESTIONS (Q1 to Q11 from review)
// ========================================================

// Q1: Visual scale readings (4 questions)
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
  question: `Read the scale on the measuring tool below. What is the indicated measurement in millimetres?<br>${getReviewRulerSVG()}`,
  options: ['130 mm', '13 mm', '140 mm', '125 mm'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Look at the major number markings on the scale: $100, 110, 120, 130, 140, 150...$</p>
    <p><strong>Step 2:</strong> The red indicator arrow points directly to the mark labeled <strong>130</strong>.</p>
    <p><strong>Step 3:</strong> Since the ruler's unit is marked in millimetres (mm), the reading is $130\\text{ mm}$.</p>
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
  question: `Read the volume level indicated by the red arrow on the measuring beaker below.<br>${getReviewBeakerSVG()}`,
  options: ['300 mL', '250 mL', '350 mL', '400 mL'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Look at the markings on the measuring cup ($100, 200, 300, 400...$ mL).</p>
    <p><strong>Step 2:</strong> The fluid surface and the red arrow point directly at the line for <strong>300</strong>.</p>
    <p><strong>Step 3:</strong> The unit of measurement is millilitres (mL), so the volume is $300\\text{ mL}$.</p>
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
  question: `Read the syringe measurement indicated by the red arrow on the scale below.<br>${getReviewSyringeSVG()}`,
  options: ['3 mL', '4 mL', '2.5 mL', '5 mL'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> The barrel is marked from $0$ to $10\\text{ mL}$, with markings every $1\\text{ mL}$.</p>
    <p><strong>Step 2:</strong> The black rubber seal of the plunger and the indicator arrow are at the line labeled <strong>3</strong>.</p>
    <p><strong>Step 3:</strong> The capacity reading is therefore $3\\text{ mL}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8b',
  topicCode: '8B',
  topicTitle: 'Other units',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: `Read the temperature indicated on the thermometer below in degrees Celsius (°C).<br>${getReviewThermometerSVG()}`,
  options: ['-8 °C', '-12 °C', '-5 °C', '8 °C'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Locate the top of the red liquid column on the thermometer scale.</p>
    <p><strong>Step 2:</strong> The scale is marked in intervals of $10^\\circ\\text{C}$ (e.g. $-20, -10, 0, 10...$), with smaller division lines representing $1^\\circ\\text{C}$ each.</p>
    <p><strong>Step 3:</strong> The liquid level is below $0^\\circ\\text{C}$ but above $-10^\\circ\\text{C}$. Counting down $8$ steps from $0$ (or $2$ steps up from $-10$), we find the temperature is $-8^\\circ\\text{C}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q2: Metric Conversions (11 questions - 8A)
const reviewQ2Convs = [
  { q: '18 mm', to: 'cm', ans: '1.8', step: 'Since $1\\text{ cm} = 10\\text{ mm}$, divide by $10$:<br>$18 \\div 10 = 1.8\\text{ cm}$.' },
  { q: '256 mm', to: 'cm or m', ans: '25.6 cm or 0.256 m', opts: ['25.6 cm or 0.256 m', '2.56 cm or 2.56 m', '256 cm or 0.256 m', '25.6 cm or 2.56 m'], step: 'To convert to cm: divide by $10 \\rightarrow 25.6\\text{ cm}$.<br>To convert to m: divide mm by $1000 \\rightarrow 0.256\\text{ m}$.' },
  { q: '3.7 m', to: 'cm or mm', ans: '370 cm or 3700 mm', opts: ['370 cm or 3700 mm', '37 cm or 370 mm', '3.70 cm or 3700 mm', '370 cm or 370 mm'], step: 'To convert to cm: multiply by $100 \\rightarrow 370\\text{ cm}$.<br>To convert to mm: multiply by $1000 \\rightarrow 3700\\text{ mm}$.' },
  { q: '0.6 km', to: 'm', ans: '600', step: 'Since $1\\text{ km} = 1000\\text{ m}$, multiply by $1000$:<br>$0.6 \\times 1000 = 600\\text{ m}$.' },
  { q: '\\frac{4}{5} cm', to: 'mm', ans: '8', step: 'Convert to mm (multiply by $10$):<br>$\\frac{4}{5} \\times 10 = 4 \\times 2 = 8\\text{ mm}$.' },
  { q: '5 kg', to: 'g', ans: '5000', step: 'Since $1\\text{ kg} = 1000\\text{ g}$, multiply by $1000$:<br>$5 \\times 1000 = 5000\\text{ g}$.' },
  { q: '465 g', to: 'mg or kg', ans: '465000 mg or 0.465 kg', opts: ['465000 mg or 0.465 kg', '4650 mg or 4.65 kg', '46500 mg or 0.465 kg', '465000 mg or 4.65 kg'], step: 'To convert to mg: multiply by $1000 \\rightarrow 465,000\\text{ mg}$.<br>To convert to kg: divide by $1000 \\rightarrow 0.465\\text{ kg}$.' },
  { q: '35 L', to: 'mL', ans: '35000', step: 'Since $1\\text{ L} = 1000\\text{ mL}$, multiply by $1000$:<br>$35 \\times 1000 = 35,000\\text{ mL}$.' },
  { q: '4508 mL', to: 'L', ans: '4.508', step: 'Since $1\\text{ L} = 1000\\text{ mL}$, divide by $1000$:<br>$4508 \\div 1000 = 4.508\\text{ L}$.' },
  { q: '4.7 L', to: 'mL', ans: '4700', step: 'Multiply by $1000$ to convert L to mL:<br>$4.7 \\times 1000 = 4700\\text{ mL}$.' },
  { q: '0.8 m', to: 'cm', ans: '80', step: 'Since $1\\text{ m} = 100\\text{ cm}$, multiply by $100$:<br>$0.8 \\times 100 = 80\\text{ cm}$.' }
];

reviewQ2Convs.forEach((q) => {
  const fVal = parseFloat(q.ans);
  const opts = q.opts ? q.opts : [
    `${q.ans} ${q.to}`,
    `${(fVal * 10).toString()} ${q.to}`,
    `${(fVal / 10).toString()} ${q.to}`,
    `${(fVal * 100).toString()} ${q.to}`
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
    question: `Complete the conversion: $${q.q} = \\text{___ } \\text{${q.to.split(' ')[0]}}$.`,
    options: opts.map(o => `$${o}$`),
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q3: Muesli mixing (1 question - 8A)
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
  question: 'Three different packets of nuts were purchased. Packet A contained $650\\text{ g}$, Packet B contained $1.4\\text{ kg}$, and Packet C contained $850\\text{ g}$. If these are mixed together in one large container, what is the total mass of the mixture, in both kilograms and grams?',
  options: [
    '2.9 kg or 2900 g',
    '2.8 kg or 2800 g',
    '3.1 kg or 3100 g',
    '2.9 kg or 290 g'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Convert all masses to grams to add them easily:<br>
      Packet A $= 650\\text{ g}$<br>
      Packet B $= 1.4 \\times 1000 = 1400\\text{ g}$<br>
      Packet C $= 850\\text{ g}$
    </p>
    <p><strong>Step 2:</strong> Add the weights together:<br>
      $\\text{Total Mass} = 650 + 1400 + 850 = 2900\\text{ g}$
    </p>
    <p><strong>Step 3:</strong> Convert the total back to kilograms:<br>
      $2900 \\div 1000 = 2.9\\text{ kg}$
    </p>
    <p>Therefore, the total mass is $2.9\\text{ kg}$ or $2900\\text{ g}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q4: Aled school bag weight (1 question - 8A)
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
  question: 'Aled has the following items in his school bag. Knowing that $1\\text{ mL}$ of water has a mass of $1\\text{ g}$, and the empty school bag itself weighs $1.5\\text{ kg}$, what is the total mass of Aled’s bag and its contents?<br><ul><li>Laptop computer ($2.8\\text{ kg}$)</li><li>Sandwich ($180\\text{ g}$)</li><li>Water bottle ($20\\text{ g}$ empty bottle, filled with $450\\text{ mL}$ of water)</li><li>Orange ($85\\text{ g}$)</li><li>School books ($760\\text{ g}$)</li><li>Pencil case ($387\\text{ g}$)</li></ul>',
  options: [
    '6.182 kg',
    '6.082 kg',
    '5.982 kg',
    '6.282 kg'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> List and convert all individual items to grams ($1\\text{ kg} = 1000\\text{ g}$):</p>
    <ul>
      <li>Empty bag $= 1.5\\text{ kg} = 1500\\text{ g}$</li>
      <li>Laptop $= 2.8\\text{ kg} = 2800\\text{ g}$</li>
      <li>Sandwich $= 180\\text{ g}$</li>
      <li>Water Bottle $= 20\\text{ g (bottle)} + 450\\text{ g (water)} = 470\\text{ g}$ (since $450\\text{ mL} = 450\\text{ g}$)</li>
      <li>Orange $= 85\\text{ g}$</li>
      <li>School books $= 760\\text{ g}$</li>
      <li>Pencil case $= 387\\text{ g}$</li>
    </ul>
    <p><strong>Step 2:</strong> Add all weights together in grams:<br>
      $\\text{Total Mass} = 1500 + 2800 + 180 + 470 + 85 + 760 + 387 = 6182\\text{ g}$
    </p>
    <p><strong>Step 3:</strong> Convert to kilograms:<br>
      $6182 \\div 1000 = 6.182\\text{ kg}$
    </p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q5: Unitary method chocolate (1 question - 8C)
questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8c',
  topicCode: '8C',
  topicTitle: 'The unitary method',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'If $5$ chocolate blocks cost $\\$8.50$, how much do $3$ chocolate blocks cost?',
  options: ['$5.10', '$5.40', '$4.80', '$5.20'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Find the cost of a single chocolate block (unit cost):<br>
      $\\text{Cost per block} = \\frac{\\$8.50}{5} = \\$1.70$
    </p>
    <p><strong>Step 2:</strong> Multiply the unit cost by the desired quantity ($3$):<br>
      $\\text{Cost of 3 blocks} = \\$1.70 \\times 3 = \\$5.10$
    </p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q6: Unitary method generator (1 question - 8C)
questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8c',
  topicCode: '8C',
  topicTitle: 'The unitary method',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'If a generator needs $24\\text{ L}$ of fuel to run for $4$ days, for how long can it run on $90\\text{ L}$ of fuel?',
  options: ['15 days', '12 days', '16 days', '14.5 days'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Find the rate of fuel consumption per day:<br>
      $\\text{Fuel per day} = \\frac{24\\text{ L}}{4\\text{ days}} = 6\\text{ L/day}$
    </p>
    <p><strong>Step 2:</strong> Divide the total fuel available ($90\\text{ L}$) by the daily consumption rate ($6\\text{ L/day}$):<br>
      $\\text{Days} = \\frac{90\\text{ L}}{6\\text{ L/day}} = 15\\text{ days}$
    </p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q7: Best value apples (1 question - 8C)
questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8c',
  topicCode: '8C',
  topicTitle: 'The unitary method',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Which is the best value: $6$ oranges for $\\$2.52$ or $45$ oranges for $\\$18.45$?',
  options: [
    '45 oranges for $18.45 (better value)',
    '6 oranges for $2.52 (better value)',
    'Both offer exactly the same value',
    'Cannot be determined'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Calculate the unit cost of the first option ($6$ oranges):<br>
      $\\text{Unit cost} = \\frac{\\$2.52}{6} = \\$0.42\\text{ per orange}$
    </p>
    <p><strong>Step 2:</strong> Calculate the unit cost of the second option ($45$ oranges):<br>
      $\\text{Unit cost} = \\frac{\\$18.45}{45} = \\$0.41\\text{ per orange}$
    </p>
    <p><strong>Step 3:</strong> Compare the two unit costs. Since $\\$0.41 < \\$0.42$, buying $45$ oranges is the cheaper, better value option.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q8: L-shaped compound figure (2 questions - 8D/8F)
questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8d',
  topicCode: '8D',
  topicTitle: 'Perimeter',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: `Find the perimeter of the step-like figure shown below.<br>${getReviewLFigureSVG()}`,
  options: ['30 cm', '28 cm', '32 cm', '36 cm'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p>The perimeter is the total distance around the outside of the shape.</p>
    <p><strong>Step 1:</strong> Add up all labeled boundary edges:</p>
    <ul>
      <li>Top edge $= 8\\text{ cm}$</li>
      <li>Right vertical edge $= 3\\text{ cm}$</li>
      <li>Inner horizontal edge $= 5\\text{ cm}$</li>
      <li>Inner vertical edge $= 4\\text{ cm}$</li>
      <li>Bottom edge $= 3\\text{ cm}$</li>
      <li>Left vertical edge $= 7\\text{ cm}$</li>
    </ul>
    <p><strong>Step 2:</strong> Compute the sum:<br>
      $\\text{Perimeter} = 8 + 3 + 5 + 4 + 3 + 7 = 30\\text{ cm}$.
    </p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8f',
  topicCode: '8F',
  topicTitle: 'Areas by addition and subtraction',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: `Find the area of the step-like figure shown below.<br>${getReviewLFigureSVG()}`,
  options: ['36 cm²', '38 cm²', '40 cm²', '42 cm²'],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p>To find the area, we can split this compound shape into two simpler rectangles.</p>
    <p><strong>Method: Split vertically</strong></p>
    <ul>
      <li><strong>Left rectangle:</strong> Width $= 3\\text{ cm}$, Height $= 7\\text{ cm}$<br>
        $\\text{Area}_1 = 3 \\times 7 = 21\\text{ cm}^2$</li>
      <li><strong>Right rectangle:</strong> Width $= 5\\text{ cm}$, Height $= 3\\text{ cm}$ (the top part)<br>
        $\\text{Area}_2 = 5 \\times 3 = 15\\text{ cm}^2$</li>
    </ul>
    <p><strong>Step 2:</strong> Add the two areas together:<br>
      $\\text{Total Area} = 21 + 15 = 36\\text{ cm}^2$.
    </p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q9: Rectangle perimeter & area (8 questions - 8D/8E)
const reviewQ9Data = [
  { type: 'p', name: 'perimeter', l: '120 cm', w: '15 cm', ans: '270 cm', opts: ['270 cm', '135 cm', '1800 cm', '240 cm'], topic: 'y7-8d', title: 'Perimeter', code: '8D', step: 'Perimeter $= 2(l + w) = 2(120 + 15) = 2 \\times 135 = 270\\text{ cm}$.' },
  { type: 'a', name: 'area', l: '120 cm', w: '15 cm', ans: '1800 cm²', opts: ['1800 cm²', '270 cm²', '900 cm²', '180 cm²'], topic: 'y7-8e', title: 'Area', code: '8E', step: 'Area $= l \\times w = 120 \\times 15 = 1800\\text{ cm}^2$.' },
  { type: 'p', name: 'perimeter', l: '9 m', w: '6 m', ans: '30 m', opts: ['30 m', '15 m', '54 m', '24 m'], topic: 'y7-8d', title: 'Perimeter', code: '8D', step: 'Perimeter $= 2(l + w) = 2(9 + 6) = 30\\text{ m}$.' },
  { type: 'a', name: 'area', l: '9 m', w: '6 m', ans: '54 m²', opts: ['54 m²', '30 m²', '27 m²', '36 m²'], topic: 'y7-8e', title: 'Area', code: '8E', step: 'Area $= l \\times w = 9 \\times 6 = 54\\text{ m}^2$.' },
  { type: 'p', name: 'perimeter', l: '75 mm', w: '28 mm', ans: '206 mm', opts: ['206 mm', '103 mm', '2100 mm', '150 mm'], topic: 'y7-8d', title: 'Perimeter', code: '8D', step: 'Perimeter $= 2(l + w) = 2(75 + 28) = 206\\text{ mm}$.' },
  { type: 'a', name: 'area', l: '75 mm', w: '28 mm', ans: '2100 mm²', opts: ['2100 mm²', '206 mm²', '1050 mm²', '210 mm²'], topic: 'y7-8e', title: 'Area', code: '8E', step: 'Area $= l \\times w = 75 \\times 28 = 2100\\text{ mm}^2$.' },
  { type: 'p', name: 'perimeter', l: '4a', w: '3b', ans: '8a + 6b', opts: ['8a + 6b', '4a + 3b', '12ab', '16a + 9b'], topic: 'y7-8d', title: 'Perimeter', code: '8D', step: 'Perimeter $= 2(l + w) = 2(4a + 3b) = 8a + 6b$.' },
  { type: 'a', name: 'area', l: '4a', w: '3b', ans: '12ab', opts: ['12ab', '4a + 3b', '8a + 6b', '12a²b²'], topic: 'y7-8e', title: 'Area', code: '8E', step: 'Area $= l \\times w = 4a \\times 3b = 12ab$.' }
];

reviewQ9Data.forEach((q) => {
  questions.push({
    chapterId: 'y7-8',
    chapterTitle: 'Chapter 8: Measurement',
    topicId: q.topic,
    topicCode: q.code,
    topicTitle: q.title,
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: q.l.includes('a') ? 'hard' : 'medium',
    isActive: true,
    isManual: true,
    question: `Find the ${q.name} of a rectangle with length $${q.l}$ and width $${q.w}$.`,
    options: q.opts.map(o => `$${o}$`),
    answer: 0,
    solution: `<div style="text-align: left;">
      <p><strong>Step-by-step breakdown:</strong></p>
      <p>${q.step}</p>
    </div>`,
    createdAt: new Date().toISOString()
  });
});

// Q10: Calculate time elapsed (3 questions - 8I)
questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8i',
  topicCode: '8I',
  topicTitle: 'Time',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Calculate the time elapsed between $8\\text{ p.m.}$ on Monday and $7:35\\text{ a.m.}$ on Wednesday.',
  options: [
    '35 hours, 35 minutes',
    '34 hours, 35 minutes',
    '36 hours, 35 minutes',
    '35 hours, 15 minutes'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Count the time from Monday 8 p.m. to Tuesday 8 p.m.:<br>
      This is exactly $24\\text{ hours}$.
    </p>
    <p><strong>Step 2:</strong> Count the time from Tuesday 8 p.m. to Wednesday 8 a.m. (the next morning):<br>
      This is exactly $12\\text{ hours}$.<br>
      Accumulated total $= 24 + 12 = 36\\text{ hours}$ (representing Wednesday 8:00 a.m.).
    </p>
    <p><strong>Step 3:</strong> Since the end time is 7:35 a.m., which is $25\\text{ minutes}$ before 8:00 a.m., we subtract $25\\text{ minutes}$ from $36\\text{ hours}$:<br>
      $36\\text{ hours} - 25\\text{ minutes} = 35\\text{ hours and } 35\\text{ minutes}$.
    </p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8i',
  topicCode: '8I',
  topicTitle: 'Time',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Calculate the time elapsed between $9:15\\text{ a.m.}$ and $4:12\\text{ p.m.}$ on the same day.',
  options: [
    '6 hours, 57 minutes',
    '7 hours, 57 minutes',
    '6 hours, 43 minutes',
    '7 hours, 12 minutes'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Convert both times to 24-hour format:<br>
      $9:15\\text{ a.m.} \\rightarrow 09:15$<br>
      $4:12\\text{ p.m.} \\rightarrow 16:12$
    </p>
    <p><strong>Step 2:</strong> Subtract the start time from the end time:<br>
      $16:12 - 09:15$
    </p>
    <p>Since 12 minutes is less than 15 minutes, borrow 1 hour (60 minutes) from 16:<br>
      $16:12 = 15:72$<br>
      $15:72 - 09:15 = 6\\text{ hours and } 57\\text{ minutes}$.
    </p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8i',
  topicCode: '8I',
  topicTitle: 'Time',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'Calculate the difference between two finish times for a race: $02:28:15$ and $03:42:38$.',
  options: [
    '1 hour, 14 minutes, 23 seconds',
    '1 hour, 14 minutes, 15 seconds',
    '1 hour, 24 minutes, 23 seconds',
    '1 hour, 15 minutes, 23 seconds'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p>Subtract the earlier time from the later time:</p>
    <p>$$\\begin{array}{rccc} & 03 & : & 42 & : & 38 \\\\ - & 02 & : & 28 & : & 15 \\\\ \\hline & 01 & : & 14 & : & 23 \\end{array}$$</p>
    <p>Therefore, the time difference is $1\\text{ hour, } 14\\text{ minutes, and } 23\\text{ seconds}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

// Q11: What is the time (3 questions - 8I)
questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8i',
  topicCode: '8I',
  topicTitle: 'Time',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'What is the time $4\\text{ hours, } 18\\text{ minutes and } 45\\text{ seconds}$ after $3:15\\text{ p.m.}$?',
  options: [
    '7:33:45 p.m.',
    '7:15:45 p.m.',
    '7:33:45 a.m.',
    '8:33:45 p.m.'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Start with the initial time: $3\\text{ p.m.} \\; 15\\text{ minutes} \\; 00\\text{ seconds}$.</p>
    <p><strong>Step 2:</strong> Add the hours:<br>
      $3\\text{ p.m.} + 4\\text{ hours} = 7\\text{ p.m.}$
    </p>
    <p><strong>Step 3:</strong> Add the minutes:<br>
      $15\\text{ minutes} + 18\\text{ minutes} = 33\\text{ minutes}$
    </p>
    <p><strong>Step 4:</strong> Add the seconds:<br>
      $00\\text{ seconds} + 45\\text{ seconds} = 45\\text{ seconds}$
    </p>
    <p>The resulting time is $7:33:45\\text{ p.m.}$.</p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8i',
  topicCode: '8I',
  topicTitle: 'Time',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'hard',
  isActive: true,
  isManual: true,
  question: 'What is the day and time $3\\text{ days, } 14\\text{ hours and } 8\\text{ minutes}$ before midnight on Friday?',
  options: [
    'Monday, 9:52 a.m.',
    'Tuesday, 9:52 a.m.',
    'Monday, 10:52 a.m.',
    'Sunday, 9:52 p.m.'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p>Midnight on Friday is equivalent to Friday 12:00 a.m. (or the very start of Saturday).</p>
    <p><strong>Step 1:</strong> Go back exactly $3$ days from Friday midnight:<br>
      This brings us to <strong>Tuesday midnight (12:00 a.m.)</strong>.
    </p>
    <p><strong>Step 2:</strong> Go back $14\\text{ hours}$ from Tuesday midnight:<br>
      Going back $12\\text{ hours}$ brings us to Monday noon (12:00 p.m.).<br>
      Going back another $2\\text{ hours}$ brings us to <strong>Monday 10:00 a.m.</strong>.
    </p>
    <p><strong>Step 3:</strong> Go back $8\\text{ minutes}$ from Monday 10:00 a.m.:<br>
      $10:00\\text{ a.m.} - 8\\text{ minutes} =$ <strong>Monday 9:52 a.m.</strong>.
    </p>
  </div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-8',
  chapterTitle: 'Chapter 8: Measurement',
  topicId: 'y7-8i',
  topicCode: '8I',
  topicTitle: 'Time',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'What is the time $4\\text{ hours, } 22\\text{ minutes}$ after $10:45\\text{ a.m.}$?',
  options: [
    '3:07 p.m.',
    '2:07 p.m.',
    '3:07 a.m.',
    '2:45 p.m.'
  ],
  answer: 0,
  solution: `<div style="text-align: left;">
    <p><strong>Step-by-step breakdown:</strong></p>
    <p><strong>Step 1:</strong> Start at $10:45\\text{ a.m.}$.</p>
    <p><strong>Step 2:</strong> Add $4\\text{ hours}$:<br>
      $10:45\\text{ a.m.} + 4\\text{ hours} = 2:45\\text{ p.m.}$ (since we pass 12:00 p.m. noon).
    </p>
    <p><strong>Step 3:</strong> Add $22\\text{ minutes}$ to $2:45\\text{ p.m.}$.<br>
      $45 + 22 = 67\\text{ minutes} = 1\\text{ hour and } 7\\text{ minutes}$.<br>
      $2:45\\text{ p.m.} + 1\\text{ hour } 7\\text{ minutes} = 3:07\\text{ p.m.}$.
    </p>
  </div>`,
  createdAt: new Date().toISOString()
});

console.log('Total combined Chapter 8 questions built:', questions.length);

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
      console.log('Force reset enabled. Deleting existing Y7 Ch8 (8a to 8j) review & units questions...');
      const topicsToDelete = ['y7-8a', 'y7-8b', 'y7-8c', 'y7-8d', 'y7-8e', 'y7-8f', 'y7-8g', 'y7-8h', 'y7-8i', 'y7-8j'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch8 topic questions.');
    }

    // To prevent duplicates, query all existing questions in Ch8 topics
    const existingQuestions = new Set();
    const topicsToCheck = ['y7-8a', 'y7-8b', 'y7-8c', 'y7-8d', 'y7-8e', 'y7-8f', 'y7-8g', 'y7-8h', 'y7-8i', 'y7-8j'];
    for (const tId of topicsToCheck) {
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
      existingSnap.docs.forEach(doc => {
        existingQuestions.add(doc.data().question.trim());
      });
    }
    
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
