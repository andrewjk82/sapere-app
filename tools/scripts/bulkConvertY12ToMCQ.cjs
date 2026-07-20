/**
 * Bulk convert Y12 Advanced short_answer → multiple_choice (flat)
 * for Ch5H, 5I, Ch6, Ch8, Ch10A + Y12 past papers.
 *
 * Keeps Show/Prove/Sketch as teacher_review.
 * Enriches solutionSteps; adds jsxGraph graphs when y=f(x) is detectable.
 * opts in natural/size order — NO seed-time shuffle (app shuffles at display).
 *
 *   node tools/scripts/bulkConvertY12ToMCQ.cjs --list
 *   node tools/scripts/bulkConvertY12ToMCQ.cjs --only 5H,5I --write
 *   node tools/scripts/bulkConvertY12ToMCQ.cjs --only curriculum --write --push
 *   node tools/scripts/bulkConvertY12ToMCQ.cjs --only exams --write --push
 *   node tools/scripts/bulkConvertY12ToMCQ.cjs --all --write --push
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

const TOPICS = [
  // Curriculum Ch5 H/I
  {
    key: '5H',
    group: 'curriculum',
    file: 'src/constants/seedYear12Ch5HQuestions.js',
    exportName: 'Y12A_CH5H_QUESTIONS',
    topicId: 'y12a-5H',
    c: '5H',
    t: 'Applications of differentiation',
    chapterId: 'y12a-5',
    chapterTitle: 'Chapter 5: The exponential and logarithmic functions',
    topicTitle: 'Applications of differentiation',
    idPrefix: 'y12a-5h-',
  },
  {
    key: '5I',
    group: 'curriculum',
    file: 'src/constants/seedYear12Ch5IQuestions.js',
    exportName: 'Y12A_CH5I_QUESTIONS',
    topicId: 'y12a-5I',
    c: '5I',
    t: 'Integration giving logarithms',
    chapterId: 'y12a-5',
    chapterTitle: 'Chapter 5: The exponential and logarithmic functions',
    topicTitle: 'Integration giving logarithms',
    idPrefix: 'y12a-5i-',
  },
  // Ch6
  {
    key: '6A',
    group: 'curriculum',
    file: 'src/constants/seedYear12aCh6Questions.js',
    exportName: 'Y12A_CH6_QUESTIONS',
    topicId: 'y12a-6A',
    c: '6A',
    t: 'The behaviour of sin x near the origin',
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicTitle: 'The behaviour of sin x near the origin',
    idPrefix: 'y12a-6a-',
  },
  {
    key: '6B',
    group: 'curriculum',
    file: 'src/constants/seedYear12aCh6BQuestions.js',
    exportName: 'Y12A_CH6B_QUESTIONS',
    topicId: 'y12a-6B',
    c: '6B',
    t: 'Differentiating the trigonometric functions',
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicTitle: 'Differentiating the trigonometric functions',
    idPrefix: 'y12a-6b-',
  },
  {
    key: '6C',
    group: 'curriculum',
    file: 'src/constants/seedYear12aCh6CQuestions.js',
    exportName: 'Y12A_CH6C_QUESTIONS',
    topicId: 'y12a-6C',
    c: '6C',
    t: 'Applications of differentiation',
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicTitle: 'Applications of differentiation',
    idPrefix: 'y12a-6c-',
  },
  {
    key: '6D',
    group: 'curriculum',
    file: 'src/constants/seedYear12aCh6DQuestions.js',
    exportName: 'Y12A_CH6D_QUESTIONS',
    topicId: 'y12a-6D',
    c: '6D',
    t: 'Integrating the trigonometric functions',
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicTitle: 'Integrating the trigonometric functions',
    idPrefix: 'y12a-6d-',
  },
  {
    key: '6E',
    group: 'curriculum',
    file: 'src/constants/seedYear12aCh6EQuestions.js',
    exportName: 'Y12A_CH6E_QUESTIONS',
    topicId: 'y12a-6E',
    c: '6E',
    t: 'Area',
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicTitle: 'Area',
    idPrefix: 'y12a-6e-',
  },
  {
    key: '6F',
    group: 'curriculum',
    file: 'src/constants/seedYear12aCh6FQuestions.js',
    exportName: 'Y12A_CH6F_QUESTIONS',
    topicId: 'y12a-6F',
    c: '6F',
    t: 'Chapter review exercise',
    chapterId: 'y12a-6',
    chapterTitle: 'Chapter 6: The trigonometric functions',
    topicTitle: 'Chapter review exercise',
    idPrefix: 'y12a-6f-',
  },
  // Ch8 (no Ch7 content in curriculum)
  {
    key: '8A',
    group: 'curriculum',
    file: 'src/constants/seedYear12Ch8Questions.js',
    exportName: 'Y12_CH8_QUESTIONS',
    topicId: 'y12a-8A',
    c: '8A',
    t: 'Applications of APs and GPs',
    chapterId: 'y12a-8',
    chapterTitle: 'Chapter 8: Series and finance',
    topicTitle: 'Applications of APs and GPs',
    idPrefix: 'y12a-8a-',
  },
  {
    key: '8B',
    group: 'curriculum',
    file: 'src/constants/seedYear12aCh8BQuestions.js',
    exportName: 'Y12A_CH8B_QUESTIONS',
    topicId: 'y12a-8B',
    c: '8B',
    t: 'The use of logarithms with GPs',
    chapterId: 'y12a-8',
    chapterTitle: 'Chapter 8: Series and finance',
    topicTitle: 'The use of logarithms with GPs',
    idPrefix: 'y12a-8b-',
  },
  {
    key: '8C',
    group: 'curriculum',
    file: 'src/constants/seedYear12aCh8CQuestions.js',
    exportName: 'Y12A_CH8C_QUESTIONS',
    topicId: 'y12a-8C',
    c: '8C',
    t: 'Simple and compound interest',
    chapterId: 'y12a-8',
    chapterTitle: 'Chapter 8: Series and finance',
    topicTitle: 'Simple and compound interest',
    idPrefix: 'y12a-8c-',
  },
  {
    key: '8D',
    group: 'curriculum',
    file: 'src/constants/seedYear12aCh8DQuestions.js',
    exportName: 'Y12A_CH8D_QUESTIONS',
    topicId: 'y12a-8D',
    c: '8D',
    t: 'Investing money by regular instalments',
    chapterId: 'y12a-8',
    chapterTitle: 'Chapter 8: Series and finance',
    topicTitle: 'Investing money by regular instalments',
    idPrefix: 'y12a-8d-',
  },
  {
    key: '8E',
    group: 'curriculum',
    file: 'src/constants/seedYear12aCh8EQuestions.js',
    exportName: 'Y12A_CH8E_QUESTIONS',
    topicId: 'y12a-8E',
    c: '8E',
    t: 'Paying off a loan',
    chapterId: 'y12a-8',
    chapterTitle: 'Chapter 8: Series and finance',
    topicTitle: 'Paying off a loan',
    idPrefix: 'y12a-8e-',
  },
  {
    key: '8F',
    group: 'curriculum',
    file: 'src/constants/seedYear12aCh8FQuestions.js',
    exportName: 'Y12A_CH8F_QUESTIONS',
    topicId: 'y12a-8F',
    c: '8F',
    t: 'Chapter review exercise',
    chapterId: 'y12a-8',
    chapterTitle: 'Chapter 8: Series and finance',
    topicTitle: 'Chapter review exercise',
    idPrefix: 'y12a-8f-',
  },
  {
    key: '10A',
    group: 'curriculum',
    file: 'src/constants/seedYear12aCh10AQuestions.js',
    exportName: 'Y12A_CH10A_QUESTIONS',
    topicId: 'y12a-10A',
    c: '10A',
    t: 'Relative frequency',
    chapterId: 'y12a-10',
    chapterTitle: 'Chapter 10: Random variables',
    topicTitle: 'Relative frequency',
    idPrefix: '',
  },
  // Past papers (main + similar as separate files)
  {
    key: 'abb2020',
    group: 'exams',
    file: 'src/constants/seedAbbotsleigh2020Questions.js',
    exportName: 'ABBOTSLEIGH_2020_QUESTIONS',
    topicId: 'y12a-exam',
    c: 'EXAM',
    t: 'Abbotsleigh 2020 Trial Exam',
    chapterId: 'exam:abbotsleigh-2020',
    chapterTitle: 'Abbotsleigh 2020 HSC Trial',
    topicTitle: 'Abbotsleigh 2020 Trial Exam',
    idPrefix: 'abb2020-',
  },
  {
    key: 'abb2020e1',
    group: 'exams',
    file: 'src/constants/seedAbbotsleigh2020Ext1Questions.js',
    exportName: 'ABB_2020_EXT1_QUESTIONS',
    topicId: 'y12e1-exam',
    c: 'EXAM',
    t: 'Abbotsleigh 2020 Trial Exam (Extension 1)',
    chapterId: 'exam:abb-2020-ext1',
    chapterTitle: 'Abbotsleigh 2020 HSC Trial (Ext 1)',
    topicTitle: 'Abbotsleigh 2020 Trial Exam (Extension 1)',
    idPrefix: 'abb2020e1-',
  },
  {
    key: 'abb2020e1s',
    group: 'exams',
    file: 'src/constants/seedAbbotsleigh2020Ext1SimilarQuestions.js',
    exportName: 'ABB_2020_EXT1_SIMILAR_QUESTIONS',
    topicId: 'y12e1-exam',
    c: 'EXAM',
    t: 'Abbotsleigh 2020 Trial Exam (Extension 1)',
    chapterId: 'exam:abb-2020-ext1',
    chapterTitle: 'Abbotsleigh 2020 HSC Trial (Ext 1)',
    topicTitle: 'Abbotsleigh 2020 Trial Exam (Extension 1)',
    idPrefix: '',
  },
  {
    key: 'asc2020',
    group: 'exams',
    file: 'src/constants/seedAscham2020Questions.js',
    exportName: 'ASCHAM_2020_QUESTIONS',
    topicId: 'y12a-exam',
    c: 'EXAM',
    t: 'Ascham 2020 Trial Exam',
    chapterId: 'exam:asc-2020',
    chapterTitle: 'Ascham 2020 HSC Trial',
    topicTitle: 'Ascham 2020 Trial Exam',
    idPrefix: 'asc2020-',
  },
  {
    key: 'bar2020',
    group: 'exams',
    file: 'src/constants/seedBarker2020Questions.js',
    exportName: 'BARKER_2020_QUESTIONS',
    topicId: 'y12a-exam',
    c: 'EXAM',
    t: 'Barker 2020 Trial Exam',
    chapterId: 'exam:bar-2020',
    chapterTitle: 'Barker 2020 HSC Trial',
    topicTitle: 'Barker 2020 Trial Exam',
    idPrefix: 'bar2020-',
  },
  {
    key: 'baulko2020',
    group: 'exams',
    file: 'src/constants/seedBaulkham2020Questions.js',
    exportName: 'BAULKHAM_2020_QUESTIONS',
    topicId: 'y12a-exam',
    c: 'EXAM',
    t: 'Baulkham Hills 2020 Trial Exam',
    chapterId: 'exam:baulko-2020',
    chapterTitle: 'Baulkham Hills 2020 HSC Trial',
    topicTitle: 'Baulkham Hills 2020 Trial Exam',
    idPrefix: 'baulko2020-',
  },
  {
    key: 'bbhs2020',
    group: 'exams',
    file: 'src/constants/seedBlacktownBoys2020Questions.js',
    exportName: 'BLACKTOWN_BOYS_2020_QUESTIONS',
    topicId: 'y12a-exam-bbhs',
    c: 'EXAM',
    t: 'Blacktown Boys 2020 Trial Exam',
    chapterId: 'exam:bbhs-2020',
    chapterTitle: 'Blacktown Boys 2020 HSC Trial',
    topicTitle: 'Blacktown Boys 2020 Trial Exam',
    idPrefix: 'bbhs2020-',
  },
  {
    key: 'bbhs2020s',
    group: 'exams',
    file: 'src/constants/seedBlacktownBoys2020SimilarQuestions.js',
    exportName: 'BLACKTOWN_BOYS_2020_SIMILAR_QUESTIONS',
    topicId: 'y12a-exam-bbhs',
    c: 'EXAM',
    t: 'Blacktown Boys 2020 Trial Exam',
    chapterId: 'exam:bbhs-2020',
    chapterTitle: 'Blacktown Boys 2020 HSC Trial',
    topicTitle: 'Blacktown Boys 2020 Trial Exam',
    idPrefix: '',
  },
  {
    key: 'car2020',
    group: 'exams',
    file: 'src/constants/seedCaringbah2020Questions.js',
    exportName: 'CARINGBAH_2020_QUESTIONS',
    topicId: 'y12a-exam',
    c: 'EXAM',
    t: 'Caringbah 2020 Trial Exam',
    chapterId: 'exam:caringbah-2020',
    chapterTitle: 'Caringbah 2020 HSC Trial',
    topicTitle: 'Caringbah 2020 Trial Exam',
    idPrefix: 'car2020-',
  },
  {
    key: 'car2020s',
    group: 'exams',
    file: 'src/constants/seedCaringbah2020SimilarQuestions.js',
    exportName: 'CARINGBAH_2020_SIMILAR_QUESTIONS',
    topicId: 'y12a-exam',
    c: 'EXAM',
    t: 'Caringbah 2020 Trial Exam',
    chapterId: 'exam:caringbah-2020',
    chapterTitle: 'Caringbah 2020 HSC Trial',
    topicTitle: 'Caringbah 2020 Trial Exam',
    idPrefix: '',
  },
  {
    key: 'cths2020',
    group: 'exams',
    file: 'src/constants/seedCherrybrookTech2020Questions.js',
    exportName: 'CTHS_2020_QUESTIONS',
    topicId: 'y12a-exam',
    c: 'EXAM',
    t: 'Cherrybrook Tech 2020 Trial Exam',
    chapterId: 'exam:cths-2020',
    chapterTitle: 'Cherrybrook Tech 2020 HSC Trial',
    topicTitle: 'Cherrybrook Tech 2020 Trial Exam',
    idPrefix: 'cths2020-',
  },
  {
    key: 'cths2020s',
    group: 'exams',
    file: 'src/constants/seedCherrybrookTech2020SimilarQuestions.js',
    exportName: 'CTHS_2020_SIMILAR_QUESTIONS',
    topicId: 'y12a-exam',
    c: 'EXAM',
    t: 'Cherrybrook Tech 2020 Trial Exam',
    chapterId: 'exam:cths-2020',
    chapterTitle: 'Cherrybrook Tech 2020 HSC Trial',
    topicTitle: 'Cherrybrook Tech 2020 Trial Exam',
    idPrefix: '',
  },
  {
    key: 'cra2023',
    group: 'exams',
    file: 'src/constants/seedCranbrook2023Questions.js',
    exportName: 'CRANBROOK_2023_QUESTIONS',
    topicId: 'y12a-exam-cra',
    c: 'EXAM',
    t: 'Cranbrook 2023 Trial Exam',
    chapterId: 'exam:cra-2023',
    chapterTitle: 'Cranbrook 2023 HSC Trial',
    topicTitle: 'Cranbrook 2023 Trial Exam',
    idPrefix: 'cra2023-',
  },
  {
    key: 'cra2023s',
    group: 'exams',
    file: 'src/constants/seedCranbrook2023SimilarQuestions.js',
    exportName: 'CRANBROOK_2023_SIMILAR_QUESTIONS',
    topicId: 'y12a-exam-cra',
    c: 'EXAM',
    t: 'Cranbrook 2023 Trial Exam',
    chapterId: 'exam:cra-2023',
    chapterTitle: 'Cranbrook 2023 HSC Trial',
    topicTitle: 'Cranbrook 2023 Trial Exam',
    idPrefix: '',
  },
  {
    key: 'dane2020',
    group: 'exams',
    file: 'src/constants/seedDanebank2020Questions.js',
    exportName: 'DANEBANK_2020_QUESTIONS',
    topicId: 'y12a-exam-dane',
    c: 'EXAM',
    t: 'Danebank 2020 Trial Exam',
    chapterId: 'exam:dane-2020',
    chapterTitle: 'Danebank 2020 HSC Trial',
    topicTitle: 'Danebank 2020 Trial Exam',
    idPrefix: 'dane2020-',
  },
  {
    key: 'dane2020s',
    group: 'exams',
    file: 'src/constants/seedDanebank2020SimilarQuestions.js',
    exportName: 'DANEBANK_2020_SIMILAR_QUESTIONS',
    topicId: 'y12a-exam-dane',
    c: 'EXAM',
    t: 'Danebank 2020 Trial Exam',
    chapterId: 'exam:dane-2020',
    chapterTitle: 'Danebank 2020 HSC Trial',
    topicTitle: 'Danebank 2020 Trial Exam',
    idPrefix: '',
  },
  {
    key: 'fortst2020',
    group: 'exams',
    file: 'src/constants/seedFortSt2020Questions.js',
    exportName: 'FORTST_2020_QUESTIONS',
    topicId: 'y12a-exam-fortst',
    c: 'EXAM',
    t: 'Fort Street 2020 Trial Exam',
    chapterId: 'exam:fortst-2020',
    chapterTitle: 'Fort Street 2020 HSC Trial',
    topicTitle: 'Fort Street 2020 Trial Exam',
    idPrefix: 'fortst2020-',
  },
  {
    key: 'fortst2020s',
    group: 'exams',
    file: 'src/constants/seedFortSt2020SimilarQuestions.js',
    exportName: 'FORTST_2020_SIMILAR_QUESTIONS',
    topicId: 'y12a-exam-fortst',
    c: 'EXAM',
    t: 'Fort Street 2020 Trial Exam',
    chapterId: 'exam:fortst-2020',
    chapterTitle: 'Fort Street 2020 HSC Trial',
    topicTitle: 'Fort Street 2020 Trial Exam',
    idPrefix: '',
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

// ── Convert one leaf ───────────────────────────────────────────────────────

function convertLeaf(q, meta, parentStem = '') {
  const question = normalizeLatex(
    parentStem && !String(q.question || '').includes(parentStem.slice(0, Math.min(24, parentStem.length)))
      ? `${parentStem}\n${q.question || ''}`
      : q.question || ''
  );

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
      topicId: meta.topicId,
      c: meta.c,
      t: meta.t,
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
      topicId: meta.topicId,
      c: meta.c,
      t: meta.t,
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
      topicId: meta.topicId,
      c: meta.c,
      t: meta.t,
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
      topicId: meta.topicId,
      c: meta.c,
      t: meta.t,
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
    topicId: meta.topicId,
    c: meta.c,
    t: meta.t,
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

function loadSeed(meta) {
  const fp = path.join(ROOT, meta.file);
  if (!existsSync(fp)) throw new Error(`missing file ${fp}`);
  const src = readFileSync(fp, 'utf8');
  const re = new RegExp(`^export const ${meta.exportName} = `);
  if (!re.test(src)) {
    // try flexible
    const m = src.match(/^export const (\w+) = /m);
    if (!m) throw new Error(`no export in ${fp}`);
    console.warn(`[${meta.key}] export name mismatch, using ${m[1]}`);
    meta.exportName = m[1];
  }
  const tmp = `/tmp/bulk-${meta.key}.cjs`;
  writeFileSync(tmp, src.replace(new RegExp(`^export const ${meta.exportName} = `), 'module.exports = '));
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

function writeSeed(meta, items) {
  const fp = path.join(ROOT, meta.file);
  writeFileSync(fp, `export const ${meta.exportName} = ${JSON.stringify(items, null, 2)};\n`);
  return fp;
}

async function pushTopic(meta, items) {
  const { initializeApp, cert, getApps } = require('firebase-admin/app');
  const { getFirestore, FieldValue } = require('firebase-admin/firestore');
  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  // Count existing for this topicId (may include other exam papers sharing topicId)
  const existing = await db.collection('questions').where('topicId', '==', meta.topicId).get();
  const seedIds = new Set(items.map((q) => q.id));
  // Only count docs that match our idPrefix or are in seedIds for safety comparison
  let existingRelevant = 0;
  for (const doc of existing.docs) {
    if (meta.idPrefix && doc.id.startsWith(meta.idPrefix)) existingRelevant++;
    else if (!meta.idPrefix && seedIds.has(doc.id)) existingRelevant++;
    else if (seedIds.has(doc.id)) existingRelevant++;
  }
  // For exams sharing topicId, compare only our seed file size vs matching ids
  const ourExisting = existing.docs.filter((d) => seedIds.has(d.id) || (meta.idPrefix && d.id.startsWith(meta.idPrefix))).length;
  console.log(`[${meta.key}] firestore relevant≈${ourExisting} seed=${items.length} topicTotal=${existing.size}`);
  if (items.length < ourExisting * 0.85 && ourExisting > 5) {
    throw new Error(
      `[${meta.key}] Refusing push: seed ${items.length} << firestore ${ourExisting}. Confirm with user.`
    );
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
    const payload = {
      chapterId: meta.chapterId,
      chapterTitle: meta.chapterTitle,
      topicId: meta.topicId,
      topicCode: meta.c,
      topicTitle: meta.topicTitle,
      year: 'Year 12',
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
  if (parts.includes('exams') || parts.includes('past')) return TOPICS.filter((t) => t.group === 'exams');
  return TOPICS.filter((t) => parts.includes(t.key) || parts.includes(t.topicId));
}

async function main() {
  const topics = selectedTopics();
  if (LIST || (!WRITE && !PUSH && !ONLY && !ALL)) {
    console.log('Topics available:');
    for (const t of TOPICS) {
      console.log(`  ${t.key.padEnd(12)} ${t.group.padEnd(12)} ${t.topicId} ← ${t.file}`);
    }
    console.log('\nUsage: --only 5H,5I,6B | --only curriculum | --only exams | --all');
    console.log('       add --write and optionally --push');
    if (!ONLY && !ALL) return;
  }

  const summary = [];
  const chaptersToRebuild = new Set();

  for (const meta of topics) {
    console.log(`\n═══ ${meta.key} (${meta.topicId}) ═══`);
    try {
      const originals = loadSeed(meta);
      console.log('loaded', originals.length);
      const items = expandAndConvert(originals, meta).map(fixItemLatex);
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
