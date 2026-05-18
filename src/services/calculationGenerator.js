import { CURRICULUM_DATA } from '../constants/curriculumData.js';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (arr) => arr[randomInt(0, arr.length - 1)];

const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    a %= b;
    [a, b] = [b, a];
  }
  return a;
};

const simplifyFraction = (num, denom) => {
  const common = gcd(num, denom);
  let n = num / common;
  let d = denom / common;
  
  if (d === 1) return String(n);
  
  if (n > d) {
    const integerPart = Math.floor(n / d);
    const remainder = n % d;
    if (remainder === 0) return String(integerPart);
    return `${integerPart} ${remainder}/${d}`;
  }
  
  return `${n}/${d}`;
};

// ── Fraction helpers for Stage 5 (Fractions) ──────────────────────────────
// Fractions are represented as { n, d }.
const fReduce = (f) => {
  let n = f.n, d = f.d;
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1;
  return { n: n / g, d: d / g };
};
const fAdd = (a, b) => fReduce({ n: a.n * b.d + b.n * a.d, d: a.d * b.d });
const fSub = (a, b) => fReduce({ n: a.n * b.d - b.n * a.d, d: a.d * b.d });
const fMul = (a, b) => fReduce({ n: a.n * b.n, d: a.d * b.d });
const fDiv = (a, b) => fReduce({ n: a.n * b.d, d: a.d * b.n });
const fVal = (f) => f.n / f.d;
const fStr = (f) => { const r = fReduce(f); return simplifyFraction(r.n, r.d); };
const fTex = (f) => `\\frac{${f.n}}{${f.d}}`;
const whole = (w) => ({ n: w, d: 1 });
// Random proper fraction with denominator in [minD, maxD].
const properFrac = (maxD = 9, minD = 3) => {
  const d = randomInt(minD, maxD);
  return { n: randomInt(1, d - 1), d };
};
// Random mixed numeral → { w, n, d, value:{n,d} }.
const mixedNum = (maxD = 9) => {
  const d = randomInt(3, maxD);
  const w = randomInt(1, 4);
  const n = randomInt(1, d - 1);
  return { w, n, d, value: { n: w * d + n, d } };
};
const mixedTex = (m) => `${m.w}\\frac{${m.n}}{${m.d}}`;

