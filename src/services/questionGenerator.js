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
  const years = Array.isArray(year) ? year : [year];
  const courses = Array.isArray(course) ? course : [course];
  
  let allTargets = [];
  
  years.forEach(y => {
    let chapters = CURRICULUM_DATA[y];
    if (!chapters) return;
    
    let yearChapters = [];
    if (Array.isArray(chapters)) {
      yearChapters = chapters;
    } else {
      // For Year 11/12 with nested courses
      courses.forEach(c => {
        if (chapters[c]) {
          yearChapters = [...yearChapters, ...chapters[c]];
        }
      });
      // Fallback if none of the requested courses exist for this year
      if (yearChapters.length === 0) {
        yearChapters = chapters['Advanced'] || Object.values(chapters)[0] || [];
      }
    }

    const chapterSet = new Set(assignedChapters || []);
    const topicSet = new Set(assignedTopics || []);
    const scopedChapters = chapterSet.size > 0 ? yearChapters.filter(chapter => chapterSet.has(chapter.id)) : yearChapters;

    const targets = scopedChapters.flatMap(chapter => (chapter.topics || []).map(topic => {
      const inferredTypes = inferPrimaryGeneratorTypes({
        year: y,
        chapterTitle: chapter.title,
        topicTitle: topic.title,
        topicGroup: topic.group || '',
      });

      return {
        year: y,
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        topicId: topic.id,
        topicCode: topic.code || '',
        topicTitle: topic.title,
        topicGroup: topic.group || '',
        generatorTypes: TOPIC_GENERATOR_MAP[topic.id] || GROUP_GENERATOR_MAP[topic.group] || inferredTypes || (['Year 11', 'Year 12'].includes(y) ? ['algebra_yr11'] : ['generic_year1']),
      };
    }));
    
    allTargets = [...allTargets, ...targets];
  });

  if (assignedTopics.length > 0) {
    const topicSet = new Set(assignedTopics);
    allTargets = allTargets.filter(target => topicSet.has(target.topicId));
  }
  
  // Final fallback to Year 1 if still nothing found
  if (allTargets.length === 0) {
    const firstYear = years[0] || DEFAULT_YEAR;
    if (['Year 11', 'Year 12'].includes(firstYear)) {
      const fallbackId = firstYear === 'Year 11' ? 'y11a-1' : 'y12adv-ch1';
      return getQuestionTargets({ year: firstYear, course: 'Advanced', assignedChapters: [fallbackId] });
    }
    return getQuestionTargets({ year: DEFAULT_YEAR, assignedChapters: [DEFAULT_CHAPTER_ID] });
  }

  return allTargets;
};

export const getQuestionBlueprint = (year = DEFAULT_YEAR, chapterId = DEFAULT_CHAPTER_ID) => (
  QUESTION_BLUEPRINTS[year]?.[chapterId] || null
);

const q = (type, question, options, answer, solution, timeLimit = 30, hint = '', extras = {}) => ({ 
  type, 
  question, 
  options, 
  answer, 
  solution, 
  timeLimit,
  hint: hint || solution, // Use solution as fallback hint if not provided
  ...extras,
});

const svgDataUrl = (svg) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
const questionSvg = (content, width = 420, height = 240) => svgDataUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Maths diagram">
    <rect width="${width}" height="${height}" rx="22" fill="#f8fafc"/>
    <defs>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#64748b" flood-opacity="0.18"/>
      </filter>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
      </marker>
    </defs>
    ${content}
  </svg>
`);

const labelText = (x, y, text, size = 18, color = '#334155') => (
  `<text x="${x}" y="${y}" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="800" fill="${color}">${text}</text>`
);

const draw2DShapeSvg = (shapeName) => {
  const fill = '#ede9fe';
  const stroke = '#8b5cf6';
  const shapeMap = {
    triangle: `<polygon points="210,42 102,190 318,190" fill="${fill}" stroke="${stroke}" stroke-width="7" filter="url(#shadow)"/>`,
    square: `<rect x="125" y="45" width="170" height="170" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="7" filter="url(#shadow)"/>`,
    rectangle: `<rect x="88" y="62" width="244" height="138" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="7" filter="url(#shadow)"/>`,
    pentagon: `<polygon points="210,38 330,122 284,210 136,210 90,122" fill="${fill}" stroke="${stroke}" stroke-width="7" filter="url(#shadow)"/>`,
    hexagon: `<polygon points="138,54 282,54 350,132 282,210 138,210 70,132" fill="${fill}" stroke="${stroke}" stroke-width="7" filter="url(#shadow)"/>`,
  };
  return questionSvg(`${shapeMap[shapeName] || shapeMap.rectangle}${labelText(210, 228, shapeName, 16, '#6d28d9')}`);
};

const drawRectangleMeasureSvg = (length, width) => questionSvg(`
  <rect x="92" y="58" width="236" height="128" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="6" filter="url(#shadow)"/>
  <line x1="92" y1="205" x2="328" y2="205" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <line x1="62" y1="58" x2="62" y2="186" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  ${labelText(210, 228, `${length} cm`, 18)}
  <text x="42" y="127" text-anchor="middle" transform="rotate(-90 42 127)" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="800" fill="#334155">${width} cm</text>
`);

const drawTriangleAreaSvg = (base, height) => questionSvg(`
  <polygon points="104,190 328,190 248,54" fill="#dcfce7" stroke="#16a34a" stroke-width="6" filter="url(#shadow)"/>
  <line x1="248" y1="54" x2="248" y2="190" stroke="#64748b" stroke-width="3" stroke-dasharray="8 7"/>
  <path d="M248 170 L268 170 L268 190" fill="none" stroke="#64748b" stroke-width="3"/>
  <line x1="104" y1="210" x2="328" y2="210" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  ${labelText(216, 232, `base ${base} cm`, 17)}
  <text x="276" y="128" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="800" fill="#334155">height ${height} cm</text>
