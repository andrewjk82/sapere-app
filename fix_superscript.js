import fs from 'fs';
const file = 'src/constants/seedYear7Ch6CQuestions.js';
let data = fs.readFileSync(file, 'utf8');

// The problematic string looks like: 4mn^\\left(\\frac{3k}{2}\\right)
// We want to replace ^\\left( with ^{\\left( and \\right) with \\right)}

data = data.replaceAll('^\\\\left(\\\\frac', '^{\\\\left(\\\\frac');
data = data.replaceAll('\\\\right)', '\\\\right)}');

fs.writeFileSync(file, data, 'utf8');
console.log('Fixed superscript syntax in ' + file);
