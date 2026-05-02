import { CURRICULUM_DATA } from '../constants/curriculumData.js';

/**
 * Curriculum-aware Year 1 question generator.
 *
 * Questions are generated from the student's assigned curriculum targets. Every
 * generated question carries chapter and topic metadata so history, insights,
 * and future adaptive practice can analyse performance at subtopic level.
 */

const DEFAULT_YEAR = 'Year 1';
const DEFAULT_CHAPTER_ID = 'y1-number';
const DEFAULT_DIFFICULTY = 'easy';

export const DEFAULT_DIFFICULTY_MIX = {
  easy: 0.7,
  medium: 0.25,
  hard: 0.05,
};

export const DIFFICULTY_LEVELS = ['easy', 'medium', 'hard'];

const NUMBER_WORDS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two',
  'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven',
  'twenty-eight', 'twenty-nine', 'thirty', 'thirty-one', 'thirty-two',
  'thirty-three', 'thirty-four', 'thirty-five', 'thirty-six', 'thirty-seven',
  'thirty-eight', 'thirty-nine', 'forty', 'forty-one', 'forty-two',
  'forty-three', 'forty-four', 'forty-five', 'forty-six', 'forty-seven',
  'forty-eight', 'forty-nine', 'fifty', 'fifty-one', 'fifty-two',
  'fifty-three', 'fifty-four', 'fifty-five', 'fifty-six', 'fifty-seven',
  'fifty-eight', 'fifty-nine', 'sixty', 'sixty-one', 'sixty-two',
  'sixty-three', 'sixty-four', 'sixty-five', 'sixty-six', 'sixty-seven',
  'sixty-eight', 'sixty-nine', 'seventy', 'seventy-one', 'seventy-two',
  'seventy-three', 'seventy-four', 'seventy-five', 'seventy-six',
  'seventy-seven', 'seventy-eight', 'seventy-nine', 'eighty', 'eighty-one',
  'eighty-two', 'eighty-three', 'eighty-four', 'eighty-five', 'eighty-six',
  'eighty-seven', 'eighty-eight', 'eighty-nine', 'ninety', 'ninety-one',
  'ninety-two', 'ninety-three', 'ninety-four', 'ninety-five', 'ninety-six',
  'ninety-seven', 'ninety-eight', 'ninety-nine', 'one hundred',
];

const COINS = [5, 10, 20, 50, 100, 200];
const COIN_LABELS = { 5: '5c', 10: '10c', 20: '20c', 50: '50c', 100: '$1', 200: '$2' };
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const SHAPES_2D = [
  { name: 'triangle', sides: 3, corners: 3 },
  { name: 'square', sides: 4, corners: 4 },
  { name: 'rectangle', sides: 4, corners: 4 },
  { name: 'pentagon', sides: 5, corners: 5 },
  { name: 'hexagon', sides: 6, corners: 6 },
];
const OBJECTS_3D = [
  { name: 'sphere', faces: 0, edges: 0, corners: 0, example: 'ball', can: 'roll' },
  { name: 'cube', faces: 6, edges: 12, corners: 8, example: 'dice', can: 'stack' },
  { name: 'cylinder', faces: 2, edges: 2, corners: 0, example: 'can', can: 'roll' },
  { name: 'cone', faces: 1, edges: 1, corners: 1, example: 'party hat', can: 'slide' },
];

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (arr) => arr[randomInt(0, arr.length - 1)];
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const normalizeDifficulty = (difficulty) => DIFFICULTY_LEVELS.includes(difficulty) ? difficulty : DEFAULT_DIFFICULTY;
const maxByDifficulty = (difficulty, easy = 20, medium = 50, hard = 100) => ({ easy, medium, hard }[normalizeDifficulty(difficulty)]);

const getUniqueOptions = (answer, distractors, min = 0, max = 100) => {
  const opts = new Set([answer]);
  distractors.forEach((d) => {
    if (d === null || d === undefined || d === answer) return;
    if (typeof d === 'number' && (d < min || d > max)) return;
    opts.add(d);
  });
  
  let optionsArray = Array.from(opts);
  if (optionsArray.length > 4) {
    // CRITICAL: Always keep the answer and pick 3 random distractors
    const otherOpts = optionsArray.filter(o => o !== answer);
    optionsArray = [answer, ...shuffle(otherOpts).slice(0, 3)];
  } else {
    while (optionsArray.length < 4) {
      const rand = randomInt(min, max);
      if (!optionsArray.includes(rand)) optionsArray.push(rand);
    }
  }
  
  return shuffle(optionsArray);
};

const wordOptions = (answer, pool) => shuffle([answer, ...shuffle(pool.filter(item => item !== answer)).slice(0, 3)]);
const pickGeneratorType = (value, fallback = 'generic_year1') => Array.isArray(value) ? pick(value) : (value || fallback);

export const QUESTION_BLUEPRINTS = Object.fromEntries(
  Object.entries(CURRICULUM_DATA).map(([year, data]) => {
    if (!Array.isArray(data)) return [year, {}];
    return [year, Object.fromEntries(data.map(chapter => [chapter.id, {
      title: chapter.title,
      topics: chapter.topics || [],
      types: [],
    }]))];
  })
);

export const getQuestionTargets = ({ year = DEFAULT_YEAR, course = 'Advanced', assignedChapters = [], assignedTopics = [] } = {}) => {
  let chapters = CURRICULUM_DATA[year];
  
  // Handle nested courses for Year 11/12
  if (chapters && !Array.isArray(chapters)) {
    chapters = chapters[course] || chapters['Advanced'] || Object.values(chapters)[0];
  }
  
  if (!Array.isArray(chapters)) {
    chapters = CURRICULUM_DATA[DEFAULT_YEAR];
  }

  const chapterSet = new Set(assignedChapters || []);
  const topicSet = new Set(assignedTopics || []);
  const scopedChapters = chapterSet.size > 0 ? chapters.filter(chapter => chapterSet.has(chapter.id)) : chapters;

  let targets = scopedChapters.flatMap(chapter => (chapter.topics || []).map(topic => ({
    year,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
    topicId: topic.id,
    topicCode: topic.code || '',
    topicTitle: topic.title,
    topicGroup: topic.group || '',
    generatorTypes: TOPIC_GENERATOR_MAP[topic.id] || GROUP_GENERATOR_MAP[topic.group] || (['Year 11', 'Year 12'].includes(year) ? ['algebra_yr11'] : ['generic_year1']),
  })));

  if (topicSet.size > 0) targets = targets.filter(target => topicSet.has(target.topicId));
  
  // Final fallback to Year 1 if still nothing found
  if (targets.length === 0) {
    if (['Year 11', 'Year 12'].includes(year)) {
      return getQuestionTargets({ year: 'Year 11', course: 'Advanced', assignedChapters: ['y11adv-ch1'] });
    }
    return getQuestionTargets({ year: DEFAULT_YEAR, assignedChapters: [DEFAULT_CHAPTER_ID] });
  }

  return targets;
};

export const getQuestionBlueprint = (year = DEFAULT_YEAR, chapterId = DEFAULT_CHAPTER_ID) => (
  QUESTION_BLUEPRINTS[year]?.[chapterId] || null
);

const q = (type, question, options, answer, solution, timeLimit = 30, hint = '') => ({ 
  type, 
  question, 
  options, 
  answer, 
  solution, 
  timeLimit,
  hint: hint || solution // Use solution as fallback hint if not provided
});

