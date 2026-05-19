import { allQuestions } from './src/scripts/importYear7Ch5A.js';
console.log('Total questions:', allQuestions.length);
console.log('--- FIRST 5 QUESTIONS ---');
for (let i = 0; i < 5 && i < allQuestions.length; i++) {
  console.log(`${i + 1}: [Topic: ${allQuestions[i].topicId}] [Code: ${allQuestions[i].topicCode}] ${allQuestions[i].question.substring(0, 80)}...`);
}
console.log('--- LAST 5 QUESTIONS ---');
for (let i = allQuestions.length - 5; i < allQuestions.length; i++) {
  if (i >= 0) {
    console.log(`${i + 1}: [Topic: ${allQuestions[i].topicId}] [Code: ${allQuestions[i].topicCode}] ${allQuestions[i].question.substring(0, 80)}...`);
  }
}
process.exit(0);
