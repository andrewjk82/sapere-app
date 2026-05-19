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

  // 2. Safety catches for broken data imports
  str = str.replace(/\\\\([a-zA-Z0-9])/g, '\\$1');
  str = str.replace(/\$\$\$/g, '$$');

  // 3. Fix surd syntax: \sqrt18 -> \sqrt{18}
  str = str.replace(/\\sqrt(\d+)/g, '\\sqrt{$1}');

  // 4. Smart math parsing (Only if not already wrapped in LaTeX delimiters)
  if (!str.includes('$') && !str.includes('\\(') && !str.includes('\\[')) {
    // 4a. Parentheses fraction conversion: (A) / (B) -> \frac{A}{B}
    // We do a simple regex for single-level brackets.
    // This is a basic approach.
    str = str.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '$\\frac{$1}{$2}$');
    // Also A / (B) -> \frac{A}{B}
    str = str.replace(/\b([a-zA-Z0-9\.\\]+)\s*\/\s*\(([^()]+)\)/g, '$\\frac{$1}{$2}$');
    // Also (A) / B -> \frac{A}{B}
    str = str.replace(/\(([^()]+)\)\s*\/\s*([a-zA-Z0-9\.\\]+)\b/g, '$\\frac{$1}{$2}$');
    // Simple n/4 -> \frac{n}{4}
    str = str.replace(/\b([a-zA-Z0-9\.\\]+)\s*\/\s*([a-zA-Z0-9\.\\]+)\b/g, (match, p1, p2) => {
      // Avoid dates like 10/11/2023
      if (p1.length <= 4 && p2.length <= 4 && !match.includes('/202') && !match.includes('/201')) {
        return `$\\frac{${p1}}{${p2}}$`;
      }
      return match;
    });

    // 4b. Wrap naked \sqrt sequences or equations
    // We look for equations containing = and math symbols
    // Or sequences that start with \sqrt
    // ACTUALLY, wrapping automatically is extremely dangerous as seen.
    // Instead of auto-wrapping everything, we only wrap \sqrt{...} if it's completely isolated.
    // Removed the aggressive mathSequenceRegex that was causing syntax errors.
  }

  return str;
};

const input1 = "√3(√3 + 1) / ((√3 - 1)(√3 + 1)) = (3 + √3) / 2 = 1.5 + 0.5√3. So p=1.5, q=0.5.";
console.log('Original:', input1);
console.log('Processed:', toDisplayText(input1));
