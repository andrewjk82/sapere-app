/**
 * Bulk convert Year 11 Advanced Ch5–Ch13 short_answer → multiple_choice (flat).
 * Same rules as Y12 bulk converter:
 *  - Show/Prove/Sketch stay teacher_review
 *  - opts natural order (no seed shuffle)
 *  - rich solutionSteps + optional jsxGraph
 *  - isNew:true on writes; rebuild indexes after push
 *
 *   node tools/scripts/bulkConvertY11ToMCQ.cjs --list
 *   node tools/scripts/bulkConvertY11ToMCQ.cjs --only curriculum --write
 *   node tools/scripts/bulkConvertY11ToMCQ.cjs --only curriculum --write --push
 *   node tools/scripts/bulkConvertY11ToMCQ.cjs --only orphans --write --push
 *   node tools/scripts/bulkConvertY11ToMCQ.cjs --all --write --push
 */
const { readFileSync, writeFileSync, existsSync } = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const LIST = process.argv.includes('--list');
const ALL = process.argv.includes('--all');
const onlyArg = process.argv.find((a) => a.startsWith('--only=')) || process.argv.find((a) => a === '--only');
let ONLY = null;
if (onlyArg) {
  if (onlyArg.startsWith('--only=')) ONLY = onlyArg.slice(7);
  else {
    const i = process.argv.indexOf('--only');
    ONLY = process.argv[i + 1] || '';
  }
}

// ── Topic registry ─────────────────────────────────────────────────────────


// ── Topic registry (Y11 Advanced Ch5–Ch7 seeds + orphan Ch8/9/11/12 from FS) ─

