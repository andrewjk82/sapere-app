/**
 * Conversions between the canonical content schema (content/schema.js) and the legacy Firestore
 * document shape the React components were written against. Pure, dependency-free; used by the
 * browser (contentLoader) and by the Vercel API (api/content.js).
 */

// ------------------------------------------------------------------ canonical → legacy
const TYPE_BACK = { mc: 'multiple_choice', short: 'short_answer', review: 'teacher_review', multipart: 'multi_part' };

export const figBack = (fig) => {
  if (!fig) return null;
  const g = {};
  if (fig.svg) g.svg = fig.svg;
  if (fig.jsxGraph) g.jsxGraph = fig.jsxGraph;
  if (fig.geometry) g.geometry = fig.geometry;
  if (fig.html) g.html = fig.html;
  if (fig.source) g.diagramSource = fig.source;
  if (fig.plot) Object.assign(g, fig.plot);
  if (fig.raw) Object.assign(g, fig.raw);
  return Object.keys(g).length ? g : null;
};
const optBack = (o) => (typeof o === 'string'
  ? { text: o, imageUrl: '' }
  : { text: o.text || '', imageUrl: o.image || '', ...(o.figure ? { graphData: figBack(o.figure) } : {}) });

/** canonical question → the Firestore document shape every component expects */
export const toLegacy = (q, ctx = {}) => {
  // `mc:true` on a multipart parent means "this parent ALSO carries a vestigial combined-answer MC
  // shape" (kept for provenance from the original data) — it must NEVER make the reported top-level
  // `type` read 'multiple_choice', because a multipart ALWAYS has `parts` (schema-enforced), and any
  // consumer that trusts `type` without separately checking `subQuestions.length` (ExamPrep.jsx did,
  // until the 2026-09-17 fix) would render the vestigial paired options as if they were the actual
  // question instead of the real per-part sub-questions — exactly the "정답이 이상해요" report on
  // y9-5a-7. `options`/`answer` below still get the MC shape (harmless — no current consumer reads a
  // multipart's own options/answer when subQuestions is non-empty) so nothing else changes.
  const isMcOptions = q.type === 'mc' || (q.type === 'multipart' && q.mc === true);
  const reportedType = q.type === 'multipart' ? 'multi_part' : (q.type === 'mc' ? 'multiple_choice' : (TYPE_BACK[q.type] || 'short_answer'));
  const d = {
    id: q.id,
    type: q.type === 'short' && q.blanks?.length ? 'fill_blank' : reportedType,
    question: q.stem || '',
    options: (q.options || []).map(optBack),
    answer: isMcOptions ? (q.answer == null ? '' : String(q.answer)) : (q.answer ?? ''),
    hint: q.hint || '',
    solution: q.solution || '',
    solutionSteps: (q.steps || []).map((s) => ({ explanation: s.explain || '', workingOut: s.work || '', graphData: figBack(s.figure), ...(s.ext || {}) })),
    graphData: figBack(q.figure),
    questionImage: q.image || '',
    subQuestions: (q.parts || []).map((p) => toLegacy(p, ctx)),
    blanks: q.blanks || [],
    acceptedAnswers: q.accepted || [],
    difficulty: q.difficulty || '',
    timeLimit: q.timeLimit || 120,
    xp: q.xp ?? null,
    keyPoints: Array.isArray(q.keyPoints) ? q.keyPoints : [],
    requiresManualGrading: q.manual === true,
    isManual: true,
    isActive: q.inactive !== true,
    topicId: ctx.synthetic ? '' : (ctx.topicId || ''),
    topicCode: ctx.code || '',
    topicTitle: ctx.title || '',
    chapterId: ctx.chapterId || '',
    chapterTitle: ctx.chapterTitle || '',
    year: ctx.year || '',
    examPaper: q.meta?.examPaper || '',
    origin: q.meta?.origin || 'seed',
    title: `${(q.stem || '').replace(/\$/g, '').slice(0, 30)}...`,
  };
  if (q.hscType) d.questionType = q.hscType;
  if (q.meta) for (const k of ['source', 'sourcePaper', 'school', 'examType', 'course', 'grade', 'tags', 'reviewStatus']) if (q.meta[k] != null) d[k] = q.meta[k];
  if (q.dna) Object.assign(d, q.dna);
  if (q.ext) Object.assign(d, q.ext);
  return d;
};

