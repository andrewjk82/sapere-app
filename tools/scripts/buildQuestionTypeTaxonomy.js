#!/usr/bin/env node
/**
 * Phase 0 — Question Type Taxonomy Builder (no API needed)
 *
 * Loads all past paper seed files, assigns a questionType slug to every
 * question based on chapter/topic, and writes:
 *
 *   tools/scripts/output/question_types_taxonomy.json   — 21 type definitions
 *   tools/scripts/output/question_type_assignments.json — { id → typeSlug }
 *
 * Usage:
 *   node tools/scripts/buildQuestionTypeTaxonomy.js
 */

import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, 'output');
mkdirSync(OUTPUT_DIR, { recursive: true });

// ─── Taxonomy definition ─────────────────────────────────────────────────────

export const QUESTION_TYPES = [
  {
    slug: 'differentiation-rules',
    label: 'Differentiation Rules',
    description: 'Chain rule, product rule, quotient rule, and differentiation of exponential, logarithmic and trigonometric functions.',
    chapterIds: ['7B','7C','7D','7E','9H','9I','9J','5B','5C','5D','5E','5F','5G','5H','5I','5J','5K'],
    examLevel: 'Both',
  },
  {
    slug: 'applications-of-differentiation',
    label: 'Applications of Differentiation',
    description: 'Stationary points, turning points, concavity, inflection points, curve sketching, global max/min, tangents and normals.',
    chapterIds: ['7F','7G','7H','7I','7J','9D','9E','9F','9G'],
    examLevel: 'Both',
  },
  {
    slug: 'motion-kinematics',
    label: 'Motion & Kinematics',
    description: 'Velocity and acceleration as derivatives, displacement/velocity/acceleration from integration, average velocity.',
    chapterIds: ['7K','9K','11D','11E'],
    examLevel: 'Both',
  },
  {
    slug: 'integration-techniques',
    label: 'Integration Techniques',
    description: 'Indefinite and definite integrals, reverse chain rule, integration of exponential, logarithmic and trigonometric functions, fundamental theorem.',
    chapterIds: ['4A','4B','4C','4D','4E','6A','6B','6C','6D','6E','6F','6G','6H','6I','6J','6K'],
    examLevel: 'Both',
  },
  {
    slug: 'areas-and-volumes',
    label: 'Areas & Volumes',
    description: 'Area under/between curves, compound regions, area with respect to y-axis, volumes of solids of revolution.',
    chapterIds: ['4F','4G','4H','4I','6L','6M'],
    examLevel: 'Both',
  },
  {
    slug: 'trapezoidal-rule',
    label: 'Trapezoidal Rule',
    description: 'Numerical integration using the trapezoidal rule.',
    chapterIds: ['4J','6N'],
    examLevel: 'Both',
  },
  {
    slug: 'rates-of-change',
    label: 'Rates of Change & Related Rates',
    description: 'Real-world rates of change, related rates, integrating rates to find quantities.',
    chapterIds: ['7L','9L','11F'],
    examLevel: 'Both',
  },
  {
    slug: 'optimisation',
    label: 'Optimisation (Max/Min Problems)',
    description: 'Applications of differentiation to optimise real-world quantities such as area, volume, cost, and revenue.',
    chapterIds: ['7I','9G'],
    examLevel: 'Both',
  },
  {
    slug: 'arithmetic-series',
    label: 'Arithmetic Sequences & Series',
    description: 'nth term, sum of arithmetic series, and applications of arithmetic progressions.',
    chapterIds: ['1A','1B','1C','1D'],
    examLevel: 'Both',
  },
  {
    slug: 'geometric-series',
    label: 'Geometric Sequences & Series',
    description: 'nth term, sum of geometric series, limiting sum of infinite geometric series.',
    chapterIds: ['1E','1F','1G','1H'],
    examLevel: 'Both',
  },
  {
    slug: 'financial-mathematics',
    label: 'Financial Mathematics',
    description: 'Simple and compound interest, depreciation, loan repayments, future/present value of annuities.',
    chapterIds: ['8A','8B','8C','8D','8E','8F','8G','8H'],
    examLevel: 'Advanced',
  },
  {
    slug: 'probability-distributions',
    label: 'Discrete Probability Distributions',
    description: 'Random variables, probability distributions, expected value, mean, variance and standard deviation.',
    chapterIds: ['10A','10B','10C'],
    examLevel: 'Advanced',
  },
  {
    slug: 'continuous-distributions',
    label: 'Continuous & Normal Distributions',
    description: 'Continuous random variables, normal distribution, standard normal distribution, z-scores, applications.',
    chapterIds: ['10D','10E','10F','10G','10H'],
    examLevel: 'Advanced',
  },
  {
    slug: 'conditional-probability',
    label: 'Probability & Counting',
    description: 'Conditional probability, tree diagrams, Venn diagrams, multi-stage experiments, combinations, permutations.',
    chapterIds: ['12A','12B','12C','12D','12E','12F','12G','14A','14B','14C','14D','14E'],
    examLevel: 'Both',
  },
  {
    slug: 'bivariate-statistics',
    label: 'Bivariate Data & Regression',
    description: 'Scatter plots, correlation coefficient, line of best fit, regression, using technology with bivariate data.',
    chapterIds: ['9A','9B','9C','9D','9E','9F'],
    examLevel: 'Advanced',
  },
  {
    slug: 'data-analysis',
    label: 'Data Analysis & Statistics',
    description: 'Measures of centre and spread, quartiles, IQR, histograms, grouped data, outliers, displaying data.',
    chapterIds: ['9A','9B','9C','10A'],
    examLevel: 'Advanced',
  },
  {
    slug: 'trig-equations-and-graphs',
    label: 'Trigonometric Equations & Graphs',
    description: 'Solving trig equations, trig graphs and transformations, identities, inverse trig functions.',
    chapterIds: ['11A','11B','11C','11D','11E','11F'],
    examLevel: 'Both',
  },
  {
    slug: 'trig-applications',
    label: 'Trigonometry Applications',
    description: 'Sine rule, cosine rule, area of triangle, arcs and sectors, problems with general and right-angled triangles.',
    chapterIds: ['6A','6B','6C','6D','6E','6F','6G','6H','6I','6J','6K'],
    examLevel: 'Both',
  },
  {
    slug: 'functions-and-graphs',
    label: 'Functions & Graph Transformations',
    description: 'Domain, range, composite/inverse functions, odd/even symmetry, transformations, absolute value, piecewise functions.',
    chapterIds: ['3A','3B','3C','3D','3E','3F','4E','5A','5F'],
    examLevel: 'Both',
  },
  {
    slug: 'exponential-and-log',
    label: 'Exponential & Logarithmic Functions',
    description: 'Exponential and logarithmic equations, graphs, laws of logarithms, change of base, applications.',
    chapterIds: ['2A','2B','2C','2D','2E','2F','2G','2H'],
    examLevel: 'Both',
  },
  {
    slug: 'extension1-misc',
    label: 'Extension 1 Techniques',
    description: 'Extension 1 topics: inverse trig, parametric equations, simple harmonic motion, binomial theorem, proof by induction.',
    chapterIds: ['14A','14B','14C','14D','14E','14F','14G','15A','15B','15C','15D'],
    examLevel: 'Extension 1',
  },
];