`);

const drawCompositeAreaSvg = (length, width, extra) => questionSvg(`
  <path d="M84 188 H340 V82 H250 V46 H84 Z" fill="#fef3c7" stroke="#d97706" stroke-width="6" filter="url(#shadow)"/>
  <line x1="84" y1="208" x2="250" y2="208" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <line x1="250" y1="208" x2="340" y2="208" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  ${labelText(167, 232, `${length} cm`, 16)}
  ${labelText(295, 232, `${extra} cm`, 16)}
  <text x="62" y="121" text-anchor="middle" transform="rotate(-90 62 121)" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="800" fill="#334155">${width} cm</text>
`);

const drawStraightAngleSvg = (angle) => questionSvg(`
  <line x1="68" y1="170" x2="352" y2="170" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <line x1="210" y1="170" x2="128" y2="76" stroke="#8b5cf6" stroke-width="6" stroke-linecap="round"/>
  <path d="M170 170 A40 40 0 0 1 184 140" fill="none" stroke="#f97316" stroke-width="5"/>
  <path d="M238 170 A54 54 0 0 0 173 112" fill="none" stroke="#0284c7" stroke-width="5"/>
  ${labelText(152, 154, `${angle}°`, 17, '#c2410c')}
  ${labelText(236, 123, 'x', 22, '#0369a1')}
`);

const drawTriangleAnglesSvg = (a, b) => questionSvg(`
  <polygon points="104,188 326,188 220,54" fill="#fee2e2" stroke="#e11d48" stroke-width="6" filter="url(#shadow)"/>
  <path d="M128 188 A28 28 0 0 1 144 166" fill="none" stroke="#334155" stroke-width="4"/>
  <path d="M303 188 A30 30 0 0 0 286 163" fill="none" stroke="#334155" stroke-width="4"/>
  <path d="M204 75 A30 30 0 0 0 236 75" fill="none" stroke="#334155" stroke-width="4"/>
  ${labelText(146, 178, `${a}°`, 16)}
  ${labelText(292, 178, `${b}°`, 16)}
  ${labelText(220, 92, 'x', 22, '#be123c')}
`);

const drawRectangularPrismSvg = (l, w, h) => questionSvg(`
  <polygon points="112,90 260,90 318,132 168,132" fill="#dbeafe" stroke="#2563eb" stroke-width="5"/>
  <polygon points="168,132 318,132 318,196 168,196" fill="#bfdbfe" stroke="#2563eb" stroke-width="5"/>
  <polygon points="112,90 168,132 168,196 112,154" fill="#eff6ff" stroke="#2563eb" stroke-width="5"/>
  <line x1="168" y1="212" x2="318" y2="212" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <line x1="332" y1="132" x2="332" y2="196" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <line x1="105" y1="168" x2="150" y2="202" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  ${labelText(243, 235, `${l} cm`, 15)}
  <text x="352" y="169" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="800" fill="#334155">${h} cm</text>
  <text x="88" y="196" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="800" fill="#334155">${w} cm</text>
`);

const drawCubeNetSvg = () => questionSvg(`
  <g transform="translate(105 34)" filter="url(#shadow)">
    <rect x="72" y="0" width="60" height="60" fill="#ede9fe" stroke="#7c3aed" stroke-width="4"/>
    <rect x="72" y="60" width="60" height="60" fill="#ede9fe" stroke="#7c3aed" stroke-width="4"/>
    <rect x="12" y="60" width="60" height="60" fill="#ede9fe" stroke="#7c3aed" stroke-width="4"/>
    <rect x="132" y="60" width="60" height="60" fill="#ede9fe" stroke="#7c3aed" stroke-width="4"/>
    <rect x="72" y="120" width="60" height="60" fill="#ede9fe" stroke="#7c3aed" stroke-width="4"/>
    <rect x="72" y="180" width="60" height="60" fill="#ede9fe" stroke="#7c3aed" stroke-width="4"/>
  </g>
