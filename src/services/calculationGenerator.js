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

export const generateCalculationQuestion = (topicId) => {
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
      q = `You buy an item for \\$${price} and pay with \\$${paid}. How much change? (Write number only)`;
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

    // Stage 5
    case 'calc-5-core': {
      const isAdd = Math.random() > 0.5;
      const denom = randomInt(3, 12);
      if (isAdd) {
        const num1 = randomInt(1, denom - 1);
        const num2 = randomInt(1, denom - num1); // Keep sum <= denom
        q = `$$ \\frac{${num1}}{${denom}} + \\frac{${num2}}{${denom}} = ? $$`;
        a = simplifyFraction(num1 + num2, denom);
      } else {
        const num1 = randomInt(2, denom - 1);
        const num2 = randomInt(1, num1 - 1);
        q = `$$ \\frac{${num1}}{${denom}} - \\frac{${num2}}{${denom}} = ? $$`;
        a = simplifyFraction(num1 - num2, denom);
      }
      hint = `Perform the operation on the top numbers. Keep the bottom number the same. Format as mixed fractions if needed (e.g., 1 1/2).`;
      break;
    }
    case 'calc-5-adv': {
      const denom1 = randomInt(2, 6);
      const denom2 = randomInt(2, 6);
      const num1 = randomInt(1, denom1 - 1);
      const num2 = randomInt(1, denom2 - 1);
      q = `$$ \\frac{${num1}}{${denom1}} \\times \\frac{${num2}}{${denom2}} = ? $$`;
      a = simplifyFraction(num1 * num2, denom1 * denom2);
      hint = `Multiply the tops, multiply the bottoms. Format as mixed fractions if needed (e.g., 1 1/2).`;
      break;
    }
    case 'calc-5-enrich': {
      const ratio1 = randomInt(1, 5);
      const ratio2 = randomInt(1, 5);
      const mult = randomInt(2, 10);
      const total = (ratio1 + ratio2) * mult;
      q = `Share ${total} in the ratio ${ratio1}:${ratio2}. What is the larger share?`;
      a = String(Math.max(ratio1, ratio2) * mult);
      hint = `Total parts = ${ratio1 + ratio2}. Find the value of one part first.`;
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
        q = `What is ${percent}\\% of ${value}?`;
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
    generatorType: 'calculation'
  };
};

export const generateCalculationSet = (assignedTopics, count, year = 'Year 1') => {
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
    questions.push(generateCalculationQuestion(topic));
  }
  return questions;
};
