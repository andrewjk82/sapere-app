// Question pool for /api/generate-past-paper, read from the git bank (content/chapters/exam:*.json)
// and mapped to the flat shape the paper renderer uses:
//   multiple_choice → { q, opts: string[], a: correct option text, solutionSteps, ... }
//   short_answer    → { q, answer, solutionSteps, ... }   (a multipart becomes "stem\n(a) …\n(b) …")
// Questions with a figure or image are skipped — the printed paper has no way to show them.

import caringbah from '../../content/chapters/exam:caringbah-2020.json' with { type: 'json' };
import abbotsleigh from '../../content/chapters/exam:abbotsleigh-2020.json' with { type: 'json' };
import ascham from '../../content/chapters/exam:asc-2020.json' with { type: 'json' };
import barker from '../../content/chapters/exam:bar-2020.json' with { type: 'json' };
import baulkham from '../../content/chapters/exam:baulko-2020.json' with { type: 'json' };
import blacktownBoys from '../../content/chapters/exam:bbhs-2020.json' with { type: 'json' };
import cherrybrook from '../../content/chapters/exam:cths-2020.json' with { type: 'json' };
import cranbrook from '../../content/chapters/exam:cra-2023.json' with { type: 'json' };
import danebank from '../../content/chapters/exam:dane-2020.json' with { type: 'json' };
import fortStreet from '../../content/chapters/exam:fortst-2020.json' with { type: 'json' };
import girraween from '../../content/chapters/exam:girr-2020.json' with { type: 'json' };

// The Mathematics Advanced trial papers the practice paper draws from.
export const PAST_PAPER_CHAPTERS = [
  caringbah, abbotsleigh, ascham, barker, baulkham, blacktownBoys,
  cherrybrook, cranbrook, danebank, fortStreet, girraween,
];

const optText = (o) => (typeof o === 'string' ? o : o?.text || '');
const hasPicture = (q) => Boolean(q.figure || q.image || (q.options || []).some((o) => o?.figure || o?.image));
const legacySteps = (steps) => (steps || []).map((s) => ({ explanation: s.explain || '', workingOut: s.work || '' }));
const partAnswer = (p) => (p.type === 'mc' ? optText(p.options?.[p.answer]) : String(p.answer ?? ''));
const label = (i) => String.fromCharCode(97 + i);
const stripLabel = (stem) => String(stem || '').replace(/^\s*\(?[a-z]{1,4}\)\s*/i, '');

export const toPaperQuestion = (q, source) => {
  const base = { id: q.id, difficulty: q.difficulty, source };
  if (q.type === 'mc') {
    return { ...base, type: 'multiple_choice', q: q.stem, opts: (q.options || []).map(optText), a: optText(q.options?.[q.answer]), solutionSteps: legacySteps(q.steps) };
  }
  if (q.type === 'multipart') {
    const parts = q.parts || [];
    return {
      ...base,
      type: 'short_answer',
      q: [q.stem, ...parts.map((p, i) => `(${label(i)}) ${stripLabel(p.stem)}`)].join('\n'),
      answer: parts.map((p, i) => `\n(${label(i)}) ${partAnswer(p)}`).join(''),
      solutionSteps: parts.flatMap((p) => legacySteps(p.steps)),
    };
  }
  return { ...base, type: 'short_answer', q: q.stem, answer: String(q.answer ?? ''), solutionSteps: legacySteps(q.steps) };
};

export const pastPaperQuestions = (chapters = PAST_PAPER_CHAPTERS) => chapters.flatMap((ch) =>
  ch.topics.flatMap((t) => t.questions)
    .filter((q) => !q.inactive && !hasPicture(q))
    .filter((q) => q.type !== 'multipart' || (q.parts || []).every((p) => !hasPicture(p)))
    .map((q) => toPaperQuestion(q, q.meta?.source || ch.title)));
