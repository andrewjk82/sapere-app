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
 * Rule: after shuffle, only use:
 *   - `_shuffledAnswer` (correct option TEXT), and/or
 *   - `_shuffledAnswerIndex` (index in the *shuffled* display order).
 * Never apply the raw seed index to the displayed order.
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
 */
export function isDisplayedOptionCorrect(question, displayOptions, displayIndex) {
  if (!question || !displayOptions?.length) return false;
  if (displayIndex < 0 || displayIndex >= displayOptions.length) return false;

  const optText = optionText(displayOptions[displayIndex]);
  const shuffled = question._shuffledAnswer !== undefined && question._shuffledAnswer !== null;

  if (shuffled) {
    if (
      question._shuffledAnswerIndex != null
      && Number(question._shuffledAnswerIndex) === displayIndex
    ) {
      return true;
    }
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

  if (answersMatch(optionTextIn, correctText)) return true;

  if (optIdx != null && optIdx !== '') {
    const i = Number(optIdx);
    if (shuffled && question._shuffledAnswerIndex != null) {
      return i === Number(question._shuffledAnswerIndex);
    }
    if (!shuffled && isOptionIndexAnswer(question.answer ?? question.a, opts)) {
      return i === Number(String(question.answer ?? question.a).trim());
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