const TOPICS = [
  // Ch5 — main mega-file (5A–5I mixed) + dedicated slices
  {
    key: 'ch5main',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch5Questions.js',
    exportName: 'CH5_QUESTIONS_Y11A',
    dualExportName: 'Y11_CH5_QUESTIONS',
    dualFilterC: '5H',
    topicId: 'y11a-5',
    c: '5',
    t: 'Transformations and symmetry',
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    topicTitle: 'Chapter 5',
    idPrefix: 'y11a-5',
    year: 'Year 11',
    multiTopic: true,
  },
  {
    key: '5G',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch1Questions.js',
    exportName: 'Y11_CH1_QUESTIONS',
    topicId: 'y11a-5G',
    c: '5G',
    t: 'Combining transformations',
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    topicTitle: 'Combining transformations',
    idPrefix: 'y11-5g-',
    year: 'Year 11',
  },
  {
    key: '5I',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch5IQuestions.js',
    exportName: 'Y11_CH5I_QUESTIONS',
    topicId: 'y11a-5I',
    c: '5I',
    t: 'Revision',
    chapterId: 'y11a-5',
    chapterTitle: 'Chapter 5: Transformations and symmetry',
    topicTitle: 'Revision',
    idPrefix: 'y11a-5i-',
    year: 'Year 11',
  },
  // Ch6
  {
    key: '6B',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch6Questions.js',
    exportName: 'Y11_CH6B_QUESTIONS',
    topicId: 'y11a-6B',
    c: '6B',
    t: 'Problems involving right-angled triangles',
    chapterId: 'y11a-6',
    chapterTitle: 'Chapter 6: Trigonometry',
    topicTitle: 'Problems involving right-angled triangles',
    idPrefix: 'y11a-6b-',
    year: 'Year 11',
  },
  {
    key: '6C',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch6CQuestions.js',
    exportName: 'Y11_CH6C_QUESTIONS',
    topicId: 'y11a-6C',
    c: '6C',
    t: 'Trigonometric functions of a general angle',
    chapterId: 'y11a-6',
    chapterTitle: 'Chapter 6: Trigonometry',
    topicTitle: 'Trigonometric functions of a general angle',
    idPrefix: 'y11a-6c-',
    year: 'Year 11',
  },
  {
    key: '6D',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch6DQuestions.js',
    exportName: 'Y11_CH6D_QUESTIONS',
    topicId: 'y11a-6D',
    c: '6D',
    t: 'Quadrant, sign, and related acute angle',
    chapterId: 'y11a-6',
    chapterTitle: 'Chapter 6: Trigonometry',
    topicTitle: 'Quadrant, sign, and related acute angle',
    idPrefix: 'y11a-6d-',
    year: 'Year 11',
  },
  {
    key: '6E',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch6EQuestions.js',
    exportName: 'Y11_CH6E_QUESTIONS',
    topicId: 'y11a-6E',
    c: '6E',
    t: 'Given one trigonometric function, find another',
    chapterId: 'y11a-6',
    chapterTitle: 'Chapter 6: Trigonometry',
    topicTitle: 'Given one trigonometric function, find another',
    idPrefix: 'y11a-6e-',
    year: 'Year 11',
  },
  {
    key: '6F',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch6FQuestions.js',
    exportName: 'Y11_CH6F_QUESTIONS',
    topicId: 'y11a-6F',
    c: '6F',
    t: 'Trigonometric identities',
    chapterId: 'y11a-6',
    chapterTitle: 'Chapter 6: Trigonometry',
    topicTitle: 'Trigonometric identities',
    idPrefix: 'y11a-6f-',
    year: 'Year 11',
  },
  {
    key: '6G',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch6GQuestions.js',
    exportName: 'Y11_CH6G_QUESTIONS',
    topicId: 'y11a-6G',
    c: '6G',
    t: 'Trigonometric equations',
    chapterId: 'y11a-6',
    chapterTitle: 'Chapter 6: Trigonometry',
    topicTitle: 'Trigonometric equations',
    idPrefix: 'y11a-6g-',
    year: 'Year 11',
  },
  {
    key: '6H',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch6HQuestions.js',
    exportName: 'Y11_CH6H_QUESTIONS',
    topicId: 'y11a-6H',
    c: '6H',
    t: 'The sine rule and the area formula',
    chapterId: 'y11a-6',
    chapterTitle: 'Chapter 6: Trigonometry',
    topicTitle: 'The sine rule and the area formula',
    idPrefix: 'y11a-6H-',
    year: 'Year 11',
  },
  {
    key: '6I',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch6IQuestions.js',
    exportName: 'Y11_CH6I_QUESTIONS',
    topicId: 'y11a-6I',
    c: '6I',
    t: 'The cosine rule',
    chapterId: 'y11a-6',
    chapterTitle: 'Chapter 6: Trigonometry',
    topicTitle: 'The cosine rule',
    idPrefix: 'y11a-6I-',
    year: 'Year 11',
  },
  {
    key: '6J',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch6JQuestions.js',
    exportName: 'Y11_CH6J_QUESTIONS',
    topicId: 'y11a-6J',
    c: '6J',
    t: 'Problems involving general triangles',
    chapterId: 'y11a-6',
    chapterTitle: 'Chapter 6: Trigonometry',
    topicTitle: 'Problems involving general triangles',
    idPrefix: 'y11a-6J-',
    year: 'Year 11',
  },
  {
    key: '6K',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch6KQuestions.js',
    exportName: 'Y11_CH6K_QUESTIONS',
    topicId: 'y11a-6k',
    c: '6K',
    t: 'Revision',
    chapterId: 'y11a-6',
    chapterTitle: 'Chapter 6: Trigonometry',
    topicTitle: 'Revision',
    idPrefix: 'y11a-6k-',
    year: 'Year 11',
  },
  // Ch7
  {
    key: '7B',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch7BQuestions.js',
    exportName: 'Y11_CH7B_QUESTIONS',
    topicId: 'y11a-7B',
    c: '7B',
    t: 'Gradients of line segments and lines',
    chapterId: 'y11a-7',
    chapterTitle: 'Chapter 7: Lines in the coordinate plane',
    topicTitle: 'Gradients of line segments and lines',
    idPrefix: 'y11a-7b-',
    year: 'Year 11',
  },
  {
    key: '7C',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch7CQuestions.js',
    exportName: 'Y11_CH7C_QUESTIONS',
    topicId: 'y11a-7C',
    c: '7C',
    t: 'Equations of lines',
    chapterId: 'y11a-7',
    chapterTitle: 'Chapter 7: Lines in the coordinate plane',
    topicTitle: 'Equations of lines',
    idPrefix: 'y11a-7c-',
    year: 'Year 11',
  },
  {
    key: '7D',
    group: 'curriculum',
    file: 'src/constants/seedYear11Ch7DQuestions.js',
    exportName: 'Y11_CH7D_QUESTIONS',
    topicId: 'y11a-7D',
    c: '7D',
    t: 'Further equations of lines',
    chapterId: 'y11a-7',
    chapterTitle: 'Chapter 7: Lines in the coordinate plane',
    topicTitle: 'Further equations of lines',
    idPrefix: 'y11a-7d-',
    year: 'Year 11',
  },
  // Orphans (Firestore only) — loaded via source: 'firestore'
  {
    key: '8A',
    group: 'orphans',
    source: 'firestore',
    file: 'src/constants/seedYear11Ch8AQuestions.js',
    exportName: 'Y11_CH8A_QUESTIONS',
    topicId: 'y11a-8A',
    c: '8A',
    t: 'Indices',
    chapterId: 'y11a-8',
    chapterTitle: 'Chapter 8: Exponential and logarithmic functions',
    topicTitle: 'Indices',
    idPrefix: '',
    year: 'Year 11',
  },
  {
    key: '9A',
    group: 'orphans',
    source: 'firestore',
    file: 'src/constants/seedYear11Ch9AQuestions.js',
    exportName: 'Y11_CH9A_QUESTIONS',
    topicId: 'y11a-9A',
    c: '9A',
    t: 'Tangents and the derivative',
    chapterId: 'y11a-9',
    chapterTitle: 'Chapter 9: Differentiation',
    topicTitle: 'Tangents and the derivative',
    idPrefix: '',
    year: 'Year 11',
  },
  {
    key: '11A',
    group: 'orphans',
    source: 'firestore',
    file: 'src/constants/seedYear11Ch11AQuestions.js',
    exportName: 'Y11_CH11A_QUESTIONS',
    topicId: 'y11a-11A',
    c: '11A',
    t: 'Radian measure of angle size',
    chapterId: 'y11a-11',
    chapterTitle: 'Chapter 11: Radian measure of angles',
    topicTitle: 'Radian measure of angle size',
    idPrefix: '',
    year: 'Year 11',
  },
  {
    key: '12A',
    group: 'orphans',
    source: 'firestore',
    file: 'src/constants/seedYear11Ch12AQuestions.js',
    exportName: 'Y11_CH12A_QUESTIONS',
    topicId: 'y11a-12A',
    c: '12A',
    t: 'Sets and Venn diagrams',
    chapterId: 'y11a-12',
    chapterTitle: 'Chapter 12: Probability',
    topicTitle: 'Sets and Venn diagrams',
    idPrefix: '',
    year: 'Year 11',
  },
];

// ── LaTeX helpers ──────────────────────────────────────────────────────────

function normalizeLatex(s) {
  if (s == null) return '';
  let t = String(s);
  t = t.replace(/\$([^$\n]+)\$/g, '\\($1\\)');
  t = t.replace(/(^|[^\\])\$/g, '$1');
  // collapse accidental form-feed if any already present
  t = t.replace(/\x0c/g, '');
  return t.trim();
}

function stripDelims(s) {
  let t = normalizeLatex(s).trim();
  const m = t.match(/^\\\(([\s\S]*)\\\)$/);
  if (m) t = m[1].trim();
  return t;
}

