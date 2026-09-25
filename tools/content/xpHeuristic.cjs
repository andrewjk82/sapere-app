// Heuristic XP rater used for chapters where per-item reading isn't needed:
// base on the chapter's own difficulty tag, then keyword adjustments (rubric v4).
// usage: node tools/content/xpHeuristic.cjs <chapterId> [overrides.json]
const fs = require('fs');
const { execSync } = require('child_process');
const [chapterId, ovFile] = process.argv.slice(2);
const lines = execSync(`node tools/content/xpExtract.cjs ${chapterId} --all`, { maxBuffer: 1 << 26 }).toString().trim().split('\n').filter(Boolean);
const base = { e: 1, m: 2, h: 3, '-': 2 };
const r = {};
for (const l of lines) {
  const [id, d] = l.split(' ');
  const s = l.slice(id.length + 3).split(' => ')[0];
  let x = base[d] ?? 2;
  if (/\b(Prove|prove)\b|for ANY|for all real|show that .* for all/i.test(s)) x = Math.max(x + 1, 3);
  else if (/\bShow (that|algebraically)|Explain why|Hence\b/.test(s)) x = Math.max(x, 3);
  if (s.length < 90 && /^(Evaluate|Verify that|State the|Write down the (value|coordinates)|Classify|Which quadrant|How is the graph|Is the (interval|relation)|Convert|Express .* in (degrees|radians)$)/i.test(s)) x = Math.min(x, 1);
  if (/Evaluate:? \|/.test(s)) x = 1;
  r[id] = Math.min(10, Math.max(1, x));
}
if (ovFile && fs.existsSync(ovFile)) Object.assign(r, JSON.parse(fs.readFileSync(ovFile, 'utf8')));
fs.writeFileSync(`tools/content/xp-ratings/${chapterId}.json`, JSON.stringify(r));
const c = {}; Object.values(r).forEach((v) => { c[v] = (c[v] || 0) + 1; });
console.log(chapterId, Object.keys(r).length, c, 'avg', (Object.values(r).reduce((a, b) => a + b, 0) / Object.keys(r).length).toFixed(2));