const genBeforeAfter = (difficulty) => {
  const max = maxByDifficulty(difficulty, 30, 60, 100);
  const offset = difficulty === 'hard' ? randomInt(1, 2) : 1;
  const num = randomInt(offset + 1, max - offset);
  const before = Math.random() > 0.5;
  const answer = before ? num - offset : num + offset;
  return q('before_after', `What number comes ${before ? 'before' : 'after'} ${num}?`, getUniqueOptions(answer, [num, answer - 1, answer + 1], 0, max), answer, `${answer} comes ${before ? 'before' : 'after'} ${num} when counting.`, 15, `Think about the number right ${before ? 'left' : 'right'} of ${num} on a number line.`);
};

const genSkipCounting = (difficulty) => {
  const step = pick(difficulty === 'easy' ? [2] : [2, 5, 10]);
  const length = difficulty === 'hard' ? 5 : 4;
  const start = randomInt(0, maxByDifficulty(difficulty, 20, 40, 70));
  const seq = Array.from({ length }, (_, i) => start + step * i);
  const missingIdx = randomInt(0, seq.length - 1);
  const answer = seq[missingIdx];
  const shown = [...seq];
  shown[missingIdx] = '___';
  return q('skip_counting', `Fill in the missing number: ${shown.join(', ')}`, getUniqueOptions(answer, [answer - step, answer + step, answer + 1], 0, 120), answer, `The pattern is counting by ${step}.`, 20);
};

const genPlaceValue = (difficulty) => {
  const tens = randomInt(1, difficulty === 'easy' ? 4 : 9);
  const ones = randomInt(difficulty === 'easy' ? 1 : 0, 9);
  const answer = tens * 10 + ones;
  return q('tens_ones', `A number has ${tens} tens and ${ones} ones. What is the number?`, getUniqueOptions(answer, [tens + ones, ones * 10 + tens, answer + 10], 1, 100), answer, `${tens} tens is ${tens * 10}. ${tens * 10} + ${ones} = ${answer}.`, 25);
};

const genNumberLine = (difficulty) => {
  const direction = difficulty === 'hard' ? pick(['left', 'right']) : 'right';
  const steps = randomInt(1, difficulty === 'hard' ? 10 : 5);
  const start = randomInt(direction === 'left' ? steps : 0, maxByDifficulty(difficulty, 20, 50, 90));
  const answer = direction === 'left' ? start - steps : start + steps;
  return q('number_line', `On a number line, start at ${start} and move ${steps} steps ${direction}. Where do you land?`, getUniqueOptions(answer, [start, answer - 1, answer + 1], 0, 100), answer, `Start at ${start} and move ${steps} steps ${direction} to land on ${answer}.`, 30);
};

const genHundredsChart = () => {
  const direction = pick(['above', 'below', 'left', 'right']);
  const num = randomInt(direction === 'above' ? 11 : 21, direction === 'below' ? 89 : 99);
  const offsets = { above: -10, below: 10, left: -1, right: 1 };
  const answer = num + offsets[direction];
  return q('hundreds_chart', `On a hundreds chart, what number is directly ${direction} ${num}?`, getUniqueOptions(answer, [num - 10, num + 10, num - 1, num + 1], 1, 100), answer, `On a hundreds chart: above is -10, below is +10, left is -1, and right is +1.`, 30);
};

const genNumberWords = (difficulty) => {
  const max = maxByDifficulty(difficulty, 20, 50, 100);
  const num = randomInt(1, max);
  const toWord = Math.random() > 0.5;
  const answer = toWord ? NUMBER_WORDS[num] : num;
  const question = toWord ? `Write ${num} in words.` : `What number is "${NUMBER_WORDS[num]}"?`;
  const options = toWord ? wordOptions(answer, NUMBER_WORDS.slice(1, max + 1)) : getUniqueOptions(answer, [num - 1, num + 1, num + 10], 1, max);
  return q('number_words', question, options, answer, `${num} is written as "${NUMBER_WORDS[num]}".`, 25);
};

const genOrderNumbers = (difficulty) => {
  const max = maxByDifficulty(difficulty, 30, 70, 100);
  const nums = shuffle(Array.from(new Set(Array.from({ length: 4 }, () => randomInt(1, max))))).slice(0, 4);
  while (nums.length < 4) nums.push(randomInt(1, max));
  const sorted = [...nums].sort((a, b) => a - b);
  const answer = sorted.join(', ');
  const distractors = [
    [...sorted].reverse().join(', '),
    [sorted[1], sorted[0], sorted[2], sorted[3]].join(', '),
    [sorted[0], sorted[2], sorted[1], sorted[3]].join(', '),
  ];
  return q('order_numbers', `Put these numbers from smallest to largest: ${nums.join(', ')}`, wordOptions(answer, [answer, ...distractors]), answer, `Smallest to largest is ${answer}.`, 45);
};

const genAddition = (difficulty) => {
  const max = maxByDifficulty(difficulty, 10, 15, 20);
  const a = randomInt(1, max);
  const b = randomInt(1, Math.max(1, 20 - a));
  const answer = a + b;
  return q('addition_within_20', `${a} + ${b} = ?`, getUniqueOptions(answer, [answer - 1, answer + 1, a, b], 0, 20), answer, `${a} + ${b} = ${answer}.`, 20, `Start with ${Math.max(a, b)} and count on ${Math.min(a, b)} more.`);
};

const genSubtraction = (difficulty) => {
  const max = maxByDifficulty(difficulty, 12, 18, 20);
  const whole = randomInt(5, max);
  const part = randomInt(1, whole - 1);
  const answer = whole - part;
  return q('subtraction_within_20', `${whole} - ${part} = ?`, getUniqueOptions(answer, [answer - 1, answer + 1, part], 0, 20), answer, `${whole} - ${part} = ${answer}.`, 20, `Count back ${part} from ${whole}.`);
};

const genCompareNumbers = (difficulty) => {
  const max = maxByDifficulty(difficulty, 20, 50, 100);
  let a = randomInt(1, max);
  let b = randomInt(1, max);
  while (a === b) b = randomInt(1, max);
  const bigger = Math.random() > 0.5;
  const answer = bigger ? Math.max(a, b) : Math.min(a, b);
  return q('compare_numbers', `Which number is ${bigger ? 'bigger' : 'smaller'}: ${a} or ${b}?`, getUniqueOptions(answer, [a, b, answer - 1, answer + 1], 1, max), answer, `${answer} is ${bigger ? 'bigger' : 'smaller'}.`, 18);
};

const genMissingAddend = () => {
  const answer = randomInt(1, 10);
  const known = randomInt(1, 10);
  const total = answer + known;
  const missingFirst = Math.random() > 0.5;
  return q('missing_addend', missingFirst ? `? + ${known} = ${total}` : `${known} + ? = ${total}`, getUniqueOptions(answer, [answer - 1, answer + 1, known], 0, 20), answer, `${total} - ${known} = ${answer}.`, 25);
};

const genTrueFalseAddition = () => {
  const a = randomInt(1, 10);
  const b = randomInt(1, 10);
  const trueAnswer = a + b;
  const shown = Math.random() > 0.5 ? trueAnswer : clamp(trueAnswer + pick([-2, -1, 1, 2]), 0, 20);
  const answer = shown === trueAnswer ? 'True' : 'False';
  return q('true_false_addition', `True or false: ${a} + ${b} = ${shown}`, ['True', 'False'], answer, `${a} + ${b} = ${trueAnswer}, so the statement is ${answer.toLowerCase()}.`, 20);
};