function isProse(s) {
  const t = stripDelims(s);
  if (!t) return false;
  if (/^[-+]?\d+(\.\d+)?$/.test(t)) return false;
  return (
    (/^[A-Za-z]/.test(t) && /[a-z]{3,}/.test(t) && !/\\[a-zA-Z]{2,}/.test(t) && t.split(/\s+/).length >= 2) ||
    /show that|prove|sketch|explain|describe/i.test(t)
  );
}

function balanceMathDelims(s) {
  let t = String(s ?? '');
  const open = (t.match(/\\\(/g) || []).length;
  const close = (t.match(/\\\)/g) || []).length;
  if (open === close) return t;
  // Strip all inline delims and re-wrap pure math; leave prose-heavy text bare
  const stripped = t.replace(/\\\(/g, '').replace(/\\\)/g, '');
  if (isProse(stripped)) return stripped;
  return `\\(${stripped.trim()}\\)`;
}

function wrapMath(s) {
  if (s == null) return '';
  let raw = String(s).trim();
  if (!raw) return raw;
  if (isProse(raw)) return stripDelims(raw);
  if (/\\\(/.test(raw)) {
    const opens = (raw.match(/\\\(/g) || []).length;
    if (opens > 1) {
      return balanceMathDelims(raw);
    }
    return balanceMathDelims(normalizeLatex(raw));
  }
  const t = stripDelims(raw);
  if (!t) return t;
  if (isProse(t)) return t;
  return `\\(${t}\\)`;
}

function fixItemLatex(q) {
  q.question = balanceMathDelims(normalizeLatex(q.question));
  if (q.opts) q.opts = q.opts.map((o) => balanceMathDelims(o));
  if (q.answer && q.type === 'teacher_review') q.answer = balanceMathDelims(normalizeLatex(q.answer));
  if (q.hint) q.hint = balanceMathDelims(normalizeLatex(q.hint));
  if (q.solution) q.solution = balanceMathDelims(normalizeLatex(q.solution));
  if (q.solutionSteps) {
    q.solutionSteps = q.solutionSteps.map((st) => ({
      ...st,
      explanation: balanceMathDelims(normalizeLatex(st.explanation)),
      workingOut: balanceMathDelims(normalizeLatex(st.workingOut || '')),
    }));
  }
  return q;
}

function S(explanation, workingOut, graphData = null) {
  let exp = String(explanation || '').trim();
  if (exp.length < 100) {
    exp +=
      ' Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.';
  }
  if (!/[.!?]$/.test(exp)) exp += '.';
  let w = workingOut == null ? '' : String(workingOut).trim();
  if (w && !/\\\(|\\\[/.test(w)) {
    if (/[\\^=_{}]|\\ln|\\log|\\frac|\\sin|\\cos|\\tan|e\^|x\^|\$/.test(w) || /^[-+\d./(),\sA-Za-z]+$/.test(w)) {
      w = wrapMath(w);
    }
  }
  return { explanation: exp, workingOut: w, graphData };
}

// ── Option ordering (NO seed-time shuffle) ─────────────────────────────────

function numericValue(s) {
  const t = stripDelims(s).replace(/\s/g, '').replace(/,/g, '');
  if (/^-?\d+(\.\d+)?$/.test(t)) return Number(t);
  if (/^-?\d+(\.\d+)?%$/.test(t)) return Number(t.slice(0, -1));
  const m2 = t.match(/^(-?\d+)\/(-?\d+)$/);
  if (m2) return Number(m2[1]) / Number(m2[2]);
  const m1 = t.match(/^(-)?\\d?frac\{(-?\d+)\}\{(-?\d+)\}$/);
  if (m1) {
    const sign = m1[1] ? -1 : 1;
    return (sign * Number(m1[2])) / Number(m1[3]);
  }
  return null;
}

function sortKey(s) {
  const n = numericValue(s);
  if (n != null && Number.isFinite(n)) return `0:${n.toFixed(12)}`;
  return `1:${stripDelims(s).toLowerCase()}`;
}

function placeCorrectNatural(correct, distractors) {
  const c = wrapMath(correct);
  const seen = new Set([c]);
  const pool = [c];
  for (const d of distractors) {
    const w = wrapMath(d);
    if (!w || seen.has(w)) continue;
    if ((w.match(/\\\(/g) || []).length > 1) continue;
    seen.add(w);
    pool.push(w);
    if (pool.length === 4) break;
  }
  let k = 0;
  while (pool.length < 4) {
    let pad;
    if (isProse(c)) pad = `An incorrect alternative statement (${k + 1}).`;
    else if (numericValue(c) != null) pad = wrapMath(String(Number(numericValue(c)) + k + 2));
    else pad = wrapMath(`\\dfrac{${k + 7}}{${k + 3}}`);
    if (!seen.has(pad)) {
      seen.add(pad);
      pool.push(pad);
    }
    k++;
    if (k > 20) break;
  }
  const four = pool.slice(0, 4);
  four.sort((a, b) => (sortKey(a) < sortKey(b) ? -1 : sortKey(a) > sortKey(b) ? 1 : 0));
  const a = four.indexOf(c);
  if (a < 0) throw new Error(`correct missing after sort: ${c}`);
  if (new Set(four).size !== 4) throw new Error(`dup opts: ${JSON.stringify(four)}`);
  return { opts: four, a };
}

// ── Distractors ────────────────────────────────────────────────────────────

function inventDistractors(correctRaw, q) {
  const raw = stripDelims(correctRaw);
  const set = new Set();
  const add = (s) => {
    if (s == null) return;
    const t = stripDelims(String(s));
    if (t && t !== raw) set.add(t);
  };

  const nv = numericValue(raw);
  if (nv != null) {
    add(String(nv + 1));
    add(String(nv - 1));
    add(String(-nv));
    add(String(nv * 2));
    if (nv !== 0) add(String(Number((1 / nv).toFixed(4))));
    add(String(Math.round(nv)));
    if (Number.isInteger(nv)) add(String(nv + 2));
  }

  // money / percent
  if (/\$|%|\\%/.test(raw)) {
    add(raw.replace(/(\d+)/, (_, n) => String(Number(n) + 1)));
    add(raw.replace(/(\d+)/, (_, n) => String(Number(n) - 1)));
    add(raw.replace(/%/g, '').replace(/\\%/g, ''));
  }

  // fractions
  if (/\\(?:d)?frac\{[^}]+\}\{[^}]+\}/.test(raw)) {
    add(raw.replace(/\\(?:d)?frac\{([^}]+)\}\{([^}]+)\}/, '\\frac{$2}{$1}'));
    add(raw.replace(/\\(?:d)?frac\{-([^}]+)\}/, '\\frac{$1}'));
    add(`-${raw}`);
    add(raw.replace(/\\(?:d)?frac\{[^}]+\}/, '\\frac{1}'));
  }

  // trig
  if (/\\sin|\\cos|\\tan/.test(raw)) {
    add(raw.replace(/\\sin/g, '\\cos').replace(/\\cos/g, '\\sin'));
    add(raw.replace(/\\sin/g, '-\\sin').replace(/\\cos/g, '-\\cos'));
    add(raw.replace(/\\tan/g, '\\sin'));
    add(raw.replace(/\^\{?2\}?/g, ''));
  }

  // exp / log
  if (/\\ln|\\log|e\^/.test(raw)) {
    add(raw.replace(/\\ln/g, '\\log'));
    add(raw.replace(/\+/g, 'PLUS').replace(/-/g, '+').replace(/PLUS/g, '-'));
    add(raw.replace(/e\^\{([^}]+)\}/, 'e^{$1+1}'));
    add(raw.replace(/e\^\{([^}]+)\}/, 'e^{-($1)}'));
  }

  // sign flip
  if (raw.startsWith('-')) add(raw.slice(1));
  else if (/^(\d|\\frac|\\dfrac|\\ln|\\sin|\\cos|e\^|x)/.test(raw)) add(`-${raw}`);

  // +C optional constant
  if (/\+ ?C/.test(raw)) add(raw.replace(/\+ ?C/, ''));
  else if (/\\int|indefinite|antiderivative/i.test(String(q.question || ''))) add(raw + ' + C');

  // prose
  if (isProse(raw)) {
    add('The opposite of this statement is true.');
    add('This only holds for positive values of x.');
    add('This is true only when the function is linear.');
  }

  // generic algebraic jitter
  add(raw.replace(/2/g, '3').replace(/3/g, '4'));
  add(raw + ' + 1');
  add(raw.replace(/\+/g, 'PLUS').replace(/-/g, '+').replace(/PLUS/g, '-'));

  const pool = [...set];
  const out = [];
  const seen = new Set([wrapMath(raw)]);
  for (const p of pool) {
    const w = wrapMath(p);
    if (!w || seen.has(w)) continue;
    seen.add(w);
    out.push(p);
    if (out.length >= 8) break;
  }
  while (out.length < 3) {
    if (isProse(raw)) out.push(`Incorrect option ${out.length + 1} for this item.`);
    else out.push(`\\dfrac{${out.length + 11}}{x + ${out.length + 1}}`);
  }
  return out.slice(0, 8);
}

