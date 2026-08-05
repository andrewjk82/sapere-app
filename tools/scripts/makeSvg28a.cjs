const fs = require('fs');

function makeSvg() {
  const svg = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.line { stroke: #1e293b; stroke-width: 2; fill: none; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
.angle { stroke: #3b82f6; stroke-width: 1.5; fill: none; }
</style>
</defs>
<rect width="300" height="200" fill="#ffffff" />
<g>
  <!-- Triangle -->
  <polygon points="50,150 250,150 250,50" class="line" fill="#f8fafc" />
  
  <!-- Right angle square -->
  <polyline points="240,150 240,140 250,140" class="line" />
  
  <!-- Angle arc -->
  <path d="M 80 150 A 30 30 0 0 0 77 137" class="angle" />
  <text x="85" y="145" class="label" fill="#3b82f6">12°</text>
  
  <!-- Labels -->
  <text x="40" y="165" class="label">B</text>
  <text x="255" y="165" class="label">Y</text>
  <text x="255" y="45" class="label">Z</text>
  
  <!-- Height -->
  <text x="260" y="105" class="label">h</text>
</g>
</svg>`;

  fs.writeFileSync('tools/scripts/genSvg28a.json', JSON.stringify({ svg }));
  console.log("SVG generated");
}

makeSvg();
