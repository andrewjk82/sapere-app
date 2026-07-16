/**
 * Final integrity checks for AI / procedurally generated questions.
 *
 * Goals:
 *  1. Answer is never empty.
 *  2. For MCQ, answer is ALWAYS present as an option *value* (never index-only).
 *  3. Re-derive answers for known stem templates (before/after, patterns, simple arithmetic).
 *  4. Never leave answer as a 0-based option index when options are numeric values.
 */

import { answersMatch } from './answerMatching.js';

export const optionText = (option) => {
  if (option === null || option === undefined) return '';
  if (typeof option === 'string' || typeof option === 'number' || typeof option === 'boolean') {
    return String(option).trim();
  }
  return String(option.text ?? option.label ?? option.value ?? '').trim();
};

export const normalizeQuestionText = (value) =>
  String(value ?? '')
    .replace(/\$\$/g, '')
    .replace(/\$/g, '')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\cdot/g, '×')
    .replace(/\\left/g, '')
    .replace(/\\right/g, '')
    .replace(/[−–—]/g, '-')
    .replace(/\s+/g, ' ')
    .trim();

/** Simple a ±×÷ b = ? (no brackets). */
export const deriveBinaryMathAnswer = (questionText) => {
  const text = normalizeQuestionText(questionText)
    .replace(/×/g, 'x')
    .replace(/\s+/g, ' ')
    .trim();
  const binary = text.match(/^(-?\d+(?:\.\d+)?)\s*([+\-x*÷/])\s*(-?\d+(?:\.\d+)?)\s*=\s*\?$/i);
  if (!binary) return null;
  const left = Number(binary[1]);
  const right = Number(binary[3]);
  if (!Number.isFinite(left) || !Number.isFinite(right)) return null;
  const op = binary[2].toLowerCase();
  let result = null;
  if (op === '+') result = left + right;
  if (op === '-') result = left - right;
  if (op === 'x' || op === '*') result = left * right;
  if ((op === '÷' || op === '/') && right !== 0) result = left / right;
  if (result === null || !Number.isFinite(result)) return null;
  return String(Number.isInteger(result) ? result : Number(result.toFixed(4)));
};

/**
 * Safe integer/decimal arithmetic with parentheses only.
 * Supports + - * / × ÷ and unary minus. Rejects anything else.
 */
export const evaluateSafeArithmetic = (expr) => {
  if (expr == null) return null;
  let s = normalizeQuestionText(expr)
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/x/gi, '*')
    .replace(/[^0-9+\-*/().\s]/g, '')
    .replace(/\s+/g, '');
  // Strip trailing =? if present
  s = s.replace(/=\?*$/, '').replace(/=$/, '');
  if (!s || !/^[\d+\-*/().]+$/.test(s)) return null;
  // Balanced parens
  let depth = 0;
  for (const ch of s) {
    if (ch === '(') depth += 1;
    if (ch === ')') depth -= 1;
    if (depth < 0) return null;
  }
  if (depth !== 0) return null;
  try {
    // eslint-disable-next-line no-new-func
    const result = Function(`"use strict"; return (${s});`)();
    if (typeof result !== 'number' || !Number.isFinite(result)) return null;
    // Guard against float noise
    const rounded = Math.round(result * 1e8) / 1e8;
    return String(Number.isInteger(rounded) ? rounded : Number(rounded.toFixed(6)).toString());
  } catch {
    return null;
  }
};

/** Derive from "What number comes before/after N?" */
export const deriveBeforeAfterAnswer = (questionText) => {
  const m = normalizeQuestionText(questionText).match(
    /^What number comes (before|after) (\d+)\?$/i,
  );
  if (!m) return null;
  const num = Number(m[2]);
  if (!Number.isFinite(num)) return null;
  return String(m[1].toLowerCase() === 'before' ? num - 1 : num + 1);
};

/**
 * Derive next item in a pure repeating pattern stem:
 * "What comes next? a, b, c, …, ___"
 */
export const deriveRepeatingPatternAnswer = (questionText) => {
  const m = normalizeQuestionText(questionText).match(/^What comes next\?\s*(.+),\s*___$/i);
  if (!m) return null;
  const shown = m[1].split(',').map((s) => s.trim()).filter(Boolean);
  if (shown.length < 2) return null;
  for (const unitLen of [1, 2, 3, 4]) {
    if (shown.length < unitLen) continue;
    const unit = shown.slice(0, unitLen);
    let ok = true;
    for (let i = 0; i < shown.length; i += 1) {
      if (shown[i] !== unit[i % unitLen]) {
        ok = false;
        break;
      }
    }
    if (ok) return String(unit[shown.length % unitLen]);
  }
  return null;
};

/** True if any option text matches the answer value. */
export const optionsContainAnswer = (options, answer) => {
  const ans = String(answer ?? '').trim();
  if (!ans) return false;
  return (Array.isArray(options) ? options : []).some((opt) => {
    const t = optionText(opt);
    return t === ans || answersMatch(t, ans);
  });
};

