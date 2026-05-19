const toDisplayText = (value, fallback = '') => {
  if (value === null || value === undefined) return fallback;

  let str = '';
  if (typeof value === 'string') {
    str = value;
  } else if (typeof value === 'number' || typeof value === 'boolean') {
    str = String(value);
  } else if (typeof value === 'object') {
    str = String(value.text ?? value.label ?? value.question ?? value.value ?? fallback);
  } else {
    str = fallback;
  }

  // 1. Unicode → LaTeX symbol substitutions
  str = str.replace(/√/g, '\\sqrt');
  str = str.replace(/π/g, '\\pi');
  str = str.replace(/θ/g, '\\theta');
  str = str.replace(/²/g, '^2');
  str = str.replace(/³/g, '^3');
  str = str.replace(/≤/g, '\\le');
  str = str.replace(/≥/g, '\\ge');
  str = str.replace(/≈/g, '\\approx');
  str = str.replace(/±/g, '\\pm');
  str = str.replace(/×/g, '\\times');
  str = str.replace(/÷/g, '\\div');

  // 2. Safety catches for broken data imports (Double backslashes & excessive dollars)
  str = str.replace(/\\\\([a-zA-Z0-9])/g, '\\$1');
  str = str.replace(/\$\$\$/g, '$$');

  // 3. Fix surd syntax: \sqrt18 -> \sqrt{18}
  str = str.replace(/\\sqrt(\d+)/g, '\\sqrt{$1}');

  // 4. Simple fraction conversion: n/4 -> $\frac{n}{4}$
  if (!str.includes('$') && !str.includes('\\(')) {
    str = str.replace(/\b(\d*[a-zA-Z]+|\d+)\/(\d+)\b/g, (match, p1, p2) => {
      if (p1.length <= 3 && p2.length <= 2) {
        return `$\\frac{${p1}}{${p2}}$`;
      }
      return match;
    });

    // Selective LaTeX wrapping
    const mathSequenceRegex = /(\\[a-zA-Z]+(?:\{[^}]*\}|\d+)?(?:\s*[\+\-\=\>\<]\s*)?)+/g;
    str = str.replace(mathSequenceRegex, (match) => {
      return `$${match.trim()}$`;
    });
  }

  return str;
};

const input = "√3(√3 + 1) / ((√3 - 1)(√3 + 1)) = (3 + √3) / 2 = 1.5 + 0.5√3. So p=1.5, q=0.5.";
console.log('Original:', input);
console.log('Processed:', toDisplayText(input));
