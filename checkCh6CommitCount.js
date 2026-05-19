import { allQuestions } from './src/scripts/check_ch6_962ee96.js';
console.log('--- COMMIT 962ee96 CHAPTER 6 QUESTION COUNT ---');
console.log('Total parent questions in 962ee96:', allQuestions.length);
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
