// Year 12 Advanced was re-laid out to match the 2026 textbook (CambridgeMATHS NSW Stage 6 Mathematics Advanced Year 12,
// 2nd edition): still 10 chapters, but renumbered. Question ids did not change; topic and chapter ids did, and new ids
// reuse old ones (old y12a-3 "Curve-sketching" is new y12a-2; old y12a-9 "Data" vs new y12a-9 "Discrete probability
// distributions") — see topicRenumber for why every move runs exactly once.
//
// The new book dropped old chapter 2 (Graphs and equations) and chapter 9 (Displaying and interpreting data): graph and
// inequation work goes to Year 11 Advanced (chapters 4 and 5), trigonometric graphs to new 6A, single-variable data to new
// 10A and bivariate data to Year 11 chapter 13. Topic ids not listed are unchanged (1C–1I, 6B–6E, 8A–8E, 10B–10F).
import { makeRenumber } from './topicRenumber.js';

export const OLD_TO_NEW_TOPIC = {
  // two old "Miscellaneous questions" topics whose lower-case ids never matched a curriculum topic
  'y12a-1a': 'y12a-1A', 'y12a-1b': 'y12a-1B', 'y12a-1j': 'y12a-1R',
  // old 2 Graphs and equations → Year 11 Advanced 4 / 5 (2I trigonometric graphs → new 6A)
  'y12a-2A': 'y11a-4B', 'y12a-2B': 'y11a-3H', 'y12a-2C': 'y11a-3H', 'y12a-2D': 'y11a-4B', 'y12a-2E': 'y11a-4B',
  'y12a-2F': 'y11a-5A', 'y12a-2G': 'y11a-5D', 'y12a-2H': 'y11a-5G', 'y12a-2I': 'y12a-6A',
  // old 3 Curve-sketching → 2 (new 2G "Review of continuity and differentiability")
  'y12a-3A': 'y12a-2A', 'y12a-3B': 'y12a-2B', 'y12a-3C': 'y12a-2C', 'y12a-3D': 'y12a-2D', 'y12a-3E': 'y12a-2E',
  'y12a-3F': 'y12a-2F', 'y12a-3G': 'y12a-2H', 'y12a-3H': 'y12a-2I', 'y12a-3I': 'y12a-2R',
  // old 4 Integration → 3 (compound regions are part of 3F now)
  'y12a-4A': 'y12a-3A', 'y12a-4B': 'y12a-3B', 'y12a-4C': 'y12a-3C', 'y12a-4D': 'y12a-3D', 'y12a-4E': 'y12a-3E',
  'y12a-4F': 'y12a-3F', 'y12a-4G': 'y12a-3F', 'y12a-4H': 'y12a-3G', 'y12a-4I': 'y12a-3H', 'y12a-4-4j': 'y12a-3R',
  // old 5 Exponential and logarithmic → 4 Exponential functions + 5 Logarithmic functions
  // (5K other bases and 5L revision are split question by question: QUESTION_TOPIC)
  'y12a-5A': 'y12a-4A', 'y12a-5B': 'y12a-4B', 'y12a-5C': 'y12a-4C', 'y12a-5D': 'y12a-4D', 'y12a-5E': 'y12a-4E',
  'y12a-5F': 'y12a-5A', 'y12a-5G': 'y12a-5B', 'y12a-5H': 'y12a-5C', 'y12a-5I': 'y12a-5D', 'y12a-5J': 'y12a-5E',
  'y12a-5K': 'y12a-5F', 'y12a-5L': 'y12a-5R',
  // old 6 Trigonometric functions → 6 (sin x near the origin is now 6F)
  'y12a-6A': 'y12a-6F', 'y12a-6-6f': 'y12a-6R',
  // old 7 Motion and rates → 7 (average and instantaneous velocity merge into 7A)
  'y12a-7B': 'y12a-7A', 'y12a-7C': 'y12a-7B', 'y12a-7D': 'y12a-7C', 'y12a-7E': 'y12a-7D',
  'y12a-7F': 'y12a-7E', 'y12a-7-7g': 'y12a-7R',
  // old 8 Series and finance → 8 (old 8F was the review; new 8F is the annuity)
  'y12a-8F': 'y12a-8R',
  // old 9 Displaying data → new 10A; bivariate data → Year 11 Advanced 13
  'y12a-9A': 'y12a-10A', 'y12a-9B': 'y12a-10A', 'y12a-9C': 'y12a-10A',
  'y12a-9D': 'y11a-13D', 'y12a-9E': 'y11a-13E', 'y12a-9F': 'y11a-13E',
  // old 10 Continuous probability → 10 (old 10A relative frequency → new 10A cumulative frequency and grouping)
  'y12a-10G': 'y12a-10F', 'y12a-10-10h': 'y12a-10R',
};

