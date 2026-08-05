const fs = require('fs');

function makeSvg1() {
  const pts = [];
  for (let x = -1; x <= 3; x += 0.1) {
    const y = Math.pow(x, 3) - 3 * Math.pow(x, 2) + 3 * x;
    const px = x * 60;
    const py = -y * 20;
    pts.push(`${px.toFixed(2)},${py.toFixed(2)}`);
  }
  const svg = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }.point { fill: #ef4444; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }</style></defs><rect width="500" height="500" fill="#ffffff" /><g transform="translate(150, 300)"><line x1="-100" y1="0" x2="220" y2="0" class="axis" /><text x="210" y="20" class="label">x</text><line x1="0" y1="-250" x2="0" y2="170" class="axis" /><text x="-15" y="-240" class="label">y</text><line x1="-60" y1="-5" x2="-60" y2="5" class="axis" /><text x="-70" y="20" class="label">-1</text><line x1="60" y1="-5" x2="60" y2="5" class="axis" /><text x="55" y="20" class="label">1</text><line x1="180" y1="-5" x2="180" y2="5" class="axis" /><text x="175" y="20" class="label">3</text><line x1="-5" y1="140" x2="5" y2="140" class="axis" /><text x="-25" y="145" class="label">-7</text><line x1="-5" y1="-20" x2="5" y2="-20" class="axis" /><text x="-20" y="-15" class="label">1</text><line x1="-5" y1="-180" x2="5" y2="-180" class="axis" /><text x="-25" y="-175" class="label">9</text><polyline points="${pts.join(' ')}" class="curve" /><circle cx="-60" cy="140" r="4" class="point" /><circle cx="0" cy="0" r="4" class="point" /><circle cx="60" cy="-20" r="4" class="point" /><circle cx="180" cy="-180" r="4" class="point" /><text x="-50" y="155" class="label">(-1, -7)</text><text x="10" y="15" class="label">(0, 0)</text><text x="65" y="-30" class="label">(1, 1)</text><text x="190" y="-170" class="label">(3, 9)</text></g></svg>`;
  return svg;
}

function makeSvg2() {
  const pts = [];
  for (let x = -1; x <= 5; x += 0.1) {
    const y = Math.pow(x, 3) - 6 * Math.pow(x, 2) + 12 * x;
    // Domain -1 to 5
    // Range:
    // f(-1) = -1 - 6 - 12 = -19
    // f(0) = 0
    // f(2) = 8 - 24 + 24 = 8
    // f(5) = 125 - 150 + 60 = 35
    const px = x * 40; 
    const py = -y * 6;
    pts.push(`${px.toFixed(2)},${py.toFixed(2)}`);
  }
  const svg = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><defs><style>.axis { stroke: #94a3b8; stroke-width: 2; }.curve { stroke: #3b82f6; stroke-width: 3; fill: none; }.point { fill: #ef4444; }.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }</style></defs><rect width="500" height="500" fill="#ffffff" /><g transform="translate(150, 300)"><line x1="-70" y1="0" x2="250" y2="0" class="axis" /><text x="240" y="20" class="label">x</text><line x1="0" y1="-250" x2="0" y2="150" class="axis" /><text x="-15" y="-240" class="label">y</text><line x1="-40" y1="-5" x2="-40" y2="5" class="axis" /><text x="-50" y="20" class="label">-1</text><line x1="80" y1="-5" x2="80" y2="5" class="axis" /><text x="75" y="20" class="label">2</text><line x1="200" y1="-5" x2="200" y2="5" class="axis" /><text x="195" y="20" class="label">5</text><line x1="-5" y1="114" x2="5" y2="114" class="axis" /><text x="-35" y="119" class="label">-19</text><line x1="-5" y1="-48" x2="5" y2="-48" class="axis" /><text x="-20" y="-43" class="label">8</text><line x1="-5" y1="-210" x2="5" y2="-210" class="axis" /><text x="-25" y="-205" class="label">35</text><polyline points="${pts.join(' ')}" class="curve" /><circle cx="-40" cy="114" r="4" class="point" /><circle cx="0" cy="0" r="4" class="point" /><circle cx="80" cy="-48" r="4" class="point" /><circle cx="200" cy="-210" r="4" class="point" /><text x="-30" y="129" class="label">(-1, -19)</text><text x="10" y="15" class="label">(0, 0)</text><text x="85" y="-58" class="label">(2, 8)</text><text x="210" y="-200" class="label">(5, 35)</text></g></svg>`;
  return svg;
}

fs.writeFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/genSvgs.json', JSON.stringify({
  svg1: makeSvg1(),
  svg2: makeSvg2()
}, null, 2));

console.log("SVGs generated.");