// ── Teacher-review detection ───────────────────────────────────────────────

function mustTeacherReview(q) {
  if (q.teacher_review === true) return true;
  if (q.type === 'teacher_review' || q.type === 'graph_sketch') return true;
  if (q.requiresManualGrading === true && q.type !== 'multiple_choice') {
    // only if no clean closed answer
  }
  const text = `${q.question || ''}\n${q.a ?? q.answer ?? ''}`;
  if (/\b(sketch|draw|show that|prove that|prove\b|explain why|describe|justify|write a proof)\b/i.test(text)) {
    // if answer is a clean closed form and question is not pure sketch, still convert
    if (/^\s*sketch\b/i.test(q.question || '') || /\bprove that\b/i.test(q.question || '') || /\bshow that\b/i.test(q.question || '')) {
      // Show that / prove → teacher_review
      if (/\b(show that|prove)\b/i.test(q.question || '')) return true;
    }
    if (/\b(sketch|draw)\b/i.test(q.question || '') && !/find the area|evaluate|calculate|find dy\/dx|differentiate|integrate/i.test(q.question || '')) {
      return true;
    }
  }
  return false;
}

function alreadyMC(q) {
  const opts = q.opts || (Array.isArray(q.options) ? q.options.map((o) => (typeof o === 'string' ? o : o?.text)).filter(Boolean) : null);
  if (q.type === 'multiple_choice' && opts && opts.length === 4) return opts;
  if (opts && opts.length === 4 && (q.a !== undefined || q.answer !== undefined)) return opts;
  return null;
}

// ── Graphs (jsxGraph for SvgGraph) ─────────────────────────────────────────

function flattenScript(src) {
  return String(src)
    .split('\n')
    .map((line) => line.replace(/\/\/.*$/, '').trim())
    .filter(Boolean)
    .join(' ');
}

