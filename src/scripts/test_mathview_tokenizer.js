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

  // 1. Unicode substitutions (always safe)
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

  // 2. Fix double backslashes
  str = str.replace(/\\\\([a-zA-Z0-9])/g, '\\$1');
  
  // 3. Fix missing braces for single digit surds
  str = str.replace(/\\sqrt(\d+)/g, '\\sqrt{$1}');

  // 4. Tokenize to separate Math Blocks from Plain Text
  // This prevents wrapping commands that are already inside $...$ or \(...\)
  const mathBlockRegex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
  const parts = str.split(mathBlockRegex);
  
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      // --- OUTSIDE MATH BLOCKS (Plain Text) ---
      let text = parts[i];
      
      // Convert A / (B) into $\frac{A}{B}$ (Wrapped!)
      text = text.replace(/([a-zA-Z0-9\.\,\\]+)\s*\/\s*\(([^()]+)\)/g, '$\\frac{$1}{$2}$');
      text = text.replace(/\(([^()]+)\)\s*\/\s*([a-zA-Z0-9\.\,\\]+)/g, '$\\frac{$1}{$2}$');
      text = text.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '$\\frac{$1}{$2}$');
      
      // Convert n/4 -> $\frac{n}{4}$
      text = text.replace(/\b(\d*[a-zA-Z]+|\d+)\s*\/\s*(\d+)\b/g, (match, p1, p2) => {
        if (p1.length <= 4 && p2.length <= 3 && !match.includes('/202') && !match.includes('/201')) {
          return `$\\frac{${p1}}{${p2}}$`;
        }
        return match;
      });

      // Safely wrap naked LaTeX commands
      const nakedCommandRegex = /\\(?:sqrt|pi|theta|pm|approx|times|div|le|ge)(?:\{[^}]*\})?/g;
      text = text.replace(nakedCommandRegex, (match) => {
        return `$${match}$`;
      });
      
      parts[i] = text;
    } else {
      // --- INSIDE MATH BLOCKS ---
      let math = parts[i];
      
      // We convert A / (B) into \frac{A}{B} WITHOUT wrapping in $, because we are already inside a block!
      math = math.replace(/([a-zA-Z0-9\.\,\\]+)\s*\/\s*\(([^()]+)\)/g, '\\frac{$1}{$2}');
      math = math.replace(/\(([^()]+)\)\s*\/\s*([a-zA-Z0-9\.\,\\]+)/g, '\\frac{$1}{$2}');
      math = math.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '\\frac{$1}{$2}');
      
      parts[i] = math;
    }
  }
  
  str = parts.join('');

  // 5. Final cleanup: If entire string is equation
  if (!str.includes('$') && str.includes('=') && !/[a-zA-Z]{3,}/.test(str)) {
    str = `$${str.trim()}$`;
  }

  // Cleanup potential artifact from messy DB entries: $$$ -> $$
  str = str.replace(/\$\$\$/g, '$$');

  return str;
};

// Tests based on screenshots
console.log('1:', toDisplayText('The golden ratio is \\varphi = \\frac{\\sqrt{5} + 1}{2}'));
console.log('2:', toDisplayText('\\frac{3 + \\sqrt{5}}{2}'));
console.log('3:', toDisplayText('$\\frac{3 + \\sqrt{5}}{2}$'));
console.log('4:', toDisplayText('Principal = \\frac{Interest}{Rate \\times Time} = 1,000 / (0.06 \\times 8)'));
console.log('5:', toDisplayText('-4\\times3b - (-4)\\times(-5) = -12b + 20'));
console.log('6:', toDisplayText('$$\\frac{n}{50}$$'));
console.log('7:', toDisplayText('Simplify the surd: \\sqrt{147}'));
