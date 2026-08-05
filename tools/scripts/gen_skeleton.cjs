const fs = require('fs');

const dump = fs.readFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/dump_q.txt', 'utf8');
const pointsDump = fs.readFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/dump_q_points.txt', 'utf8');

const qs = dump.split('\n\n').filter(Boolean);
let skeleton = 'const manualSolutions = {\n';

for (const q of qs) {
  const idMatch = q.match(/ID: (.*)/);
  if (!idMatch) continue;
  const id = idMatch[1];
  
  if (!id.match(/^y10-13a-q[2345]/)) continue; // only multiple choice
  if (id === 'y10-13a-q2b') continue; // already fixed
  
  const pMatch = pointsDump.split('\n').filter(l => l.startsWith('ID: ' + id) || l.startsWith('  '));
  let pData = '';
  let capture = false;
  for (const l of pointsDump.split('\n')) {
    if (l.startsWith('ID: ' + id)) { capture = true; continue; }
    if (l.startsWith('ID: ')) { capture = false; }
    if (capture && l.trim()) pData += l + '\n';
  }
  
  let qText = q.match(/Q: (.*)/)[1];
  let optsMatch = q.match(/Opts: (.*)/);
  let opts = optsMatch ? optsMatch[1] : '';
  
  skeleton += `  "${id}": {\n`;
  skeleton += `    // ${qText}\n`;
  skeleton += `    // Points & Angles:\n`;
  pData.split('\n').filter(Boolean).forEach(l => {
    skeleton += `    // ${l.trim()}\n`;
  });
  skeleton += `    // AI's opts: ${opts}\n`;
  skeleton += `    opts: [],\n`;
  skeleton += `    steps: [\n`;
  skeleton += `      { expl: "Apply theorem", calc: "..." }\n`;
  skeleton += `    ]\n`;
  skeleton += `  },\n`;
}
skeleton += '};\n';
fs.writeFileSync('/Users/andrewkim/Desktop/sapere1/tools/scripts/ch13a_skeleton.cjs', skeleton);
