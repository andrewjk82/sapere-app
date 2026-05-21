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
// Two proper fractions guaranteed to have DIFFERENT denominators —
// used by "diff denom" topics so they never produce a same-denom problem.
const diffFracs = (maxD = 9, minD = 3) => {
  const d1 = randomInt(minD, maxD);
  let d2 = randomInt(minD, maxD);
  while (d2 === d1) d2 = randomInt(minD, maxD);
  return [
    { n: randomInt(1, d1 - 1), d: d1 },
    { n: randomInt(1, d2 - 1), d: d2 },
  ];
};
// Two mixed numerals guaranteed to have DIFFERENT fraction denominators.
const diffMixed = (maxD = 9) => {
  const d1 = randomInt(3, maxD);
  let d2 = randomInt(3, maxD);
  while (d2 === d1) d2 = randomInt(3, maxD);
  const mk = (d) => {
    const w = randomInt(1, 4);
    const n = randomInt(1, d - 1);
    return { w, n, d, value: { n: w * d + n, d } };
  };
  return [mk(d1), mk(d2)];
};

// ── Decimal helpers for Stage 6 (Decimals) ────────────────────────────────
// Format a number as a clean decimal string (no float drift, no trailing 0s).
const decStr = (v) => {
  let s = (Math.round(v * 1e8) / 1e8).toFixed(8);
  if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
  return s === '-0' ? '0' : s;
};
// Random decimal with `dp` places and integer part 0..maxInt.
const randDec = (dp, maxInt = 9) => {
  const scale = Math.pow(10, dp);
  return randomInt(1, (maxInt + 1) * scale - 1) / scale;
};

