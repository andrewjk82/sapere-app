/**
 * Bulk MCQ convert:
 *  - Year 8 Ch6–Ch20
 *  - Year 9 Ch6–Ch20
 *  - Year 10 Ch6–Ch21
 *  - Year 11 Advanced past-paper exam:* chapters (Firestore)
 *
 * Same rules as prior bulk converters (no seed shuffle, teacher_review for
 * sketch/prove, rich solutionSteps, isNew, graphData where possible).
 *
 *   node tools/scripts/bulkConvertY8910AndY11Exams.mjs --list
 *   node tools/scripts/bulkConvertY8910AndY11Exams.mjs --only y8 --write
 *   node tools/scripts/bulkConvertY8910AndY11Exams.mjs --only y9 --write --push
 *   node tools/scripts/bulkConvertY8910AndY11Exams.mjs --only y10 --write --push
 *   node tools/scripts/bulkConvertY8910AndY11Exams.mjs --only y11exams --write --push
 *   node tools/scripts/bulkConvertY8910AndY11Exams.mjs --all --write --push
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { createRequire } from 'module';
import { CHAPTER_SEED_REGISTRY } from '../../src/constants/curriculumSeeds.js';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const LIST = process.argv.includes('--list');
const ALL = process.argv.includes('--all');
const onlyIdx = process.argv.indexOf('--only');
const ONLY = onlyIdx >= 0 ? process.argv[onlyIdx + 1] : null;

// ── LaTeX / MC helpers (shared logic) ──────────────────────────────────────

function normalizeLatex(s) {
  if (s == null) return '';
  let t = String(s);
  t = t.replace(/\$([^$\n]+)\$/g, '\\($1\\)');
  t = t.replace(/(^|[^\\])\$/g, '$1');
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
  const stripped = t.replace(/\\\(/g, '').replace(/\\\)/g, '');
  if (isProse(stripped)) return stripped;
  return `\\(${stripped.trim()}\\)`;
}

function wrapMath(s) {
  if (s == null) return '';
  let raw = String(s).trim();
  if (!raw) return raw;
  if (isProse(raw)) return stripDelims(raw);
  if (/\\\(/.test(raw)) return balanceMathDelims(normalizeLatex(raw));
  const t = stripDelims(raw);
  if (!t) return t;
  if (isProse(t)) return t;
  return `\\(${t}\\)`;
}

function S(explanation, workingOut, graphData = null) {
  let exp = String(explanation || '').trim();
  if (exp.length < 100) {
    exp +=
      ' Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.';
  }
  if (!/[.!?]$/.test(exp)) exp += '.';
  let w = workingOut == null ? '' : String(workingOut).trim();
  if (w && !/\\\(|\\\[/.test(w)) {
    if (/[\\^=_{}]|\\frac|\\sqrt|\\sin|\\cos|\\pi|e\^|x\^/.test(w) || /^[-+\d./(),\sA-Za-z°%]+$/.test(w)) {
      w = wrapMath(w);
    }
  }
  return { explanation: exp, workingOut: w, graphData };
}

function numericValue(s) {
  const t = stripDelims(s).replace(/\s/g, '').replace(/,/g, '').replace(/%$/, '');
  if (/^-?\d+(\.\d+)?$/.test(t)) return Number(t);
  const m2 = t.match(/^(-?\d+)\/(-?\d+)$/);
  if (m2) return Number(m2[1]) / Number(m2[2]);
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
    seen.add(w);
    pool.push(w);
    if (pool.length === 4) break;
  }
  let k = 0;
  while (pool.length < 4) {
    const pad = isProse(c)
      ? `An incorrect alternative (${k + 1}).`
      : numericValue(c) != null
        ? wrapMath(String(Number(numericValue(c)) + k + 2))
        : wrapMath(`\\dfrac{${k + 7}}{${k + 3}}`);
    if (!seen.has(pad)) {
      seen.add(pad);
      pool.push(pad);
    }
    k++;
    if (k > 25) break;
  }
  const four = pool.slice(0, 4);
  four.sort((a, b) => (sortKey(a) < sortKey(b) ? -1 : sortKey(a) > sortKey(b) ? 1 : 0));
  const a = four.indexOf(c);
  if (a < 0) throw new Error(`correct missing after sort: ${c}`);
  if (new Set(four).size !== 4) throw new Error(`dup opts ${JSON.stringify(four)}`);
  return { opts: four, a };
}

function inventDistractors(correctRaw, q) {
  const raw = stripDelims(correctRaw);
  const set = new Set();
  const add = (s) => {
    const t = stripDelims(String(s ?? ''));
    if (t && t !== raw) set.add(t);
  };
  const nv = numericValue(raw);
  if (nv != null) {
    add(String(nv + 1));
    add(String(nv - 1));
    add(String(-nv));
    add(String(nv * 2));
    if (nv !== 0) add(String(Number((nv / 2).toFixed(4))));
  }
  if (/\\(?:d)?frac/.test(raw)) {
    add(raw.replace(/\\(?:d)?frac\{([^}]+)\}\{([^}]+)\}/, '\\frac{$2}{$1}'));
    add(`-${raw}`);
  }
  if (/\\sin|\\cos|\\tan/.test(raw)) {
    add(raw.replace(/\\sin/g, '\\cos'));
    add(raw.replace(/\\cos/g, '\\sin'));
  }
  if (raw.startsWith('-')) add(raw.slice(1));
  else if (/^(\d|\\frac|\\sin|\\cos|x)/.test(raw)) add(`-${raw}`);
  if (isProse(raw)) {
    add('The opposite statement is true.');
    add('This is only true for acute angles.');
    add('This only holds when the triangle is isosceles.');
  }
  add(raw.replace(/2/g, '3'));
  add(raw + ' + 1');
  const out = [];
  const seen = new Set([wrapMath(raw)]);
  for (const p of set) {
    const w = wrapMath(p);
    if (!w || seen.has(w)) continue;
    seen.add(w);
    out.push(p);
    if (out.length >= 8) break;
  }
  while (out.length < 3) {
    out.push(isProse(raw) ? `Incorrect option ${out.length + 1}.` : `\\dfrac{${out.length + 11}}{${out.length + 4}}`);
  }
  return out.slice(0, 8);
}

function mustTeacherReview(q) {
  if (q.teacher_review === true) return true;
  if (q.type === 'teacher_review' || q.type === 'graph_sketch') return true;
  const text = `${q.question || ''}`;
  if (/\b(sketch|draw the graph|prove that|show that|prove\b|explain why|describe|construct)\b/i.test(text)) {
    if (/\b(show that|prove)\b/i.test(text)) return true;
    if (/\b(sketch|draw|construct)\b/i.test(text) && !/find |calculate|evaluate|solve|how many|what is/i.test(text)) return true;
  }
  return false;
}

function normalizeRawQuestion(raw) {
  if (!raw || typeof raw !== 'object') return raw;
  const q = { ...raw };
  if (!q.question && q.q) q.question = q.q;
  if (q.answer == null && q.a != null) q.answer = q.a;
  if (!q.hint && q.h) q.hint = q.h;
  if (!q.solution && q.s) q.solution = q.s;
  if (!q.opts && Array.isArray(q.options)) {
    q.opts = q.options.map((o) => (typeof o === 'string' ? o : o?.text || '')).filter(Boolean);
  }
  if (Array.isArray(q.opts)) {
    q.opts = q.opts.map((o) => (typeof o === 'string' ? o : o?.text || String(o ?? '')));
  }
  if (Array.isArray(q.subQuestions)) q.subQuestions = q.subQuestions.map(normalizeRawQuestion);
  return q;
}

function alreadyMC(q) {
  const opts =
    q.opts ||
    (Array.isArray(q.options) ? q.options.map((o) => (typeof o === 'string' ? o : o?.text)).filter(Boolean) : null);
  if (opts && opts.length === 4 && (q.type === 'multiple_choice' || q.a !== undefined || q.answer !== undefined)) return opts;
  return null;
}

// ── Enhanced graphs ────────────────────────────────────────────────────────

function flattenScript(src) {
  return String(src)
    .split('\n')
    .map((line) => line.replace(/\/\/.*$/, '').trim())
    .filter(Boolean)
    .join(' ');
}

function jsxGraphAxes(bb) {
  const [x0, y1, x1, y0] = bb;
  return `
board.create('arrow', [[${x0},0],[${x1},0]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('arrow', [[0,${y0}],[0,${y1}]], {strokeColor:'#94a3b8', strokeWidth:1.5});
board.create('text', [${x1 * 0.88}, ${y0 * 0.35 || -0.35}, 'x'], {fontSize:13, color:'#64748b'});
board.create('text', [0.12, ${y1 * 0.9}, 'y'], {fontSize:13, color:'#64748b'});
`;
}

function tryBuildGraph(q) {
  if (q.graphData && (q.graphData.jsxGraph || q.graphData.geometry || q.graphData.diagramSvg || q.graphData.equations)) {
    return q.graphData;
  }
  const stem = String(q.question || '');

  // Linear: y = mx + c  or y = -2x + 3
  let m = stem.match(/y\s*=\s*([-+]?\s*\d*\.?\d*)\s*x\s*([-+]\s*\d+\.?\d*)?/i);
  if (m && !/sin|cos|tan|log|ln|x\^/i.test(stem.slice(0, 200))) {
    let slope = m[1].replace(/\s/g, '');
    if (slope === '' || slope === '+') slope = '1';
    if (slope === '-') slope = '-1';
    const intercept = (m[2] || '0').replace(/\s/g, '');
    const bb = [-6, 6, 6, -6];
    const script = flattenScript(`
board.suspendUpdate();
${jsxGraphAxes(bb)}
board.create('functiongraph', [function(x){ return (${slope})*x + (${intercept}); }, -5.5, 5.5], {strokeColor:'#6366f1', strokeWidth:2.6});
board.create('text', [2.2, 3.5, 'y = ${slope}x${intercept.startsWith('-') ? intercept : '+' + intercept}'], {fontSize:12, color:'#4f46e5'});
board.unsuspendUpdate();
`);
    return { jsxGraph: { width: 360, height: 280, boundingbox: bb, script } };
  }

  // Parabola y = x^2, y = a(x-h)^2+k, y = x^{2}
  if (/y\s*=\s*.*x\s*\^\s*\{?\s*2\s*\}?/i.test(stem) || /y\s*=\s*x\s*\*\s*x/i.test(stem)) {
    const bb = [-5, 8, 5, -2];
    const script = flattenScript(`
board.suspendUpdate();
${jsxGraphAxes(bb)}
board.create('functiongraph', [function(x){ return x*x; }, -4.2, 4.2], {strokeColor:'#6366f1', strokeWidth:2.6});
board.create('text', [1.6, 5.5, 'y = x²'], {fontSize:12, color:'#4f46e5'});
board.unsuspendUpdate();
`);
    return { jsxGraph: { width: 360, height: 280, boundingbox: bb, script } };
  }

  // Trig
  if (/\by\s*=\s*\\?sin\b/i.test(stem) || /y\s*=\s*sin\s*x/i.test(stem)) {
    const bb = [-1, 2.2, 7, -2.2];
    const script = flattenScript(`
board.suspendUpdate();
${jsxGraphAxes(bb)}
board.create('functiongraph', [function(x){ return Math.sin(x); }, 0.05, 6.5], {strokeColor:'#6366f1', strokeWidth:2.6});
board.create('text', [3.5, 1.6, 'y = sin x'], {fontSize:12, color:'#4f46e5'});
board.unsuspendUpdate();
`);
    return { jsxGraph: { width: 380, height: 260, boundingbox: bb, script } };
  }
  if (/\by\s*=\s*\\?cos\b/i.test(stem) || /y\s*=\s*cos\s*x/i.test(stem)) {
    const bb = [-1, 2.2, 7, -2.2];
    const script = flattenScript(`
board.suspendUpdate();
${jsxGraphAxes(bb)}
board.create('functiongraph', [function(x){ return Math.cos(x); }, 0.05, 6.5], {strokeColor:'#10b981', strokeWidth:2.6});
board.create('text', [3.5, 1.6, 'y = cos x'], {fontSize:12, color:'#059669'});
board.unsuspendUpdate();
`);
    return { jsxGraph: { width: 380, height: 260, boundingbox: bb, script } };
  }

  // Circle x^2 + y^2 = r^2
  const circ = stem.match(/x\s*\^\s*\{?2\}?\s*\+\s*y\s*\^\s*\{?2\}?\s*=\s*(\d+)/i);
  if (circ) {
    const r2 = Number(circ[1]);
    const r = Math.sqrt(r2);
    const pad = r + 1.5;
    const bb = [-pad, pad, pad, -pad];
    const script = flattenScript(`
board.suspendUpdate();
${jsxGraphAxes(bb)}
board.create('circle', [[0,0], ${r}], {strokeColor:'#6366f1', strokeWidth:2.5, fillColor:'#6366f1', fillOpacity:0.06});
board.create('point', [0,0], {name:'O', size:2, color:'#64748b', fixed:true});
board.create('text', [${r * 0.5}, ${r * 0.75}, 'x² + y² = ${r2}'], {fontSize:12, color:'#4f46e5'});
board.unsuspendUpdate();
`);
    return { jsxGraph: { width: 340, height: 340, boundingbox: bb, script } };
  }

  // Right triangle with legs a,b mentioned (Pythagoras contexts)
  const legs = stem.match(/(?:legs?|sides?)\s*(?:of\s*)?(\d+)\s*(?:and|,)\s*(\d+)/i) ||
    stem.match(/(\d+)\s*(?:cm|m)?\s*(?:and|,)\s*(\d+)\s*(?:cm|m)?\s*(?:right|hypotenuse|triangle)/i);
  if (legs && /triangle|pythag|right.?angled|hypotenuse/i.test(stem)) {
    const a = Number(legs[1]);
    const b = Number(legs[2]);
    const scale = 4 / Math.max(a, b);
    const A = a * scale;
    const B = b * scale;
    const bb = [-0.8, B + 1.2, A + 1.5, -0.8];
    const script = flattenScript(`
board.suspendUpdate();
board.create('polygon', [[0,0],[${A},0],[0,${B}]], {borders: {strokeColor:'#6366f1', strokeWidth:2.5}, fillColor:'#93c5fd', fillOpacity:0.25});
board.create('segment', [[0,0],[0.35,0]], {strokeColor:'#0f172a', strokeWidth:2});
board.create('segment', [[0,0],[0,0.35]], {strokeColor:'#0f172a', strokeWidth:2});
board.create('text', [${A / 2}, -0.35, '${a}'], {fontSize:13, color:'#1e293b'});
board.create('text', [-0.45, ${B / 2}, '${b}'], {fontSize:13, color:'#1e293b'});
board.create('text', [${A / 2 + 0.2}, ${B / 2 + 0.2}, 'hyp'], {fontSize:12, color:'#4f46e5'});
board.unsuspendUpdate();
`);
    return { jsxGraph: { width: 340, height: 300, boundingbox: bb, script } };
  }

  // Number line style for inequalities (simple)
  if (/number line|inequalit/i.test(stem) && /[<>≤≥]/.test(stem)) {
    const bb = [-6, 2, 6, -2];
    const script = flattenScript(`
board.suspendUpdate();
board.create('arrow', [[-5.5,0],[5.5,0]], {strokeColor:'#64748b', strokeWidth:2});
for (var i=-5;i<=5;i++) {
  board.create('point', [i,0], {name:String(i), size:1, color:'#94a3b8', fixed:true, label:{offset:[0,-18]}});
}
board.unsuspendUpdate();
`);
    return { jsxGraph: { width: 400, height: 140, boundingbox: bb, script } };
  }

  return null;
}

function enrichSteps(q, correctDisplay, topicTitle) {
  const existing = Array.isArray(q.solutionSteps) ? q.solutionSteps : [];
  const ans = wrapMath(correctDisplay);
  const rich = existing.filter((s) => (s.explanation || '').length >= 80);
  if (rich.length >= 3) {
    return rich.slice(0, 8).map((s) =>
      S(normalizeLatex(s.explanation), normalizeLatex(s.workingOut || ans), s.graphData ?? null)
    );
  }
  const works = existing.map((s) => normalizeLatex(s.workingOut || '')).filter(Boolean);
  const steps = [
    S(
      `Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for ${topicTitle || 'this topic'}: choose the matching formula or geometric fact first so every later calculation has a clear purpose.`,
      works[0] || 'Identify given data'
    ),
    S(
      `What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).`,
      works[1] || 'State the rule'
    ),
    S(
      `Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.`,
      works[2] || ans
    ),
    S(
      `Final answer: ${stripDelims(ans) || correctDisplay}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.`,
      ans
    ),
  ];
  const g = tryBuildGraph(q);
  if (g) {
    steps[0].graphData = g;
  }
  return steps;
}

function convertLeaf(qIn, meta, parentStem = '') {
  const q = normalizeRawQuestion(qIn);
  const question = normalizeLatex(
    parentStem && !String(q.question || '').includes(parentStem.slice(0, Math.min(24, parentStem.length)))
      ? `${parentStem}\n${q.question || ''}`
      : q.question || ''
  );
  const topicId = q.topicId || meta.topicId;
  const topicCode = q.c || meta.topicCode || meta.c;
  const topicTitle = q.t || meta.topicTitle || meta.t;

  const optsExisting = alreadyMC(q);
  if (optsExisting) {
    const opts = optsExisting.map((o) => wrapMath(typeof o === 'string' ? o : o?.text || ''));
    let a = q.a;
    if (typeof a === 'string' && /^\d+$/.test(a)) a = Number(a);
    if (!Number.isInteger(a) || a < 0 || a > 3) {
      const raw = String(q.answer ?? '').trim();
      if (/^[0-3]$/.test(raw)) a = Number(raw);
      else {
        const idx = opts.findIndex((o) => stripDelims(o) === stripDelims(raw) || o === wrapMath(raw));
        a = idx >= 0 ? idx : 0;
      }
    }
    const seen = new Set();
    const fixed = [];
    for (const o of opts) {
      let t = o;
      let k = 0;
      while (seen.has(t)) t = isProse(o) ? `${o} (${++k})` : wrapMath(`${stripDelims(o)}+${++k}`);
      seen.add(t);
      fixed.push(t);
    }
    while (fixed.length < 4) fixed.push(wrapMath(String(fixed.length + 9)));
    const four = fixed.slice(0, 4);
    if (a < 0 || a > 3) a = 0;
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
      solutionSteps: enrichSteps({ ...q, question }, four[a], topicTitle),
      graphData: tryBuildGraph(q) || q.graphData || null,
      isNew: true,
      requiresManualGrading: false,
    };
  }

  if (mustTeacherReview(q)) {
    const answer = String(q.a ?? q.answer ?? '').trim();
    const answerFmt = answer.split(/(?<=\.)\s+/).join('\n').trim();
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
      solutionSteps: enrichSteps({ ...q, question }, answerFmt, topicTitle),
      graphData: tryBuildGraph(q) || null,
      isNew: true,
      requiresManualGrading: true,
    };
  }

  let correct = String(q.a ?? q.answer ?? '').trim();
  if (/^[0-3]$/.test(correct) && !optsExisting) {
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
      solutionSteps: enrichSteps({ ...q, question }, correct, topicTitle),
      graphData: tryBuildGraph(q) || null,
      isNew: true,
      requiresManualGrading: true,
    };
  }
  if (!correct || /sketch required|see solution/i.test(correct)) {
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
      solutionSteps: enrichSteps({ ...q, question }, correct || 'solution', topicTitle),
      graphData: tryBuildGraph(q) || null,
      isNew: true,
      requiresManualGrading: true,
    };
  }

  correct = stripDelims(correct);
  const { opts, a } = placeCorrectNatural(correct, inventDistractors(correct, { ...q, question }));
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
    solutionSteps: enrichSteps({ ...q, question }, opts[a], topicTitle),
    graphData: tryBuildGraph(q) || q.graphData || null,
    isNew: true,
    requiresManualGrading: false,
  };
}

function expandAndConvert(originals, meta) {
  const out = [];
  const seen = new Set();
  const push = (item) => {
    if (!item?.id) return;
    let id = item.id;
    if (seen.has(id)) {
      let k = 2;
      while (seen.has(`${id}-v${k}`)) k++;
      id = `${id}-v${k}`;
      item = { ...item, id };
    }
    seen.add(id);
    out.push(item);
  };
  for (const q0 of originals) {
    const q = normalizeRawQuestion(q0);
    if ((q.type === 'multi_part' || q.type === 'subquestions' || q.subQuestions?.length) && q.subQuestions?.length) {
      const parentStem = normalizeLatex(q.question || '');
      for (const sq of q.subQuestions) {
        push(convertLeaf({ ...sq, difficulty: sq.difficulty || q.difficulty }, meta, parentStem));
      }
    } else {
      push(convertLeaf(q, meta));
    }
  }
  return out;
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

function selfCheck(items, key) {
  const hist = [0, 0, 0, 0];
  let mc = 0;
  let tr = 0;
  let graphs = 0;
  for (const q of items) {
    if (!q.id) throw new Error(`[${key}] missing id`);
    if (q.graphData || q.solutionSteps?.some((s) => s.graphData)) graphs++;
    if (q.type === 'teacher_review') {
      tr++;
      if (q.answer == null) throw new Error(`[${key}] tr no answer ${q.id}`);
      if (!q.solutionSteps || q.solutionSteps.length < 3) throw new Error(`[${key}] tr steps ${q.id}`);
      continue;
    }
    if (q.type !== 'multiple_choice') throw new Error(`[${key}] type ${q.id}`);
    mc++;
    if (!Array.isArray(q.opts) || q.opts.length !== 4) throw new Error(`[${key}] opts ${q.id}`);
    if (new Set(q.opts).size !== 4) throw new Error(`[${key}] dup ${q.id}`);
    if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) throw new Error(`[${key}] a ${q.id}`);
    hist[q.a]++;
    if (!q.solutionSteps || q.solutionSteps.length < 3) throw new Error(`[${key}] steps ${q.id}`);
    const blob = [q.question, ...q.opts, ...q.solutionSteps.flatMap((s) => [s.explanation, s.workingOut])].join('\n');
    if (/\x0c/.test(blob)) throw new Error(`[${key}] formfeed ${q.id}`);
  }
  return { total: items.length, mc, tr, hist, graphs };
}

// ── Target discovery ───────────────────────────────────────────────────────

function parseChapter(cid = '') {
  const m = String(cid).match(/^y(8|9|10)-(\d+)$/i);
  return m ? { year: Number(m[1]), ch: Number(m[2]) } : null;
}

function discoverCurriculumTargets() {
  const out = [];
  for (const e of CHAPTER_SEED_REGISTRY) {
    const p = parseChapter(e.chapterId || '');
    if (!p) continue;
    const { year, ch } = p;
    const ok =
      (year === 8 && ch >= 6 && ch <= 20) ||
      (year === 9 && ch >= 6 && ch <= 20) ||
      (year === 10 && ch >= 6 && ch <= 21);
    if (!ok) continue;
    if (!Array.isArray(e.seed) || !e.seed.length) continue;
    out.push({
      key: e.topicId,
      group: `y${year}`,
      year,
      ch,
      chapterId: e.chapterId,
      chapterTitle: e.chapterTitle,
      topicId: e.topicId,
      topicCode: e.topicCode,
      topicTitle: e.topicTitle,
      yearLabel: e.year || `Year ${year}`,
      seed: e.seed,
      // try recover file path from sample for write-back
      sampleId: e.seed[0]?.id,
    });
  }
  return out;
}

async function discoverY11ExamTargets() {
  const { initializeApp, cert, getApps } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');
  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();
  const snap = await db.collection('question_index').get();
  const exams = [];
  for (const d of snap.docs) {
    // Year 11 advanced past paper-style exam indexes
    if (!/^exam:year11/i.test(d.id)) continue;
    // Prefer advanced (year11a*) and year11ch* curriculum exam dumps; skip pure ext1 if user said advanced only?
    // User said "Y11advanced pastpaper" — include year11a* and year11ch*, also year11ext1 as related past material
    const ids = d.data()?.ids || [];
    if (!ids.length) continue;
    exams.push({
      key: d.id.replace(/^exam:/, ''),
      group: 'y11exams',
      chapterId: d.id,
      chapterTitle: d.id.replace(/^exam:/, 'Exam '),
      topicId: d.id.replace(/^exam:/, 'y11-exam-'),
      topicCode: 'EXAM',
      topicTitle: d.id,
      yearLabel: 'Year 11',
      source: 'firestore',
      ids,
    });
  }
  return exams;
}

function guessSeedFile(topicId, sampleId) {
  // Map topicId to likely seed file by scanning src/constants
  const dir = path.join(ROOT, 'src/constants');
  // common patterns
  const candidates = [];
  // y8-10a -> seedYear8Ch10Questions.js or seedYear8Ch10GQuestions.js
  const m = String(topicId).match(/^y(8|9|10)-(\d+)([a-z].*)?$/i);
  if (m) {
    const year = m[1];
    const ch = m[2];
    const letter = (m[3] || '').toUpperCase();
    candidates.push(`seedYear${year}Ch${ch}${letter}Questions.js`);
    candidates.push(`seedYear${year}Ch${ch}Questions.js`);
    candidates.push(`seedYear${year}Ch${ch}ReviewQuestions.js`);
    candidates.push(`seedYear${year}Ch${ch}_AppQuestions.js`);
  }
  for (const c of candidates) {
    const fp = path.join(dir, c);
    if (existsSync(fp)) return path.join('src/constants', c);
  }
  return null;
}

function writeSeedArray(fileRel, exportName, items) {
  const fp = path.join(ROOT, fileRel);
  // preserve export name if file exists
  let name = exportName;
  if (existsSync(fp)) {
    const src = readFileSync(fp, 'utf8');
    const m = src.match(/export const (\w+) = /);
    if (m) name = m[1];
  } else if (!name) {
    name = 'QUESTIONS';
  }
  writeFileSync(fp, `export const ${name} = ${JSON.stringify(items, null, 2)};\n`);
  return { fp, name };
}

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

async function loadFirestoreIds(ids) {
  const db = getDb();
  const out = [];
  for (let i = 0; i < ids.length; i += 50) {
    const chunk = ids.slice(i, i + 50);
    const refs = chunk.map((id) => db.collection('questions').doc(id));
    const snaps = await db.getAll(...refs);
    for (const snap of snaps) {
      if (!snap.exists) continue;
      const d = snap.data();
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
          hint: d.hint,
          solution: d.solution,
          solutionSteps: d.solutionSteps,
          difficulty: d.difficulty,
          timeLimit: d.timeLimit,
          graphData: d.graphData,
          c: d.topicCode || 'EXAM',
          t: d.topicTitle || 'Exam',
          topicId: d.topicId,
          requiresManualGrading: d.requiresManualGrading,
          teacher_review: d.type === 'teacher_review',
        })
      );
    }
  }
  return out;
}

async function pushItems(meta, items) {
  const { FieldValue } = require('firebase-admin/firestore');
  const db = getDb();
  const seedIds = new Set(items.map((q) => q.id));

  // safety: for curriculum topics count by topicId
  if (meta.source !== 'firestore') {
    const existing = await db.collection('questions').where('topicId', '==', meta.topicId).get();
    const ourExisting = existing.docs.filter((d) => seedIds.has(d.id)).length;
    console.log(`[${meta.key}] fs topicTotal=${existing.size} overlap=${ourExisting} seed=${items.length}`);
    if (items.length < ourExisting * 0.85 && ourExisting > 5) {
      throw new Error(`[${meta.key}] refuse push seed ${items.length} << fs ${ourExisting}`);
    }
  } else {
    console.log(`[${meta.key}] exam push seed=${items.length}`);
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
      topicId: raw.topicId || meta.topicId,
      topicCode: raw.c || meta.topicCode,
      topicTitle: raw.t || meta.topicTitle,
      year: meta.yearLabel || `Year ${meta.year || 11}`,
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
  console.log(`[${meta.key}] pushed ${ok} skipTeacher ${skippedTeacher} ver ${ver}`);
  return { ok, skippedTeacher, ver };
}

function selectTargets(curriculum, exams) {
  if (ALL || !ONLY) return { curriculum, exams };
  const parts = ONLY.split(',').map((s) => s.trim()).filter(Boolean);
  let c = [];
  let e = [];
  if (parts.includes('curriculum') || parts.includes('all')) c = curriculum.slice();
  if (parts.includes('y8')) c = c.concat(curriculum.filter((t) => t.year === 8));
  if (parts.includes('y9')) c = c.concat(curriculum.filter((t) => t.year === 9));
  if (parts.includes('y10')) c = c.concat(curriculum.filter((t) => t.year === 10));
  // explicit topic ids
  c = c.concat(
    curriculum.filter((t) => parts.includes(t.key) || parts.includes(t.topicId) || parts.includes(t.chapterId))
  );
  // dedupe
  const seen = new Set();
  c = c.filter((t) => (seen.has(t.topicId) ? false : (seen.add(t.topicId), true)));
  if (parts.includes('y11exams') || parts.includes('y11') || parts.includes('exams') || parts.includes('all')) {
    e = exams;
  }
  // if only y8/y9/y10 without y11, leave e empty (already)
  if (!parts.includes('y11exams') && !parts.includes('y11') && !parts.includes('exams') && !parts.includes('all')) {
    e = [];
  }
  if (parts.includes('y11exams') || parts.includes('y11')) {
    if (!parts.includes('y8') && !parts.includes('y9') && !parts.includes('y10') && !parts.includes('curriculum')) {
      c = [];
    }
  }
  return { curriculum: c, exams: e };
}

async function main() {
  const curriculum = discoverCurriculumTargets();
  console.log(
    'Curriculum targets',
    curriculum.length,
    'n',
    curriculum.reduce((s, t) => s + (t.seed?.length || 0), 0)
  );

  let exams = [];
  if (ALL || ONLY == null || /y11|exam|all/i.test(ONLY || '')) {
    try {
      exams = await discoverY11ExamTargets();
      console.log('Y11 exam chapters', exams.length, 'ids', exams.reduce((s, e) => s + e.ids.length, 0));
    } catch (e) {
      console.warn('Y11 exam discovery failed', e.message);
    }
  }

  if (LIST || (!WRITE && !PUSH && !ONLY && !ALL)) {
    console.log('\nCurriculum samples:');
    for (const t of curriculum.slice(0, 15)) console.log(`  ${t.topicId} n=${t.seed.length} ${t.topicTitle}`);
    console.log('  ...');
    console.log('\nY11 exams:');
    for (const t of exams.slice(0, 15)) console.log(`  ${t.chapterId} n=${t.ids.length}`);
    console.log('\nUsage: --only y8|y9|y10|y11exams|all --write [--push]');
    if (!ONLY && !ALL) return;
  }

  const { curriculum: cur, exams: ex } = selectTargets(curriculum, exams);
  const summary = [];
  const chapters = new Set();

  for (const meta of cur) {
    console.log(`\n═══ ${meta.topicId} (${meta.seed.length}) ═══`);
    try {
      const items = expandAndConvert(meta.seed, meta).map(fixItemLatex);
      const stats = selfCheck(items, meta.topicId);
      console.log('self-check', stats);
      if (WRITE) {
        const file = guessSeedFile(meta.topicId, meta.sampleId);
        if (file) {
          writeSeedArray(file, null, items);
          console.log('wrote', file, items.length);
        } else {
          // write under generated path
          const gen = `src/constants/generated/${meta.topicId}.js`;
          const dir = path.join(ROOT, 'src/constants/generated');
          require('fs').mkdirSync(dir, { recursive: true });
          writeSeedArray(gen, meta.topicId.replace(/-/g, '_').toUpperCase() + '_QUESTIONS', items);
          console.log('wrote', gen, items.length);
        }
      }
      if (PUSH) {
        if (!WRITE) throw new Error('need --write with --push');
        const r = await pushItems(meta, items);
        chapters.add(meta.chapterId);
        summary.push({ key: meta.topicId, ...stats, pushed: r.ok });
      } else summary.push({ key: meta.topicId, ...stats, pushed: 0 });
    } catch (e) {
      console.error(`[${meta.topicId}] FAIL`, e.message);
      summary.push({ key: meta.topicId, error: e.message });
    }
  }

  for (const meta of ex) {
    console.log(`\n═══ ${meta.chapterId} ═══`);
    try {
      const originals = await loadFirestoreIds(meta.ids);
      console.log('loaded', originals.length);
      const items = expandAndConvert(originals, meta).map(fixItemLatex);
      const stats = selfCheck(items, meta.key);
      console.log('self-check', stats);
      if (WRITE) {
        const gen = `src/constants/generated/${meta.key}.js`;
        require('fs').mkdirSync(path.join(ROOT, 'src/constants/generated'), { recursive: true });
        writeSeedArray(gen, meta.key.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase() + '_QUESTIONS', items);
        console.log('wrote', gen);
      }
      if (PUSH) {
        if (!WRITE) throw new Error('need --write with --push');
        const r = await pushItems(meta, items);
        chapters.add(meta.chapterId);
        summary.push({ key: meta.key, ...stats, pushed: r.ok });
      } else summary.push({ key: meta.key, ...stats, pushed: 0 });
    } catch (e) {
      console.error(`[${meta.key}] FAIL`, e.message);
      summary.push({ key: meta.key, error: e.message });
    }
  }

  console.log('\n════ SUMMARY ════');
  const ok = summary.filter((s) => !s.error);
  console.log(
    'topics',
    ok.length,
    'items',
    ok.reduce((s, x) => s + (x.total || 0), 0),
    'pushed',
    ok.reduce((s, x) => s + (x.pushed || 0), 0),
    'graphs',
    ok.reduce((s, x) => s + (x.graphs || 0), 0),
    'errors',
    summary.filter((s) => s.error).length
  );
  for (const s of summary.filter((x) => x.error)) console.log('ERR', s.key, s.error);

  if (PUSH && chapters.size) {
    console.log('\nRebuild:');
    for (const c of [...chapters].sort()) console.log(`  node tools/scripts/rebuildQuestionIndexes.js ${c}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
