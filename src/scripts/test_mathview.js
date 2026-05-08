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

  // 2. Fix surd syntax: \sqrt18 -> \sqrt{18}
  str = str.replace(/\\sqrt(\d+)/g, '\\sqrt{$1}');

  // 3. Simple fraction conversion: n/4 -> $\frac{n}{4}$
  // Only if NOT already inside a LaTeX block
  if (!str.includes('$') && !str.includes('\\(')) {
    str = str.replace(/\b(\d*[a-zA-Z]+|\d+)\/(\d+)\b/g, (match, p1, p2) => {
      // Basic heuristic to avoid dates but keep math fractions
      if (p1.length <= 3 && p2.length <= 2) {
        return `$\\frac{${p1}}{${p2}}$`;
      }
      return match;
    });

    // 4. Selective LaTeX wrapping: Only wrap sequences starting with \ and their basic math operators
    const mathSequenceRegex = /(\\[a-zA-Z]+(?:\{[^}]*\}|\d+)?(?:\s*[\+\-\=\>\<]\s*)?)+/g;
    str = str.replace(mathSequenceRegex, (match) => {
      return `$${match.trim()}$`;
    });
  }

  return str;
};

const input1 = 'Step 1: The general form is $ax + by + c = 0$.\nStep 2: Move all terms to one side of the equation $y = 3x - 4$:\n$$0 = 3x - y - 4$$\nStep 3: Rearrange to match the standard form:\n$$3x - y - 4 = 0$$\nResult: $3x - y - 4 = 0$';
console.log('--- Test 1 ---');
console.log(toDisplayText(input1));

const input2 = 'Simplify $$\\frac{36p^7q^4}{24p^3q}$$ using positive indices.';
console.log('\n--- Test 2 ---');
console.log(toDisplayText(input2));

const input3 = 'Express \\349700 in scientific notation correct to 3 significant figures.';
console.log('\n--- Test 3 ---');
console.log(toDisplayText(input3));

const input4 = '$\\sqrt{7}$ units';
console.log('\n--- Test 4 ---');
console.log(toDisplayText(input4));
