/**
 * GET /api/generate-past-paper?seed=<n>&level=advanced
 *
 * Returns an HTML page that:
 *  1. Renders a randomised past-paper using MathJax
 *  2. Auto-triggers window.print() so the student can save as PDF
 *
 * Query params:
 *   seed    — integer seed for reproducible papers (optional, defaults to Date.now())
 *   mode    — "paper" (default) | "answers"
 */

import { ALL_PAST_PAPER_QUESTIONS } from '../src/constants/allPastPaperQuestions.js';
// ─── Seeded RNG ──────────────────────────────────────────────────────────────
function makeRng(seed) {
  let s = (seed >>> 0) || 1;
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

// ─── Question pool ───────────────────────────────────────────────────────────
const ALL_QUESTIONS = ALL_PAST_PAPER_QUESTIONS;








// ─── Helpers ─────────────────────────────────────────────────────────────────
function convertMarkdownTable(text) {
  const lines = text.split('\n');
  const result = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (/^\s*\|.+\|\s*$/.test(line)) {
      const tableLines = [];
      while (i < lines.length && /^\s*\|.+\|\s*$/.test(lines[i])) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.filter(l => !/^\s*\|[\s\-:|]+\|\s*$/.test(l));
      if (rows.length === 0) continue;
      const parseRow = (row) =>
        row.split('|').map(c => c.trim()).filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
      const headerCells = parseRow(rows[0]);
      const bodyRows = rows.slice(1);
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

function tex(text) {
  if (!text) return '';
  let s = String(text);
  s = convertMarkdownTable(s);
  const parts = s.split(/(<table[\s\S]*?<\/table>)/g);
  s = parts.map((part, idx) => {
    if (idx % 2 === 1) {
      return part.replace(/<(th|td)>([\s\S]*?)<\/(th|td)>/g, (_, tag, content) => {
        const e = content.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        const m = e.replace(/\$\$([^$]+)\$\$/g,'\\[$1\\]').replace(/\$([^$\n]{1,300})\$/g,'\\($1\\)');
        return `<${tag}>${m}</${tag}>`;
      });
    }
    return part
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/\$\$([^$]+)\$\$/g,'\\[$1\\]')
      .replace(/\$([^$\n]{1,300})\$/g,'\\($1\\)')
      .replace(/\n{2,}/g,'<br>')
      .replace(/\n/g,' ');
  }).join('');
  return s;
}

function texStep(text) {
  if (!text) return '';
  const s = String(text).trim();
  if (s.includes('$') || s.includes('\\(') || s.includes('\\[')) return tex(s);
  if (/[\\^_{}]/.test(s) && !/^[A-Za-z0-9\s.,;:()\-+=%'"!?]+$/.test(s)) {
    return `<div class="step-math">\\[${s}\\]</div>`;
  }
  return tex(s);
}

function splitParts(text) {
  if (!text) return [{ label: null, body: '' }];
  const re = /\n(?=\((a|b|c|d|e|f|i{1,3}|iv|v|vi{0,3})\)\s)/g;
  const parts = text.split(re).map(s => s.trim()).filter(Boolean);
  if (parts.length <= 1) return [{ label: null, body: text }];
  return parts.map(p => {
    const m = p.match(/^\(([^)]+)\)\s*([\s\S]*)$/);
    return m ? { label: m[1], body: m[2].trim() } : { label: null, body: p };
  });
}

function diffToMarks(diff) {
  if (diff === 'easy') return 2;
  if (diff === 'hard') return 4;
  return 3;
}

function writingLines(count) {
  return Array(count).fill('<div class="dot-line"></div>').join('');
}

// ─── Render functions ─────────────────────────────────────────────────────────
function renderMCQ(q, num) {
  const opts = (q.opts || []).map((o, i) =>
    `<div class="opt"><span class="opt-ltr">${String.fromCharCode(65+i)}.</span><span>${tex(o)}</span></div>`
  ).join('');
  return `
<div class="question mcq avoid-break">
  <div class="q-row">
    <span class="q-num">Q${num}.</span>
    <div class="q-body">
      <div class="q-text">${tex(q.q || q.question)}</div>
      <div class="opts">${opts}</div>
    </div>
  </div>
</div>`;
}

function renderSA(q, num) {
  const marks  = diffToMarks(q.difficulty);
  const source = q.source || '';
  const rawQ   = q.q || q.question || '';
  const parts  = splitParts(rawQ);
  const stem   = parts[0].label === null ? parts[0].body : null;
  const subParts = parts.filter(p => p.label !== null);
  const hasParts = subParts.length > 0;

  const footer = (m, src) => src
    ? `<div class="q-footer">[${src}] <span class="mark-box">${m}</span></div>`
    : `<div class="q-footer"><span class="mark-box">${m}</span></div>`;

  if (!hasParts) {
    return `<div class="question sa avoid-break">
      <div class="q-row">
        <span class="q-num">Q${num}.</span>
        <div class="q-body">
          <div class="q-text">${tex(rawQ)}</div>
          ${footer(marks, source)}
          ${writingLines(marks * 6)}
        </div>
      </div>
    </div>`;
  }

  const perPart = Math.max(1, Math.round(marks / subParts.length));
  const subHtml = subParts.map(p => `
    <div class="subpart avoid-break">
      <div class="subpart-row">
        <span class="subpart-lbl">(${p.label})</span>
        <div class="subpart-body">
          <div class="q-text">${tex(p.body)}</div>
          ${footer(perPart, '')}
          ${writingLines(perPart * 6)}
        </div>
      </div>
    </div>`).join('');

  return `<div class="question sa avoid-break">
    <div class="q-row">
      <span class="q-num">Q${num}.</span>
      <div class="q-body">
        ${stem ? `<div class="q-text stem">${tex(stem)}</div>` : ''}
        ${footer(perPart * subParts.length, source)}
        ${subHtml}
      </div>
    </div>
  </div>`;
}

function renderAnswersMCQ(sectionI) {
  const rows = sectionI.map((q, i) => {
    const opts = q.opts || [];
    const correctIdx = opts.findIndex(o => o === q.a);
    const correctLetter = correctIdx >= 0 ? String.fromCharCode(65 + correctIdx) : '—';
    return `<tr>
      <td class="atbl-num">Q${i+1}</td>
      <td class="atbl-ans">${correctLetter}</td>
      <td class="atbl-text">${tex(q.a || '')}</td>
      <td class="atbl-src">${q.source || ''}</td>
    </tr>`;
  }).join('');
  return `<table class="atbl">
    <thead><tr><th>Q</th><th>Answer</th><th>Full answer</th><th>Source</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function renderAnswersSA(q, num) {
  const marks  = diffToMarks(q.difficulty);
  const rawQ   = q.q || q.question || '';
  const parts  = splitParts(rawQ);
  const stem   = parts[0].label === null ? parts[0].body : null;
  const subParts = parts.filter(p => p.label !== null);
  const hasParts = subParts.length > 0;

  const stepsHtml = (steps) => {
    if (!steps || steps.length === 0) return '';
    return `<div class="sol-steps">${steps.map(s => {
      const e = s.explanation ? `<div class="sol-expl">${tex(s.explanation)}</div>` : '';
      const w = s.workingOut  ? `<div class="sol-step">${texStep(s.workingOut)}</div>` : '';
      return e + w;
    }).join('')}</div>`;
  };

  const answerBox = (a) =>
    `<div class="sol-answer"><span class="sol-answer-label">ANSWER:</span>${tex(a || '')}</div>`;

  if (!hasParts) {
    return `<div class="sol-question">
      <div class="sol-q-header">
        <span class="sol-qnum">Q${num}.</span>
        <div class="sol-q-text">${tex(rawQ)}</div>
      </div>
      ${stepsHtml(q.solutionSteps)}
      ${answerBox(q.a || q.answer)}
    </div>`;
  }

  // Split the combined answer string into per-part answers
  const fullAnswer = q.a || q.answer || '';
  const answerParts = splitParts(fullAnswer);
  const answerMap = {};
  answerParts.forEach(p => { if (p.label) answerMap[p.label] = p.body; });

  const perPart = Math.max(1, Math.round(marks / subParts.length));
  const subHtml = subParts.map(p => {
    const partAnswer = answerMap[p.label] || fullAnswer;
    return `
    <div class="sol-subpart">
      <div class="sol-subpart-row">
        <span class="sol-sublbl">(${p.label})</span>
        <div class="sol-subbody">
          <div class="sol-q-text">${tex(p.body)}</div>
          ${stepsHtml(q.solutionSteps)}
          ${answerBox(partAnswer)}
        </div>
      </div>
    </div>`;
  }).join('');

  return `<div class="sol-question">
    <div class="sol-q-header">
      <span class="sol-qnum">Q${num}.</span>
      <div>${stem ? `<div class="sol-q-text stem">${tex(stem)}</div>` : ''}${subHtml}</div>
    </div>
  </div>`;
}

// ─── CSS (shared between paper + answers) ────────────────────────────────────
const BASE_CSS = `
*, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
body { font-family:'Times New Roman',Times,serif; font-size:11.5pt; color:#000; background:white; }

.exam-page { padding:16px 32px; }
.page-hdr  { font-size:9pt; color:#444; margin-bottom:14px; }
.section-hdr { margin:20px 0 10px; }
.section-hdr h2 { font-size:13pt; font-weight:bold; margin-bottom:3px; }
.section-hdr p  { font-size:11pt; font-weight:bold; margin-bottom:2px; }
.hdr-rule { border:none; border-top:2px solid #000; margin:7px 0; }
.mc-note  { font-size:11pt; margin-bottom:6px; }

.question { margin-bottom:22px; }
.mcq { margin-bottom:200px; }
.avoid-break { page-break-inside:avoid; break-inside:avoid; }

.q-row { display:flex; gap:8px; align-items:flex-start; }
.q-num { font-weight:bold; font-size:11.5pt; white-space:nowrap; min-width:36px; }
.q-body { flex:1; }
.q-text { font-size:11.5pt; line-height:1.55; margin-bottom:4px; }
.q-text.stem { margin-bottom:10px; }

.opts { margin:8px 0 0 0; }
.opt  { display:flex; gap:7px; margin-bottom:8px; font-size:11.5pt; align-items:baseline; }
.opt-ltr { min-width:22px; }

.subpart { margin-bottom:18px; }
.subpart-row { display:flex; gap:8px; align-items:flex-start; }
.subpart-lbl { min-width:32px; font-size:11.5pt; }
.subpart-body { flex:1; }

.q-footer { display:flex; justify-content:flex-end; align-items:center; gap:8px; font-size:8.5pt; color:#555; margin-bottom:4px; }
.mark-box { border:1.5px solid #000; padding:1px 8px; font-weight:bold; font-size:10pt; }

.dot-line { border-bottom:1px dotted #888; height:22px; width:100%; }

.md-table { border-collapse:collapse; margin:4px auto; font-size:11pt; }
.md-table th, .md-table td { border:1.5px solid #000; padding:5px 14px; text-align:center; min-width:40px; }
.md-table thead tr { background:#f0f0f0; }

.answer-sheet { margin-top:28px; page-break-before:always; }
.answer-sheet h3 { font-size:12pt; font-weight:bold; margin-bottom:8px; }
.ans-note { font-size:10pt; margin-bottom:10px; color:#444; }
.bubble-grid { display:flex; flex-wrap:wrap; gap:10px 24px; }
.bubble-row { display:flex; align-items:center; gap:8px; font-size:11pt; }
.bubble-num { width:24px; font-weight:bold; }
.bubble { width:24px; height:24px; border-radius:50%; border:1.5px solid #000; display:inline-flex; align-items:center; justify-content:center; font-size:9.5pt; }

.section-ii-page { page-break-before:always; }
.section-ii-page .question:first-of-type { page-break-before:avoid; break-before:avoid; }
.page-footer { text-align:center; font-size:9pt; color:#555; margin-top:24px; padding-top:6px; border-top:1px solid #ccc; }

/* Answer booklet */
.sol-question { margin-bottom:28px; border-bottom:1px solid #e0e0e0; padding-bottom:16px; }
.sol-q-header { display:flex; gap:8px; align-items:flex-start; }
.sol-qnum { font-weight:bold; font-size:11.5pt; min-width:36px; white-space:nowrap; }
.sol-q-text { font-size:11pt; line-height:1.55; margin-bottom:6px; }
.sol-q-text.stem { margin-bottom:10px; }
.sol-steps { margin:6px 0; padding:8px 12px; background:#f5f3ff; border-left:3px solid #4B3F8A; }
.sol-step  { font-size:10.5pt; line-height:1.6; margin-bottom:3px; }
.sol-expl  { font-size:9.5pt; color:#666; margin-bottom:1px; }
.step-math { margin:2px 0; }
.sol-answer { margin-top:10px; font-weight:bold; font-size:12pt; color:#4B3F8A; padding:6px 14px; border:2px solid #4B3F8A; border-radius:4px; display:flex; justify-content:flex-end; align-items:center; gap:10px; }
.sol-answer-label { font-size:10pt; font-weight:bold; color:#4B3F8A; letter-spacing:0.5px; white-space:nowrap; }
.sol-subpart { margin-bottom:18px; }
.sol-subpart-row { display:flex; gap:8px; align-items:flex-start; }
.sol-sublbl { min-width:32px; font-size:11pt; }
.sol-subbody { flex:1; }
.atbl { width:100%; border-collapse:collapse; margin-bottom:24px; font-size:11pt; }
.atbl th { background:#4B3F8A; color:white; padding:6px 10px; text-align:left; font-size:10pt; }
.atbl td { padding:6px 10px; border-bottom:1px solid #ddd; vertical-align:top; }
.atbl-num { width:50px; font-weight:bold; }
.atbl-ans { width:40px; font-weight:bold; color:#4B3F8A; font-size:13pt; text-align:center; }
.atbl-src { font-size:9pt; color:#777; }

@page { margin:18mm 18mm 16mm 18mm; }
@media print {
  .no-print { display:none !important; }
}
`;

// ─── Build paper HTML ─────────────────────────────────────────────────────────
function buildPaperHTML(sectionI, sectionII, seed, mode) {
  const today = new Date().toLocaleDateString('en-AU', { day:'numeric', month:'long', year:'numeric' });
  const totalQ = 10 + sectionII.length;
  const isAnswers = mode === 'answers';

  const mathjaxScript = `
<script>
window.MathJax = {
  tex: { inlineMath: [['\\\\(','\\\\)']], displayMath: [['\\\\[','\\\\]']] },
  options: { skipHtmlTags: ['script','noscript','style','textarea'] }
};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>`;

  const printScript = `
<script>
window.addEventListener('load', () => {
  const tryPrint = () => {
    if (window.MathJax && window.MathJax.startup) {
      window.MathJax.startup.promise.then(() =>
        window.MathJax.typesetPromise().then(() => {
          setTimeout(() => window.print(), 800);
        })
      );
    } else {
      setTimeout(() => window.print(), 3000);
    }
  };
  setTimeout(tryPrint, 500);
});
</script>`;

  // Fixed close button so students can leave the paper view — in the PWA the
  // paper opens with no browser chrome, leaving no way back to the app.
  // window.close() works for window.open'd tabs; where the browser refuses
  // (e.g. standalone PWA windows) fall back to navigating to the app.
  const closeButton = `
<style>
.paper-close-btn {
  position: fixed; top: 14px; right: 14px; z-index: 9999;
  display: flex; align-items: center; gap: 6px;
  background: #4B3F8A; color: #fff; border: none; border-radius: 999px;
  padding: 10px 18px; font-size: 14px; font-weight: 700; cursor: pointer;
  box-shadow: 0 4px 14px rgba(0,0,0,0.25);
}
@media print { .paper-close-btn { display: none; } }
</style>
<button class="paper-close-btn" onclick="window.close(); setTimeout(() => { window.location.href = '/'; }, 300);">✕ Close</button>`;

  if (isAnswers) {
    let qNum = 11;
    const sIIsolHtml = sectionII.map(q => renderAnswersSA(q, qNum++)).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Sapere Aude Academia — Answer Booklet</title>
${mathjaxScript}
<style>${BASE_CSS}
.ans-cover { display:flex; flex-direction:column; align-items:center; justify-content:flex-start; min-height:100vh; padding:60px 80px; page-break-after:always; border-top:8px solid #4B3F8A; }
.ans-badge { background:#4B3F8A; color:white; font-size:10pt; font-weight:bold; padding:6px 18px; border-radius:4px; margin-bottom:20px; margin-top:80px; letter-spacing:1px; }
.ans-school { font-size:28pt; font-weight:bold; text-align:center; white-space:nowrap; margin-bottom:40px; }
.ans-title  { font-size:20pt; font-weight:bold; text-align:center; margin-bottom:4px; }
.ans-sub    { font-size:14pt; text-align:center; margin-bottom:30px; color:#555; }
.ans-meta   { font-size:10pt; color:#666; text-align:center; }
.ans-warning { margin-top:30px; width:100%; border:1px solid #ccc; padding:10px 16px; font-size:9.5pt; color:#555; font-style:italic; text-align:center; }
</style>
${printScript}
</head>
<body>
${closeButton}
<div class="ans-cover">
  <div class="ans-badge">ANSWERS &amp; SOLUTIONS</div>
  <div class="ans-school">Sapere Aude Academia</div>
  <div class="ans-title">Mathematics Advanced</div>
  <div class="ans-sub">Practice Paper — Answer Booklet</div>
  <div class="ans-meta">Generated: ${today}</div>
  <div class="ans-warning">Do not distribute to students before the examination is completed.</div>
</div>

<div class="exam-page">
  <div class="page-hdr">Sapere Aude Academia — Mathematics Advanced Practice Paper · Answer Booklet</div>
  <div class="section-hdr">
    <h2>Section I — Multiple Choice Answers</h2>
    <hr class="hdr-rule">
  </div>
  ${renderAnswersMCQ(sectionI)}

  <div class="section-hdr" style="page-break-before:always;">
    <h2>Section II — Worked Solutions</h2>
    <hr class="hdr-rule">
  </div>
  ${sIIsolHtml}
  <div class="page-footer">— End of answer booklet —</div>
</div>
</body>
</html>`;
  }

  // ── Question paper ──
  const sIhtml  = sectionI.map((q, i) => renderMCQ(q, i + 1)).join('');
  let   qNum2   = 11;
  const sIIhtml = sectionII.map(q => renderSA(q, qNum2++)).join('');

  const bubbleRows = sectionI.map((q, i) => {
    const letters = (q.opts || ['A','B','C','D']).map((_, j) => String.fromCharCode(65+j));
    return `<div class="bubble-row">
      <span class="bubble-num">${i+1}.</span>
      ${letters.map(l => `<span class="bubble">${l}</span>`).join('')}
    </div>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Sapere Aude Academia — Mathematics Advanced Practice Paper</title>
${mathjaxScript}
<style>${BASE_CSS}
.cover { display:flex; flex-direction:column; align-items:center; justify-content:flex-start; min-height:100vh; padding:60px 80px; page-break-after:always; }
.cover-school { font-size:28pt; font-weight:bold; text-align:center; white-space:nowrap; margin-bottom:40px; margin-top:80px; }
.cover-exam   { font-size:20pt; font-weight:bold; text-align:center; margin-bottom:28px; }
.cover-subject { font-size:28pt; text-align:center; width:100%; border-top:2px solid #000; border-bottom:2px solid #000; padding:14px 0; margin-bottom:36px; }
.cover-table   { width:100%; border-collapse:collapse; }
.cover-table td { padding:3px 0; font-size:11pt; vertical-align:top; }
.cover-table .lbl { font-weight:bold; width:160px; }
.cover-table ul { margin:4px 0 12px 18px; }
.cover-table li { margin-bottom:3px; }
.field-row { display:flex; align-items:flex-end; margin-bottom:18px; font-size:12pt; }
.field-label { width:180px; }
.field-line { flex:1; border-bottom:1px solid #000; }
.cover-notice { margin-top:28px; width:100%; border:1px solid #000; padding:10px 14px; font-style:italic; font-size:9.5pt; }
</style>
${printScript}
</head>
<body>
${closeButton}
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
        <ul><li>Attempt Questions 1 – 10</li><li>Allow about 15 minutes for this section</li></ul>
        <p><strong>Section II — 90 marks</strong></p>
        <ul><li>Attempt Questions 11 – ${totalQ}</li><li>Allow about 2 hours 45 minutes for this section</li></ul>
      </td>
    </tr>
  </table>
  <div style="margin-top:36px; width:100%;">
    <div class="field-row"><span class="field-label">Student Name:</span><span class="field-line"></span></div>
    <div class="field-row"><span class="field-label">Teacher Name:</span><span class="field-line"></span></div>
  </div>
  <div class="cover-notice">
    Questions drawn from NSW HSC Trial examinations and randomised for practice.
  </div>
</div>

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
  <div class="answer-sheet avoid-break">
    <h3>Section I — Answer Sheet</h3>
    <p class="ans-note">Circle your answer for each question.</p>
    <div class="bubble-grid">${bubbleRows}</div>
  </div>
</div>

<div class="exam-page section-ii-page">
  <div class="page-hdr">Sapere Aude Academia — Mathematics Advanced Practice Paper</div>
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

// ─── API handler ──────────────────────────────────────────────────────────────
export default function handler(req, res) {
  const seed = parseInt(req.query.seed) || Date.now();
  const mode = req.query.mode === 'answers' ? 'answers' : 'paper';

  const rng = makeRng(seed);

  // Deduplicate
  const seen = new Set();
  const unique = ALL_QUESTIONS.filter(q => {
    const key = (q.q || q.question || '').slice(0, 80);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const mcqPool = shuffle(unique.filter(q => q.type === 'multiple_choice'), rng);
  const saPool  = shuffle(unique.filter(q => q.type === 'short_answer'), rng);

  const sectionI  = mcqPool.slice(0, 10);
  const sectionII = saPool.slice(0, 30);

  const html = buildPaperHTML(sectionI, sectionII, seed, mode);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).send(html);
}
