// Year 12 Extension 1 was re-laid out to match the 2026 textbook (CambridgeMATHS NSW Stage 6 Mathematics Extension 1
// Year 12, 2nd edition): 17 chapters became 18. Question ids did not change; topic and chapter ids did, and new ids reuse
// old ones (old y12e1-3 "Graphs and equations" vs new y12e1-3 "Curve-sketching using the derivative") — see
// topicRenumber for why every move runs exactly once.
//
// The new book dropped old chapter 3 (Graphs and equations), 11 (Trigonometric equations) and 15 (Displaying and
// interpreting data); that content is in Year 11 Extension 1 (chapters 5, 6 and 16), so those topics move there.
// Topic ids not listed are unchanged (1A–1I, 2A, 2B, 7B–7E).
import { makeRenumber } from './topicRenumber.js';

export const OLD_TO_NEW_TOPIC = {
  'y12e1-1-1j': 'y12e1-1R',
  'y12e1-2-2c': 'y12e1-2R',
  // old 3 Graphs and equations → Year 11 Extension 1 (3J trigonometric graphs → new 7A)
  'y12e1-3A': 'y11e1-6B', 'y12e1-3B': 'y11e1-6C', 'y12e1-3C': 'y11e1-6E', 'y12e1-3D': 'y11e1-6A', 'y12e1-3E': 'y11e1-6A',
  'y12e1-3G': 'y11e1-5A', 'y12e1-3H': 'y11e1-5D', 'y12e1-3I': 'y11e1-5G', 'y12e1-3J': 'y12e1-7A',
  // old 4 Curve-sketching → 3 (new 3H "Review of continuity and differentiability")
  'y12e1-4A': 'y12e1-3A', 'y12e1-4B': 'y12e1-3B', 'y12e1-4C': 'y12e1-3C', 'y12e1-4D': 'y12e1-3D', 'y12e1-4E': 'y12e1-3E',
  'y12e1-4F': 'y12e1-3F', 'y12e1-4G': 'y12e1-3G', 'y12e1-4H': 'y12e1-3I', 'y12e1-4I': 'y12e1-3J', 'y12e1-4J': 'y12e1-3K',
  'y12e1-4-4k': 'y12e1-3R',
  // old 5 Integration → 4
  'y12e1-5A': 'y12e1-4A', 'y12e1-5B': 'y12e1-4B', 'y12e1-5C': 'y12e1-4C', 'y12e1-5D': 'y12e1-4D', 'y12e1-5E': 'y12e1-4E',
  'y12e1-5F': 'y12e1-4F', 'y12e1-5G': 'y12e1-4G', 'y12e1-5H': 'y12e1-4H', 'y12e1-5I': 'y12e1-4I', 'y12e1-5-5j': 'y12e1-4R',
  // old 6 Exponential and logarithmic → 5 Exponential functions + 6 Logarithmic functions
  'y12e1-6A': 'y12e1-5A', 'y12e1-6B': 'y12e1-5B', 'y12e1-6C': 'y12e1-5C', 'y12e1-6D': 'y12e1-5D', 'y12e1-6E': 'y12e1-5E',
  'y12e1-6F': 'y12e1-6A', 'y12e1-6G': 'y12e1-6B', 'y12e1-6H': 'y12e1-6C', 'y12e1-6I': 'y12e1-6D', 'y12e1-6J': 'y12e1-6E',
  'y12e1-6K': 'y12e1-6F', 'y12e1-6-6l': 'y12e1-6R',
  // old 7 Trigonometric functions → 7 (sin x near the origin is now 7F)
  'y12e1-7A': 'y12e1-7F', 'y12e1-7-7f': 'y12e1-7R',
  // old 8 Vectors → 9 (physical applications → 10C)
  'y12e1-8A': 'y12e1-9A', 'y12e1-8B': 'y12e1-9B', 'y12e1-8C': 'y12e1-9C', 'y12e1-8D': 'y12e1-9C', 'y12e1-8E': 'y12e1-9G',
  'y12e1-8F': 'y12e1-10C', 'y12e1-8-8g': 'y12e1-9R',
  // old 9 Motion and rates → 8 (related rates → 13C)
  'y12e1-9A': 'y12e1-8A', 'y12e1-9B': 'y12e1-8A', 'y12e1-9C': 'y12e1-8B', 'y12e1-9D': 'y12e1-8C', 'y12e1-9E': 'y12e1-13C',
  'y12e1-9F': 'y12e1-8D', 'y12e1-9-9g': 'y12e1-8R',
  // old 10 Projectile motion → 10D, 10E
  'y12e1-10A': 'y12e1-10D', 'y12e1-10B': 'y12e1-10E', 'y12e1-10-10c': 'y12e1-10R',
  // old 11 Trigonometric equations → Year 11 Extension 1 chapter 16
  'y12e1-11A': 'y11e1-16D', 'y12e1-11B': 'y11e1-16E', 'y12e1-11C': 'y11e1-16D',
  // old 12 Further calculus → 12 (volumes → 13E)
  'y12e1-12A': 'y12e1-12C', 'y12e1-12B': 'y12e1-12D', 'y12e1-12C': 'y12e1-12G', 'y12e1-12D': 'y12e1-12E',
  'y12e1-12E': 'y12e1-12F', 'y12e1-12F': 'y12e1-13E', 'y12e1-12-12g': 'y12e1-12R',
  // old 13 Differential equations → 14
  'y12e1-13A': 'y12e1-14A', 'y12e1-13B': 'y12e1-14B', 'y12e1-13C': 'y12e1-14C', 'y12e1-13D': 'y12e1-14D', 'y12e1-13E': 'y12e1-14E',
  'y12e1-13-13f': 'y12e1-14R',
  // old 14 Series and finance → 15
  'y12e1-14A': 'y12e1-15A', 'y12e1-14B': 'y12e1-15B', 'y12e1-14C': 'y12e1-15C', 'y12e1-14D': 'y12e1-15D', 'y12e1-14E': 'y12e1-15E',
  'y12e1-14-14f': 'y12e1-15R',
  // old 16 Continuous probability → 17
  'y12e1-16A': 'y12e1-17A', 'y12e1-16B': 'y12e1-17B', 'y12e1-16C': 'y12e1-17C', 'y12e1-16D': 'y12e1-17D', 'y12e1-16E': 'y12e1-17E',
  'y12e1-16F': 'y12e1-17F', 'y12e1-16G': 'y12e1-17F', 'y12e1-16-16h': 'y12e1-17R',
  // old 17 Binomial distributions → 18
  'y12e1-17A': 'y12e1-18A', 'y12e1-17B': 'y12e1-18B', 'y12e1-17C': 'y12e1-18C', 'y12e1-17D': 'y12e1-18C', 'y12e1-17-17e': 'y12e1-18R',
};

