import fs from 'fs';
const f = 'content/chapters/y12a-3.json';
const raw = fs.readFileSync(f, 'utf8');
const j = JSON.parse(raw);
const X0 = 140, SX = 170, Y0 = 230, SY = 40;
const px = x => +(X0 + SX * x).toFixed(1), py = y => +(Y0 - SY * y).toFixed(1);
const fn = x => 2 * x ** 3 - 3 * x ** 2;
const curve = (a, b) => { let d = ''; for (let x = a; x <= b + 1e-9; x += 0.01) d += (d ? ' L' : 'M') + px(x) + ',' + py(fn(x)); return `<path d="${d}" fill="none" stroke="#4f46e5" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>`; };
const t = (x, y, s, c = '#1e293b', a = 'middle', w = 'bold', sz = 12) => `<text x="${x}" y="${y}" fill="${c}" font-family="Arial,sans-serif" font-size="${sz}" text-anchor="${a}" font-weight="${w}">${s}</text>`;
const l = (x1, y1, x2, y2, c, w, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`;
const dot = (x, y, c) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}"/>`;
const base = () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" style="display:block;margin:0 auto;max-width:760px;height:auto;font-family:Arial,sans-serif"><rect x="1" y="1" width="598" height="338" rx="12" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>` +
  l(100, Y0, 540, Y0, '#64748b', 2) + l(X0, 316, X0, 36, '#64748b', 2) +
  t(534, Y0 + 20, 'x', '#1e293b', 'middle', 'normal', 14) + t(X0 + 14, 48, 'y', '#1e293b', 'middle', 'normal', 14) +
  [1, 2].map(k => l(px(k), Y0 - 4, px(k), Y0 + 4, '#94a3b8', 1) + t(px(k), Y0 - 10, k, '#1e293b', 'middle', 'normal')).join('');
const step1 = base() + curve(0, 1) + l(px(1), py(-1), px(1), Y0, '#94a3b8', 1.5, '4 4') +
  dot(px(0), py(0), '#10b981') + dot(px(1), py(-1), '#f59e0b') +
  t(px(0) + 10, py(0) + 28, '(0, 0)', '#047857', 'start') + t(px(1), py(-1) + 20, '(1, −1)', '#b45309') + '</svg>';
const step3 = base() + curve(0, 2) + l(px(1), py(-1), px(1), Y0, '#94a3b8', 1.5, '4 4') + l(px(2), py(4), px(2), Y0, '#94a3b8', 1.5, '4 4') +
  dot(px(0), py(0), '#10b981') + dot(px(1), py(-1), '#f59e0b') + dot(px(1.5), py(0), '#ef4444') + dot(px(2), py(4), '#2563eb') +
  t(px(0) + 10, py(0) + 28, '(0, 0)', '#047857', 'start') + t(px(1), py(-1) + 20, '(1, −1)', '#b45309') +
  t(px(1.5) + 8, py(0) + 20, '(1.5, 0)', '#b91c1c', 'start') + t(px(2) - 10, py(4) + 4, '(2, 4)', '#1d4ed8', 'end') + '</svg>';
let ok = false;
const find = o => {
  if (!o || typeof o !== 'object') return;
  if (o.id === 'amity2020-ma-q20b') {
    delete o.figure;
    o.steps[0].figure = { svg: step1 };
    o.steps[2].figure = { svg: step3 };
    ok = true;
  } else for (const k in o) find(o[k]);
};
find(j);
const nl = raw.includes('\r\n') ? '\r\n' : '\n';
fs.writeFileSync(f, JSON.stringify(j, null, 2).replace(/\n/g, nl) + (raw.endsWith('\n') ? nl : ''));
console.log(ok);