// No place in the new book or in Year 11: the reviews of the two dropped chapters, and those chapters themselves.
export const RETIRED = ['y12a-2-2j', 'y12a-9-9g', 'y12a-2', 'y12a-9'];

// Old chapter id → new chapter id(s). Every old chapter is listed: chapter ids are reused with other meanings. Dropped
// chapters (2, 9) are retired above — a Year 12 student is not assigned Year 11 chapters by this move. New chapter 9
// (discrete distributions) comes with old 10, whose continuous distributions it leads into.
export const OLD_TO_NEW_CHAPTER = {
  'y12a-1': ['y12a-1'], 'y12a-3': ['y12a-2'], 'y12a-4': ['y12a-3'], 'y12a-5': ['y12a-4', 'y12a-5'],
  'y12a-6': ['y12a-6'], 'y12a-7': ['y12a-7'], 'y12a-8': ['y12a-8'], 'y12a-10': ['y12a-9', 'y12a-10'],
};

// Questions placed by their content rather than by their old topic (content re-layout only: tools/content/advy12-renumber.mjs).
const EXP_OTHER_BASES = ['q4a', 'q4b', 'q4c', 'q5a', 'q5b', 'q5c', 'q6a', 'q6b', 'q6c', 'q6d', 'q7a', 'q7b', 'q7c', 'q7d',
  'q10a', 'q10b', 'q10c', 'q13', 'q14', 'q15', 'q16', 'q19bi', 'q19bii', 'q19biii', 'q19ci', 'q19cii', 'q19ciii'];
const EXP_REVIEW = ['q1', 'q2', 'q3', 'q4', 'q5', 'q14', 'q16', 'q17', 'q19', 'q20', 'q21', 'q24', 'q27', 'q29'];
export const QUESTION_TOPIC = {
  ...Object.fromEntries(EXP_OTHER_BASES.map((q) => [`y12a-5k-${q}`, 'y12a-4F'])),   // a^x: exponential functions with other bases
  ...Object.fromEntries(EXP_REVIEW.map((q) => [`y12a-5l-${q}`, 'y12a-4R'])),         // old revision, exponential half
  'cths2020-q22a': 'y12a-6A', 'cths2020-q22b': 'y12a-6A', 'cths2020s-q22a': 'y12a-6A', 'cths2020s-q22b': 'y12a-6A',
  'hh2020-q29': 'y12a-6A',                                                            // trig equations solved by graphs
  'amity2020-ma-q23': 'y11a-5E',                                                      // absolute value graph
  'gosford2020-q15': 'y11a-11B', 'ascham2020-q21': 'y11a-11B',                        // solving trig equations
  'gosford2020-q13': 'y11a-6I',                                                       // cosine rule
  'gosford2020-q11': 'y11a-7B', 'gosford2020-q25': 'y11a-7D',                         // coordinate geometry
};

export const ADV_Y12_RENUMBER = makeRenumber({ prefix: 'y12a-', topicMap: OLD_TO_NEW_TOPIC, chapterMap: OLD_TO_NEW_CHAPTER, retired: RETIRED });
export const { migrateStudentIds, planProgressMoves, planNoteMoves } = ADV_Y12_RENUMBER;