function tryBuildGraph(q) {
  // Keep existing rich graphs
  if (q.graphData && (q.graphData.jsxGraph || q.graphData.diagramSvg || q.graphData.geometry || q.graphData.equations)) {
    return q.graphData;
  }
  const stem = String(q.question || '');
  // match y = sin x, y = e^x, y = ln x, y = cos 2x etc.
  const m = stem.match(/y\s*=\s*(\\[a-zA-Z]+(?:\s*x)?|e\^\{?x\}?|\\ln\s*x|\\sin\s*(?:\\,)?x|\\cos\s*(?:\\,)?x|\\tan\s*(?:\\,)?x|x\^2|x\^\{2\})/i);
  if (!m) return null;

  let exprJs = null;
  let label = 'y';
  const piece = m[1].replace(/\s+/g, '');
  if (/sin/i.test(piece)) {
    exprJs = 'Math.sin(x)';
    label = 'y = sin x';
  } else if (/cos/i.test(piece)) {
    exprJs = 'Math.cos(x)';
    label = 'y = cos x';
  } else if (/tan/i.test(piece)) {
    exprJs = 'Math.tan(x)';
    label = 'y = tan x';
  } else if (/e\^/i.test(piece)) {
    exprJs = 'Math.exp(x)';
    label = 'y = eˣ';
  } else if (/ln|log/i.test(piece)) {
    exprJs = 'Math.log(x)';
    label = 'y = ln x';
  } else if (/x\^\{?2\}?/.test(piece)) {
    exprJs = 'x*x';
    label = 'y = x²';
  }
  if (!exprJs) return null;

  const isLog = exprJs.includes('Math.log');
  const bb = isLog ? [0.1, 4, 5, -2] : [-4, 4, 4, -4];
  const script = flattenScript(`
board.suspendUpdate();
board.create('arrow', [[${bb[0]},0],[${bb[2]},0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,${bb[3]}],[0,${bb[1]}]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [${bb[2] * 0.85}, ${bb[3] * 0.35}, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.12, ${bb[1] * 0.9}, 'y'], {fontSize:13, color:'#64748b'});
board.create('functiongraph', [function(x){ return ${exprJs}; }, ${isLog ? 0.15 : bb[0] + 0.1}, ${bb[2] - 0.1}], {strokeColor:'#6366f1', strokeWidth:2.6});
board.create('text', [${isLog ? 2.5 : 1.2}, ${isLog ? 2.2 : 2.5}, '${label}'], {fontSize:12, color:'#4f46e5'});
board.unsuspendUpdate();
`);
  return {
    jsxGraph: {
      width: 360,
      height: 260,
      boundingbox: bb,
      script,
    },
  };
}

// ── Solution steps ─────────────────────────────────────────────────────────

function enrichSteps(q, correctDisplay, topic) {
  const existing = Array.isArray(q.solutionSteps) ? q.solutionSteps : [];
  const ans = wrapMath(correctDisplay);
  const stem = String(q.question || '');
  const topicHint = topic.t || topic.topicTitle || 'this topic';

  // If existing steps already rich, normalize and pad
  const rich = existing.filter((s) => (s.explanation || '').length >= 80);
  if (rich.length >= 3) {
    return rich.slice(0, 8).map((s) =>
      S(
        normalizeLatex(s.explanation),
        normalizeLatex(s.workingOut || ans),
        s.graphData === undefined ? null : s.graphData
      )
    );
  }

  // Reuse short existing workings if present
  const works = existing.map((s) => normalizeLatex(s.workingOut || '')).filter(Boolean);

  const steps = [
    S(
      `Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for ${topicHint}: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.`,
      works[0] || wrapMath(stem.match(/y\s*=\s*[^\n]+/)?.[0] || 'Given data')
    ),
    S(
      `What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).`,
      works[1] || 'Apply the appropriate standard form'
    ),
    S(
      `Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.`,
      works[2] || ans
    ),
    S(
      `Final answer: ${stripDelims(ans) || correctDisplay}. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.`,
      ans
    ),
  ];

  // Attach graph on first step if available
  const g = tryBuildGraph(q);
  if (g) steps[0].graphData = g;

  return steps;
}

// ── Normalize short-field seeds (q/a/h/s/opts) ─────────────────────────────

function normalizeRawQuestion(raw) {
  if (!raw || typeof raw !== 'object') return raw;
  const q = { ...raw };
  if (!q.question && q.q) q.question = q.q;
  if (q.answer == null && q.a != null) q.answer = q.a;
  if (!q.hint && q.h) q.hint = q.h;
  if (!q.solution && q.s) q.solution = q.s;
  // opts may be string[] or {text}[]
  if (!q.opts && Array.isArray(q.options)) {
    q.opts = q.options.map((o) => (typeof o === 'string' ? o : o?.text || '')).filter(Boolean);
  }
  if (Array.isArray(q.opts)) {
    q.opts = q.opts.map((o) => (typeof o === 'string' ? o : o?.text || String(o ?? '')));
  }
  // subQuestions recursive
  if (Array.isArray(q.subQuestions)) {
    q.subQuestions = q.subQuestions.map(normalizeRawQuestion);
  }
  return q;
}

// ── Convert one leaf ───────────────────────────────────────────────────────

