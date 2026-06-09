/**
 * Past Paper PDF Generator
 * Usage:
 *   node generate_past_paper.mjs [--seed 42] [--out paper.pdf] [--solutions]
 */

import puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';

import { CARINGBAH_2020_QUESTIONS }      from './src/constants/seedCaringbah2020Questions.js';
import { ABBOTSLEIGH_2020_QUESTIONS }    from './src/constants/seedAbbotsleigh2020Questions.js';
import { ASCHAM_2020_QUESTIONS }         from './src/constants/seedAscham2020Questions.js';
import { BARKER_2020_QUESTIONS }         from './src/constants/seedBarker2020Questions.js';
import { BAULKHAM_2020_QUESTIONS }       from './src/constants/seedBaulkham2020Questions.js';
import { BLACKTOWN_BOYS_2020_QUESTIONS } from './src/constants/seedBlacktownBoys2020Questions.js';

// ─── Args ────────────────────────────────────────────────────────────────────
const args    = process.argv.slice(2);
const getArg  = (flag, def) => { const i = args.indexOf(flag); return i !== -1 ? args[i+1] : def; };
const SEED    = parseInt(getArg('--seed', String(Date.now())));
const OUT     = getArg('--out', 'generated_past_paper.pdf');
const SHOW_SOL = args.includes('--solutions');

