const fs = require('fs');
let content = fs.readFileSync('src/constants/seedYear11Ch4CQuestions.js', 'utf8');

// The original script only replaced the FIRST occurrence of "type": "short_answer" per question block
// or maybe missed some subQuestions which are marked as teacher_review instead of short_answer.

// Global replace all "short_answer" and "teacher_review" to "multiple_choice"
// *EXCEPT* we need to be careful if there are valid teacher_review questions we want to keep. 
// Given the user wants everything to be multiple choice, we'll replace all.

content = content.replace(/"type":\s*"short_answer"/g, '"type": "multiple_choice"');
content = content.replace(/"type":\s*"teacher_review"/g, '"type": "multiple_choice"');

fs.writeFileSync('src/constants/seedYear11Ch4CQuestions.js', content);
console.log("Fixed types globally!");
