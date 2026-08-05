const fs = require('fs');

function makeSvg() {
  const scale = 30;
  const originX = 150; // origin at x = 150, y = 250 (allows x up to 8, y up to 8)
  const originY = 250;

  // Asymptotes at x=2, y=1
  const vAsymX = originX + 2 * scale; // 150 + 60 = 210
  const hAsymY = originY - 1 * scale; // 250 - 30 = 220

  const ptsLeft = [];
  // Left branch: x from -3 to 1.8
  for (let x = -3; x <= 1.8; x += 0.1) {
    const y = 1 / (x - 2) + 1;
    if (y < -3 || y > 5) continue; // bound y
    const px = originX + x * scale;
    const py = originY - y * scale;
    ptsLeft.push(`${px.toFixed(2)},${py.toFixed(2)}`);
  }

  const ptsRight = [];
  // Right branch: x from 2.2 to 7
  for (let x = 2.2; x <= 7; x += 0.1) {
    const y = 1 / (x - 2) + 1;
    if (y < -3 || y > 5) continue;
    const px = originX + x * scale;
    const py = originY - y * scale;
    ptsRight.push(`${px.toFixed(2)},${py.toFixed(2)}`);
  }

  const svg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.asym { stroke: #ef4444; stroke-width: 2; stroke-dasharray: 5,5; }.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }.asym-label { font-size: 12px; fill: #ef4444; font-family: sans-serif; font-weight: bold; }</style></defs>
<rect width="400" height="400" fill="#ffffff" />
<g>
  <!-- Axes -->
  <line x1="30" y1="${originY}" x2="370" y2="${originY}" class="axis" />
  <text x="360" y="${originY + 20}" class="label">x</text>
  <line x1="${originX}" y1="350" x2="${originX}" y2="50" class="axis" />
  <text x="${originX - 15}" y="55" class="label">y</text>
  <text x="${originX - 15}" y="${originY + 20}" class="label">0</text>
  
  <!-- Asymptotes -->
  <line x1="${vAsymX}" y1="350" x2="${vAsymX}" y2="50" class="asym" />
  <text x="${vAsymX + 5}" y="60" class="asym-label">x = 2</text>
  
  <line x1="30" y1="${hAsymY}" x2="370" y2="${hAsymY}" class="asym" />
  <text x="35" y="${hAsymY - 10}" class="asym-label">y = 1</text>
  
  <!-- Curves -->
  <polyline points="${ptsLeft.join(' ')}" class="curve" />
  <polyline points="${ptsRight.join(' ')}" class="curve" />
</g>
</svg>`;
  
  return svg.replace(/\n/g, ''); // remove newlines for compact storage
}

fs.writeFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/genSvg24s.json', JSON.stringify({ svg: makeSvg() }, null, 2));
console.log("SVG generated.");