// ─── Chapter-to-type mapping ─────────────────────────────────────────────────
// Built from QUESTION_TYPES above — one chapter may appear in multiple types,
// but we pick the PRIMARY type based on the most specific match.

const CHAPTER_TO_TYPE = {
  // Functions & Graphs
  '3A': 'functions-and-graphs', '3B': 'functions-and-graphs', '3C': 'functions-and-graphs',
  '3D': 'functions-and-graphs', '3E': 'functions-and-graphs', '3F': 'functions-and-graphs',
  '4E': 'functions-and-graphs', '5A': 'functions-and-graphs', '5F': 'functions-and-graphs',
  '3G': 'functions-and-graphs', '3H': 'functions-and-graphs', '3I': 'functions-and-graphs',

  // Exponential & Log
  '2A': 'exponential-and-log', '2B': 'exponential-and-log', '2C': 'exponential-and-log',
  '2D': 'exponential-and-log', '2E': 'exponential-and-log', '2F': 'exponential-and-log',
  '2G': 'exponential-and-log', '2H': 'exponential-and-log',

  // Arithmetic Series
  '1A': 'arithmetic-series', '1B': 'arithmetic-series', '1C': 'arithmetic-series', '1D': 'arithmetic-series',

  // Geometric Series
  '1E': 'geometric-series', '1F': 'geometric-series', '1G': 'geometric-series', '1H': 'geometric-series',

  // Financial Mathematics
  '8A': 'financial-mathematics', '8B': 'financial-mathematics', '8C': 'financial-mathematics',
  '8D': 'financial-mathematics', '8E': 'financial-mathematics', '8F': 'financial-mathematics',
  '8G': 'financial-mathematics', '8H': 'financial-mathematics',

  // Trig applications (non-calc chapters)
  '6A': 'trig-applications', '6B': 'trig-applications', '6C': 'trig-applications',
  '6D': 'trig-applications', '6E': 'trig-applications', '6F': 'trig-applications',
  '6G': 'trig-applications', '6H': 'trig-applications', '6I': 'trig-applications',
  '6J': 'trig-applications', '6K': 'trig-applications',

  // Trig equations & graphs
  '11A': 'trig-equations-and-graphs', '11B': 'trig-equations-and-graphs',
  '11C': 'trig-equations-and-graphs', '11D': 'trig-equations-and-graphs',
  '11E': 'trig-equations-and-graphs', '11F': 'trig-equations-and-graphs',

  // Differentiation rules (Year 11a ch7 & Year 12a ch5)
  '7B': 'differentiation-rules', '7C': 'differentiation-rules', '7D': 'differentiation-rules',
  '7E': 'differentiation-rules',
  '9H': 'differentiation-rules', '9I': 'differentiation-rules', '9J': 'differentiation-rules',
  '5B': 'differentiation-rules', '5C': 'differentiation-rules', '5D': 'differentiation-rules',
  '5E': 'differentiation-rules', '5G': 'differentiation-rules', '5H': 'differentiation-rules',
  '5I': 'differentiation-rules', '5J': 'differentiation-rules', '5K': 'differentiation-rules',

  // Applications of differentiation
  '7F': 'applications-of-differentiation', '7G': 'applications-of-differentiation',
  '7H': 'applications-of-differentiation', '7J': 'applications-of-differentiation',
  '9D': 'applications-of-differentiation', '9E': 'applications-of-differentiation',
  '9F': 'applications-of-differentiation',

  // Optimisation
  '7I': 'optimisation', '9G': 'optimisation',

  // Motion / Kinematics
  '7K': 'motion-kinematics', '9K': 'motion-kinematics',

  // Rates of change
  '7L': 'rates-of-change', '9L': 'rates-of-change',

  // Integration techniques (Year 12a ch6 calc)
  '6L': 'integration-techniques', '6M': 'integration-techniques', '6N': 'trapezoidal-rule',
  '4A': 'integration-techniques', '4B': 'integration-techniques', '4C': 'integration-techniques',
  '4D': 'integration-techniques',

  // Areas & Volumes
  '4F': 'areas-and-volumes', '4G': 'areas-and-volumes', '4H': 'areas-and-volumes',
  '4I': 'areas-and-volumes',

  // Trapezoidal rule
  '4J': 'trapezoidal-rule',

  // Probability & Counting
  '12A': 'conditional-probability', '12B': 'conditional-probability', '12C': 'conditional-probability',
  '12D': 'conditional-probability', '12E': 'conditional-probability', '12F': 'conditional-probability',
  '12G': 'conditional-probability',
  '14A': 'conditional-probability', '14B': 'conditional-probability', '14C': 'conditional-probability',
  '14D': 'conditional-probability', '14E': 'conditional-probability',

  // Probability distributions
  '10A': 'probability-distributions', '10B': 'continuous-distributions', '10C': 'probability-distributions',

  // Continuous / Normal distributions
  '10D': 'continuous-distributions', '10E': 'continuous-distributions',
  '10F': 'continuous-distributions', '10G': 'continuous-distributions',

  // Data analysis
  '9A': 'data-analysis', '9B': 'data-analysis', '9C': 'data-analysis',

  // Bivariate stats
  '9D': 'bivariate-statistics', '9E': 'bivariate-statistics', '9F': 'bivariate-statistics',

  // Extension 1
  '15A': 'extension1-misc', '15B': 'extension1-misc', '15C': 'extension1-misc',
  '15D': 'extension1-misc', '15E': 'extension1-misc',
};