export const generateCalculationQuestion = (topicId, timeLimit = 30) => {
  // Legacy Stage 5 topic ids → representative new step (assignments made
  // before the 28-step fraction curriculum still produce sensible questions).
  if (topicId === 'calc-5-core') topicId = 'calc-5-s1';
  else if (topicId === 'calc-5-adv') topicId = 'calc-5-s9';
  else if (topicId === 'calc-5-enrich') topicId = 'calc-5-s26';
  else if (topicId === 'calc-6-core') topicId = 'calc-6-s5';
  else if (topicId === 'calc-6-adv') topicId = 'calc-6-s13';
  else if (topicId === 'calc-6-enrich') topicId = 'calc-6-s27';
  // Legacy Stage 1 topic ids → representative new step (assignments made
  // before the 34-step addition curriculum still produce sensible questions).
  else if (topicId === 'calc-1-core') topicId = 'calc-1-s5';
  else if (topicId === 'calc-1-adv') topicId = 'calc-1-s12';
  else if (topicId === 'calc-1-enrich') topicId = 'calc-1-s17';

  let q = '';
  let a = '';
  let hint = '';

  switch (topicId) {
    // ════ Stage 1: Addition — 34-step curriculum ════
    // Phase A — Concept & number sense
    case 'calc-1-s1': { // what is addition? (counting on)
      const n1 = randomInt(2, 6), n2 = randomInt(1, 4);
      q = `$$ ${n1} + ${n2} = ? $$`;
      a = String(n1 + n2);
      hint = `Start at ${n1}, then count on ${n2} more.`;
      break;
    }
    case 'calc-1-s2': { // counting on from 1 to 10
      const n1 = randomInt(1, 8);
      const n2 = randomInt(1, 9 - n1);
      q = `$$ ${n1} + ${n2} = ? $$`;
      a = String(n1 + n2);
      hint = `Count on from ${n1} until you have added ${n2}.`;
      break;
    }
    case 'calc-1-s3': { // commutative property (a+b = b+a)
      const n1 = randomInt(2, 9), n2 = randomInt(2, 9);
      q = `$$ ${n1} + ${n2} = ${n2} + \\square $$`;
      a = String(n1);
      hint = 'Swapping the order of the numbers does not change the total.';
      break;
    }
    case 'calc-1-s4': { // associative property ((a+b)+c)
      const n1 = randomInt(2, 9), n2 = randomInt(2, 9), n3 = randomInt(2, 9);
      q = `$$ \\left( ${n1} + ${n2} \\right) + ${n3} = ? $$`;
      a = String(n1 + n2 + n3);
      hint = 'Add the bracket first, then add the last number.';
      break;
    }

    // Phase B — 1-digit addition
    case 'calc-1-s5': { // 1-digit + 1-digit · no carrying
      const n1 = randomInt(1, 8);
      const n2 = randomInt(1, 9 - n1);
      q = `$$ ${n1} + ${n2} = ? $$`;
      a = String(n1 + n2);
      hint = 'The ones digits add to 9 or less — no carrying needed.';
      break;
    }
    case 'calc-1-s6': { // number bonds to 10
      const n1 = randomInt(1, 9);
      q = `$$ ${n1} + \\square = 10 $$`;
      a = String(10 - n1);
      hint = `How many more does ${n1} need to reach 10?`;
      break;
    }
    case 'calc-1-s7': { // 1-digit + 1-digit · sum over 10
      const n1 = randomInt(2, 9);
      const n2 = randomInt(Math.max(2, 11 - n1), 9);
      q = `$$ ${n1} + ${n2} = ? $$`;
      a = String(n1 + n2);
      hint = `Make a 10 first: ${n1} + ${10 - n1} = 10, then add the rest.`;
      break;
    }
    case 'calc-1-s8': { // three 1-digit numbers
      const n1 = randomInt(1, 9), n2 = randomInt(1, 9), n3 = randomInt(1, 9);
      q = `$$ ${n1} + ${n2} + ${n3} = ? $$`;
      a = String(n1 + n2 + n3);
      hint = 'Add the first two, then add the third number.';
      break;
    }

    // Phase C — 2-digit addition
    case 'calc-1-s9': { // 2-digit + 1-digit · no carrying
      const t = randomInt(1, 9), o = randomInt(0, 8);
      const n1 = t * 10 + o;
      const n2 = randomInt(1, 9 - o);
      q = `$$ ${n1} + ${n2} = ? $$`;
      a = String(n1 + n2);
      hint = 'Add the ones — they stay under 10, so no carrying.';
      break;
    }
    case 'calc-1-s10': { // 2-digit + 2-digit · no carrying
      const t1 = randomInt(1, 8), o1 = randomInt(0, 8);
      const t2 = randomInt(1, 9 - t1), o2 = randomInt(0, 9 - o1);
      const n1 = t1 * 10 + o1, n2 = t2 * 10 + o2;
      q = `$$ ${n1} + ${n2} = ? $$`;
      a = String(n1 + n2);
      hint = 'Each column adds to 9 or less — no carrying.';
      break;
    }
    case 'calc-1-s11': { // 2-digit + 1-digit · with carrying
      const t = randomInt(1, 8), o = randomInt(2, 9);
      const n1 = t * 10 + o;
      const n2 = randomInt(11 - o, 9);
      q = `$$ ${n1} + ${n2} = ? $$`;
      a = String(n1 + n2);
      hint = 'The ones add to 10 or more — carry 1 to the tens.';
      break;
    }
    case 'calc-1-s12': { // 2-digit + 2-digit · with carrying
      let n1, n2;
      do {
        n1 = randomInt(15, 89);
        n2 = randomInt(15, 89);
      } while ((n1 % 10) + (n2 % 10) < 10);
      q = `$$ ${n1} + ${n2} = ? $$`;
      a = String(n1 + n2);
      hint = 'When a column adds to 10 or more, carry 1 to the next column.';
      break;
    }
    case 'calc-1-s13': { // three or more 2-digit numbers
      const count = randomInt(3, 4);
      const nums = Array.from({ length: count }, () => randomInt(10, 99));
      q = `$$ ${nums.join(' + ')} = ? $$`;
      a = String(nums.reduce((s, n) => s + n, 0));
      hint = 'Add the numbers one at a time, keeping a running total.';
      break;
    }

    // Phase D — 3-digit & larger numbers
    case 'calc-1-s14': { // 3-digit + 3-digit · no carrying
      const h1 = randomInt(1, 8), t1 = randomInt(0, 8), o1 = randomInt(0, 8);
      const h2 = randomInt(1, 9 - h1), t2 = randomInt(0, 9 - t1), o2 = randomInt(0, 9 - o1);
      const n1 = h1 * 100 + t1 * 10 + o1, n2 = h2 * 100 + t2 * 10 + o2;
      q = `$$ ${n1} + ${n2} = ? $$`;
      a = String(n1 + n2);
      hint = 'Each column adds to 9 or less — no carrying.';
      break;
    }
    case 'calc-1-s15': { // 3-digit + 3-digit · with carrying
      let n1, n2;
      do {
        n1 = randomInt(150, 899);
        n2 = randomInt(150, 899);
      } while ((n1 % 10) + (n2 % 10) < 10 && (Math.floor(n1 / 10) % 10) + (Math.floor(n2 / 10) % 10) < 10);
      q = `$$ ${n1} + ${n2} = ? $$`;
      a = String(n1 + n2);
      hint = 'Add right to left, carrying 1 whenever a column reaches 10.';
      break;
    }
    case 'calc-1-s16': { // 4-digit+ addition
      const digits = pick([4, 5]);
      const lo = Math.pow(10, digits - 1), hi = Math.pow(10, digits) - 1;
      const n1 = randomInt(lo, hi), n2 = randomInt(lo, hi);
      q = `$$ ${n1} + ${n2} = ? $$`;
      a = String(n1 + n2);
      hint = 'Line up the digits by place value and add column by column.';
      break;
    }
    case 'calc-1-s17': { // mental math strategies (rounding & adjust)
      const base = pick([19, 29, 39, 49, 98, 99, 198, 199]);
      const other = randomInt(15, 85);
      q = `$$ ${other} + ${base} = ? $$`;
      a = String(other + base);
      hint = `Round ${base} up to ${base + 1}, add, then subtract 1.`;
      break;
    }

    // Phase E — Decimals & fractions addition
    case 'calc-1-s18': { // decimal + decimal · same places
      const dp = randomInt(1, 2);
      const x = randDec(dp, 9), y = randDec(dp, 9);
      q = `$$ ${decStr(x)} + ${decStr(y)} = ? $$`;
      a = decStr(x + y);
      hint = 'Line up the decimal points, then add.';
      break;
    }
    case 'calc-1-s19': { // decimal + decimal · diff places
      const x = randDec(1, 9), y = randDec(2, 9);
      q = `$$ ${decStr(x)} + ${decStr(y)} = ? $$`;
      a = decStr(x + y);
      hint = 'Give both numbers the same number of decimal places first.';
      break;
    }
    case 'calc-1-s20': { // fraction + fraction · same denom
      const d = randomInt(3, 12);
      const n1 = randomInt(1, d - 2);
      const n2 = randomInt(1, d - 1 - n1);
      q = `$$ \\frac{${n1}}{${d}} + \\frac{${n2}}{${d}} = ? $$`;
      a = simplifyFraction(n1 + n2, d);
      hint = 'Same denominator — add the numerators, keep the denominator.';
      break;
    }
    case 'calc-1-s21': { // fraction + fraction · diff denom
      const [f1, f2] = diffFracs(8);
      q = `$$ ${fTex(f1)} + ${fTex(f2)} = ? $$`;
      a = fStr(fAdd(f1, f2));
      hint = 'Rewrite with a common denominator, then add.';
      break;
    }
    case 'calc-1-s22': { // integer + decimal + fraction (mixed types)
      const i = randomInt(1, 9);
      const d = randDec(1, 9);
      const denom = pick([2, 4, 5, 10]);
      const num = randomInt(1, denom - 1);
      q = `$$ ${i} + ${decStr(d)} + \\frac{${num}}{${denom}} = ? $$`;
      a = decStr(i + d + num / denom);
      hint = 'Convert the fraction to a decimal, then add all three.';
      break;
    }

    // Phase F — Combined & advanced strategies
    case 'calc-1-s23': { // estimation & reasonableness check
      const round = pick([10, 100]);
      const lo = round === 10 ? 12 : 120, hi = round === 10 ? 88 : 880;
      const n1 = randomInt(lo, hi), n2 = randomInt(lo, hi);
      q = `Estimate ${n1} + ${n2} by rounding each number to the nearest ${round}. (number only)`;
      a = String(Math.round(n1 / round) * round + Math.round(n2 / round) * round);
      hint = `Round ${n1} and ${n2} to the nearest ${round}, then add.`;
      break;
    }
    case 'calc-1-s24': { // inverse check with subtraction
      const known = randomInt(20, 400);
      const missing = randomInt(20, 400);
      q = `$$ \\square + ${known} = ${known + missing} $$`;
      a = String(missing);
      hint = `Use the inverse operation: ${known + missing} - ${known}.`;
      break;
    }
    case 'calc-1-s25': { // column addition (4+ addends)
      const count = randomInt(4, 5);
      const nums = Array.from({ length: count }, () => randomInt(10, 199));
      q = `$$ ${nums.join(' + ')} = ? $$`;
      a = String(nums.reduce((s, n) => s + n, 0));
      hint = 'Add one number at a time, carrying as you go.';
      break;
    }
    case 'calc-1-s26': { // intro to negative numbers in addition
      if (Math.random() > 0.5) {
        const neg = randomInt(2, 12), pos = randomInt(1, 20);
        q = `$$ -${neg} + ${pos} = ? $$`;
        a = String(pos - neg);
        hint = 'Start at the negative number and move right on the number line.';
      } else {
        const a1 = randomInt(2, 15), a2 = randomInt(2, 15);
        q = `$$ -${a1} + (-${a2}) = ? $$`;
        a = String(-(a1 + a2));
        hint = 'Adding two negatives gives a larger negative number.';
      }
      break;
    }

    // Phase G — Word problems
    case 'calc-1-s27': { // 1-step · small numbers (objects & counts)
      const n1 = randomInt(3, 19), n2 = randomInt(3, 19);
      q = `There are ${n1} red apples and ${n2} green apples in a basket. How many apples are there altogether?`;
      a = String(n1 + n2);
      hint = 'Combine both groups — add the two amounts.';
      break;
    }
    case 'calc-1-s28': { // 1-step · large numbers (scores & totals)
      const n1 = randomInt(120, 4800), n2 = randomInt(120, 4800);
      q = `A stadium had ${n1} fans on Saturday and ${n2} fans on Sunday. How many fans attended in total?`;
      a = String(n1 + n2);
      hint = 'Add the two attendances together.';
      break;
    }
    case 'calc-1-s29': { // 2-step · totalling multiple items
      const n1 = randomInt(8, 60), n2 = randomInt(8, 60), n3 = randomInt(8, 60);
      q = `A shop sold ${n1} pens, ${n2} pencils and ${n3} markers. How many items did the shop sell in total?`;
      a = String(n1 + n2 + n3);
      hint = 'Add all three amounts together.';
      break;
    }
    case 'calc-1-s30': { // 2-step · decimal totals (shopping & weight)
      const x = randDec(1, 9), y = randDec(2, 9), z = randDec(1, 5);
      q = `A shopper buys items costing ${decStr(x)}, ${decStr(y)} and ${decStr(z)} dollars. What is the total cost? (dollars)`;
      a = decStr(x + y + z);
      hint = 'Line up the decimal points and add all three prices.';
      break;
    }
    case 'calc-1-s31': { // fraction addition · cooking & time
      const f1 = properFrac(8), f2 = properFrac(8);
      q = `A recipe uses $${fTex(f1)}$ of a cup of flour and $${fTex(f2)}$ of a cup of sugar. How many cups of dry ingredients are used in total?`;
      a = fStr(fAdd(f1, f2));
      hint = 'Use a common denominator, then add the fractions.';
      break;
    }
    case 'calc-1-s32': { // tables & charts (reading & totalling)
      const mon = randomInt(20, 90), tue = randomInt(20, 90), wed = randomInt(20, 90);
      q = `A table shows books borrowed from a library: Monday ${mon}, Tuesday ${tue}, Wednesday ${wed}. How many books were borrowed over the three days?`;
      a = String(mon + tue + wed);
      hint = 'Read each value from the table and add them up.';
      break;
    }
    case 'calc-1-s33': { // 3-step story · build & solve equation
      const n1 = randomInt(20, 150), n2 = randomInt(20, 150), n3 = randomInt(20, 150);
      q = `A team scored ${n1} points in round 1, ${n2} points in round 2 and ${n3} points in round 3. What was the team's total score?`;
      a = String(n1 + n2 + n3);
      hint = 'Total = round 1 + round 2 + round 3.';
      break;
    }
    case 'calc-1-s34': { // 4-step · integers, decimals & fractions
      const i = randomInt(2, 9);
      const d = randDec(1, 9);
      const denom = pick([2, 4, 5, 10]);
      const num = randomInt(1, denom - 1);
      const extra = randomInt(2, 9);
      q = `A jug holds ${i} litres of water. Then ${decStr(d)} litres, $\\frac{${num}}{${denom}}$ of a litre and ${extra} more litres are added. How many litres are in the jug now?`;
      a = decStr(i + d + num / denom + extra);
      hint = 'Convert the fraction to a decimal, then add all four amounts.';
      break;
    }

    // ════ Stage 1B: Subtraction — 34-step curriculum ════
    // Phase A — Concept & number sense
    case 'calc-sub-s1': { // what is subtraction? (taking away)
      const n1 = randomInt(4, 10), n2 = randomInt(1, n1 - 1);
      q = `$$ ${n1} - ${n2} = ? $$`;
      a = String(n1 - n2);
      hint = `Start with ${n1} and take away ${n2}.`;
      break;
    }
    case 'calc-sub-s2': { // counting back on a number line
      const n1 = randomInt(5, 10), n2 = randomInt(1, n1 - 1);
      q = `$$ ${n1} - ${n2} = ? $$`;
      a = String(n1 - n2);
      hint = `Start at ${n1} and count back ${n2} steps.`;
      break;
    }
    case 'calc-sub-s3': { // inverse of addition (fact families)
      const n1 = randomInt(3, 9), n2 = randomInt(3, 9);
      const sum = n1 + n2;
      q = `$$ ${sum} - ${n1} = ? $$`;
      a = String(n2);
      hint = `Since ${n1} + ${n2} = ${sum}, subtraction undoes the addition.`;
      break;
    }
    case 'calc-sub-s4': { // subtraction from 10 (number bonds)
      const n1 = randomInt(1, 9);
      q = `$$ 10 - ${n1} = ? $$`;
      a = String(10 - n1);
      hint = `What pairs with ${n1} to make 10?`;
      break;
    }

    // Phase B — 1-digit subtraction
    case 'calc-sub-s5': { // 1-digit − 1-digit · no borrowing
      const n1 = randomInt(2, 9), n2 = randomInt(1, n1);
      q = `$$ ${n1} - ${n2} = ? $$`;
      a = String(n1 - n2);
      hint = 'Take the smaller number from the larger one.';
      break;
    }
    case 'calc-sub-s6': { // 2-digit − 1-digit · no borrowing
      const t = randomInt(1, 9), o = randomInt(1, 9);
      const n1 = t * 10 + o;
      const n2 = randomInt(1, o);
      q = `$$ ${n1} - ${n2} = ? $$`;
      a = String(n1 - n2);
      hint = 'The ones digit is big enough — no borrowing needed.';
      break;
    }
    case 'calc-sub-s7': { // 2-digit − 1-digit · with borrowing
      const t = randomInt(1, 9), o = randomInt(0, 8);
      const n1 = t * 10 + o;
      const n2 = randomInt(o + 1, 9);
      q = `$$ ${n1} - ${n2} = ? $$`;
      a = String(n1 - n2);
      hint = 'The ones digit is too small — borrow 10 from the tens.';
      break;
    }
    case 'calc-sub-s8': { // subtract from multiples of 10
      const ten = randomInt(2, 9) * 10;
      const n2 = randomInt(1, ten - 1);
      q = `$$ ${ten} - ${n2} = ? $$`;
      a = String(ten - n2);
      hint = 'Borrow from the tens, or count up from the smaller number.';
      break;
    }

    // Phase C — 2-digit subtraction
    case 'calc-sub-s9': { // 2-digit − 2-digit · no borrowing
      const t1 = randomInt(2, 9), o1 = randomInt(0, 9);
      const t2 = randomInt(1, t1), o2 = randomInt(0, o1);
      const n1 = t1 * 10 + o1, n2 = t2 * 10 + o2;
      q = `$$ ${n1} - ${n2} = ? $$`;
      a = String(n1 - n2);
      hint = 'Every digit on top is large enough — no borrowing.';
      break;
    }
    case 'calc-sub-s10': { // mental strategies (compensating)
      const n1 = randomInt(50, 95);
      const n2 = pick([18, 19, 28, 29, 38, 39]);
      q = `$$ ${n1} - ${n2} = ? $$`;
      a = String(n1 - n2);
      hint = `Subtract ${n2 + 1}, then add 1 back.`;
      break;
    }
    case 'calc-sub-s11': { // 2-digit − 2-digit · 1 borrowing
      let n1, n2;
      do {
        n1 = randomInt(30, 98);
        n2 = randomInt(11, n1 - 1);
      } while ((n1 % 10) >= (n2 % 10));
      q = `$$ ${n1} - ${n2} = ? $$`;
      a = String(n1 - n2);
      hint = 'The ones digit is too small — borrow 10 from the tens column.';
      break;
    }
    case 'calc-sub-s12': { // subtract from 100 / 200
      const total = pick([100, 200]);
      const n2 = randomInt(total === 100 ? 11 : 105, total - 5);
      q = `$$ ${total} - ${n2} = ? $$`;
      a = String(total - n2);
      hint = `Count up from ${n2} to ${total}.`;
      break;
    }
    case 'calc-sub-s13': { // chain subtraction (100 − a − b − c)
      const start = pick([100, 150, 200]);
      let b, c, d, res;
      do {
        b = randomInt(10, 40); c = randomInt(10, 40); d = randomInt(10, 40);
        res = start - b - c - d;
      } while (res < 0);
      q = `$$ ${start} - ${b} - ${c} - ${d} = ? $$`;
      a = String(res);
      hint = 'Subtract one number at a time, left to right.';
      break;
    }

    // Phase D — 3-digit & larger numbers
    case 'calc-sub-s14': { // 3-digit − 3-digit · no borrowing
      const h1 = randomInt(2, 9), t1 = randomInt(0, 9), o1 = randomInt(0, 9);
      const h2 = randomInt(1, h1), t2 = randomInt(0, t1), o2 = randomInt(0, o1);
      const n1 = h1 * 100 + t1 * 10 + o1, n2 = h2 * 100 + t2 * 10 + o2;
      q = `$$ ${n1} - ${n2} = ? $$`;
      a = String(n1 - n2);
      hint = 'Every column on top is large enough — no borrowing.';
      break;
    }
    case 'calc-sub-s15': { // 3-digit − 3-digit · with borrowing
      let n1, n2;
      do {
        n1 = randomInt(300, 999);
        n2 = randomInt(120, n1 - 1);
      } while ((n1 % 10) >= (n2 % 10) && (Math.floor(n1 / 10) % 10) >= (Math.floor(n2 / 10) % 10));
      q = `$$ ${n1} - ${n2} = ? $$`;
      a = String(n1 - n2);
      hint = 'Borrow from the next column whenever the top digit is too small.';
      break;
    }
    case 'calc-sub-s16': { // 4-digit+ subtraction
      const digits = pick([4, 5]);
      const lo = Math.pow(10, digits - 1), hi = Math.pow(10, digits) - 1;
      const n1 = randomInt(lo + Math.floor((hi - lo) / 2), hi);
      const n2 = randomInt(lo, n1 - 1);
      q = `$$ ${n1} - ${n2} = ? $$`;
      a = String(n1 - n2);
      hint = 'Line up the digits by place value and subtract column by column.';
      break;
    }
    case 'calc-sub-s17': { // mental math strategies (rounding & adjust)
      const base = pick([99, 199, 299, 98, 198]);
      const n1 = randomInt(base + 20, base + 600);
      q = `$$ ${n1} - ${base} = ? $$`;
      a = String(n1 - base);
      hint = `Subtract ${base + 1}, then add 1 back.`;
      break;
    }

    // Phase E — Decimals & fractions subtraction
    case 'calc-sub-s18': { // decimal − decimal · same places
      const dp = randomInt(1, 2);
      let x = randDec(dp, 9), y = randDec(dp, 9);
      if (x < y) { const t = x; x = y; y = t; }
      q = `$$ ${decStr(x)} - ${decStr(y)} = ? $$`;
      a = decStr(x - y);
      hint = 'Line up the decimal points, then subtract.';
      break;
    }
    case 'calc-sub-s19': { // decimal − decimal · diff places
      let x = randDec(2, 9), y = randDec(1, 9);
      if (x < y) { const t = x; x = y; y = t; }
      q = `$$ ${decStr(x)} - ${decStr(y)} = ? $$`;
      a = decStr(x - y);
      hint = 'Give both numbers the same number of decimal places first.';
      break;
    }
    case 'calc-sub-s20': { // fraction − fraction · same denom
      const d = randomInt(3, 12);
      const n1 = randomInt(2, d - 1);
      const n2 = randomInt(1, n1 - 1);
      q = `$$ \\frac{${n1}}{${d}} - \\frac{${n2}}{${d}} = ? $$`;
      a = simplifyFraction(n1 - n2, d);
      hint = 'Same denominator — subtract the numerators, keep the denominator.';
      break;
    }
    case 'calc-sub-s21': { // fraction − fraction · diff denom
      let [f1, f2] = diffFracs(8);
      if (fVal(f1) < fVal(f2)) { const t = f1; f1 = f2; f2 = t; }
      q = `$$ ${fTex(f1)} - ${fTex(f2)} = ? $$`;
      a = fStr(fSub(f1, f2));
      hint = 'Rewrite with a common denominator, then subtract.';
      break;
    }
    case 'calc-sub-s22': { // integer − decimal − fraction (mixed types)
      const denom = pick([2, 4, 5, 10]);
      const num = randomInt(1, denom - 1);
      const d = randDec(1, 4);
      const i = randomInt(Math.ceil(d + num / denom) + 1, 15);
      q = `$$ ${i} - ${decStr(d)} - \\frac{${num}}{${denom}} = ? $$`;
      a = decStr(i - d - num / denom);
      hint = 'Convert the fraction to a decimal, then subtract both from the integer.';
      break;
    }

    // Phase F — Combined & advanced strategies
    case 'calc-sub-s23': { // estimation & reasonableness check
      const round = pick([10, 100]);
      const lo = round === 10 ? 30 : 300, hi = round === 10 ? 95 : 950;
      const n1 = randomInt(lo, hi);
      const n2 = randomInt(round === 10 ? 12 : 120, n1 - round);
      q = `Estimate ${n1} - ${n2} by rounding each number to the nearest ${round}. (number only)`;
      a = String(Math.round(n1 / round) * round - Math.round(n2 / round) * round);
      hint = `Round ${n1} and ${n2} to the nearest ${round}, then subtract.`;
      break;
    }
    case 'calc-sub-s24': { // inverse check with addition
      const result = randomInt(20, 400);
      const n2 = randomInt(20, 400);
      q = `$$ ${result + n2} - ${n2} = ? $$`;
      a = String(result);
      hint = `Check by adding: the answer plus ${n2} should give ${result + n2}.`;
      break;
    }
    case 'calc-sub-s25': { // finding the difference (larger − smaller)
      let n1 = randomInt(20, 500), n2 = randomInt(20, 500);
      if (n1 < n2) { const t = n1; n1 = n2; n2 = t; }
      q = `What is the difference between ${n1} and ${n2}? (number only)`;
      a = String(n1 - n2);
      hint = 'Difference = larger number − smaller number.';
      break;
    }
    case 'calc-sub-s26': { // intro to negative results
      const n1 = randomInt(2, 30), n2 = randomInt(n1 + 1, n1 + 30);
      q = `$$ ${n1} - ${n2} = ? $$`;
      a = String(n1 - n2);
      hint = 'Taking away more than you have gives a negative answer.';
      break;
    }

    // Phase G — Word problems
    case 'calc-sub-s27': { // 1-step · small numbers (objects & change)
      const n1 = randomInt(8, 20), n2 = randomInt(1, n1 - 1);
      q = `There are ${n1} birds on a fence. ${n2} of them fly away. How many birds are left?`;
      a = String(n1 - n2);
      hint = 'Take the number that left away from the starting amount.';
      break;
    }
    case 'calc-sub-s28': { // 1-step · large numbers (stock & scores)
      const n1 = randomInt(1200, 8000), n2 = randomInt(200, n1 - 100);
      q = `A warehouse had ${n1} boxes in stock. ${n2} boxes were shipped out. How many boxes remain?`;
      a = String(n1 - n2);
      hint = 'Subtract the shipped boxes from the starting stock.';
      break;
    }
    case 'calc-sub-s29': { // 2-step · budget & spending
      const spend1 = randomInt(10, 60), spend2 = randomInt(10, 60);
      const budget = spend1 + spend2 + randomInt(5, 90);
      q = `A shopper has a budget of ${budget} dollars. They spend ${spend1} dollars, then ${spend2} dollars more. How many dollars are left? (dollars)`;
      a = String(budget - spend1 - spend2);
      hint = 'Subtract both amounts spent from the starting budget.';
      break;
    }
    case 'calc-sub-s30': { // 2-step · decimal remainders
      const piece = randDec(1, 3), used1 = randDec(1, 3);
      const total = piece + used1 + randDec(1, 5);
      q = `A roll of ribbon is ${decStr(total)} metres long. ${decStr(piece)} metres and ${decStr(used1)} metres are cut off. How much ribbon is left? (metres)`;
      a = decStr(total - piece - used1);
      hint = 'Subtract both cut lengths from the total length.';
      break;
    }
    case 'calc-sub-s31': { // fraction subtraction · cooking & time
      let f1 = properFrac(8), f2 = properFrac(8);
      if (fVal(f1) < fVal(f2)) { const t = f1; f1 = f2; f2 = t; }
      q = `A recipe needs $${fTex(f1)}$ of a cup of sugar. A baker has already added $${fTex(f2)}$ of a cup. How much more sugar must be added?`;
      a = fStr(fSub(f1, f2));
      hint = 'Subtract the amount already added from the amount needed.';
      break;
    }
    case 'calc-sub-s32': { // tables & charts (finding differences)
      const may = randomInt(120, 400), june = randomInt(120, 400);
      const hi = Math.max(may, june), lo = Math.min(may, june);
      q = `A chart shows visitors to a museum: May ${may}, June ${june}. How many more visitors came in the busier month?`;
      a = String(hi - lo);
      hint = 'Find the difference between the two months.';
      break;
    }
    case 'calc-sub-s33': { // 3-step story · build & solve equation
      const start = randomInt(300, 600);
      const out1 = randomInt(20, 100), out2 = randomInt(20, 100);
      q = `A library has ${start} books. ${out1} books are borrowed in the morning and ${out2} in the afternoon. How many books are left on the shelves?`;
      a = String(start - out1 - out2);
      hint = 'Books left = start − morning − afternoon.';
      break;
    }
    case 'calc-sub-s34': { // 4-step · integers, decimals & fractions
      const denom = pick([2, 4, 5, 10]);
      const num = randomInt(1, denom - 1);
      const d = randDec(1, 4);
      const extra = randomInt(2, 9);
      const i = randomInt(Math.ceil(d + num / denom + extra) + 2, 40);
      q = `A tank holds ${i} litres of water. Then ${decStr(d)} litres, $\\frac{${num}}{${denom}}$ of a litre and ${extra} litres are drained out. How many litres remain?`;
      a = decStr(i - d - num / denom - extra);
      hint = 'Convert the fraction to a decimal, then subtract all three amounts.';
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

    // ════ Stage 3: Multiplication — 34-step curriculum ════
    // Phase A — Concept (steps 1–4)
    case 'calc-3-a1': { // Repeated addition & equal groups
      const groups = randomInt(2, 9);
      const each = randomInt(2, 10);
      q = `There are ${groups} groups with ${each} in each group. How many altogether?`;
      a = String(groups * each);
      hint = `Add ${each} a total of ${groups} times, or use ${groups} × ${each}.`;
      break;
    }
    case 'calc-3-a2': { // Arrays & area model
      const rows = randomInt(2, 9);
      const cols = randomInt(2, 9);
      q = `An array has ${rows} rows and ${cols} columns. How many items are there in total?`;
      a = String(rows * cols);
      hint = `Multiply the number of rows by the number of columns: ${rows} × ${cols}.`;
      break;
    }
    case 'calc-3-a3': { // Commutative & associative properties
      const n1 = randomInt(2, 9), n2 = randomInt(2, 9), n3 = randomInt(2, 5);
      if (Math.random() > 0.5) {
        q = `$$ ${n1} \\times ${n2} = ${n2} \\times \\, ? $$`;
        a = String(n1);
        hint = `The commutative property: a × b = b × a.`;
      } else {
        q = `$$ (${n1} \\times ${n2}) \\times ${n3} = ${n1} \\times (\\, ? \\times ${n3}) $$`;
        a = String(n2);
        hint = `The associative property: (a × b) × c = a × (b × c).`;
      }
      break;
    }
    case 'calc-3-a4': { // Distributive property
      const a1 = randomInt(2, 9), b1 = randomInt(2, 9), c1 = randomInt(2, 9);
      q = `$$ ${a1} \\times (${b1} + ${c1}) = (${a1} \\times \\, ?) + (${a1} \\times ${c1}) $$`;
      a = String(b1);
      hint = `Distributive property: a × (b + c) = (a × b) + (a × c).`;
      break;
    }

    // Phase B — Times tables (steps 5–9)
    case 'calc-3-b5': { // ×1, ×2, ×5, ×10 tables
      const multipliers5 = [1, 2, 5, 10];
      const m5 = pick(multipliers5);
      const n5 = randomInt(1, 12);
      q = `$$ ${n5} \\times ${m5} = ? $$`;
      a = String(n5 * m5);
      hint = `This is part of the ×${m5} times table.`;
      break;
    }
    case 'calc-3-b6': { // ×3, ×4, ×6 tables
      const multipliers6 = [3, 4, 6];
      const m6 = pick(multipliers6);
      const n6 = randomInt(1, 12);
      q = `$$ ${n6} \\times ${m6} = ? $$`;
      a = String(n6 * m6);
      hint = `This is part of the ×${m6} times table.`;
      break;
    }
    case 'calc-3-b7': { // ×7, ×8 tables
      const m7 = Math.random() > 0.5 ? 7 : 8;
      const n7 = randomInt(1, 12);
      q = `$$ ${n7} \\times ${m7} = ? $$`;
      a = String(n7 * m7);
      hint = `This is part of the ×${m7} times table.`;
      break;
    }
    case 'calc-3-b8': { // ×9, ×11, ×12 tables
      const multipliers8 = [9, 11, 12];
      const m8 = pick(multipliers8);
      const n8 = randomInt(1, 12);
      q = `$$ ${n8} \\times ${m8} = ? $$`;
      a = String(n8 * m8);
      hint = `This is part of the ×${m8} times table.`;
      break;
    }
    case 'calc-3-b9': { // Full times table review
      const n9a = randomInt(1, 12), n9b = randomInt(1, 12);
      q = `$$ ${n9a} \\times ${n9b} = ? $$`;
      a = String(n9a * n9b);
      hint = `Recall the ×${n9b} times table.`;
      break;
    }

    // Phase C — Multi-digit (steps 10–14)
    case 'calc-3-c10': { // 2-digit × 1-digit
      const n10a = randomInt(11, 99), n10b = randomInt(2, 9);
      q = `$$ ${n10a} \\times ${n10b} = ? $$`;
      a = String(n10a * n10b);
      hint = `Split ${n10a} into tens and ones, multiply each by ${n10b}, then add.`;
      break;
    }
    case 'calc-3-c11': { // 2-digit × 2-digit
      const n11a = randomInt(11, 99), n11b = randomInt(11, 99);
      q = `$$ ${n11a} \\times ${n11b} = ? $$`;
      a = String(n11a * n11b);
      hint = `Use the area model or column multiplication.`;
      break;
    }
    case 'calc-3-c12': { // 3-digit × 1-digit
      const n12a = randomInt(100, 999), n12b = randomInt(2, 9);
      q = `$$ ${n12a} \\times ${n12b} = ? $$`;
      a = String(n12a * n12b);
      hint = `Multiply ${n12b} by the hundreds, then tens, then ones.`;
      break;
    }
    case 'calc-3-c13': { // 3-digit × 2-digit
      const n13a = randomInt(100, 999), n13b = randomInt(11, 99);
      q = `$$ ${n13a} \\times ${n13b} = ? $$`;
      a = String(n13a * n13b);
      hint = `Use column multiplication: multiply by the ones digit first, then the tens digit.`;
      break;
    }
    case 'calc-3-c14': { // Mental multiplication strategies
      const n14 = randomInt(11, 49) * 2;
      q = `$$ ${n14} \\times 5 = ? $$`;
      a = String(n14 * 5);
      hint = `Halve ${n14} and multiply by 10: ${n14 / 2} × 10 = ${n14 * 5}.`;
      break;
    }

    // Phase D — Powers of 10 (steps 15–17)
    case 'calc-3-d15': { // Multiply by 10, 100, 1000
      const powers15 = [10, 100, 1000];
      const p15 = pick(powers15);
      const n15 = randomInt(2, 99);
      q = `$$ ${n15} \\times ${p15} = ? $$`;
      a = String(n15 * p15);
      hint = `Multiplying by ${p15} shifts each digit ${Math.log10(p15)} place(s) to the left.`;
      break;
    }
    case 'calc-3-d16': { // Multiply by multiples of 10
      const base16 = randomInt(2, 9);
      const mult16 = pick([20, 30, 40, 50, 60, 70, 80, 90]);
      q = `$$ ${base16} \\times ${mult16} = ? $$`;
      a = String(base16 * mult16);
      hint = `Multiply ${base16} × ${mult16 / 10}, then multiply the result by 10.`;
      break;
    }
    case 'calc-3-d17': { // Introduction to square numbers
      const base17 = randomInt(2, 12);
      q = `$$ ${base17}^2 = ? $$`;
      a = String(base17 * base17);
      hint = `${base17}² means ${base17} × ${base17}.`;
      break;
    }

    // Phase E — Decimals & Fractions (steps 18–22)
    case 'calc-3-e18': { // Decimal × whole number
      const dec18 = (randomInt(1, 99) / 10).toFixed(1);
      const wh18 = randomInt(2, 9);
      const ans18 = Math.round(parseFloat(dec18) * wh18 * 10) / 10;
      q = `$$ ${dec18} \\times ${wh18} = ? $$`;
      a = String(ans18);
      hint = `Multiply as whole numbers then adjust for the decimal point.`;
      break;
    }
    case 'calc-3-e19': { // Decimal × decimal
      const d19a = (randomInt(1, 9) / 10).toFixed(1);
      const d19b = (randomInt(1, 9) / 10).toFixed(1);
      const ans19 = Math.round(parseFloat(d19a) * parseFloat(d19b) * 100) / 100;
      q = `$$ ${d19a} \\times ${d19b} = ? $$`;
      a = String(ans19);
      hint = `Count total decimal places in both numbers — your answer will have that many.`;
      break;
    }
    case 'calc-3-e20': { // Fraction × whole number
      const d20 = randomInt(2, 9);
      const n20 = randomInt(1, d20 - 1);
      const w20 = randomInt(2, 8);
      q = `$$ \\frac{${n20}}{${d20}} \\times ${w20} = ? $$`;
      a = simplifyFraction(n20 * w20, d20);
      hint = `Multiply the numerator by ${w20}, keep the denominator, then simplify.`;
      break;
    }
    case 'calc-3-e21': { // Fraction × fraction
      const d21a = randomInt(2, 9), n21a = randomInt(1, d21a - 1);
      const d21b = randomInt(2, 9), n21b = randomInt(1, d21b - 1);
      q = `$$ \\frac{${n21a}}{${d21a}} \\times \\frac{${n21b}}{${d21b}} = ? $$`;
      a = simplifyFraction(n21a * n21b, d21a * d21b);
      hint = `Multiply numerators together and denominators together, then simplify.`;
      break;
    }
    case 'calc-3-e22': { // Mixed number × mixed number
      const w22a = randomInt(1, 4), n22a = randomInt(1, 3), d22a = randomInt(n22a + 1, 6);
      const w22b = randomInt(1, 4), n22b = randomInt(1, 3), d22b = randomInt(n22b + 1, 6);
      const top22a = w22a * d22a + n22a, top22b = w22b * d22b + n22b;
      q = `$$ ${w22a}\\frac{${n22a}}{${d22a}} \\times ${w22b}\\frac{${n22b}}{${d22b}} = ? $$`;
      a = simplifyFraction(top22a * top22b, d22a * d22b);
      hint = `Convert each mixed number to an improper fraction, then multiply.`;
      break;
    }

    // Phase F — Combined (steps 23–26)
    case 'calc-3-f23': { // Estimation & rounding in multiplication
      const n23a = randomInt(11, 99), n23b = randomInt(2, 9);
      const rounded23 = Math.round(n23a / 10) * 10;
      q = `Estimate: $$ ${n23a} \\times ${n23b} $$  Round ${n23a} to the nearest 10 first.`;
      a = String(rounded23 * n23b);
      hint = `Round ${n23a} → ${rounded23}, then multiply by ${n23b}.`;
      break;
    }
    case 'calc-3-f24': { // Inverse operations to verify
      const n24a = randomInt(2, 9), n24b = randomInt(2, 12);
      const product24 = n24a * n24b;
      q = `If $$ ${n24a} \\times ${n24b} = ${product24} $$, what is $$ ${product24} \\div ${n24a} $$?`;
      a = String(n24b);
      hint = `Division is the inverse of multiplication.`;
      break;
    }
    case 'calc-3-f25': { // Mixed operations with multiplication
      const n25a = randomInt(2, 9), n25b = randomInt(2, 9), n25c = randomInt(1, 20);
      q = `$$ ${n25a} \\times ${n25b} + ${n25c} = ? $$`;
      a = String(n25a * n25b + n25c);
      hint = `Multiplication comes before addition (order of operations).`;
      break;
    }
    case 'calc-3-f26': { // Introduction to multiplication with negatives
      const n26a = randomInt(2, 9), n26b = randomInt(2, 9);
      const neg26 = Math.random() > 0.5;
      q = neg26
        ? `$$ -${n26a} \\times ${n26b} = ? $$`
        : `$$ ${n26a} \\times (-${n26b}) = ? $$`;
      a = String(-(n26a * n26b));
      hint = `A positive times a negative gives a negative result.`;
      break;
    }

    // Phase G — Word problems (steps 27–34)
    case 'calc-3-g27': { // Groups & area word problems
      const rows27 = randomInt(3, 12), cols27 = randomInt(3, 12);
      q = `A rectangular garden has ${rows27} rows of plants with ${cols27} plants in each row. How many plants are there in total?`;
      a = String(rows27 * cols27);
      hint = `Multiply the number of rows by plants per row.`;
      break;
    }
    case 'calc-3-g28': { // Unit price word problems
      const price28 = randomInt(2, 20), qty28 = randomInt(3, 12);
      q = `One book costs $${price28}. How much do ${qty28} books cost?`;
      a = String(price28 * qty28);
      hint = `Multiply the unit price by the quantity.`;
      break;
    }
    case 'calc-3-g29': { // Decimal multiplication word problems
      const price29 = (randomInt(10, 99) / 10).toFixed(1);
      const qty29 = randomInt(2, 9);
      const ans29 = Math.round(parseFloat(price29) * qty29 * 10) / 10;
      q = `A pen costs $${price29}. What is the total cost of ${qty29} pens?`;
      a = String(ans29);
      hint = `Multiply $${price29} by ${qty29}.`;
      break;
    }
    case 'calc-3-g30': { // Fraction multiplication word problems
      const d30 = randomInt(3, 8), n30 = randomInt(1, d30 - 1), total30 = randomInt(d30, d30 * 5) * d30 / d30;
      const whole30 = randomInt(2, 8) * d30;
      q = `A recipe uses $\\frac{${n30}}{${d30}}$ of a cup of sugar per batch. How many cups are needed for ${whole30 / d30} batches?`;
      a = simplifyFraction(n30 * (whole30 / d30), d30);
      hint = `Multiply $\\frac{${n30}}{${d30}}$ by ${whole30 / d30}.`;
      break;
    }
    case 'calc-3-g31': { // Ratio & proportion problems
      const rate31 = randomInt(2, 10), time31 = randomInt(3, 10);
      q = `A machine produces ${rate31} parts per minute. How many parts does it produce in ${time31} minutes?`;
      a = String(rate31 * time31);
      hint = `Multiply the rate by the time: ${rate31} × ${time31}.`;
      break;
    }
    case 'calc-3-g32': { // Multi-step: combining stages 3–4
      const n32a = randomInt(3, 9), n32b = randomInt(3, 9), sub32 = randomInt(1, 10);
      q = `A class has ${n32a} groups of ${n32b} students. ${sub32} students are away. How many are present?`;
      a = String(n32a * n32b - sub32);
      hint = `First find the total: ${n32a} × ${n32b}, then subtract ${sub32}.`;
      break;
    }
    case 'calc-3-g33': { // Multi-step complex problems
      const price33 = randomInt(3, 15), qty33a = randomInt(2, 6), qty33b = randomInt(2, 6);
      q = `Alice buys ${qty33a} notebooks at $${price33} each, and Bob buys ${qty33b} notebooks at the same price. What is the total amount they spend together?`;
      a = String(price33 * (qty33a + qty33b));
      hint = `Add the quantities first, then multiply by the price: (${qty33a} + ${qty33b}) × $${price33}.`;
      break;
    }
    case 'calc-3-g34': { // Challenge: all operations combined
      const n34a = randomInt(2, 9), n34b = randomInt(2, 9), n34c = randomInt(2, 9), n34d = randomInt(1, 5);
      q = `$$ (${n34a} \\times ${n34b}) + (${n34c} \\times ${n34d}) = ? $$`;
      a = String(n34a * n34b + n34c * n34d);
      hint = `Calculate each multiplication first, then add the results.`;
      break;
    }

    // ════ Stage 4: Division — 34-step curriculum ════
    // Phase A — Concept (steps 1–4)
    case 'calc-4-a1': { // Fair sharing & equal groups
      const total41 = randomInt(2, 9) * randomInt(2, 9);
      const groups41 = pick([2, 3, 4, 5, 6, 8, 9]);
      const q41 = Math.round(total41 / groups41) * groups41;
      q = `${q41} apples are shared equally among ${groups41} children. How many does each child get?`;
      a = String(q41 / groups41);
      hint = `Divide the total by the number of groups.`;
      break;
    }
    case 'calc-4-a2': { // Repeated subtraction
      const divisor42 = randomInt(2, 6);
      const quotient42 = randomInt(3, 8);
      const dividend42 = divisor42 * quotient42;
      q = `How many times can you subtract ${divisor42} from ${dividend42} before reaching 0?`;
      a = String(quotient42);
      hint = `Keep subtracting ${divisor42} and count: ${dividend42} → ${dividend42 - divisor42} → ... → 0.`;
      break;
    }
    case 'calc-4-a3': { // Relationship between multiplication & division
      const n43a = randomInt(2, 9), n43b = randomInt(2, 9);
      q = `If $$ ${n43a} \\times ${n43b} = ${n43a * n43b} $$, what is $$ ${n43a * n43b} \\div ${n43b} $$?`;
      a = String(n43a);
      hint = `Division is the inverse of multiplication.`;
      break;
    }
    case 'calc-4-a4': { // Understanding remainders
      const divisor44 = randomInt(2, 9);
      const quotient44 = randomInt(3, 12);
      const rem44 = randomInt(1, divisor44 - 1);
      const dividend44 = divisor44 * quotient44 + rem44;
      q = `$$ ${dividend44} \\div ${divisor44} = ? $$  (Write as: quotient r remainder)`;
      a = `${quotient44} r${rem44}`;
      hint = `${dividend44} = ${divisor44} × ${quotient44} + ${rem44}, so the answer is ${quotient44} r${rem44}.`;
      break;
    }

    // Phase B — Basic facts (steps 5–9)
    case 'calc-4-b5': { // ÷1, ÷2, ÷5, ÷10 facts
      const divs45 = [1, 2, 5, 10];
      const d45 = pick(divs45);
      const ans45 = randomInt(1, 12);
      q = `$$ ${ans45 * d45} \\div ${d45} = ? $$`;
      a = String(ans45);
      hint = `This is part of the ÷${d45} division facts.`;
      break;
    }
    case 'calc-4-b6': { // ÷3, ÷4, ÷6 facts
      const divs46 = [3, 4, 6];
      const d46 = pick(divs46);
      const ans46 = randomInt(1, 12);
      q = `$$ ${ans46 * d46} \\div ${d46} = ? $$`;
      a = String(ans46);
      hint = `This is part of the ÷${d46} division facts.`;
      break;
    }
    case 'calc-4-b7': { // ÷7, ÷8 facts
      const d47 = Math.random() > 0.5 ? 7 : 8;
      const ans47 = randomInt(1, 12);
      q = `$$ ${ans47 * d47} \\div ${d47} = ? $$`;
      a = String(ans47);
      hint = `This is part of the ÷${d47} division facts.`;
      break;
    }
    case 'calc-4-b8': { // ÷9, ÷11, ÷12 facts
      const divs48 = [9, 11, 12];
      const d48 = pick(divs48);
      const ans48 = randomInt(1, 12);
      q = `$$ ${ans48 * d48} \\div ${d48} = ? $$`;
      a = String(ans48);
      hint = `This is part of the ÷${d48} division facts.`;
      break;
    }
    case 'calc-4-b9': { // Full division facts review
      const d49 = randomInt(2, 12);
      const ans49 = randomInt(1, 12);
      q = `$$ ${ans49 * d49} \\div ${d49} = ? $$`;
      a = String(ans49);
      hint = `Think: what times ${d49} equals ${ans49 * d49}?`;
      break;
    }

    // Phase C — Long division (steps 10–14)
    case 'calc-4-c10': { // 2-digit ÷ 1-digit (no remainder)
      const d410 = randomInt(2, 9);
      const ans410 = randomInt(10, 15);
      q = `$$ ${ans410 * d410} \\div ${d410} = ? $$`;
      a = String(ans410);
      hint = `Use short division step by step.`;
      break;
    }
    case 'calc-4-c11': { // 2-digit ÷ 1-digit (with remainder)
      const d411 = randomInt(2, 9);
      const ans411 = randomInt(10, 15);
      const rem411 = randomInt(1, d411 - 1);
      q = `$$ ${ans411 * d411 + rem411} \\div ${d411} = ? $$  (Write as: quotient r remainder)`;
      a = `${ans411} r${rem411}`;
      hint = `${ans411 * d411 + rem411} = ${d411} × ${ans411} + ${rem411}.`;
      break;
    }
    case 'calc-4-c12': { // 3-digit ÷ 1-digit
      const d412 = randomInt(2, 9);
      const ans412 = randomInt(100, 150);
      q = `$$ ${ans412 * d412} \\div ${d412} = ? $$`;
      a = String(ans412);
      hint = `Use long division: divide the hundreds digit first, then tens, then ones.`;
      break;
    }
    case 'calc-4-c13': { // 3-digit ÷ 2-digit
      const d413 = randomInt(11, 20);
      const ans413 = randomInt(10, 50);
      q = `$$ ${ans413 * d413} \\div ${d413} = ? $$`;
      a = String(ans413);
      hint = `Estimate how many times ${d413} fits into the first digits, then work down.`;
      break;
    }
    case 'calc-4-c14': { // Mental division strategies
      const base414 = randomInt(2, 9);
      const ans414 = randomInt(10, 50) * 2;
      q = `$$ ${ans414 * base414} \\div ${base414} = ? $$`;
      a = String(ans414);
      hint = `Halve the dividend and halve the divisor if both are even, or use known facts.`;
      break;
    }

    // Phase D — Powers of 10 (steps 15–17)
    case 'calc-4-d15': { // Divide by 10, 100, 1000
      const powers415 = [10, 100, 1000];
      const p415 = pick(powers415);
      const n415 = randomInt(2, 9) * p415;
      q = `$$ ${n415} \\div ${p415} = ? $$`;
      a = String(n415 / p415);
      hint = `Dividing by ${p415} shifts each digit ${Math.log10(p415)} place(s) to the right.`;
      break;
    }
    case 'calc-4-d16': { // Factors, multiples & divisibility
      const n416 = randomInt(12, 60);
      const factor416 = pick([2, 3, 4, 5, 6, 10].filter(f => n416 % f === 0));
      q = `Is ${n416} divisible by ${factor416 || 2}?  Write Yes or No.`;
      a = n416 % (factor416 || 2) === 0 ? 'Yes' : 'No';
      hint = `Check if ${n416} ÷ ${factor416 || 2} leaves no remainder.`;
      break;
    }
    case 'calc-4-d17': { // Introduction to square roots
      const base417 = randomInt(2, 12);
      q = `$$ \\sqrt{${base417 * base417}} = ? $$`;
      a = String(base417);
      hint = `Ask yourself: what number multiplied by itself gives ${base417 * base417}?`;
      break;
    }

    // Phase E — Decimals & Fractions (steps 18–22)
    case 'calc-4-e18': { // Decimal ÷ whole number
      const wh418 = randomInt(2, 5);
      const ans418 = (randomInt(1, 9) / 10);
      const dividend418 = Math.round(ans418 * wh418 * 10) / 10;
      q = `$$ ${dividend418} \\div ${wh418} = ? $$`;
      a = String(ans418);
      hint = `Divide as a whole number then place the decimal point.`;
      break;
    }
    case 'calc-4-e19': { // Decimal ÷ decimal
      const d419 = (randomInt(1, 9) / 10).toFixed(1);
      const mult419 = randomInt(2, 9);
      const dividend419 = (parseFloat(d419) * mult419).toFixed(1);
      q = `$$ ${dividend419} \\div ${d419} = ? $$`;
      a = String(mult419);
      hint = `Multiply both numbers by 10 to remove the decimal: ${parseFloat(dividend419) * 10} ÷ ${parseFloat(d419) * 10}.`;
      break;
    }
    case 'calc-4-e20': { // Fraction ÷ whole number
      const d420 = randomInt(2, 9), n420 = randomInt(1, d420 - 1), w420 = randomInt(2, 6);
      q = `$$ \\frac{${n420}}{${d420}} \\div ${w420} = ? $$`;
      a = simplifyFraction(n420, d420 * w420);
      hint = `Multiply the denominator by ${w420}: $\\frac{${n420}}{${d420 * w420}}$.`;
      break;
    }
    case 'calc-4-e21': { // Fraction ÷ fraction (reciprocal method)
      const d421a = randomInt(2, 8), n421a = randomInt(1, d421a - 1);
      const d421b = randomInt(2, 8), n421b = randomInt(1, d421b - 1);
      q = `$$ \\frac{${n421a}}{${d421a}} \\div \\frac{${n421b}}{${d421b}} = ? $$`;
      a = simplifyFraction(n421a * d421b, d421a * n421b);
      hint = `Multiply by the reciprocal: $\\frac{${n421a}}{${d421a}} \\times \\frac{${d421b}}{${n421b}}$.`;
      break;
    }
    case 'calc-4-e22': { // Mixed number ÷ mixed number
      const w422a = randomInt(1, 3), n422a = randomInt(1, 3), d422a = randomInt(n422a + 1, 6);
      const w422b = randomInt(1, 2), n422b = randomInt(1, 3), d422b = randomInt(n422b + 1, 6);
      const top422a = w422a * d422a + n422a, top422b = w422b * d422b + n422b;
      q = `$$ ${w422a}\\frac{${n422a}}{${d422a}} \\div ${w422b}\\frac{${n422b}}{${d422b}} = ? $$`;
      a = simplifyFraction(top422a * d422b, d422a * top422b);
      hint = `Convert to improper fractions, then multiply by the reciprocal.`;
      break;
    }

    // Phase F — Combined (steps 23–26)
    case 'calc-4-f23': { // Estimation & rounding in division
      const d423 = randomInt(2, 9);
      const ans423 = randomInt(10, 99);
      const dividend423 = d423 * ans423 + randomInt(1, d423 - 1);
      const rounded423 = Math.round(dividend423 / 10) * 10;
      q = `Estimate: $$ ${dividend423} \\div ${d423} $$  Round ${dividend423} to the nearest 10 first.`;
      a = String(Math.round(rounded423 / d423));
      hint = `Round ${dividend423} → ${rounded423}, then divide by ${d423}.`;
      break;
    }
    case 'calc-4-f24': { // Inverse operations to verify
      const d424 = randomInt(2, 9), ans424 = randomInt(2, 12);
      const dividend424 = d424 * ans424;
      q = `If $$ ${dividend424} \\div ${d424} = ${ans424} $$, what is $$ ${ans424} \\times ${d424} $$?`;
      a = String(dividend424);
      hint = `Multiplication is the inverse of division.`;
      break;
    }
    case 'calc-4-f25': { // Mixed operations with division
      const d425 = randomInt(2, 9), m425 = randomInt(2, 9), add425 = randomInt(1, 20);
      const dividend425 = d425 * randomInt(2, 9);
      q = `$$ ${dividend425} \\div ${d425} + ${add425} = ? $$`;
      a = String(dividend425 / d425 + add425);
      hint = `Division comes before addition (order of operations).`;
      break;
    }
    case 'calc-4-f26': { // Introduction to division with negatives
      const d426 = randomInt(2, 9), ans426 = randomInt(2, 9);
      const neg426 = Math.random() > 0.5;
      q = neg426
        ? `$$ -${d426 * ans426} \\div ${d426} = ? $$`
        : `$$ ${d426 * ans426} \\div (-${d426}) = ? $$`;
      a = String(-ans426);
      hint = `A positive divided by a negative (or vice versa) gives a negative result.`;
      break;
    }

    // Phase G — Word problems (steps 27–34)
    case 'calc-4-g27': { // Fair sharing & grouping word problems
      const total427 = randomInt(3, 9) * randomInt(2, 8);
      const groups427 = pick([2, 3, 4, 5, 6, 8]);
      const div427 = (Math.round(total427 / groups427)) * groups427;
      q = `${div427} stickers are shared equally among ${groups427} students. How many stickers does each student get?`;
      a = String(div427 / groups427);
      hint = `Divide the total by the number of students.`;
      break;
    }
    case 'calc-4-g28': { // Unit price word problems
      const total428 = randomInt(12, 80);
      const qty428 = pick([2, 3, 4, 5, 6, 8, 10]);
      const price428 = Math.round(total428 / qty428) * qty428;
      q = `${qty428} notebooks cost $${price428} in total. What is the price of one notebook?`;
      a = String(price428 / qty428);
      hint = `Divide the total cost by the number of notebooks.`;
      break;
    }
    case 'calc-4-g29': { // Decimal division word problems
      const price429 = randomInt(2, 9);
      const qty429 = randomInt(2, 6);
      const total429 = price429 * qty429;
      q = `${qty429} friends share the cost of a $${total429} meal equally. How much does each person pay?`;
      a = String(price429);
      hint = `Divide $${total429} by ${qty429}.`;
      break;
    }
    case 'calc-4-g30': { // Fraction division word problems
      const d430 = randomInt(2, 6), n430 = randomInt(1, d430 - 1), w430 = randomInt(2, 5);
      q = `A $\\frac{${n430}}{${d430}}$ kg block of cheese is cut into ${w430} equal pieces. How heavy is each piece?`;
      a = simplifyFraction(n430, d430 * w430);
      hint = `Divide $\\frac{${n430}}{${d430}}$ by ${w430}.`;
      break;
    }
    case 'calc-4-g31': { // Speed, distance & time problems
      const speed431 = randomInt(2, 9) * 10;
      const time431 = randomInt(2, 6);
      const dist431 = speed431 * time431;
      q = `A car travels ${dist431} km in ${time431} hours at a constant speed. What is its speed in km/h?`;
      a = String(speed431);
      hint = `Speed = Distance ÷ Time = ${dist431} ÷ ${time431}.`;
      break;
    }
    case 'calc-4-g32': { // Multi-step: combining stages 3–4
      const price432 = randomInt(3, 12), qty432 = randomInt(3, 8), share432 = randomInt(2, 4);
      const total432 = price432 * qty432;
      q = `${share432} friends buy ${qty432} items that cost $${price432} each and split the total equally. How much does each person pay?`;
      a = String(total432 / share432);
      hint = `First find the total: ${qty432} × $${price432} = $${total432}, then divide by ${share432}.`;
      break;
    }
    case 'calc-4-g33': { // Multi-step complex problems
      const rate433 = randomInt(3, 9), workers433 = randomInt(2, 5), hours433 = randomInt(2, 6);
      const total433 = rate433 * workers433 * hours433;
      q = `${workers433} workers together produce ${total433} items in ${hours433} hours. How many items does each worker produce per hour?`;
      a = String(rate433);
      hint = `Total items ÷ workers ÷ hours = ${total433} ÷ ${workers433} ÷ ${hours433}.`;
      break;
    }
    case 'calc-4-g34': { // Challenge: all operations combined
      const d434 = randomInt(2, 6), m434 = randomInt(2, 9);
      const dividend434 = d434 * randomInt(3, 8);
      const add434 = randomInt(2, 10);
      q = `$$ (${dividend434} \\div ${d434}) + (${m434} \\times ${add434}) = ? $$`;
      a = String(dividend434 / d434 + m434 * add434);
      hint = `Solve each bracket first, then add the results.`;
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
      const [f1, f2] = diffFracs(8);
      q = `$$ ${fTex(f1)} + ${fTex(f2)} = ? $$`;
      a = fStr(fAdd(f1, f2));
      hint = 'Different denominators — rewrite with a common denominator first.';
      break;
    }
    case 'calc-5-s4': { // sub · diff denom · no mixed
      let [f1, f2] = diffFracs(8);
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
      const [m1, m2] = diffMixed(8);
      q = `$$ ${mixedTex(m1)} + ${mixedTex(m2)} = ? $$`;
      a = fStr(fAdd(m1.value, m2.value));
      hint = 'Find a common denominator for the fraction parts.';
      break;
    }
    case 'calc-5-s8': { // sub · diff denom · mixed
      let [m1, m2] = diffMixed(8);
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

    // ════ Stage 6: Decimals — 32-step curriculum ════
    // Phase A — Concept & place value
    case 'calc-6-s1': { // what is a decimal? tenths / hundredths
      if (Math.random() > 0.5) {
        const n = randomInt(1, 9);
        q = `Write "${n} tenths" as a decimal.`;
        a = decStr(n / 10);
      } else {
        const n = randomInt(1, 99);
        q = `Write "${n} hundredths" as a decimal.`;
        a = decStr(n / 100);
      }
      hint = 'Tenths fill the first place after the point; hundredths the second.';
      break;
    }
    case 'calc-6-s2': { // reading & writing decimals
      const w = randomInt(1, 9);
      if (Math.random() > 0.5) {
        const n = randomInt(1, 9);
        q = `Write "${w} and ${n} tenths" as a decimal.`;
        a = decStr(w + n / 10);
      } else {
        const n = randomInt(1, 99);
        q = `Write "${w} and ${n} hundredths" as a decimal.`;
        a = decStr(w + n / 100);
      }
      hint = 'The whole number goes before the point, the part after.';
      break;
    }
    case 'calc-6-s3': { // comparing decimals
      let x, y;
      do { x = randDec(2, 9); y = randDec(2, 9); } while (x === y);
      q = `Which decimal is larger: ${decStr(x)} or ${decStr(y)}? (write the larger one)`;
      a = decStr(Math.max(x, y));
      hint = 'Compare place by place from the left.';
      break;
    }
    case 'calc-6-s4': { // rounding decimals
      const x = randDec(3, 9);
      if (Math.random() > 0.5) {
        q = `Round ${decStr(x)} to 1 decimal place.`;
        a = decStr(Math.round(x * 10) / 10);
        hint = 'Look at the 2nd decimal digit — 5 or more rounds up.';
      } else {
        q = `Round ${decStr(x)} to the nearest whole number.`;
        a = decStr(Math.round(x));
        hint = 'Look at the first decimal digit — 5 or more rounds up.';
      }
      break;
    }

    // Phase B — Addition & Subtraction
    case 'calc-6-s5': { // add · same dp
      const dp = randomInt(1, 2);
      const x = randDec(dp, 9), y = randDec(dp, 9);
      q = `$$ ${decStr(x)} + ${decStr(y)} = ? $$`;
      a = decStr(x + y);
      hint = 'Line up the decimal points, then add.';
      break;
    }
    case 'calc-6-s6': { // sub · same dp
      const dp = randomInt(1, 2);
      let x = randDec(dp, 9), y = randDec(dp, 9);
      if (x < y) { const t = x; x = y; y = t; }
      q = `$$ ${decStr(x)} - ${decStr(y)} = ? $$`;
      a = decStr(x - y);
      hint = 'Line up the decimal points, then subtract.';
      break;
    }
    case 'calc-6-s7': { // add · diff dp
      const x = randDec(1, 9), y = randDec(2, 9);
      q = `$$ ${decStr(x)} + ${decStr(y)} = ? $$`;
      a = decStr(x + y);
      hint = 'Fill the shorter decimal with a zero so the places line up.';
      break;
    }
    case 'calc-6-s8': { // sub · diff dp
      let x = randDec(2, 9), y = randDec(1, 9);
      if (x < y) { const t = x; x = y; y = t; }
      q = `$$ ${decStr(x)} - ${decStr(y)} = ? $$`;
      a = decStr(x - y);
      hint = 'Fill the shorter decimal with a zero so the places line up.';
      break;
    }
    case 'calc-6-s9': { // decimal + whole number
      const d = randDec(2, 9), w = randomInt(2, 50);
      q = `$$ ${decStr(d)} + ${w} = ? $$`;
      a = decStr(d + w);
      hint = 'A whole number has .0 after the point.';
      break;
    }
    case 'calc-6-s10': { // whole number − decimal
      const w = randomInt(5, 60);
      const d = randDec(2, w - 1);
      q = `$$ ${w} - ${decStr(d)} = ? $$`;
      a = decStr(w - d);
      hint = 'Write the whole number with decimal places, then subtract.';
      break;
    }

    // Phase C — Multiplication
    case 'calc-6-s11': { // decimal × 1-digit whole
      const d = randDec(randomInt(1, 2), 9), w = randomInt(2, 9);
      q = `$$ ${decStr(d)} \\times ${w} = ? $$`;
      a = decStr(d * w);
      hint = 'Multiply as whole numbers, then place the decimal point.';
      break;
    }
    case 'calc-6-s12': { // decimal × 2-digit whole
      const d = randDec(randomInt(1, 2), 9), w = randomInt(11, 40);
      q = `$$ ${decStr(d)} \\times ${w} = ? $$`;
      a = decStr(d * w);
      hint = 'Multiply as whole numbers, then place the decimal point.';
      break;
    }
    case 'calc-6-s13': { // decimal × decimal (1dp × 1dp)
      const x = randDec(1, 9), y = randDec(1, 9);
      q = `$$ ${decStr(x)} \\times ${decStr(y)} = ? $$`;
      a = decStr(x * y);
      hint = 'Count the decimal places — the answer has the total of both.';
      break;
    }
    case 'calc-6-s14': { // decimal × decimal (2dp × 2dp)
      const x = randDec(2, 6), y = randDec(2, 6);
      q = `$$ ${decStr(x)} \\times ${decStr(y)} = ? $$`;
      a = decStr(x * y);
      hint = 'Multiply as whole numbers, then count all the decimal places.';
      break;
    }
    case 'calc-6-s15': { // multiply by 10 / 100 / 1000
      const d = randDec(randomInt(2, 3), 99);
      const m = pick([10, 100, 1000]);
      q = `$$ ${decStr(d)} \\times ${m} = ? $$`;
      a = decStr(d * m);
      hint = 'Shift every digit left: ×10 → 1 place, ×100 → 2, ×1000 → 3.';
      break;
    }

    // Phase D — Division
    case 'calc-6-s16': { // decimal ÷ 1-digit whole
      const ans = randDec(randomInt(1, 2), 9);
      const divisor = randomInt(2, 9);
      q = `$$ ${decStr(ans * divisor)} \\div ${divisor} = ? $$`;
      a = decStr(ans);
      hint = 'Divide as whole numbers, keeping the decimal point in line.';
      break;
    }
    case 'calc-6-s17': { // decimal ÷ 2-digit whole
      const ans = randDec(randomInt(1, 2), 5);
      const divisor = randomInt(11, 40);
      q = `$$ ${decStr(ans * divisor)} \\div ${divisor} = ? $$`;
      a = decStr(ans);
      hint = 'Divide as whole numbers, keeping the decimal point in line.';
      break;
    }
    case 'calc-6-s18': { // decimal ÷ decimal
      const ans = randDec(randomInt(1, 2), 9);
      const divisor = randDec(1, 5);
      q = `$$ ${decStr(ans * divisor)} \\div ${decStr(divisor)} = ? $$`;
      a = decStr(ans);
      hint = 'Make the divisor a whole number by shifting both decimal points.';
      break;
    }
    case 'calc-6-s19': { // whole number ÷ decimal
      const divisor = pick([0.5, 0.2, 0.25, 0.4, 0.8, 0.1, 0.05, 1.25, 2.5]);
      const w = randomInt(2, 40);
      q = `$$ ${w} \\div ${decStr(divisor)} = ? $$`;
      a = decStr(w / divisor);
      hint = 'Shift both decimal points so the divisor becomes a whole number.';
      break;
    }
    case 'calc-6-s20': { // divide by 10 / 100 / 1000
      const start = randDec(2, 999);
      const m = pick([10, 100, 1000]);
      q = `$$ ${decStr(start)} \\div ${m} = ? $$`;
      a = decStr(start / m);
      hint = 'Shift every digit right: ÷10 → 1 place, ÷100 → 2, ÷1000 → 3.';
      break;
    }

    // Phase E — Combined operations
    case 'calc-6-s21': { // 2-step: +/− with ×/÷
      const x = randDec(1, 9), y = randDec(1, 9), w = randomInt(2, 5);
      q = `$$ ${decStr(x)} + ${decStr(y)} \\times ${w} = ? $$`;
      a = decStr(x + y * w);
      hint = 'Do the multiplication first, then the addition.';
      break;
    }
    case 'calc-6-s22': { // 3-step with parentheses
      const x = randDec(1, 9), y = randDec(1, 9), w = randomInt(2, 5);
      q = `$$ \\left( ${decStr(x)} + ${decStr(y)} \\right) \\times ${w} = ? $$`;
      a = decStr((x + y) * w);
      hint = 'Work out the brackets first, then multiply.';
      break;
    }
    case 'calc-6-s23': { // decimal ↔ fraction conversion
      const dp = randomInt(1, 2);
      const scale = Math.pow(10, dp);
      const raw = randomInt(1, scale - 1);
      q = `Write the decimal ${decStr(raw / scale)} as a fraction in simplest form.`;
      a = simplifyFraction(raw, scale);
      hint = `Tenths → over 10, hundredths → over 100, then simplify.`;
      break;
    }
    case 'calc-6-s24': { // decimal ↔ percent conversion
      const d = randomInt(1, 99) / 100;
      q = `Write ${decStr(d)} as a percentage. (number only)`;
      a = decStr(d * 100);
      hint = 'To turn a decimal into a percentage, multiply by 100.';
      break;
    }

    // Phase F — Word problems (templated)
    case 'calc-6-s25': { // add & subtract · 1-step story
      const x = randDec(2, 9), y = randDec(2, 9);
      if (Math.random() > 0.5) {
        q = `A bottle holds ${decStr(x)} litres of water. Another ${decStr(y)} litres is poured in. How many litres are in the bottle now?`;
        a = decStr(x + y);
      } else {
        let A = x, B = y;
        if (A < B) { const t = A; A = B; B = t; }
        q = `A ribbon is ${decStr(A)} metres long. ${decStr(B)} metres is cut off. How long is the ribbon now? (metres)`;
        a = decStr(A - B);
      }
      hint = 'Line up the decimal points before adding or subtracting.';
      break;
    }
    case 'calc-6-s26': { // multiply & divide · 1-step story
      if (Math.random() > 0.5) {
        const c = randDec(2, 9), w = randomInt(2, 8);
        q = `One notebook costs ${decStr(c)} dollars. How much do ${w} notebooks cost in total? (dollars)`;
        a = decStr(c * w);
      } else {
        const each = randDec(randomInt(1, 2), 9), w = randomInt(2, 8);
        q = `${decStr(each * w)} litres of juice is shared equally between ${w} jugs. How many litres are in each jug?`;
        a = decStr(each);
      }
      hint = 'Repeated groups → multiply. Sharing equally → divide.';
      break;
    }
    case 'calc-6-s27': { // 2-step · money & shopping
      const price = randDec(2, 9), qty = randomInt(2, 6);
      const cost = price * qty;
      const paid = Math.ceil(cost) + pick([0, 5, 10]);
      q = `A shopper buys ${qty} items costing ${decStr(price)} dollars each and pays with ${paid} dollars. How much change should they receive? (dollars)`;
      a = decStr(paid - cost);
      hint = 'First find the total cost, then subtract it from the amount paid.';
      break;
    }
    case 'calc-6-s28': { // 2-step · measurement & units
      const pieceLen = randDec(randomInt(1, 2), 5);
      const pieces = randomInt(2, 8);
      q = `A plank of wood is ${decStr(pieceLen * pieces)} metres long. It is cut into ${pieces} equal pieces. How long is each piece? (metres)`;
      a = decStr(pieceLen);
      hint = 'Divide the total length by the number of pieces.';
      break;
    }
    case 'calc-6-s29': { // speed, distance & time
      if (Math.random() > 0.5) {
        const speed = randomInt(2, 12) * 5 + pick([0, 0.5]);
        const time = randomInt(2, 5);
        q = `A car travels at a steady ${decStr(speed)} km/h for ${time} hours. How far does it travel? (km)`;
        a = decStr(speed * time);
        hint = 'Distance = speed × time.';
      } else {
        const speed = randomInt(4, 12) * 5;
        const time = randomInt(2, 6);
        q = `A cyclist rides ${decStr(speed * time)} km in ${time} hours. What is the cyclist's average speed? (km/h)`;
        a = decStr(speed);
        hint = 'Speed = distance ÷ time.';
      }
      break;
    }
    case 'calc-6-s30': { // percentage, discount & tax
      const price = randomInt(2, 40) * 10;
      const rate = pick([10, 20, 25, 50]);
      if (Math.random() > 0.5) {
        q = `A jacket costs ${price} dollars. It is discounted by ${rate}%. What is the sale price? (dollars)`;
        a = decStr(price * (1 - rate / 100));
        hint = `A ${rate}% discount means you pay ${100 - rate}% of the price.`;
      } else {
        q = `A meal costs ${price} dollars. A ${rate}% service charge is added. What is the total to pay? (dollars)`;
        a = decStr(price * (1 + rate / 100));
        hint = `Find ${rate}% of the price, then add it on.`;
      }
      break;
    }
    case 'calc-6-s31': { // 3-step · build equation
      const x = randDec(1, 9), y = randDec(1, 9), w = randomInt(2, 4);
      q = `A tank holds ${decStr(x)} litres. ${decStr(y)} litres is added on each of ${w} days. How many litres are in the tank after the ${w} days?`;
      a = decStr(x + y * w);
      hint = 'Work out the amount added in total, then add the starting amount.';
      break;
    }
    case 'calc-6-s32': { // 4-step · all ops, max difficulty
      let x, y, w, g, res;
      do {
        x = randDec(1, 9); y = randDec(1, 9); w = randomInt(2, 5);
        g = randDec(1, 5);
        res = (x + y) * w - g;
      } while (res <= 0);
      q = `A builder has ${decStr(x)} kg of sand and adds ${decStr(y)} kg more. This amount is needed for each of ${w} jobs, but ${decStr(g)} kg is left unused. How many kilograms of sand are used in total?`;
      a = decStr(res);
      hint = 'Add the two amounts, multiply by the jobs, then subtract the unused sand.';
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
    else if (yearNum >= 3) topicsToUse = ['calc-3-b9', 'calc-3-c10', 'calc-4-b9', 'calc-4-c10'];
    else topicsToUse = ['calc-1-core'];
  }
  
  const questions = [];
  for (let i = 0; i < count; i++) {
    const topic = pick(topicsToUse);
    questions.push(generateCalculationQuestion(topic, timeLimit));
  }
  return questions;
};
