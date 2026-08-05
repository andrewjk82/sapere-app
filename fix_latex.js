const fs = require('fs');
let content = fs.readFileSync('src/constants/seedYear11Ch4CQuestions.js', 'utf8');

function fixLatex(str) {
  // if it has ^ but isn't already wrapped in \\( ... \\), wrap it.
  // We'll just do simple string replacements for the known bad ones.
  return str;
}

content = content.replace(/"4g\^2-12g"/g, '"\\\\(4g^2-12g\\\\)"');
content = content.replace(/"3g\^2-12g"/g, '"\\\\(3g^2-12g\\\\)"');
content = content.replace(/"5g\^2-12g"/g, '"\\\\(5g^2-12g\\\\)"');
content = content.replace(/"-4g\^2-12g"/g, '"\\\\(-4g^2-12g\\\\)"');

content = content.replace(/"y = 3x\^2-6x\+3"/g, '"\\\\(y = 3x^2-6x+3\\\\)"');
content = content.replace(/"y = 4x\^2-6x\+3"/g, '"\\\\(y = 4x^2-6x+3\\\\)"');
content = content.replace(/"y = -3x\^2-6x\+3"/g, '"\\\\(y = -3x^2-6x+3\\\\)"');
content = content.replace(/"y = 2x\^2-6x\+3"/g, '"\\\\(y = 2x^2-6x+3\\\\)"');

content = content.replace(/"2x\^2\+4x-5=0"/g, '"\\\\(2x^2+4x-5=0\\\\)"');
content = content.replace(/"1x\^2\+4x-5=0"/g, '"\\\\(1x^2+4x-5=0\\\\)"');
content = content.replace(/"-2x\^2\+4x-5=0"/g, '"\\\\(-2x^2+4x-5=0\\\\)"');
content = content.replace(/"3x\^2\+4x-5=0"/g, '"\\\\(3x^2+4x-5=0\\\\)"');

content = content.replace(/"\(m\/4, m\^2\/8\)"/g, '"\\\\((m/4, m^2/8)\\\\)"');
content = content.replace(/"\(m\/-4, m\^2\/8\)"/g, '"\\\\((m/-4, m^2/8)\\\\)"');
content = content.replace(/"\(m\/3, m\^2\/8\)"/g, '"\\\\((m/3, m^2/8)\\\\)"');
content = content.replace(/"\(m\/5, m\^2\/8\)"/g, '"\\\\((m/5, m^2/8)\\\\)"');

fs.writeFileSync('src/constants/seedYear11Ch4CQuestions.js', content);