export const generateCalculationQuestion = (topicId, timeLimit = 30) => {
  // Legacy Stage 5 topic ids → representative new step (assignments made
  // before the 28-step fraction curriculum still produce sensible questions).
  if (topicId === 'calc-5-core') topicId = 'calc-5-s1';
  else if (topicId === 'calc-5-adv') topicId = 'calc-5-s9';
  else if (topicId === 'calc-5-enrich') topicId = 'calc-5-s26';

  let q = '';
  let a = '';
  let hint = '';

  switch (topicId) {
    // Stage 1
    case 'calc-1-core': {
      const isAdd = Math.random() > 0.5;
      if (isAdd) {
        const n1 = randomInt(1, 9);
        const n2 = randomInt(1, 9 - n1); // Keep sum <= 10
        q = `$$ ${n1} + ${n2} = ? $$`;
        a = String(n1 + n2);
      } else {
        const n1 = randomInt(1, 10);
        const n2 = randomInt(1, n1);
        q = `$$ ${n1} - ${n2} = ? $$`;
        a = String(n1 - n2);
      }
      break;
    }
    case 'calc-1-adv': {
      const isMissing = Math.random() > 0.5;
      if (isMissing) {
        const target = randomInt(11, 20);
        const given = randomInt(1, target - 1);
        q = `$$ ${given} + \\square = ${target} $$`;
        a = String(target - given);
        hint = `How much more to make ${target}?`;
      } else {
        const n1 = randomInt(1, 19);
        const n2 = randomInt(1, 20 - n1);
        q = `$$ ${n1} + ${n2} = ? $$`;
        a = String(n1 + n2);
      }
      break;
    }
    case 'calc-1-enrich': {
      const n1 = randomInt(7, 9);
      const n2 = randomInt(4, 9);
      q = `$$ ${n1} + ${n2} = ? $$`;
      a = String(n1 + n2);
      hint = `Make a 10 first! $${n1} + ${10 - n1} = 10$, then add the rest.`;
      break;
    }

    // Stage 2
    case 'calc-2-core': {
      const isAdd = Math.random() > 0.5;
      const digits = Math.random() > 0.5 ? 2 : 3;
      if (isAdd) {
        const n1 = randomInt(Math.pow(10, digits - 1), Math.pow(10, digits) - 1);
        const n2 = randomInt(Math.pow(10, digits - 1), Math.pow(10, digits) - 1);
        q = `$$ ${n1} + ${n2} = ? $$`;
        a = String(n1 + n2);
      } else {
        const n1 = randomInt(Math.pow(10, digits - 1) + 10, Math.pow(10, digits) - 1);
        const n2 = randomInt(Math.pow(10, digits - 1), n1 - 1);
        q = `$$ ${n1} - ${n2} = ? $$`;
        a = String(n1 - n2);
      }
      break;
    }
    case 'calc-2-adv': {
      // Missing unknowns or multiple carries
      const target = randomInt(200, 999);
      const given = randomInt(50, target - 10);
      const isAdd = Math.random() > 0.5;
      if (isAdd) {
        q = `$$ \\square + ${given} = ${target} $$`;
        a = String(target - given);
        hint = `Try subtracting ${given} from ${target}.`;
      } else {
        q = `$$ ${target} - \\square = ${given} $$`;
        a = String(target - given);
        hint = `What is $${target} - ${given}$?`;
      }
      break;
    }
    case 'calc-2-enrich': {
      const price = (randomInt(10, 990) / 100).toFixed(2);
      const paidInt = Math.ceil(price / 5) * 5; // e.g., next $5 or $10
      const paid = paidInt.toFixed(2);
      q = `You buy an item for $${price} and pay with $${paid}. How much change? (Write number only)`;
      a = ((paid * 100 - price * 100) / 100).toFixed(2).replace(/\.00$/, '');
      hint = `Change = Paid - Price`;
      break;
    }

    // Stage 3
    case 'calc-3-core': {
      const n1 = randomInt(2, 9);
      const n2 = Math.random() > 0.5 ? randomInt(2, 9) : randomInt(10, 99);
      q = `$$ ${n1} \\times ${n2} = ? $$`;
      a = String(n1 * n2);
      break;
    }
    case 'calc-3-adv': {
      const n1 = randomInt(100, 999);
      const n2 = randomInt(2, 9);
      q = `$$ ${n1} \\times ${n2} = ? $$`;
      a = String(n1 * n2);
      hint = `Multiply ${n2} by the hundreds, then tens, then ones.`;
      break;
    }
    case 'calc-3-enrich': {
      const n = randomInt(11, 49) * 2; // Even number
      q = `$$ ${n} \\times 5 = ? $$`;
      a = String(n * 5);
      hint = `Try halving ${n} and multiplying by 10.`;
      break;
    }

    // Stage 4
    case 'calc-4-core': {
      const divisor = randomInt(2, 9);
      const quotient = randomInt(10, 99);
      const dividend = divisor * quotient;
      q = `$$ ${dividend} \\div ${divisor} = ? $$`;
      a = String(quotient);
      break;
    }
    case 'calc-4-adv': {
      const divisor = randomInt(11, 20);
      const quotient = randomInt(10, 50);
      const dividend = divisor * quotient;
      q = `$$ ${dividend} \\div ${divisor} = ? $$`;
      a = String(quotient);
      hint = `Use long division.`;
      break;
    }
    case 'calc-4-enrich': {
      const divisor = randomInt(2, 9);
      const quotient = randomInt(10, 99);
      const rem = randomInt(1, divisor - 1);
      const dividend = divisor * quotient + rem;
      q = `$$ ${dividend} \\div ${divisor} = ? $$`;
      a = `${quotient} r${rem}`;
      hint = `Format your answer as 'quotient r remainder', e.g., '12 r3'`;
      break;
    }

    // ════ Stage 5: Fractions — 28-step curriculum ════
    // Phase A — Addition & Subtraction
    case 'calc-5-s1': { // add · same denom · no mixed
      const d = randomInt(3, 12);
      const n1 = randomInt(1, d - 2);
      const n2 = randomInt(1, d - 1 - n1);
      q = `$$ \\frac{${n1}}{${d}} + \\frac{${n2}}{${d}} = ? $$`;
      a = simplifyFraction(n1 + n2, d);
      hint = 'Same denominator — add the top numbers, keep the bottom.';
      break;
    }
    case 'calc-5-s2': { // sub · same denom · no mixed
      const d = randomInt(3, 12);
      const n1 = randomInt(2, d - 1);
      const n2 = randomInt(1, n1 - 1);
      q = `$$ \\frac{${n1}}{${d}} - \\frac{${n2}}{${d}} = ? $$`;
      a = simplifyFraction(n1 - n2, d);
      hint = 'Same denominator — subtract the top numbers, keep the bottom.';
      break;
    }
    case 'calc-5-s3': { // add · diff denom · no mixed
      const f1 = properFrac(8), f2 = properFrac(8);
      q = `$$ ${fTex(f1)} + ${fTex(f2)} = ? $$`;
      a = fStr(fAdd(f1, f2));
      hint = 'Different denominators — rewrite with a common denominator first.';
      break;
    }
    case 'calc-5-s4': { // sub · diff denom · no mixed
      let f1 = properFrac(8), f2 = properFrac(8);
      if (fVal(f1) < fVal(f2)) { const t = f1; f1 = f2; f2 = t; }
      q = `$$ ${fTex(f1)} - ${fTex(f2)} = ? $$`;
      a = fStr(fSub(f1, f2));
      hint = 'Different denominators — rewrite with a common denominator first.';
      break;
    }
    case 'calc-5-s5': { // add · same denom · mixed
      const d = randomInt(3, 10);
      const m1 = { w: randomInt(1, 4), n: randomInt(1, d - 1), d };
      const m2 = { w: randomInt(1, 4), n: randomInt(1, d - 1), d };
      q = `$$ ${mixedTex(m1)} + ${mixedTex(m2)} = ? $$`;
      a = fStr(fAdd({ n: m1.w * d + m1.n, d }, { n: m2.w * d + m2.n, d }));
      hint = 'Add the whole numbers, then add the fractions.';
      break;
    }
    case 'calc-5-s6': { // sub · same denom · mixed
      const d = randomInt(3, 10);
      let m1 = { w: randomInt(2, 5), n: randomInt(1, d - 1), d };
      let m2 = { w: randomInt(1, 4), n: randomInt(1, d - 1), d };
      let v1 = { n: m1.w * d + m1.n, d }, v2 = { n: m2.w * d + m2.n, d };
      if (fVal(v1) < fVal(v2)) { const t = m1; m1 = m2; m2 = t; const tv = v1; v1 = v2; v2 = tv; }
      q = `$$ ${mixedTex(m1)} - ${mixedTex(m2)} = ? $$`;
      a = fStr(fSub(v1, v2));
      hint = 'Convert to improper fractions, or subtract wholes then fractions.';
      break;
    }
    case 'calc-5-s7': { // add · diff denom · mixed
      const m1 = mixedNum(8), m2 = mixedNum(8);
      q = `$$ ${mixedTex(m1)} + ${mixedTex(m2)} = ? $$`;
      a = fStr(fAdd(m1.value, m2.value));
      hint = 'Find a common denominator for the fraction parts.';
      break;
    }
    case 'calc-5-s8': { // sub · diff denom · mixed
      let m1 = mixedNum(8), m2 = mixedNum(8);
      if (fVal(m1.value) < fVal(m2.value)) { const t = m1; m1 = m2; m2 = t; }
      q = `$$ ${mixedTex(m1)} - ${mixedTex(m2)} = ? $$`;
      a = fStr(fSub(m1.value, m2.value));
      hint = 'Convert to improper fractions, then use a common denominator.';
      break;
    }

    // Phase B — Multiplication
    case 'calc-5-s9': { // fraction × fraction · no mixed
      const f1 = properFrac(8), f2 = properFrac(8);
      q = `$$ ${fTex(f1)} \\times ${fTex(f2)} = ? $$`;
      a = fStr(fMul(f1, f2));
      hint = 'Multiply the tops, multiply the bottoms, then simplify.';
      break;
    }
    case 'calc-5-s10': { // fraction × whole number
      const f = properFrac(9), w = randomInt(2, 9);
      q = `$$ ${fTex(f)} \\times ${w} = ? $$`;
      a = fStr(fMul(f, whole(w)));
      hint = 'A whole number is itself over 1. Multiply across.';
      break;
    }
    case 'calc-5-s11': { // mixed × fraction
      const m = mixedNum(7), f = properFrac(7);
      q = `$$ ${mixedTex(m)} \\times ${fTex(f)} = ? $$`;
      a = fStr(fMul(m.value, f));
      hint = 'Convert the mixed numeral to an improper fraction first.';
      break;
    }
    case 'calc-5-s12': { // mixed × mixed
      const m1 = mixedNum(6), m2 = mixedNum(6);
      q = `$$ ${mixedTex(m1)} \\times ${mixedTex(m2)} = ? $$`;
      a = fStr(fMul(m1.value, m2.value));
      hint = 'Convert both mixed numerals to improper fractions first.';
      break;
    }

    // Phase C — Division
    case 'calc-5-s13': { // fraction ÷ fraction · no mixed
      const f1 = properFrac(8), f2 = properFrac(8);
      q = `$$ ${fTex(f1)} \\div ${fTex(f2)} = ? $$`;
      a = fStr(fDiv(f1, f2));
      hint = 'Dividing by a fraction = multiplying by its reciprocal (flip it).';
      break;
    }
    case 'calc-5-s14': { // fraction ÷ whole number
      const f = properFrac(9), w = randomInt(2, 8);
      q = `$$ ${fTex(f)} \\div ${w} = ? $$`;
      a = fStr(fDiv(f, whole(w)));
      hint = 'Dividing by a whole number multiplies the denominator.';
      break;
    }
    case 'calc-5-s15': { // mixed ÷ fraction
      const m = mixedNum(7), f = properFrac(7);
      q = `$$ ${mixedTex(m)} \\div ${fTex(f)} = ? $$`;
      a = fStr(fDiv(m.value, f));
      hint = 'Make the mixed numeral improper, then multiply by the reciprocal.';
      break;
    }
    case 'calc-5-s16': { // mixed ÷ mixed
      const m1 = mixedNum(6), m2 = mixedNum(6);
      q = `$$ ${mixedTex(m1)} \\div ${mixedTex(m2)} = ? $$`;
      a = fStr(fDiv(m1.value, m2.value));
      hint = 'Convert both to improper fractions, then flip the divisor.';
      break;
    }

    // Phase D — Combined operations
    case 'calc-5-s17': { // 2-step: +/− with ×/÷
      const f1 = properFrac(5), f2 = properFrac(5), f3 = properFrac(6);
      q = `$$ ${fTex(f1)} \\times ${fTex(f2)} + ${fTex(f3)} = ? $$`;
      a = fStr(fAdd(fMul(f1, f2), f3));
      hint = 'Do the multiplication first, then the addition.';
      break;
    }
    case 'calc-5-s18': { // 3-step with parentheses
      const f1 = properFrac(6), f2 = properFrac(6), f3 = properFrac(5);
      q = `$$ \\left( ${fTex(f1)} + ${fTex(f2)} \\right) \\times ${fTex(f3)} = ? $$`;
      a = fStr(fMul(fAdd(f1, f2), f3));
      hint = 'Work out the brackets first, then multiply.';
      break;
    }
    case 'calc-5-s19': { // 4-step: all operations
      let f1, f2, f3, f4, f5, res;
      do {
        f1 = properFrac(4, 2); f2 = properFrac(4, 2); f3 = properFrac(4, 2);
        f4 = properFrac(4, 2); f5 = properFrac(6, 2);
        res = fSub(fAdd(fMul(f1, f2), fDiv(f3, f4)), f5);
      } while (res.n <= 0 || res.d > 240);
      q = `$$ ${fTex(f1)} \\times ${fTex(f2)} + ${fTex(f3)} \\div ${fTex(f4)} - ${fTex(f5)} = ? $$`;
      a = fStr(res);
      hint = 'Order of operations: do × and ÷ before + and −.';
      break;
    }
    case 'calc-5-s20': { // 4-step: all ops + mixed
      let m, f2, f3, f4, f5, res;
      do {
        m = mixedNum(4); f2 = properFrac(4, 2); f3 = properFrac(4, 2);
        f4 = properFrac(4, 2); f5 = properFrac(8, 4);
        res = fSub(fAdd(fMul(m.value, f2), fDiv(f3, f4)), f5);
      } while (res.n <= 0 || res.d > 300);
      q = `$$ ${mixedTex(m)} \\times ${fTex(f2)} + ${fTex(f3)} \\div ${fTex(f4)} - ${fTex(f5)} = ? $$`;
      a = fStr(res);
      hint = 'Convert the mixed numeral first, then apply order of operations.';
      break;
    }

    // Phase E — Word problems (templated)
    case 'calc-5-s21': { // add & subtract · 1-step story
      const f1 = properFrac(8), f2 = properFrac(8);
      if (Math.random() > 0.5) {
        q = `A jug holds $${fTex(f1)}$ of a litre of juice. Another $${fTex(f2)}$ of a litre is poured in. How many litres are in the jug now?`;
        a = fStr(fAdd(f1, f2));
      } else {
        let A = f1, B = f2;
        if (fVal(A) < fVal(B)) { const t = A; A = B; B = t; }
        q = `A ribbon is $${fTex(A)}$ of a metre long. $${fTex(B)}$ of a metre is cut off. How long is the ribbon now? (metres)`;
        a = fStr(fSub(A, B));
      }
      hint = 'Decide add or subtract, then use a common denominator.';
      break;
    }
    case 'calc-5-s22': { // multiply & divide · 1-step story
      if (Math.random() > 0.5) {
        const f = properFrac(8), w = randomInt(2, 6);
        q = `One pancake needs $${fTex(f)}$ of a cup of milk. How many cups of milk are needed for ${w} pancakes?`;
        a = fStr(fMul(f, whole(w)));
      } else {
        const f = properFrac(8), w = randomInt(2, 5);
        q = `$${fTex(f)}$ of a cake is shared equally between ${w} children. What fraction of a whole cake does each child receive?`;
        a = fStr(fDiv(f, whole(w)));
      }
      hint = 'Repeated groups → multiply. Sharing equally → divide.';
      break;
    }
    case 'calc-5-s23': { // 2-step · same operation
      const d = randomInt(5, 10);
      const n1 = randomInt(1, d - 1), n2 = randomInt(1, d - 1), n3 = randomInt(1, d - 1);
      q = `Liam read $\\frac{${n1}}{${d}}$ of a book on Monday, $\\frac{${n2}}{${d}}$ on Tuesday and $\\frac{${n3}}{${d}}$ on Wednesday. What fraction of the book did he read in total?`;
      a = simplifyFraction(n1 + n2 + n3, d);
      hint = 'Add all three fractions — they already share a denominator.';
      break;
    }
    case 'calc-5-s24': { // 2-step · mixed operations
      let f1, f2, res;
      do {
        f1 = properFrac(6); f2 = properFrac(6);
        res = fSub(fSub(whole(1), f1), f2);
      } while (res.n <= 0 || res.d > 120);
      q = `A water tank starts full. $${fTex(f1)}$ of the tank is used in the morning and $${fTex(f2)}$ is used in the afternoon. What fraction of the tank is left?`;
      a = fStr(res);
      hint = 'Start from 1 whole, then subtract each amount used.';
      break;
    }
    case 'calc-5-s25': { // measurement & unit conversion
      if (Math.random() > 0.5) {
        const d = pick([2, 3, 4, 5, 6, 10, 12]);
        const n = randomInt(1, d - 1);
        q = `How many minutes are there in $\\frac{${n}}{${d}}$ of an hour?`;
        a = String((60 * n) / d);
        hint = 'There are 60 minutes in an hour.';
      } else {
        const d = pick([2, 4, 5, 10]);
        const n = randomInt(1, d - 1);
        q = `How many centimetres are there in $\\frac{${n}}{${d}}$ of a metre?`;
        a = String((100 * n) / d);
        hint = 'There are 100 centimetres in a metre.';
      }
      break;
    }
    case 'calc-5-s26': { // ratio & rate problems
      const r1 = randomInt(1, 5), r2 = randomInt(1, 5), unit = randomInt(2, 9);
      const total = (r1 + r2) * unit;
      q = `Sand and cement are mixed in the ratio ${r1}:${r2}. A builder uses ${total} kg of the mixture. How many kilograms of cement are used?`;
      a = String(r2 * unit);
      hint = `Total parts = ${r1 + r2}. Find the value of one part, then count the cement parts.`;
      break;
    }
    case 'calc-5-s27': { // 3-step · build equation
      let f1, f2, f3, res;
      do {
        f1 = properFrac(6); f2 = properFrac(6); f3 = properFrac(6);
        res = fSub(fAdd(f1, f2), f3);
      } while (res.n <= 0 || res.d > 150);
      q = `A garden bed is being filled with soil. $${fTex(f1)}$ of it is filled in the morning and $${fTex(f2)}$ more in the afternoon, then $${fTex(f3)}$ settles and sinks away. What fraction of the garden bed is filled?`;
      a = fStr(res);
      hint = 'Write it as one expression: first add, then subtract.';
      break;
    }
    case 'calc-5-s28': { // 4-step · all ops + mixed
      let m, f2, f3, res;
      do {
        m = mixedNum(5); f2 = properFrac(5); f3 = properFrac(5);
        res = fMul(fSub(m.value, f2), f3);
      } while (res.n <= 0 || res.d > 200);
      q = `A baker makes $${mixedTex(m)}$ kg of dough. $${fTex(f2)}$ kg is set aside for later, and $${fTex(f3)}$ of what remains is used to bake bread. How many kilograms of dough are used for bread?`;
      a = fStr(res);
      hint = 'First find what remains, then take that fraction of it.';
      break;
    }

    // Stage 6
    case 'calc-6-core': {
      const n1 = (randomInt(1, 999) / 100).toFixed(2);
      const n2 = (randomInt(1, 999) / 100).toFixed(2);
      const isAdd = Math.random() > 0.5;
      if (isAdd) {
        q = `$$ ${n1} + ${n2} = ? $$`;
        a = ((parseFloat(n1) + parseFloat(n2)).toFixed(2)).replace(/\.?0+$/, '');
      } else {
        const big = Math.max(n1, n2).toFixed(2);
        const small = Math.min(n1, n2).toFixed(2);
        q = `$$ ${big} - ${small} = ? $$`;
        a = ((parseFloat(big) - parseFloat(small)).toFixed(2)).replace(/\.?0+$/, '');
      }
      break;
    }
    case 'calc-6-adv': {
      const n1 = (randomInt(1, 99) / 10).toFixed(1);
      const n2 = (randomInt(1, 99) / 10).toFixed(1);
      q = `$$ ${n1} \\times ${n2} = ? $$`;
      a = ((parseFloat(n1) * parseFloat(n2)).toFixed(2)).replace(/\.?0+$/, '');
      hint = `Multiply without decimals first, then place the decimal point.`;
      break;
    }
    case 'calc-6-enrich': {
      const km = (randomInt(10, 99) / 10).toFixed(1);
      q = `Convert ${km} km to metres. (Write number only)`;
      a = String(parseFloat(km) * 1000);
      hint = `1 km = 1000 m. Multiply by 1000.`;
      break;
    }

    // Stage 7
    case 'calc-7-core': {
      const type = randomInt(1, 3);
      if (type === 1) {
        // Foundation - No Brackets
        const aVal = randomInt(2, 10);
        const bVal = randomInt(2, 10);
        const cVal = randomInt(2, 10);
        if (Math.random() > 0.5) {
          q = `$$ ${aVal} + ${bVal} \\times ${cVal} = ? $$`;
          a = String(aVal + (bVal * cVal));
        } else {
          q = `$$ ${aVal} \\times ${bVal} - ${cVal} = ? $$`;
          a = String((aVal * bVal) - cVal);
        }
        hint = `Remember BODMAS! Multiply/Divide before Add/Subtract.`;
      } else if (type === 2) {
        // Single Brackets
        const aVal = randomInt(2, 10);
        const bVal = randomInt(2, 10);
        const cVal = randomInt(2, 10);
        q = `$$ (${aVal} + ${bVal}) \\times ${cVal} = ? $$`;
        a = String((aVal + bVal) * cVal);
        hint = `Remember BODMAS! Brackets first.`;
      } else {
        // Powers & Orders
        const aVal = randomInt(2, 6);
        const bVal = randomInt(2, 10);
        q = `$$ ${aVal}^2 + ${bVal} = ? $$`;
        a = String(Math.pow(aVal, 2) + bVal);
        hint = `Remember BODMAS! Orders (powers) first.`;
      }
      break;
    }
    case 'calc-7-adv': {
      const type = randomInt(1, 3);
      if (type === 1) {
        // Multiple Brackets
        const aVal = randomInt(2, 10);
        const bVal = randomInt(2, 10);
        const cVal = randomInt(5, 15);
        const dVal = randomInt(1, cVal - 1); // keep positive
        q = `$$ (${aVal} + ${bVal}) \\times (${cVal} - ${dVal}) = ? $$`;
        a = String((aVal + bVal) * (cVal - dVal));
        hint = `Solve inside both brackets first.`;
      } else if (type === 2) {
        // Negative Numbers in BODMAS
        const aVal = randomInt(2, 10);
        const bVal = randomInt(3, 10);
        const cVal = randomInt(3, 10);
        q = `$$ ${aVal} - ${bVal} \\times ${cVal} = ? $$`;
        a = String(aVal - (bVal * cVal));
        hint = `Multiply first, then subtract. The answer will be negative!`;
      } else {
        // Nested Brackets
        const aVal = randomInt(2, 5);
        const bVal = randomInt(2, 10);
        const cVal = randomInt(5, 10);
        const dVal = randomInt(1, cVal - 1);
        q = `$$ ${aVal} \\times (${bVal} + (${cVal} - ${dVal})) = ? $$`;
        a = String(aVal * (bVal + (cVal - dVal)));
        hint = `Solve the innermost brackets first!`;
      }
      break;
    }
    case 'calc-7-enrich': {
      const type = randomInt(1, 3);
      if (type === 1) {
        // Advanced Multi-Step
        const aVal = randomInt(3, 7);
        const bVal = randomInt(2, 6);
        const cVal = randomInt(2, 6);
        const dVal = randomInt(2, 20);
        q = `$$ ${aVal}^2 - (${bVal} \\times ${cVal}) + ${dVal} = ? $$`;
        a = String(Math.pow(aVal, 2) - (bVal * cVal) + dVal);
        hint = `Follow BODMAS: Orders, then Brackets/Multiply, then Add/Subtract from left to right.`;
      } else if (type === 2) {
        // Fractions + BODMAS
        const denom = pick([2, 4, 5, 10]);
        const num = randomInt(1, denom - 1);
        const cVal = denom * randomInt(2, 10); // ensures integer result
        const dVal = randomInt(2, 20);
        q = `$$ \\frac{${num}}{${denom}} \\times ${cVal} + ${dVal} = ? $$`;
        a = String((num / denom) * cVal + dVal);
        hint = `Multiply the fraction by the whole number first.`;
      } else {
        // Percentages
        const percent = randomInt(1, 9) * 10;
        const value = randomInt(1, 20) * 10;
        q = `What is ${percent}% of ${value}?`;
        a = String((percent / 100) * value);
        hint = `${percent}% means ${percent}/100.`;
      }
      break;
    }

    default:
      q = `$$ 1 + 1 = ? $$`;
      a = `2`;
      break;
  }

  return {
    id: `calc-${Date.now()}-${randomInt(1000, 9999)}`,
    type: 'short_answer',
    question: q,
    answer: a,
    hint: hint,
    chapterTitle: 'Basic Calculation',
    topicId: topicId,
    generatorType: 'calculation',
    timeLimit: timeLimit
  };
};

export const generateCalculationSet = (assignedTopics, count, year = 'Year 1', timeLimit = 30) => {
  // If no topics assigned, pick a default based on year
  let topicsToUse = assignedTopics && assignedTopics.length > 0 ? assignedTopics : null;
  
  if (!topicsToUse) {
    const yearNum = parseInt(String(year).replace('Year ', '')) || 1;
    if (yearNum >= 11) topicsToUse = ['calc-7-core', 'calc-7-adv', 'calc-7-enrich'];
    else if (yearNum >= 7) topicsToUse = ['calc-7-core', 'calc-7-adv'];
    else if (yearNum >= 5) topicsToUse = ['calc-5-core', 'calc-6-core'];
    else if (yearNum >= 3) topicsToUse = ['calc-3-core', 'calc-4-core'];
    else topicsToUse = ['calc-1-core'];
  }
  
  const questions = [];
  for (let i = 0; i < count; i++) {
    const topic = pick(topicsToUse);
    questions.push(generateCalculationQuestion(topic, timeLimit));
  }
  return questions;
};
