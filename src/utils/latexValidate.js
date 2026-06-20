/**
 * Shared LaTeX validation used by:
 *   - scripts/validateSeeds.mjs  (build-time gate over all seed files)
 *   - src/services/chapterSeeder.js (write-time gate before seeding to Firestore)
 *
 * It runs the EXACT renderer preprocessing (toDisplayText) and then asks KaTeX
 * to actually parse every resulting math segment with throwOnError:true. KaTeX
 * is the authority — no regex guessing about what is "valid".
 *
 * KaTeX is injected (renderToString) so this module stays environment-agnostic:
 * the Node script passes the `katex` package; the browser seeder passes
 * window.katex.
 */
import { toDisplayText } from './mathPreprocess';

// Same delimiter set KaTeX auto-render scans for in MathView.
const MATH_BLOCK_REGEX = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;

/**
 * Extract the math segments KaTeX would attempt to render from an already
 * preprocessed string. Returns [{ tex, displayMode }].
 */
export const extractMathSegments = (processed) => {
  if (typeof processed !== 'string' || processed === '') return [];
  // Drop the HTML tags toDisplayText emits (<br>, <span>$</span>, tables) so
  // they don't form spurious delimiter pairs. Match ONLY real tags (a letter or
  // "/" right after "<") — NOT a bare "<" in math like "x < 2", which the
  // browser also treats as literal text. Stripping every "<…>" would swallow
  // the inequality and everything up to the next real tag (false positives).
  const cleaned = processed.replace(/<\/?[a-zA-Z][^>]*>/g, '');
  const segments = [];
  let m;
  MATH_BLOCK_REGEX.lastIndex = 0;
  while ((m = MATH_BLOCK_REGEX.exec(cleaned)) !== null) {
    const raw = m[0];
    let tex;
    let displayMode;
    if (raw.startsWith('$$')) { tex = raw.slice(2, -2); displayMode = true; }
    else if (raw.startsWith('\\[')) { tex = raw.slice(2, -2); displayMode = true; }
    else if (raw.startsWith('\\(')) { tex = raw.slice(2, -2); displayMode = false; }
    else { tex = raw.slice(1, -1); displayMode = false; } // $...$
    if (tex.trim() !== '') segments.push({ tex, displayMode });
  }
  return segments;
};

/**
 * Validate a single raw field value (string). Returns an array of errors:
 * [{ tex, error }]. Empty array == valid.
 */
export const validateLatexValue = (value, renderToString) => {
  const processed = toDisplayText(value, '', { currencyHtml: true });
  const segments = extractMathSegments(processed);
  const errors = [];
  for (const { tex, displayMode } of segments) {
    try {
      renderToString(tex, { throwOnError: true, displayMode });
    } catch (err) {
      errors.push({ tex, error: String(err && err.message ? err.message : err) });
    }
  }
  return errors;
};

/**
 * Validate every LaTeX-bearing field of a raw seed question.
 * Returns [{ field, tex, error }] across all fields. Empty == valid.
 *
 * Field names cover all seed dialects (see chapterSeeder.mapSeedQuestion):
 *   q/question, options[].text, h/hint, s/solution. For multiple-choice the
 *   `answer`/`a` is an index, so it is only checked when NOT multiple_choice.
 */
export const validateSeedQuestion = (raw, renderToString) => {
  if (!raw || typeof raw !== 'object') return [];
  const out = [];
  const push = (field, value) => {
    for (const e of validateLatexValue(value, renderToString)) {
      out.push({ field, tex: e.tex, error: e.error });
    }
  };

  push('question', raw.q ?? raw.question ?? '');
  push('hint', raw.h ?? raw.hint ?? '');
  push('solution', raw.s ?? raw.solution ?? '');

  const isMC = raw.type === 'multiple_choice';
  if (!isMC) {
    push('answer', raw.a ?? raw.answer ?? '');
  }

  const opts = raw.opts || raw.options || [];
  if (Array.isArray(opts)) {
    opts.forEach((opt, i) => {
      const text = typeof opt === 'object' && opt !== null ? opt.text : opt;
      push(`options[${i}]`, text ?? '');
    });
  }

  if (Array.isArray(raw.solutionSteps)) {
    raw.solutionSteps.forEach((step, i) => {
      if (step && typeof step === 'object') {
        push(`solutionSteps[${i}].workingOut`, step.workingOut ?? '');
      }
    });
  }

  return out;
};
