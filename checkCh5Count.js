import { allQuestions } from './src/scripts/importYear7Ch5A.js';
console.log('--- CHAPTER 5 QUESTION COUNT ---');
console.log('Total parent questions in importYear7Ch5A.js:', allQuestions.length);
console.log('Sub-question breakdown per topic:');
const topicCounts = {};
allQuestions.forEach((q) => {
  const topicId = q.topicId || 'unknown';
  if (!topicCounts[topicId]) {
    topicCounts[topicId] = 0;
  }
  topicCounts[topicId] += (q.subQuestions ? q.subQuestions.length : 1);
});
console.log(topicCounts);
const totalSubquestions = Object.values(topicCounts).reduce((a, b) => a + b, 0);
console.log('Total individual/subquestions combined:', totalSubquestions);
process.exit(0);
