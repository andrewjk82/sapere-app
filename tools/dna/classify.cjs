#!/usr/bin/env node
/**
 * Sapere HSC Question DNA — classification pass (offline, no Firestore writes)
 *
 * Applies the canonical DNA taxonomy (tools/dna/dnaTaxonomy.js, sourced from
 * Sapere_HSC_AI_Ingestion_Pipeline_Master_Prompt_v2.md §7) to the ~650 base
 * past-paper questions in ALL_PAST_PAPER_QUESTIONS. Variant questions (id
 * ending in "v") inherit their base question's dna_id — they're
 * AI-generated same-skill/different-numbers twins, not independent evidence.
 *
 * Follows the master prompt's core rule: never force-fit. Anything that
 * doesn't match a confident rule is left `dna_id: "UNCLASSIFIED"` with a
 * candidate_dna entry, clustered by keyword signature, for human review —
 * never silently invented as a permanent DNA (§8-13).
 *
 * Output (tools/dna/output/, gitignored, offline only):
 *   questions_classified.json   — per-question dna_id / confidence / method
 *   question_dna_candidates.json
 *   frequency_by_dna.json
 *   review_queue.json
 *   analysis_report.md
 *
 * Usage: node tools/dna/classify.cjs
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'output');
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// ─── Load questions (via a small ESM shim, since allPastPaperQuestions.js is ESM) ──
async function loadQuestions() {
  const mod = await import('../../src/constants/allPastPaperQuestions.js');
  return mod.ALL_PAST_PAPER_QUESTIONS;
}

// ─── Topic-label → DNA rules ───────────────────────────────────────────────
// Built from the actual 168 unique `t` labels across the corpus (see chat).
// Order matters: first match wins, so put more specific labels first.
const TOPIC_RULES = [
  // CALC-STAT-01 (curve analysis) — before generic differentiation rules
  [/concavity|point[s]? of inflection|curve[- ]sketching|curve-sketching menu|using derivatives to sketch|increasing,? decreasing|increasing and decreasing functions|^increasing functions$|stationary points and turning|global maximum and minimum/i, 'CALC-STAT-01'],
  // CALC-OPT-01
  [/maximisation and minimisation|optimisation problems/i, 'CALC-OPT-01'],
  // CALC-TAN-01
  [/tangents and the derivative|tangents and normals|^gradients$|equations of lines|further equations of lines/i, 'CALC-TAN-01'],
  // CALC-MOTION-01 (incl. related-rates — see CAND-CALC-RATES note in report)
  [/velocity and acceleration|average velocity and speed|integrating with respect to time|kinematics|simple harmonic motion|rates and integration|rates of change|derivative as a rate of change/i, 'CALC-MOTION-01'],
  // CALC-AREA-01
  [/finding areas by integration|areas of compound regions|trapezoidal rule|areas and the definite integral|numerical integration/i, 'CALC-AREA-01'],
  // CALC-INT-01 (incl. "Applications of integration of ..." labels)
  [/integrating the trig|integration of the reciprocal|primitive function|fundamental theorem of calculus|integration of exponential|integration techniques|definite integral and its properties|indefinite integral|integrating to find a function|reverse chain rule|integration analysis|applications? of integration of/i, 'CALC-INT-01'],
  // CALC-DIFF-01 (incl. "Applications of differentiation of ..." labels — these are
  // about differentiating a specific function family in context, not curve analysis)
  [/product rule|chain rule|quotient rule|differentiation of logarithmic|differentiation of exponential|differentiation of \$?e\^x|differentiating the trig|differentiating trigonometric|differentiating powers of x|differentiation from first principles|calculus with other bases|second and higher derivatives|product rule for differentiation|applications? of differentiation of (?:log|trig|exponential)/i, 'CALC-DIFF-01'],
  // Bare "Applications of differentiation" (no qualifier) — genuinely ambiguous
  // (could be tangent, rates, or curve analysis depending on the actual question),
  // so route to CALC-STAT-01 only as a soft default; classifier flags it low-confidence.

  // TRIG-ID-01 (before TRIG-EQ so "given one trig function, find another" lands here)
  [/trigonometric identities|given one trig(?:onometric)? function, find another/i, 'TRIG-ID-01'],
  // TRIG-EQ-01
  [/solving trig(?:onometric)? equations|trigonometric equations|solving trig equations/i, 'TRIG-EQ-01'],
  // TRIG-GRAPH-01
  [/trigonometric graphs|trig graphs in radians|^the trigonometric functions$/i, 'TRIG-GRAPH-01'],
  // TRIG-GEO-01 (promoted from CAND-TRIG-001 in taxonomy v1.1 — non-right-angle
  // triangle trig: sine/cosine rule, bearings, arcs & sectors)
  [/cosine rule|sine rule|problems with general triangles|arcs and sectors|sector, arc and segment|right-angled triangle|angles of elevation and depression|trigonometric calculations|trig with right-angled triangles/i, 'TRIG-GEO-01'],

  // PROB-CONT-01
  [/continuous distributions/i, 'PROB-CONT-01'],
  // PROB-NORM-01
  [/normal distribution/i, 'PROB-NORM-01'],
  // PROB-DIST-01
  [/probability distributions|discrete random variables|mean and variance of a distribution|random variables and frequency tables/i, 'PROB-DIST-01'],
  // PROB-TOTAL-01
  [/multi-stage experiments|probability tree diagrams/i, 'PROB-TOTAL-01'],
  // PROB-COND-01
  [/conditional probability/i, 'PROB-COND-01'],
  // PROB-COMP-01
  [/venn diagrams and the addition theorem/i, 'PROB-COMP-01'],

  // FUNC-TRANS-01
  [/combinations of transformations|combining transformations|transformation of functions|review of translations and reflections|odd and even symmetry/i, 'FUNC-TRANS-01'],
  // FUNC-COMP-01
  [/composite functions|composition of functions/i, 'FUNC-COMP-01'],
  // FUNC-GRAPH-01
  [/functions, relations, and graphs|functions and function notation|using graphs to solve|graphs? that have asymptotes|vertical and horizontal asymptotes|domain and range|graphs of functions|review of linear graphs|powers, cubics, and circles|^the circle$|direct and inverse variation/i, 'FUNC-GRAPH-01'],

  // ALG-LOG-01
  [/logarithms and indices|laws for logarithms|review of logarithmic functions/i, 'ALG-LOG-01'],
  // ALG-EXP-01
  [/review of exponential functions|exponential models|growth models|negative index powers/i, 'ALG-EXP-01'],
  // ALG-EQ-01
  [/simultaneous equations|quadratic equations|quadratic formula and the discriminant|quadratic inequations|solving inequations|absolute value|quadratic functions|continuity and piecewise/i, 'ALG-EQ-01'],

  // STAT-BIV-01
  [/bivariate data|line of best fit|using technology with bivariate data/i, 'STAT-BIV-01'],
  // STAT-CORR-01
  [/correlation and regression/i, 'STAT-CORR-01'],
  // STAT-DESC-01
  [/language of statistics|displaying data|grouped data and histograms|quartiles and interquartile range/i, 'STAT-DESC-01'],

  // SERIES-01
  [/summing an arithmetic series|summing a geometric series|limiting sum of a geometric series/i, 'SERIES-01'],
  // FIN-GP-01
  [/financial applications of geometric series|applications of aps and gps/i, 'FIN-GP-01'],
  // SEQ-01
  [/geometric sequences|arithmetic sequences/i, 'SEQ-01'],
  // FIN-INTEREST-01
  [/paying off a loan|simple and compound interest|investing money by regular instalments|^applications$/i, 'FIN-INTEREST-01'],
];

// ─── Candidate DNA — recurring patterns with NO home in the canonical 32 ───
// Per master prompt §8-13: do not force-fit, record as evidence-tracked
// candidates instead. Regexes here are checked BEFORE falling through to
// UNCLASSIFIED so occurrences get grouped under one candidate id.
const CANDIDATE_RULES = [
  // CAND-TRIG-001 promoted to TRIG-GEO-01 in taxonomy v1.1 — see TOPIC_RULES.
  {
    candidate_id: 'CAND-PROB-COUNT-001',
    proposed_family: 'PROBABILITY',
    proposed_skill: 'Permutations, combinations & counting',
    similarity_to_existing_dna: { 'PROB-TOTAL-01': 0.3, 'PROB-COMP-01': 0.25 },
    match: /permutations and combinations|multi-stage experiments and the product rule/i,
  },
  {
    candidate_id: 'CAND-ALG-SURD-001',
    proposed_family: 'FUNCTIONS_ALGEBRA',
    proposed_skill: 'Surd arithmetic & rationalising',
    similarity_to_existing_dna: { 'ALG-EQ-01': 0.2 },
    match: /surds and their arithmetic|rationalising surds|rationalising the denominator/i,
  },
];

// ─── Question-text fallback keywords (for EXAM-generic `t`, e.g. school name) ─
const TEXT_RULES = [
  [/stationary point|point[s]? of inflection|concav/i, 'CALC-STAT-01'],
  [/maximi[sz]e|minimi[sz]e|greatest (?:possible|value)|least (?:possible|value)/i, 'CALC-OPT-01'],
  [/tangent|normal to the curve/i, 'CALC-TAN-01'],
  [/velocity|acceleration|displacement|particle moves/i, 'CALC-MOTION-01'],
  [/area (?:under|between|bounded)|trapezoidal rule/i, 'CALC-AREA-01'],
  [/integrate|primitive|\\int/i, 'CALC-INT-01'],
  [/differentiate|derivative|\\frac\{d/i, 'CALC-DIFF-01'],
  [/solve.*(?:sin|cos|tan)|trigonometric equation/i, 'TRIG-EQ-01'],
  [/amplitude|period of|sketch.*(?:sin|cos|tan)/i, 'TRIG-GRAPH-01'],
  [/prove that.*(?:sin|cos|tan)|identity/i, 'TRIG-ID-01'],
  [/cosine rule|sine rule|bearing|angle of elevation|angle of depression|sector|arc length/i, 'TRIG-GEO-01'],
  [/conditional probability|P\(A\s*\|\s*B\)/i, 'PROB-COND-01'],
  [/tree diagram|multi-stage/i, 'PROB-TOTAL-01'],
  [/z-score|standard normal|normal distribution/i, 'PROB-NORM-01'],
  [/probability density function|continuous random variable/i, 'PROB-CONT-01'],
  [/random variable|expected value|E\(X\)|Var\(X\)/i, 'PROB-DIST-01'],
  [/scatter ?plot|line of best fit|regression/i, 'STAT-BIV-01'],
  [/correlation coefficient/i, 'STAT-CORR-01'],
  [/median|interquartile|quartile|standard deviation/i, 'STAT-DESC-01'],
  [/geometric series|arithmetic series|limiting sum/i, 'SERIES-01'],
  [/geometric sequence|arithmetic sequence|common ratio|common difference/i, 'SEQ-01'],
  [/loan|annuity|instalment|compound interest|simple interest/i, 'FIN-INTEREST-01'],
  [/domain and range|asymptote|composite function/i, 'FUNC-GRAPH-01'],
  [/log_?|logarithm/i, 'ALG-LOG-01'],
  [/e\^x|exponential/i, 'ALG-EXP-01'],
];

// Genuinely ambiguous topic labels — a bare "Applications of differentiation"
// could be tangent/rates/curve-analysis depending on the actual question.
// Route to the most common outcome in this corpus (curve analysis) but at
// reduced confidence, so review_required stays true and a human checks it.
const SOFT_TOPIC_RULES = [
  [/^applications of differentiation$/i, 'CALC-STAT-01'],
];

// ─── Manual review overrides ───────────────────────────────────────────────
// The 39 questions the automated rules couldn't confidently place (mostly
// context-free EXAM subparts with no topic label — "(a) Show that a=3/500").
// Read individually against the actual question text (2026-08-12). Per the
// master prompt §24 ("AI must never silently overwrite tutor corrections"),
// this map takes priority over every rule below it.
const MANUAL_OVERRIDES = {
  'car2020-q37a': 'ALG-EXP-01',     // evaluate V(2)-V(3) from an exponential model — no calculus needed
  'car2020-q37b': 'CALC-MOTION-01', // dV/dt = -100, differentiate & solve — rate-of-change reasoning
  'asc2020-q16-a': 'ALG-EQ-01',     // form cost/income equations from context
  'asc2020-q18-a': 'TRIG-GEO-01',   // distance via cosine rule / bearings (companion part uses cosine rule)
  'asc2020-q22-a': 'FUNC-TRANS-01', // y = -2f(x)
  'asc2020-q22-b': 'FUNC-TRANS-01', // y = f(x/2 + 2)
  'asc2020-q22v': 'FUNC-TRANS-01',  // orphan variant, same transformation pattern
  'asc2020-q28-a': 'PROB-DIST-01',
  'asc2020-q28-b': 'PROB-DIST-01',
  'asc2020-q28-c': 'PROB-DIST-01',
  'asc2020-q30-a': 'FIN-GP-01',     // geometric growth + fixed subtraction each period — same recurrence shape as a depleting annuity
  'asc2020-q30-b': 'FIN-GP-01',
  'asc2020-q30-c': 'FIN-GP-01',
  'asc2020-q30-d': 'FIN-GP-01',
  'asc2020-q30v': 'FIN-GP-01',      // orphan variant, same population+harvest recurrence
  'asc2020-q31-a': 'PROB-CONT-01',
  'asc2020-q31-b': 'PROB-CONT-01',
  'asc2020-q31-c': 'PROB-CONT-01',
  'asc2020-q32-a': 'CALC-OPT-01',   // derive area formula then (b) maximise — treat the pair as one optimisation item
  'asc2020-q32-b': 'CALC-OPT-01',
  'asc2020-q34-a': 'TRIG-EQ-01',    // solve trig rate-function = 0 for time
  'asc2020-q34-b': 'CALC-MOTION-01',// integrate rate to get volume (displacement-from-velocity pattern)
  'asc2020-q34-c': 'CALC-STAT-01',  // minimise the resulting volume expression
  'bar2020-q16ai': 'CALC-DIFF-01',  // verify N=Ae^-kt satisfies dN/dt=-kN — differentiate to check
  'bar2020-q16aii': 'ALG-EXP-01',   // solve for model parameters A, k from data
  'bar2020-q16aiii': 'ALG-EXP-01',  // solve exponential inequality for a year
  'cths2020-q21': 'CALC-STAT-01',   // preamble to stationary-point/curve-sketch subparts
  'cths2020-q24a': 'CALC-STAT-01',  // sketch f'(x) — derivative-graph interpretation
  'cths2020-q24b': 'FUNC-TRANS-01', // sketch f(-x) — reflection
  'cths2020s-q21': 'CALC-STAT-01',
  'cths2020s-q24a': 'CALC-STAT-01',
  'cths2020s-q24b': 'FUNC-TRANS-01',
  'dane2020-q36a': 'ALG-EXP-01',    // identical question to car2020-q37a
  'dane2020-q36b': 'CALC-MOTION-01',
  'fortst2020-q12a': 'ALG-EXP-01',  // solve for exponential model parameters
  'girr2020-mc37b': 'TRIG-GRAPH-01',  // empty question text; topic="Graph sketching", chapter 6A (trig) — low confidence
  'girr2020-mc37bs': 'TRIG-GRAPH-01',
  'abb2020-q16bv': 'CALC-MOTION-01', // rate of a sinusoidal depth function — extremum of the rate
};

function classifyByTopic(topic) {
  for (const [re, dnaId] of TOPIC_RULES) {
    if (re.test(topic)) return { dna_id: dnaId, confidence: 0.85, method: 'topic_label' };
  }
  for (const rule of CANDIDATE_RULES) {
    if (rule.match.test(topic)) return { dna_id: 'UNCLASSIFIED', candidate_id: rule.candidate_id, confidence: 0.7, method: 'topic_label_candidate' };
  }
  for (const [re, dnaId] of SOFT_TOPIC_RULES) {
    if (re.test(topic)) return { dna_id: dnaId, confidence: 0.5, method: 'topic_label_soft' };
  }
  return null;
}

function classifyByText(text) {
  for (const [re, dnaId] of TEXT_RULES) {
    if (re.test(text)) {
      if (dnaId.startsWith('__CAND__')) {
        return { dna_id: 'UNCLASSIFIED', candidate_id: dnaId.replace('__CAND__', ''), confidence: 0.55, method: 'text_keyword_candidate' };
      }
      return { dna_id: dnaId, confidence: 0.6, method: 'text_keyword' };
    }
  }
  return null;
}

async function main() {
  const all = await loadQuestions();
  const base = all.filter(q => !String(q.id).endsWith('v'));
  const variants = all.filter(q => String(q.id).endsWith('v'));

  const classified = [];
  const byId = {};

  for (const q of base) {
    const topic = (q.t || '').trim();
    const text = q.question || '';
    let result = MANUAL_OVERRIDES[q.id]
      ? { dna_id: MANUAL_OVERRIDES[q.id], confidence: 0.95, method: 'manual_review' }
      : (classifyByTopic(topic) || classifyByText(text));
    if (!result) {
      result = { dna_id: 'UNCLASSIFIED', candidate_id: null, confidence: 0.3, method: 'no_match' };
    }
    const record = {
      question_id: q.id,
      source: topic.match(/Trial Exam/i) ? topic : null,
      chapter: q.c || null,
      topic_label: topic || null,
      type: q.type,
      dna_id: result.dna_id,
      candidate_id: result.candidate_id || null,
      dna_confidence: result.confidence,
      classification_method: result.method,
      review_required: result.confidence < 0.6,
    };
    classified.push(record);
    byId[q.id] = record;
  }

  // Variants inherit their base question's classification (same skill, different numbers)
  for (const q of variants) {
    const baseId = String(q.id).replace(/v$/, '');
    const baseRecord = byId[baseId];
    if (baseRecord) {
      classified.push({
        question_id: q.id,
        source: baseRecord.source,
        chapter: q.c || null,
        topic_label: baseRecord.topic_label,
        type: q.type,
        dna_id: baseRecord.dna_id,
        candidate_id: baseRecord.candidate_id,
        dna_confidence: baseRecord.dna_confidence,
        classification_method: 'inherited_from_base:' + baseId,
        review_required: baseRecord.review_required,
      });
    } else {
      // Base wasn't found (shouldn't happen) — classify independently as fallback.
      const topic = (q.t || '').trim();
      const result = (MANUAL_OVERRIDES[q.id] ? { dna_id: MANUAL_OVERRIDES[q.id], confidence: 0.95, method: 'manual_review' } : null)
        || classifyByTopic(topic) || classifyByText(q.question || '') || { dna_id: 'UNCLASSIFIED', candidate_id: null, confidence: 0.3, method: 'no_match_orphan_variant' };
      classified.push({
        question_id: q.id, source: null, chapter: q.c || null, topic_label: topic || null, type: q.type,
        dna_id: result.dna_id, candidate_id: result.candidate_id || null,
        dna_confidence: result.confidence, classification_method: result.method,
        // Bug fixed 2026-08-12: this used to be hardcoded `true` for every
        // orphan variant (id ends in "v" but no matching base id), even when
        // classifyByTopic/classifyByText found a confident match. Use the
        // same confidence threshold as every other path instead.
        review_required: result.confidence < 0.6,
      });
    }
  }

  // ─── Aggregate: frequency by DNA ─────────────────────────────────────────
  const freqByDna = {};
  classified.forEach(r => {
    const key = r.dna_id === 'UNCLASSIFIED' ? `UNCLASSIFIED:${r.candidate_id || 'no_candidate'}` : r.dna_id;
    if (!freqByDna[key]) freqByDna[key] = { count: 0, question_ids: [] };
    freqByDna[key].count++;
    freqByDna[key].question_ids.push(r.question_id);
  });

  // ─── Candidate DNA evidence ───────────────────────────────────────────────
  const candidateEvidence = {};
  classified.filter(r => r.dna_id === 'UNCLASSIFIED' && r.candidate_id).forEach(r => {
    if (!candidateEvidence[r.candidate_id]) {
      const def = CANDIDATE_RULES.find(c => c.candidate_id === r.candidate_id);
      candidateEvidence[r.candidate_id] = {
        candidate_id: r.candidate_id,
        proposed_family: def?.proposed_family || null,
        proposed_skill: def?.proposed_skill || null,
        similarity_to_existing_dna: def?.similarity_to_existing_dna || {},
        occurrence_count: 0,
        example_question_ids: [],
      };
    }
    candidateEvidence[r.candidate_id].occurrence_count++;
    if (candidateEvidence[r.candidate_id].example_question_ids.length < 5) {
      candidateEvidence[r.candidate_id].example_question_ids.push(r.question_id);
    }
  });
  // Promotion recommendation per master prompt §12 default trigger
  Object.values(candidateEvidence).forEach(c => {
    const maxSim = Math.max(0, ...Object.values(c.similarity_to_existing_dna));
    c.promotion_status = (c.occurrence_count >= 3 && maxSim < 0.75) ? 'READY_FOR_DNA_REVIEW' : 'ACCUMULATING_EVIDENCE';
  });

  // ─── Review queue: no_match + low-confidence text-keyword hits ───────────
  const reviewQueue = classified.filter(r => r.review_required && !r.candidate_id);

  // ─── Write outputs ────────────────────────────────────────────────────────
  fs.writeFileSync(path.join(OUTPUT_DIR, 'questions_classified.json'), JSON.stringify(classified, null, 2));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'question_dna_candidates.json'), JSON.stringify(Object.values(candidateEvidence), null, 2));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'frequency_by_dna.json'), JSON.stringify(freqByDna, null, 2));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'review_queue.json'), JSON.stringify(reviewQueue, null, 2));

  // ─── Report ───────────────────────────────────────────────────────────────
  const totalBase = base.length;
  const unclassifiedNoMatch = reviewQueue.length;
  const unclassifiedCandidate = classified.filter(r => r.dna_id === 'UNCLASSIFIED' && r.candidate_id).length;
  const classifiedOk = classified.length - unclassifiedNoMatch - unclassifiedCandidate;

  let report = `# Question DNA — Classification Report\n\n`;
  report += `Generated: ${new Date().toISOString()}\n\n`;
  report += `Base questions classified: ${totalBase}\nVariant questions (inherited): ${variants.length}\nTotal records: ${classified.length}\n\n`;
  report += `## Summary\n\n`;
  report += `- Classified to canonical DNA: ${classifiedOk} (${(100 * classifiedOk / classified.length).toFixed(1)}%)\n`;
  report += `- UNCLASSIFIED → candidate DNA (recurring gap): ${unclassifiedCandidate}\n`;
  report += `- UNCLASSIFIED → no match (needs manual review): ${unclassifiedNoMatch}\n\n`;
  report += `## Frequency by DNA\n\n| DNA | Count |\n|---|---:|\n`;
  Object.entries(freqByDna).sort((a, b) => b[1].count - a[1].count).forEach(([k, v]) => {
    report += `| ${k} | ${v.count} |\n`;
  });
  report += `\n## Candidate DNA (recurring, unclassified) — needs your APPROVE / MERGE / REJECT\n\n`;
  Object.values(candidateEvidence).sort((a, b) => b.occurrence_count - a.occurrence_count).forEach(c => {
    report += `### ${c.candidate_id} — ${c.proposed_skill}\n`;
    report += `- Occurrences: ${c.occurrence_count}\n`;
    report += `- Promotion status: **${c.promotion_status}**\n`;
    report += `- Similarity to existing DNA: ${JSON.stringify(c.similarity_to_existing_dna)}\n`;
    report += `- Example question ids: ${c.example_question_ids.join(', ')}\n\n`;
  });
  report += `\n## Manual review queue (no confident match)\n\n`;
  report += `${reviewQueue.length} questions — see review_queue.json. Sample:\n\n`;
  reviewQueue.slice(0, 30).forEach(r => {
    report += `- ${r.question_id} (${r.chapter}) — topic: "${r.topic_label || '(none)'}"\n`;
  });

  fs.writeFileSync(path.join(OUTPUT_DIR, 'analysis_report.md'), report);

  console.log(`Base: ${totalBase}, Variants: ${variants.length}, Total: ${classified.length}`);
  console.log(`Classified OK: ${classifiedOk} (${(100 * classifiedOk / classified.length).toFixed(1)}%)`);
  console.log(`Candidate DNA (gap clusters): ${unclassifiedCandidate}`);
  console.log(`No-match review queue: ${unclassifiedNoMatch}`);
  console.log(`\nOutputs written to ${OUTPUT_DIR}`);
}

main().catch(e => { console.error(e); process.exit(1); });
