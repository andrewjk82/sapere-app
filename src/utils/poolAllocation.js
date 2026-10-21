// How many of a day's questions each chapter of a student's practice pool gets.
//
// It used to be the same for every chapter (about one each). A chapter with 4 questions then had to repeat them every
// 4 days while one with 1,900 never repeated anything (Year 7, 2026-10: a student saw the same questions 5–6 times in a
// month). The share now follows the square root of the chapter's size — big chapters get more, but small ones still
// appear (a plain proportional share would almost never show a 4-question chapter) — and is nudged towards the chapters
// the student is weakest in. Fractions are rounded at random, so a chapter whose share is 0.2 of a question turns up on
// about one day in five rather than never.

export const WEAK_BOOST = 0.6;     // accuracy 0 → ×1.3, 0.5 (or unknown) → ×1, 1 → ×0.7

export const chapterWeight = (size, accuracy) => {
  const n = Math.max(0, Number(size) || 0);
  if (n === 0) return 0;
  const acc = accuracy && accuracy.total > 0 ? accuracy.correct / accuracy.total : 0.5;
  return Math.sqrt(n) * (1 + (0.5 - acc) * WEAK_BOOST);
};

// chapterIds: the chapters to share out (empty ones may be included — they get 0).
// sizes[cid] = number of questions in the chapter's pool, accuracy[cid] = { correct, total } | undefined.
// → { [chapterId]: whole number }, summing to `count` (when at least one chapter has questions).
export const allocateQuotas = ({ chapterIds, sizes, accuracy = {}, count, rng = Math.random }) => {
  const quotas = {};
  chapterIds.forEach((cid) => { quotas[cid] = 0; });
  const weights = chapterIds.map((cid) => chapterWeight(sizes[cid], accuracy[cid]));
  const total = weights.reduce((s, w) => s + w, 0);
  if (!(count > 0) || total <= 0) return quotas;

  const frac = [];
  chapterIds.forEach((cid, i) => {
    const raw = (count * weights[i]) / total;
    quotas[cid] = Math.floor(raw);
    frac[i] = raw - Math.floor(raw);
  });
  let left = count - chapterIds.reduce((s, cid) => s + quotas[cid], 0);
  while (left > 0) {
    const pool = frac.reduce((s, f) => s + f, 0);
    let pick = -1;
    if (pool > 1e-9) {
      let r = rng() * pool;
      for (let i = 0; i < frac.length; i += 1) { r -= frac[i]; if (r < 0 && frac[i] > 0) { pick = i; break; } }
      if (pick < 0) pick = frac.findIndex((f) => f > 0);
    } else {
      pick = weights.findIndex((w) => w > 0);                // rounding dust only: any chapter that has questions
    }
    quotas[chapterIds[pick]] += 1;
    frac[pick] = 0;                                          // each chapter takes at most one rounding slot
    left -= 1;
  }
  return quotas;
};
