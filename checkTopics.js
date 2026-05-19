import { allQuestions } from './src/scripts/importYear7Ch5A.js';
const topics = {};
allQuestions.forEach(q => {
  topics[q.topicId] = (topics[q.topicId] || 0) + 1;
});
console.log('Topic distribution in final importYear7Ch5A.js:');
console.log(topics);
process.exit(0);
