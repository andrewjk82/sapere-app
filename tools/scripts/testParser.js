const fs = require('fs');

const qs = JSON.parse(fs.readFileSync('y10_9a_questions.json', 'utf8'));

const handlers = [
  // Type 1: (p^A q^B)^C \times (p^D q^E)^F
  {
    regex: /^\(\s*([a-zA-Z])\^\{?(-?\d+)\}?\s*([a-zA-Z])\^\{?(-?\d+)\}?\s*\)\^\{?(-?\d+)\}?\s*\\times\s*\(\s*([a-zA-Z])\^\{?(-?\d+)\}?\s*([a-zA-Z])\^\{?(-?\d+)\}?\s*\)\^\{?(-?\d+)\}?$/,
    build: (m, q) => {
      const [_, v1, a, v2, b, c, v3, d, v4, e, f] = m;
      // p^A q^B ^C \times p^D q^E ^F
      const A = parseInt(a), B = parseInt(b), C = parseInt(c), D = parseInt(d), E = parseInt(e), F = parseInt(f);
      const step1 = `(${v1}^{${A}} ${v2}^{${B}})^{${C}} \\times (${v3}^{${D}} ${v4}^{${E}})^{${F}}`;
      const step2 = `${v1}^{${A}\\times ${C}} ${v2}^{${B}\\times ${C}} \\times ${v3}^{${D}\\times ${F}} ${v4}^{${E}\\times ${F}} = ${v1}^{${A*C}} ${v2}^{${B*C}} \\times ${v3}^{${D*F}} ${v4}^{${E*F}}`;
      const step3 = `${v1}^{${A*C} + ${D*F}} ${v2}^{${B*C} + ${E*F}} = ${v1}^{${A*C + D*F}} ${v2}^{${B*C + E*F}}`;
      const finalIndex1 = A*C + D*F;
      const finalIndex2 = B*C + E*F;
      // simplify positive indices logic
      const step4 = q.answer; // we can just pull the correct option text here
      return [step1, step2, step3, step4];
    }
  },
  // Type 2: x^A \times x^B \times x^C
  {
    regex: /^([a-zA-Z])\^\{?(-?\d+)\}?\s*\\times\s*([a-zA-Z])\^\{?(-?\d+)\}?\s*\\times\s*([a-zA-Z])\^\{?(-?\d+)\}?$/,
    build: (m, q) => {
      const [_, v1, a, v2, b, v3, c] = m;
      const step1 = `${v1}^{${a}} \\times ${v2}^{${b}} \\times ${v3}^{${c}}`;
      const step2 = `${v1}^{${a} + ${b} + ${c}}`;
      const sum = parseInt(a) + parseInt(b) + parseInt(c);
      const step3 = `${v1}^{${sum}}`;
      const step4 = q.answer;
      return [step1, step2, step3, step4];
    }
  },
  // Type 3: \frac{A x^B y^C}{D x^E y^F}
  {
    regex: /^\\frac\{\s*(-?\d+)\s*([a-zA-Z])\^\{?(-?\d+)\}?\s*([a-zA-Z])\^\{?(-?\d+)\}?\s*\}\{\s*(-?\d+)\s*([a-zA-Z])\^\{?(-?\d+)\}?\s*([a-zA-Z])\^\{?(-?\d+)\}?\s*\}$/,
    build: (m, q) => {
      const [_, c1, v1, a, v2, b, c2, v3, c, v4, d] = m;
      const step1 = `\\frac{${c1} ${v1}^{${a}} ${v2}^{${b}}}{${c2} ${v3}^{${c}} ${v4}^{${d}}}`;
      const step2 = `\\frac{${c1}}{${c2}} \\times ${v1}^{${a} - ${c}} \\times ${v2}^{${b} - ${d}}`;
      // math for gcd
      const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
      const g = Math.abs(gcd(parseInt(c1), parseInt(c2)));
      const numC = parseInt(c1)/g;
      const denC = parseInt(c2)/g;
      const cStr = denC === 1 ? (numC === 1 ? '' : numC) : `\\frac{${numC}}{${denC}}`;
      const p1 = parseInt(a)-parseInt(c);
      const p2 = parseInt(b)-parseInt(d);
      const step3 = `${cStr} ${v1}^{${p1}} ${v2}^{${p2}}`;
      const step4 = q.answer;
      return [step1, step2, step3, step4];
    }
  }
];

let unhandled = 0;
for (const q of qs) {
  let expr = q.question;
  if (expr.includes('\\(') && expr.includes('\\)')) {
    expr = expr.split('\\(')[1].split('\\)')[0];
  } else if (expr.includes(':')) {
    expr = expr.split(':')[1].trim();
  }
  const str = expr.trim();
  let matched = false;
  for (const h of handlers) {
    const m = str.match(h.regex);
    if (m) {
      matched = true;
      break;
    }
  }
  if (!matched) {
    unhandled++;
    // console.log('Unhandled:', str);
  }
}
console.log('Unhandled count:', unhandled, 'out of', qs.length);