/**
 * Ensure MCQ options include the answer value. Replaces index-style answers.
 * Returns { options, answer } with answer always the value string.
 */
export const ensureAnswerValueInOptions = (options, answer) => {
  let ans = String(answer ?? '').trim();
  let opts = Array.isArray(options) ? [...options] : [];

  // If answer looks like a bare index and that slot's text is the real value,
  // promote to value form when the value isn't already used as an option elsewhere.
  if (/^\d+$/.test(ans) && opts.length > 0) {
    const idx = Number(ans);
    if (Number.isInteger(idx) && idx >= 0 && idx < opts.length) {
      const atIdx = optionText(opts[idx]);
      const valueHits = opts.filter((o) => {
        const t = optionText(o);
        return t === ans || answersMatch(t, ans);
      });
      // Index-only answer: no option text equals "3" but options[3] exists.
      if (valueHits.length === 0 && atIdx) {
        ans = atIdx;
      }
    }
  }

  if (!ans) return { options: opts, answer: ans };

  if (opts.length === 0) {
    return { options: opts, answer: ans };
  }

  if (!optionsContainAnswer(opts, ans)) {
    // Inject answer, drop a non-matching distractor to keep ≤4 options.
    const rest = opts.filter((o) => {
      const t = optionText(o);
      return t !== ans && !answersMatch(t, ans);
    });
    opts = [ans, ...rest].slice(0, Math.max(4, opts.length));
  }

  return { options: opts, answer: ans };
};

/**
 * Verify / repair a generated question. Always returns a new object.
 * Safe for curriculum generators + calculation generators.
 */
export const verifyAndRepairGeneratedQuestion = (question) => {
  if (!question || typeof question !== 'object') return question;

  const qText = question.question || question.questionText || '';
  let answer = question.answer;
  let options = Array.isArray(question.options) ? [...question.options] : [];
  let solution = question.solution;
  let repaired = false;
  const notes = [];

  // Prefer re-derived answers for known stems (source of truth = stem text).
  const derivedBefore = deriveBeforeAfterAnswer(qText);
  if (derivedBefore != null) {
    if (String(answer).trim() !== derivedBefore) {
      notes.push(`before_after: ${answer} → ${derivedBefore}`);
      answer = derivedBefore;
      repaired = true;
    }
  }

  const derivedPattern = deriveRepeatingPatternAnswer(qText);
  if (derivedPattern != null) {
    if (String(answer).trim() !== derivedPattern) {
      notes.push(`pattern: ${answer} → ${derivedPattern}`);
      answer = derivedPattern;
      repaired = true;
    }
  }

  const derivedBinary = deriveBinaryMathAnswer(qText);
  if (derivedBinary != null) {
    if (!answersMatch(String(answer ?? ''), derivedBinary)) {
      notes.push(`binary: ${answer} → ${derivedBinary}`);
      answer = derivedBinary;
      repaired = true;
    }
  } else {
    // Nested / multi-op arithmetic in $$...$$ or plain text ending with =?
    const raw = normalizeQuestionText(qText);
    if (/=\s*\?$/.test(raw) || /=\s*\?\s*$/.test(raw)) {
      const expr = raw.replace(/=\s*\?\s*$/, '');
      // Only attempt when it looks like pure arithmetic (digits + ops + parens)
      if (/^[\d+\-×÷*/().\s]+$/.test(expr) && /[+\-×÷*/]/.test(expr)) {
        const derived = evaluateSafeArithmetic(expr);
        if (derived != null && !answersMatch(String(answer ?? ''), derived)) {
          notes.push(`arith: ${answer} → ${derived}`);
          answer = derived;
          repaired = true;
        }
      }
    }
  }

  answer = String(answer ?? '').trim();

  // MCQ integrity: answer must be a value present in options.
  if (options.length > 0) {
    const fixed = ensureAnswerValueInOptions(options, answer);
    if (fixed.answer !== answer) {
      notes.push(`index→value: ${answer} → ${fixed.answer}`);
      answer = fixed.answer;
      repaired = true;
    }
    // Detect option list mutation (answer injected).
    const before = options.map(optionText).join('|');
    const after = fixed.options.map(optionText).join('|');
    if (before !== after) {
      notes.push('options_injected_answer');
      repaired = true;
    }
    options = fixed.options;

    if (!optionsContainAnswer(options, answer)) {
      // Last resort: force-inject
      options = [answer, ...options].slice(0, 4);
      notes.push('force_inject_answer');
      repaired = true;
    }
  }

  if (!answer) {
    notes.push('empty_answer');
  }

  const out = {
    ...question,
    answer,
    ...(options.length ? { options } : {}),
    ...(solution != null ? { solution } : {}),
  };

  if (repaired) {
    out._answerRepaired = true;
    out._answerRepairNotes = notes;
    if (typeof console !== 'undefined' && console.warn) {
      console.warn('[generatedAnswerGuard]', notes.join('; '), (qText || '').slice(0, 80));
    }
  }

  return out;
};
