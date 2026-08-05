const fs = require('fs');

function makeSvg() {
  const scaleX = 40;
  const scaleY = 40;
  const originX = 200;
  const originY = 200;

  let rightPts = [];
  for (let x = 1; x <= 8; x += 0.1) {
    let y = Math.asin(1 / x);
    let px = originX + x * scaleX;
    let py = originY - y * scaleY;
    rightPts.push(`${px.toFixed(2)},${py.toFixed(2)}`);
  }

  let leftPts = [];
  for (let x = -8; x <= -1; x += 0.1) {
    let y = Math.asin(1 / x);
    let px = originX + x * scaleX;
    let py = originY - y * scaleY;
    leftPts.push(`${px.toFixed(2)},${py.toFixed(2)}`);
  }

  const svg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #94a3b8; stroke-width: 2; }
.asym { stroke: #ef4444; stroke-width: 2; stroke-dasharray: 5,5; }
.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
.fraction-text { font-size: 12px; fill: #1e293b; font-family: sans-serif; }
.dot { fill: #3b82f6; }
</style>
</defs>
<rect width="400" height="400" fill="#ffffff" />
<g>
  <!-- Axes -->
  <line x1="20" y1="200" x2="380" y2="200" class="axis" />
  <text x="370" y="220" class="label">x</text>
  <line x1="200" y1="380" x2="200" y2="20" class="axis" />
  <text x="180" y="30" class="label">y</text>
  
  <text x="185" y="215" class="label">0</text>
  <text x="235" y="215" class="label">1</text>
  <text x="155" y="215" class="label">-1</text>
  
  <!-- pi/2 -->
  <text x="210" y="132" class="fraction-text">\u03c0</text>
  <line x1="208" y1="136" x2="220" y2="136" stroke="#1e293b" stroke-width="1.5" />
  <text x="210" y="148" class="fraction-text">2</text>
  
  <!-- -pi/2 -->
  <text x="207" y="263" class="label">-</text>
  <text x="217" y="258" class="fraction-text">\u03c0</text>
  <line x1="215" y1="262" x2="227" y2="262" stroke="#1e293b" stroke-width="1.5" />
  <text x="217" y="274" class="fraction-text">2</text>
  
  <!-- Curves -->
  <polyline points="${rightPts.join(' ')}" class="curve" />
  <polyline points="${leftPts.join(' ')}" class="curve" />
  
  <!-- Endpoints -->
  <circle cx="240" cy="137.17" r="4" class="dot" />
  <circle cx="160" cy="262.83" r="4" class="dot" />
</g>
</svg>`;

  fs.writeFileSync('tools/scripts/genSvg24Frac.json', JSON.stringify({ svg }));
  console.log("SVG generated");
}

makeSvg();
