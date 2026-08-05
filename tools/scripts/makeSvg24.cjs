const fs = require('fs');

function makeSvg() {
  const scaleX = 40; // 40px per unit for x
  const scaleY = 40; // 40px per unit for y
  const originX = 200; // center at 200
  const originY = 200; // center at 200

  // Points for y = arcsin(1/x)
  // Right side: x from 1 to 8
  let rightPts = [];
  for (let x = 1; x <= 8; x += 0.1) {
    let y = Math.asin(1 / x);
    let px = originX + x * scaleX;
    let py = originY - y * scaleY;
    rightPts.push(`${px.toFixed(2)},${py.toFixed(2)}`);
  }

  // Left side: x from -8 to -1
  let leftPts = [];
  for (let x = -8; x <= -1; x += 0.1) {
    let y = Math.asin(1 / x);
    let px = originX + x * scaleX;
    let py = originY - y * scaleY;
    leftPts.push(`${px.toFixed(2)},${py.toFixed(2)}`);
  }

  // pi/2 is about 1.57. scaleY=40 -> 62.8px
  // endpoints: (1, pi/2) -> (240, 137.2)
  // (-1, -pi/2) -> (160, 262.8)

  const svg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #94a3b8; stroke-width: 2; }
.asym { stroke: #ef4444; stroke-width: 2; stroke-dasharray: 5,5; }
.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
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
  <text x="210" y="142" class="label">\u03c0/2</text>
  <text x="210" y="268" class="label">-\u03c0/2</text>
  
  <!-- Asymptote y=0 is the x-axis -->
  
  <!-- Curves -->
  <polyline points="${rightPts.join(' ')}" class="curve" />
  <polyline points="${leftPts.join(' ')}" class="curve" />
  
  <!-- Endpoints -->
  <circle cx="240" cy="137.17" r="4" class="dot" />
  <circle cx="160" cy="262.83" r="4" class="dot" />
</g>
</svg>`;

  fs.writeFileSync('tools/scripts/genSvg24.json', JSON.stringify({ svg }));
  console.log("SVG generated");
}

makeSvg();
