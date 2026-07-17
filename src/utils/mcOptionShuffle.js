/**
 * Single source of truth for multiple-choice option shuffle + grading.
 *
 * Why this exists
 * ───────────────
 * Seed/bank MC answers are often a 0-based index ("0"…"3"). Daily Challenge
 * shuffles options for fairness. If feedback/grading still treats that index
 * as a position in the *shuffled* list, two options light green:
 *   1) the real correct option (text match), and
 *   2) whatever sits at the old index after shuffle.
 *
 * Rule: an index answers "which option did the author mean?" and nothing else.
 * It is resolved ONCE, at prepare time, into `_shuffledAnswer` (the correct
 * option TEXT). From then on highlight and grading compare text only — no index
 * is ever applied to a displayed list. `_shuffledAnswerIndex` is informational.
 *
 * Corollary: a question carrying two options that read the same ("4"/"4") or
 * mean the same ("0.5"/"1/2") lights up both, and both grade correct. That is
 * broken data — 444 seed questions have duplicate options — but the student
 * picked a correct answer and must not lose a mark for our typo. Two greens on
 * *equal* options is honest; a green on an *unrelated* option is the bug.
 *
 * All quiz surfaces that shuffle MC options MUST use these helpers.
 *
 * Pure module — no Firebase / React imports (safe for node test scripts).
 */
import { answersMatch } from './answerMatching.js';
import { toDisplayText } from './mathPreprocess.js';

const optionText = (option) => toDisplayText(option);
const optionList = (question) => (Array.isArray(question?.options) ? question.options : []);

/** Fisher–Yates permutation of [0..n-1]. Optional rng in [0,1). */
export function permutation(n, rng = Math.random) {
  const indices = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
}

/**
 * True when `raw` is a 0-based option index, not a literal option value
 * (calc generators can store answer "1" as the real numeric value).
 */
export function isOptionIndexAnswer(raw, options) {
  if (raw === undefined || raw === null) return false;
  const s = String(raw).trim();
  if (!/^\d+$/.test(s)) return false;
  const idx = Number(s);
  if (!Number.isInteger(idx) || idx < 0 || idx >= options.length) return false;
  if (options.some((o) => answersMatch(optionText(o), s))) return false;
  return true;
}

/** Resolve seed answer (index or text) → display text of the correct option. */
export function resolveCorrectOptionText(question, options = optionList(question)) {
  if (!question) return '';
  if (question._shuffledAnswer !== undefined && question._shuffledAnswer !== null) {
    return String(question._shuffledAnswer);
  }
  const raw = question.answer ?? question.a;
  if (raw === undefined || raw === null) return '';
  if (isOptionIndexAnswer(raw, options)) {
    return optionText(options[Number(String(raw).trim())]);
  }
  if (question.isManual && /^\d+$/.test(String(raw).trim())) {
    const idx = Number(String(raw).trim());
    if (Number.isInteger(idx) && options[idx] !== undefined) {
      return optionText(options[idx]);
    }
  }
  return String(raw);
}

/** Pre-shuffle index of the correct option, or -1. */
export function resolveCorrectOptionIndex(question, options = optionList(question)) {
  if (!question || !options.length) return -1;
  const raw = question.answer ?? question.a;
  if (isOptionIndexAnswer(raw, options) || (question.isManual && /^\d+$/.test(String(raw ?? '').trim()))) {
    const idx = Number(String(raw).trim());
    if (Number.isInteger(idx) && idx >= 0 && idx < options.length) return idx;
  }
  const text = resolveCorrectOptionText(question, options);
  // Exact text wins over mathematical equivalence: with options like
  // ["0.5", "1/2", …] answersMatch() is true for BOTH, and taking the first
  // match would anchor the answer to the wrong option.
  // Compare in display space — toDisplayText() rewrites "1/2" to "$\frac{1}{2}$".
  const target = optionText(text).trim();
  const exact = options.findIndex((o) => optionText(o).trim() === target);
  if (exact >= 0) return exact;
  return options.findIndex((o) => answersMatch(optionText(o), text));
}

/**
 * Prepare a shuffled MC display for a question.
 * Mutates `question` with `_shuffledAnswer` + `_shuffledAnswerIndex`.
 * Returns the shuffled options array.
 *
 * @param {object} question
 * @param {{ rng?: () => number, order?: number[] }} [opts]
 */