const genMake10 = () => {
  const a = randomInt(6, 9);
  const b = randomInt(2, 9);
  const answer = a + b;
  const toTen = 10 - a;
  return q('make_10', `Use make 10: ${a} + ${b} = ?`, getUniqueOptions(answer, [10 + b, answer - 1, answer + 1], 0, 20), answer, `${a} needs ${toTen} to make 10. Split ${b} into ${toTen} and ${b - toTen}. Then 10 + ${b - toTen} = ${answer}.`, 35);
};

const genPartPartWhole = () => {
  const partA = randomInt(1, 10);
  const partB = randomInt(1, 10);
  const whole = partA + partB;
  const askWhole = Math.random() > 0.45;
  const answer = askWhole ? whole : partB;
  const question = askWhole ? `Part-part-whole: parts are ${partA} and ${partB}. What is the whole?` : `Part-part-whole: whole is ${whole} and one part is ${partA}. What is the missing part?`;
  return q('part_part_whole', question, getUniqueOptions(answer, [answer - 1, answer + 1, partA], 0, 20), answer, askWhole ? `${partA} + ${partB} = ${whole}.` : `${whole} - ${partA} = ${partB}.`, 30);
};

const genDoubles = () => {
  const a = randomInt(2, 10);
  const near = Math.random() > 0.5;
  const b = near ? a + 1 : a;
  const answer = a + b;
  return q('doubles_near_doubles', `${a} + ${b} = ?`, getUniqueOptions(answer, [answer - 1, answer + 1, a * 2], 0, 20), answer, near ? `${a} + ${a} = ${a * 2}, so ${a} + ${b} is one more: ${answer}.` : `${a} doubled is ${answer}.`, 20);
};

const genFactFamily = () => {
  const a = randomInt(2, 9);
  const b = randomInt(2, 9);
  const total = a + b;
  return q('fact_family', `For the fact family using ${a}, ${b}, and ${total}, complete: ${total} - ${b} = ?`, getUniqueOptions(a, [b, total, a + 1], 0, 20), a, `The related facts include ${a} + ${b} = ${total} and ${total} - ${b} = ${a}.`, 30);
};

const genWordProblem = (difficulty) => {
  const a = randomInt(2, 10);
  const b = randomInt(1, difficulty === 'hard' ? 10 : 6);
  const subtract = Math.random() > 0.5;
  const answer = subtract ? a : a + b;
  const question = subtract ? `Mia has ${a + b} stickers. She gives away ${b}. How many are left?` : `Mia has ${a} stickers. She gets ${b} more. How many does she have now?`;
  return q('word_problem_add_subtract', question, getUniqueOptions(answer, [answer - 1, answer + 1, b], 0, 20), answer, subtract ? `${a + b} - ${b} = ${answer}.` : `${a} + ${b} = ${answer}.`, 40);
};

const genErrorSpotting = () => {
  const a = randomInt(2, 9);
  const b = randomInt(2, 9);
  const correct = a + b;
  const wrong = correct + pick([-2, -1, 1, 2]);
  return q('error_spotting', `Fix the mistake: ${a} + ${b} = ${wrong}. What should the answer be?`, getUniqueOptions(correct, [wrong, correct - 1, correct + 1], 0, 20), correct, `${a} + ${b} = ${correct}, not ${wrong}.`, 30);
};

const genTwoStep = () => {
  const a = randomInt(1, 7);
  const b = randomInt(1, 7);
  const c = randomInt(1, 7);
  const answer = a + b + c;
  return q('two_step_addition', `${a} + ${b} + ${c} = ?`, getUniqueOptions(answer, [answer - 1, answer + 1, a + b], 0, 25), answer, `First ${a} + ${b} = ${a + b}. Then ${a + b} + ${c} = ${answer}.`, 35);
};

const genOddEven = (difficulty) => {
  const num = randomInt(1, maxByDifficulty(difficulty, 20, 50, 100));
  const answer = num % 2 === 0 ? 'Even' : 'Odd';
  return q('odd_even', `Is ${num} odd or even?`, ['Odd', 'Even'], answer, `${num} ${answer === 'Even' ? 'can' : 'cannot'} be paired with none left over.`, 15);
};

const genOddEvenSort = () => {
  const nums = Array.from({ length: 5 }, () => randomInt(1, 30));
  const evens = nums.filter(n => n % 2 === 0).join(', ') || 'none';
  const odds = nums.filter(n => n % 2 !== 0).join(', ') || 'none';
  const all = nums.join(', ');
  return q('sort_odd_even', `Which of these numbers are even? ${nums.join(', ')}`, wordOptions(evens, [evens, odds, all, 'none']), evens, `Even numbers end in 0, 2, 4, 6, or 8.`, 35);
};

const genFraction = () => {
  const half = Math.random() > 0.5;
  const total = half ? pick([4, 6, 8, 10, 12]) : pick([4, 8, 12, 16]);
  const answer = half ? total / 2 : total / 4;
  const label = half ? 'half' : 'one quarter';
  return q('fraction_half_quarter', `What is ${label} of ${total}?`, getUniqueOptions(answer, [answer - 1, answer + 1, total], 0, total), answer, `${label} means ${half ? '2' : '4'} equal parts. ${total} divided by ${half ? '2' : '4'} is ${answer}.`, 30);
};

const genEqualParts = () => {
  const parts = pick([2, 3, 4, 5, 6, 8]);
  return q('equal_parts', `A shape is divided into ${parts} equal parts. How many equal parts are there?`, getUniqueOptions(parts, [parts - 1, parts + 1, parts * 2], 1, 12), parts, `Count the equal sections: there are ${parts}.`, 20);
};

const genMoney = () => {
  const coins = shuffle(COINS).slice(0, randomInt(2, 3));
  const total = coins.reduce((sum, coin) => sum + coin, 0);
  return q('money_coin_value', `How much are these coins worth: ${coins.map(c => COIN_LABELS[c]).join(' + ')}?`, getUniqueOptions(total, [total - 5, total + 5, coins[0]], 0, 300).map(v => `${v}c`), `${total}c`, `Add the coin values: ${coins.map(c => `${c}c`).join(' + ')} = ${total}c.`, 35);
};

const genCoinName = () => {
  const coin = pick(COINS);
  return q('coin_name', `What is the value of this coin: ${COIN_LABELS[coin]}?`, wordOptions(`${coin}c`, COINS.map(c => `${c}c`)), `${coin}c`, `The coin is worth ${coin} cents.`, 20);
};

const genMoneyEnough = () => {
  const price = pick([10, 15, 20, 25, 30, 40, 50]);
  const total = price + pick([-10, -5, 0, 5, 10]);
  const safeTotal = Math.max(5, total);
  const answer = safeTotal >= price ? 'Yes' : 'No';
  return q('money_enough', `An item costs ${price}c. You have ${safeTotal}c. Do you have enough?`, ['Yes', 'No'], answer, `${safeTotal}c is ${answer === 'Yes' ? 'at least' : 'less than'} ${price}c.`, 25);
};

