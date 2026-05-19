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

  // 2. Safety catches for broken data imports
  str = str.replace(/\\\\([a-zA-Z0-9])/g, '\\$1');
  str = str.replace(/\$\$\$/g, '$$');

  // 3. Fix surd syntax: \sqrt18 -> \sqrt{18}
  str = str.replace(/\\sqrt(\d+)/g, '\\sqrt{$1}');

  // 4. Smart fraction conversion with parentheses
  str = str.replace(/([a-zA-Z0-9\.\\]+)\s*\/\s*\(([^()]+)\)/g, '$\\frac{$1}{$2}$');
  str = str.replace(/\(([^()]+)\)\s*\/\s*([a-zA-Z0-9\.\\]+)/g, '$\\frac{$1}{$2}$');
  str = str.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '$\\frac{$1}{$2}$');
  
  // Simple n/4 -> \frac{n}{4} (only if not already wrapped)
  str = str.replace(/\b(\d*[a-zA-Z]+|\d+)\s*\/\s*(\d+)\b/g, (match, p1, p2) => {
    if (p1.length <= 4 && p2.length <= 3 && !match.includes('/202') && !match.includes('/201')) {
      return `$\\frac{${p1}}{${p2}}$`;
    }
    return match;
  });

  const latexCommandRegex = /(\$?)(?:\\(?:sqrt|pi|theta|pm|approx|times|div|le|ge)(?:\{[^}]*\})?)(\$?)/g;
  str = str.replace(latexCommandRegex, (match, prefix, suffix) => {
    if (prefix === '$' || suffix === '$') {
      return match;
    }
    return `$${match}$`;
  });

  if (!str.includes('$') && str.includes('=') && !/[a-zA-Z]{3,}/.test(str)) {
    str = `$${str.trim()}$`;
  }

  return str;
};

const i1 = "Simplify the surd: \\sqrt{147}";
const i2 = "A right-angled triangle has legs of length 4 + \\sqrt{3} and 4 - \\sqrt{3}. Find the hypotenuse squared (x^2).";
console.log('1:', toDisplayText(i1));
console.log('2:', toDisplayText(i2));
