// Restore MC options on items that were left as `review` with a bare option index as the
// answer (students saw "Answer: 2"). Options copied from surviving siblings. Idempotent.
import { readFileSync, writeFileSync } from 'fs';
const file = 'content/chapters/y11a-5.json';
const src = readFileSync(file, 'utf8');
const ch = JSON.parse(src);
const byId = {};
const walk = (q) => { byId[q.id] = q; (q.parts || []).forEach(walk); };
ch.topics.forEach((t) => t.questions.forEach(walk));
const sets = [
  { ids: ['y11a-5C-new-10a', 'y11a-5C-new-10b', 'y11a-5C-new-10c', 'y11a-5C-new-10d', 'y11a-5C-new-10e', 'y11a-5C-new-10f', 'y11a-5C-new-10h'], options: ['Even', 'Odd', 'Neither'] },
  { ids: ['y11-5g-q5a', 'y11-5g-q5c', 'y11-5g-q5d', 'y11-5g-q5f'], options: ['Yes, they commute.', 'No, they do not commute.'] },
];
const log = [];
for (const { ids, options } of sets) {
  for (const id of ids) {
    const q = byId[id];
    if (!q || q.type !== 'review' || !/^\d$/.test(String(q.answer))) continue;
    const idx = Number(q.answer);
    q.type = 'mc'; q.options = options.slice(); q.answer = idx;
    delete q.accepted; delete q.manual;
    log.push(`${id} -> mc "${options[idx]}"`);
  }
}
writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
console.log(log.join('\n') || 'nothing to fix');