// ─── Seeded RNG ──────────────────────────────────────────────────────────────
function makeRng(seed) {
  let s = seed >>> 0;
  return () => {
    s |= 0; s = s + 0x6D2B79F5 | 0;
    let t = Math.imul(s ^ s >>> 15, 1 | s);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function shuffle(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Pool questions ──────────────────────────────────────────────────────────
const ALL = [
  ...CARINGBAH_2020_QUESTIONS,
  ...ABBOTSLEIGH_2020_QUESTIONS,
  ...ASCHAM_2020_QUESTIONS,
  ...BARKER_2020_QUESTIONS,
  ...BAULKHAM_2020_QUESTIONS,
  ...BLACKTOWN_BOYS_2020_QUESTIONS,
];

const rng = makeRng(SEED);

// Deduplicate by first 80 chars of question text
const seen = new Set();
const unique = ALL.filter(q => {
  const key = (q.q || q.question || '').slice(0, 80);
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

const mcqPool = shuffle(unique.filter(q => q.type === 'multiple_choice'), rng);
const saPool  = shuffle(unique.filter(q => q.type === 'short_answer'), rng);

const sectionI  = mcqPool.slice(0, 10);
const sectionII = saPool.slice(0, 30);

// ─── Helpers ─────────────────────────────────────────────────────────────────

// Convert markdown table → HTML table
function convertMarkdownTable(text) {
  const lines = text.split('\n');
  const result = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    // Check if this line looks like a table row: starts and ends with |
    if (/^\s*\|.+\|\s*$/.test(line)) {
      // Collect all consecutive table lines
      const tableLines = [];
      while (i < lines.length && /^\s*\|.+\|\s*$/.test(lines[i])) {
        tableLines.push(lines[i]);
        i++;
      }
      // Parse: first row = header, second row = separator (skip), rest = body
      const rows = tableLines.filter(l => !/^\s*\|[\s\-:|]+\|\s*$/.test(l));
      if (rows.length === 0) continue;
      const parseRow = (row) =>
        row.split('|').map(c => c.trim()).filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);

      const headerCells = parseRow(rows[0]);
      const bodyRows    = rows.slice(1);

      const thHtml = headerCells.map(c => `<th>${c}</th>`).join('');
      const tbHtml = bodyRows.map(r =>
        `<tr>${parseRow(r).map(c => `<td>${c}</td>`).join('')}</tr>`
      ).join('');

      result.push(`<table class="md-table"><thead><tr>${thHtml}</tr></thead><tbody>${tbHtml}</tbody></table>`);
    } else {
      result.push(lines[i]);
      i++;
    }
  }
  return result.join('\n');
}

// If a string looks like bare LaTeX (no $ but has \, ^, _) wrap it in \[...\]
function texStep(text) {
  if (!text) return '';
  const s = String(text).trim();
  // Already has math delimiters or is plain text
  if (s.includes('$') || s.includes('\\(') || s.includes('\\[')) return tex(s);
  // Looks like bare LaTeX — contains backslash commands or math notation
  if (/[\\^_{}]/.test(s) && !/^[A-Za-z0-9\s.,;:()\-+=%'"!?]+$/.test(s)) {
    return `<div class="step-math">\\[${s}\\]</div>`;
  }
  return tex(s);
}

// Convert $...$ and $$...$$ → MathJax delimiters
// Also escapes HTML, converts markdown tables, preserves newlines as <br>
function tex(text) {
  if (!text) return '';
  let s = String(text);
  // First convert markdown tables (before HTML escaping content)
  s = convertMarkdownTable(s);
  // HTML escape non-table parts — we need to be careful not to escape inside table HTML
  // Strategy: split on table tags, escape only non-table segments
  const parts = s.split(/(<table[\s\S]*?<\/table>)/g);
  s = parts.map((part, idx) => {
    if (idx % 2 === 1) {
      // This is a table — apply tex to cell contents only
      return part.replace(/<(th|td)>([\s\S]*?)<\/(th|td)>/g, (_, tag, content) => {
        const escaped = content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const math = escaped
          .replace(/\$\$([^$]+)\$\$/g, '\\[$1\\]')
          .replace(/\$([^$\n]{1,300})\$/g, '\\($1\\)');
        return `<${tag}>${math}</${tag}>`;
      });
    }
    // Non-table segment: escape then apply math
    return part
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\$\$([^$]+)\$\$/g, '\\[$1\\]')
      .replace(/\$([^$\n]{1,300})\$/g, '\\($1\\)')
      .replace(/\n{2,}/g, '<br>')
      .replace(/\n/g, ' ');
  }).join('');
  return s;
}

// Split multi-part questions — only on newline-preceded labels like "\n(a)", "\n(b)", "\n(i)"
// This avoids splitting on f(x), g(x) etc. inside the question text.
function splitParts(text) {
  if (!text) return [{ label: null, body: '' }];
  // Only match (a)/(b)/(c) or (i)/(ii)/(iii) that appear after a newline
  const re = /\n(?=\((a|b|c|d|e|f|i{1,3}|iv|v|vi{0,3})\)\s)/g;
  const parts = text.split(re).map(s => s.trim()).filter(Boolean);
  if (parts.length <= 1) return [{ label: null, body: text }];
  return parts.map(p => {
    const m = p.match(/^\(([^)]+)\)\s*([\s\S]*)$/);
    return m ? { label: m[1], body: m[2].trim() } : { label: null, body: p };
  });
}

// Dotted writing lines
function writingLines(count) {
  return Array(count).fill(
    `<div class="dot-line"></div>`
  ).join('');
}

function diffToMarks(diff) {
  if (diff === 'easy')   return 2;
  if (diff === 'hard')   return 4;
  return 3;
}

// ─── Render MCQ ─────────────────────────────────────────────────────────────
function renderMCQ(q, num) {
  const opts = (q.opts || []).map((o, i) =>
    `<div class="opt"><span class="opt-ltr">${String.fromCharCode(65+i)}.</span><span>${tex(o)}</span></div>`
  ).join('');

  return `
<div class="question avoid-break">
  <div class="q-row">
    <span class="q-num">Q${num}.</span>
    <div class="q-body">
      <div class="q-text">${tex(q.q || q.question)}</div>
      <div class="opts">${opts}</div>
    </div>
  </div>
</div>`;
}

// ─── Render Short Answer ─────────────────────────────────────────────────────
function renderSA(q, num) {
  const marks  = diffToMarks(q.difficulty);
  const source = q.source || '';
  const rawQ   = q.q || q.question || '';
  const parts  = splitParts(rawQ);

  // Separate stem (no label) from labelled sub-parts
  const stem      = parts[0].label === null ? parts[0].body : null;
  const subParts  = parts.filter(p => p.label !== null);
  const hasParts  = subParts.length > 0;

  const footer = (m) =>
    `<div class="q-footer">[${source}] <span class="mark-box">${m}</span></div>`;

  let inner = '';

  if (!hasParts) {
    const lines = marks * 6;
    const sol = SHOW_SOL
      ? `<div class="solution">${(q.solutionSteps||[]).map(s => `<div>${tex(s.workingOut||s.explanation)}</div>`).join('')}<div class="ans-line">∴ ${tex(q.a||q.answer)}</div></div>`
      : writingLines(lines);

    inner = `
      <div class="q-row">
        <span class="q-num">Q${num}.</span>
        <div class="q-body">
          <div class="q-text">${tex(rawQ)}</div>
          ${footer(marks)}
          ${sol}
        </div>
      </div>`;
  } else {
    const perPart = Math.max(1, Math.round(marks / subParts.length));

    const subHtml = subParts.map(p => {
      const lines = perPart * 6;
      const sol = SHOW_SOL
        ? `<div class="solution">${tex(q.a||q.answer)}</div>`
        : writingLines(lines);

      return `
        <div class="subpart avoid-break">
          <div class="subpart-row">
            <span class="subpart-lbl">(${p.label})</span>
            <div class="subpart-body">
              <div class="q-text">${tex(p.body)}</div>
              <div class="q-footer"><span class="mark-box">${perPart}</span></div>
              ${sol}
            </div>
          </div>
        </div>`;
    }).join('');

    // Source shown once on stem line, total marks = sum of all parts
    const totalMarks = perPart * subParts.length;
    inner = `
      <div class="q-row">
        <span class="q-num">Q${num}.</span>
        <div class="q-body">
          ${stem ? `<div class="q-text stem">${tex(stem)}</div>` : ''}
          <div class="q-footer">[${source}] <span class="mark-box">${totalMarks}</span></div>
          ${subHtml}
        </div>
      </div>`;
  }

  return `<div class="question avoid-break">${inner}</div>`;
}

// ─── MCQ Answer Sheet ────────────────────────────────────────────────────────
function renderAnswerSheet() {
  const rows = sectionI.map((q, i) => {
    const letters = (q.opts||['A','B','C','D']).map((_, j) => String.fromCharCode(65+j));
    return `<div class="bubble-row">
      <span class="bubble-num">${i+1}.</span>
      ${letters.map(l => `<span class="bubble">${l}</span>`).join('')}
    </div>`;
  }).join('');
  return `
<div class="answer-sheet avoid-break">
  <h3>Section I — Answer Sheet</h3>
  <p class="ans-note">Circle your answer for each question.</p>
  <div class="bubble-grid">${rows}</div>
</div>`;
}

// ─── Answer-only HTML (solutions booklet) ────────────────────────────────────
function buildAnswersHTML() {
  const today = new Date().toLocaleDateString('en-AU', { day:'numeric', month:'long', year:'numeric' });

  // Section I: MCQ answer table
  const mcqRows = sectionI.map((q, i) => {
    const correct = q.a || '';
    const opts = q.opts || [];
    const correctLetter = String.fromCharCode(65 + opts.findIndex(o => o === correct));
    return `<tr>
      <td class="atbl-num">Q${i+1}</td>
      <td class="atbl-ans">${correctLetter !== String.fromCharCode(64) ? correctLetter : '—'}</td>
      <td class="atbl-text">${tex(correct)}</td>
      <td class="atbl-src">${q.source||''}</td>
    </tr>`;
  }).join('');

  // Section II: full worked solutions
  let qNum = 11;
  const sIIsolHtml = sectionII.map(q => {
    const marks  = diffToMarks(q.difficulty);
    const source = q.source || '';
    const rawQ   = q.q || q.question || '';
    const parts  = splitParts(rawQ);
    const stem   = parts[0].label === null ? parts[0].body : null;
    const subParts = parts.filter(p => p.label !== null);
    const hasParts = subParts.length > 0;
    const num = qNum++;

    const stepsHtml = (steps) => {
      if (!steps || steps.length === 0) return '';
      return `<div class="sol-steps">${steps.map(s => {
        const working     = s.workingOut   ? `<div class="sol-step">${texStep(s.workingOut)}</div>`   : '';
        const explanation = s.explanation  ? `<div class="sol-expl">${tex(s.explanation)}</div>`      : '';
        return explanation + working;
      }).join('')}</div>`;
    };

    if (!hasParts) {
      return `<div class="sol-question avoid-break">
        <div class="sol-q-header">
          <span class="sol-qnum">Q${num}.</span>
          <div class="sol-q-text">${tex(rawQ)}</div>
        </div>
        ${stepsHtml(q.solutionSteps)}
        <div class="sol-answer"><span class="sol-answer-label">ANSWER:</span>${tex(q.a || q.answer || '')}</div>
      </div>`;
    } else {
      const perPart = Math.max(1, Math.round(marks / subParts.length));
      const subHtml = subParts.map(p => `
        <div class="sol-subpart avoid-break">
          <div class="sol-subpart-row">
            <span class="sol-sublbl">(${p.label})</span>
            <div class="sol-subbody">
              <div class="sol-q-text">${tex(p.body)}</div>
              ${stepsHtml(q.solutionSteps)}
              <div class="sol-answer">∴ ${tex(q.a || q.answer || '')}</div>
            </div>
          </div>
        </div>`).join('');

      return `<div class="sol-question avoid-break">
        <div class="sol-q-header">
          <span class="sol-qnum">Q${num}.</span>
          <div>
            ${stem ? `<div class="sol-q-text stem">${tex(stem)}</div>` : ''}
            ${subHtml}
          </div>
        </div>
      </div>`;
    }
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Sapere Academy — Answer &amp; Solutions Booklet</title>
<script>
window.MathJax = {
  tex: { inlineMath: [['\\\\(','\\\\)']], displayMath: [['\\\\[','\\\\]']] },
  options: { skipHtmlTags: ['script','noscript','style','textarea'] }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>
<style>
*, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
body { font-family:'Times New Roman',Times,serif; font-size:11pt; color:#000; background:white; }

.ans-cover {
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  min-height:100vh; padding:60px 80px; page-break-after:always;
  border-top: 8px solid #4B3F8A;
}
.ans-badge { background:#4B3F8A; color:white; font-size:10pt; font-weight:bold; padding:6px 18px; border-radius:4px; margin-bottom:20px; letter-spacing:1px; }
.ans-school { font-size:18pt; font-weight:bold; text-align:center; margin-bottom:6px; }
.ans-title  { font-size:24pt; font-weight:bold; text-align:center; margin-bottom:4px; }
.ans-sub    { font-size:14pt; text-align:center; margin-bottom:30px; color:#555; }
.ans-meta   { font-size:10pt; color:#666; text-align:center; }
.ans-warning { margin-top:30px; width:100%; border:1px solid #ccc; padding:10px 16px; font-size:9.5pt; color:#555; font-style:italic; text-align:center; }

.page { padding:16px 54px; }
.page-hdr { font-size:9pt; color:#444; margin-bottom:14px; }

/* Section I answer table */
.si-hdr { margin:20px 0 10px; }
.si-hdr h2 { font-size:13pt; font-weight:bold; margin-bottom:3px; }
.hdr-rule { border:none; border-top:2px solid #000; margin:7px 0; }

.atbl { width:100%; border-collapse:collapse; margin-bottom:24px; font-size:11pt; }
.atbl th { background:#4B3F8A; color:white; padding:6px 10px; text-align:left; font-size:10pt; }
.atbl td { padding:6px 10px; border-bottom:1px solid #ddd; vertical-align:top; }
.atbl-num { width:50px; font-weight:bold; }
.atbl-ans { width:40px; font-weight:bold; color:#4B3F8A; font-size:13pt; text-align:center; }
.atbl-src { font-size:9pt; color:#777; }

/* Section II solutions */
.sii-hdr { margin:20px 0 10px; page-break-before:always; }
.sii-hdr h2 { font-size:13pt; font-weight:bold; margin-bottom:3px; }

.sol-question  { margin-bottom:28px; border-bottom:1px solid #e0e0e0; padding-bottom:16px; }
.sol-q-header  { display:flex; gap:8px; align-items:flex-start; }
.sol-qnum      { font-weight:bold; font-size:11.5pt; min-width:36px; white-space:nowrap; }
.sol-q-text    { font-size:11pt; line-height:1.55; margin-bottom:6px; }
.sol-q-text.stem { margin-bottom:10px; }

.sol-footer {
  display:flex; justify-content:flex-end; align-items:center; gap:8px;
  font-size:8.5pt; color:#555; margin-bottom:6px;
}
.mark-box { border:1.5px solid #000; padding:1px 8px; font-weight:bold; font-size:10pt; }

.sol-steps { margin:6px 0; padding:8px 12px; background:#f5f3ff; border-left:3px solid #4B3F8A; }
.sol-step  { font-size:10.5pt; line-height:1.6; margin-bottom:3px; }
.sol-expl  { font-size:9.5pt; color:#666; margin-bottom:1px; }
.step-math { margin:2px 0; }

.sol-answer {
  margin-top:10px; font-weight:bold; font-size:12pt;
  color:#4B3F8A; padding:6px 14px;
  border:2px solid #4B3F8A; border-radius:4px;
  display:flex; justify-content:flex-end; align-items:center;
  gap:10px;
}
.sol-answer-label {
  font-size:10pt; font-weight:bold; color:#4B3F8A;
  letter-spacing:0.5px; white-space:nowrap;
}

.sol-subpart { margin-bottom:18px; }
.sol-subpart-row { display:flex; gap:8px; align-items:flex-start; }
.sol-sublbl  { min-width:32px; font-size:11pt; }
.sol-subbody { flex:1; }

.md-table { border-collapse:collapse; margin:8px 0 10px 0; font-size:11pt; }
.md-table th, .md-table td { border:1.5px solid #000; padding:5px 14px; text-align:center; min-width:40px; }
.md-table thead tr { background:#f0f0f0; }

.avoid-break { page-break-inside:avoid; break-inside:avoid; }

.page-footer { text-align:center; font-size:9pt; color:#555; margin-top:24px; padding-top:6px; border-top:1px solid #ccc; }

@page { margin:18mm 18mm 16mm 18mm; }
</style>
</head>
<body>

<!-- ═══ ANSWERS COVER ═══ -->
<div class="ans-cover">
  <div class="ans-badge">ANSWERS &amp; SOLUTIONS</div>
  <div class="ans-school">Sapere Academy</div>
  <div class="ans-title">Mathematics Advanced</div>
  <div class="ans-sub">Practice Examination — Answer Booklet</div>
  <div class="ans-meta">Generated: ${today} · Seed: ${SEED}</div>
  <div class="ans-warning">
    This booklet contains answers and worked solutions.<br>
    Do not distribute to students before the examination is completed.
  </div>
</div>

<!-- ═══ SECTION I ANSWERS ═══ -->
<div class="page">
  <div class="page-hdr">Sapere Academy — Mathematics Advanced Practice Paper · Answer Booklet</div>
  <div class="si-hdr">
    <h2>Section I — Multiple Choice Answers</h2>
    <hr class="hdr-rule">
  </div>
  <table class="atbl">
    <thead><tr>
      <th>Q</th><th>Answer</th><th>Full answer</th><th>Source</th>
    </tr></thead>
    <tbody>${mcqRows}</tbody>
  </table>

  <!-- ═══ SECTION II SOLUTIONS ═══ -->
  <div class="sii-hdr">
    <h2>Section II — Worked Solutions</h2>
    <hr class="hdr-rule">
  </div>
  ${sIIsolHtml}
  <div class="page-footer">— End of answer booklet —</div>
</div>

</body>
</html>`;
}

// ─── Full HTML ────────────────────────────────────────────────────────────────
function buildHTML() {
  const today = new Date().toLocaleDateString('en-AU', { day:'numeric', month:'long', year:'numeric' });
  const totalQ = 10 + sectionII.length;

  const sIhtml  = sectionI .map((q, i) => renderMCQ(q, i + 1)).join('');
  let   qNum    = 11;
  const sIIhtml = sectionII.map(q => renderSA(q, qNum++)).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Sapere Academy — Mathematics Advanced Practice Paper</title>
<script>
window.MathJax = {
  tex: { inlineMath: [['\\\\(','\\\\)']], displayMath: [['\\\\[','\\\\]']] },
  options: { skipHtmlTags: ['script','noscript','style','textarea'] }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>
<style>
*, *::before, *::after { box-sizing: border-box; margin:0; padding:0; }

body {
  font-family: 'Times New Roman', Times, serif;
  font-size: 11.5pt;
  color: #000;
  background: white;
}

/* ── Cover ── */
.cover {
  display: flex; flex-direction: column; align-items: center;
  justify-content: flex-start; min-height: 100vh;
  padding: 60px 80px; page-break-after: always;
}
.cover-school  { font-size:28pt; font-weight:bold; text-align:center; white-space:nowrap; margin-bottom:40px; margin-top:80px; }
.cover-year    { display:none; }
.cover-exam    { font-size:20pt; font-weight:bold; text-align:center; margin-bottom:28px; }
.cover-subject {
  font-size:28pt; text-align:center; width:100%;
  border-top:2px solid #000; border-bottom:2px solid #000;
  padding:14px 0; margin-bottom:36px;
}
.cover-table   { width:100%; border-collapse:collapse; }
.cover-table td { padding:3px 0; font-size:11pt; vertical-align:top; }
.cover-table .lbl { font-weight:bold; width:160px; }
.cover-table ul { margin: 4px 0 12px 18px; }
.cover-table li { margin-bottom:3px; }
.cover-fields  { margin-top:36px; width:100%; }
.field-row     { display:flex; align-items:flex-end; margin-bottom:18px; font-size:12pt; }
.field-label   { width:180px; }
.field-line    { flex:1; border-bottom:1px solid #000; }
.cover-notice  {
  margin-top:28px; width:100%;
  border:1px solid #000; padding:10px 14px;
  font-style:italic; font-size:9.5pt;
}

/* ── Exam pages ── */
.exam-page { padding: 16px 54px 16px 54px; }
.page-hdr  { font-size:9pt; color:#444; margin-bottom:14px; }

/* ── Section header ── */
.section-hdr { margin:20px 0 10px 0; }
.section-hdr h2 { font-size:13pt; font-weight:bold; margin-bottom:3px; }
.section-hdr p  { font-size:11pt; font-weight:bold; margin-bottom:2px; }
.hdr-rule { border:none; border-top:2px solid #000; margin:7px 0; }
.mc-note  { font-size:11pt; margin-bottom:6px; }

/* ── Questions ── */
.question { margin-bottom:22px; }
.mcq { margin-bottom:200px; }

/* prevent question from splitting across pages */
.avoid-break { page-break-inside: avoid; break-inside: avoid; }

.q-row { display:flex; gap:8px; align-items:flex-start; }
.q-num { font-weight:bold; font-size:11.5pt; white-space:nowrap; min-width:36px; }
.q-body { flex:1; }
.q-text { font-size:11.5pt; line-height:1.55; margin-bottom:4px; }
.q-text.stem { margin-bottom:10px; }

/* MCQ options */
.opts { margin: 8px 0 0 0; }
.opt  { display:flex; gap:7px; margin-bottom:8px; font-size:11.5pt; align-items:baseline; }
.opt-ltr { min-width:22px; }

/* Sub-parts */
.subpart { margin-bottom:18px; }
.subpart-row { display:flex; gap:8px; align-items:flex-start; }
.subpart-lbl { min-width:32px; font-size:11.5pt; font-weight:normal; }
.subpart-body { flex:1; }

/* Question footer: source + mark box — right-aligned below question text */
.q-footer {
  display:flex; justify-content:flex-end; align-items:center; gap:8px;
  font-size:8.5pt; color:#555; margin-bottom:4px;
}
.mark-box {
  border:1.5px solid #000; padding:1px 8px;
  font-weight:bold; font-size:10pt; color:#000;
}

/* Markdown → HTML tables in question body */
.md-table {
  border-collapse: collapse;
  margin: 4px auto 4px auto;
  font-size: 11pt;
}
.md-table th, .md-table td {
  border: 1.5px solid #000;
  padding: 5px 14px;
  text-align: center;
  min-width: 40px;
}
.md-table thead tr { background: #f0f0f0; }

/* Dotted writing lines */
.dot-line {
  border-bottom: 1px dotted #888;
  height: 22px;
  margin: 0 0 0 0;
  width: 100%;
}

/* Solution */
.solution {
  background:#f8f8f8; border-left:3px solid #888;
  padding:8px 12px; margin-top:6px; font-size:10pt;
}
.ans-line { font-weight:bold; margin-top:4px; }

/* Answer sheet */
.answer-sheet { margin-top:28px; page-break-before:always; }
.answer-sheet h3 { font-size:12pt; font-weight:bold; margin-bottom:8px; }
.ans-note { font-size:10pt; margin-bottom:10px; color:#444; }
.bubble-grid { display:flex; flex-wrap:wrap; gap:10px 24px; }
.bubble-row { display:flex; align-items:center; gap:8px; font-size:11pt; }
.bubble-num { width:24px; font-weight:bold; }
.bubble {
  width:24px; height:24px; border-radius:50%;
  border:1.5px solid #000;
  display:inline-flex; align-items:center; justify-content:center;
  font-size:9.5pt;
}

/* Section II starts on new page */
.section-ii-page { page-break-before: always; }
/* First question in section II must NOT push itself to yet another page */
.section-ii-page .question:first-of-type { page-break-before: avoid; break-before: avoid; }

.page-footer {
  text-align:center; font-size:9pt; color:#555;
  margin-top:24px; padding-top:6px;
  border-top:1px solid #ccc;
}

@page { margin: 18mm 18mm 16mm 18mm; }
</style>
</head>
<body>

<!-- ═══ COVER ═══ -->
<div class="cover">
  <div class="cover-school">Sapere Aude Academia</div>
  <div class="cover-exam">Practice Paper</div>
  <div class="cover-subject">Mathematics Advanced</div>

  <table class="cover-table">
    <tr>
      <td class="lbl">General<br>Instructions</td>
      <td><ul>
        <li>Reading time — 5 minutes</li>
        <li>Working time — 3 hours</li>
        <li>Write using black pen</li>
        <li>Calculators approved by NESA may be used</li>
        <li>A reference sheet is provided for this paper</li>
        <li>All diagrams are not drawn to scale</li>
        <li>For questions in Section II, show all relevant working</li>
      </ul></td>
    </tr>
    <tr>
      <td class="lbl">Total marks:<br><strong>100</strong></td>
      <td>
        <p><strong>Section I — 10 marks</strong></p>
        <ul>
          <li>Attempt Questions 1 – 10</li>
          <li>Allow about 15 minutes for this section</li>
        </ul>
        <p><strong>Section II — 90 marks</strong></p>
        <ul>
          <li>Attempt Questions 11 – ${totalQ}</li>
          <li>Allow about 2 hours 45 minutes for this section</li>
        </ul>
      </td>
    </tr>
  </table>

  <div class="cover-fields">
    <div class="field-row"><span class="field-label">Student Name:</span><span class="field-line"></span></div>
    <div class="field-row"><span class="field-label">Teacher Name:</span><span class="field-line"></span></div>
  </div>

  <div class="cover-notice">
    Questions drawn from NSW HSC Trial examinations (2020) and randomised for practice.
    Generated: ${today} · Seed: ${SEED}
  </div>
</div>

<!-- ═══ SECTION I ═══ -->
<div class="exam-page">
  <div class="page-hdr">Sapere Aude Academia — Mathematics Advanced Practice Paper</div>

  <div class="section-hdr">
    <h2>Section I</h2>
    <p>10 marks &nbsp;·&nbsp; Attempt Questions 1 – 10 &nbsp;·&nbsp; Allow about 15 minutes</p>
    <hr class="hdr-rule">
    <p class="mc-note">Use the multiple choice answer sheet for Questions 1 – 10.</p>
    <hr class="hdr-rule">
  </div>

  ${sIhtml}
  ${renderAnswerSheet()}
</div>

<!-- ═══ SECTION II ═══ -->
<div class="exam-page section-ii-page">
  <div class="page-hdr">Sapere Academy — Mathematics Advanced Practice Paper</div>

  <div class="section-hdr">
    <h2>Section II</h2>
    <p>90 marks &nbsp;·&nbsp; Attempt Questions 11 – ${totalQ} &nbsp;·&nbsp; Allow about 2 hours 45 minutes</p>
    <hr class="hdr-rule">
    <p class="mc-note">Show all relevant mathematical reasoning and/or calculations.</p>
    <hr class="hdr-rule">
  </div>

  ${sIIhtml}

  <div class="page-footer">— End of paper —</div>
</div>

</body>
</html>`;
}

// ─── Generate ─────────────────────────────────────────────────────────────────
async function renderPDF(browser, html, outPath) {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.evaluate(() => new Promise(resolve => {
    if (window.MathJax?.startup) {
      window.MathJax.startup.promise.then(() =>
        window.MathJax.typesetPromise().then(resolve)
      );
    } else {
      setTimeout(resolve, 4000);
    }
  }));
  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '18mm', bottom: '18mm', left: '18mm', right: '18mm' },
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `<div style="font-size:9pt;color:#666;width:100%;text-align:center;padding-bottom:2px;">— <span class="pageNumber"></span> —</div>`,
  });
  await page.close();
}

async function generate() {
  const answerOut = OUT.replace(/\.pdf$/i, '_answers.pdf');

  console.log(`\n📄 Sapere Academy — Past Paper Generator`);
  console.log(`   Seed: ${SEED}`);
  console.log(`   Section I:  ${sectionI.length} MCQ`);
  console.log(`   Section II: ${sectionII.length} short-answer`);
  console.log(`   Question paper → ${OUT}`);
  console.log(`   Answer booklet → ${answerOut}\n`);

  const questionHtml = buildHTML();
  const answersHtml  = buildAnswersHTML();

  writeFileSync(OUT.replace('.pdf', '.html'), questionHtml);
  writeFileSync(answerOut.replace('.pdf', '.html'), answersHtml);

  const browser = await puppeteer.launch({ headless: true });

  console.log(`   Rendering question paper...`);
  await renderPDF(browser, questionHtml, OUT);
  console.log(`   ✅ ${OUT}`);

  console.log(`   Rendering answer booklet...`);
  await renderPDF(browser, answersHtml, answerOut);
  console.log(`   ✅ ${answerOut}`);

  await browser.close();
  console.log(`\n✅ Done! Both files saved.\n`);
}

generate().catch(e => { console.error(e); process.exit(1); });