`);

const draw3DObjectSvg = (objectName) => {
  const diagrams = {
    sphere: `
      <circle cx="210" cy="124" r="78" fill="#dbeafe" stroke="#2563eb" stroke-width="6" filter="url(#shadow)"/>
      <ellipse cx="210" cy="124" rx="74" ry="22" fill="none" stroke="#60a5fa" stroke-width="4"/>
      <path d="M170 60 C210 92 210 158 170 188" fill="none" stroke="#93c5fd" stroke-width="4"/>
    `,
    cube: `
      <polygon points="140,86 234,86 284,126 190,126" fill="#ede9fe" stroke="#7c3aed" stroke-width="5"/>
      <polygon points="190,126 284,126 284,202 190,202" fill="#ddd6fe" stroke="#7c3aed" stroke-width="5"/>
      <polygon points="140,86 190,126 190,202 140,162" fill="#f5f3ff" stroke="#7c3aed" stroke-width="5"/>
    `,
    cylinder: `
      <ellipse cx="210" cy="76" rx="76" ry="28" fill="#dcfce7" stroke="#16a34a" stroke-width="5"/>
      <path d="M134 76 V176 C134 192 168 206 210 206 C252 206 286 192 286 176 V76" fill="#bbf7d0" stroke="#16a34a" stroke-width="5"/>
      <ellipse cx="210" cy="176" rx="76" ry="28" fill="none" stroke="#16a34a" stroke-width="5"/>
    `,
    cone: `
      <path d="M210 44 L120 184 C120 206 300 206 300 184 Z" fill="#ffedd5" stroke="#f97316" stroke-width="5" filter="url(#shadow)"/>
      <ellipse cx="210" cy="184" rx="90" ry="28" fill="#fed7aa" stroke="#f97316" stroke-width="5"/>
    `,
  };
  return questionSvg(`${diagrams[objectName] || diagrams.cube}${labelText(210, 228, objectName, 16, '#334155')}`);
};

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
  return q('shape_2d', question, options, answer, `A ${shape.name} has ${shape.sides} sides and ${shape.corners} corners.`, 25, '', {
    questionImage: draw2DShapeSvg(shape.name),
  });
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
  return q('shape_sort', `Which shape belongs in the group with 3 sides?`, ['triangle', 'square', 'rectangle', 'hexagon'], answer, `A triangle has 3 sides.`, 20, '', {
    questionImage: draw2DShapeSvg(answer),
  });
};

const gen3DObject = () => {
  const object = pick(OBJECTS_3D);
  const mode = pick(['name', 'property', 'example']);
  if (mode === 'name') return q('shape_3d', `Which 3D object is shown? It is like a ${object.example}.`, wordOptions(object.name, OBJECTS_3D.map(o => o.name)), object.name, `A ${object.example} is shaped like a ${object.name}.`, 25, '', {
    questionImage: draw3DObjectSvg(object.name),
  });
  if (mode === 'property') return q('shape_3d', `How many corners does this ${object.name} have?`, getUniqueOptions(object.corners, [object.corners + 1, object.faces, object.edges], 0, 12), object.corners, `A ${object.name} has ${object.corners} corners.`, 25, '', {
    questionImage: draw3DObjectSvg(object.name),
  });
  return q('shape_3d', `Which object can ${object.can}?`, wordOptions(object.name, OBJECTS_3D.map(o => o.name)), object.name, `A ${object.name} can ${object.can}.`, 25, '', {
    questionImage: draw3DObjectSvg(object.name),
  });
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

const gcd = (a, b) => {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
};

const simplifiedFraction = (numerator, denominator) => {
  const divisor = gcd(numerator, denominator);
  return `${numerator / divisor}/${denominator / divisor}`;
};

const money = cents => `$${(cents / 100).toFixed(2)}`;

const genStagePlaceValue = (difficulty) => {
  const maxDigits = maxByDifficulty(difficulty, 4, 6, 9);
  const number = randomInt(10 ** (Math.min(maxDigits, 6) - 1), (10 ** Math.min(maxDigits, 6)) - 1);
  const digits = String(number).split('').map(Number);
  const idx = randomInt(0, digits.length - 1);
  const place = 10 ** (digits.length - idx - 1);
  const answer = digits[idx] * place;
  return q('stage_place_value', `In ${number.toLocaleString('en-AU')}, what is the value of the digit ${digits[idx]}?`, getUniqueOptions(answer, [digits[idx], answer / 10, answer * 10], 0, 100000000), answer, `The digit ${digits[idx]} is in the ${place.toLocaleString('en-AU')}s place, so its value is ${answer.toLocaleString('en-AU')}.`, 35);
};

const genStageRounding = (difficulty) => {
  const place = pick(difficulty === 'easy' ? [10, 100] : difficulty === 'medium' ? [10, 100, 1000] : [100, 1000, 10000]);
  const number = randomInt(place * 2, place * 90);
  const answer = Math.round(number / place) * place;
  return q('stage_rounding', `Round ${number.toLocaleString('en-AU')} to the nearest ${place.toLocaleString('en-AU')}.`, getUniqueOptions(answer, [answer - place, answer + place, number], 0, place * 100), answer, `Look at the digit to the right of the ${place.toLocaleString('en-AU')}s place, then round to ${answer.toLocaleString('en-AU')}.`, 35);
};

const genLargeAddSubtract = (difficulty) => {
  const max = maxByDifficulty(difficulty, 999, 9999, 99999);
  const a = randomInt(Math.floor(max / 5), max);
  const b = randomInt(100, Math.floor(max / 2));
  const subtract = Math.random() > 0.45;
  const answer = subtract ? a - b : a + b;
  const symbol = subtract ? '-' : '+';
  return q('large_add_subtract', `${a.toLocaleString('en-AU')} ${symbol} ${b.toLocaleString('en-AU')} = ?`, getUniqueOptions(answer, [answer + 10, answer - 10, subtract ? a + b : a - b], -100000, 150000), answer, subtract ? `${a.toLocaleString('en-AU')} - ${b.toLocaleString('en-AU')} = ${answer.toLocaleString('en-AU')}.` : `${a.toLocaleString('en-AU')} + ${b.toLocaleString('en-AU')} = ${answer.toLocaleString('en-AU')}.`, 55);
};

const genMoneyBudget = (difficulty) => {
  const prices = Array.from({ length: difficulty === 'hard' ? 4 : 3 }, () => randomInt(250, difficulty === 'easy' ? 2500 : 9500));
  const discount = pick(difficulty === 'easy' ? [10, 25] : [10, 20, 25, 50]);
  const total = prices.reduce((sum, value) => sum + value, 0);
  const answer = Math.round(total * (100 - discount) / 100);
  const question = `A basket costs ${prices.map(money).join(' + ')}. A ${discount}% discount is applied. What is the final cost?`;
  return q('money_budget', question, wordOptions(money(answer), [money(answer), money(total), money(answer + 500), money(Math.max(0, answer - 500))]), money(answer), `First add the prices: ${money(total)}. Then pay ${100 - discount}% of the total: ${money(answer)}.`, 75, `Find the total first, then multiply by ${(100 - discount) / 100}.`);
};

const genMultiplicationDivision = (difficulty) => {
  const mode = pick(['multiply', 'divide', 'word']);
  if (mode === 'divide') {
    const divisor = randomInt(2, difficulty === 'hard' ? 12 : 9);
    const quotient = randomInt(12, difficulty === 'hard' ? 950 : 150);
    const remainder = difficulty === 'hard' ? randomInt(0, divisor - 1) : 0;
    const dividend = divisor * quotient + remainder;
    const answer = remainder ? `${quotient} r ${remainder}` : quotient;
    return q('multiplicative_relations', `${dividend} ÷ ${divisor} = ?`, remainder ? wordOptions(answer, [answer, `${quotient + 1} r ${remainder}`, `${quotient} r ${Math.max(0, remainder - 1)}`, `${quotient}`]) : getUniqueOptions(answer, [quotient - 1, quotient + 1, divisor], 0, 1000), answer, `${divisor} x ${quotient} = ${divisor * quotient}${remainder ? `, with ${remainder} left over` : ''}.`, 55);
  }
  if (mode === 'word') {
    const packs = randomInt(4, difficulty === 'hard' ? 24 : 12);
    const each = randomInt(6, difficulty === 'hard' ? 48 : 15);
    const answer = packs * each;
    return q('multiplicative_word_problem', `There are ${packs} boxes with ${each} pencils in each box. How many pencils are there altogether?`, getUniqueOptions(answer, [answer - each, answer + each, packs + each], 0, 2000), answer, `${packs} x ${each} = ${answer}.`, 60);
  }
  const a = randomInt(12, difficulty === 'hard' ? 999 : 99);
  const b = randomInt(3, difficulty === 'hard' ? 24 : 12);
  const answer = a * b;
  return q('multiplicative_relations', `${a} x ${b} = ?`, getUniqueOptions(answer, [answer + b, answer - b, a + b], 0, 25000), answer, `${a} x ${b} = ${answer}.`, 50);
};

const genOrderOperations = (difficulty) => {
  const a = randomInt(2, 9);
  const b = randomInt(2, 9);
  const c = randomInt(2, 9);
  const d = randomInt(2, 9);
  const hard = difficulty === 'hard';
  const expression = hard ? `${a} + (${b} x ${c}) - ${d}` : `${a} + ${b} x ${c}`;
  const answer = hard ? a + b * c - d : a + b * c;
  return q('order_operations', `Evaluate: ${expression}`, getUniqueOptions(answer, [hard ? (a + b) * c - d : (a + b) * c, answer + 2, answer - 2], -50, 150), answer, `Do multiplication and brackets before addition/subtraction: ${expression} = ${answer}.`, 45);
};

const genFractionStage = (difficulty) => {
  const mode = pick(['of_quantity', 'equivalent', 'add']);
  if (mode === 'of_quantity') {
    const denominator = pick([2, 3, 4, 5, 6, 8, 10]);
    const numerator = randomInt(1, Math.min(denominator - 1, difficulty === 'easy' ? 1 : 4));
    const whole = denominator * randomInt(4, difficulty === 'hard' ? 30 : 15);
    const answer = whole / denominator * numerator;
    return q('fraction_quantity', `What is ${numerator}/${denominator} of ${whole}?`, getUniqueOptions(answer, [whole / denominator, answer + denominator, whole - answer], 0, whole), answer, `One ${denominator}th of ${whole} is ${whole / denominator}; ${numerator}/${denominator} is ${answer}.`, 55);
  }
  if (mode === 'equivalent') {
    const denominator = pick([3, 4, 5, 6, 8]);
    const numerator = randomInt(1, denominator - 1);
    const factor = randomInt(2, difficulty === 'hard' ? 8 : 5);
    const answer = `${numerator * factor}/${denominator * factor}`;
    return q('equivalent_fractions', `Which fraction is equivalent to ${numerator}/${denominator}?`, wordOptions(answer, [answer, `${numerator + factor}/${denominator + factor}`, `${numerator}/${denominator * factor}`, `${denominator * factor}/${numerator * factor}`]), answer, `Multiply the numerator and denominator by ${factor}: ${numerator}/${denominator} = ${answer}.`, 45);
  }
  const denominator = pick([5, 6, 8, 10, 12]);
  const a = randomInt(1, Math.floor(denominator / 2));
  const b = randomInt(1, denominator - a - 1);
  const answer = simplifiedFraction(a + b, denominator);
  return q('fraction_add_subtract', `Calculate ${a}/${denominator} + ${b}/${denominator}. Give the answer in simplest form.`, wordOptions(answer, [answer, `${a + b}/${denominator}`, `${a + b}/${denominator * 2}`, `${a * b}/${denominator}`]), answer, `Same denominator: ${a}/${denominator} + ${b}/${denominator} = ${a + b}/${denominator} = ${answer}.`, 55);
};

const genDecimalPercent = (difficulty) => {
  const mode = pick(['decimal_place', 'percent_of', 'convert']);
  if (mode === 'percent_of') {
    const percent = pick(difficulty === 'easy' ? [10, 25, 50] : [5, 10, 20, 25, 40, 50, 75]);
    const whole = randomInt(4, 40) * 10;
    const answer = whole * percent / 100;
    return q('percent_quantity', `Find ${percent}% of ${whole}.`, getUniqueOptions(answer, [answer + 10, answer - 10, whole - answer], 0, whole), answer, `${percent}% means ${percent}/100. ${whole} x ${percent}/100 = ${answer}.`, 45);
  }
  if (mode === 'convert') {
    const pairs = [
      { f: '1/2', d: '0.5', p: '50%' },
      { f: '1/4', d: '0.25', p: '25%' },
      { f: '3/4', d: '0.75', p: '75%' },
      { f: '1/10', d: '0.1', p: '10%' },
    ];
    const item = pick(pairs);
    const answer = pick([item.d, item.p]);
    return q('fraction_decimal_percent', `Which value is equivalent to ${item.f}?`, wordOptions(answer, [item.d, item.p, '0.2', '20%', '0.05']), answer, `${item.f} = ${item.d} = ${item.p}.`, 35);
  }
  const number = (randomInt(100, 9999) / 1000).toFixed(3);
  const digit = number.split('.')[1][2];
  return q('decimal_place_value', `In ${number}, what digit is in the thousandths place?`, getUniqueOptions(Number(digit), [Number(digit) + 1, Number(digit) - 1, Number(number[0])], 0, 9), Number(digit), `The third digit after the decimal point is the thousandths digit.`, 30);
};

const genIntegerNumberLine = (difficulty) => {
  const a = randomInt(-20, 20);
  const step = randomInt(2, difficulty === 'hard' ? 15 : 8);
  const add = Math.random() > 0.5;
  const answer = add ? a + step : a - step;
  return q('integers_number_line', `Start at ${a} on a number line and move ${step} ${add ? 'right' : 'left'}. Where do you land?`, getUniqueOptions(answer, [a, -answer, answer + 1], -50, 50), answer, `${add ? 'Right means add' : 'Left means subtract'} ${step}: the result is ${answer}.`, 35);
};

const genMeasurementStage = (difficulty) => {
  const mode = pick(['convert_length', 'mass', 'time']);
  if (mode === 'time') {
    const startHour = randomInt(8, 14);
    const duration = pick(difficulty === 'easy' ? [30, 45, 60] : [35, 50, 75, 95, 130]);
    const endHour = startHour + Math.floor(duration / 60);
    const endMin = duration % 60;
    const answer = `${endHour}:${String(endMin).padStart(2, '0')}`;
    return q('duration_time', `A train leaves at ${startHour}:00 and the trip takes ${duration} minutes. What time does it arrive?`, wordOptions(answer, [answer, `${startHour}:${String(duration).padStart(2, '0')}`, `${endHour + 1}:${String(endMin).padStart(2, '0')}`, `${endHour}:00`]), answer, `${duration} minutes after ${startHour}:00 is ${answer}.`, 50);
  }
  if (mode === 'mass') {
    const kg = randomInt(1, 9);
    const grams = kg * 1000;
    return q('metric_mass', `Convert ${kg} kg to grams.`, getUniqueOptions(grams, [kg * 100, grams + 1000, grams / 10], 0, 20000), grams, `1 kg = 1000 g, so ${kg} kg = ${grams} g.`, 35);
  }
  const metres = randomInt(2, difficulty === 'hard' ? 25 : 12);
  const answer = metres * 100;
  return q('metric_length', `Convert ${metres} m to centimetres.`, getUniqueOptions(answer, [metres * 10, answer + 100, metres * 1000], 0, 30000), answer, `1 m = 100 cm, so ${metres} m = ${answer} cm.`, 35);
};

const genTemperatureStage = (difficulty) => {
  const mode = pick(['compare', 'difference']);
  const morning = randomInt(-5, difficulty === 'hard' ? 18 : 25);
  const afternoon = morning + randomInt(3, difficulty === 'hard' ? 22 : 12);
  if (mode === 'difference') {
    const answer = afternoon - morning;
    return q('temperature_difference', `The temperature was ${morning} degrees C in the morning and ${afternoon} degrees C in the afternoon. How many degrees did it rise?`, getUniqueOptions(answer, [answer + 2, answer - 2, afternoon], 0, 40), answer, `${afternoon} - ${morning} = ${answer} degrees C.`, 40);
  }
  const answer = afternoon > morning ? 'afternoon' : 'morning';
  return q('temperature_compare', `Which was warmer: ${morning} degrees C in the morning or ${afternoon} degrees C in the afternoon?`, ['morning', 'afternoon'], answer, `Compare the temperatures. ${afternoon} degrees C is warmer than ${morning} degrees C.`, 30);
};

const genPerimeterArea = (difficulty) => {
  const mode = pick(['perimeter', 'rectangle_area', 'triangle_area', 'composite']);
  const length = randomInt(4, difficulty === 'hard' ? 25 : 14);
  const width = randomInt(3, difficulty === 'hard' ? 18 : 10);
  if (mode === 'triangle_area') {
    const base = randomInt(6, 20);
    const height = randomInt(4, 16);
    const answer = base * height / 2;
    return q('area_triangle', `Use the diagram to find the area of the triangle.`, getUniqueOptions(answer, [base * height, answer + base, answer - height], 0, 300), answer, `Area of a triangle = 1/2 x base x height = 1/2 x ${base} x ${height} = ${answer} cm^2.`, 55, `The base and height are shown on the diagram.`, {
      questionImage: drawTriangleAreaSvg(base, height),
    });
  }
  if (mode === 'rectangle_area') {
    const answer = length * width;
    return q('area_rectangle', `Use the diagram to find the area of the rectangle.`, getUniqueOptions(answer, [2 * (length + width), answer + length, answer - width], 0, 600), answer, `Area = length x width = ${length} x ${width} = ${answer} cm^2.`, 45, `Area means length multiplied by width.`, {
      questionImage: drawRectangleMeasureSvg(length, width),
    });
  }
  if (mode === 'composite') {
    const extra = randomInt(2, 8);
    const answer = length * width + extra * width;
    return q('area_composite', `Use the diagram to find the total area of the composite shape.`, getUniqueOptions(answer, [length * width, answer + width, answer - width], 0, 800), answer, `Add the two rectangle areas: ${length * width} + ${extra * width} = ${answer} cm^2.`, 65, `Split the L-shape into two rectangles.`, {
      questionImage: drawCompositeAreaSvg(length, width, extra),
    });
  }
  const answer = 2 * (length + width);
  return q('perimeter_rectangle', `Use the diagram to find the perimeter of the rectangle.`, getUniqueOptions(answer, [length * width, answer + 2, answer - 2], 0, 200), answer, `Perimeter = 2 x (${length} + ${width}) = ${answer} cm.`, 45, `Add all four side lengths.`, {
    questionImage: drawRectangleMeasureSvg(length, width),
  });
};

const genAnglesStage = (difficulty) => {
  const mode = pick(['straight', 'point', 'triangle']);
  if (mode === 'point') {
    const a = randomInt(40, 140);
    const b = randomInt(40, 140);
    const c = randomInt(30, 360 - a - b - 20);
    const answer = 360 - a - b - c;
    return q('angles_at_point', `Angles around a point are ${a} degrees, ${b} degrees, ${c} degrees and x. Find x.`, getUniqueOptions(answer, [180 - answer, answer + 10, answer - 10], 0, 360), answer, `Angles around a point add to 360 degrees. x = 360 - ${a} - ${b} - ${c} = ${answer} degrees.`, 50);
  }
  if (mode === 'triangle') {
    const a = randomInt(35, 80);
    const b = randomInt(35, 80);
    const answer = 180 - a - b;
    return q('angles_triangle', `Use the diagram to find the missing angle x.`, getUniqueOptions(answer, [180 - answer, answer + 10, answer - 10], 0, 180), answer, `Angles in a triangle add to 180 degrees. x = ${answer} degrees.`, 45, `Angles in a triangle add to 180 degrees.`, {
      questionImage: drawTriangleAnglesSvg(a, b),
    });
  }
  const angle = randomInt(30, 150);
  const answer = 180 - angle;
  return q('angles_straight_line', `Use the diagram to find the missing angle x.`, getUniqueOptions(answer, [angle, answer + 10, answer - 10], 0, 180), answer, `Angles on a straight line add to 180 degrees. x = 180 - ${angle} = ${answer} degrees.`, 40, `Angles on a straight line add to 180 degrees.`, {
    questionImage: drawStraightAngleSvg(angle),
  });
};

const genCoordinateStage = (difficulty) => {
  const range = difficulty === 'easy' ? [0, 8] : [-8, 8];
  const x1 = randomInt(range[0], range[1]);
  const y1 = randomInt(range[0], range[1]);
  const dx = randomInt(1, 6);
  const dy = randomInt(1, 6);
  const x2 = x1 + dx;
  const y2 = y1 + dy;
  const mode = pick(['midpoint', 'gradient', 'translate']);
  if (mode === 'gradient') {
    const answer = simplifiedFraction(dy, dx);
    return q('coordinate_gradient', `Find the gradient of the line through (${x1}, ${y1}) and (${x2}, ${y2}).`, wordOptions(answer, [answer, simplifiedFraction(dx, dy), `${dy + dx}/${dx}`, `${dy}/${dx + dy}`]), answer, `Gradient = rise/run = (${y2} - ${y1}) / (${x2} - ${x1}) = ${answer}.`, 55);
  }
  if (mode === 'translate') {
    const right = randomInt(-5, 5);
    const up = randomInt(-5, 5);
    const answer = `(${x1 + right}, ${y1 + up})`;
    return q('coordinate_translation', `Point A(${x1}, ${y1}) is translated by (${right}, ${up}). What is the image of A?`, wordOptions(answer, [answer, `(${x1 - right}, ${y1 + up})`, `(${x1 + up}, ${y1 + right})`, `(${x1 + right}, ${y1 - up})`]), answer, `Add the translation to the coordinates: (${x1} + ${right}, ${y1} + ${up}) = ${answer}.`, 45);
  }
  const answer = `(${(x1 + x2) / 2}, ${(y1 + y2) / 2})`;
  return q('coordinate_midpoint', `Find the midpoint of (${x1}, ${y1}) and (${x2}, ${y2}).`, wordOptions(answer, [answer, `(${x1 + x2}, ${y1 + y2})`, `(${x2 - x1}, ${y2 - y1})`, `(${x1}, ${y2})`]), answer, `Average the x-coordinates and y-coordinates: ${answer}.`, 55);
};

const genSpatial2DStage = (difficulty) => {
  const mode = pick(['classify', 'symmetry', 'scale']);
  if (mode === 'symmetry') {
    const item = pick([
      { shape: 'square', lines: 4 },
      { shape: 'rectangle', lines: 2 },
      { shape: 'equilateral triangle', lines: 3 },
      { shape: 'regular pentagon', lines: 5 },
    ]);
    const diagramShape = item.shape.includes('triangle') ? 'triangle' : item.shape.includes('pentagon') ? 'pentagon' : item.shape;
    return q('symmetry_lines', `How many lines of symmetry does this ${item.shape} have?`, getUniqueOptions(item.lines, [item.lines - 1, item.lines + 1, item.lines * 2], 0, 10), item.lines, `A ${item.shape} has ${item.lines} line${item.lines === 1 ? '' : 's'} of symmetry.`, 35, `Imagine folding the shape so both sides match exactly.`, {
      questionImage: draw2DShapeSvg(diagramShape),
    });
  }
  if (mode === 'scale') {
    const length = randomInt(2, 9);
    const factor = randomInt(2, difficulty === 'hard' ? 5 : 3);
    const answer = length * factor;
    return q('enlargement_scale', `A side length of ${length} cm is enlarged by scale factor ${factor}. What is the new length?`, getUniqueOptions(answer, [length + factor, answer + factor, answer - factor], 0, 60), answer, `Multiply by the scale factor: ${length} x ${factor} = ${answer} cm.`, 35);
  }
  const shape = pick([
    { name: 'scalene triangle', property: 'no equal sides' },
    { name: 'isosceles triangle', property: 'two equal sides' },
    { name: 'parallelogram', property: 'opposite sides are parallel' },
    { name: 'rhombus', property: 'four equal sides' },
  ]);
  return q('shape_classification_stage', `Which shape has this property: ${shape.property}?`, wordOptions(shape.name, ['scalene triangle', 'isosceles triangle', 'parallelogram', 'rhombus']), shape.name, `A ${shape.name} has ${shape.property}.`, 35);
};

const genSpatial3DStage = (difficulty) => {
  const mode = pick(['property', 'net', 'volume']);
  if (mode === 'volume') {
    const l = randomInt(3, difficulty === 'hard' ? 15 : 8);
    const w = randomInt(2, difficulty === 'hard' ? 10 : 6);
    const h = randomInt(2, difficulty === 'hard' ? 9 : 5);
    const answer = l * w * h;
    return q('volume_rectangular_prism', `Use the diagram to find the volume of the rectangular prism.`, getUniqueOptions(answer, [l * w, 2 * (l*w + l*h + w*h), answer + l], 0, 2000), answer, `Volume = length x width x height = ${l} x ${w} x ${h} = ${answer} cm^3.`, 55, `Volume of a rectangular prism is length x width x height.`, {
      questionImage: drawRectangularPrismSvg(l, w, h),
    });
  }
  if (mode === 'net') {
    const answer = 'cube';
    return q('net_3d_object', `Which 3D object can this net form?`, ['cube', 'cone', 'sphere', 'cylinder'], answer, `A cube has 6 square faces, so its net can be made from 6 equal squares.`, 35, `Count the equal square faces in the net.`, {
      questionImage: drawCubeNetSvg(),
    });
  }
  const prism = pick([
    { name: 'cube', faces: 6, edges: 12, vertices: 8 },
    { name: 'rectangular prism', faces: 6, edges: 12, vertices: 8 },
    { name: 'triangular prism', faces: 5, edges: 9, vertices: 6 },
    { name: 'square pyramid', faces: 5, edges: 8, vertices: 5 },
  ]);
  const ask = pick(['faces', 'edges', 'vertices']);
  const answer = prism[ask];
  return q('solid_properties_stage', `How many ${ask} does a ${prism.name} have?`, getUniqueOptions(answer, [answer - 1, answer + 1, prism.faces], 0, 15), answer, `A ${prism.name} has ${prism.faces} faces, ${prism.edges} edges and ${prism.vertices} vertices.`, 35);
};

const genDataStage = (difficulty) => {
  const scale = pick(difficulty === 'easy' ? [2, 5] : [2, 5, 10, 20]);
  const cats = randomInt(2, 8);
  const dogs = randomInt(2, 8);
  const answer = (cats + dogs) * scale;
  return q('scaled_data_display', `In a column graph, each unit represents ${scale} students. Cats have ${cats} units and dogs have ${dogs} units. How many students is that altogether?`, getUniqueOptions(answer, [cats + dogs, answer - scale, answer + scale], 0, 400), answer, `Total units = ${cats + dogs}. Each unit is worth ${scale}, so ${cats + dogs} x ${scale} = ${answer}.`, 45);
};

const genChanceStage = (difficulty) => {
  const red = randomInt(1, 6);
  const blue = randomInt(1, 6);
  const total = red + blue;
  const askRed = Math.random() > 0.5;
  const answer = simplifiedFraction(askRed ? red : blue, total);
  return q('probability_fraction', `A bag has ${red} red counters and ${blue} blue counters. What is the probability of choosing ${askRed ? 'red' : 'blue'}?`, wordOptions(answer, [answer, `${askRed ? blue : red}/${total}`, `${askRed ? red : blue}/${Math.max(red, blue)}`, `${total}/${askRed ? red : blue}`]), answer, `Probability = favourable outcomes / total outcomes = ${askRed ? red : blue}/${total} = ${answer}.`, 45);
};

const genProblemSolvingStage = (difficulty) => {
  const types = ['rate', 'multi_step_money', 'fraction_left'];
  const type = pick(types);
  if (type === 'fraction_left') {
    const total = randomInt(4, 18) * 6;
    const numerator = pick([1, 2, 3]);
    const denominator = 6;
    const used = total * numerator / denominator;
    const answer = total - used;
    return q('problem_solving_fraction', `A tank holds ${total} L. ${numerator}/${denominator} of the water is used. How many litres are left?`, getUniqueOptions(answer, [used, answer + 6, answer - 6], 0, total), answer, `${numerator}/${denominator} of ${total} is ${used}. Litres left = ${total} - ${used} = ${answer}.`, 75);
  }
  if (type === 'multi_step_money') {
    const price = randomInt(8, 40) * 100;
    const qty = randomInt(2, difficulty === 'hard' ? 8 : 5);
    const paid = Math.ceil((price * qty + randomInt(200, 1000)) / 500) * 500;
    const answer = paid - price * qty;
    return q('problem_solving_money', `${qty} notebooks cost ${money(price)} each. You pay ${money(paid)}. How much change should you receive?`, wordOptions(money(answer), [money(answer), money(price * qty), money(paid - price), money(answer + 100)]), money(answer), `Cost = ${qty} x ${money(price)} = ${money(price * qty)}. Change = ${money(paid)} - ${money(price * qty)} = ${money(answer)}.`, 75);
  }
  const time = randomInt(2, 6);
  const speed = randomInt(6, 30) * 5;
  const distance = speed * time;
  const answer = distance / time;
  return q('problem_solving_rate', `A cyclist travels ${distance} km in ${time} hours at a constant speed. What is the speed in km/h?`, getUniqueOptions(answer, [answer + 5, answer - 5, distance + time], 0, 200), answer, `Speed = distance ÷ time = ${distance} ÷ ${time} = ${answer} km/h.`, 60);
};

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
  stage_place_value: genStagePlaceValue,
  stage_rounding: genStageRounding,
  large_add_subtract: genLargeAddSubtract,
  money_budget: genMoneyBudget,
  multiplicative_relations: genMultiplicationDivision,
  multiplicative_word_problem: genMultiplicationDivision,
  order_operations: genOrderOperations,
  fraction_quantity: genFractionStage,
  equivalent_fractions: genFractionStage,
  fraction_add_subtract: genFractionStage,
  decimal_place_value: genDecimalPercent,
  percent_quantity: genDecimalPercent,
  fraction_decimal_percent: genDecimalPercent,
  integers_number_line: genIntegerNumberLine,
  metric_length: genMeasurementStage,
  metric_mass: genMeasurementStage,
  duration_time: genMeasurementStage,
  temperature_difference: genTemperatureStage,
  temperature_compare: genTemperatureStage,
  perimeter_rectangle: genPerimeterArea,
  area_rectangle: genPerimeterArea,
  area_triangle: genPerimeterArea,
  area_composite: genPerimeterArea,
  angles_straight_line: genAnglesStage,
  angles_at_point: genAnglesStage,
  angles_triangle: genAnglesStage,
  coordinate_midpoint: genCoordinateStage,
  coordinate_gradient: genCoordinateStage,
  coordinate_translation: genCoordinateStage,
  shape_classification_stage: genSpatial2DStage,
  symmetry_lines: genSpatial2DStage,
  enlargement_scale: genSpatial2DStage,
  solid_properties_stage: genSpatial3DStage,
  net_3d_object: genSpatial3DStage,
  volume_rectangular_prism: genSpatial3DStage,
  scaled_data_display: genDataStage,
  probability_fraction: genChanceStage,
  problem_solving_fraction: genProblemSolvingStage,
  problem_solving_money: genProblemSolvingStage,
  problem_solving_rate: genProblemSolvingStage,
  generic_year1: genGeneric,
};

const inferPrimaryGeneratorTypes = ({ year, chapterTitle = '', topicTitle = '', topicGroup = '' }) => {
  if (!['Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'].includes(year)) return null;

  const text = `${chapterTitle} ${topicTitle} ${topicGroup}`.toLowerCase();
  if (year === 'Year 2') {
    if (/whole number|place value|count|partition|round/.test(text)) return ['place_value', 'skip_counting', 'number_line', 'compare_numbers', 'stage_rounding'];
    if (/add|subtract|additive|money|unknown|inverse|fact/.test(text)) return ['addition_within_20', 'subtraction_within_20', 'missing_addend', 'word_problem_add_subtract', 'money_change'];
    if (/multiplication|division|equal group|array|skip/.test(text)) return ['skip_counting', 'multiplicative_word_problem', 'number_pattern'];
    if (/fraction|half|quarter|equal part/.test(text)) return ['fraction_half_quarter', 'equal_parts'];
    if (/length|area|volume|capacity|mass/.test(text)) return ['length_compare', 'length_order', 'informal_units', 'capacity_compare'];
    if (/time|calendar/.test(text)) return ['read_clock', 'calendar_order', 'activity_duration'];
    if (/2d|shape|position|grid|3d|object/.test(text)) return ['shape_2d', 'shape_true_false', 'shape_3d', 'grid_map'];
    if (/data|graph|table|tally/.test(text)) return ['tally_chart', 'graph_reading', 'data_compare_more', 'graph_tallest_shortest'];
    if (/chance|outcome|likely|unlikely/.test(text)) return ['likelihood_language', 'likely_unlikely', 'simple_experiment', 'most_likely'];
    return ['addition_within_20', 'subtraction_within_20', 'place_value'];
  }

  const types = [];
  const add = (...items) => items.forEach(item => {
    if (!types.includes(item)) types.push(item);
  });
  const isFractionTopic = /fraction|mixed numeral|improper|equivalent/.test(text);

  if (/problem|rate|ratio|real[- ]?life/.test(text)) add('problem_solving_money', 'problem_solving_fraction', 'problem_solving_rate');
  if (/place value|whole number|representing numbers|millions|thousands|\bpartition\b|\bregroup\b|expanded|\bround\b|order numbers|compare numbers/.test(text)) add('stage_place_value', 'stage_rounding', 'order_numbers', 'compare_numbers');
  if (/decimal|hundredth|thousandth/.test(text)) add('decimal_place_value', 'fraction_decimal_percent', 'stage_place_value');
  if (/percentage|percent|discount/.test(text)) add('percent_quantity', 'fraction_decimal_percent', 'money_budget');
  if (/negative|integer/.test(text)) add('integers_number_line', 'number_line');
  if (isFractionTopic) add('fraction_quantity', 'equivalent_fractions', 'fraction_add_subtract');
  if (!isFractionTopic && /additive|addition|subtraction|add and subtract|budget|money/.test(text)) add('large_add_subtract', 'money_budget', 'equals_balance');
  if (/multiplicative|\bmultiplication\b|\bdivision\b|\bmultiply\b|\bdivide\b|\bfactor\b|\bmultiple\b|bodmas|order of operations/.test(text)) add('multiplicative_relations', 'multiplicative_word_problem', 'order_operations');
  if (/length|perimeter|kilometre|metre|millimetre|centimetre|\bmetric\b/.test(text)) add('metric_length', 'perimeter_rectangle', 'problem_solving_rate');
  if (/temperature|celsius|thermometer/.test(text)) add('temperature_difference', 'temperature_compare');
  if (/mass|\bgrams?\b|\bkilograms?\b|capacity|litre|millilitre|volume/.test(text)) add('metric_mass', 'volume_rectangular_prism', 'metric_length');
  if (/time|duration|timetable|24-hour|timezone|analogue|digital/.test(text)) add('duration_time', 'read_clock');
  if (/angle|turn|straight line|point|degrees|protractor/.test(text)) add('angles_straight_line', 'angles_triangle', 'angles_at_point');
  if (/cartesian|coordinate|grid reference|grid map|position/.test(text)) add('coordinate_translation', 'coordinate_midpoint', 'coordinate_gradient', 'grid_map');
  if (/area|hectare|square|parallelogram|composite/.test(text)) add('area_rectangle', 'area_triangle', 'area_composite', 'perimeter_rectangle');
  if (/2d|shape|triangle|quadrilateral|symmetry|tessellat|transform|reflect|translate|rotate|enlargement|similarity/.test(text)) add('shape_classification_stage', 'symmetry_lines', 'enlargement_scale');
  if (/3d|prism|pyramid|net|cube|solid/.test(text)) add('solid_properties_stage', 'net_3d_object', 'volume_rectangular_prism');
  if (/data|graph|table|plot|chart|display/.test(text)) add('scaled_data_display', 'data_compare_more', 'graph_reading');
  if (/chance|probability|outcome|random|expected|observed/.test(text)) add('probability_fraction', 'most_likely', 'likelihood_language');

  return types.length ? types : ['stage_place_value', 'large_add_subtract', 'multiplicative_relations', 'problem_solving_money'];
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
