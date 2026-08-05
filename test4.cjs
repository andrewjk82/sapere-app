const fs = require('fs');
let content = fs.readFileSync('/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch16GQuestions.js', 'utf8');
const matchIndex = content.indexOf('export const Y9_CH16G_QUESTIONS =');
const prefix = 'export const Y9_CH16G_QUESTIONS = ';
const arrayString = content.slice(matchIndex + prefix.length).trim().replace(/;$/, '');
const questions = JSON.parse(arrayString);
const q = questions.find(q => q.id === 'y9-16g-q7a');

const fixString = (str) => {
    if (str.includes('\\\\n')) {
        return str.replace(/\\\\n/g, '\\n');
    }
    return str;
};
console.log('Original Includes \\\\\\\\n:', q.question.includes('\\\\n'));
const fixed = fixString(q.question);
console.log('Fixed:', fixed);
