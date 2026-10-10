import fs from 'fs';
const dir = 'content/chapters';
let totalReplaced = 0;
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.json')) continue;
  const p = dir + '/' + f;
  const raw = fs.readFileSync(p, 'utf8');
  const j = JSON.parse(raw);
  let changed = false;

  const fix = s => {
    if (typeof s !== 'string') return s;
    if (/\\\(/.test(s) && !/<(b|i|u|br|sup|sub|span|strong|em|svg|path|circle|line|rect|text|div|math)\b/i.test(s)) {
      const orig = s;
      const res = s.replace(/</g, '\\lt ').replace(/>/g, '\\gt ');
      if (orig !== res) {
        totalReplaced++;
        return res;
      }
    }
    return s;
  };

  const walk = o => {
    for (const k in o) {
      if (k === 'figure' || k === 'svg') continue;
      const v = o[k];
      if (typeof v === 'string') {
        const fixed = fix(v);
        if (fixed !== v) {
          o[k] = fixed;
          changed = true;
        }
      } else if (v && typeof v === 'object') {
        walk(v);
      }
    }
  };

  const find = o => {
    if (!o || typeof o !== 'object') return;
    if (typeof o.id === 'string' && o.id.startsWith('amity2020-ma-')) {
      walk(o);
    } else {
      for (const k in o) find(o[k]);
    }
  };

  find(j);
  
  if (changed) {
    const nl = raw.includes('\r\n') ? '\r\n' : '\n';
    fs.writeFileSync(p, JSON.stringify(j, null, 2).replace(/\n/g, nl) + (raw.endsWith('\n') ? nl : ''));
    console.log('Fixed', f);
  }
}
console.log('Total strings replaced:', totalReplaced);
