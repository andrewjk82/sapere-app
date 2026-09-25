#!/usr/bin/env node
/**
 * Flags MC questions whose keyed option disagrees with (a) a directly computable trig value in the
 * stem ("exact value of \sin 150°"), or (b) the final value in the worked solution.
 * Read-only unless --fix, which re-keys only case (a) (computed from the stem, unambiguous).
 *   node tools/content/checkMcKeys.mjs <chapterId...> [--fix]
 */
import { readFileSync, writeFileSync } from 'fs';

const FIX = process.argv.includes('--fix');
const chapters = process.argv.slice(2).filter((a) => !a.startsWith('--'));

// ---- tiny LaTeX → number evaluator (fractions, sqrt, signs, pi-free) ----
const clean = (s) => String(s ?? '')
  .replace(/<[^>]+>/g, ' ').replace(/\\\\/g, '\\').replace(/\\[()\[\]]/g, '').replace(/\$/g, '')
  .replace(/\\[dt]frac/g, '\\frac').replace(/\\left|\\right/g, '').replace(/\s+/g, '');
const evalTex = (tex) => {
  let s = clean(tex);
  if (!s || /[a-zA-Z](?<!sqrt|frac)/.test(s.replace(/\\sqrt|\\frac/g, ''))) return null;
  for (let i = 0; i < 6; i += 1) {
    s = s.replace(/\\sqrt\{([^{}]+)\}/g, 'Math.sqrt($1)').replace(/\\sqrt(\d+)/g, 'Math.sqrt($1)');
    s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '(($1)/($2))');
  }
  if (/[\\{}]/.test(s)) return null;
  s = s.replace(/(\d|\))(?=Math|\()/g, '$1*');
  if (!/^[-+*/().\dMathsqrt]+$/.test(s)) return null;
  try { const v = Function(`"use strict";return (${s});`)(); return Number.isFinite(v) ? v : null; } catch { return null; }
};

const TRIG = { sin: Math.sin, cos: Math.cos, tan: Math.tan, sec: (x) => 1 / Math.cos(x), csc: (x) => 1 / Math.sin(x), cosec: (x) => 1 / Math.sin(x), cot: (x) => 1 / Math.tan(x) };
const stemTrig = (stem) => {
  const s = clean(stem).replace(/\^\{?\\circ\}?|°/g, 'deg');
  if (!/exactvalueof/i.test(s)) return null;
  const m = s.match(/\\?(sin|cos|tan|sec|csc|cosec|cot)\(?(-?\d+)deg\)?\.?$/);
  if (!m) return null;
  const v = TRIG[m[1]]((Number(m[2]) * Math.PI) / 180);
  return Math.abs(v) > 1e6 ? null : v;
};
const lastStepValue = (q) => {
  const steps = q.steps || [];
  for (let i = steps.length - 1; i >= 0; i -= 1) {
    const w = String(steps[i].work || '');
    const parts = w.split(/=|\\approx/);
    const v = evalTex(parts[parts.length - 1]);
    if (v != null) return v;
  }
  return null;
};

for (const id of chapters) {
  const file = `content/chapters/${id}.json`;
  const src = readFileSync(file, 'utf8');
  const ch = JSON.parse(src);
  let fixed = 0; const report = [];
  const visit = (q) => {
    (q.parts || []).forEach(visit);
    if (q.type !== 'mc' || !Array.isArray(q.options) || q.answer == null) return;
    const vals = q.options.map((o) => evalTex(typeof o === 'object' ? o.text : o));
    const keyed = vals[q.answer];
    const truth = stemTrig(q.stem);
    if (truth != null) {
      const idx = vals.findIndex((v) => v != null && Math.abs(v - truth) < 1e-6);
      if (idx >= 0 && idx !== q.answer) {
        report.push(`KEY(stem)  ${q.id}: keyed ${q.options[q.answer]} → should be ${q.options[idx]}`);
        if (FIX) { q.answer = idx; fixed += 1; }
      }
      return;
    }
    const sol = lastStepValue(q);
    if (sol != null && keyed != null && Math.abs(keyed - sol) > 1e-6) {
      const idx = vals.findIndex((v) => v != null && Math.abs(v - sol) < 1e-6);
      if (idx >= 0) report.push(`KEY(steps) ${q.id}: keyed ${q.options[q.answer]} but solution ends at ${q.options[idx]}`);
    }
  };
  ch.topics.forEach((t) => t.questions.forEach(visit));
  console.log(`${id}: ${report.length} suspect${FIX ? `, fixed ${fixed}` : ''}`);
  report.forEach((r) => console.log('  ' + r));
  if (FIX && fixed) writeFileSync(file, JSON.stringify(ch, null, 2) + (src.endsWith('\n') ? '\n' : ''));
}