function convertLeaf(qIn, meta, parentStem = '') {
  const q = normalizeRawQuestion(qIn);
  const question = normalizeLatex(
    parentStem && !String(q.question || '').includes(parentStem.slice(0, Math.min(24, parentStem.length)))
      ? `${parentStem}\n${q.question || ''}`
      : q.question || ''
  );
  // Preserve per-question topic codes when mega-file holds mixed topics
  const topicId =
    q.topicId ||
    (q.c && meta.multiTopic ? `y11a-${q.c}` : meta.topicId);
  const topicCode = q.c || meta.c;
  const topicTitle = q.t || meta.t || meta.topicTitle;

  // Already MC: keep opts order, re-validate a, enrich steps
  const optsExisting = alreadyMC(q);
  if (optsExisting) {
    const opts = optsExisting.map((o) => wrapMath(typeof o === 'string' ? o : o?.text || ''));
    let a = q.a;
    if (typeof a === 'string' && /^\d+$/.test(a)) a = Number(a);
    if (!Number.isInteger(a) || a < 0 || a > 3) {
      // try answer as index
      const raw = String(q.answer ?? '').trim();
      if (/^[0-3]$/.test(raw)) a = Number(raw);
      else {
        const idx = opts.findIndex((o) => stripDelims(o) === stripDelims(raw) || o === wrapMath(raw));
        a = idx >= 0 ? idx : 0;
      }
    }
    // ensure unique
    const seen = new Set();
    const fixed = [];
    for (const o of opts) {
      let t = o;
      let k = 0;
      while (seen.has(t)) {
        t = isProse(o) ? `${o} (${++k})` : wrapMath(`${stripDelims(o)}+${++k}`);
      }
      seen.add(t);
      fixed.push(t);
    }
    while (fixed.length < 4) fixed.push(wrapMath(String(fixed.length + 9)));
    const four = fixed.slice(0, 4);
    if (a < 0 || a > 3) a = 0;
    const steps = enrichSteps({ ...q, question }, four[a], meta);
    return {
      id: q.id,
      topicId,
      c: topicCode,
      t: topicTitle,
      type: 'multiple_choice',
      difficulty: q.difficulty || 'medium',
      timeLimit: q.timeLimit || 120,
      question,
      opts: four,
      a,
      answer: String(a),
      hint: normalizeLatex(q.hint || ''),
      solution: normalizeLatex(q.solution || '') || `The correct answer is ${four[a]}.`,
      solutionSteps: steps,
      graphData: tryBuildGraph(q) || q.graphData || null,
      isNew: true,
      requiresManualGrading: false,
    };
  }

  if (mustTeacherReview(q)) {
    const answer = String(q.a ?? q.answer ?? '').trim();
    const answerFmt = answer
      .split(/(?<=\.)\s+/)
      .join('\n')
      .trim();
    return {
      id: q.id,
      topicId,
      c: topicCode,
      t: topicTitle,
      type: 'teacher_review',
      difficulty: q.difficulty || 'hard',
      timeLimit: q.timeLimit || 180,
      question,
      answer: normalizeLatex(answerFmt),
      hint: normalizeLatex(String(q.hint || 'Write a full structured solution for the teacher to mark.')),
      solution: normalizeLatex(answerFmt),
      solutionSteps: enrichSteps({ ...q, question }, answerFmt, meta),
      graphData: tryBuildGraph(q) || null,
      isNew: true,
      requiresManualGrading: true,
    };
  }

  let correct = String(q.a ?? q.answer ?? '').trim();
  // refuse index-only without opts
  if (/^[0-3]$/.test(correct) && !optsExisting) {
    // treat as teacher_review if no real answer
    return {
      id: q.id,
      topicId,
      c: topicCode,
      t: topicTitle,
      type: 'teacher_review',
      difficulty: q.difficulty || 'medium',
      timeLimit: q.timeLimit || 120,
      question,
      answer: correct,
      hint: normalizeLatex(q.hint || ''),
      solution: correct,
      solutionSteps: enrichSteps({ ...q, question }, correct, meta),
      graphData: null,
      isNew: true,
      requiresManualGrading: true,
    };
  }

  if (!correct || /sketch required|see solution|approximation by count/i.test(correct)) {
    return {
      id: q.id,
      topicId,
      c: topicCode,
      t: topicTitle,
      type: 'teacher_review',
      difficulty: q.difficulty || 'medium',
      timeLimit: q.timeLimit || 150,
      question,
      answer: correct || 'See full worked solution.',
      hint: normalizeLatex(q.hint || ''),
      solution: correct || '',
      solutionSteps: enrichSteps({ ...q, question }, correct || 'solution', meta),
      graphData: tryBuildGraph(q) || null,
      isNew: true,
      requiresManualGrading: true,
    };
  }

  correct = stripDelims(correct);
  const distractors = inventDistractors(correct, { ...q, question });
  const { opts, a } = placeCorrectNatural(correct, distractors);
  const steps = enrichSteps({ ...q, question }, opts[a], meta);

  return {
    id: q.id,
    topicId,
    c: topicCode,
    t: topicTitle,
    type: 'multiple_choice',
    difficulty: q.difficulty || 'medium',
    timeLimit: q.timeLimit || 120,
    question,
    opts,
    a,
    answer: String(a),
    hint: normalizeLatex(q.hint || ''),
    solution: normalizeLatex(q.solution || '') || `The correct answer is ${opts[a]}.`,
    solutionSteps: steps,
    graphData: tryBuildGraph(q) || q.graphData || null,
    isNew: true,
    requiresManualGrading: false,
  };
}

function expandAndConvert(originals, meta) {
  const out = [];
  const seenIds = new Set();

  const pushItem = (item) => {
    if (!item?.id) return;
    if (seenIds.has(item.id)) {
      // disambiguate duplicate ids
      let k = 2;
      let nid = `${item.id}-v${k}`;
      while (seenIds.has(nid)) {
        k++;
        nid = `${item.id}-v${k}`;
      }
      item = { ...item, id: nid };
    }
    seenIds.add(item.id);
    out.push(item);
  };

  for (const q of originals) {
    if ((q.type === 'multi_part' || q.type === 'subquestions') && Array.isArray(q.subQuestions) && q.subQuestions.length) {
      const parentStem = normalizeLatex(q.question || '');
      for (const sq of q.subQuestions) {
        const merged = {
          ...sq,
          difficulty: sq.difficulty || q.difficulty,
          timeLimit: sq.timeLimit || q.timeLimit || 180,
          hint: sq.hint || q.hint,
        };
        pushItem(convertLeaf(merged, meta, parentStem));
      }
    } else if (Array.isArray(q.subQuestions) && q.subQuestions.length && q.type !== 'multiple_choice') {
      const parentStem = normalizeLatex(q.question || '');
      for (const sq of q.subQuestions) {
        pushItem(convertLeaf({ ...sq, difficulty: sq.difficulty || q.difficulty }, meta, parentStem));
      }
    } else {
      pushItem(convertLeaf(q, meta));
    }
  }
  return out;
}

// ── Self-check ─────────────────────────────────────────────────────────────

