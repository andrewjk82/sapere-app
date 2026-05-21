// Heuristic parser: turn a question's `solution` (free-form text or HTML) into
// an ordered list of "steps" we can reveal one at a time in the review view.
//
// Priority order (first match wins):
//   1. question.solutionSteps already an array → use as-is.
//   2. Explicit "Step N" / "단계 N" markers → split on each marker.
//   3. <p>…</p> blocks (rich HTML solutions imported from textbooks).
//   4. Numbered list at the start of a line: "1.", "1)", "①".
//   5. Double-newline paragraph breaks.
//   6. Single big block — return as one step.
//
// Each returned step is a string (may still contain HTML / KaTeX `$$ … $$`).
// MathView renders it correctly.

const isNonEmpty = (s) => typeof s === 'string' && s.trim().length > 0;

// Strip leftover Markdown syntax (### headings, **bold**, *italic*, list
// bullets) that sometimes survives in LLM-generated solution text. Math
// blocks ($…$ / $$…$$) are protected so we never corrupt KaTeX content.
const MATH_OPEN = '';
const MATH_CLOSE = '';

const stripMarkdown = (s) => {
  if (typeof s !== 'string' || s.length === 0) return s;
  // Skip HTML-rich content — it has its own formatting.
  if (/<\/(p|div|ul|ol|li|strong|em|h[1-6])>|<br\s*\/?>/i.test(s)) return s;

  // Protect math blocks behind private-use-area sentinels so the Markdown
  // regexes below never touch KaTeX content (or real numbers in the text).
  const mathBlocks = [];
  let str = s.replace(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$)/g, (m) => {
    mathBlocks.push(m);
    return MATH_OPEN + (mathBlocks.length - 1) + MATH_CLOSE;
  });

  // Heading markers at the start of a line: #, ##, ###…
  str = str.replace(/^[ \t]*#{1,6}[ \t]*/gm, '');
  // Bold / italic wrappers
  str = str.replace(/\*\*\*([^*]+)\*\*\*/g, '$1');
  str = str.replace(/\*\*([^*]+)\*\*/g, '$1');
  str = str.replace(/__([^_]+)__/g, '$1');
  // Any leftover / unbalanced bold markers
  str = str.replace(/\*\*/g, '');
  // List bullet markers at the start of a line
  str = str.replace(/^[ \t]*[-*+][ \t]+/gm, '');
  // Collapse 3+ blank lines created by removed markers
  str = str.replace(/\n{3,}/g, '\n\n');

  // Restore math blocks
  str = str.replace(
    new RegExp(MATH_OPEN + '(\\d+)' + MATH_CLOSE, 'g'),
    (_, i) => mathBlocks[Number(i)] ?? ''
  );
  return str.trim();
};

const stripStepPrefix = (s) =>
  s.replace(/^\s*(?:step\s*\d+[:.\-)]?\s*|\d+[:.\)]\s*|[①-⑳]\s*|단계\s*\d+[:.\-)]?\s*)/i, '').trim();

// Strip an outermost wrapping <div>...</div> that some imported solutions add
// for centering/styling. The inner HTML is what we want to split.
const unwrapOuterDiv = (html) => {
  const m = html.match(/^\s*<div[^>]*>([\s\S]*)<\/div>\s*$/i);
  return m ? m[1] : html;
};

const splitByParagraphs = (html) => {
  // Match <p ...>...</p> blocks (greedy-safe).
  const matches = html.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi);
  if (!matches || matches.length < 2) return null;
  // Strip the <p> tags but keep inner content + math.
  return matches
    .map((m) => m.replace(/^<p\b[^>]*>/i, '').replace(/<\/p>\s*$/i, '').trim())
    .filter(isNonEmpty);
};

const splitByExplicitStepMarker = (text) => {
  // Splits before each "Step N" / "단계 N" marker. Keep the marker with its block.
  const re = /(?=\b(?:step|단계)\s*\d+\b)/gi;
  const parts = text.split(re).map((p) => p.trim()).filter(isNonEmpty);
  if (parts.length < 2) return null;
  return parts.map(stripStepPrefix).filter(isNonEmpty);
};

const splitByNumberedList = (text) => {
  // Split on a numbered marker at the start of a line: "1.", "1)", "①".
  // Use lookahead so the marker stays with the following content.
  const re = /(?:\n|^)\s*(?=(?:\d+[.\)]|[①-⑳])\s)/g;
  const parts = text.split(re).map((p) => p.trim()).filter(isNonEmpty);
  if (parts.length < 2) return null;
  return parts.map(stripStepPrefix).filter(isNonEmpty);
};

const splitByDoubleNewline = (text) => {
  const parts = text.split(/\n\s*\n/).map((p) => p.trim()).filter(isNonEmpty);
  return parts.length >= 2 ? parts : null;
};

export const parseSolutionSteps = (question) => {
  if (!question) return [];

  if (Array.isArray(question.solutionSteps) && question.solutionSteps.length > 0) {
    return question.solutionSteps
      .map((s) => (typeof s === 'object' && s !== null ? s : { explanation: String(s), workingOut: '' }))
      .map((s) => ({
        ...s,
        explanation: stripMarkdown(s.explanation ?? ''),
        workingOut: stripMarkdown(s.workingOut ?? ''),
      }))
      .filter((s) => isNonEmpty(s.explanation) || isNonEmpty(s.workingOut));
  }

  const raw = String(question.solution || '').trim();
  if (!raw) return [];

  const toObjects = (strings) =>
    strings
      .map((s) => ({ explanation: stripMarkdown(s), workingOut: '' }))
      .filter((s) => isNonEmpty(s.explanation));

  // Prefer paragraph blocks for HTML-rich solutions.
  if (/<p\b/i.test(raw)) {
    const paragraphs = splitByParagraphs(unwrapOuterDiv(raw));
    if (paragraphs && paragraphs.length >= 2) return toObjects(paragraphs.map(stripStepPrefix));
  }

  // Plain-text strategies.
  const text = unwrapOuterDiv(raw);

  const byStep = splitByExplicitStepMarker(text);
  if (byStep) return toObjects(byStep);

  const byNumbered = splitByNumberedList(text);
  if (byNumbered) return toObjects(byNumbered);

  const byBlank = splitByDoubleNewline(text);
  if (byBlank) return toObjects(byBlank.map(stripStepPrefix));

  return toObjects([text]);
};
