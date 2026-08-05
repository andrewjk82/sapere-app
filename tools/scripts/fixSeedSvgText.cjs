const fs = require('fs');
const filePath = '/Users/andrewkim/Desktop/sapere1/tools/seeds/girraween/seedGirraween2020SimilarQuestions_PART2.js';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/y = e\^\{-2x\} sin\(x\)/g, 'y = e⁻²ˣ sin(x)');
content = content.replace(/f\(g\(x\)\) = 2x\^2 \+ 5/g, 'f(g(x)) = 2x² + 5');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed LaTeX in seed file SVGs.');
