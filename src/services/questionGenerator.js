/**
 * Dynamic Question Generator for Year 1 - Number
 * Generates various math problems with random values, multiple choices, and worked solutions.
 */

export const generateQuestion = (year = 1, difficulty = 'easy') => {
  const types = [
    'number_line',
    'tens_ones',
    'compare',
    'before_after',
    'odd_even',
    'skip_counting',
    'number_words',
    'hundreds_chart'
  ];

  const type = types[Math.floor(Math.random() * types.length)];
  
  switch (type) {
    case 'number_line':
      return genNumberLine(difficulty);
    case 'tens_ones':
      return genTensOnes(difficulty);
    case 'compare':
      return genCompare(difficulty);
    case 'before_after':
      return genBeforeAfter(difficulty);
    case 'odd_even':
      return genOddEven(difficulty);
    case 'skip_counting':
      return genSkipCounting(difficulty);
    case 'number_words':
      return genNumberWords(difficulty);
    case 'hundreds_chart':
      return genHundredsChart(difficulty);
    default:
      return genCompare(difficulty);
  }
};

// --- Helper Functions for each type ---

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const genCompare = (diff) => {
  const max = diff === 'easy' ? 20 : 100;
  let n1 = Math.floor(Math.random() * max) + 1;
  let n2 = Math.floor(Math.random() * max) + 1;
  while (n1 === n2) n2 = Math.floor(Math.random() * max) + 1;

  const targetGreater = Math.random() > 0.5;
  const question = targetGreater 
    ? `Which number is BIGGER: ${n1} or ${n2}?`
    : `Which number is SMALLER: ${n1} or ${n2}?`;
  
  const answer = targetGreater ? Math.max(n1, n2) : Math.min(n1, n2);
  const options = shuffle([answer, targetGreater ? Math.min(n1, n2) : Math.max(n1, n2), answer + 2, answer - 2].filter(n => n > 0));

  return {
    type: 'compare',
    question,
    options: options.slice(0, 4),
    answer,
    solution: `${answer} is ${targetGreater ? 'greater' : 'less'} than ${answer === n1 ? n2 : n1}.`,
    timeLimit: 20
  };
};

const genBeforeAfter = (diff) => {
  const max = diff === 'easy' ? 30 : 100;
  const num = Math.floor(Math.random() * (max - 2)) + 2;
  const isBefore = Math.random() > 0.5;

  const question = isBefore 
    ? `What number comes JUST BEFORE ${num}?`
    : `What number comes JUST AFTER ${num}?`;
  
  const answer = isBefore ? num - 1 : num + 1;
  const options = shuffle([answer, num, answer + 2, answer - 2].filter(n => n > 0)).slice(0, 4);

  return {
    type: 'before_after',
    question,
    options,
    answer,
    solution: `${answer} comes ${isBefore ? 'before' : 'after'} ${num} when counting.`,
    timeLimit: 15
  };
};

const genOddEven = (diff) => {
  const max = diff === 'easy' ? 20 : 100;
  const num = Math.floor(Math.random() * max) + 1;
  
  return {
    type: 'odd_even',
    question: `Is the number ${num} Odd or Even?`,
    options: ['Odd', 'Even'],
    answer: num % 2 === 0 ? 'Even' : 'Odd',
    solution: `${num} ends in ${num % 10}. Numbers ending in 0, 2, 4, 6, 8 are Even.`,
    timeLimit: 15
  };
};

const genNumberWords = (diff) => {
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", 
                 "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
  const num = Math.floor(Math.random() * 20) + 1;
  
  const toWord = Math.random() > 0.5;
  const question = toWord ? `Write ${num} in words.` : `What number is "${words[num]}"?`;
  const answer = toWord ? words[num] : num;
  
  let options;
  if (toWord) {
    options = shuffle([words[num], words[num-1] || 'thirty', words[num+1] || 'forty', 'twelve']).slice(0, 4);
  } else {
    options = shuffle([num, num-1, num+1, num+5]).filter(n => n >= 0).slice(0, 4);
  }

  return {
    type: 'number_words',
    question,
    options,
    answer,
    solution: `The number ${num} is spelled as "${words[num]}".`,
    timeLimit: 25
  };
};

const genSkipCounting = (diff) => {
  const step = [2, 5, 10][Math.floor(Math.random() * 3)];
  const start = Math.floor(Math.random() * 20);
  const seq = [start, start + step, start + step * 2, start + step * 3];
  const missingIdx = Math.floor(Math.random() * 4);
  const answer = seq[missingIdx];
  seq[missingIdx] = '___';

  return {
    type: 'skip_counting',
    question: `Find the missing number in the pattern: ${seq.join(', ')}`,
    options: shuffle([answer, answer + 1, answer - step, answer + step * 2]).slice(0, 4),
    answer,
    solution: `The pattern is skip counting by ${step}. ${answer - step} + ${step} = ${answer}.`,
    timeLimit: 30
  };
};

const genTensOnes = (diff) => {
  const tens = Math.floor(Math.random() * 9) + 1;
  const ones = Math.floor(Math.random() * 10);
  const total = tens * 10 + ones;

  return {
    type: 'tens_ones',
    question: `A number has ${tens} tens and ${ones} ones. What is the number?`,
    options: shuffle([total, tens + ones, ones * 10 + tens, total + 10]).slice(0, 4),
    answer: total,
    solution: `${tens} tens = ${tens * 10}. ${tens * 10} + ${ones} = ${total}.`,
    timeLimit: 25
  };
};

const genNumberLine = (diff) => {
  const start = Math.floor(Math.random() * 50);
  const step = 1;
  const target = start + Math.floor(Math.random() * 10) + 1;
  
  return {
    type: 'number_line',
    question: `On a number line starting at ${start}, what is the number ${target - start} steps to the right?`,
    options: shuffle([target, target - 1, target + 1, start + 5]).slice(0, 4),
    answer: target,
    solution: `Starting at ${start} and moving ${target - start} steps gives ${start} + ${target - start} = ${target}.`,
    timeLimit: 30
  };
};

const genHundredsChart = (diff) => {
  const num = Math.floor(Math.random() * 90) + 10;
  const direction = ['above', 'below', 'left', 'right'][Math.floor(Math.random() * 4)];
  
  let answer;
  let explanation;
  switch (direction) {
    case 'above': answer = num - 10; explanation = "Going up one row is -10."; break;
    case 'below': answer = num + 10; explanation = "Going down one row is +10."; break;
    case 'left': answer = num - 1; explanation = "Going left is -1."; break;
    case 'right': answer = num + 1; explanation = "Going right is +1."; break;
  }

  return {
    type: 'hundreds_chart',
    question: `On a 1-100 chart, what number is directly ${direction} the number ${num}?`,
    options: shuffle([answer, num + 10, num - 10, num + 1, num - 1].filter(n => n > 0 && n <= 100)).slice(0, 4),
    answer,
    solution: explanation,
    timeLimit: 30
  };
};
