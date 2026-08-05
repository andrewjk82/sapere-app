import fs from 'fs';
const file = 'src/constants/seedYear7Ch6CQuestions.js';
let data = fs.readFileSync(file, 'utf8');

// Revert the bad global replace: \right)} -> \right)
data = data.replaceAll('\\\\right)}', '\\\\right)');
// Revert the opening: ^{\left( -> ^\left(
data = data.replaceAll('^{\\\\left(\\\\frac', '^\\\\left(\\\\frac');

// Now do a targeted fix for the exponent issue.
// The problem is 4mn^\\left(\\frac{2}{3k}\\right) is invalid because ^ needs {}
// We can just replace ^\\left( ... \\right) with ^{\\left( ... \\right)}
data = data.replace(/\\\^\\\\left\\\((.*?)\\\\right\\\)/g, '^{\\\\left($1\\\\right)}');

fs.writeFileSync(file, data, 'utf8');
console.log('Fixed superscript syntax properly in ' + file);
