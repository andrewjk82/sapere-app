const fs = require('fs');
let c = fs.readFileSync('src/constants/seedYear11Ch4CQuestions.js', 'utf8');

c = c.replace(/"4g\^2-12g"/g, '"\\(4g^2-12g\\)"');
c = c.replace(/"3g\^2-12g"/g, '"\\(3g^2-12g\\)"');
c = c.replace(/"5g\^2-12g"/g, '"\\(5g^2-12g\\)"');
c = c.replace(/"-4g\^2-12g"/g, '"\\(-4g^2-12g\\)"');

c = c.replace(/"y = 3x\^2-6x\+3"/g, '"\\(y = 3x^2-6x+3\\)"');
c = c.replace(/"y = 4x\^2-6x\+3"/g, '"\\(y = 4x^2-6x+3\\)"');
c = c.replace(/"y = -3x\^2-6x\+3"/g, '"\\(y = -3x^2-6x+3\\)"');
c = c.replace(/"y = 2x\^2-6x\+3"/g, '"\\(y = 2x^2-6x+3\\)"');

c = c.replace(/"2x\^2\+4x-5=0"/g, '"\\(2x^2+4x-5=0\\)"');
c = c.replace(/"1x\^2\+4x-5=0"/g, '"\\(1x^2+4x-5=0\\)"');
c = c.replace(/"-2x\^2\+4x-5=0"/g, '"\\(-2x^2+4x-5=0\\)"');
c = c.replace(/"3x\^2\+4x-5=0"/g, '"\\(3x^2+4x-5=0\\)"');

c = c.replace(/"\(m\/4, m\^2\/8\)"/g, '"\\((m/4, m^2/8)\\)"');
c = c.replace(/"\(m\/-4, m\^2\/8\)"/g, '"\\((m/-4, m^2/8)\\)"');
c = c.replace(/"\(m\/3, m\^2\/8\)"/g, '"\\((m/3, m^2/8)\\)"');
c = c.replace(/"\(m\/5, m\^2\/8\)"/g, '"\\((m/5, m^2/8)\\)"');

fs.writeFileSync('src/constants/seedYear11Ch4CQuestions.js', c);
