#!/usr/bin/env node
// Pre-edit / post-edit checklist for question fixes (see memory feedback_figure-edit-checklist).
// usage: node tools/content/lintQuestion.mjs content/chapters/y11a-6.json '^y11a-6-excel-trig-q13'
import fs from 'node:fs';
const [file, pat] = process.argv.slice(2);
const re = new RegExp(pat || '.');
const d = JSON.parse(fs.readFileSync(file, 'utf8'));
const out = [];
const stripMath = (s) => s.replace(/\\\([\s\S]*?\\\)/g, '').replace(/\\\[[\s\S]*?\\\]/g, '').replace(/\$[^$]*\$/g, '');
const texty = (s) => /\\[a-zA-Z]{2,}|[A-Za-z0-9)}]\^[\d{(a-z]|_\{|√|π|θ|\b[A-Za-z]{1,3}\s?=\s?[-−(\d]|\d\s?\/\s?[\d√]|\bcos\s?\d|\bsin\s?\d|\btan\s?\d/.test(s);
const check = (q, ctxId) => {
  const id = q.id || ctxId;
  const flag = (m) => out.push(`${id}: ${m}`);
  const txt = (label, s) => { if (typeof s === 'string' && texty(stripMath(s))) flag(`${label} has LaTeX outside \\( \\): ${s.slice(0, 70).replace(/\n/g, ' ')}`); };
  txt('stem', q.stem); txt('hint', q.hint);
  (q.options || []).forEach((o, i) => txt(`option${i}`, typeof o === 'string' ? o : o?.text));
  (q.keyPoints || []).forEach((k) => { txt('keyPoint.note', k.note); if (q.stem && !q.stem.includes(k.text)) flag(`keyPoint text not a substring of stem: ${k.text.slice(0, 50)}`); });
  const figs = [];
  if (q.figure?.svg) figs.push(['question figure', q.figure.svg]);
  (q.steps || []).forEach((s, i) => {
    txt(`step${i + 1}.explain`, s.explain);
    if (typeof s.work === 'string' && s.work.trim() && !/\\\(|\\\[|\$/.test(s.work) && texty(s.work)) flag(`step${i + 1}.work NOT wrapped in \\( \\): ${s.work.slice(0, 60).replace(/\n/g, ' ')}`);
    if (s.figure?.svg) { figs.push([`step${i + 1} figure`, s.figure.svg]); if (q.figure?.svg && s.figure.svg === q.figure.svg) flag(`step${i + 1} figure identical to question figure`); }
    if (/\*\*|\\\[/.test(s.explain || '')) flag(`step${i + 1}.explain has markdown/** or \\[ ]`);
  });
  if (q.figure?.svg && /Solution|Correct|Answer|solution:/i.test(q.figure.svg.replace(/aria-label="[^"]*"/, ''))) flag('question figure contains answer-like text (Solution/Correct/Answer)');
  figs.forEach(([n, sv]) => {
    const mw = sv.match(/max-width:\s*(\d+)px/); const w = sv.match(/<svg[^>]*\swidth="(\d+)"/);
    if (mw && +mw[1] < 280) flag(`${n} small (max-width ${mw[1]}px; checklist wants >=312)`);
    if (!mw && !w) flag(`${n} has no width/max-width`);
    if (/<text[^>]*>[^<]*[π√][^<]*\/[^<]*<\/text>/.test(sv) && /π\/\d/.test(sv)) flag(`${n} has plain-text π/n (draw stacked fraction)`);
  });
  if (!q.figure?.svg && /diagram|as shown|shown above/i.test(`${q.stem} ${q.hint || ''}`)) flag('mentions the diagram but has no question figure');
  // sketch/draw questions: the stem figure would be the answer; and a graph question whose solution has steps needs a per-step highlighted figure
  if (q.figure?.svg && /\b(sketch|draw)\b/i.test(q.stem || '')) flag('Sketch/Draw question has a stem figure — OK only if it is a GIVEN graph (e.g. sketch the derivative from f); if it shows the answer curve, move it to steps[].figure');
  if (/\b(sketch|draw)\b/i.test(q.stem || '') && (q.steps || []).length >= 3 && !(q.steps || []).some((s) => s.figure?.svg)) flag('Sketch/Draw question has no step figures (highlight each step on the graph)');
  (q.parts || []).forEach((p) => check(p, id));
};
const walk = (x) => { if (Array.isArray(x)) x.forEach(walk); else if (x && typeof x === 'object') { if (typeof x.id === 'string' && x.type && re.test(x.id)) check(x); else Object.values(x).forEach(walk); } };
walk(d.topics);
console.log(out.length ? out.join('\n') : 'OK: no issues');
process.exit(out.length ? 1 : 0);