// ------------------------------------------------------------------ legacy → canonical
const TYPE_FWD = { multiple_choice: 'mc', mcq: 'mc', teacher_review: 'review', short_answer: 'short', fill_blank: 'short', subquestions: 'multipart', multi_part: 'multipart', multipart: 'multipart', composite: 'multipart', group: 'multipart', parent: 'multipart' };
const str = (v) => (v == null ? '' : String(v));
const nz = (v) => str(v).trim().length > 0;
const optText = (o) => (o && typeof o === 'object' ? str(o.text) : str(o));

export const figFwd = (gd) => {
  if (!gd || typeof gd !== 'object') return undefined;
  const out = {};
  const svg = gd.svg || gd.diagramSvg;
  if (nz(svg) && (/^\s*<svg/.test(str(svg)) || /^fig:[0-9a-f]{10}$/.test(str(svg)))) out.svg = str(svg);
  if (gd.jsxGraph) out.jsxGraph = gd.jsxGraph;
  if (gd.geometry) out.geometry = gd.geometry;
  if (nz(gd.html)) out.html = gd.html;
  if (gd.diagramSource) out.source = gd.diagramSource;
  if (gd.boundingbox && gd.elements && !gd.jsxGraph) out.raw = gd;
  if (gd.equations || gd.points) out.plot = { equations: gd.equations, points: gd.points, config: gd.config };
  return Object.keys(out).length ? out : undefined;
};
const stepsFwd = (arr) => (Array.isArray(arr) ? arr : []).map((s) => {
  const { explanation, explain, workingOut, work, graphData, graphDataStr, ...rest } = s || {};
  const o = { explain: str(explanation ?? explain) };
  if (nz(workingOut ?? work)) o.work = str(workingOut ?? work);
  const fig = figFwd(graphData); if (fig) o.figure = fig;
  if (Object.keys(rest).length) o.ext = rest;
  return o;
});
const META_KEYS = ['source', 'sourcePaper', 'sourceId', 'sourcePdf', 'school', 'examType', 'course', 'grade', 'tags', 'reviewStatus', 'verificationNeeded', 'manualReview', 'topic'];
const DNA_KEYS = ['dnaId', 'dnaConfidence', 'reasoning_blueprint', 'hasReasoningBlueprint', 'dnaReclassifiedAt', 'dnaReclassifiedReason'];
const KNOWN = new Set(['id', 'type', 'question', 'options', 'answer', 'acceptedAnswers', 'hint', 'solution', 'solutionSteps', 'graphData', 'questionImage', 'subQuestions', 'blanks', 'difficulty', 'timeLimit', 'xp', 'keyPoints', 'requiresManualGrading', 'isManual', 'isActive', 'origin', 'examPaper', 'questionType', 'topicId', 'topicCode', 'topicTitle', 'chapterId', 'chapterTitle', 'year', 'title', 'createdAt', 'updatedAt', 'isNew', 'bankVersion', 'contentBump', ...META_KEYS, ...DNA_KEYS]);

/**
 * Legacy document (what QuestionBankModal saves) → canonical question. Throws on an MC whose answer
 * cannot be resolved to an option index. `prev` (canonical) supplies fields the form does not carry
 * (dna, ext, meta.source…) so an edit never drops them.
 */
