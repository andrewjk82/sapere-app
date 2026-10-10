import fs from 'fs';
const f = 'content/chapters/y12a-3.json';
const raw = fs.readFileSync(f, 'utf8');
const j = JSON.parse(raw);
const X0 = 214, SX = 155, Y0 = 190, SY = 40;
const px = x => X0 + SX * x, py = y => Y0 - SY * y;
const fn = x => 2 * x ** 3 - 3 * x ** 2;
let d = '';
for (let x = -0.8; x <= 2.0001; x += 0.02) d += (d ? ' L' : 'M') + px(x).toFixed(1) + ',' + py(fn(x)).toFixed(1);
const t = (x, y, s, sz = 12, c = '#1e293b', a = 'middle', w = 'normal') => `<text x="${x}" y="${y}" fill="${c}" font-family="Arial,sans-serif" font-size="${sz}" text-anchor="${a}" font-weight="${w}">${s}</text>`;
const l = (x1, y1, x2, y2, c, w, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`;
const dot = (x, y, c) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}"/>`;
const base = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" style="display:block;margin:0 auto;max-width:760px;height:auto;font-family:Arial,sans-serif"><rect x="1" y="1" width="598" height="338" rx="12" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>` +
  l(70, Y0, 550, Y0, '#64748b', 2) + l(X0, 320, X0, 24, '#64748b', 2) +
  t(542, Y0 + 20, 'x', 14) + t(X0 + 14, 38, 'y', 14) +
  [1, 2].map(k => l(px(k), Y0 - 4, px(k), Y0 + 4, '#94a3b8', 1) + t(px(k), Y0 + 22, k)).join('') +
  `<path d="${d}" fill="none" stroke="#4f46e5" stroke-width="4" stroke-linejoin="round"/>`;
const pts = (labels) =>
  l(px(1), py(-1), px(1), Y0, '#94a3b8', 1.5, '4 4') +
  dot(px(0), py(0), '#10b981') + dot(px(1), py(-1), '#f59e0b') +
  t(px(0) - 10, py(0) - 12, '(0, 0)' + (labels ? ' max' : ''), 12, '#047857', 'end', 'bold') +
  t(px(1) + 10, py(-1) + 20, '(1, −1)' + (labels ? ' min' : ''), 12, '#b45309', 'start', 'bold');
const plain = base() + pts(false) + '</svg>';
const labelled = base() + pts(true) + '</svg>';
let ok = false;
const find = o => {
  if (!o || typeof o !== 'object') return;
  if (o.id === 'amity2020-ma-q20a') {
    o.figure.svg = plain; o.steps[0].figure.svg = plain; o.steps[3].figure.svg = labelled; ok = true;
  } else for (const k in o) find(o[k]);
};
find(j);
const nl = raw.includes('\r\n') ? '\r\n' : '\n';
fs.writeFileSync(f, JSON.stringify(j, null, 2).replace(/\n/g, nl) + (raw.endsWith('\n') ? nl : ''));
console.log(ok);
