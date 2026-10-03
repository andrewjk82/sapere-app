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
  alg: (year, count, rng) => pickUnique(count, (r) => {
    const x = randInt(1, 12, r);
    let prompt;
    if (isPrimary(year)) {
      const kind = randInt(0, 2, r);
      if (kind === 0 || (kind === 1 && x < 2)) {
        const a = randInt(1, 20, r);
        prompt = `x + ${a} = ${x + a}`;
      } else if (kind === 1) {
        const a = randInt(1, x - 1, r);
        prompt = `x ${MINUS} ${a} = ${x - a}`;
      } else {
        const a = randInt(2, 12, r);
        prompt = `${a}x = ${a * x}`;
      }
    } else {
      const a = randInt(2, 9, r);
      const b = randInt(1, 20, r);
      prompt = r() < 0.5 || a * x - b <= 0
        ? `${a}x + ${b} = ${a * x + b}`
        : `${a}x ${MINUS} ${b} = ${a * x - b}`;
    }
    return { key: prompt, prompt, answer: x, subPrompt: 'x = ?' };
  }, rng),
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
    case 'alg': return isPrimary(year) ? 'one-step equations — find x' : 'two-step equations — find x';
    default: return '';
  }
};
