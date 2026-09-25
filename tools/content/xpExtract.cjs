// Compact dump of a chapter's leaf questions for XP rating.
// Usage: node xpExtract.cjs <chapterId> [topicId] [--all]   (--all: include questions that already have xp)
const fs = require('fs');
const ALL = process.argv.includes('--all');
const [chapterId, topicFilter] = process.argv.slice(2).filter((a) => a !== '--all');
const c = JSON.parse(fs.readFileSync(`content/chapters/${chapterId}.json`, 'utf8'));
const strip = (t) => String(t ?? '').replace(/<svg[\s\S]*?<\/svg>/g, '[fig]').replace(/<[^>]+>/g, ' ').replace(/\\\\/g, '\\').replace(/\s+/g, ' ').trim();
const out = [];
const w = (q, t, par) => {
  if (q.parts) { q.parts.forEach((p) => w(p, t, q)); return; }
  if (q.xp != null && !ALL) return;
  const ans = q.type === 'mc' ? q.options?.[q.answer] : q.answer;
  out.push([q.id, q.difficulty?.[0] || '-', par ? `[P:${strip(par.stem).slice(0, 100)}]` : '', strip(q.stem).slice(0, 170), '=>', strip(typeof ans === 'object' ? ans?.text : ans).slice(0, 45)].filter(Boolean).join(' '));
};
c.topics.filter((t) => !topicFilter || t.topicId === topicFilter).forEach((t) => t.questions.forEach((q) => w(q, t, null)));
console.log(out.join('\n'));