export const fromLegacy = (d, prev = null) => {
  const hasParts = Array.isArray(d.subQuestions) && d.subQuestions.length > 0;
  const isMcType = d.type === 'multiple_choice' || d.type === 'mcq';
  const type = hasParts ? 'multipart' : (TYPE_FWD[d.type] || (d.options?.length ? 'mc' : 'short'));
  const q = { id: str(d.id || prev?.id), type, stem: str(d.question) };
  const diff = str(d.difficulty).toLowerCase(); if (['easy', 'medium', 'hard'].includes(diff)) q.difficulty = diff;
  const fig = figFwd(d.graphData); if (fig) q.figure = fig;
  if (nz(d.questionImage)) q.image = str(d.questionImage);
  const opts = Array.isArray(d.options) ? d.options : [];
  const rich = opts.some((o) => o && typeof o === 'object' && (nz(o.imageUrl) || o.graphData))
    || (Array.isArray(prev?.options) && prev.options.some((o) => o && typeof o === 'object'));
  const options = rich
    ? opts.map((o) => { const x = { text: optText(o) }; if (nz(o?.imageUrl)) x.image = o.imageUrl; const g = figFwd(o?.graphData); if (g) x.figure = g; return x; })
    : opts.map(optText);
  const mcIndex = () => {
    const a = str(d.answer).trim();
    if (a === '' && prev && (prev.answer === null || typeof prev.answer === 'number')) return prev.answer;   // form left it blank: keep what we had (null = still in review queue)
    if (/^\d+$/.test(a) && Number(a) < options.length) return Number(a);
    const i = options.findIndex((o) => optText(o).trim() === a); if (i >= 0) return i;
    throw new Error(`MC answer "${a}" does not match any option`);
  };
  if (type === 'mc') { q.options = options; q.answer = mcIndex(); }
  else if (type === 'multipart') {
    q.parts = d.subQuestions.map((sq, i) => fromLegacy({ ...sq, id: sq.id || `${q.id}-p${i + 1}` }, prev?.parts?.find((p) => p.id === sq.id) || null));
    if (options.length) q.options = options;
    if (isMcType && options.length) { q.mc = true; const ai = (str(d.answer).trim() === '' && prev?.answer === undefined) ? undefined : mcIndex(); if (ai !== undefined) q.answer = ai; }
    else if (nz(d.answer)) q.answer = str(d.answer);
  } else {
    q.answer = str(d.answer);
    if (d.acceptedAnswers?.length) q.accepted = d.acceptedAnswers.map(str).filter(Boolean);
    if (d.blanks?.length) q.blanks = d.blanks;
    if (options.length) q.options = options;
  }
  if (nz(d.hint)) q.hint = str(d.hint);
  if (nz(d.solution)) q.solution = str(d.solution);
  const st = stepsFwd(d.solutionSteps); if (st.length) q.steps = st;
  if (d.requiresManualGrading === true) q.manual = true;
  if (d.timeLimit && Number(d.timeLimit) !== 120) q.timeLimit = Number(d.timeLimit);
  { const xp = Number(d.xp); if (Number.isInteger(xp) && xp >= 1 && xp <= 10) q.xp = xp; }
  if (Array.isArray(d.keyPoints)) {
    const kps = d.keyPoints
      .map((kp) => ({ text: str(kp?.text), note: str(kp?.note).trim() }))
      .filter((kp) => kp.text.trim() && kp.note)
      .slice(0, 6);
    if (kps.length) q.keyPoints = kps;
  }
  if (d.isActive === false) q.inactive = true;
  if (nz(d.questionType)) q.hscType = str(d.questionType); else if (prev?.hscType) q.hscType = prev.hscType;
  const meta = { ...(prev?.meta || {}) };
  META_KEYS.forEach((k) => { if (d[k] != null && d[k] !== '') meta[k] = d[k]; });
  if (d.origin === 'teacher') meta.origin = 'teacher';
  if (nz(d.examPaper)) meta.examPaper = d.examPaper;
  if (Object.keys(meta).length) q.meta = meta;
  const dna = { ...(prev?.dna || {}) }; DNA_KEYS.forEach((k) => { if (d[k] != null) dna[k] = d[k]; });
  if (Object.keys(dna).length) q.dna = dna;
  const ext = { ...(prev?.ext || {}) }; Object.keys(d).forEach((k) => { if (!KNOWN.has(k)) ext[k] = d[k]; });
  if (Object.keys(ext).length) q.ext = ext;
  if (prev?.alsoIn) q.alsoIn = prev.alsoIn;
  return q;
};
