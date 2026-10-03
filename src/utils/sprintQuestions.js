// Sprint question generators — pure (no Firebase), shared shape:
// { key, prompt, answer, subPrompt? }. `key` is the uniqueness key within a run.
// Answers are always integers 1–999 so the digit-only keypad works for every sprint.

export const SPRINT_QUESTION_COUNT = 20;
const MINUS = '−';

const yearNumber = (year) => {
  const n = Number(String(year ?? '').replace(/[^0-9]/g, ''));
  return Number.isFinite(n) && n >= 1 ? n : null;
};
// Unknown year → upper band (same as the original Times Table rule).
const isLowerPrimary = (year) => { const n = yearNumber(year); return n !== null && n <= 3; };
const isPrimary = (year) => { const n = yearNumber(year); return n !== null && n <= 6; };

const randInt = (min, max, rng) => min + Math.floor(rng() * (max - min + 1));

const shuffle = (arr, rng) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Rejection sampling with a hard attempt cap — every pool below has far more
// than `count` distinct keys, and the cap means a narrow range can never hang
// the tab (see the 2026-07 questionGenerator infinite-loop incident).
const pickUnique = (count, make, rng, maxAttempts = 5000) => {
  const out = [];
  const seen = new Set();
  for (let i = 0; i < maxAttempts && out.length < count; i++) {
    const q = make(rng);
    if (!seen.has(q.key)) { seen.add(q.key); out.push(q); }
  }
  return out;
};

export const getFactorRangeForYear = (year) => (isLowerPrimary(year) ? { min: 2, max: 9 } : { min: 2, max: 12 });
const addRange = (year) => (isLowerPrimary(year) ? { min: 1, max: 20 } : { min: 10, max: 99 });

// Algebra: several equation shapes, rotated so a run never sits on one shape.
// Every form returns the rendered equation and x; answers stay positive
// integers (digit keypad). x is 1–12 except the divide-x forms, where x is a
// multiple of the divisor.
const coef = (a) => (a === 1 ? 'x' : `${a}x`);
const ALG_ONE_STEP = [
  (r) => { const x = randInt(1, 12, r); const a = randInt(1, 20, r); return [`x + ${a} = ${x + a}`, x]; },
  (r) => { const x = randInt(1, 12, r); const a = randInt(1, 20, r); return [`${a} + x = ${x + a}`, x]; },
  (r) => { const x = randInt(2, 12, r); const a = randInt(1, x - 1, r); return [`x ${MINUS} ${a} = ${x - a}`, x]; },
  (r) => { const x = randInt(1, 12, r); const c = randInt(1, 20, r); return [`${x + c} ${MINUS} x = ${c}`, x]; },
  (r) => { const x = randInt(1, 12, r); const a = randInt(2, 12, r); return [`${a}x = ${a * x}`, x]; },
  (r) => { const a = randInt(2, 9, r); const c = randInt(2, 9, r); return [`x ÷ ${a} = ${c}`, a * c]; },
  (r) => { const x = randInt(1, 12, r); const a = randInt(1, 20, r); return [`${x + a} = x + ${a}`, x]; },
];
const ALG_MIXED = [
  (r) => { const x = randInt(1, 12, r); const a = randInt(2, 9, r); const b = randInt(1, 20, r); return [`${a}x + ${b} = ${a * x + b}`, x]; },
  (r) => { const x = randInt(2, 12, r); const a = randInt(2, 9, r); const b = randInt(1, Math.min(20, a * x - 1), r); return [`${a}x ${MINUS} ${b} = ${a * x - b}`, x]; },
  (r) => { const x = randInt(1, 12, r); const a = randInt(2, 9, r); const b = randInt(1, 20, r); return [`${a * x + b} = ${a}x + ${b}`, x]; },
  (r) => { const x = randInt(1, 12, r); const a = randInt(2, 6, r); const b = randInt(1, 9, r); return [`${a}(x + ${b}) = ${a * (x + b)}`, x]; },
  (r) => { const x = randInt(2, 12, r); const a = randInt(2, 6, r); const b = randInt(1, x - 1, r); return [`${a}(x ${MINUS} ${b}) = ${a * (x - b)}`, x]; },
  (r) => { const a = randInt(2, 5, r); const k = randInt(1, 12, r); const b = randInt(1, 12, r); return [`x/${a} + ${b} = ${k + b}`, a * k]; },
  (r) => { const a = randInt(2, 5, r); const c = randInt(2, 12, r); const b = randInt(1, Math.min(12, a * c - 1), r); return [`(x + ${b})/${a} = ${c}`, a * c - b]; },
  (r) => { const x = randInt(1, 12, r); const a = randInt(3, 9, r); const c = randInt(1, a - 1, r); const b = randInt(1, 20, r); return [`${a}x + ${b} = ${coef(c)} + ${(a - c) * x + b}`, x]; },
  (r) => { const x = randInt(1, 12, r); const a = randInt(2, 6, r); const b = randInt(2, 6, r); return [`${a}x + ${b}x = ${(a + b) * x}`, x]; },
  (r) => { const x = randInt(1, 12, r); const a = randInt(1, 5, r); const c = randInt(1, 20, r); return [`${a * x + c} ${MINUS} ${coef(a)} = ${c}`, x]; },
];

