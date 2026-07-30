/**
 * Validation for corpus ingest. Reuses the SAME LaTeX/answer-index validator
 * the real seed pipeline uses (src/utils/latexValidate.js, gated by
 * `npm run validate-seeds` / chapterSeeder.js) instead of re-implementing
 * LaTeX checks here — one authority for "is this question broken".
 *
 * Adds two checks that validateSeedQuestion does not cover:
 *   - duplicate option text within a single question
 *   - duplicate `id` within the batch being ingested (DB uniqueness on
 *     `questions.id` catches cross-batch dupes at insert time)
 */
import katex from 'katex';
import { validateSeedQuestion } from '../../../src/utils/latexValidate.js';

const renderToString = (tex, opts) => katex.renderToString(tex, opts);

function optionText(opt) {
  return typeof opt === 'object' && opt !== null ? opt.text : opt;
}

function checkDuplicateOptions(raw) {
  const opts = raw.opts || raw.options || [];
  const errors = [];
  const seen = new Map();
  opts.forEach((opt, i) => {
    const text = String(optionText(opt) ?? '').trim();
    if (!text) return;
    if (seen.has(text)) {
      errors.push({
        field: 'options',
        tex: text,
        error: `Duplicate option text at index ${i} (also at index ${seen.get(text)}).`,
      });
    } else {
      seen.set(text, i);
    }
  });
  return errors;
}

function checkSubQuestions(raw) {
  const errors = [];
  if (!Array.isArray(raw.subQuestions)) return errors;
  raw.subQuestions.forEach((sq, i) => {
    if (!sq || typeof sq !== 'object') {
      errors.push({ field: `subQuestions[${i}]`, tex: '', error: 'Sub-question is not an object.' });
      return;
    }
    const subErrs = validateSeedQuestion(sq, renderToString);
    subErrs.forEach((e) => errors.push({ field: `subQuestions[${i}].${e.field}`, tex: e.tex, error: e.error }));
    const dupOpts = checkDuplicateOptions(sq);
    dupOpts.forEach((e) => errors.push({ field: `subQuestions[${i}].${e.field}`, tex: e.tex, error: e.error }));
  });
  return errors;
}

/**
 * Validate one raw question object (seed dialect — see chapterSeeder.js /
 * PAST_PAPER_CHECKLIST.md schema). Returns { valid, errors } where errors is
 * an array of { field, tex, error }.
 */
export function validateQuestion(raw, { idsInBatch } = {}) {
  const errors = [];

  if (!raw || typeof raw !== 'object') {
    return { valid: false, errors: [{ field: 'root', tex: '', error: 'Question is not an object.' }] };
  }
  if (!raw.id) {
    errors.push({ field: 'id', tex: '', error: 'Missing id.' });
  } else if (idsInBatch) {
    if (idsInBatch.has(raw.id)) {
      errors.push({ field: 'id', tex: raw.id, error: `Duplicate id within this batch: ${raw.id}` });
    }
    idsInBatch.add(raw.id);
  }
  if (!raw.type) {
    errors.push({ field: 'type', tex: '', error: 'Missing type.' });
  } else if (raw.type === 'mc') {
    errors.push({ field: 'type', tex: 'mc', error: "type must be 'multiple_choice', not 'mc' (see CLAUDE.md)." });
  }

  errors.push(...validateSeedQuestion(raw, renderToString));
  errors.push(...checkDuplicateOptions(raw));
  errors.push(...checkSubQuestions(raw));

  return { valid: errors.length === 0, errors };
}
