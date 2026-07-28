#!/usr/bin/env node
/**
 * Guard: never read the whole `questions` collection.
 *
 * Why this exists
 * ───────────────
 * Firestore bills 1 read per document and `questions` holds 23,000+ of them.
 * An unfiltered read is therefore ~23,000 reads per call — invisible while you
 * write the script, very visible on the bill.
 *
 * 2026-07-28: three throwaway fix-up scripts each did
 *
 *   const snap = await db.collection('questions').get();
 *
 * in one morning session (fix_global_negative_distractors.cjs,
 * cleanup_bad_distractors.cjs, fix_dummy_fractions.cjs) — roughly 70,000+
 * reads from those three lines alone, and the biggest single contributor to
 * that day's traffic spike. Every other script that session was correctly
 * scoped, so this is not a knowledge problem that documentation fixes; it is
 * a one-character-difference mistake that has to be caught mechanically.
 *
 * Scoped reads are fine and are what you almost always want:
 *
 *   db.collection('questions').where('chapterId', '==', 'y7-6').get()   ok
 *   db.collection('questions').doc(id).get()                            ok
 *   db.collection('questions').count().get()                            ok
 *
 * Run: npm run test:question-scan-guard
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const SCAN_DIRS = ['tools', 'scripts', 'src', 'api'];

/**
 * Reading the entire collection is the POINT of these — they rebuild the
 * denormalized indexes from actual DB state and cannot know the ids up front.
 * Deliberate, rare, admin-only operations.
 */
const ALLOWED_FILES = new Set([
  // rebuildAllQuestionIndexes(): full rebuild of every chapter index.
  join('src', 'services', 'questionIndexService.js'),
]);

/**
 * Throwaway one-off fix-up scripts that already shipped this mistake before
 * the guard existed. They are reported as warnings so the count stays visible
 * and can only shrink — the build fails on anything NOT in this list, so no
 * new full scan can be added.
 *
 * Do not add to this list to silence a new script. Do not re-run one of these
 * without scoping it first: each run is ~23,000 reads. Deleting one once it is
 * confirmed spent is the preferred way to shorten the list.
 */
const LEGACY_FILES = new Set([
  'scripts/searchAllSpecialized.js',
  'tools/scripts/checkCh4Distribution.js',
  'tools/scripts/cleanup_bad_distractors.cjs',
  'tools/scripts/findFloats.cjs',
  'tools/scripts/fixAllBroken.cjs',
  'tools/scripts/fixCh4FSteps.js',
  'tools/scripts/fixCurrencyDollarEscapeBug.js',
  'tools/scripts/fixGlobalFloats.cjs',
  'tools/scripts/fixGlobalLatexPattern.cjs',
  'tools/scripts/fix_dummy_fractions.cjs',
  'tools/scripts/fix_global_negative_distractors.cjs',
  'tools/scripts/structuralAuditAllQuestions.js',
  'tools/scripts/syncCh4.js',
].map((p) => p.split('/').join(sep)));

const SKIP_DIR = /(^|[\\/])(node_modules|dist|build|\.git|\.vercel|\.firebase)([\\/]|$)/;

/** Strip comments so documentation examples never trip the guard. */
const stripComments = (src) => src
  .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
  .replace(/(^|[^:])\/\/[^\n]*/g, (m, p1) => p1 + ' '.repeat(m.length - p1.length));

/** Calls that narrow a query down from "the whole collection". */
const SCOPING_CALL = /\.\s*(where|doc|limit|select|count|startAt|startAfter|endAt|endBefore)\s*\(/;

const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const full = join(dir, name);
  if (SKIP_DIR.test(full)) return [];
  let st;
  try { st = statSync(full); } catch { return []; }
  return st.isDirectory() ? walk(full) : [full];
});

const lineOf = (src, index) => src.slice(0, index).split('\n').length;

const violations = [];
let scanned = 0;

