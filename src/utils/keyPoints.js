/**
 * Question "key points" — parts of a question's stem that get a highlighter after a wrong
 * answer, each with a short tip. Stored per question (and per multipart part) as
 *   keyPoints: [{ text, note }]
 * where `text` is an exact substring of the stem (the raw source, LaTeX included).
 *
 * Maths is highlighted as whole units: a key point that touches part of a `\(...\)` / `$...$`
 * block is widened to cover the entire block, because KaTeX can't render half an expression
 * inside a highlight.
 *
 * Rendering (MathView): markers are spliced into the source string OUTSIDE maths, survive
 * toDisplayText, and are swapped for <mark> tags just before KaTeX runs — so the maths inside a
 * highlight still renders normally.
 */

// Same delimiters MathView treats as maths (incl. the escaped-\$ rule for currency).
const MATH_BLOCK = /\$\$[\s\S]*?\$\$|(?<!\\)\$[\s\S]*?(?<!\\)\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/g;

// Plain ASCII: toDisplayText rewrites unusual code points (private-use chars came out as
// "<span>$</span>"), but leaves letter runs alone. Chosen to never occur in real content.
const OPEN = 'QZKPOPEN';
const MID = 'QZKPMID';
const CLOSE = 'QZKPCLOSE';

const mathRanges = (stem) => {
  const out = [];
  const src = String(stem);
  for (const m of src.matchAll(MATH_BLOCK)) {
    // Old seeds double-escape delimiters ("\\(" in the file = `\\(`): the regex matches from the
    // second backslash, so pull the start back over any extra backslashes — a highlight must
    // never split them, or toDisplayText can no longer heal the delimiter.
    let start = m.index;
    while (start > 0 && src[start - 1] === '\\') start -= 1;
    out.push([start, m.index + m[0].length]);
  }
  return out;
};

/** Widen [start, end) so it never cuts through a maths block. */
export const snapToMath = (stem, start, end) => {
  let s = start; let e = end;
  for (const [ms, me] of mathRanges(stem)) {
    if (ms < e && me > s) { s = Math.min(s, ms); e = Math.max(e, me); }
  }
  return [s, e];
};

/**
 * Where each key point sits in the stem. Missing ones (the stem was edited since) come back
 * with found:false; overlapping ones are dropped (the earlier one wins).
 */
export const locateKeyPoints = (stem, keyPoints) => {
  const src = String(stem || '');
  const placed = [];
  (Array.isArray(keyPoints) ? keyPoints : []).forEach((kp, idx) => {
    const text = String(kp?.text || '');
    const at = text ? src.indexOf(text) : -1;
    if (at < 0) { placed.push({ idx, found: false }); return; }
    const [start, end] = snapToMath(src, at, at + text.length);
    const overlaps = placed.some((p) => p.found && p.start < end && p.end > start);
    placed.push(overlaps ? { idx, found: false, overlap: true } : { idx, found: true, start, end });
  });
  return placed;
};

/** Splice invisible markers around each located key point. */
export const insertKeyPointMarkers = (stem, keyPoints) => {
  const src = String(stem || '');
  const spots = locateKeyPoints(src, keyPoints).filter((p) => p.found).sort((a, b) => b.start - a.start);
  let out = src;
  spots.forEach(({ idx, start, end }) => {
    out = `${out.slice(0, start)}${OPEN}${idx}${MID}${out.slice(start, end)}${CLOSE}${out.slice(end)}`;
  });
  return out;
};

export const hasKeyPointMarkers = (s) => typeof s === 'string' && s.includes(OPEN);

/** Swap markers for <mark> tags in one rendered line (unbalanced pieces are repaired). */
export const keyPointMarkersToHtml = (html) => {
  let depth = 0;
  let out = String(html).replace(new RegExp(`${OPEN}(\\d+)${MID}|${CLOSE}`, 'g'), (m, idx) => {
    if (m === CLOSE) {
      if (depth === 0) return '';
      depth -= 1;
      return '</mark>';
    }
    depth += 1;
    return `<mark class="sapere-kp" data-kp="${idx}" style="background:#fde68a;color:inherit;border-radius:4px;padding:0 2px;border-bottom:2px dashed #d97706;cursor:pointer">`;
  });
  while (depth > 0) { out += '</mark>'; depth -= 1; }
  return out;
};

/** Clean + cap a keyPoints array before saving. */
export const sanitizeKeyPoints = (keyPoints) => (Array.isArray(keyPoints) ? keyPoints : [])
  .map((kp) => ({ text: String(kp?.text || '').trim() ? String(kp.text) : '', note: String(kp?.note || '').trim() }))
  .filter((kp) => kp.text && kp.note)
  .slice(0, 6);

/** Editor draft for a question: { main: [...], p0: [...], p1: [...] } (one list per part). */
export const initialKeyPointsDraft = (question) => {
  const out = { main: Array.isArray(question?.keyPoints) ? question.keyPoints : [] };
  (question?.subQuestions || []).forEach((sq, i) => { out[`p${i}`] = Array.isArray(sq?.keyPoints) ? sq.keyPoints : []; });
  return out;
};