const genMoneyChange = () => {
  const start = pick([20, 50, 100]);
  const spent = pick([5, 10, 15, 20, 30]).valueOf();
  const safeSpent = Math.min(spent, start - 5);
  const answer = start - safeSpent;
  return q('money_change', `You have ${start}c and spend ${safeSpent}c. How much is left?`, getUniqueOptions(answer, [answer - 5, answer + 5, safeSpent], 0, start).map(v => `${v}c`), `${answer}c`, `${start}c - ${safeSpent}c = ${answer}c.`, 35);
};

const genRepeatingPattern = () => {
  const patterns = [['red', 'blue'], ['circle', 'square'], ['A', 'A', 'B'], ['A', 'B', 'B']];
  const unit = pick(patterns);
  const sequence = [...unit, ...unit, ...unit];
  const answer = sequence[sequence.length - unit.length];
  return q('repeating_pattern', `What comes next? ${sequence.slice(0, -1).join(', ')}, ___`, wordOptions(answer, ['red', 'blue', 'circle', 'square', 'A', 'B']), answer, `The repeating rule is ${unit.join(', ')}.`, 25);
};

const genPatternMissing = () => {
  const unit = pick([['A', 'B'], ['red', 'blue'], ['circle', 'square', 'square'], ['A', 'A', 'B']]);
  const sequence = [...unit, ...unit, ...unit];
  const missingIdx = randomInt(1, sequence.length - 2);
  const answer = sequence[missingIdx];
  const shown = [...sequence];
  shown[missingIdx] = '___';
  return q('pattern_missing', `What is missing? ${shown.join(', ')}`, wordOptions(answer, [...new Set(sequence)]), answer, `The pattern repeats: ${unit.join(', ')}.`, 25);
};

const genPatternRule = () => {
  const patterns = [
    { unit: ['red', 'blue'], rule: 'red, blue' },
    { unit: ['A', 'A', 'B'], rule: 'A, A, B' },
    { unit: ['circle', 'square', 'triangle'], rule: 'circle, square, triangle' },
  ];
  const item = pick(patterns);
  return q('pattern_rule', `What is the rule? ${[...item.unit, ...item.unit].join(', ')}...`, wordOptions(item.rule, patterns.map(p => p.rule)), item.rule, `The repeating unit is ${item.rule}.`, 30);
};

const genPatternError = () => {
  const sequence = ['red', 'blue', 'red', 'red', 'red', 'blue'];
  return q('pattern_error', `The pattern should be red, blue, red, blue... Which item is wrong? ${sequence.join(', ')}`, ['4th item', '2nd item', '5th item', '6th item'], '4th item', `The 4th item should be blue, not red.`, 30);
};

const genEqualsBalance = () => {
  const leftA = randomInt(1, 8);
  const leftB = randomInt(1, 8);
  const rightKnown = randomInt(1, leftA + leftB - 1);
  const answer = leftA + leftB - rightKnown;
  return q('equals_balance', `${leftA} + ${leftB} = ${rightKnown} + ?`, getUniqueOptions(answer, [answer - 1, answer + 1, rightKnown], 0, 16), answer, `Both sides must equal ${leftA + leftB}. ${leftA + leftB} - ${rightKnown} = ${answer}.`, 30);
};

const genEqualsTrueFalse = () => {
  const a = randomInt(1, 8);
  const b = randomInt(1, 8);
  const same = Math.random() > 0.5;
  const rightA = same ? a : clamp(a + pick([-2, -1, 1, 2]), 0, 10);
  const answer = a + b === rightA + b ? 'True' : 'False';
  return q('equals_true_false', `True or false: ${a} + ${b} = ${rightA} + ${b}`, ['True', 'False'], answer, `${a} + ${b} = ${a + b}; ${rightA} + ${b} = ${rightA + b}.`, 25);
};

const genSymbolEquals = () => {
  const a = randomInt(1, 8);
  const b = randomInt(1, 8);
  const same = Math.random() > 0.5;
  const right = same ? a + b : a + b + pick([-2, -1, 1, 2]);
  const answer = same ? '=' : 'not equal';
  return q('equals_symbol', `Which symbol belongs in the box? ${a} + ${b} __ ${right}`, ['=', 'not equal'], answer, `${a} + ${b} = ${a + b}, so the correct symbol is ${answer}.`, 25);
};

const genNumberPattern = () => genSkipCounting('medium');

const genLength = () => {
  const a = randomInt(3, 12);
  const b = randomInt(3, 12);
  const answer = a > b ? 'pencil' : 'ruler';
  return q('length_compare', `A pencil is ${a} blocks long. A ruler is ${b} blocks long. Which is longer?`, ['pencil', 'ruler'], answer, `Compare ${a} and ${b}. The larger measurement is longer.`, 25);
};

const genLengthOrder = () => {
  const items = [
    { name: 'pencil', length: randomInt(5, 12) },
    { name: 'eraser', length: randomInt(2, 6) },
    { name: 'ruler', length: randomInt(10, 15) },
  ];
  const answer = [...items].sort((a, b) => a.length - b.length).map(item => item.name).join(', ');
  const distractors = [
    [...items].sort((a, b) => b.length - a.length).map(item => item.name).join(', '),
    `${items[1].name}, ${items[0].name}, ${items[2].name}`,
  ];
  return q('length_order', `Order from shortest to longest: ${items.map(i => `${i.name} ${i.length} blocks`).join('; ')}`, wordOptions(answer, [answer, ...distractors]), answer, `Compare the lengths and start with the smallest number.`, 35);
};

const genInformalMeasure = () => {
  const units = randomInt(4, 12);
  return q('informal_units', `A toy train is ${units} blocks long. How many blocks long is it?`, getUniqueOptions(units, [units - 1, units + 1, units + 2], 1, 15), units, `Count each block: ${units} blocks.`, 20);
};

const genMassCapacity = () => {
  const heavier = Math.random() > 0.5;
  const answer = heavier ? 'book' : 'feather';
  return q('mass_compare', `Which is heavier: a book or a feather?`, ['book', 'feather'], answer, `A ${answer} is heavier in this comparison.`, 20);
};

const genCapacityCompare = () => {
  const a = randomInt(2, 8);
  const b = randomInt(2, 8);
  const answer = a > b ? 'jug' : 'cup';
  return q('capacity_compare', `A jug holds ${a} cups. A cup holds ${b} cups. Which holds more?`, ['jug', 'cup'], answer, `Compare ${a} and ${b}; the larger amount holds more.`, 25);
};

const genTime = () => {
  const hour = randomInt(1, 12);
  const halfPast = Math.random() > 0.5;
  const answer = `${hour}:${halfPast ? '30' : '00'}`;
  return q('read_clock', `What time is ${halfPast ? 'half past' : 'o clock'} ${hour}?`, wordOptions(answer, [`${hour}:00`, `${hour}:30`, `${hour + 1}:00`, `${hour + 1}:30`]), answer, `${halfPast ? 'Half past' : 'O clock'} ${hour} is ${answer}.`, 25);
};

const genActivityDuration = () => {
  const answer = 'sleeping';
  return q('activity_duration', `Which usually takes longer: brushing teeth or sleeping?`, ['brushing teeth', 'sleeping'], answer, `Sleeping usually takes hours, but brushing teeth takes minutes.`, 20);
};

const genDaysMonths = () => {
  const useDays = Math.random() > 0.5;
  const arr = useDays ? DAYS : MONTHS;
  const idx = randomInt(0, arr.length - 2);
  const answer = arr[idx + 1];
  return q('calendar_order', `What comes after ${arr[idx]}?`, wordOptions(answer, arr), answer, `${answer} comes after ${arr[idx]}.`, 20);
};

