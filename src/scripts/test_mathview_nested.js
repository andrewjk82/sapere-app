const toDisplayText = (value, fallback = '') => {
  if (value === null || value === undefined) return fallback;

  let str = value;
  
  // 1. Unicode substitutions
  str = str.replace(/√/g, '\\sqrt');
  str = str.replace(/π/g, '\\pi');

  // 4. Tokenize
  const mathBlockRegex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
  const parts = str.split(mathBlockRegex);
  
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      let text = parts[i];
      // Updated regex
      const nakedCommandRegex = /\\(?:sqrt|pi|theta|pm|approx|times|div|le|ge|frac|times|varphi|phi)(?:\{(?:[^{}]|\{[^{}]*\})*\})*/g;
      text = text.replace(nakedCommandRegex, (match) => {
        return `$${match}$`;
      });
      parts[i] = text;
    }
  }
  
  return parts.join('');
};

const t1 = "The golden ratio is \\varphi = \\frac{\\sqrt{5} + 1}{2}";
const t2 = "Simplify the surd: \\sqrt{147}";
const t3 = "$\frac{\sqrt{5} + 1}{2}$";

console.log('1:', toDisplayText(t1));
console.log('2:', toDisplayText(t2));
console.log('3:', toDisplayText(t3));
