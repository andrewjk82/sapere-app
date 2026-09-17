#!/usr/bin/env node
/**
 * Regression test for the 2026-09-17 "서브 문제들이 섞여서 있어" report on jrhy2008-q32b.
 *
 * A student's report snapshots whichever sub-question they were looking at, so
 * report.questionId is very often a PART id (e.g. "jrhy2008-q32b"), not the parent's id
 * ("jrhy2008-q32"). ReportsAdmin's "Go to Question" / list-enrichment flows all call
 * contentLoader.adminGetQuestion(qid) to fetch a live copy — before this fix, a part id resolved
 * to nothing (parts are never independently listed), so the UI silently fell back to the report's
 * stale snapshot: the sub-question alone, with no parent stem and no sibling parts. Fixed by
 * publish.mjs emitting a part→parent index (manifest.parts) and adminGetQuestion() consulting it.
 *
 * Drives the real published output (public/content/, from `npm run content:publish`) through the
 * real contentLoader — not a mock — so this fails if either half of the fix regresses.
 */
import fs from 'node:fs';
import path from 'node:path';

const PUB = 'public/content';
globalThis.__SAPERE_CONTENT_SOURCE = 'cdn';
globalThis.fetch = async (url) => {
  const f = path.join(PUB, url.replace(/^\/content\//, ''));
  if (!fs.existsSync(f)) return { ok: false, status: 404 };
  return { ok: true, status: 200, json: async () => JSON.parse(fs.readFileSync(f, 'utf8')) };
};
const { adminGetQuestion } = await import('../../../src/services/contentLoader.js');

let pass = 0, fail = 0;
const check = (name, cond, info = '') => { if (cond) { pass++; console.log('  ✓', name); } else { fail++; console.log('  ✗', name, info); } };

// Ground truth: read the manifest's own part index and pick a handful of real (partId, parentId)
// pairs to test against, rather than hardcoding one id that could later move or get deleted.
const manifest = JSON.parse(fs.readFileSync(path.join(PUB, 'manifest.json'), 'utf8'));
const parts = JSON.parse(fs.readFileSync(path.join(PUB, manifest.parts), 'utf8'));
check('fixture: manifest.parts exists and is non-empty', Object.keys(parts).length > 0, `${Object.keys(parts).length} entries`);

const known = parts['jrhy2008-q32b'];
check('fixture: the reported id (jrhy2008-q32b) is in the part index', known?.parentId === 'jrhy2008-q32', JSON.stringify(known));

if (known) {
  const doc = await adminGetQuestion('jrhy2008-q32b');
  check('resolves to the PARENT id, not the bare part', doc?.id === 'jrhy2008-q32', doc?.id);
  check('parent brings its full subQuestions array (not just the reported part)', doc?.subQuestions?.length === 3, doc?.subQuestions?.length);
  check('the reported part is one of the returned siblings', doc?.subQuestions?.some((s) => s.id === 'jrhy2008-q32b'));
  check('siblings a and c are ALSO present (not split out)', ['jrhy2008-q32a', 'jrhy2008-q32c'].every((id) => doc.subQuestions.some((s) => s.id === id)));
}

// Sample real part ids from the manifest to catch anything id-specific in the fix. A part id can
// ALSO independently exist as its own standalone active document — a separate, pre-existing legacy
// pattern ("part id also exists as standalone doc", content/_export/P1-REPORT.md, ~662 cases, e.g.
// asc2020-q34-a) unrelated to this fix. adminGetQuestion() correctly prefers a real direct match over
// the parent-redirect (its own documented precedence) — so the correct invariant here is "resolves to
// itself OR its parent, never null", not "always the parent".
const sample = Object.entries(parts).slice(0, 20);
let redirected = 0;
for (const [partId, { parentId }] of sample) {
  const doc = await adminGetQuestion(partId);
  const ok = doc?.id === parentId || doc?.id === partId;
  if (doc?.id === parentId) redirected++;
  check(`${partId} → resolves to itself or its parent ${parentId} (never null)`, ok, doc?.id ?? 'null');
}
check('at least one sampled part actually exercised the redirect (not just self-matches)', redirected > 0, `${redirected}/${sample.length}`);

// A genuinely unknown id must still return null, not throw and not accidentally match a part.
const unknown = await adminGetQuestion('this-id-does-not-exist-anywhere-12345');
check('unknown id still returns null (no false positive)', unknown === null);

// A normal top-level id (not a part) must resolve directly, unaffected by the part-index fallback.
const topLevel = await adminGetQuestion('jrhy2008-q32');
check('a real top-level id still resolves directly (fallback path never triggered)', topLevel?.id === 'jrhy2008-q32');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
