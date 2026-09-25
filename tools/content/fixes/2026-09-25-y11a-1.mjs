// One-off content fixes found during the XP rating pass (2026-09-25). Idempotent.
//   node tools/content/fixes/2026-09-25-y11a-1.mjs
import { readFileSync, writeFileSync } from 'fs';

const file = 'content/chapters/y11a-1.json';
const src = readFileSync(file, 'utf8');
const ch = JSON.parse(src);
const byId = {};
const walk = (q) => { byId[q.id] = q; (q.parts || []).forEach(walk); };
ch.topics.forEach((t) => t.questions.forEach(walk));
const log = [];

// 1. y11a-1C-q*: sympy export wrote "A \frac{1}{B}" for A/B and "1 \cdot \frac{1}{n}" for 1/n.
const special = {
  'y11a-1C-q2a': ['x \\frac{1}{3} \\cdot 3 \\frac{1}{x}', '\\frac{x}{3} \\cdot \\frac{3}{x}'],
  'y11a-1C-q2b': ['\\frac{a}{4 \\frac{a}{2}}', '\\frac{a}{4} \\div \\frac{a}{2}'],
  'y11a-1C-q2c': ['x^{2} \\cdot 3 \\frac{1}{x}', 'x^{2} \\cdot \\frac{3}{x}'],
  'y11a-1C-q2d': ['1 \\frac{1}{2 b} b^{2}', '\\frac{1}{2 b} \\cdot b^{2}'],
  'y11a-1C-q2e': ['3 x \\frac{1}{4} \\cdot 2 \\frac{1}{x^{2}}', '\\frac{3 x}{4} \\cdot \\frac{2}{x^{2}}'],
  'y11a-1C-q2g': ['2 a b \\frac{1}{3} \\cdot 6 \\frac{1}{a b^{2}}', '\\frac{2 a b}{3} \\cdot \\frac{6}{a b^{2}}'],
  'y11a-1C-q11e': ['1 \\frac{1}{x} \\frac{1}{1 + \\frac{2}{x}}', '\\frac{\\frac{1}{x}}{1 + \\frac{2}{x}}'],
};
const fixStr = (id, s) => {
  if (typeof s !== 'string') return s;
  let out = s;
  if (special[id]) out = out.split(special[id][0]).join(special[id][1]);
  out = out.replace(/(^|[^\w}])1 \\cdot \\frac\{1\}/g, '$1\\frac{1}');
  let prev;
  do { prev = out; out = out.replace(/(^|[{( ])1 \\frac\{1\}\{/g, '$1\\frac{1}{'); } while (out !== prev);
  return out;
};
Object.values(byId).filter((q) => /^y11a-1C-q/.test(q.id)).forEach((q) => {
  const before = JSON.stringify(q);
  q.stem = fixStr(q.id, q.stem);
  (q.steps || []).forEach((st) => {
    st.explain = fixStr(q.id, st.explain);
    if (st.work != null) st.work = fixStr(q.id, st.work);
  });
  if (JSON.stringify(q) !== before) log.push(`garbled-frac ${q.id}`);
});

// 2. y11a-1C-q3e: the keyed "answer" was the unsimplified input.
{
  const q = byId['y11a-1C-q3e'];
  if (q && !q.options.some((o) => /3 x - 2 y/.test(o))) {
    q.options[1] = '\\\\(\\frac{3 x - 2 y}{24}\\\\)';
    q.answer = 1;
    q.steps = [
      { explain: 'Use the common denominator 24.', work: '\\(\\frac{x}{8} - \\frac{y}{12} = \\frac{3x}{24} - \\frac{2y}{24}\\)' },
      { explain: 'Combine over the common denominator.', work: '\\(\\frac{3x - 2y}{24}\\)' },
    ];
    log.push('answer y11a-1C-q3e');
  }
}

// 3. Solve-by-factoring answers missing the zero root / wrong roots.
const setOpt = (id, idx, text, why) => {
  const q = byId[id];
  if (q && q.options[idx] !== text) { q.options[idx] = text; q.answer = idx; log.push(`${why} ${id}`); }
};
setOpt('0c5919fc8e1ca95bb7fe7331416472f5', 2, '\\(c = 0, -3\\)', 'missing-root');
setOpt('7b043cac4c5a2fc6df921cf7946fa345', 0, '\\(y = 0, -2\\)', 'missing-root');
{
  const q = byId['bd6d443d84604f70ef5dbdd8d579d3bb'];
  if (q && q.options[0] !== '\\(a = 3, 5\\)') {
    q.options = ['\\(a = 3, 5\\)', '\\(a = -3, -5\\)', '\\(a = 3, -5\\)', '\\(a = -3, 5\\)'];
    q.answer = 0;
    log.push('wrong-answer bd6d443d');
  }
}

// 4. Mangled cubic / trinomial expansions.
{
  const q = byId['45b598c53ff9f5fda8e4e8e7185d608c'];
  if (q && !/27ab\^2/.test(q.options.join())) {
    q.options = ['\\(a^3 + 27b^3\\)', '\\(a^3 + 9a^2b - 27ab^2 + 27b^3\\)', '\\(a^3 + 9a^2b + 27ab^2 + 27b^3\\)', '\\(a^3 + 3a^2b + 3ab^2 + 27b^3\\)'];
    q.answer = 2;
    log.push('options 45b598c5');
  }
}
{
  const q = byId['9b3dd8329cb670333a80ae5c671a2557'];
  if (q && !/36uv\^2/.test(q.options.join())) {
    q.options = ['\\(27u^3 - 54u^2v - 36uv^2 - 8v^3\\)', '\\(27u^3 - 8v^3\\)', '\\(27u^3 - 18u^2v + 12uv^2 - 8v^3\\)', '\\(27u^3 - 54u^2v + 36uv^2 - 8v^3\\)'];
    q.answer = 3;
    log.push('options 9b3dd832');
  }
}
{
  const q = byId['8f794b5b8a4b9fa5b64e5781a6dd6ae8'];
  if (q && /x\^ [+-]/.test(q.options.join())) {
    q.options = q.options.map((o) => o.replace(/x\^ ([+-])/g, 'x^2 $1'));
    q.steps = [
      { explain: 'Use \\((A + B)^3 = A^3 + 3A^2B + 3AB^2 + B^3\\) with \\(A = x^2\\), \\(B = 2\\).', work: '\\((x^2)^3 + 3(x^2)^2(2) + 3(x^2)(2)^2 + 2^3\\)' },
      { explain: 'Simplify each term.', work: '\\(x^6 + 6x^4 + 12x^2 + 8\\)' },
    ];
    log.push('options+steps 8f794b5b');
  }
}
{
  const q = byId['c8e33bec4228918577f2a979d38cc4aa'];
  if (q && q.answer !== 3) { q.answer = 3; log.push('answer-index c8e33bec'); }
}
{
  const q = byId['d71ea15ba82ccd89451822f800660528'];
  if (q && /8a/.test(JSON.stringify(q.steps))) {
    q.steps = [
      { explain: 'Use \\((A - B)^2 = A^2 - 2AB + B^2\\) with \\(A = 4u\\), \\(B = 5\\).', work: '\\((4u)^2 - 2(4u)(5) + 5^2\\)' },
      { explain: 'Simplify each term.', work: '\\(16u^2 - 40u + 25\\)' },
    ];
    log.push('steps d71ea15b');
  }
}

writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
console.log(log.length ? log.join('\n') : 'nothing to fix');