// Round-robin over the forms in a fresh shuffled order each cycle; duplicates
// re-rolled (same hard attempt cap as pickUnique).
const pickRotating = (count, forms, rng, maxAttempts = 5000) => {
  const out = [];
  const seen = new Set();
  let order = [];
  for (let i = 0; i < maxAttempts && out.length < count; i++) {
    if (order.length === 0) order = shuffle(forms.map((_, k) => k), rng);
    const [prompt, answer] = forms[order[0]](rng);
    if (seen.has(prompt)) continue;
    order.shift();
    seen.add(prompt);
    out.push({ key: prompt, prompt, answer, subPrompt: 'x = ?' });
  }
  return out;
};

const GENERATORS = {
  add: (year, count, rng) => {
    const { min, max } = addRange(year);
    return pickUnique(count, (r) => {
      const a = randInt(min, max, r);
      const b = randInt(min, max, r);
      return { key: `${Math.min(a, b)}+${Math.max(a, b)}`, prompt: `${a} + ${b}`, answer: a + b };
    }, rng);
  },
  sub: (year, count, rng) => {
    const { min, max } = addRange(year);
    return pickUnique(count, (r) => {
      const b = randInt(min, max, r);
      const c = randInt(min, max, r);
      return { key: `${b + c}-${b}`, prompt: `${b + c} ${MINUS} ${b}`, answer: c };
    }, rng);
  },
  // a×b and b×a are the same fact: unordered pool, each pair drawn at most once.
  times: (year, count, rng) => {
    const { min, max } = getFactorRangeForYear(year);
    const pool = [];
    for (let a = min; a <= max; a++) for (let b = a; b <= max; b++) pool.push([a, b]);
    return shuffle(pool, rng).slice(0, count).map(([a, b]) => {
      const flip = rng() < 0.5;
      return { key: `${a}x${b}`, prompt: `${flip ? b : a} × ${flip ? a : b}`, answer: a * b };
    });
  },
  div: (year, count, rng) => {
    const { min, max } = getFactorRangeForYear(year);
    return pickUnique(count, (r) => {
      const a = randInt(min, max, r);
      const b = randInt(min, max, r);
      return { key: `${a * b}/${a}`, prompt: `${a * b} ÷ ${a}`, answer: b };
    }, rng);
  },
  alg: (year, count, rng) => pickRotating(count, isPrimary(year) ? ALG_ONE_STEP : ALG_MIXED, rng),
};

export const generateSprintQuestions = (typeId, year, { count = SPRINT_QUESTION_COUNT, rng = Math.random } = {}) => {
  const gen = GENERATORS[typeId];
  if (!gen) throw new Error(`Unknown sprint type: ${typeId}`);
  return gen(year, count, rng);
};

// Phrase for the start screen's "Here's the deal — 20 questions, <phrase>."
export const describeSprint = (typeId, year) => {
  const { min, max } = getFactorRangeForYear(year);
  switch (typeId) {
    case 'add': return isLowerPrimary(year) ? 'adding numbers up to 20' : 'adding two-digit numbers';
    case 'sub': return isLowerPrimary(year) ? 'subtracting within 40' : 'two-digit subtraction';
    case 'times': return `${min}× to ${max}× tables`;
    case 'div': return `dividing by ${min} to ${max}`;
    case 'alg': return isPrimary(year) ? 'one-step equations — find x' : 'mixed equations — find x';
    default: return '';
  }
};
