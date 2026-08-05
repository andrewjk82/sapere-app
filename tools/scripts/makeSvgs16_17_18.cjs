const fs = require('fs');

function makeSvg16() {
  const pts = [];
  // y = e^{-2x} \sin(x)
  for (let x = 0; x <= 4; x += 0.05) {
    const y = Math.exp(-2 * x) * Math.sin(x);
    // x from 0 to 4 => width 300 => scale 75
    // y from -0.05 to +0.2 => height 250 => scale 1000 (y max is 0.15)
    const px = 50 + x * 75;
    const py = 300 - y * 1000;
    pts.push(`${px.toFixed(2)},${py.toFixed(2)}`);
  }
  const svg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }</style></defs><rect width="400" height="400" fill="#ffffff" /><g><line x1="30" y1="300" x2="380" y2="300" class="axis" /><text x="370" y="320" class="label">x</text><line x1="50" y1="350" x2="50" y2="50" class="axis" /><text x="30" y="45" class="label">y</text><polyline points="${pts.join(' ')}" class="curve" /><text x="250" y="100" fill="#3b82f6" class="label" font-weight="bold">y = e⁻²ˣ sin(x)</text></g></svg>`;
  return svg;
}

function makeSvg17() {
  const pts = [];
  // y = 2x^2 + 5
  for (let x = -3; x <= 3; x += 0.1) {
    const y = 2 * x * x + 5;
    // x from -3 to 3 => width 300 => scale 50. Origin at x=200
    // y from 0 to 25 => height 300 => scale 12. Origin at y=350
    const px = 200 + x * 50;
    const py = 350 - y * 12;
    pts.push(`${px.toFixed(2)},${py.toFixed(2)}`);
  }
  const svg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.curve { stroke: #10b981; stroke-width: 3; fill: none; }.point { fill: #ef4444; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }</style></defs><rect width="400" height="400" fill="#ffffff" /><g><line x1="30" y1="350" x2="370" y2="350" class="axis" /><text x="360" y="370" class="label">x</text><line x1="200" y1="370" x2="200" y2="30" class="axis" /><text x="180" y="25" class="label">y</text><polyline points="${pts.join(' ')}" class="curve" /><circle cx="200" cy="290" r="4" class="point" /><text x="210" y="295" class="label">(0, 5)</text><text x="250" y="100" fill="#10b981" class="label" font-weight="bold">f(g(x)) = 2x² + 5</text></g></svg>`;
  return svg;
}

function makeSvg18() {
  // Sector with radius 6.25 and angle 0.8 rad.
  // Origin at (200, 300).
  // radius 6.25 -> scale 30 -> 187.5px.
  // Draw an arc from angle 0 to -0.8 rad.
  const r = 187.5;
  const startX = 200 + r;
  const startY = 300;
  const endX = 200 + r * Math.cos(0.8);
  const endY = 300 - r * Math.sin(0.8);
  
  const arcX = 200 + 40 * Math.cos(0.4);
  const arcY = 300 - 40 * Math.sin(0.4);

  const svg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><style>.line { stroke: #3b82f6; stroke-width: 3; fill: none; }.arc { stroke: #f59e0b; stroke-width: 2; fill: none; }.label { font-size: 16px; fill: #1e293b; font-family: sans-serif; }</style></defs><rect width="400" height="400" fill="#ffffff" /><g><path d="M 200 300 L ${startX} ${startY} A ${r} ${r} 0 0 0 ${endX} ${endY} Z" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2" /><path d="M 240 300 A 40 40 0 0 0 ${200 + 40 * Math.cos(0.8)} ${300 - 40 * Math.sin(0.8)}" class="arc" /><text x="245" y="285" fill="#d97706" class="label">0.8 rad</text><text x="280" y="320" class="label">r = 6.25</text><text x="350" y="200" fill="#2563eb" class="label" font-weight="bold">l = 5 cm</text></g></svg>`;
  return svg;
}

fs.writeFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/genSvgs16_17_18.json', JSON.stringify({
  svg16: makeSvg16(),
  svg17: makeSvg17(),
  svg18: makeSvg18()
}, null, 2));

console.log("SVGs generated.");
