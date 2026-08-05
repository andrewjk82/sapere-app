const fs = require('fs');

function makeSvg() {
  const scaleX = 30; // 30px per unit
  const scaleY = 15; // 15px per unit (to fit y up to 12)
  const originX = 150; // origin at x = 150 (allows x down to -4)
  const originY = 250; // origin at y = 250 (allows y up to 12, down to -4)
  
  // y = |x - 1|
  const ptsAbs = [
    `${originX + (-4)*scaleX},${originY - (5)*scaleY}`,
    `${originX + (1)*scaleX},${originY - (0)*scaleY}`,
    `${originX + (4)*scaleX},${originY - (3)*scaleY}`
  ].join(' ');
  
  // y = 2x + 4
  const ptsLine = [
    `${originX + (-4)*scaleX},${originY - (-4)*scaleY}`,
    `${originX + (4)*scaleX},${originY - (12)*scaleY}`
  ].join(' ');

  const svg = `<svg viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg">
<defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.curve-abs { stroke: #3b82f6; stroke-width: 3; fill: none; }.curve-line { stroke: #ef4444; stroke-width: 3; fill: none; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }.pt { fill: #1e293b; }</style></defs>
<rect width="350" height="350" fill="#ffffff" />
<g>
  <!-- Axes -->
  <line x1="20" y1="${originY}" x2="330" y2="${originY}" class="axis" />
  <text x="320" y="${originY + 20}" class="label">x</text>
  <line x1="${originX}" y1="330" x2="${originX}" y2="20" class="axis" />
  <text x="${originX - 15}" y="25" class="label">y</text>
  <text x="${originX - 15}" y="${originY + 20}" class="label">0</text>
  
  <!-- Curves -->
  <polyline points="${ptsAbs}" class="curve-abs" />
  <polyline points="${ptsLine}" class="curve-line" />
  
  <!-- Labels -->
  <text x="${originX + (4)*scaleX + 5}" y="${originY - (3)*scaleY}" class="label" fill="#3b82f6">y = |x - 1|</text>
  <text x="${originX + (4)*scaleX - 80}" y="${originY - (12)*scaleY + 20}" class="label" fill="#ef4444">y = 2x + 4</text>
  
  <!-- Key points -->
  <circle cx="${originX + (1)*scaleX}" cy="${originY - (0)*scaleY}" r="4" class="pt" />
  <text x="${originX + (1)*scaleX - 10}" y="${originY - (0)*scaleY + 20}" class="label">(1, 0)</text>
  
  <circle cx="${originX + (-2)*scaleX}" cy="${originY - (0)*scaleY}" r="4" class="pt" />
  <text x="${originX + (-2)*scaleX - 25}" y="${originY - (0)*scaleY - 10}" class="label">(-2, 0)</text>
  
  <circle cx="${originX + (0)*scaleX}" cy="${originY - (1)*scaleY}" r="4" class="pt" />
  <text x="${originX + (0)*scaleX + 5}" y="${originY - (1)*scaleY + 5}" class="label">(0, 1)</text>
  
  <circle cx="${originX + (0)*scaleX}" cy="${originY - (4)*scaleY}" r="4" class="pt" />
  <text x="${originX + (0)*scaleX - 45}" y="${originY - (4)*scaleY + 5}" class="label">(0, 4)</text>
</g>
</svg>`;
  return svg.replace(/\n/g, '');
}

fs.writeFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/genSvg25a.json', JSON.stringify({ svg: makeSvg() }, null, 2));
console.log("SVG generated.");
