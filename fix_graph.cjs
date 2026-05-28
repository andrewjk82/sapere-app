const fs = require('fs');

let content = fs.readFileSync('generate_ch7h.cjs', 'utf-8');

// Replace the buggy script portion
content = content.replace(/script: \`\nboard.suspendUpdate\(\);\nboard.create\('axis', \[\[0,0\], \[1,0\]\]\);\nboard.create\('axis', \[\[0,0\], \[0,1\]\]\);\nvar f = function\(x\) \{\n  let eqStr = "\$\{d.eq.replace\('y = ', ''\)\}";\n  eqStr = eqStr.replace\(\/x\\\\\\^2\/g, '\(x\*x\)'\).replace\(\/\(\[0-9\]\+\)x\/g, '\\$1\*x'\);\n  return eval\(eqStr\);\n\};\nboard.create\('functiongraph', \[f\], \{strokeColor: 'blue', strokeWidth: 2\}\);\nboard.create\('point', \[\$\{d.vx\}, \$\{d.vy\}\], \{name: 'Vertex', label: \{offset: \[10, -10\]\}\}\);\nboard.unsuspendUpdate\(\);\n      \`/g, 
`script: \`
board.suspendUpdate();
board.create('axis', [[0,0], [1,0]]);
board.create('axis', [[0,0], [0,1]]);
var f = function(x) { return \$\{d.jsFn\}; };
board.create('functiongraph', [f], {strokeColor: 'blue', strokeWidth: 2});
board.create('point', [\$\{d.vx\}, \$\{d.vy\}], {name: 'Vertex', label: {offset: [10, -10]}});
board.unsuspendUpdate();
      \``);

// Update q6Data to include jsFn
content = content.replace(
  'const q6Data = [\n  { id: "a", eq: "y = x^2 - 4x + 3", roots: "1, 3", vx: 2, vy: -1, yint: 3 },\n  { id: "b", eq: "y = -x^2 - 2x + 8", roots: "-4, 2", vx: -1, vy: 9, yint: 8 },\n  { id: "c", eq: "y = 9 - x^2", roots: "-3, 3", vx: 0, vy: 9, yint: 9 },\n  { id: "d", eq: "y = (x + 2)^2", roots: "-2", vx: -2, vy: 0, yint: 4 },\n  { id: "e", eq: "y = (x - 2)^2 - 9", roots: "-1, 5", vx: 2, vy: -9, yint: -5 },\n  { id: "f", eq: "y = x^2 - 4", roots: "-2, 2", vx: 0, vy: -4, yint: -4 }\n];',
  `const q6Data = [
  { id: "a", eq: "y = x^2 - 4x + 3", jsFn: "x*x - 4*x + 3", roots: "1, 3", vx: 2, vy: -1, yint: 3 },
  { id: "b", eq: "y = -x^2 - 2x + 8", jsFn: "-x*x - 2*x + 8", roots: "-4, 2", vx: -1, vy: 9, yint: 8 },
  { id: "c", eq: "y = 9 - x^2", jsFn: "9 - x*x", roots: "-3, 3", vx: 0, vy: 9, yint: 9 },
  { id: "d", eq: "y = (x + 2)^2", jsFn: "(x + 2)*(x + 2)", roots: "-2", vx: -2, vy: 0, yint: 4 },
  { id: "e", eq: "y = (x - 2)^2 - 9", jsFn: "(x - 2)*(x - 2) - 9", roots: "-1, 5", vx: 2, vy: -9, yint: -5 },
  { id: "f", eq: "y = x^2 - 4", jsFn: "x*x - 4", roots: "-2, 2", vx: 0, vy: -4, yint: -4 }
];`
);

fs.writeFileSync('generate_ch7h.cjs', content);