// No place in the new book or in Year 11: regions in the plane, the old chapter reviews of dropped chapters, and data.
export const RETIRED = [
  'y12e1-3F', 'y12e1-3-3k', 'y12e1-11-11d',
  'y12e1-15A', 'y12e1-15B', 'y12e1-15C', 'y12e1-15D', 'y12e1-15E', 'y12e1-15F', 'y12e1-15-15g',
  'y12e1-3', 'y12e1-11', 'y12e1-15',
];

// Old chapter id → new chapter id(s). Every old chapter is listed: chapter ids are reused with other meanings. Dropped
// chapters (3, 11, 15) are retired above — a Year 12 student is not assigned Year 11 chapters by this move. New chapters
// come with the old chapter whose content they extend: 11 Inverse trig and 12 with old 12, 13 Further applications with
// old 9 (related rates), 16 Discrete distributions with old 16.
export const OLD_TO_NEW_CHAPTER = {
  'y12e1-1': ['y12e1-1'], 'y12e1-2': ['y12e1-2'], 'y12e1-4': ['y12e1-3'], 'y12e1-5': ['y12e1-4'],
  'y12e1-6': ['y12e1-5', 'y12e1-6'], 'y12e1-7': ['y12e1-7'], 'y12e1-8': ['y12e1-9'], 'y12e1-9': ['y12e1-8', 'y12e1-13'],
  'y12e1-10': ['y12e1-10'], 'y12e1-12': ['y12e1-11', 'y12e1-12'], 'y12e1-13': ['y12e1-14'], 'y12e1-14': ['y12e1-15'],
  'y12e1-16': ['y12e1-16', 'y12e1-17'], 'y12e1-17': ['y12e1-18'],
};

// Questions placed by their content rather than by their old topic (content re-layout only: tools/content/ext1y12-renumber.mjs).
export const QUESTION_TOPIC = {
  'chs2020e1-q12a': 'y12e1-11B', 'ascham2020e1-q9': 'y12e1-11B', 'bhhs2020e1-q10': 'y12e1-11B',   // inverse trig graphs
  'ascham2020e1-q14e': 'y11e1-6C', 'bbhs2020e1-q14a': 'y11e1-6C',                                 // reciprocal graphs
  'ascham2020e1-q13d': 'y11e1-16E', 'cgs2020e1-q8': 'y12e1-4G', 'cgs2020e1-q11e': 'y12e1-8A',
  'met3-ext1-t3-q9': 'y11e1-16B', 'chs2020e1-q13c': 'y11e1-16B',                                  // compound angles
  'met3-ext1-t3-q7': 'y11e1-16C', 'bbhs2020e1-q12c': 'y11e1-16C',                                 // t-formula identities
  'abbotsleigh2020-ext1-q11bi': 'y11e1-17C', 'abbotsleigh2020-ext1-q11bii': 'y11e1-17C',          // pigeonhole principle
};

export const EXT1_Y12_RENUMBER = makeRenumber({ prefix: 'y12e1-', topicMap: OLD_TO_NEW_TOPIC, chapterMap: OLD_TO_NEW_CHAPTER, retired: RETIRED });
export const { migrateStudentIds, planProgressMoves, planNoteMoves } = EXT1_Y12_RENUMBER;
