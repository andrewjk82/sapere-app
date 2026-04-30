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

const getUniqueOptions = (answer, distractors, min = 1, max = 100) => {
  const opts = new Set([answer]);
  distractors.forEach(d => {
    if (d !== answer && d > 0) opts.add(d);
  });
  
  // Fill up to 4 if we have duplicates
  while (opts.size < 4) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    opts.add(random);
  }
  
  return shuffle(Array.from(opts)).slice(0, 4);
};

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
  const distractors = [targetGreater ? Math.min(n1, n2) : Math.max(n1, n2), answer + 2, answer - 2, answer + 5];
  const options = getUniqueOptions(answer, distractors, 1, max);

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
  const distractors = [num, answer + 2, answer - 2, num + 5];
  const options = getUniqueOptions(answer, distractors, 1, max);

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
    // Word options are usually unique enough, but let's be safe
    const uniqueWords = Array.from(new Set(options));
    while(uniqueWords.length < 4) uniqueWords.push('eleven'); // fallback
    options = shuffle(uniqueWords).slice(0, 4);
  } else {
    options = getUniqueOptions(answer, [num-1, num+1, num+5, num+2], 0, 20);
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

  const distractors = [answer + 1, answer - step, answer + step * 2, answer + step];
  const options = getUniqueOptions(answer, distractors, 0, 100);

  return {
    type: 'skip_counting',
    question: `What is the missing number in the sequence: ${seq.join(', ')}?`,
    options,
    answer,
    solution: `The pattern is skip counting by ${step}.`,
    timeLimit: 20
  };
};

const genTensOnes = (diff) => {
  const tens = Math.floor(Math.random() * 9) + 1;
  const ones = Math.floor(Math.random() * 10);
  const total = tens * 10 + ones;
  const distractors = [tens + ones, ones * 10 + tens, total + 10, total - 10, tens];
  const options = getUniqueOptions(total, distractors, 1, 100);

  return {
    type: 'tens_ones',
    question: `A number has ${tens} tens and ${ones} ones. What is the number?`,
    options,
    answer: total,
    solution: `${tens} tens = ${tens * 10}. ${tens * 10} + ${ones} = ${total}.`,
    timeLimit: 25
  };
};

const genNumberLine = (diff) => {
  const start = Math.floor(Math.random() * 50);
  const step = 1;
  const target = start + Math.floor(Math.random() * 10) + 1;
  const distractors = [target - 1, target + 1, start + 5, target + 2];
  const options = getUniqueOptions(target, distractors, 0, 100);
  
  return {
    type: 'number_line',
    question: `On a number line starting at ${start}, what is the number ${target - start} steps to the right?`,
    options,
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

  const distractors = [num + 10, num - 10, num + 1, num - 1, num + 5];
  const options = getUniqueOptions(answer, distractors, 1, 100);

  return {
    type: 'hundreds_chart',
    question: `On a 1-100 chart, what number is directly ${direction} the number ${num}?`,
    options,
    answer,
    solution: explanation,
    timeLimit: 30
  };
};

export const questionGenerator = {
  genAddition,
  genSubtraction,
  genMultiplication,
  genDivision,
  genPlaceValue,
  genComparison,
  genSkipCounting,
  genTensOnes,
  genNumberLine,
  genHundredsChart,
  generateQuestion: (difficulty) => {
    const generators = [
      genAddition, genSubtraction, genMultiplication, genDivision,
      genPlaceValue, genComparison, genSkipCounting, genTensOnes,
      genNumberLine, genHundredsChart
    ];
    const gen = generators[Math.floor(Math.random() * generators.length)];
    return gen(difficulty);
  }
};
