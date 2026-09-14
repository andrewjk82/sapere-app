/**
 * Canonical question-content schema. Single source of truth for content/chapters/*.json.
 * Validated by tools/content/validate.mjs (build gate) and api/content.js (teacher edits).
 */
import { z } from 'zod';

const FigRef = z.string().regex(/^fig:[0-9a-f]{10}$/);
export const Figure = z.object({
  svg: FigRef.optional(),
  jsxGraph: z.any().optional(),
  geometry: z.any().optional(),
  html: z.string().optional(),
  source: z.any().optional(),
  plot: z.any().optional(),
  raw: z.any().optional(),      // legacy bare jsxgraph config, not rendered today
}).strict().refine((f) => Object.keys(f).length > 0, 'figure must not be empty');

export const Step = z.object({
  explain: z.string(),
  work: z.string().optional(),
  figure: Figure.optional(),
  ext: z.record(z.string(), z.any()).optional(),
}).strict();

const Option = z.union([
  z.string(),
  z.object({ text: z.string(), image: z.string().optional(), figure: Figure.optional() }).strict(),
]);

const Base = {
  id: z.string().min(1),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
  stem: z.string(),
  figure: Figure.optional(),
  image: z.string().optional(),
  hint: z.string().optional(),
  solution: z.string().optional(),
  steps: z.array(Step).optional(),
  manual: z.literal(true).optional(),
  timeLimit: z.number().int().positive().optional(),
  inactive: z.literal(true).optional(),
  alsoIn: z.array(z.string()).optional(),
  hscType: z.string().optional(),          // HSC type-practice category slug
  meta: z.record(z.string(), z.any()).optional(),
  dna: z.record(z.string(), z.any()).optional(),
  ext: z.record(z.string(), z.any()).optional(),
};

const Mc = z.object({
  ...Base, type: z.literal('mc'),
  options: z.array(Option),
  answer: z.number().int().min(0).nullable(),   // null = unresolved (must be in review queue)
}).strict()
  .refine((q) => q.answer === null || q.answer < q.options.length, { message: 'answer index out of range', path: ['answer'] })
  .refine((q) => q.options.length >= 2 || q.inactive === true, { message: 'mc needs >=2 options unless inactive', path: ['options'] });

const Short = z.object({
  ...Base, type: z.literal('short'),
  answer: z.string(),
  options: z.array(Option).optional(),
  accepted: z.array(z.string()).optional(),
  blanks: z.array(z.any()).optional(),
}).strict();

const Review = z.object({
  ...Base, type: z.literal('review'),
  answer: z.string(),
  options: z.array(Option).optional(),
  accepted: z.array(z.string()).optional(),
}).strict();

export const Question = z.lazy(() => z.discriminatedUnion('type', [
  Mc, Short, Review,
  z.object({ ...Base, type: z.literal('multipart'), mc: z.literal(true).optional(), options: z.array(Option).optional(), answer: z.union([z.string(), z.number().int().min(0)]).optional(), parts: z.array(Question).min(1) }).strict(),
]));

export const Topic = z.object({
  topicId: z.string().min(1), synthetic: z.literal(true).optional(), code: z.string(), title: z.string(),
  questions: z.array(Question),
}).strict();

export const Chapter = z.object({
  chapterId: z.string().min(1), title: z.string(), year: z.string(),
  topics: z.array(Topic).min(1),
}).strict();
