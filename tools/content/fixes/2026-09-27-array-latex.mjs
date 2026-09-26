// Repair vertical-sum arrays whose LaTeX lost backslashes on import (2026-09-27): "\b" became a
// backspace char ("\x08egin"), "\hline"/"\end" lost theirs, and the "\\" row breaks shrank to a
// single "\ ". Found in y7-1d-q5* (16) and y6-wn-q35. Idempotent.
//   node tools/content/fixes/2026-09-27-array-latex.mjs
import { readFileSync, writeFileSync } from 'fs';

const repairArray = (s) => s.replace(/\x08egin\{array\}/g, '\\begin{array}')
  .replace(/(\\begin\{array\}\{[^}]*\})([\s\S]*?)((?:\\)?end\{array\})/g, (m, open, body) => {
    const fixed = body
      .replace(/(^|[^\\a-z])hline\b/g, '$1\\hline')
      .replace(/(?<!\\)\\ (?=\s*(?:[-+]|&|\\hline))/g, '\\\\ ');
    return `${open}${fixed}\\end{array}`;
  });

const log = [];
for (const f of ['y7-1', 'y6-wn']) {
  const file = `content/chapters/${f}.json`;
  const src = readFileSync(file, 'utf8');
  const ch = JSON.parse(src);
  const walk = (o, id) => {
    if (Array.isArray(o)) { o.forEach((x, i) => { if (typeof x === 'string') { const y = repairArray(x); if (y !== x) { o[i] = y; log.push(id); } } else walk(x, id); }); return; }
    if (o && typeof o === 'object') for (const k of Object.keys(o)) {
      const v = o[k];
      if (typeof v === 'string' && /array/.test(v)) { const y = repairArray(v); if (y !== v) { o[k] = y; log.push(o.id || id); } } else walk(v, o.id || id);
    }
  };
  walk(ch, f);
  writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
}
console.log(`repaired ${log.length} strings in: ${[...new Set(log)].join(', ')}`);