// Topic keyword overrides — catch cases where chapter alone is ambiguous
const TOPIC_KEYWORD_OVERRIDES = [
  { keywords: ['trapezoidal', 'trapezoid', 'numerical integration'], type: 'trapezoidal-rule' },
  { keywords: ['velocity', 'acceleration', 'displacement', 'speed', 'kinematics', 'motion'], type: 'motion-kinematics' },
  { keywords: ['rate of change', 'rates of change', 'related rate', 'integrating with respect to time'], type: 'rates-of-change' },
  { keywords: ['maximis', 'minimis', 'optimization', 'optimis', 'maximum volume', 'minimum cost', 'maximum area'], type: 'optimisation' },
  { keywords: ['stationary point', 'turning point', 'concavity', 'inflection', 'curve sketch', 'global max', 'global min', 'increasing, decreasing'], type: 'applications-of-differentiation' },
  { keywords: ['chain rule', 'product rule', 'quotient rule'], type: 'differentiation-rules' },
  { keywords: ['area', 'volume', 'solid of revolution', 'area between', 'compound region'], type: 'areas-and-volumes' },
  { keywords: ['arithmetic sequence', 'arithmetic series', 'arithmetic progression'], type: 'arithmetic-series' },
  { keywords: ['geometric sequence', 'geometric series', 'limiting sum', 'geometric progression'], type: 'geometric-series' },
  { keywords: ['loan', 'interest', 'annuity', 'depreciation', 'compound interest', 'simple interest', 'repayment', 'instalment', 'financial'], type: 'financial-mathematics' },
  { keywords: ['normal distribution', 'standard normal', 'z-score', 'continuous distribution'], type: 'continuous-distributions' },
  { keywords: ['probability distribution', 'random variable', 'expected value', 'mean and variance of'], type: 'probability-distributions' },
  { keywords: ['conditional probability', 'tree diagram', 'venn diagram', 'combinations', 'permutation', 'multi-stage', 'counting'], type: 'conditional-probability' },
  { keywords: ['bivariate', 'regression', 'correlation', 'line of best fit', 'scatter'], type: 'bivariate-statistics' },
  { keywords: ['quartile', 'histogram', 'grouped data', 'interquartile', 'stem', 'outlier', 'displaying data', 'language of statistics'], type: 'data-analysis' },
  { keywords: ['cosine rule', 'sine rule', 'arc', 'sector', 'bearing', 'triangle', 'right-angled trig'], type: 'trig-applications' },
  { keywords: ['trig equation', 'trig graph', 'trigonometric equation', 'trigonometric graph', 'transformations of trig', 'solving trig', 'trig identit'], type: 'trig-equations-and-graphs' },
  { keywords: ['logarithm', 'log function', 'exponential function', 'laws for log', 'index law', 'change of base'], type: 'exponential-and-log' },
  { keywords: ['domain', 'range', 'composite function', 'inverse function', 'absolute value', 'piecewise', 'odd and even', 'transformation', 'dilation', 'reflection', 'translation'], type: 'functions-and-graphs' },
  { keywords: ['integration of', 'integrat', 'antiderivative', 'primitive', 'indefinite integral', 'definite integral', 'reverse chain rule', 'fundamental theorem'], type: 'integration-techniques' },
  { keywords: ['differentiat', 'derivative', 'gradient of the tangent', 'gradient of the normal', 'dy/dx'], type: 'differentiation-rules' },
  { keywords: ['simple harmonic', 'inverse trig', 'parametric', 'binomial theorem', 'mathematical induction', 'proof by induction', 'further integration'], type: 'extension1-misc' },
];

