// Daily Practice answers in up to three goes:
//   1st correct = full points.
//   1st wrong   = the question goes to the Secret Note and a hint appears; 2nd correct = half points.
//   2nd wrong   = the worked solution and the answer appear; more tries are practice and earn nothing.
// In a multi-part question each part follows this on its own, and a part already right stays locked.
import { parseHintSteps } from './hintSteps.js';
import { parseSolutionSteps } from './solutionSteps.js';
import { resolveCorrectOptionText } from './mcOptionShuffle.js';

export const FIRST_TRY = 1;
export const HINT_TRY = 2;
export const PRACTICE = 3;

// Daily Calculation is timed speed training: one go per question, as before.
export const usesAnswerAttempts = (challengeType) => challengeType === 'daily' || challengeType === 'extra';

// An extra round is scored like Daily Practice, at half the XP.
export const EXTRA_ROUND_XP_SHARE = 0.5;
export const extraRoundXp = (dailyXp) => Math.round((Number(dailyXp) || 0) * EXTRA_ROUND_XP_SHARE);

export const nextAttempt = (attempt, correct) => (correct ? attempt : Math.min(attempt + 1, PRACTICE));

export const pointsForAttempt = (attempt) => {
  if (attempt === FIRST_TRY) return 1;
  return attempt === HINT_TRY ? 0.5 : 0;
};

// parts: { [partKey]: attempt it was solved on }. partResults: [{ id, correct, pending? }].
export const applyPartResults = (parts, partResults, attempt) => {
  const next = { ...parts };
  partResults.forEach((r) => {
    if (!r.pending && r.correct && next[r.id] === undefined) next[r.id] = attempt;
  });
  return next;
};

export const pointsForParts = (parts) => Object.values(parts).reduce((sum, attempt) => sum + pointsForAttempt(attempt), 0);

// How much of one question counts towards the session score. A multi-part question counts only when every part was
// solved, as it always has; older results and Daily Calculation carry no solvedOnAttempt.
export const questionCredit = (r) => {
  if (!r || typeof r !== 'object') return 0;
  if ('solvedOnAttempt' in r) {
    if (!r.solvedOnAttempt || !r.totalPoints) return 0;
    return Math.round((Number(r.pointsEarned || 0) / Number(r.totalPoints)) * 100) / 100;
  }
  if (r.totalPoints) return Number(r.pointsEarned || 0) >= Number(r.totalPoints) ? 1 : 0;
  return r.correct || Number(r.pointsEarned || 0) >= 1 ? 1 : 0;
};

export const sessionScore = (results) => Math.round(
  (results || []).reduce((sum, r) => sum + questionCredit(r), 0) * 100,
) / 100;

const squash = (s) => String(s ?? '').replace(/\\[(),[\]]|\s+|\$/g, '').toLowerCase();

// True when the text gives the answer away. An answer of one or two characters ("2") appears inside all sorts of
// working, so it only counts at the very end of the text ("x = 2") or as the whole text.
const givesAnswerAway = (text, answer) => {
  const t = squash(text);
  const a = squash(answer);
  if (!t || !a) return false;
  if (a.length >= 3) return t.includes(a);
  return t === a || t.endsWith(`=${a}`);
};

// Generated questions (primary years) often write the answer into the hint: "The answer is 2:15", "They are equal",
// "10c - 5c = 5c more needed". There a short answer counts anywhere as a whole word.
const generatedHintGivesAway = (text, answer) => {
  const a = String(answer ?? '').trim();
  if (!a) return false;
  if (/\bthe answer\b/i.test(String(text))) return true;
  const escaped = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // A number may carry a unit in the hint: answer 5, hint "5c change".
  const tail = /^\d/.test(a) ? '[a-z]*' : '';
  return new RegExp(`(^|[^\\w.])${escaped}${tail}($|[^\\w])`, 'i').test(String(text));
};

export const answerText = (q) => {
  if (Array.isArray(q?.blanks) && q.blanks.length > 0) return q.blanks.map((b) => b?.answer ?? '').join(', ');
  return resolveCorrectOptionText(q) ?? '';
};

// The help for one question or part: its own hint, else the first step of its solution without anything that hands
// over the answer. Returns null when there is nothing safe to show.
const hintFor = (q) => {
  const answer = answerText(q);
  const generated = String(q?.id ?? '').startsWith('gen-');
  const safe = (text) => !givesAnswerAway(text, answer) && !(generated && generatedHintGivesAway(text, answer));
  const hint = parseHintSteps(q?.hint).filter(safe);
  if (hint.length > 0) return { lines: hint };
  const [first, ...rest] = parseSolutionSteps(q) || [];
  if (!first) return null;
  const explanation = typeof first === 'string' ? first : first.explanation;
  const work = typeof first === 'string' ? '' : first.workingOut;
  const lines = [];
  if (explanation && safe(explanation)) lines.push(explanation);
  // A one-step solution's working is the answer.
  if (work && rest.length > 0 && safe(work)) lines.push(work);
  return lines.length > 0 ? { lines } : null;
};

const GENERIC_HINT = 'Read the question again, write down what you know, and try one clear step on your working out.';

// Hints for the second go: one per part still to solve, or one for the whole question.
export const retryHints = (q, lockedParts = {}) => {
  const parts = Array.isArray(q?.subQuestions) ? q.subQuestions : [];
  const open = parts
    .map((part, i) => ({ part, i, key: part.id || i }))
    .filter(({ key }) => lockedParts[key] === undefined);
  const forParts = open
    .map(({ part, i }) => {
      const help = hintFor(part);
      return help && { label: String.fromCharCode(97 + i), lines: help.lines };
    })
    .filter(Boolean);
  if (forParts.length > 0) return forParts;
  const own = hintFor(q);
  return [{ label: null, lines: own ? own.lines : [GENERIC_HINT] }];
};
