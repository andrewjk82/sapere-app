#!/usr/bin/env node
/**
 * Writes rubric XP ratings (tools/content/xp-rubric.md) into a chapter file.
 *   node tools/content/applyXpRatings.mjs <chapterId>          # dry run
 *   node tools/content/applyXpRatings.mjs <chapterId> --apply
 * Reads tools/content/xp-ratings/<chapterId>.json ({ questionOrPartId: xp }).
 * Never overwrites an xp that is already set (teacher-set values win).
 *   --prev <file>  re-rating: also overwrite an existing xp when it still equals the value
 *                  <file> (the earlier ratings) gave it — i.e. we set it, nobody edited it since.
 */
import { readFileSync, writeFileSync } from 'fs';

const [chapterId] = process.argv.slice(2).filter((a, i, all) => !a.startsWith('--') && all[i - 1] !== '--prev');
const APPLY = process.argv.includes('--apply');
if (!chapterId) { console.error('usage: applyXpRatings.mjs <chapterId> [--apply]'); process.exit(1); }

const file = `content/chapters/${chapterId}.json`;
const src = readFileSync(file, 'utf8');
const ch = JSON.parse(src);
const ratings = JSON.parse(readFileSync(`tools/content/xp-ratings/${chapterId}.json`, 'utf8'));
const prevIdx = process.argv.indexOf('--prev');
const prev = prevIdx > 0 ? JSON.parse(readFileSync(process.argv[prevIdx + 1], 'utf8')) : null;

const stats = { set: 0, keptExisting: 0, unrated: [], unknown: new Set(Object.keys(ratings)) };
const visit = (q) => {
  if (q.parts) { q.parts.forEach(visit); return; }
  stats.unknown.delete(q.id);
  if (q.xp != null) {
    if (!(prev && prev[q.id] === q.xp && ratings[q.id] !== q.xp)) { stats.keptExisting += 1; return; }
  }
  const xp = ratings[q.id];
  if (!Number.isInteger(xp) || xp < 1 || xp > 10) { stats.unrated.push(q.id); return; }
  q.xp = xp;
  stats.set += 1;
};
ch.topics.forEach((t) => t.questions.forEach(visit));

console.log(`${chapterId}: set=${stats.set} keptExisting=${stats.keptExisting} unrated=${stats.unrated.length} unknownIds=${stats.unknown.size}`);
if (stats.unrated.length) console.log('  unrated:', stats.unrated.join(', '));
if (stats.unknown.size) console.log('  ratings for ids not in chapter:', [...stats.unknown].join(', '));
if (APPLY) {
  const trailing = src.endsWith('\n') ? '\n' : '';
  writeFileSync(file, JSON.stringify(ch, null, 2) + trailing);
  console.log('  written.');
} else console.log('  (dry run — pass --apply)');
