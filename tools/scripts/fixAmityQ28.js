import fs from 'fs';
const file = 'content/chapters/y11a-3.json';
const raw = fs.readFileSync(file, 'utf8');
const j = JSON.parse(raw);
let ok = false;

const find = o => {
  if (!o || typeof o !== 'object') return;
  if (o.id === 'amity2020-ma-q28') {
    if (o.figure && o.figure.svg) {
      // Remove line and text for y = -2
      o.figure.svg = o.figure.svg
        .replace(/<line x1="65" y1="265" x2="300" y2="265" [^>]*\/>/, '')
        .replace(/<text x="80" y="258" [^>]*>y = −2<\/text>/, '');
      ok = true;
    }
  } else {
    for (const k in o) find(o[k]);
  }
};

find(j);
if (ok) {
  const nl = raw.includes('\r\n') ? '\r\n' : '\n';
  fs.writeFileSync(file, JSON.stringify(j, null, 2).replace(/\n/g, nl) + (raw.endsWith('\n') ? nl : ''));
  console.log('Modified successfully.');
} else {
  console.log('Question not found or SVG not present.');
}