const gen2DShape = () => {
  const shape = pick(SHAPES_2D);
  const askSides = Math.random() > 0.5;
  const answer = askSides ? shape.sides : shape.name;
  const question = askSides ? `How many sides does a ${shape.name} have?` : `Which shape has ${shape.sides} sides?`;
  const options = askSides ? getUniqueOptions(answer, [answer - 1, answer + 1, answer + 2], 0, 8) : wordOptions(answer, SHAPES_2D.map(s => s.name));
  return q('shape_2d', question, options, answer, `A ${shape.name} has ${shape.sides} sides and ${shape.corners} corners.`, 25);
};

const genShapeTrueFalse = () => {
  const statements = [
    { text: 'A square has 4 equal sides.', answer: 'True' },
    { text: 'A triangle has 4 sides.', answer: 'False' },
    { text: 'A rectangle has 4 corners.', answer: 'True' },
  ];
  const item = pick(statements);
  return q('shape_true_false', `True or false: ${item.text}`, ['True', 'False'], item.answer, item.answer === 'True' ? `That statement is true.` : `That statement is false.`, 20);
};

const genShapeSort = () => {
  const answer = 'triangle';
  return q('shape_sort', `Which shape belongs in the group with 3 sides?`, ['triangle', 'square', 'rectangle', 'hexagon'], answer, `A triangle has 3 sides.`, 20);
};

const gen3DObject = () => {
  const object = pick(OBJECTS_3D);
  const mode = pick(['name', 'property', 'example']);
  if (mode === 'name') return q('shape_3d', `Which 3D object is like a ${object.example}?`, wordOptions(object.name, OBJECTS_3D.map(o => o.name)), object.name, `A ${object.example} is shaped like a ${object.name}.`, 25);
  if (mode === 'property') return q('shape_3d', `How many corners does a ${object.name} have?`, getUniqueOptions(object.corners, [object.corners + 1, object.faces, object.edges], 0, 12), object.corners, `A ${object.name} has ${object.corners} corners.`, 25);
  return q('shape_3d', `Which object can ${object.can}?`, wordOptions(object.name, OBJECTS_3D.map(o => o.name)), object.name, `A ${object.name} can ${object.can}.`, 25);
};

const gen3DTrueFalse = () => {
  const statements = [
    { text: 'A sphere has flat faces.', answer: 'False' },
    { text: 'A cube can stack.', answer: 'True' },
    { text: 'A cylinder can roll.', answer: 'True' },
  ];
  const item = pick(statements);
  return q('shape_3d_true_false', `True or false: ${item.text}`, ['True', 'False'], item.answer, `The statement is ${item.answer.toLowerCase()}.`, 20);
};

const genPositionDirection = () => {
  const words = ['above', 'below', 'next to', 'behind'];
  const answer = pick(words);
  return q('position_words', `Choose the position word: The cat is ${answer} the box.`, wordOptions(answer, words), answer, `The correct position word is ${answer}.`, 20);
};

const genFollowDirections = () => {
  const right = randomInt(1, 3);
  const up = randomInt(1, 3);
  const answer = `right ${right}, up ${up}`;
  return q('follow_directions', `Follow the directions: go right ${right}, then up ${up}. Which path did you take?`, wordOptions(answer, [answer, `left ${right}, up ${up}`, `right ${up}, down ${right}`, `up ${up}, right ${right}`]), answer, `The directions say right ${right}, then up ${up}.`, 25);
};

const genGrid = () => {
  const col = pick(['A', 'B', 'C', 'D']);
  const row = randomInt(1, 4);
  const answer = `${col}${row}`;
  return q('grid_map', `On a grid, the star is at column ${col}, row ${row}. What is its grid reference?`, wordOptions(answer, ['A1', 'B2', 'C3', 'D4', answer]), answer, `Column ${col} and row ${row} make ${answer}.`, 25);
};

const genTally = () => {
  const cats = randomInt(2, 9);
  const dogs = randomInt(2, 9);
  const answer = dogs;
  return q('tally_chart', `A tally chart shows cats: ${cats}, dogs: ${dogs}. How many voted for dogs?`, getUniqueOptions(answer, [cats, answer - 1, answer + 1], 0, 12), answer, `Read the dogs row: ${dogs}.`, 25);
};

const genTallyComplete = () => {
  const apples = randomInt(2, 8);
  const oranges = randomInt(2, 8);
  return q('tally_complete', `Complete the tally count: apples have ${apples} marks and oranges have ${oranges} marks. How many apples?`, getUniqueOptions(apples, [oranges, apples - 1, apples + 1], 0, 12), apples, `Count the apple tally marks: ${apples}.`, 25);
};

const genDataMostLeast = () => {
  const data = { dogs: randomInt(2, 9), cats: randomInt(2, 9), fish: randomInt(1, 8) };
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const answer = entries[0][0];
  return q('data_most_least', `Which has the most votes? dogs ${data.dogs}, cats ${data.cats}, fish ${data.fish}`, ['dogs', 'cats', 'fish'], answer, `${answer} has the greatest number of votes.`, 25);
};

const genDataCompare = () => {
  const cats = randomInt(5, 10);
  const fish = randomInt(1, cats - 1);
  const answer = cats - fish;
  return q('data_compare_more', `A chart shows cats: ${cats}, fish: ${fish}. How many more chose cats than fish?`, getUniqueOptions(answer, [cats, fish, answer + 1], 0, 12), answer, `${cats} - ${fish} = ${answer}.`, 30);
};

const genSurveyQuestion = () => {
  const answer = 'What is your favourite fruit?';
  return q('survey_question', `Which question would help collect data about favourite fruits?`, wordOptions(answer, ['What is your favourite fruit?', 'How tall is your desk?', 'What time is lunch?', 'How many sides has a square?']), answer, `A data question should ask about the category being counted.`, 25);
};

const genGraph = () => {
  const apples = randomInt(1, 8);
  const bananas = randomInt(1, 8);
  const answer = apples + bananas;
  return q('graph_reading', `A picture graph shows ${apples} apples and ${bananas} bananas. How many altogether?`, getUniqueOptions(answer, [apples, bananas, answer - 1], 0, 16), answer, `${apples} + ${bananas} = ${answer}.`, 30);
};

const genGraphTallestShortest = () => {
  const data = { apples: randomInt(2, 9), bananas: randomInt(2, 9), oranges: randomInt(2, 9) };
  const askTallest = Math.random() > 0.5;
  const entries = Object.entries(data).sort((a, b) => askTallest ? b[1] - a[1] : a[1] - b[1]);
  const answer = entries[0][0];
  return q('graph_tallest_shortest', `Which bar is ${askTallest ? 'tallest' : 'shortest'}? apples ${data.apples}, bananas ${data.bananas}, oranges ${data.oranges}`, ['apples', 'bananas', 'oranges'], answer, `${answer} has the ${askTallest ? 'greatest' : 'smallest'} value.`, 25);
};

const genGraphTrueFalse = () => {
  const pizza = randomInt(3, 9);
  const pasta = randomInt(1, 8);
  const statement = `More people like pizza than pasta.`;
  const answer = pizza > pasta ? 'True' : 'False';
  return q('graph_true_false', `Pizza: ${pizza}, pasta: ${pasta}. True or false: ${statement}`, ['True', 'False'], answer, `${pizza} is ${pizza > pasta ? 'greater than' : 'not greater than'} ${pasta}.`, 25);
};