function assignType(question) {
  const topic = (question.t || '').toLowerCase();
  const chapter = (question.c || '').trim();

  // 1. Topic keyword override (highest priority)
  for (const override of TOPIC_KEYWORD_OVERRIDES) {
    if (override.keywords.some(k => topic.includes(k.toLowerCase()))) {
      return override.type;
    }
  }

  // 2. Chapter code lookup
  if (CHAPTER_TO_TYPE[chapter]) return CHAPTER_TO_TYPE[chapter];

  // 3. Ext1 topicId
  if (question.topicId?.includes('e1') || question.topicId?.includes('ext1')) {
    return 'extension1-misc';
  }

  return 'other';
}

// ─── Load all past paper questions ───────────────────────────────────────────

const PROJECT_ROOT = join(__dirname, '..', '..');

const PAST_PAPER_FILES = [
  'seedAscham2020Questions.js',
  'seedBarker2020Questions.js',
  'seedBaulkham2020Questions.js',
  'seedAbbotsleigh2020Questions.js',
  'seedAbbotsleigh2020Ext1Questions.js',
  'seedBlacktownBoys2020Questions.js',
  'seedBlacktownBoys2020SimilarQuestions.js',
  'seedCaringbah2020Questions.js',
  'seedCaringbah2020SimilarQuestions.js',
  'seedCherrybrookTech2020Questions.js',
  'seedCherrybrookTech2020SimilarQuestions.js',
  'seedCranbrook2023Questions.js',
  'seedCranbrook2023SimilarQuestions.js',
  'seedDanebank2020Questions.js',
  'seedDanebank2020SimilarQuestions.js',
  'seedFortSt2020Questions.js',
  'seedFortSt2020SimilarQuestions.js',
];

