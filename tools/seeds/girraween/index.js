/**
 * Girraween 2020 Year 12 Mathematics Advanced (2U)
 * Complete Unified Question Bank - 76 Questions
 *
 * Includes:
 * - 38 Original Questions (Q1-Q38)
 * - 38 Similar Variant Questions (Q1s-Q38s)
 * - Full solutions with 5-8 step breakdowns
 * - Cambridge curriculum mapping (34 topics)
 * - All content in English
 */

import { GIRRAWEEN_2020_QUESTIONS_PART1 } from './seedGirraween2020Questions_PART1.js';
import { GIRRAWEEN_2020_QUESTIONS_PART2 } from './seedGirraween2020Questions_PART2.js';
import { GIRRAWEEN_2020_Q21_TO_Q38_COMPLETE } from './seedGirraween2020Questions_Q21to38_COMPLETE.js';
import { GIRRAWEEN_2020_SIMILAR_QUESTIONS_PART1 } from './seedGirraween2020SimilarQuestions_PART1.js';
import { GIRRAWEEN_2020_SIMILAR_QUESTIONS_PART2 } from './seedGirraween2020SimilarQuestions_PART2.js';
import { GIRRAWEEN_2020_SIMILAR_QUESTIONS_PART3 } from './seedGirraween2020SimilarQuestions_PART3.js';

// Combine all original questions
export const GIRRAWEEN_2020_ORIGINAL_QUESTIONS = [
  ...GIRRAWEEN_2020_QUESTIONS_PART1,
  ...GIRRAWEEN_2020_QUESTIONS_PART2,
  ...GIRRAWEEN_2020_Q21_TO_Q38_COMPLETE,
];

// Combine all similar questions
export const GIRRAWEEN_2020_SIMILAR_QUESTIONS = [
  ...GIRRAWEEN_2020_SIMILAR_QUESTIONS_PART1,
  ...GIRRAWEEN_2020_SIMILAR_QUESTIONS_PART2,
  ...GIRRAWEEN_2020_SIMILAR_QUESTIONS_PART3,
];

// Complete question bank (all 76 questions)
export const GIRRAWEEN_2020_ALL_QUESTIONS = [
  ...GIRRAWEEN_2020_ORIGINAL_QUESTIONS,
  ...GIRRAWEEN_2020_SIMILAR_QUESTIONS,
];

// Exam metadata
export const GIRRAWEEN_2020_METADATA = {
  examId: 'girraween-2020-2u-trial',
  school: 'Girraween High School',
  year: 2020,
  subject: 'Year 12 Mathematics Advanced (2U)',
  examType: 'Trial',
  level: 'HSC',
  duration: 180, // minutes
  totalMarks: 100,
  questionCount: 76,
  sections: [
    {
      id: 'section-i',
      name: 'Section I: Multiple Choice',
      marks: 10,
      duration: 30,
      questionCount: 10,
      questionIds: [
        'girr2020-mc1', 'girr2020-mc2', 'girr2020-mc3', 'girr2020-mc4', 'girr2020-mc5',
        'girr2020-mc6', 'girr2020-mc7', 'girr2020-mc8', 'girr2020-mc9', 'girr2020-mc10',
      ]
    },
    {
      id: 'section-ii',
      name: 'Section II: Short Answer',
      marks: 90,
      duration: 150,
      questionCount: 28,
      questionIds: [
        'girr2020-mc11', 'girr2020-mc12', 'girr2020-mc13', 'girr2020-mc14a', 'girr2020-mc14b',
        'girr2020-mc15a', 'girr2020-mc15b', 'girr2020-mc16', 'girr2020-mc17', 'girr2020-mc18a',
        'girr2020-mc18b', 'girr2020-mc19a', 'girr2020-mc19b', 'girr2020-mc19c', 'girr2020-mc20',
        'girr2020-mc21', 'girr2020-mc22', 'girr2020-mc23', 'girr2020-mc24', 'girr2020-mc25a',
        'girr2020-mc25b', 'girr2020-mc26a', 'girr2020-mc26b', 'girr2020-mc27', 'girr2020-mc28a',
        'girr2020-mc28b', 'girr2020-mc29a', 'girr2020-mc29b', 'girr2020-mc29c', 'girr2020-mc29d',
        'girr2020-mc30a', 'girr2020-mc30b', 'girr2020-mc30c', 'girr2020-mc31', 'girr2020-mc32',
        'girr2020-mc33', 'girr2020-mc34a', 'girr2020-mc34b', 'girr2020-mc35a', 'girr2020-mc36a',
        'girr2020-mc37a', 'girr2020-mc37b', 'girr2020-mc38a', 'girr2020-mc38b'
      ]
    }
  ],
  topics: {
    'y11a-2B': 'Surds and their arithmetic',
    'y11a-2D': 'Rationalising surds',
    'y11a-3A': 'Domain and range',
    'y11a-3B': 'Functions, relations, and graphs',
    'y11a-3G': 'The circle',
    'y11a-4A': 'Graphs of functions',
    'y11a-4E': 'The absolute value function',
    'y11a-5B': 'Composition of functions',
    'y11a-5D': 'Transformation of functions',
    'y11a-6A': 'Trigonometric equations',
    'y11a-6B': 'Angles of elevation and depression',
    'y11a-7C': 'Equations of lines',
    'y11a-8E': 'Sector, arc and segment',
    'y11a-9B': 'Differentiation from first principles',
    'y11a-12D': 'Permutations and combinations',
    'y11a-12G': 'Conditional probability',
    'y12a-1A': 'Simultaneous equations',
    'y12a-1C': 'Quadratic equations',
    'y12a-2B': 'The cosine rule',
    'y12a-3A': 'Using derivatives to sketch curves',
    'y12a-3C': 'Curve sketching',
    'y12a-3G': 'Optimisation problems',
    'y12a-4C': 'Numerical integration',
    'y12a-4E': 'Integrating to find a function',
    'y12a-5A': 'Review of exponential functions base e',
    'y12a-5B': 'Differentiation of e^x',
    'y12a-5C': 'The derivative as a rate of change',
    'y12a-5D': 'Differentiation of e^x and related functions',
    'y12a-6D': 'Differentiating trigonometric functions',
    'y12a-7B': 'Velocity and acceleration as derivatives',
    'y12a-8A': 'Arithmetic sequences',
    'y12a-9A': 'The language of statistics',
    'y12a-10B': 'Discrete random variables',
  }
};

export default {
  GIRRAWEEN_2020_ORIGINAL_QUESTIONS,
  GIRRAWEEN_2020_SIMILAR_QUESTIONS,
  GIRRAWEEN_2020_ALL_QUESTIONS,
  GIRRAWEEN_2020_METADATA,
};