const genPictureGraphBuild = () => {
  const apples = randomInt(2, 6);
  const answer = `${apples} apple pictures`;
  return q('picture_graph_build', `A picture graph needs one picture for each vote. Apples have ${apples} votes. What should you draw?`, wordOptions(answer, [`${apples} apple pictures`, `${apples + 1} apple pictures`, `${Math.max(1, apples - 1)} apple pictures`, `${apples} banana pictures`]), answer, `One picture stands for one vote, so draw ${apples} apple pictures.`, 30);
};

const genGraphTitle = () => {
  const answer = 'Favourite fruits';
  return q('graph_title', `A graph shows votes for apples, bananas and oranges. What is a good title?`, wordOptions(answer, ['Favourite fruits', 'Class birthdays', 'Weather chart', 'Pet heights']), answer, `The graph is about fruit choices, so "${answer}" is a good title.`, 20);
};

const genLikelihood = () => {
  const events = [
    { event: 'The sun will rise tomorrow', answer: 'certain' },
    { event: 'You will roll a 7 on a normal dice', answer: 'impossible' },
    { event: 'It will rain this week', answer: 'possible' },
  ];
  const item = pick(events);
  return q('likelihood_language', `Is this event certain, possible, or impossible? ${item.event}.`, ['certain', 'possible', 'impossible'], item.answer, `This event is ${item.answer}.`, 25);
};

const genLikelihoodOrder = () => {
  const answer = 'impossible, possible, certain';
  return q('likelihood_order', `Put these likelihood words in order from least likely to most likely.`, wordOptions(answer, ['impossible, possible, certain', 'certain, possible, impossible', 'possible, impossible, certain', 'possible, certain, impossible']), answer, `The order is impossible, possible, certain.`, 25);
};

const genLikelyUnlikely = () => {
  const events = [
    { event: 'It will snow in summer in Australia', answer: 'unlikely' },
    { event: 'You will eat lunch this week', answer: 'likely' },
    { event: 'A classmate has a birthday this year', answer: 'likely' },
  ];
  const item = pick(events);
  return q('likely_unlikely', `Is this likely or unlikely? ${item.event}.`, ['likely', 'unlikely'], item.answer, `This event is ${item.answer}.`, 25);
};

const genLikelihoodMatch = () => {
  const item = pick([
    { event: 'rolling a 7 on a normal dice', answer: 'impossible' },
    { event: 'the sun rising tomorrow', answer: 'certain' },
    { event: 'rain next week', answer: 'possible' },
  ]);
  return q('likelihood_match', `Match the event to a likelihood word: ${item.event}.`, ['certain', 'possible', 'impossible'], item.answer, `${item.event} is ${item.answer}.`, 25);
};

const genExperiment = () => {
  const coin = Math.random() > 0.5;
  if (coin) return q('simple_experiment', `Flip a coin. What are the possible outcomes?`, ['heads and tails', '1 and 2', 'red and blue', 'yes only'], 'heads and tails', `A coin can land on heads or tails.`, 25);
  return q('simple_experiment', `Roll a normal dice. Can you roll a 7?`, ['Yes', 'No'], 'No', `A normal dice has numbers 1 to 6, so 7 is impossible.`, 25);
};

const genDiceImpossible = () => (
  q('dice_impossible', `Which result is impossible on a normal dice?`, ['7', '1', '4', '6'], '7', `A normal dice has only 1, 2, 3, 4, 5, and 6.`, 20)
);

const genCoinEqualLikely = () => (
  q('coin_equal_likely', `True or false: heads and tails are equally likely on a fair coin.`, ['True', 'False'], 'True', `A fair coin has two equally likely outcomes: heads and tails.`, 20)
);

const genCoinPrediction = () => {
  const answer = 'about 5';
  return q('coin_prediction', `If you flip a fair coin 10 times, about how many heads might you expect?`, ['about 5', '0', '10', 'about 20'], answer, `Heads and tails are equally likely, so about half of 10 is 5.`, 25);
};

const genMostLikely = () => {
  const red = randomInt(2, 5);
  const blue = randomInt(1, red - 1);
  return q('most_likely', `A bag has ${red} red balls and ${blue} blue ball${blue === 1 ? '' : 's'}. Which colour are you most likely to pick?`, ['red', 'blue'], 'red', `There are more red balls, so red is more likely.`, 25);
};

const genGeneric = (difficulty) => genAddition(difficulty);

const genAlgebraYear11 = (difficulty) => {
  const type = randomInt(1, 3);
  if (type === 1) {
    // Expanding: a(bx + c)
    const a = randomInt(2, 5);
    const b = randomInt(2, 4);
    const c = randomInt(1, 9);
    const qText = `Expand: $$ ${a}(${b}x + ${c}) $$`;
    const ans = `${a*b}x + ${a*c}`;
    return q('algebra_yr11', qText, getUniqueOptions(ans, [`${a*b}x + ${c}`, `${a}x + ${a*c}`, `${a*b}x - ${a*c}`]), ans, `Multiply ${a} by both terms inside.`);
  } else if (type === 2) {
    // Solving: ax + b = c
    const xVal = randomInt(1, 10);
    const a = randomInt(2, 5);
    const b = randomInt(1, 15);
    const c = a * xVal + b;
    const qText = `Solve for x: $$ ${a}x + ${b} = ${c} $$`;
    const ans = String(xVal);
    return q('algebra_yr11', qText, getUniqueOptions(ans, [String(xVal + 1), String(xVal - 1), String(Math.floor(c/a))]), ans, `Subtract ${b}, then divide by ${a}.`);
  } else {
    // Simplifying: ax + bx + c
    const a = randomInt(2, 10);
    const b = randomInt(2, 10);
    const c = randomInt(1, 20);
    const qText = `Simplify: $$ ${a}x + ${b}x + ${c} $$`;
    const ans = `${a+b}x + ${c}`;
    return q('algebra_yr11', qText, getUniqueOptions(ans, [`${a+b}x`, `${a+b+c}x`, `${a}x + ${b+c}`]), ans, `Combine like terms.`);
  }
};

