const fs = require('fs');

const R = 5;
const px = 3, py = 4;
const bound = 7;

let grid = '';
for (let i = -bound; i <= bound; i++) {
  if (i >= -2 && i <= 7) {
    grid += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
  }
  grid += `<line x1="${i}" y1="${-2}" x2="${i}" y2="${7}" stroke="#e2e8f0" stroke-width="0.05"/>`;
}

// Without scale(1,-1), let's just do math directly in SVG.
// mathematical y becomes SVG y: svg_y = -math_y
// To keep things simple, let's just NOT use scale(1,-1) and map everything manually.

const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<!-- viewBox: x from -7 to 7, y from -7 to 2 (since svg_y = -math_y, math_y 7 is svg_y -7, math_y -2 is svg_y 2) -->
<svg width="320" height="200" viewBox="-7 -7 14 9" xmlns="http://www.w3.org/2000/svg">
  <!-- grid -->
  <!-- x=-7 to 7, svg_y=-7 to 2 -->
  <g stroke="#e2e8f0" stroke-width="0.05">
    <!-- horizontal lines -->
    <line x1="-7" y1="-7" x2="7" y2="-7"/>
    <line x1="-7" y1="-6" x2="7" y2="-6"/>
    <line x1="-7" y1="-5" x2="7" y2="-5"/>
    <line x1="-7" y1="-4" x2="7" y2="-4"/>
    <line x1="-7" y1="-3" x2="7" y2="-3"/>
    <line x1="-7" y1="-2" x2="7" y2="-2"/>
    <line x1="-7" y1="-1" x2="7" y2="-1"/>
    <line x1="-7" y1="0" x2="7" y2="0"/>
    <line x1="-7" y1="1" x2="7" y2="1"/>
    <line x1="-7" y1="2" x2="7" y2="2"/>
    <!-- vertical lines -->
    <line x1="-7" y1="-7" x2="-7" y2="2"/>
    <line x1="-6" y1="-7" x2="-6" y2="2"/>
    <line x1="-5" y1="-7" x2="-5" y2="2"/>
    <line x1="-4" y1="-7" x2="-4" y2="2"/>
    <line x1="-3" y1="-7" x2="-3" y2="2"/>
    <line x1="-2" y1="-7" x2="-2" y2="2"/>
    <line x1="-1" y1="-7" x2="-1" y2="2"/>
    <line x1="0" y1="-7" x2="0" y2="2"/>
    <line x1="1" y1="-7" x2="1" y2="2"/>
    <line x1="2" y1="-7" x2="2" y2="2"/>
    <line x1="3" y1="-7" x2="3" y2="2"/>
    <line x1="4" y1="-7" x2="4" y2="2"/>
    <line x1="5" y1="-7" x2="5" y2="2"/>
    <line x1="6" y1="-7" x2="6" y2="2"/>
    <line x1="7" y1="-7" x2="7" y2="2"/>
  </g>
  
  <!-- axes -->
  <line x1="-7" y1="0" x2="7" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
  <line x1="0" y1="-7" x2="0" y2="2" stroke="#94a3b8" stroke-width="0.12"/>
  
  <!-- semicircle from A(-5, 0) to B(5, 0) through (0, -5) in SVG space (which is math y=5) -->
  <!-- M -5,0 A 5,5 0 0,1 5,0 -->
  <path d="M -5 0 A 5 5 0 0 1 5 0" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.1"/>
  
  <!-- lines PA and PB. P is math (3, 4) -> svg (3, -4) -->
  <line x1="3" y1="-4" x2="-5" y2="0" stroke="#ef4444" stroke-width="0.1"/>
  <line x1="3" y1="-4" x2="5" y2="0" stroke="#10b981" stroke-width="0.1"/>
  
  <!-- right angle marker at P(3, -4) -->
  <!-- A = (-5, 0), direction P->A is (-8, 4), unit is (-2/rt5, 1/rt5) approx (-0.89, 0.45) -->
  <!-- B = (5, 0), direction P->B is (2, 4), unit is (1/rt5, 2/rt5) approx (0.45, 0.89) -->
  <!-- scale by 0.6: vecA = (-0.54, 0.27), vecB = (0.27, 0.54) -->
  <!-- pts: P+vecA (2.46, -3.73), P+vecA+vecB (2.73, -3.19), P+vecB (3.27, -3.46) -->
  <polyline points="2.46,-3.73 2.73,-3.19 3.27,-3.46" fill="none" stroke="#f59e0b" stroke-width="0.1"/>
  
  <!-- Points -->
  <circle cx="-5" cy="0" r="0.2" fill="#4f46e5"/>
  <circle cx="5" cy="0" r="0.2" fill="#4f46e5"/>
  <circle cx="3" cy="-4" r="0.2" fill="#ef4444"/>
  <circle cx="0" cy="0" r="0.15" fill="#94a3b8"/>
  
  <!-- Labels -->
  <text x="-6.8" y="0.8" font-size="0.75" font-family="sans-serif" fill="#4f46e5">A(−R, 0)</text>
  <text x="4.8" y="0.8" font-size="0.75" font-family="sans-serif" fill="#4f46e5">B(R, 0)</text>
  <text x="3.3" y="-4.3" font-size="0.75" font-family="sans-serif" fill="#ef4444">P(x, y)</text>
  <text x="-0.5" y="0.8" font-size="0.75" font-family="sans-serif" fill="#94a3b8">O</text>
</svg>
</div>
`;

fs.writeFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/test_svg_q11_fixed.html', svg);