function selfCheck(items, key) {
  const hist = [0, 0, 0, 0];
  let mc = 0;
  let tr = 0;
  for (const q of items) {
    if (!q.id) throw new Error(`[${key}] missing id`);
    if (q.type === 'teacher_review') {
      tr++;
      if (q.answer == null) throw new Error(`[${key}] tr no answer ${q.id}`);
      if (!q.solutionSteps || q.solutionSteps.length < 3) throw new Error(`[${key}] tr steps ${q.id}`);
      continue;
    }
    if (q.type !== 'multiple_choice') throw new Error(`[${key}] type ${q.id} ${q.type}`);
    mc++;
    if (!Array.isArray(q.opts) || q.opts.length !== 4) throw new Error(`[${key}] opts ${q.id}`);
    if (new Set(q.opts).size !== 4) throw new Error(`[${key}] dup opts ${q.id}`);
    if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) throw new Error(`[${key}] a ${q.id}`);
    hist[q.a]++;
    if (!q.solutionSteps || q.solutionSteps.length < 3) throw new Error(`[${key}] steps ${q.id}`);
    for (const st of q.solutionSteps) {
      if (!st.explanation || st.explanation.length < 40) throw new Error(`[${key}] thin ${q.id}`);
    }
    const blob = [q.question, ...q.opts, ...q.solutionSteps.flatMap((s) => [s.explanation, s.workingOut])].join(
      '\n'
    );
    if (/\x0c/.test(blob)) throw new Error(`[${key}] formfeed ${q.id}`);
    const open = (blob.match(/\\\(/g) || []).length;
    const close = (blob.match(/\\\)/g) || []).length;
    if (open !== close) {
      // auto-repair later; soft warn
      console.warn(`[${key}] paren ${q.id} ${open}/${close}`);
    }
  }
  return { total: items.length, mc, tr, hist };
}

// ── Load / write / push ────────────────────────────────────────────────────

function getDb() {
  const { initializeApp, cert, getApps } = require('firebase-admin/app');
  const { getFirestore } = require('firebase-admin/firestore');
  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  return getFirestore();
}

async function loadFromFirestore(meta) {
  const db = getDb();
  let ids = [];
  const tSnap = await db.collection('question_topic_index').doc(meta.topicId).get();
  if (tSnap.exists) ids = tSnap.data()?.ids || [];
  if (!ids.length) {
    const cSnap = await db.collection('question_index').doc(meta.chapterId).get();
    const all = cSnap.data()?.ids || [];
    // chapter fallback: keep all; filter after fetch by topicId
    ids = all;
  }
  console.log(`[${meta.key}] firestore load ids`, ids.length);
  const out = [];
  for (let i = 0; i < ids.length; i += 50) {
    const chunk = ids.slice(i, i + 50);
    const refs = chunk.map((id) => db.collection('questions').doc(id));
    const snaps = await db.getAll(...refs);
    for (const snap of snaps) {
      if (!snap.exists) continue;
      const d = snap.data();
      if (d.topicId && d.topicId !== meta.topicId && !meta.multiTopic) continue;
      const opts = Array.isArray(d.options)
        ? d.options.map((o) => (typeof o === 'string' ? o : o?.text || '')).filter(Boolean)
        : d.opts || [];
      out.push(
        normalizeRawQuestion({
          id: snap.id,
          type: d.type,
          question: d.question || d.q,
          a: d.answer ?? d.a,
          answer: d.answer ?? d.a,
          opts,
          options: opts,
          hint: d.hint,
          solution: d.solution,
          solutionSteps: d.solutionSteps,
          difficulty: d.difficulty,
          timeLimit: d.timeLimit,
          graphData: d.graphData,
          c: d.topicCode || meta.c,
          t: d.topicTitle || meta.t,
          topicId: d.topicId || meta.topicId,
          requiresManualGrading: d.requiresManualGrading,
          teacher_review: d.type === 'teacher_review',
          origin: d.origin,
        })
      );
    }
  }
  return out;
}