async function loadAllQuestions() {
  const questions = [];
  const seen = new Set();
  for (const f of PAST_PAPER_FILES) {
    const filePath = join(PROJECT_ROOT, 'src', 'constants', f);
    try {
      const mod = await import(filePath);
      for (const val of Object.values(mod)) {
        if (!Array.isArray(val)) continue;
        for (const q of val) {
          if (!q.id || seen.has(q.id)) continue;
          seen.add(q.id);
          questions.push(q);
        }
      }
    } catch (e) {
      console.warn(`  Skipping ${f}: ${e.message}`);
    }
  }
  return questions;
}

// ─── Main ────────────────────────────────────────────────────────────────────

const allQuestions = await loadAllQuestions();
console.log(`Loaded ${allQuestions.length} questions (deduplicated).`);

// Assign types
const assignments = {};
const typeQuestionIds = {};
QUESTION_TYPES.forEach(t => { typeQuestionIds[t.slug] = []; });
typeQuestionIds['other'] = [];

for (const q of allQuestions) {
  const typeSlug = assignType(q);
  assignments[q.id] = typeSlug;
  if (!typeQuestionIds[typeSlug]) typeQuestionIds[typeSlug] = [];
  typeQuestionIds[typeSlug].push(q.id);
}

// Build taxonomy output with counts and question IDs
const taxonomyOutput = QUESTION_TYPES.map(t => ({
  ...t,
  count: (typeQuestionIds[t.slug] || []).length,
  questionIds: typeQuestionIds[t.slug] || [],
}));

const otherCount = (typeQuestionIds['other'] || []).length;
const otherIds = typeQuestionIds['other'] || [];

// Print summary
console.log('\n── Question Type Taxonomy ──────────────────────────────────────');
taxonomyOutput.forEach(t => {
  console.log(`  ${String(t.count).padStart(3)}  ${t.slug}`);
});
if (otherCount > 0) {
  console.log(`  ${String(otherCount).padStart(3)}  [other — needs review]`);
  console.log(`       IDs: ${otherIds.slice(0, 5).join(', ')}${otherIds.length > 5 ? ` ... (+${otherIds.length - 5} more)` : ''}`);
}
console.log(`       Total: ${allQuestions.length}`);

// Write output files
const taxonomyPath = join(OUTPUT_DIR, 'question_types_taxonomy.json');
const assignmentsPath = join(OUTPUT_DIR, 'question_type_assignments.json');

writeFileSync(taxonomyPath, JSON.stringify({
  generatedAt: new Date().toISOString(),
  totalQuestions: allQuestions.length,
  types: taxonomyOutput,
  ...(otherCount > 0 ? { unclassified: { count: otherCount, questionIds: otherIds } } : {}),
}, null, 2));

writeFileSync(assignmentsPath, JSON.stringify(assignments, null, 2));

console.log(`\n✅ Output written:`);
console.log(`   ${taxonomyPath}`);
console.log(`   ${assignmentsPath}`);
