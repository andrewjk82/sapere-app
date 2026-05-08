const toDisplayText = require('./src/components/MathView.jsx').toDisplayText;

console.log('1 (Red in old version):', toDisplayText('The golden ratio is \\varphi = \\frac{\\sqrt{5} + 1}{2}'));
console.log('2 (Double wrap in old version):', toDisplayText('$\\frac{3 + \\sqrt{5}}{2}$'));
console.log('3 (Double wrap in old version):', toDisplayText('Principal = \\frac{Interest}{Rate \\times Time} = 1,000 / (0.06 \\times 8)'));
console.log('4 (No dollar missing error):', toDisplayText('$$\\frac{n}{50}$$'));
console.log('5 (Original bug):', toDisplayText('Simplify the surd: \\sqrt{147}'));
