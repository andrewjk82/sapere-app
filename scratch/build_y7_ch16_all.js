const fs = require('fs');

const questions = [];

// ========================================================
// Q1: Probability statements (a to e)
// ========================================================
questions.push({
  chapterId: 'y7-16',
  chapterTitle: 'Chapter 16: Probability',
  topicId: 'y7-16a',
  topicCode: '16A',
  topicTitle: 'An introduction to probability',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'It is certain that an ice cube will melt when placed in boiling water. What is the probability that an ice cube will melt in boiling water?',
  options: [
    '$$1 \\text{ (or } 100\\%)$$',
    '$$0$$',
    '$$\\frac{1}{2}$$',
    '$$0.25$$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>An event that is <strong>certain</strong> to happen always has a probability of exactly <strong>1</strong> (or <strong>100%</strong>).</p><p>Since an ice cube is guaranteed to melt in boiling water, this is a certain event.</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-16',
  chapterTitle: 'Chapter 16: Probability',
  topicId: 'y7-16a',
  topicCode: '16A',
  topicTitle: 'An introduction to probability',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'There is no chance of a human naturally flying to the moon by flapping their arms. What is the probability of a human naturally flying to the moon by flapping their arms?',
  options: [
    '$$0$$',
    '$$1$$',
    '$$\\frac{1}{2}$$',
    '$$0.1$$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>An event that has <strong>no chance</strong> of occurring (impossible event) always has a probability of exactly <strong>0</strong>.</p><p>Since naturally flying to the moon by flapping arms is physically impossible, its probability is 0.</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-16',
  chapterTitle: 'Chapter 16: Probability',
  topicId: 'y7-16a',
  topicCode: '16A',
  topicTitle: 'An introduction to probability',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'If there are five yellow marbles and five green marbles in a bag, and you pull one out without looking: what is the probability of getting a yellow marble, and what is the probability of getting a green marble?',
  options: [
    '$$\\frac{1}{2} \\text{ and } \\frac{1}{2}$$',
    '$$\\frac{1}{3} \\text{ and } \\frac{2}{3}$$',
    '$$0 \\text{ and } 1$$',
    '$$\\frac{1}{5} \\text{ and } \\frac{1}{5}$$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's calculate the probabilities:</p><ul><li>Total number of marbles in the bag = $$5 + 5 = 10$$.</li><li>Number of yellow marbles = 5 $\implies$ Probability = $$\\frac{5}{10} = \\frac{1}{2}$$.</li><li>Number of green marbles = 5 $\implies$ Probability = $$\\frac{5}{10} = \\frac{1}{2}$$.</li></ul><p>Since both outcomes have the exact same chance, they are <strong>equally likely</strong> with a probability of $$\\frac{1}{2}$$ each.</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-16',
  chapterTitle: 'Chapter 16: Probability',
  topicId: 'y7-16a',
  topicCode: '16A',
  topicTitle: 'An introduction to probability',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'If it is Saturday today, tomorrow will be Sunday. What is the probability that tomorrow will be Sunday?',
  options: [
    '$$1 \\text{ (or } 100\\%)$$',
    '$$0$$',
    '$$\\frac{1}{2}$$',
    '$$0.75$$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>In the standard calendar, Sunday always follows Saturday. Since today is Saturday, tomorrow is guaranteed to be Sunday.</p><p>This is a <strong>certain event</strong>, which has a probability of exactly <strong>1</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-16',
  chapterTitle: 'Chapter 16: Probability',
  topicId: 'y7-16a',
  topicCode: '16A',
  topicTitle: 'An introduction to probability',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'easy',
  isActive: true,
  isManual: true,
  question: 'If today is the 31st of December, there is no chance that tomorrow will be the 1st of June. What is the probability that tomorrow will be the 1st of June?',
  options: [
    '$$0$$',
    '$$1$$',
    '$$\\frac{1}{2}$$',
    '$$\\frac{1}{12}$$'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>The day following December 31st is always January 1st. It can never be June 1st.</p><p>This is an <strong>impossible event</strong>, which has a probability of exactly <strong>0</strong>.</p></div>`,
  createdAt: new Date().toISOString()
});

// ========================================================
// Q2: Match scenarios to probabilities (0, 1, 1/2)
// ========================================================
questions.push({
  chapterId: 'y7-16',
  chapterTitle: 'Chapter 16: Probability',
  topicId: 'y7-16a',
  topicCode: '16A',
  topicTitle: 'An introduction to probability',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Which of the following scenarios describes an event with a probability of $$0$$ (impossible)?',
  options: [
    'Rolling a standard 6-sided die and getting a number greater than 6',
    'Flipping a fair coin and landing on heads',
    'Selecting a red ball from a bag containing only red balls',
    'Tomorrow being a weekday if today is Thursday'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>An event with a probability of 0 is completely impossible:</p><ul><li><strong>Rolling a standard die and getting > 6</strong>: A standard die only has numbers 1 to 6. Getting a number greater than 6 is impossible. Probability = <strong>0</strong>.</li><li>Flipping a coin and landing on heads: Probability = $$\\frac{1}{2}$$.</li><li>Selecting a red ball from a bag of only red balls: Probability = 1 (certain).</li><li>Tomorrow being a weekday if today is Thursday: Tomorrow is Friday (a weekday). Probability = 1.</li></ul></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-16',
  chapterTitle: 'Chapter 16: Probability',
  topicId: 'y7-16a',
  topicCode: '16A',
  topicTitle: 'An introduction to probability',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Which of the following scenarios describes an event with a probability of $$1$$ (certain)?',
  options: [
    'Selecting a blue counter from a box containing only blue counters',
    'Rolling a standard 6-sided die and getting an even number',
    'Flipping a coin and landing on tails',
    'It raining tomorrow in London'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>An event with a probability of 1 is guaranteed to happen:</p><ul><li><strong>Selecting a blue counter from a box containing only blue counters</strong>: Since there are no other colors, you will always pick a blue counter. Probability = <strong>1</strong>.</li><li>Rolling an even number: Probability = $$\\frac{3}{6} = \\frac{1}{2}$$.</li><li>Flipping a coin and landing on tails: Probability = $$\\frac{1}{2}$$.</li><li>It raining tomorrow in London: Unsure, so the probability is between 0 and 1.</li></ul></div>`,
  createdAt: new Date().toISOString()
});

questions.push({
  chapterId: 'y7-16',
  chapterTitle: 'Chapter 16: Probability',
  topicId: 'y7-16a',
  topicCode: '16A',
  topicTitle: 'An introduction to probability',
  year: 'Year 7',
  type: 'multiple_choice',
  difficulty: 'medium',
  isActive: true,
  isManual: true,
  question: 'Which of the following scenarios describes an event with a probability of $$\\frac{1}{2}$$ (equally likely)?',
  options: [
    'Rolling an odd number on a standard 6-sided die',
    'Selecting a blue pen from a box containing 3 blue pens and 7 black pens',
    'Rolling a 5 on a standard 6-sided die',
    'Getting a card that is a spade from a standard 52-card deck'
  ],
  answer: 0,
  solution: `<div style="text-align: left;"><p>Let's check the probabilities of each option:</p><ul><li><strong>Rolling an odd number on a 6-sided die</strong>: Odd numbers are {1, 3, 5} (3 outcomes out of 6). Probability = $$\\frac{3}{6} = \\frac{1}{2}$$.</li><li>Selecting a blue pen (3 blue, 7 black): Probability = $$\\frac{3}{10}$$.</li><li>Rolling a 5: Probability = $$\\frac{1}{6}$$.</li><li>Getting a card that is a spade: Spades represent 13 cards out of 52. Probability = $$\\frac{13}{52} = \\frac{1}{4}$$.</li></ul></div>`,
  createdAt: new Date().toISOString()
});

console.log('Total Chapter 16A questions built:', questions.length);

// Generate file content
const output = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = ${JSON.stringify(questions, null, 2)};

export const importYear7Ch16A = async (forceReset = false) => {
  console.log('[Ch16A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch16 (16a to 16b) questions...');
      const topicsToDelete = ['y7-16a', 'y7-16b'];
      for (const tId of topicsToDelete) {
        const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
        for (const doc of existingSnap.docs) {
          await deleteDoc(doc.ref);
        }
      }
      console.log('Deleted existing Ch16 topic questions.');
    }

    const existingQuestions = new Set();
    const topicsToCheck = ['y7-16a', 'y7-16b'];
    for (const tId of topicsToCheck) {
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', tId)));
      existingSnap.docs.forEach(doc => {
        existingQuestions.add(doc.data().question.trim());
      });
    }
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log('[Ch16A Year 7 Import] SUCCESS! ' + importedCount + ' new questions imported.');
    return importedCount;
  } catch (error) {
    console.error('[Ch16A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync('src/scripts/importYear7Ch16A.js', output);
console.log('Done!');
