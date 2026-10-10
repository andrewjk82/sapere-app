import fs from 'fs';
const file = 'content/chapters/y12a-2.json';
const raw = fs.readFileSync(file, 'utf8');
const j = JSON.parse(raw);
let ok = false;

const find = o => {
  if (!o || typeof o !== 'object') return;
  if (o.id === 'amity2020-ma-q29') {
    // 1. Fix stem
    o.stem = 'The graph of \\(y=a\\sin(bx)+c\\), with \\(b \\gt 0\\), is shown. Find \\((a,b,c)\\).';
    
    // 2. Fix figure.svg
    if (o.figure && o.figure.svg) {
      let svg = o.figure.svg;
      svg = svg.replace(/<text[^>]*>max 5<\/text>/g, '');
      svg = svg.replace(/<text[^>]*>min 1<\/text>/g, '');
      svg = svg.replace(/<line x1="125" y1="55" [^>]*\/>/g, '');
      svg = svg.replace(/<text[^>]*>period = 12<\/text>/g, '');
      svg = svg.replace(/<text[^>]*>y = a cos\(bx\) \+ c<\/text>/g, '');
      // Make circles blue
      svg = svg.replace(/fill="#10b981"/g, 'fill="#4f46e5"');
      svg = svg.replace(/fill="#f59e0b"/g, 'fill="#4f46e5"');
      
      o.figure.svg = svg;
    }

    // 3. Fix steps
    if (o.steps) {
      for (const step of o.steps) {
        if (step.figure && step.figure.svg) {
          step.figure.svg = step.figure.svg.replace('y = a cos(bx) + c', 'y = a sin(bx) + c');
        }
      }
    }

    ok = true;
  } else {
    for (const k in o) find(o[k]);
  }
};

find(j);
if (ok) {
  const nl = raw.includes('\r\n') ? '\r\n' : '\n';
  fs.writeFileSync(file, JSON.stringify(j, null, 2).replace(/\n/g, nl) + (raw.endsWith('\n') ? nl : ''));
  console.log('Modified amity2020-ma-q29 successfully.');
} else {
  console.log('Question not found.');
}
