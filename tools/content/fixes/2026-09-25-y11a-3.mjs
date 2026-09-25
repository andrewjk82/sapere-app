// Content fixes found during the XP rating pass (2026-09-25). Idempotent.
import { readFileSync, writeFileSync } from 'fs';
const file = 'content/chapters/y11a-3.json';
const src = readFileSync(file, 'utf8');
const ch = JSON.parse(src);
const byId = {};
const walk = (q) => { byId[q.id] = q; (q.parts || []).forEach(walk); };
ch.topics.forEach((t) => t.questions.forEach(walk));
const log = [];
// "in simplest form" but keyed as a decimal approximation.
{ const q = byId.T7U8eb30SLhtueUms1IK;
  if (q && q.options[2] !== '\\(\\sqrt{5}\\)') { q.options = ['\\(2\\)', '\\(5\\)', '\\(\\sqrt{5}\\)', '\\(\\sqrt{3}\\)']; q.answer = 2; log.push('simplest-form T7U8eb30'); } }
// Range answers left unsimplified (y != 2/6 etc.).
const simp = { 'y11a-3b-q18b': ['2}{6', '1}{3'], 'y11a-3b-q18d': ['4}{8', '1}{2'], 'y11a-3b-q18f': ['6}{10', '3}{5'], 'y11a-3b-q18h': ['8}{12', '2}{3'], 'y11a-3b-q18j': ['10}{14', '5}{7'] };
for (const [id, [from, to]] of Object.entries(simp)) {
  const q = byId[id]; if (!q) continue;
  const i = q.answer; if (q.options[i].includes(from)) { q.options[i] = q.options[i].replace(from, to); log.push(`simplify ${id}`); }
}
writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
console.log(log.join('\n') || 'nothing to fix');
