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

  str = str.replace(/\\\\([a-zA-Z0-9])/g, '\\$1');
  str = str.replace(/\$\$\$/g, '$$');
  str = str.replace(/\\sqrt(\d+)/g, '\\sqrt{$1}');

  const mathBlockRegex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g;
  const parts = str.split(mathBlockRegex);
  
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      let text = parts[i];
      text = text.replace(/([a-zA-Z0-9\.\,\\]+)\s*\/\s*\(([^()]+)\)/g, '$\\frac{$1}{$2}$');
      text = text.replace(/\(([^()]+)\)\s*\/\s*([a-zA-Z0-9\.\,\\]+)/g, '$\\frac{$1}{$2}$');
      text = text.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '$\\frac{$1}{$2}$');
      text = text.replace(/\b(\d*[a-zA-Z]+|\d+)\s*\/\s*(\d+)\b/g, (match, p1, p2) => {
        if (p1.length <= 4 && p2.length <= 3 && !match.includes('/202') && !match.includes('/201')) {
          return `$\\frac{${p1}}{${p2}}$`;
        }
        return match;
      });

      const nakedCommandRegex = /\\(sqrt|pi|theta|pm|approx|times|div|le|ge|frac|varphi|phi)(\{[^{}]*\})*/g;
      text = text.replace(nakedCommandRegex, (match) => {
        return `$${match}$`;
      });
      
      parts[i] = text;
    } else {
      let math = parts[i];
      math = math.replace(/([a-zA-Z0-9\.\,\\]+)\s*\/\s*\(([^()]+)\)/g, '\\frac{$1}{$2}');
      math = math.replace(/\(([^()]+)\)\s*\/\s*([a-zA-Z0-9\.\,\\]+)/g, '\\frac{$1}{$2}');
      math = math.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '\\frac{$1}{$2}');
      parts[i] = math;
    }
  }
  
  str = parts.join('');

  if (!str.includes('$') && str.includes('=') && !/[a-zA-Z]{3,}/.test(str)) {
    str = `$${str.trim()}$`;
  }

  str = str.replace(/\$\$\$/g, '$$');
  return str;
};

const createGridHtml = (cols, shadedCount, rows = 1) => {
  const totalCells = cols * rows;
  let cellsHtml = '';
  for (let i = 0; i < totalCells; i++) {
    const isShaded = i < shadedCount;
    const bg = isShaded ? '#93c5fd' : '#ffffff';
    cellsHtml += `<div style="background: ${bg}; width: 14px; height: 14px;"></div>`;
  }
  return `<div style="display: inline-grid; grid-template-columns: repeat(${cols}, 14px); grid-template-rows: repeat(${rows}, 14px); gap: 1px; background: #94a3b8; border: 1px solid #94a3b8; padding: 1px; vertical-align: middle;">${cellsHtml}</div>`;
};

const text = `Choose the diagram that correctly shows $\\frac{8}{7}$ if the whole is ${createGridHtml(7, 0)}.`;

console.log("Original text:");
console.log(text);

console.log("\nAfter toDisplayText:");
console.log(toDisplayText(text));
