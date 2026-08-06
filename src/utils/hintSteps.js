// Parse a question's `hint` field into an ordered list of step strings.
//
// The field is NOT reliably a string. Some seeds store it as an array of
// step objects ({ explanation, workingOut, graphData }) — the same shape as
// solutionSteps — e.g. y5-rn-1-q3a…q3c and y5-rn-1-l2-q3a…q3d in
// seedYear5Ch1Questions.js. Calling hint.split() on those crashed the whole
// page with "hint.split is not a function" (minified: "e.split is not a
// function"), which took out Secret Note and Daily Challenge for any student
// who hit one of those questions (2026-08-06).
//
// Teacher edits and future imports can put anything in this field, so the
// parser coerces rather than assumes. Shared by SecretNoteView and
// ChallengeQuizView — they used to keep private, identical copies.

// One array entry / object → one step string.
const stepToString = (step) => {
  if (step === null || step === undefined) return '';
  if (typeof step === 'string') return step;
  if (typeof step === 'number' || typeof step === 'boolean') return String(step);
  if (Array.isArray(step)) return step.map(stepToString).filter(Boolean).join('\n');
  if (typeof step === 'object') {
    // Step-object shape: explanation on one line, working out under it.
    const parts = [
      step.explanation ?? step.text ?? step.label ?? step.hint ?? step.value ?? '',
      step.workingOut ?? step.working ?? '',
    ].map((p) => (typeof p === 'string' ? p.trim() : ''));
    return parts.filter(Boolean).join('\n');
  }
  return '';
};

export const parseHintSteps = (hint) => {
  if (!hint) return [];

  // Array of steps: already split — keep the authored boundaries.
  if (Array.isArray(hint)) {
    return hint.map(stepToString).map((s) => s.trim()).filter(Boolean);
  }

  // A single step object is already one step — don't let the newline between
  // its explanation and working out split it into two.
  if (typeof hint === 'object') {
    const one = stepToString(hint).trim();
    return one ? [one] : [];
  }

  const text = typeof hint === 'string' ? hint : String(hint);
  if (!text.trim()) return [];

  // Numbered steps: "1. foo\n2. bar"
  const numbered = text.split(/\n(?=\d+[.)]\s)/);
  if (numbered.length > 1) return numbered.map((s) => s.replace(/^\d+[.)]\s*/, '').trim()).filter(Boolean);
  // "Step N:" prefix
  const stepped = text.split(/\n(?=Step\s+\d+\s*[:–-])/i);
  if (stepped.length > 1) return stepped.map((s) => s.replace(/^Step\s+\d+\s*[:–-]\s*/i, '').trim()).filter(Boolean);
  // Blank-line paragraphs
  const paras = text.split(/\n{2,}/);
  if (paras.length > 1) return paras.map((s) => s.trim()).filter(Boolean);
  // Single newlines
  const lines = text.split(/\n/).map((s) => s.trim()).filter(Boolean);
  if (lines.length > 1) return lines;
  // Single block
  return text.trim() ? [text.trim()] : [];
};

export default parseHintSteps;