const GENERATORS_BY_TYPE = {
  before_after: genBeforeAfter,
  skip_counting: genSkipCounting,
  place_value: genPlaceValue,
  compare_numbers: genCompareNumbers,
  number_line: genNumberLine,
  hundreds_chart: genHundredsChart,
  number_words: genNumberWords,
  order_numbers: genOrderNumbers,
  addition_within_20: genAddition,
  subtraction_within_20: genSubtraction,
  missing_addend: genMissingAddend,
  true_false_addition: genTrueFalseAddition,
  error_spotting: genErrorSpotting,
  make_10: genMake10,
  part_part_whole: genPartPartWhole,
  doubles_near_doubles: genDoubles,
  fact_family: genFactFamily,
  word_problem_add_subtract: genWordProblem,
  two_step_addition: genTwoStep,
  odd_even: genOddEven,
  sort_odd_even: genOddEvenSort,
  fraction_half_quarter: genFraction,
  equal_parts: genEqualParts,
  money_coin_value: genMoney,
  algebra_yr11: genAlgebraYear11,
  money_change: genMoneyChange,
  coin_name: genCoinName,
  money_enough: genMoneyEnough,
  repeating_pattern: genRepeatingPattern,
  pattern_missing: genPatternMissing,
  pattern_rule: genPatternRule,
  pattern_error: genPatternError,
  equals_balance: genEqualsBalance,
  equals_true_false: genEqualsTrueFalse,
  equals_symbol: genSymbolEquals,
  number_pattern: genNumberPattern,
  length_compare: genLength,
  length_order: genLengthOrder,
  informal_units: genInformalMeasure,
  mass_capacity: genMassCapacity,
  capacity_compare: genCapacityCompare,
  read_clock: genTime,
  activity_duration: genActivityDuration,
  calendar_order: genDaysMonths,
  shape_2d: gen2DShape,
  shape_true_false: genShapeTrueFalse,
  shape_sort: genShapeSort,
  shape_3d: gen3DObject,
  shape_3d_true_false: gen3DTrueFalse,
  position_words: genPositionDirection,
  follow_directions: genFollowDirections,
  grid_map: genGrid,
  tally_chart: genTally,
  tally_complete: genTallyComplete,
  data_most_least: genDataMostLeast,
  data_compare_more: genDataCompare,
  survey_question: genSurveyQuestion,
  graph_reading: genGraph,
  graph_tallest_shortest: genGraphTallestShortest,
  graph_true_false: genGraphTrueFalse,
  picture_graph_build: genPictureGraphBuild,
  graph_title: genGraphTitle,
  likelihood_language: genLikelihood,
  likelihood_order: genLikelihoodOrder,
  likely_unlikely: genLikelyUnlikely,
  likelihood_match: genLikelihoodMatch,
  simple_experiment: genExperiment,
  dice_impossible: genDiceImpossible,
  coin_equal_likely: genCoinEqualLikely,
  coin_prediction: genCoinPrediction,
  most_likely: genMostLikely,
  generic_year1: genGeneric,
};

const GROUP_GENERATOR_MAP = {
  'Counting & Place Value': ['place_value', 'before_after', 'skip_counting', 'number_line', 'hundreds_chart', 'number_words', 'compare_numbers', 'order_numbers'],
  'Addition & Subtraction within 20': ['addition_within_20', 'subtraction_within_20', 'missing_addend', 'true_false_addition', 'make_10', 'part_part_whole', 'doubles_near_doubles', 'fact_family', 'word_problem_add_subtract', 'two_step_addition', 'error_spotting'],
  'Odd & Even': ['odd_even', 'sort_odd_even'],
  Fractions: ['fraction_half_quarter', 'equal_parts'],
  Money: ['money_coin_value', 'money_change', 'coin_name', 'money_enough'],
  'Repeating Patterns': ['repeating_pattern', 'pattern_missing', 'pattern_rule', 'pattern_error'],
  'Understanding Equals': ['equals_balance', 'equals_true_false', 'equals_symbol'],
  'Number Patterns': ['number_pattern', 'skip_counting'],
  Length: ['length_compare', 'length_order', 'informal_units'],
  'Mass & Capacity': ['mass_capacity', 'capacity_compare'],
  Time: ['read_clock', 'calendar_order', 'activity_duration'],
  '2D Shapes': ['shape_2d', 'shape_true_false', 'shape_sort'],
  '3D Objects': ['shape_3d', 'shape_3d_true_false'],
  'Position & Direction': ['position_words', 'follow_directions', 'grid_map'],
  'Data Collection': ['tally_chart', 'tally_complete', 'data_most_least', 'data_compare_more', 'survey_question'],
  Graphs: ['graph_reading', 'graph_tallest_shortest', 'graph_true_false', 'picture_graph_build', 'graph_title', 'data_most_least'],
  'Likelihood Language': ['likelihood_language', 'likelihood_order', 'likely_unlikely', 'likelihood_match'],
  'Simple Experiments': ['simple_experiment', 'dice_impossible', 'most_likely', 'coin_equal_likely', 'coin_prediction'],
  'Chance': ['likelihood_language', 'likelihood_match'],
  'Algebra Review': ['algebra_yr11'],
  'Numbers and surds': ['algebra_yr11'],
  'Functions and graphs': ['algebra_yr11'],
};

