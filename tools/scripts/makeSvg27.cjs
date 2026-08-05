const fs = require('fs');

function makeSvg() {
  const scale = 30;
  const originX = 100; // x=0 at 100
  const originY = 250; // y=0 at 250

  const vertexX = originX + 3 * scale; // 190
  const vertexY = originY - 2 * scale; // 190

  const leftX = originX + (-2) * scale; // 40
  const leftY = originY - (-Math.abs(-2 - 3) + 2) * scale; // originY - (-3)*30 = 250 + 90 = 340
  
  const rightX = originX + 7 * scale; // 310
  const rightY = originY - (-Math.abs(7 - 3) + 2) * scale; // originY - (-2)*30 = 250 + 60 = 310
  
  const pt0X = originX;
  const pt0Y = originY - (-1) * scale; // 280

  const svg = `<svg viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #94a3b8; stroke-width: 2; }
.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
.pt { fill: #1e293b; }
.grid { stroke: #e2e8f0; stroke-width: 1; }
</style>
</defs>
<rect width="350" height="350" fill="#ffffff" />
<g>
  <!-- Grid -->
  <line x1="100" y1="20" x2="100" y2="330" class="grid" />
  <line x1="130" y1="20" x2="130" y2="330" class="grid" />
  <line x1="160" y1="20" x2="160" y2="330" class="grid" />
  <line x1="190" y1="20" x2="190" y2="330" class="grid" />
  <line x1="220" y1="20" x2="220" y2="330" class="grid" />
  
  <line x1="20" y1="250" x2="330" y2="250" class="grid" />
  <line x1="20" y1="220" x2="330" y2="220" class="grid" />
  <line x1="20" y1="190" x2="330" y2="190" class="grid" />
  <line x1="20" y1="160" x2="330" y2="160" class="grid" />

  <!-- Axes -->
  <line x1="20" y1="250" x2="330" y2="250" class="axis" />
  <text x="320" y="270" class="label">x</text>
  <line x1="100" y1="330" x2="100" y2="20" class="axis" />
  <text x="85" y="25" class="label">y</text>
  <text x="85" y="270" class="label">0</text>
  
  <text x="185" y="270" class="label">3</text>
  <text x="85" y="195" class="label">2</text>
  
  <!-- Curve -->
  <polyline points="${leftX},${leftY} ${vertexX},${vertexY} ${rightX},${rightY}" class="curve" />
  
  <!-- Points -->
  <circle cx="${vertexX}" cy="${vertexY}" r="4" class="pt" />
  <circle cx="${originX}" cy="${pt0Y}" r="4" class="pt" />
</g>
</svg>`;

  fs.writeFileSync('tools/scripts/genSvg27.json', JSON.stringify({ svg }));
  console.log("SVG generated");
}

makeSvg();
