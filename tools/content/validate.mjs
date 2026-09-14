#!/usr/bin/env node
/**
 * Build gate for content/chapters/*.json.
 *   1. schema (content/schema.js)
 *   2. id uniqueness across all files, fig: refs resolve to content/figures/
 *   3. MC: answer resolved (null only if listed in review-queue), no duplicate option texts
 *   4. KaTeX: every math span must parse after the renderer's own preprocessing (toDisplayText)
 * Ratchet: content/known-defects.json lists error keys that already existed when the gate was
 * introduced (2026-09-14). Those never fail the build; any NEW error does. Fix a defect → it drops
 * out of the baseline on the next `--write-baseline`. The baseline may only shrink.
 *
 *   node tools/content/validate.mjs                 gate (exit 1 on new errors)
 *   node tools/content/validate.mjs --report        counts + full report json, never fails
 *   node tools/content/validate.mjs --write-baseline  rewrite known-defects.json from current errors
 */
import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';
import { Chapter } from '../../content/schema.js';
import { validateLatexValue } from '../../src/utils/latexValidate.js';

const DIR = 'content/chapters';
const REPORT = process.argv.includes('--report');
const WRITE_BASELINE = process.argv.includes('--write-baseline');
const BASELINE = 'content/known-defects.json';
const errors = []; const warn = [];
const ids = new Map();
let nQ = 0, nTex = 0;
let review = new Set();
try { review = new Set(JSON.parse(fs.readFileSync('content/_export/review-queue.json', 'utf8')).map((r) => r.id)); } catch {}

// Same preprocessing + delimiter scan as MathView (src/utils/latexValidate.js) — KaTeX is the authority.
const render = (tex, opts) => katex.renderToString(tex, { ...opts, strict: 'ignore' });
const checkTex = (text, where) => {
  if (!text) return;
  for (const { tex, error } of validateLatexValue(String(text), render)) { nTex++; errors.push(`${where}: KaTeX ${error.split('\n')[0].slice(0, 120)} :: ${tex.slice(0, 80)}`); }
};
const texNorm = (s) => String(s).replace(/\\\(|\\\)|\$/g, '').replace(/\s+/g, '').toLowerCase();

const partIds = new Map();
const walk = (q, file, isPart = false) => {
  nQ++;
  const where = `${file}#${q.id}`;
  if (isPart) {
    // A part id colliding with a standalone question is a known legacy pattern (sub-parts were once
    // split into independent docs). Not fatal yet — reported so it can be reconciled in P5.
    if (partIds.has(q.id)) errors.push(`${where}: duplicate part id (also in ${partIds.get(q.id)})`); else partIds.set(q.id, file);
    if (ids.has(q.id)) warn.push(`${where}: part-id also exists as standalone question in ${ids.get(q.id)}`);
  } else {
    if (ids.has(q.id)) errors.push(`${where}: duplicate id (also in ${ids.get(q.id)})`); else ids.set(q.id, file);
    if (partIds.has(q.id)) warn.push(`${where}: standalone id also a part in ${partIds.get(q.id)}`);
  }
  if (!q.stem && q.type !== 'multipart' && !q.inactive) errors.push(`${where}: empty stem`);
  checkTex(q.stem, where); checkTex(q.hint, where); checkTex(q.solution, where);
  (q.steps || []).forEach((s, i) => { checkTex(s.explain, `${where}.step${i}`); checkTex(s.work, `${where}.step${i}`); });
  const figs = [q.figure?.svg, ...(q.steps || []).map((s) => s.figure?.svg)].filter(Boolean);
  for (const f of figs) if (!fs.existsSync(path.join('content/figures', `${f.slice(4)}.svg`))) errors.push(`${where}: missing figure ${f}`);
  if (q.type === 'mc') {
    const texts = q.options.map((o) => (typeof o === 'string' ? o : o.text));
    texts.forEach((t) => checkTex(t, where));
    if (q.answer === null && !review.has(q.id)) errors.push(`${where}: unresolved MC answer not in review queue`);
    if (q.inactive) return;
    const seen = new Set(); texts.forEach((t) => { const k = texNorm(t); if (seen.has(k)) warn.push(`${where}: duplicate option "${t.slice(0, 40)}"`); seen.add(k); });
    if (texts.length !== 4) warn.push(`${where}: ${texts.length} options`);
  }
  if (q.type === 'multipart') q.parts.forEach((p) => walk(p, file, true));
};

for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.json')).sort()) {
  let data;
  try { data = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8')); } catch (e) { errors.push(`${f}: invalid JSON ${e.message}`); continue; }
  const r = Chapter.safeParse(data);
  if (!r.success) { r.error.issues.slice(0, 5).forEach((i) => errors.push(`${f}: schema ${i.path.join('.')} — ${i.message}`)); if (r.error.issues.length > 5) errors.push(`${f}: …${r.error.issues.length - 5} more schema issues`); continue; }
  for (const t of data.topics) for (const q of t.questions) walk(q, f);
}

const key = (e) => e.replace(/ at position \d+:.*?(?= ::)/, '').slice(0, 200);
let baseline = new Set();
try { baseline = new Set(JSON.parse(fs.readFileSync(BASELINE, 'utf8'))); } catch {}
const newErrors = errors.filter((e) => !baseline.has(key(e)));
const fixed = [...baseline].filter((k) => !errors.some((e) => key(e) === k));

console.log(`questions=${nQ} errors=${errors.length} (baseline ${baseline.size}, new ${newErrors.length}, fixed-since-baseline ${fixed.length}) warnings=${warn.length}`);
if (WRITE_BASELINE) {
  fs.writeFileSync(BASELINE, JSON.stringify([...new Set(errors.map(key))].sort(), null, 1));
  console.log(`wrote ${BASELINE}`);
  process.exit(0);
}
if (REPORT) {
  const byKind = {}; errors.forEach((e) => { const k = e.split(': ')[1]?.split(' ')[0] || '?'; byKind[k] = (byKind[k] || 0) + 1; }); console.log('errors by kind', byKind);
  fs.writeFileSync('content/_export/validate-report.json', JSON.stringify({ errors, warn, newErrors, fixed }, null, 1));
  process.exit(0);
}
newErrors.slice(0, 40).forEach((e) => console.error('ERROR', e));
if (newErrors.length > 40) console.error(`… ${newErrors.length - 40} more`);
process.exit(newErrors.length ? 1 : 0);