const TOPIC_GENERATOR_MAP = {
  'y1-num-001': ['before_after', 'skip_counting'],
  'y1-num-002': ['skip_counting', 'number_pattern'],
  'y1-num-003': ['before_after', 'number_line'],
  'y1-num-004': ['place_value', 'compare_numbers'],
  'y1-num-005': ['place_value', 'number_words'],
  'y1-num-006': ['number_line', 'before_after'],
  'y1-num-007': ['hundreds_chart', 'before_after'],
  'y1-num-008': ['order_numbers', 'compare_numbers'],
  'y1-num-009': ['number_words', 'compare_numbers'],
  'y1-num-010': ['addition_within_20', 'part_part_whole'],
  'y1-num-011': ['missing_addend', 'equals_balance'],
  'y1-num-012': ['missing_addend', 'part_part_whole'],
  'y1-num-013': ['true_false_addition', 'error_spotting'],
  'y1-num-014': ['number_line', 'addition_within_20'],
  'y1-num-015': ['addition_within_20', 'part_part_whole'],
  'y1-num-016': ['make_10', 'addition_within_20'],
  'y1-num-017': ['part_part_whole', 'missing_addend'],
  'y1-num-018': ['doubles_near_doubles', 'addition_within_20'],
  'y1-num-019': ['fact_family', 'missing_addend'],
  'y1-num-020': ['fact_family', 'subtraction_within_20'],
  'y1-num-021': ['word_problem_add_subtract', 'subtraction_within_20', 'addition_within_20'],
  'y1-num-022': ['error_spotting', 'true_false_addition'],
  'y1-num-023': ['two_step_addition', 'word_problem_add_subtract'],
  'y1-num-024': ['odd_even', 'sort_odd_even'],
  'y1-num-025': ['sort_odd_even', 'odd_even'],
  'y1-num-026': ['sort_odd_even', 'odd_even'],
  'y1-num-027': ['odd_even', 'sort_odd_even'],
  'y1-num-028': ['odd_even', 'sort_odd_even'],
  'y1-num-029': ['odd_even', 'sort_odd_even'],
  'y1-num-030': ['sort_odd_even', 'odd_even'],
  'y1-num-031': ['fraction_half_quarter', 'equal_parts'],
  'y1-num-032': ['fraction_half_quarter', 'equal_parts'],
  'y1-num-033': ['equal_parts', 'fraction_half_quarter'],
  'y1-num-034': ['equal_parts', 'fraction_half_quarter'],
  'y1-num-035': ['fraction_half_quarter', 'equal_parts'],
  'y1-num-036': ['fraction_half_quarter', 'word_problem_add_subtract'],
  'y1-num-037': ['fraction_half_quarter', 'equal_parts'],
  'y1-num-038': ['coin_name', 'money_coin_value'],
  'y1-num-039': ['money_coin_value', 'coin_name'],
  'y1-num-040': ['money_coin_value', 'money_enough'],
  'y1-num-041': ['coin_name', 'money_coin_value'],
  'y1-num-042': ['money_enough', 'money_change'],
  'y1-num-043': ['coin_name', 'money_coin_value'],
  'y1-num-044': ['money_change', 'money_enough'],
  'y1-alg-001': ['repeating_pattern', 'pattern_missing'],
  'y1-alg-002': ['repeating_pattern', 'pattern_missing'],
  'y1-alg-003': ['pattern_missing', 'repeating_pattern'],
  'y1-alg-004': ['repeating_pattern', 'pattern_rule'],
  'y1-alg-005': ['pattern_rule', 'repeating_pattern'],
  'y1-alg-006': ['pattern_error', 'pattern_missing'],
  'y1-alg-007': ['pattern_rule', 'repeating_pattern'],
  'y1-alg-008': ['equals_true_false', 'equals_balance'],
  'y1-alg-009': ['equals_balance', 'missing_addend'],
  'y1-alg-010': ['equals_balance', 'part_part_whole'],
  'y1-alg-011': ['equals_symbol', 'equals_true_false'],
  'y1-alg-012': ['equals_balance', 'equals_symbol'],
  'y1-alg-013': ['number_pattern', 'skip_counting'],
  'y1-alg-014': ['number_pattern', 'pattern_rule'],
  'y1-alg-015': ['number_pattern', 'skip_counting'],
  'y1-alg-016': ['number_pattern', 'pattern_error'],
  'y1-alg-017': ['number_pattern', 'skip_counting'],
  'y1-mea-001': ['length_compare', 'length_order'],
  'y1-mea-002': ['length_order', 'length_compare'],
  'y1-mea-003': ['informal_units', 'length_compare'],
  'y1-mea-004': ['informal_units', 'length_order'],
  'y1-mea-005': ['length_compare', 'length_order'],
  'y1-mea-006': ['informal_units', 'length_compare'],
  'y1-mea-007': ['mass_capacity', 'capacity_compare'],
  'y1-mea-008': ['mass_capacity', 'capacity_compare'],
  'y1-mea-009': ['capacity_compare', 'mass_capacity'],
  'y1-mea-010': ['mass_capacity', 'capacity_compare'],
  'y1-mea-011': ['mass_capacity', 'capacity_compare'],
  'y1-mea-012': ['capacity_compare', 'mass_capacity'],
  'y1-mea-013': ['read_clock', 'calendar_order'],
  'y1-mea-014': ['read_clock', 'activity_duration'],
  'y1-mea-015': ['calendar_order', 'activity_duration'],
  'y1-mea-016': ['calendar_order', 'activity_duration'],
  'y1-mea-017': ['calendar_order', 'activity_duration'],
  'y1-mea-018': ['calendar_order', 'activity_duration'],
  'y1-mea-019': ['activity_duration', 'calendar_order'],
  'y1-mea-020': ['calendar_order', 'activity_duration'],
  'y1-spa-001': ['shape_2d', 'shape_sort'],
  'y1-spa-002': ['shape_2d', 'shape_true_false'],
  'y1-spa-003': ['shape_sort', 'shape_2d'],
  'y1-spa-004': ['shape_sort', 'shape_true_false'],
  'y1-spa-005': ['shape_true_false', 'shape_2d'],
  'y1-spa-006': ['shape_2d', 'shape_true_false'],
  'y1-spa-007': ['shape_sort', 'shape_2d'],
  'y1-spa-008': ['shape_3d', 'shape_3d_true_false'],
  'y1-spa-009': ['shape_3d', 'shape_3d_true_false'],
  'y1-spa-010': ['shape_3d', 'shape_3d_true_false'],
  'y1-spa-011': ['shape_3d', 'shape_3d_true_false'],
  'y1-spa-012': ['shape_3d', 'shape_3d_true_false'],
  'y1-spa-013': ['shape_3d_true_false', 'shape_3d'],
  'y1-spa-014': ['position_words', 'follow_directions'],
  'y1-spa-015': ['follow_directions', 'grid_map'],
  'y1-spa-016': ['position_words', 'follow_directions'],
  'y1-spa-017': ['position_words', 'grid_map'],
  'y1-spa-018': ['grid_map', 'follow_directions'],
  'y1-spa-019': ['grid_map', 'follow_directions'],
  'y1-sta-001': ['tally_chart', 'tally_complete'],
  'y1-sta-002': ['tally_complete', 'tally_chart'],
  'y1-sta-003': ['data_most_least', 'graph_tallest_shortest'],
  'y1-sta-004': ['data_compare_more', 'graph_reading'],
  'y1-sta-005': ['survey_question', 'graph_title'],
  'y1-sta-006': ['graph_reading', 'picture_graph_build'],
  'y1-sta-007': ['graph_tallest_shortest', 'data_most_least'],
  'y1-sta-008': ['graph_reading', 'data_compare_more'],
  'y1-sta-009': ['graph_true_false', 'data_most_least'],
  'y1-sta-010': ['picture_graph_build', 'graph_reading'],
  'y1-sta-011': ['graph_title', 'graph_reading'],
  'y1-pro-001': ['likelihood_language', 'likelihood_match'],
  'y1-pro-002': ['likelihood_order', 'likelihood_language'],
  'y1-pro-003': ['likelihood_language', 'likely_unlikely'],
  'y1-pro-004': ['likely_unlikely', 'likelihood_language'],
  'y1-pro-005': ['likelihood_match', 'likelihood_language'],
  'y1-pro-006': ['simple_experiment', 'coin_prediction'],
  'y1-pro-007': ['dice_impossible', 'simple_experiment'],
  'y1-pro-008': ['most_likely', 'likelihood_language'],
  'y1-pro-009': ['coin_equal_likely', 'simple_experiment'],
  'y1-pro-010': ['coin_prediction', 'simple_experiment'],
};

const normalizeInput = (input, maybeDifficulty) => {
  if (typeof input === 'number') return { year: `Year ${input}`, difficulty: normalizeDifficulty(maybeDifficulty) };
  if (typeof input === 'string') return { year: DEFAULT_YEAR, difficulty: normalizeDifficulty(input) };
  return {
    year: input?.year || DEFAULT_YEAR,
    course: input?.course || 'Advanced',
    chapterId: input?.chapterId,
    topicId: input?.topicId,
    difficulty: normalizeDifficulty(input?.difficulty),
    type: input?.type,
    assignedChapters: input?.assignedChapters || [],
    assignedTopics: input?.assignedTopics || [],
  };
};

export const generateQuestion = (input = {}, maybeDifficulty) => {
  const config = normalizeInput(input, maybeDifficulty);
  let targets = getQuestionTargets({
    year: config.year,
    course: config.course,
    assignedChapters: config.assignedChapters,
    assignedTopics: config.assignedTopics,
  });

  if (config.chapterId) targets = targets.filter(target => target.chapterId === config.chapterId);
  if (config.topicId) targets = targets.filter(target => target.topicId === config.topicId);
  if (!targets.length) targets = getQuestionTargets({ year: config.year });

  const target = pick(targets);
  const selectedType = config.type || pickGeneratorType(target.generatorTypes);
  const generator = GENERATORS_BY_TYPE[selectedType] || genGeneric;

  return {
    ...generator(config.difficulty),
    year: target.year,
    chapterId: target.chapterId,
    chapterTitle: target.chapterTitle,
    topicId: target.topicId,
    topicCode: target.topicCode,
    topicTitle: target.topicTitle,
    topicGroup: target.topicGroup,
    generatorType: selectedType,
    difficulty: config.difficulty,
    isManual: false,
  };
};

export const questionGenerator = {
  QUESTION_BLUEPRINTS,
  DEFAULT_DIFFICULTY_MIX,
  getQuestionTargets,
  getQuestionBlueprint,
  generateQuestion,
};
