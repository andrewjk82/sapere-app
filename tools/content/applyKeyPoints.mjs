#!/usr/bin/env node
/**
 * Writes rule-based keyPoints (highlight + tip) into a chapter file.
 *   node --import ./scripts/extResolve.mjs tools/content/applyKeyPoints.mjs <chapterId>            # dry run + report
 *   node --import ./scripts/extResolve.mjs tools/content/applyKeyPoints.mjs <chapterId> --apply
 *   ... --sample 3      print 3 example results per topic
 * Rules: tools/content/keypoints/<chapterId>.mjs (RULES = [{ when, points: [[pattern, note], ...] }]).
 * Never touches a question that already has keyPoints (teacher edits win) or a teacher-marked one.
 * Run `git pull --rebase` first — teachers edit keyPoints live from the Question Bank.
 */
import { readFileSync, writeFileSync } from 'fs';
import { snapToMath, locateKeyPoints, insertKeyPointMarkers, keyPointMarkersToHtml } from '../../src/utils/keyPoints.js';
import { toDisplayText } from '../../src/utils/mathPreprocess.js';

const args = process.argv.slice(2);
const chapterId = args.find((a) => !a.startsWith('--') && !/^\d+$/.test(a));
const APPLY = args.includes('--apply');
const SAMPLE = Number(args[args.indexOf('--sample') + 1]) || 0;
if (!chapterId) { console.error('usage: applyKeyPoints.mjs <chapterId> [--apply] [--sample N]'); process.exit(1); }

const { RULES } = await import(`./keypoints/${chapterId}.mjs`);
const file = `content/chapters/${chapterId}.json`;
const src = readFileSync(file, 'utf8');
const ch = JSON.parse(src);

const findText = (stem, pattern) => {
  if (typeof pattern === 'string') {
    const at = stem.indexOf(pattern);
    return at < 0 ? null : [at, at + pattern.length];
  }
  const m = stem.match(pattern);
  return m ? [m.index, m.index + m[0].length] : null;
};

const render = (text) => text.split(/\r?\n/).map((l) => toDisplayText(l, '', { currencyHtml: true })).join('\n');
const rendersSame = (stem, kps) => render(insertKeyPointMarkers(stem, kps).split(/\r?\n/).join('\n'))
  .split('\n').map(keyPointMarkersToHtml).join('\n').replace(/<mark[^>]*>|<\/mark>/g, '') === render(stem);

const keyPointsFor = (stem) => {
  for (const rule of RULES) {
    if (!rule.when.test(stem)) continue;
    const kps = [];
    for (const [pattern, note] of rule.points) {
      const hit = findText(stem, pattern);
      if (!hit) continue;
      const [s, e] = snapToMath(stem, hit[0], hit[1]);
      const text = stem.slice(s, e);
      if (!text.trim() || kps.some((k) => k.text === text)) continue;
      kps.push({ text, note: typeof note === 'function' ? note(text, stem) : note });
    }
    // Drop anything that overlaps an earlier highlight (the renderer would hide it anyway).
    const placed = locateKeyPoints(stem, kps);
    const ok = kps.filter((_, i) => placed[i]?.found).slice(0, 3);
    // Keep only highlights that render cleanly: the stem must display exactly as it does
    // without them (markers next to "$" currency can flip toDisplayText's currency handling).
    const clean = ok.filter((kp) => rendersSame(stem, [kp]));
    if (clean.length) return clean;
  }
  return null;
};

const stats = {}; const samples = {}; let written = 0;
ch.topics.forEach((t) => {
  const st = (stats[t.topicId] = { total: 0, done: 0, skipped: 0, none: [] });
  const visit = (q) => {
    if (q.parts) { q.parts.forEach(visit); return; }
    st.total += 1;
    if (q.keyPoints?.length || q.type === 'review' || q.manual || !String(q.stem || '').trim()) { st.skipped += 1; return; }
    const kps = keyPointsFor(q.stem);
    if (!kps) { st.none.push(q.id); return; }
    st.done += 1; written += 1;
    if (APPLY) q.keyPoints = kps;
    if (SAMPLE && (samples[t.topicId] ||= []).length < SAMPLE && Math.random() < 0.3) samples[t.topicId].push({ id: q.id, stem: q.stem, kps });
  };
  t.questions.forEach(visit);
});

for (const [topic, st] of Object.entries(stats)) {
  console.log(`${topic}: ${st.done}/${st.total - st.skipped} highlighted (skipped ${st.skipped})${st.none.length ? `  NONE: ${st.none.slice(0, 12).join(', ')}${st.none.length > 12 ? ` …+${st.none.length - 12}` : ''}` : ''}`);
  (samples[topic] || []).forEach((s) => {
    console.log(`   ${s.id} | ${s.stem.replace(/\s+/g, ' ').slice(0, 140)}`);
    s.kps.forEach((k) => console.log(`       [${k.text.replace(/\s+/g, ' ').slice(0, 50)}] → ${k.note}`));
  });
}
console.log(`${APPLY ? 'written' : 'would write'}: ${written}`);
if (APPLY) writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