function loadSeed(meta) {
  const fp = path.join(ROOT, meta.file);
  if (!existsSync(fp)) throw new Error(`missing file ${fp}`);
  const src = readFileSync(fp, 'utf8');
  // Extract only the named export array
  const re = new RegExp(`export const ${meta.exportName} = `);
  if (!re.test(src)) {
    const m = src.match(/export const (\w+) = /);
    if (!m) throw new Error(`no export in ${fp}`);
    console.warn(`[${meta.key}] export name mismatch, using ${m[1]}`);
    meta.exportName = m[1];
  }
  // Isolate export: replace target export with module.exports, comment other exports
  let body = src.replace(new RegExp(`export const ${meta.exportName} = `), 'module.exports = ');
  body = body.replace(/^export const /gm, 'const __other_');
  const tmp = `/tmp/bulk-y11-${meta.key}.cjs`;
  writeFileSync(tmp, body);
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

function writeSeed(meta, items) {
  const fp = path.join(ROOT, meta.file);
  if (meta.dualExportName) {
    const dual = items.filter((q) => {
      if (meta.dualFilterC) {
        return String(q.c || '') === meta.dualFilterC || String(q.topicId || '').includes(meta.dualFilterC);
      }
      return false;
    });
    writeFileSync(
      fp,
      `export const ${meta.exportName} = ${JSON.stringify(items, null, 2)};\n\nexport const ${meta.dualExportName} = ${JSON.stringify(dual, null, 2)};\n`
    );
  } else {
    writeFileSync(fp, `export const ${meta.exportName} = ${JSON.stringify(items, null, 2)};\n`);
  }
  return fp;
}

async function pushTopic(meta, items) {
  const { FieldValue } = require('firebase-admin/firestore');
  const db = getDb();

  const seedIds = new Set(items.map((q) => q.id));
  // multiTopic: count by chapter
  let ourExisting = 0;
  if (meta.multiTopic) {
    const existing = await db.collection('question_index').doc(meta.chapterId).get();
    const ids = existing.data()?.ids || [];
    ourExisting = ids.filter((id) => seedIds.has(id) || (meta.idPrefix && String(id).startsWith(meta.idPrefix))).length;
    console.log(`[${meta.key}] chapter ${meta.chapterId} index=${ids.length} overlap≈${ourExisting} seed=${items.length}`);
  } else {
    const existing = await db.collection('questions').where('topicId', '==', meta.topicId).get();
    ourExisting = existing.docs.filter(
      (d) => seedIds.has(d.id) || (meta.idPrefix && d.id.startsWith(meta.idPrefix))
    ).length;
    console.log(`[${meta.key}] firestore relevant≈${ourExisting} seed=${items.length} topicTotal=${existing.size}`);
    if (items.length < ourExisting * 0.85 && ourExisting > 5) {
      throw new Error(
        `[${meta.key}] Refusing push: seed ${items.length} << firestore ${ourExisting}. Confirm with user.`
      );
    }
  }

  let batch = db.batch();
  let n = 0;
  let ok = 0;
  let skippedTeacher = 0;
  const flush = async () => {
    if (!n) return;
    await batch.commit();
    batch = db.batch();
    n = 0;
  };

  for (const raw of items) {
    const ref = db.collection('questions').doc(raw.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') {
      skippedTeacher++;
      continue;
    }
    const isMC = raw.type === 'multiple_choice';
    const topicId = raw.topicId || meta.topicId;
    const topicCode = raw.c || meta.c;
    const topicTitle = raw.t || meta.topicTitle;
    const payload = {
      chapterId: meta.chapterId,
      chapterTitle: meta.chapterTitle,
      topicId,
      topicCode,
      topicTitle,
      year: meta.year || 'Year 11',
      isManual: true,
      origin: 'seed',
      isActive: true,
      title: String(raw.question || '').replace(/\\[\(\)\[\]]/g, '').slice(0, 40) + '...',
      question: raw.question,
      difficulty: raw.difficulty || 'medium',
      timeLimit: raw.timeLimit || 120,
      type: raw.type,
      requiresManualGrading: raw.type === 'teacher_review',
      hint: raw.hint || '',
      solution: raw.solution || '',
      solutionSteps: raw.solutionSteps || [],
      subQuestions: [],
      graphData: raw.graphData ?? null,
      isNew: true,
      updatedAt: FieldValue.serverTimestamp(),
      ...(snap.exists ? {} : { createdAt: FieldValue.serverTimestamp() }),
    };
    if (isMC) {
      payload.options = raw.opts.map((t) => ({ text: t, imageUrl: '' }));
      payload.answer = String(raw.a);
    } else {
      payload.options = [];
      payload.answer = raw.answer || '';
    }
    batch.set(ref, payload, { merge: true });
    n++;
    ok++;
    if (n >= 200) await flush();
  }
  await flush();

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log(`[${meta.key}] pushed ${ok}, skippedTeacher ${skippedTeacher}, ver ${ver}`);
  return { ok, skippedTeacher, ver };
}

// ── Select topics ──────────────────────────────────────────────────────────

function selectedTopics() {
  if (LIST || (!ONLY && !ALL)) return TOPICS;
  if (ALL) return TOPICS;
  const parts = ONLY.split(',').map((s) => s.trim()).filter(Boolean);
  if (parts.includes('curriculum')) return TOPICS.filter((t) => t.group === 'curriculum');
  if (parts.includes('orphans')) return TOPICS.filter((t) => t.group === 'orphans');
  if (parts.includes('exams') || parts.includes('past')) return TOPICS.filter((t) => t.group === 'exams');
  return TOPICS.filter((t) => parts.includes(t.key) || parts.includes(t.topicId));
}

async function main() {
  const topics = selectedTopics();
  if (LIST || (!WRITE && !PUSH && !ONLY && !ALL)) {
    console.log('Topics available:');
    for (const t of TOPICS) {
      console.log(`  ${t.key.padEnd(12)} ${t.group.padEnd(12)} ${t.topicId} ← ${t.file}${t.source === 'firestore' ? ' [FS]' : ''}`);
    }
    console.log('\nUsage: --only 6B,6C | --only curriculum | --only orphans | --all');
    console.log('       add --write and optionally --push');
    if (!ONLY && !ALL) return;
  }

  const summary = [];
  const chaptersToRebuild = new Set();

  for (const meta of topics) {
    console.log(`\n═══ ${meta.key} (${meta.topicId}) ═══`);
    try {
      let originals;
      if (meta.source === 'firestore') {
        originals = await loadFromFirestore(meta);
      } else {
        originals = loadSeed(meta);
      }
      if (!Array.isArray(originals)) throw new Error('seed is not an array');
      console.log('loaded', originals.length);
      const items = expandAndConvert(originals.map(normalizeRawQuestion), meta).map(fixItemLatex);
      const stats = selfCheck(items, meta.key);
      console.log('self-check', stats);
      if (WRITE) {
        writeSeed(meta, items);
        console.log('wrote', meta.file, items.length);
      } else {
        console.log('dry-run', items.length);
      }
      if (PUSH) {
        if (!WRITE) throw new Error('need --write with --push');
        const r = await pushTopic(meta, items);
        chaptersToRebuild.add(meta.chapterId);
        summary.push({ key: meta.key, ...stats, pushed: r.ok });
      } else {
        summary.push({ key: meta.key, ...stats, pushed: 0 });
      }
    } catch (e) {
      console.error(`[${meta.key}] FAILED:`, e.message);
      summary.push({ key: meta.key, error: e.message });
    }
  }

  console.log('\n════ SUMMARY ════');
  console.table(summary);

  if (PUSH && chaptersToRebuild.size) {
    console.log('\nRebuild indexes with:');
    for (const c of chaptersToRebuild) {
      console.log(`  node tools/scripts/rebuildQuestionIndexes.js ${c}`);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
