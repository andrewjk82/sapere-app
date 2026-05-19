import { allQuestions } from './src/scripts/check_ch7_c384893.js';
console.log('--- COMMIT c384893 CHAPTER 7 QUESTION COUNT ---');
console.log('Total parent questions in c384893:', allQuestions.length);
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
