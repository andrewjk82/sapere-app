const fs = require('fs');

function makeSvg() {
  const scaleX = 20;
  const scaleY = 15;
  const originX = 220;
  const originY = 280;

  // y = |2x + 3|
  // vertex: (-1.5, 0)
  // x = -9: (-9, 15)
  // x = 4: (4, 11)
  
  const absVertexX = originX + (-1.5) * scaleX;
  const absVertexY = originY - 0 * scaleY;
  
  const absLeftX = originX + (-9) * scaleX;
  const absLeftY = originY - Math.abs(2 * (-9) + 3) * scaleY; // y=15
  
  const absRightX = originX + (4) * scaleX;
  const absRightY = originY - Math.abs(2 * (4) + 3) * scaleY; // y=11
  
  // y = -x + 5
  // x = -9: (-9, 14)
  // x = 4: (4, 1)
  const lineLeftX = originX + (-9) * scaleX;
  const lineLeftY = originY - (-(-9) + 5) * scaleY; // y=14
  
  const lineRightX = originX + (4) * scaleX;
  const lineRightY = originY - (-(4) + 5) * scaleY; // y=1
  
  // Intersection points
  // x = -8, y = 13
  const int1X = originX + (-8) * scaleX;
  const int1Y = originY - 13 * scaleY;
  
  // x = 2/3, y = 13/3 (approx 4.33)
  const int2X = originX + (2/3) * scaleX;
  const int2Y = originY - (13/3) * scaleY;
  
  const svg = `<svg viewBox="0 0 400 350" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #94a3b8; stroke-width: 2; }
.curve-abs { stroke: #3b82f6; stroke-width: 3; fill: none; }
.curve-line { stroke: #ef4444; stroke-width: 3; fill: none; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
.pt { fill: #1e293b; }
</style>
</defs>
<rect width="400" height="350" fill="#ffffff" />
<g>
  <!-- Axes -->
  <line x1="20" y1="${originY}" x2="380" y2="${originY}" class="axis" />
  <text x="370" y="${originY + 20}" class="label">x</text>
  <line x1="${originX}" y1="330" x2="${originX}" y2="20" class="axis" />
  <text x="${originX - 15}" y="25" class="label">y</text>
  <text x="${originX - 15}" y="${originY + 20}" class="label">0</text>
  
  <!-- Curves -->
  <polyline points="${absLeftX},${absLeftY} ${absVertexX},${absVertexY} ${absRightX},${absRightY}" class="curve-abs" />
  <polyline points="${lineLeftX},${lineLeftY} ${lineRightX},${lineRightY}" class="curve-line" />
  
  <!-- Labels -->
  <text x="${absRightX + 5}" y="${absRightY}" class="label" fill="#3b82f6">y = |2x + 3|</text>
  <text x="${lineRightX + 5}" y="${lineRightY + 5}" class="label" fill="#ef4444">y = -x + 5</text>
  
  <!-- Vertex -->
  <circle cx="${absVertexX}" cy="${absVertexY}" r="4" class="pt" />
  <text x="${absVertexX - 25}" y="${absVertexY + 20}" class="label">(-1.5, 0)</text>
  
  <!-- Intersections -->
  <circle cx="${int1X}" cy="${int1Y}" r="4" class="pt" />
  <text x="${int1X - 55}" y="${int1Y - 5}" class="label">(-8, 13)</text>
  
  <circle cx="${int2X}" cy="${int2Y}" r="4" class="pt" />
  <text x="${int2X + 5}" y="${int2Y - 10}" class="label">(2/3, 13/3)</text>
</g>
</svg>`;

  fs.writeFileSync('tools/scripts/genSvg25as.json', JSON.stringify({ svg }));
  console.log("SVG generated");
}

makeSvg();