export function prepareShuffledMcOptions(question, opts = {}) {
  const options = optionList(question);
  if (!question || options.length < 2) {
    if (question) {
      question._shuffledAnswer = undefined;
      question._shuffledAnswerIndex = undefined;
    }
    return options;
  }

  const correctText = resolveCorrectOptionText(question, options);
  const originalIdx = resolveCorrectOptionIndex(question, options);
  const order = Array.isArray(opts.order) && opts.order.length === options.length
    ? opts.order
    : permutation(options.length, opts.rng || Math.random);

  const shuffled = order.map((i) => options[i]);
  question._shuffledAnswer = correctText;
  if (originalIdx >= 0) {
    const newIdx = order.indexOf(originalIdx);
    question._shuffledAnswerIndex = newIdx >= 0 ? newIdx : undefined;
  } else {
    const byText = shuffled.findIndex((o) => answersMatch(optionText(o), correctText));
    question._shuffledAnswerIndex = byText >= 0 ? byText : undefined;
  }
  return shuffled;
}

/**
 * Whether the option at `displayIndex` is the correct choice in the
 * *currently displayed* (possibly shuffled) list.
 *
 * Post-shuffle this is decided by TEXT only — never by an index. An index is a
 * position, and a position means nothing in a list it wasn't computed for.
 * Consequence: when a question carries two options that read the same ("4"/"4")
 * or are the same value ("0.5"/"1/2"), both light up and both grade correct.
 * That question is broken data, but the student picked a correct answer and
 * must not be punished for our typo. What must never happen is an *unrelated*
 * option lighting up, which is what applying a stale index caused.
 */
export function isDisplayedOptionCorrect(question, displayOptions, displayIndex) {
  if (!question || !displayOptions?.length) return false;
  if (displayIndex < 0 || displayIndex >= displayOptions.length) return false;

  const optText = optionText(displayOptions[displayIndex]);
  const shuffled = question._shuffledAnswer !== undefined && question._shuffledAnswer !== null;

  if (shuffled) {
    return answersMatch(optText, question._shuffledAnswer);
  }

  const raw = question.answer ?? question.a;
  const correctText = resolveCorrectOptionText(question, displayOptions);
  if (answersMatch(optText, correctText)) return true;
  if (isOptionIndexAnswer(raw, displayOptions)) {
    return displayIndex === Number(String(raw).trim());
  }
  if (question.isManual && /^\d+$/.test(String(raw ?? '').trim())) {
    return displayIndex === Number(String(raw).trim());
  }
  return answersMatch(optText, String(raw ?? ''));
}

/** Grade a student's MC pick. */
export function gradeMcSelection(question, optionTextIn, optIdx, displayOptions) {
  if (!question) return false;
  const opts = displayOptions?.length ? displayOptions : optionList(question);
  const shuffled = question._shuffledAnswer !== undefined && question._shuffledAnswer !== null;
  const correctText = shuffled
    ? question._shuffledAnswer
    : resolveCorrectOptionText(question, opts);

  // Same rule as the highlight: text decides. A student who picked an option
  // reading exactly like the answer is correct, whichever copy they tapped.
  if (answersMatch(optionTextIn, correctText)) return true;

  // Callers pass either the raw stored option text or its display form —
  // both must grade identically. correctText is display-normalised
  // (toDisplayText), and normalisation isn't a no-op: 182 seeds carry
  // \\\f-mangled LaTeX ("\<FF>rac…") that toDisplayText heals, so the raw
  // text only matches the answer AFTER the same healing.
  const normalizedIn = optionText(optionTextIn);
  if (normalizedIn !== optionTextIn && answersMatch(normalizedIn, correctText)) return true;

  // Not shuffled: a raw index answer still refers to the untouched list.
  if (!shuffled && optIdx != null && optIdx !== '') {
    if (isOptionIndexAnswer(question.answer ?? question.a, opts)) {
      return Number(optIdx) === Number(String(question.answer ?? question.a).trim());
    }
  }
  return false;
}

/** Count marked-correct options (tests / debug). Prefer 1 for unique options. */
export function countMarkedCorrect(question, displayOptions) {
  let n = 0;
  for (let i = 0; i < displayOptions.length; i++) {
    if (isDisplayedOptionCorrect(question, displayOptions, i)) n += 1;
  }
  return n;
}
