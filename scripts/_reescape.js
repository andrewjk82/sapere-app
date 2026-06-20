const fs = require('fs');
const path = require('path');

const setre = /(?<![\\A-Za-z0-9^_}])\{((?:[^{}]|\([^()]*\))*,(?:[^{}]|\([^()]*\))*)\}/g;

let tot = 0, files = 0;
const dir = path.join(__dirname, '../src/constants');
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js'))) {
  const p = path.join(dir, f);
  const s = fs.readFileSync(p, 'utf8');
  let n = 0;
  const s2 = s.replace(setre, (m, inner) => { n++; return '\\\\{' + inner + '\\\\}'; });
  if (n) {
    fs.writeFileSync(p, s2, 'utf8');
    console.log(`  ${f}: ${n}`);
    tot += n; files++;
  }
}
console.log(`Total: ${tot} in ${files} files`);