for (const dirName of SCAN_DIRS) {
  const dir = join(ROOT, dirName);
  if (!existsSync(dir)) continue;

  for (const file of walk(dir)) {
    if (!/\.(js|jsx|cjs|mjs)$/.test(file)) continue;
    const rel = relative(ROOT, file);
    if (ALLOWED_FILES.has(rel) || ALLOWED_FILES.has(rel.split('/').join(sep))) continue;

    scanned++;
    const raw = readFileSync(file, 'utf8');
    const src = stripComments(raw);

    // ── Rule A: admin SDK chain — .collection('questions') … .get() ──────
    // Only a single chained expression is analysed (no `;` in between); a
    // collection ref stashed in a variable first is out of scope by design.
    const chainRe = /\.\s*collection\s*\(\s*['"]questions['"]\s*\)/g;
    for (let m; (m = chainRe.exec(src)) !== null;) {
      const after = src.slice(m.index + m[0].length);
      const getAt = after.search(/\.\s*get\s*\(/);
      if (getAt === -1) continue;                       // never terminated in a get()
      const between = after.slice(0, getAt);
      if (between.includes(';')) continue;              // separate statement
      if (SCOPING_CALL.test(between)) continue;         // properly narrowed
      violations.push({
        rel,
        line: lineOf(src, m.index),
        id: 'admin-full-collection-get',
        code: (raw.split('\n')[lineOf(src, m.index) - 1] || '').trim(),
      });
    }

    // ── Rule B: client SDK — getDocs(collection(db, 'questions')) ────────
    const clientRe = /\bgetDocs\w*\s*\(\s*collection\s*\(\s*\w+\s*,\s*['"]questions['"]\s*\)\s*\)/g;
    for (let m; (m = clientRe.exec(src)) !== null;) {
      violations.push({
        rel,
        line: lineOf(src, m.index),
        id: 'client-full-collection-get',
        code: (raw.split('\n')[lineOf(src, m.index) - 1] || '').trim(),
      });
    }
  }
}

console.log('\nquestions full-scan guard\n');

const isLegacy = (v) => LEGACY_FILES.has(v.rel) || LEGACY_FILES.has(v.rel.split('/').join(sep));
const legacy = violations.filter(isLegacy);
const fresh = violations.filter((v) => !isLegacy(v));

// A legacy entry that no longer exists (script deleted or scoped) should not
// linger in the list — surface it so the quarantine can only shrink.
const stale = [...LEGACY_FILES].filter((f) => !legacy.some((v) => v.rel.split('/').join(sep) === f));

if (fresh.length === 0) {
  console.log(`  ok  ${scanned} files scanned — no new unfiltered reads of the questions collection`);
  if (legacy.length) {
    console.log(`\n  ${legacy.length} known legacy full-scan(s) quarantined (never re-run unscoped — ~23,000 reads each):`);
    legacy.forEach((v) => console.log(`      · ${v.rel}:${v.line}`));
  }
  if (stale.length) {
    console.log(`\n  ${stale.length} LEGACY_FILES entr(ies) no longer violating — remove from the list in ${relative(ROOT, fileURLToPath(import.meta.url))}:`);
    stale.forEach((f) => console.log(`      · ${f.split(sep).join('/')}`));
  }
  console.log('');
  process.exit(0);
}

for (const v of fresh) {
  console.error(`  ✗ ${v.rel}:${v.line}  [${v.id}]`);
  console.error(`      ${v.code}`);
}
console.error(
  `\n${fresh.length} unfiltered read(s) of \`questions\` (23,000+ docs = 23,000+ reads each).`
  + '\nScope the query — .where(\'chapterId\', \'==\', …) / .where(\'topicId\', \'==\', …) / .doc(id) —'
  + '\nor, if a full rebuild really is the intent, add the file to ALLOWED_FILES in this guard'
  + '\nwith a comment explaining why. See CLAUDE.md.\n',
);
process.exit(1);
