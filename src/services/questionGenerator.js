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

const wordOptions = (answer, pool) => {
  const filtered = pool.filter(item => String(item) !== String(answer));
  const chosen = shuffle(filtered).slice(0, 3);
  // Pad with generated fallbacks if not enough unique distractors
  const fallbacks = ['Other', 'None of these', '—', '??'];
  let i = 0;
  while (chosen.length < 3 && i < fallbacks.length) {
    const fb = fallbacks[i++];
    if (String(fb) !== String(answer) && !chosen.includes(fb)) chosen.push(fb);
  }
  return shuffle([answer, ...chosen]);
};
const pickGeneratorType = (value, fallback = 'generic_year1') => Array.isArray(value) ? pick(value) : (value || fallback);

const normalizeYearLabel = (value = DEFAULT_YEAR) => {
  const yearNum = parseInt(String(Array.isArray(value) ? value[0] : value).replace(/\D/g, ''), 10);
  return Number.isFinite(yearNum) ? `Year ${yearNum}` : String(value || DEFAULT_YEAR);
};

const getYearNumber = (value = DEFAULT_YEAR) => {
  const parsed = parseInt(String(Array.isArray(value) ? value[0] : value).replace(/\D/g, ''), 10);
  return Number.isFinite(parsed) ? parsed : 1;
};

const getDefaultGeneratorTypesForYear = (year) => {
  const yearNum = getYearNumber(year);
  if (yearNum >= 7) {
    return ['algebra_yr11', 'percent_quantity', 'coordinate_gradient', 'order_operations'];
  }
  if (yearNum >= 3) {
    return ['stage_place_value', 'large_add_subtract', 'multiplicative_relations', 'problem_solving_money'];
  }
  return ['generic_year1'];
};

const normalizeMathText = (value) => String(value ?? '')
  .replace(/\$\$/g, '')
  .replace(/[−–—]/g, '-')
  .replace(/×/g, 'x')
  .trim();

const deriveSimpleMathAnswer = (questionText) => {
  const text = normalizeMathText(questionText).replace(/\s+/g, ' ');
  const binary = text.match(/^(-?\d+(?:\.\d+)?)\s*([+\-x*÷/])\s*(-?\d+(?:\.\d+)?)\s*=\s*\?$/i);
  if (!binary) return null;

  const left = Number(binary[1]);
  const right = Number(binary[3]);
  if (!Number.isFinite(left) || !Number.isFinite(right)) return null;

  const op = binary[2].toLowerCase();
  let result = null;
  if (op === '+') result = left + right;
  if (op === '-') result = left - right;
  if (op === 'x' || op === '*') result = left * right;
  if ((op === '÷' || op === '/') && right !== 0) result = left / right;

  return result === null ? null : String(Number.isInteger(result) ? result : Number(result.toFixed(4)));
};

const optionText = (option) => {
  if (option === null || option === undefined) return '';
  if (typeof option === 'object') return String(option.text ?? option.label ?? option.value ?? '');
  return String(option);
};

const ensureAnswerInOptions = (options, answer) => {
  if (!Array.isArray(options) || options.length === 0) return options;
  if (options.some(option => optionText(option).trim() === String(answer))) return options;
  return [answer, ...options.filter(option => optionText(option).trim() !== String(answer))].slice(0, 4);
};

const validateGeneratedQuestion = (question) => {
  const expectedAnswer = deriveSimpleMathAnswer(question?.question);
  if (expectedAnswer === null) return question;

  return {
    ...question,
    answer: expectedAnswer,
    options: ensureAnswerInOptions(question.options, expectedAnswer),
    solution: question.solution || `${normalizeMathText(question.question).replace(/\?$/, expectedAnswer)}`,
  };
};

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

    const validChapterIds = new Set(yearChapters.map(chapter => chapter.id));
    const chapterSet = new Set((assignedChapters || []).filter(chapterId => validChapterIds.has(chapterId)));
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
        generatorTypes: TOPIC_GENERATOR_MAP[topic.id] || GROUP_GENERATOR_MAP[topic.group] || inferredTypes || getDefaultGeneratorTypesForYear(y),
      };
    }));
    
    allTargets = [...allTargets, ...targets];
  });

  if (assignedTopics.length > 0) {
    const topicSet = new Set(assignedTopics);
    allTargets = allTargets.filter(target => topicSet.has(target.topicId));
  }
  
  if (allTargets.length === 0) {
    const firstYear = normalizeYearLabel(years[0] || DEFAULT_YEAR);
    if (getYearNumber(firstYear) >= 11) {
      const fallbackId = firstYear === 'Year 11' ? 'y11a-1' : 'y12adv-ch1';
      return getQuestionTargets({ year: firstYear, course: 'Advanced', assignedChapters: [fallbackId] });
    }
    if (CURRICULUM_DATA[firstYear]) {
      return getQuestionTargets({ year: firstYear, course });
    }
    return getQuestionTargets({ year: DEFAULT_YEAR, assignedChapters: [DEFAULT_CHAPTER_ID] });
  }

  return allTargets;
};

export const getQuestionBlueprint = (year = DEFAULT_YEAR, chapterId = DEFAULT_CHAPTER_ID) => (
  QUESTION_BLUEPRINTS[year]?.[chapterId] || null
);

const q = (type, question, options, answer, solution, timeLimit = 30, hint = '', extras = {}) => validateGeneratedQuestion({
  type,
  question,
  options,
  answer,
  solution,
  timeLimit,
  hint: hint || solution,
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

// ── Bar chart SVG ────────────────────────────────────────────────────────────
// data: [{ label, value, color }], maxVal: number
const drawBarChartSvg = (data, maxVal, title = '') => {
  const W = 420, H = 260;
  const padL = 48, padB = 44, padT = title ? 36 : 18, padR = 16;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const barW = Math.floor(chartW / data.length * 0.55);
  const gap = Math.floor(chartW / data.length);
  const colors = ['#818cf8', '#34d399', '#fb923c', '#f472b6', '#38bdf8'];

  const bars = data.map((d, i) => {
    const bh = Math.round((d.value / maxVal) * chartH);
    const bx = padL + gap * i + Math.floor((gap - barW) / 2);
    const by = padT + chartH - bh;
    const col = d.color || colors[i % colors.length];
    return [
      `<rect x="${bx}" y="${by}" width="${barW}" height="${bh}" rx="5" fill="${col}" opacity="0.92"/>`,
      `<text x="${bx + barW / 2}" y="${by - 6}" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="14" font-weight="700" fill="#334155">${d.value}</text>`,
      `<text x="${bx + barW / 2}" y="${H - padB + 18}" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="13" font-weight="600" fill="#475569">${d.label}</text>`,
    ].join('');
  }).join('');

  // Y-axis ticks
  const ticks = [0, Math.round(maxVal / 2), maxVal].map(v => {
    const ty = padT + chartH - Math.round((v / maxVal) * chartH);
    return `<line x1="${padL - 5}" y1="${ty}" x2="${padL + chartW}" y2="${ty}" stroke="#e2e8f0" stroke-width="1.5"/>` +
      `<text x="${padL - 8}" y="${ty + 5}" text-anchor="end" font-family="Inter,Arial,sans-serif" font-size="12" fill="#64748b">${v}</text>`;
  }).join('');

  const titleEl = title ? `<text x="${W / 2}" y="22" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="14" font-weight="700" fill="#334155">${title}</text>` : '';

  return svgDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Bar chart">
    <rect width="${W}" height="${H}" rx="18" fill="#f8fafc"/>
    ${titleEl}
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + chartH}" stroke="#94a3b8" stroke-width="2"/>
    ${ticks}
    ${bars}
  </svg>`);
};

// ── Picture graph SVG ────────────────────────────────────────────────────────
const drawPictureGraphSvg = (data, symbol = '⭐') => {
  const W = 420, H = 60 + data.length * 44;
  const rows = data.map((d, i) => {
    const y = 50 + i * 44;
    const icons = Array.from({ length: d.value }, (_, j) =>
      `<text x="${130 + j * 28}" y="${y}" font-size="22" font-family="serif">${symbol}</text>`
    ).join('');
    return `<text x="8" y="${y}" font-family="Inter,Arial,sans-serif" font-size="14" font-weight="600" fill="#334155">${d.label}</text>` +
      `<line x1="120" y1="${y - 28}" x2="120" y2="${y + 8}" stroke="#e2e8f0" stroke-width="1.5"/>` +
      icons;
  }).join('');
  return svgDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Picture graph">
    <rect width="${W}" height="${H}" rx="18" fill="#f8fafc"/>
    <text x="${W / 2}" y="28" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="14" font-weight="700" fill="#334155">Each ${symbol} = 1 vote</text>
    ${rows}
  </svg>`);
};

// ── Number line SVG ──────────────────────────────────────────────────────────
const drawNumberLineSvg = (min, max, marked = [], highlight = null) => {
  const W = 420, H = 100;
  const padX = 40;
  const range = max - min;
  const toX = (n) => padX + Math.round(((n - min) / range) * (W - padX * 2));
  const ticks = [];
  const step = range <= 20 ? 1 : range <= 100 ? 10 : 100;
  for (let n = min; n <= max; n += step) {
    const x = toX(n);
    ticks.push(`<line x1="${x}" y1="48" x2="${x}" y2="62" stroke="#64748b" stroke-width="2"/>`);
    ticks.push(`<text x="${x}" y="78" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="13" fill="#475569">${n}</text>`);
  }
  const dots = marked.map(n => {
    const x = toX(n);
    return `<circle cx="${x}" cy="55" r="8" fill="${n === highlight ? '#f97316' : '#818cf8'}" stroke="white" stroke-width="2"/>`;
  }).join('');
  return svgDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Number line">
    <rect width="${W}" height="${H}" rx="14" fill="#f8fafc"/>
    <line x1="${padX}" y1="55" x2="${W - padX}" y2="55" stroke="#94a3b8" stroke-width="3"/>
    ${ticks.join('')}
    ${dots}
  </svg>`);
};

// ── Enhanced 2D shape SVG (more shapes) ─────────────────────────────────────
const draw2DShapeSvgEx = (shapeName) => {
  const fill = '#ede9fe', stroke = '#8b5cf6';
  const extras = {
    circle: `<circle cx="210" cy="120" r="88" fill="${fill}" stroke="${stroke}" stroke-width="7" filter="url(#shadow)"/>`,
    octagon: `<polygon points="150,44 270,44 330,120 330,168 270,228 150,228 90,168 90,120" fill="${fill}" stroke="${stroke}" stroke-width="7" filter="url(#shadow)"/>`,
    rhombus: `<polygon points="210,36 330,120 210,204 90,120" fill="${fill}" stroke="${stroke}" stroke-width="7" filter="url(#shadow)"/>`,
    parallelogram: `<polygon points="130,188 290,188 310,52 150,52" fill="${fill}" stroke="${stroke}" stroke-width="7" filter="url(#shadow)"/>`,
    trapezium: `<polygon points="140,188 280,188 320,60 100,60" fill="${fill}" stroke="${stroke}" stroke-width="7" filter="url(#shadow)"/>`,
  };
  if (extras[shapeName]) return questionSvg(`${extras[shapeName]}${labelText(210, 228, shapeName, 16, '#6d28d9')}`);
  return draw2DShapeSvg(shapeName);
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
  const maxNum = maxByDifficulty(difficulty, 20, 50, 90);
  const start = randomInt(direction === 'left' ? steps : 0, Math.max(direction === 'left' ? steps : 0, maxNum - steps));
  const answer = direction === 'left' ? start - steps : start + steps;
  const lineMin = Math.max(0, Math.min(start, answer) - 3);
  const lineMax = Math.max(start, answer) + 3;
  const chartImg = drawNumberLineSvg(lineMin, lineMax, [start, answer], answer);
  return q('number_line', `On a number line, start at ${start} and move ${steps} steps ${direction}. Where do you land?`,
    getUniqueOptions(answer, [start, answer - 1, answer + 1], 0, 100),
    answer, `Start at ${start} and move ${steps} steps ${direction} to land on ${answer}.`, 30,
    `The orange dot shows where you land.`, { questionImage: chartImg });
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
  // Guarantee at least 2 even and 2 odd numbers to avoid degenerate cases
  let nums;
  do {
    nums = Array.from({ length: 5 }, () => randomInt(1, 30));
  } while (nums.filter(n => n % 2 === 0).length < 1 || nums.filter(n => n % 2 !== 0).length < 1);
  const evenNums = nums.filter(n => n % 2 === 0);
  const oddNums = nums.filter(n => n % 2 !== 0);
  const evens = evenNums.join(', ');
  const odds = oddNums.join(', ');
  // Build clearly wrong distractors
  const wrongA = [...evenNums, oddNums[0]].sort((a,b)=>a-b).join(', '); // one too many
  const wrongB = evenNums.length > 1 ? evenNums.slice(0,-1).join(', ') : odds; // one too few
  return q('sort_odd_even', `Which of these numbers are even? ${nums.join(', ')}`, wordOptions(evens, [odds, wrongA, wrongB]), evens, `Even numbers end in 0, 2, 4, 6, or 8. The even numbers are ${evens}.`, 35);
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
  const answer = `${total}c`;
  const distractors = [total - 5, total + 5, total + 10, total - 10]
    .filter(v => v > 0 && v !== total)
    .map(v => `${v}c`);
  return q('money_coin_value', `How much are these coins worth: ${coins.map(c => COIN_LABELS[c]).join(' + ')}?`, wordOptions(answer, distractors), answer, `Add the coin values: ${coins.map(c => `${c}c`).join(' + ')} = ${total}c.`, 35);
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
  const start = pick([20, 50, 100, 200]);
  const spent = pick([5, 10, 15, 20, 25, 30]);
  const safeSpent = Math.min(spent, start - 5);
  const answer = start - safeSpent;
  const answerStr = `${answer}c`;
  const distractors = [safeSpent, answer - 5, answer + 5, start].filter(v => v !== answer && v > 0).map(v => `${v}c`);
  return q('money_change', `You have ${start}c and spend ${safeSpent}c. How much change do you get back?`, wordOptions(answerStr, distractors), answerStr, `${start}c − ${safeSpent}c = ${answer}c change.`, 35);
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
  const templates = [
    { unit: ['red', 'blue'], error: { idx: 3, wrong: 'red', right: 'blue' } },
    { unit: ['A', 'B', 'C'], error: { idx: 4, wrong: 'A', right: 'C' } },
    { unit: ['circle', 'square'], error: { idx: 2, wrong: 'square', right: 'circle' } },
    { unit: ['triangle', 'square', 'circle'], error: { idx: 5, wrong: 'square', right: 'circle' } },
    { unit: ['big', 'small', 'small'], error: { idx: 3, wrong: 'big', right: 'small' } },
  ];
  const t = pick(templates);
  // Build a 6-element correct sequence then corrupt it
  const correct = Array.from({ length: 6 }, (_, i) => t.unit[i % t.unit.length]);
  const corrupted = [...correct];
  corrupted[t.error.idx] = t.error.wrong;
  const ordinals = ['1st', '2nd', '3rd', '4th', '5th', '6th'];
  const wrongPos = ordinals[t.error.idx];
  const opts = ordinals.slice(0, 6).filter(o => o !== wrongPos);
  shuffle(opts);
  return q('pattern_error', `The pattern rule is: ${t.unit.join(', ')}, repeating. Which item is wrong? ${corrupted.join(', ')}`, [wrongPos, ...opts.slice(0, 3)], wrongPos, `The ${wrongPos} item should be "${t.error.right}", not "${t.error.wrong}".`, 30);
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
  // Guarantee all three lengths are different
  let lengths;
  do {
    lengths = [randomInt(2, 6), randomInt(7, 11), randomInt(12, 18)];
  } while (new Set(lengths).size < 3);
  shuffle(lengths); // scramble so they're not already sorted
  const itemNames = ['pencil', 'eraser', 'ruler'];
  const items = itemNames.map((name, i) => ({ name, length: lengths[i] }));
  const sorted = [...items].sort((a, b) => a.length - b.length);
  const answer = sorted.map(i => i.name).join(', ');
  const reversed = [...sorted].reverse().map(i => i.name).join(', ');
  const swapped = [sorted[1], sorted[0], sorted[2]].map(i => i.name).join(', ');
  const swapped2 = [sorted[0], sorted[2], sorted[1]].map(i => i.name).join(', ');
  return q('length_order', `Order from shortest to longest: ${items.map(i => `${i.name} (${i.length} blocks)`).join('; ')}`, wordOptions(answer, [reversed, swapped, swapped2]), answer, `Sorted by length: ${sorted.map(i => `${i.name} ${i.length}`).join(' < ')}.`, 35);
};

const genInformalMeasure = () => {
  const units = randomInt(4, 12);
  return q('informal_units', `A toy train is ${units} blocks long. How many blocks long is it?`, getUniqueOptions(units, [units - 1, units + 1, units + 2], 1, 15), units, `Count each block: ${units} blocks.`, 20);
};

const genMassCapacity = () => {
  const pairs = [
    { heavy: 'a brick', light: 'a feather', heavyWins: true },
    { heavy: 'a watermelon', light: 'a grape', heavyWins: true },
    { heavy: 'a car', light: 'a bicycle', heavyWins: true },
    { heavy: 'a school bag full of books', light: 'an empty bag', heavyWins: true },
    { heavy: 'an elephant', light: 'a mouse', heavyWins: true },
    { heavy: 'a bag of potatoes', light: 'a bag of cotton wool', heavyWins: true },
  ];
  const item = pick(pairs);
  const askHeavier = Math.random() > 0.5;
  const answer = askHeavier ? item.heavy : item.light;
  const question = askHeavier
    ? `Which is heavier: ${item.heavy} or ${item.light}?`
    : `Which is lighter: ${item.heavy} or ${item.light}?`;
  return q('mass_compare', question, [item.heavy, item.light], answer, `${answer} is ${askHeavier ? 'heavier' : 'lighter'}.`, 20);
};

const genCapacityCompare = () => {
  const a = randomInt(2, 8);
  const b = randomInt(2, 8);
  const answer = a > b ? 'jug' : 'cup';
  return q('capacity_compare', `A jug holds ${a} cups. A cup holds ${b} cups. Which holds more?`, ['jug', 'cup'], answer, `Compare ${a} and ${b}; the larger amount holds more.`, 25);
};

const genTime = () => {
  const hour = randomInt(1, 12);
  const type = pick(['oclock', 'halfpast', 'quarter_past', 'quarter_to']);
  const formatTime = (h, m) => `${h}:${String(m).padStart(2, '0')}`;
  let answer, question;
  if (type === 'oclock') {
    answer = formatTime(hour, 0);
    question = `What time does the clock show when it reads ${hour} o'clock?`;
  } else if (type === 'halfpast') {
    answer = formatTime(hour, 30);
    question = `What time is half past ${hour}?`;
  } else if (type === 'quarter_past') {
    answer = formatTime(hour, 15);
    question = `What time is quarter past ${hour}?`;
  } else {
    const nextHour = hour === 12 ? 1 : hour + 1;
    answer = formatTime(nextHour, 45);
    question = `What time is quarter to ${nextHour}?`;
  }
  const distractors = [
    formatTime(hour, 0), formatTime(hour, 15), formatTime(hour, 30), formatTime(hour, 45),
    formatTime(hour === 12 ? 1 : hour + 1, 0), formatTime(hour === 12 ? 1 : hour + 1, 30),
  ].filter(t => t !== answer);
  return q('read_clock', question, wordOptions(answer, distractors), answer, `The answer is ${answer}.`, 25);
};

const genActivityDuration = () => {
  const comparisons = [
    { longer: 'sleeping', shorter: 'brushing teeth', reason: 'Sleeping takes hours; brushing teeth takes minutes.' },
    { longer: 'a school day', shorter: 'eating breakfast', reason: 'A school day takes hours; eating breakfast takes minutes.' },
    { longer: 'a school holiday', shorter: 'a maths lesson', reason: 'A school holiday is weeks long; a lesson is under an hour.' },
    { longer: 'baking a cake', shorter: 'boiling an egg', reason: 'Baking takes about an hour; boiling an egg takes minutes.' },
    { longer: 'growing a tree', shorter: 'watering a plant', reason: 'Growing a tree takes years; watering takes minutes.' },
    { longer: 'a movie', shorter: 'tying shoelaces', reason: 'A movie takes about 2 hours; tying laces takes seconds.' },
  ];
  const item = pick(comparisons);
  const askLonger = Math.random() > 0.5;
  const answer = askLonger ? item.longer : item.shorter;
  const question = askLonger
    ? `Which usually takes longer: ${item.shorter} or ${item.longer}?`
    : `Which usually takes less time: ${item.longer} or ${item.shorter}?`;
  return q('activity_duration', question, [item.longer, item.shorter], answer, item.reason, 20);
};

const genDaysMonths = () => {
  const useDays = Math.random() > 0.5;
  const arr = useDays ? DAYS : MONTHS;
  const idx = randomInt(0, arr.length - 2);
  const answer = arr[idx + 1];
  return q('calendar_order', `What comes after ${arr[idx]}?`, wordOptions(answer, arr), answer, `${answer} comes after ${arr[idx]}.`, 20);
};

const SHAPES_2D_EX = [
  { name: 'triangle', sides: 3, corners: 3 },
  { name: 'square', sides: 4, corners: 4, note: '4 equal sides' },
  { name: 'rectangle', sides: 4, corners: 4, note: 'opposite sides equal' },
  { name: 'pentagon', sides: 5, corners: 5 },
  { name: 'hexagon', sides: 6, corners: 6 },
  { name: 'octagon', sides: 8, corners: 8 },
];

const gen2DShape = () => {
  const shape = pick(SHAPES_2D_EX);
  const mode = pick(['ask_sides', 'ask_name', 'true_false_property']);

  if (mode === 'true_false_property') {
    const isTrue = Math.random() > 0.5;
    let statement, explanation;
    if (isTrue) {
      statement = `A ${shape.name} has ${shape.sides} sides.`;
      explanation = `True — a ${shape.name} has exactly ${shape.sides} sides.`;
    } else {
      const wrongSides = shape.sides === 3 ? 4 : 3;
      statement = `A ${shape.name} has ${wrongSides} sides.`;
      explanation = `False — a ${shape.name} has ${shape.sides} sides, not ${wrongSides}.`;
    }
    return q('shape_2d', `True or false: ${statement}`, ['True', 'False'], isTrue ? 'True' : 'False', explanation, 20);
  }

  if (mode === 'ask_name') {
    // Avoid ambiguity: if 4-sided, specify square vs rectangle uniquely
    if (shape.sides === 4) {
      const askSquare = shape.name === 'square';
      const question = askSquare
        ? `Which shape has 4 equal sides and 4 right angles?`
        : `Which shape has 4 sides, 4 right angles, but sides that are NOT all equal?`;
      return q('shape_2d', question,
        wordOptions(shape.name, SHAPES_2D_EX.map(s => s.name)),
        shape.name,
        `A ${shape.name} fits this description.`, 25, '', {
          questionImage: draw2DShapeSvg(shape.name),
        });
    }
    const question = `Which shape has ${shape.sides} sides?`;
    return q('shape_2d', question,
      wordOptions(shape.name, SHAPES_2D_EX.map(s => s.name)),
      shape.name,
      `A ${shape.name} has ${shape.sides} sides.`, 25, '', {
        questionImage: draw2DShapeSvgEx(shape.name),
      });
  }

  // ask_sides
  const question = `How many sides does a ${shape.name} have?`;
  return q('shape_2d', question,
    getUniqueOptions(shape.sides, [shape.sides - 1, shape.sides + 1, shape.sides + 2], 2, 10),
    shape.sides,
    `A ${shape.name} has ${shape.sides} sides and ${shape.corners} corners.`, 25, '', {
      questionImage: draw2DShapeSvgEx(shape.name),
    });
};

const genShapeTrueFalse = () => {
  const statements = [
    { text: 'A square has 4 equal sides.', answer: 'True', explanation: 'All 4 sides of a square are equal.' },
    { text: 'A triangle has 4 sides.', answer: 'False', explanation: 'A triangle has 3 sides, not 4.' },
    { text: 'A rectangle has 4 corners.', answer: 'True', explanation: 'A rectangle has exactly 4 corners (right angles).' },
    { text: 'A circle has straight sides.', answer: 'False', explanation: 'A circle has no straight sides — it is a closed curve.' },
    { text: 'A pentagon has 5 sides.', answer: 'True', explanation: 'A pentagon has exactly 5 sides.' },
    { text: 'A hexagon has 7 sides.', answer: 'False', explanation: 'A hexagon has 6 sides, not 7.' },
    { text: 'A square is a type of rectangle.', answer: 'True', explanation: 'A square has 4 right angles and equal sides, so it is a special rectangle.' },
    { text: 'All rectangles are squares.', answer: 'False', explanation: 'Rectangles do not always have all sides equal, so they are not always squares.' },
    { text: 'An octagon has 8 sides.', answer: 'True', explanation: 'Octa- means 8; an octagon has 8 sides.' },
  ];
  const item = pick(statements);
  return q('shape_true_false', `True or false: ${item.text}`, ['True', 'False'], item.answer, item.explanation, 20);
};

const genShapeSort = () => {
  const groups = [
    { criterion: '3 sides', answer: 'triangle', decoys: ['square', 'rectangle', 'hexagon'] },
    { criterion: '6 sides', answer: 'hexagon', decoys: ['triangle', 'square', 'pentagon'] },
    { criterion: '5 sides', answer: 'pentagon', decoys: ['triangle', 'hexagon', 'rectangle'] },
    { criterion: '4 equal sides and 4 right angles', answer: 'square', decoys: ['rectangle', 'triangle', 'hexagon'] },
    { criterion: '8 sides', answer: 'octagon', decoys: ['hexagon', 'pentagon', 'square'] },
  ];
  const item = pick(groups);
  return q('shape_sort', `Which shape belongs in the group with ${item.criterion}?`,
    wordOptions(item.answer, item.decoys),
    item.answer, `A ${item.answer} has ${item.criterion}.`, 20, '', {
      questionImage: draw2DShapeSvgEx(item.answer),
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
    { text: 'A sphere has flat faces.', answer: 'False', explanation: 'A sphere has no flat faces — it is completely curved.' },
    { text: 'A cube has 6 flat faces.', answer: 'True', explanation: 'A cube has exactly 6 square flat faces.' },
    { text: 'A cylinder can roll.', answer: 'True', explanation: 'A cylinder has a curved surface so it can roll.' },
    { text: 'A cone has 2 flat faces.', answer: 'False', explanation: 'A cone has only 1 flat face (the circular base).' },
    { text: 'A cube has 8 corners (vertices).', answer: 'True', explanation: 'A cube has 8 vertices.' },
    { text: 'A sphere has edges.', answer: 'False', explanation: 'A sphere has no edges or vertices — it is a smooth curved shape.' },
    { text: 'A rectangular prism and a cube both have 6 faces.', answer: 'True', explanation: 'Both shapes have 6 faces.' },
    { text: 'A triangular prism has 4 faces.', answer: 'False', explanation: 'A triangular prism has 5 faces: 2 triangles and 3 rectangles.' },
  ];
  const item = pick(statements);
  return q('shape_3d_true_false', `True or false: ${item.text}`, ['True', 'False'], item.answer, item.explanation, 20);
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
  const topics = [
    {
      topic: 'favourite sports',
      correct: 'What is your favourite sport?',
      wrong: ['How many goals were scored?', 'Which team won?', 'How tall is the goal post?'],
    },
    {
      topic: 'favourite colours',
      correct: 'What is your favourite colour?',
      wrong: ['How many crayons are in the box?', 'Which colour is the sky?', 'How much does paint cost?'],
    },
    {
      topic: 'types of pets students have',
      correct: 'What type of pet do you have?',
      wrong: ['How many legs does a dog have?', 'Where do fish live?', 'What do cats eat?'],
    },
    {
      topic: 'favourite school subjects',
      correct: 'Which school subject is your favourite?',
      wrong: ['How long is a maths lesson?', 'What time does school start?', 'How many teachers are there?'],
    },
  ];
  const item = pick(topics);
  return q('survey_question', `Which question would best help collect data about ${item.topic}?`, wordOptions(item.correct, [item.correct, ...item.wrong]), item.correct, `A good survey question asks directly about the category you want to count.`, 25);
};

const GRAPH_THEMES = [
  { labels: ['apples', 'bananas', 'oranges'], topic: 'favourite fruits', title: 'Favourite Fruits' },
  { labels: ['cats', 'dogs', 'fish'], topic: 'favourite pets', title: 'Favourite Pets' },
  { labels: ['soccer', 'tennis', 'swimming'], topic: 'favourite sports', title: 'Favourite Sports' },
  { labels: ['red', 'blue', 'green'], topic: 'favourite colours', title: 'Favourite Colours' },
  { labels: ['Monday', 'Tuesday', 'Wednesday'], topic: 'best day of school', title: 'Best Day of School' },
];

const genGraph = () => {
  const theme = pick(GRAPH_THEMES);
  const mode = pick(['total', 'difference', 'most_least']);
  const vals = theme.labels.map(l => ({ label: l, value: randomInt(1, 8) }));
  const maxVal = Math.max(...vals.map(v => v.value));
  const chartImg = drawBarChartSvg(vals, maxVal + 1, theme.title);

  if (mode === 'total') {
    const idx1 = 0, idx2 = 1;
    const answer = vals[idx1].value + vals[idx2].value;
    return q('graph_reading', `Look at the bar graph. How many students altogether chose ${vals[idx1].label} or ${vals[idx2].label}?`,
      getUniqueOptions(answer, [vals[idx1].value, vals[idx2].value, answer + 1], 0, 20),
      answer, `${vals[idx1].value} + ${vals[idx2].value} = ${answer}.`, 35, 'Read each bar then add.', { questionImage: chartImg });
  }
  if (mode === 'difference') {
    const sorted = [...vals].sort((a, b) => b.value - a.value);
    const answer = sorted[0].value - sorted[sorted.length - 1].value;
    return q('graph_reading', `Look at the bar graph. How many more students chose ${sorted[0].label} than ${sorted[sorted.length - 1].label}?`,
      getUniqueOptions(answer, [sorted[0].value, sorted[sorted.length - 1].value, answer + 1], 0, 15),
      answer, `${sorted[0].value} − ${sorted[sorted.length - 1].value} = ${answer}.`, 35, 'Subtract the smaller bar from the larger bar.', { questionImage: chartImg });
  }
  // most_least
  const askMost = Math.random() > 0.5;
  const sorted = [...vals].sort((a, b) => askMost ? b.value - a.value : a.value - b.value);
  const answer = sorted[0].label;
  return q('graph_reading', `Look at the bar graph. Which category was chosen ${askMost ? 'most' : 'least'} often?`,
    wordOptions(answer, vals.map(v => v.label)),
    answer, `${answer} has the ${askMost ? 'highest' : 'lowest'} bar with ${sorted[0].value}.`, 30, '', { questionImage: chartImg });
};

const genGraphTallestShortest = () => {
  const theme = pick(GRAPH_THEMES);
  let vals;
  do { vals = theme.labels.map(l => ({ label: l, value: randomInt(1, 9) })); }
  while (new Set(vals.map(v => v.value)).size < vals.length); // all unique
  const maxVal = Math.max(...vals.map(v => v.value));
  const chartImg = drawBarChartSvg(vals, maxVal + 1, theme.title);
  const askTallest = Math.random() > 0.5;
  const sorted = [...vals].sort((a, b) => askTallest ? b.value - a.value : a.value - b.value);
  const answer = sorted[0].label;
  return q('graph_tallest_shortest', `Look at the bar graph. Which bar is ${askTallest ? 'tallest' : 'shortest'}?`,
    wordOptions(answer, vals.map(v => v.label)),
    answer, `${answer} has value ${sorted[0].value}, which is the ${askTallest ? 'greatest' : 'smallest'}.`, 25, '', { questionImage: chartImg });
};

const genGraphTrueFalse = () => {
  const theme = pick(GRAPH_THEMES);
  const vals = theme.labels.map(l => ({ label: l, value: randomInt(1, 9) }));
  const maxVal = Math.max(...vals.map(v => v.value));
  const chartImg = drawBarChartSvg(vals, maxVal + 1, theme.title);
  const i = randomInt(0, vals.length - 2);
  const trueSt = vals[i].value > vals[i + 1].value;
  const isTrue = Math.random() > 0.5 ? trueSt : !trueSt;
  const statement = `More students chose ${vals[i].label} than ${vals[i + 1].label}.`;
  const answer = (vals[i].value > vals[i + 1].value) ? 'True' : 'False';
  void isTrue; // answer derived from actual data
  return q('graph_true_false', `Look at the bar graph. True or false: ${statement}`,
    ['True', 'False'], answer,
    `${vals[i].label} has ${vals[i].value} and ${vals[i + 1].label} has ${vals[i + 1].value}, so the statement is ${answer}.`, 25, '', { questionImage: chartImg });
};

const genPictureGraphBuild = () => {
  const theme = pick(GRAPH_THEMES);
  const vals = theme.labels.slice(0, 3).map(l => ({ label: l, value: randomInt(1, 6) }));
  const chartImg = drawPictureGraphSvg(vals, '⭐');
  const target = pick(vals);
  const answer = `${target.value} pictures`;
  return q('picture_graph_build', `Look at the picture graph (each ⭐ = 1 vote). How many pictures represent votes for ${target.label}?`,
    wordOptions(answer, vals.map(v => `${v.value} pictures`)),
    answer, `${target.label} received ${target.value} votes, shown by ${target.value} stars.`, 30, '', { questionImage: chartImg });
};

const genGraphTitle = () => {
  const themes = [
    { title: 'Favourite Fruits', topic: 'fruit choices', wrong: ['Class Birthdays', 'Pet Heights', 'Weather Report'] },
    { title: 'Favourite Sports', topic: 'sport choices', wrong: ['Shoe Sizes', 'Lunch Times', 'Number of Goals'] },
    { title: 'Favourite Colours', topic: 'colour preferences', wrong: ['Types of Weather', 'School Timetable', 'Book Lengths'] },
  ];
  const item = pick(themes);
  return q('graph_title', `A graph shows how many students voted for different ${item.topic}. What is the best title for this graph?`,
    wordOptions(item.title, [item.title, ...item.wrong]),
    item.title, `The title should describe what the graph is showing: "${item.title}".`, 20);
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

// ════════════════════════════════════════════════════════════════════════════
// NSW SYLLABUS EXTENDED GENERATORS  (Year 1 – Year 6)
// ════════════════════════════════════════════════════════════════════════════

// ── Year 1-2: Ordinal numbers ────────────────────────────────────────────────
const genOrdinalNumbers = () => {
  const ordinals = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th'];
  const items = ['apple','banana','cat','dog','elephant','fish','grape','hat','igloo','jacket'];
  const pos = randomInt(1, 10);
  const ord = ordinals[pos - 1];
  const mode = pick(['name_ordinal', 'find_position']);
  if (mode === 'name_ordinal') {
    return q('ordinal_numbers', `A race has 10 runners. What position is the runner who came ${pos}${ord.slice(-2)}?`,
      wordOptions(ord, ordinals.filter(o => o !== ord)),
      ord, `The ${pos}${ord.slice(-2)} place is written as "${ord}".`, 20);
  }
  const row = items.slice(0, 5);
  const targetItem = row[pos <= 5 ? pos - 1 : 4];
  return q('ordinal_numbers', `In this row: ${row.join(', ')}. Which item is in the ${ord} position?`,
    wordOptions(targetItem, row.filter(i => i !== targetItem)),
    targetItem, `Count from the left: position ${pos} is "${targetItem}".`, 20);
};

// ── Year 1-2: Equal groups (intro to multiplication) ────────────────────────
const genEqualGroups = (difficulty) => {
  const groups = randomInt(2, difficulty === 'hard' ? 8 : 5);
  const each = randomInt(2, difficulty === 'hard' ? 10 : 6);
  const total = groups * each;
  const contexts = [
    { container: 'bags', item: 'apples' },
    { container: 'boxes', item: 'pencils' },
    { container: 'plates', item: 'biscuits' },
    { container: 'rows', item: 'chairs' },
    { container: 'baskets', item: 'oranges' },
  ];
  const ctx = pick(contexts);
  const mode = pick(['total', 'missing_each', 'missing_groups']);
  if (mode === 'missing_each') {
    return q('equal_groups', `There are ${groups} ${ctx.container} with the same number of ${ctx.item} in each. Altogether there are ${total} ${ctx.item}. How many ${ctx.item} are in each ${ctx.container.slice(0,-1)}?`,
      getUniqueOptions(each, [each-1, each+1, total], 1, 50), each,
      `${total} ÷ ${groups} = ${each}. There are ${each} ${ctx.item} in each ${ctx.container.slice(0,-1)}.`, 40);
  }
  if (mode === 'missing_groups') {
    return q('equal_groups', `${ctx.item.charAt(0).toUpperCase() + ctx.item.slice(1)} are packed into ${ctx.container} of ${each}. If there are ${total} ${ctx.item} altogether, how many ${ctx.container} are there?`,
      getUniqueOptions(groups, [groups-1, groups+1, each], 1, 30), groups,
      `${total} ÷ ${each} = ${groups} ${ctx.container}.`, 40);
  }
  return q('equal_groups', `There are ${groups} ${ctx.container} of ${ctx.item}. Each ${ctx.container.slice(0,-1)} has ${each} ${ctx.item}. How many ${ctx.item} are there altogether?`,
    getUniqueOptions(total, [total-each, total+each, groups+each], 0, 100), total,
    `${groups} groups of ${each} = ${groups} × ${each} = ${total}.`, 35);
};

// ── Year 2-3: Array multiplication ──────────────────────────────────────────
const genArrayMultiplication = (difficulty) => {
  const rows = randomInt(2, difficulty === 'hard' ? 9 : 6);
  const cols = randomInt(2, difficulty === 'hard' ? 9 : 6);
  const total = rows * cols;
  const mode = pick(['find_total', 'write_equation', 'missing_factor']);
  if (mode === 'write_equation') {
    const correctEq = `${rows} × ${cols} = ${total}`;
    return q('array_multiplication', `An array has ${rows} rows and ${cols} columns. Which multiplication sentence describes it?`,
      wordOptions(correctEq, [`${rows + 1} × ${cols} = ${total}`, `${rows} × ${cols + 1} = ${total}`, `${rows} + ${cols} = ${rows + cols}`]),
      correctEq, `Rows × Columns = ${rows} × ${cols} = ${total}.`, 35);
  }
  if (mode === 'missing_factor') {
    const missingRows = Math.random() > 0.5;
    const known = missingRows ? cols : rows;
    const unknown = missingRows ? rows : cols;
    return q('array_multiplication', `An array shows ___ × ${known} = ${total}. What is the missing number?`,
      getUniqueOptions(unknown, [unknown-1, unknown+1, known], 1, 20), unknown,
      `${total} ÷ ${known} = ${unknown}.`, 35);
  }
  return q('array_multiplication', `An array has ${rows} rows and ${cols} columns. How many items are there altogether?`,
    getUniqueOptions(total, [total-cols, total+rows, rows+cols], 0, 100), total,
    `Rows × Columns = ${rows} × ${cols} = ${total}.`, 30);
};

// ── Year 2-3: Division (equal sharing) ──────────────────────────────────────
const genDivisionSharing = (difficulty) => {
  const divisor = randomInt(2, difficulty === 'hard' ? 10 : 5);
  const quotient = randomInt(2, difficulty === 'hard' ? 10 : 8);
  const dividend = divisor * quotient;
  const contexts = [
    `${dividend} lollies are shared equally among ${divisor} children. How many does each child get?`,
    `${dividend} books are put into ${divisor} equal piles. How many books are in each pile?`,
    `${dividend} stickers are shared equally between ${divisor} friends. How many stickers each?`,
    `A gardener plants ${dividend} seeds in ${divisor} rows with the same number in each. How many seeds per row?`,
  ];
  return q('division_sharing', pick(contexts),
    getUniqueOptions(quotient, [quotient-1, quotient+1, divisor], 1, 50), quotient,
    `${dividend} ÷ ${divisor} = ${quotient}.`, 40,
    `Divide the total equally into the number of groups.`);
};

// ── Year 2-3: Fractions of shapes (halves, quarters, eighths) ───────────────
const genFractionOfShape = () => {
  const fracs = [
    { label: 'one half', num: 1, den: 2 },
    { label: 'one quarter', num: 1, den: 4 },
    { label: 'three quarters', num: 3, den: 4 },
    { label: 'one eighth', num: 1, den: 8 },
    { label: 'two eighths', num: 2, den: 8, simplified: 'one quarter' },
  ];
  const f = pick(fracs);
  const total = f.den * randomInt(2, 5);
  const answer = Math.round(total * f.num / f.den);
  const mode = pick(['of_quantity', 'name_fraction']);
  if (mode === 'of_quantity') {
    return q('fraction_of_shape', `What is ${f.label} of ${total}?`,
      getUniqueOptions(answer, [answer-1, answer+1, total-answer], 0, total),
      answer, `${f.label} of ${total} = ${total} ÷ ${f.den} × ${f.num} = ${answer}.`, 30);
  }
  const shaded = randomInt(1, f.den - 1);
  const fracLabel = shaded === 1 ? `1/${f.den}` : `${shaded}/${f.den}`;
  return q('fraction_of_shape', `A shape is divided into ${f.den} equal parts. ${shaded} part${shaded > 1 ? 's are' : ' is'} shaded. What fraction is shaded?`,
    wordOptions(fracLabel, [`${shaded+1}/${f.den}`, `${f.den}/${shaded}`, `1/${shaded+1}`]),
    fracLabel, `${shaded} out of ${f.den} equal parts = ${fracLabel}.`, 25);
};

// ── Year 2: Quarter / half / three-quarter turns ─────────────────────────────
const genTurns = () => {
  const turns = [
    { label: 'a quarter turn', degrees: 90, description: 'You face the direction 90° from where you started.' },
    { label: 'a half turn', degrees: 180, description: 'You face the opposite direction.' },
    { label: 'a three-quarter turn', degrees: 270, description: 'You have turned 270°.' },
    { label: 'a full turn', degrees: 360, description: 'You face the same direction as you started.' },
  ];
  const t = pick(turns);
  const mode = pick(['degrees', 'name', 'direction']);
  if (mode === 'degrees') {
    return q('turns', `How many degrees is ${t.label}?`,
      getUniqueOptions(t.degrees, [90, 180, 270, 360].filter(d => d !== t.degrees)),
      t.degrees, `${t.label.charAt(0).toUpperCase() + t.label.slice(1)} = ${t.degrees}°. ${t.description}`, 25);
  }
  if (mode === 'name') {
    return q('turns', `You turn ${t.degrees}°. What type of turn is this?`,
      wordOptions(t.label, turns.filter(x => x.label !== t.label).map(x => x.label)),
      t.label, `${t.degrees}° is ${t.label}.`, 25);
  }
  const startDir = pick(['North','East','South','West']);
  const dirs = ['North','East','South','West'];
  const startIdx = dirs.indexOf(startDir);
  const steps = { 'a quarter turn': 1, 'a half turn': 2, 'a three-quarter turn': 3, 'a full turn': 0 };
  const endDir = dirs[(startIdx + steps[t.label]) % 4];
  return q('turns', `You are facing ${startDir} and make ${t.label} clockwise. Which direction are you now facing?`,
    wordOptions(endDir, dirs.filter(d => d !== endDir)),
    endDir, `Starting at ${startDir}, a ${t.label} clockwise → ${endDir}.`, 30);
};

// ── Year 2-3: Numbers to 1000 ────────────────────────────────────────────────
const genNumbersTo1000 = (difficulty) => {
  const max = difficulty === 'easy' ? 100 : difficulty === 'medium' ? 500 : 1000;
  const mode = pick(['expand', 'word', 'compare', 'round_ten']);
  if (mode === 'expand') {
    const n = randomInt(101, max);
    const h = Math.floor(n / 100), t = Math.floor((n % 100) / 10), o = n % 10;
    const answer = h > 0 ? `${h * 100} + ${t * 10} + ${o}` : `${t * 10} + ${o}`;
    return q('numbers_to_1000', `Expand ${n} into hundreds, tens and ones.`,
      wordOptions(answer, [`${h}+${t}+${o}`, `${h * 100} + ${t} + ${o * 10}`, `${h * 10} + ${t * 100} + ${o}`]),
      answer, `${n} = ${h > 0 ? h + ' hundreds + ' : ''}${t} tens + ${o} ones = ${answer}.`, 30);
  }
  if (mode === 'compare') {
    let a = randomInt(100, max), b = randomInt(100, max);
    while (a === b) b = randomInt(100, max);
    const answer = a > b ? `${a} > ${b}` : `${a} < ${b}`;
    return q('numbers_to_1000', `Which statement is correct?`,
      wordOptions(answer, [`${a} > ${b}`, `${a} < ${b}`, `${a} = ${b}`].filter(s => s !== answer)),
      answer, `Compare: ${a} is ${a > b ? 'greater than' : 'less than'} ${b}.`, 25);
  }
  if (mode === 'round_ten') {
    const n = randomInt(11, max - 1);
    const answer = Math.round(n / 10) * 10;
    return q('numbers_to_1000', `Round ${n} to the nearest 10.`,
      getUniqueOptions(answer, [Math.floor(n/10)*10, Math.ceil(n/10)*10+10, answer+10], 0, max+10),
      answer, `${n} rounded to the nearest 10 is ${answer}.`, 25);
  }
  // word form
  const n = randomInt(100, max);
  const wordMap = { 100:'one hundred', 200:'two hundred', 300:'three hundred', 400:'four hundred', 500:'five hundred', 600:'six hundred', 700:'seven hundred', 800:'eight hundred', 900:'nine hundred', 1000:'one thousand' };
  const hundreds = Math.floor(n/100)*100;
  const rest = n % 100;
  const word = (wordMap[hundreds] || '') + (rest > 0 ? ` and ${NUMBER_WORDS[rest]}` : '');
  return q('numbers_to_1000', `What is ${n} in words?`,
    wordOptions(word, [`${wordMap[hundreds+100] || 'one thousand'} and ${NUMBER_WORDS[rest] || 'zero'}`, `${wordMap[Math.max(100, hundreds-100)]} and ${NUMBER_WORDS[rest] || 'zero'}`, `${NUMBER_WORDS[Math.min(99, n)]}`]),
    word, `${n} in words is "${word}".`, 30);
};

// ── Year 3-4: Multiplication facts (times tables) ────────────────────────────
const genMultiplicationFacts = (difficulty) => {
  const tables = difficulty === 'easy' ? [2,5,10] : difficulty === 'medium' ? [2,3,4,5,6,10] : [3,4,6,7,8,9,11,12];
  const a = pick(tables);
  const b = randomInt(2, 12);
  const answer = a * b;
  const mode = pick(['basic', 'missing_factor', 'word']);
  if (mode === 'missing_factor') {
    const missingA = Math.random() > 0.5;
    return q('multiplication_facts', `${missingA ? '?' : a} × ${missingA ? b : '?'} = ${answer}`,
      getUniqueOptions(missingA ? a : b, [a-1, b-1, a+1, b+1], 1, 12), missingA ? a : b,
      `${answer} ÷ ${missingA ? b : a} = ${missingA ? a : b}.`, 25);
  }
  if (mode === 'word') {
    const ctx = pick([
      `There are ${a} packets with ${b} lollies each. How many lollies are there?`,
      `${a} children each have ${b} stickers. How many stickers altogether?`,
      `A shop sells ${b} apples for $${a}. What is the total cost of ${b} apples?`,
    ]);
    return q('multiplication_facts', ctx,
      getUniqueOptions(answer, [answer-a, answer+b, a+b], 0, 200), answer,
      `${a} × ${b} = ${answer}.`, 30);
  }
  return q('multiplication_facts', `${a} × ${b} = ?`,
    getUniqueOptions(answer, [answer-a, answer+b, (a+1)*b], 0, 200), answer,
    `${a} × ${b} = ${answer}.`, 20);
};

// ── Year 3-4: Division facts ──────────────────────────────────────────────────
const genDivisionFacts = (difficulty) => {
  const divisors = difficulty === 'easy' ? [2,5,10] : difficulty === 'medium' ? [2,3,4,5,10] : [3,4,6,7,8,9];
  const divisor = pick(divisors);
  const quotient = randomInt(2, 12);
  const dividend = divisor * quotient;
  const mode = pick(['basic', 'remainder', 'word']);
  if (mode === 'remainder' && difficulty !== 'easy') {
    const r = randomInt(1, divisor - 1);
    const dd = dividend + r;
    const answer = `${quotient} remainder ${r}`;
    return q('division_facts', `${dd} ÷ ${divisor} = ?`,
      wordOptions(answer, [`${quotient+1} remainder ${r}`, `${quotient} remainder ${r-1 < 0 ? r : r-1}`, `${quotient}`]),
      answer, `${divisor} × ${quotient} = ${dividend}, with ${r} left over.`, 40);
  }
  if (mode === 'word') {
    return q('division_facts', `${dividend} students are put into groups of ${divisor}. How many groups are there?`,
      getUniqueOptions(quotient, [quotient-1, quotient+1, divisor], 1, 50), quotient,
      `${dividend} ÷ ${divisor} = ${quotient} groups.`, 35);
  }
  return q('division_facts', `${dividend} ÷ ${divisor} = ?`,
    getUniqueOptions(quotient, [quotient-1, quotient+1, dividend-divisor], 1, 100), quotient,
    `${dividend} ÷ ${divisor} = ${quotient}.`, 20);
};

// ── Year 3-4: Angle types ─────────────────────────────────────────────────────
const genAngleTypes = (difficulty) => {
  const angleTypes = [
    { name: 'acute', range: [1, 89], description: 'less than 90°' },
    { name: 'right', range: [90, 90], description: 'exactly 90°' },
    { name: 'obtuse', range: [91, 179], description: 'between 90° and 180°' },
    { name: 'straight', range: [180, 180], description: 'exactly 180°' },
    ...(difficulty === 'hard' ? [
      { name: 'reflex', range: [181, 359], description: 'between 180° and 360°' },
    ] : []),
  ];
  const t = pick(angleTypes);
  const angle = t.range[0] === t.range[1] ? t.range[0] : randomInt(t.range[0], t.range[1]);
  const mode = pick(['name_from_degrees', 'degrees_from_name', 'true_false']);
  if (mode === 'degrees_from_name') {
    const inRange = randomInt(t.range[0], t.range[1]);
    return q('angle_types', `Which of these could be an ${t.name} angle?`,
      wordOptions(String(inRange) + '°', angleTypes.filter(a => a.name !== t.name).map(a =>
        `${a.range[0] === a.range[1] ? a.range[0] : randomInt(a.range[0], a.range[1])}°`
      ).concat([`${inRange}°`])),
      `${inRange}°`, `An ${t.name} angle is ${t.description}. ${inRange}° fits this.`, 30);
  }
  if (mode === 'true_false') {
    const isCorrect = Math.random() > 0.5;
    const wrongType = pick(angleTypes.filter(a => a.name !== t.name));
    const statement = isCorrect
      ? `${angle}° is an ${t.name} angle.`
      : `${angle}° is an ${wrongType.name} angle.`;
    const answer = isCorrect ? 'True' : 'False';
    return q('angle_types', `True or false: ${statement}`,
      ['True', 'False'], answer,
      `${angle}° is ${t.description}, so it is an ${t.name} angle. The statement is ${answer}.`, 25);
  }
  return q('angle_types', `An angle measures ${angle}°. What type of angle is it?`,
    wordOptions(t.name, angleTypes.filter(a => a.name !== t.name).map(a => a.name)),
    t.name, `${angle}° is ${t.description}, so it is an ${t.name} angle.`, 25);
};

// ── Year 3-5: Metric conversions ─────────────────────────────────────────────
const genMetricConvert = (difficulty) => {
  const conversions = [
    { from: 'km', to: 'm', factor: 1000, max: 20 },
    { from: 'm', to: 'cm', factor: 100, max: 50 },
    { from: 'cm', to: 'mm', factor: 10, max: 100 },
    { from: 'kg', to: 'g', factor: 1000, max: 15 },
    { from: 'L', to: 'mL', factor: 1000, max: 20 },
    ...(difficulty !== 'easy' ? [
      { from: 'm', to: 'mm', factor: 1000, max: 10 },
      { from: 'km', to: 'cm', factor: 100000, max: 5 },
    ] : []),
  ];
  const c = pick(conversions);
  const val = randomInt(1, c.max);
  const answer = val * c.factor;
  const toSmaller = Math.random() > 0.5;
  if (toSmaller) {
    return q('metric_convert', `Convert ${val} ${c.from} to ${c.to}.`,
      getUniqueOptions(answer, [val * (c.factor / 10), answer + c.factor, val], 0, answer * 2),
      answer, `1 ${c.from} = ${c.factor} ${c.to}, so ${val} ${c.from} = ${answer} ${c.to}.`, 35);
  }
  const bigVal = val * c.factor;
  return q('metric_convert', `Convert ${bigVal} ${c.to} to ${c.from}.`,
    getUniqueOptions(val, [val - 1, val + 1, bigVal / (c.factor / 10)], 0, 100),
    val, `Divide by ${c.factor}: ${bigVal} ÷ ${c.factor} = ${val} ${c.from}.`, 35);
};

// ── Year 4: Decimal place value ──────────────────────────────────────────────
const genDecimalPlaceValue = (difficulty) => {
  const places = difficulty === 'easy'
    ? [{ name: 'tenths', pos: 1, factor: 0.1 }]
    : difficulty === 'medium'
    ? [{ name: 'tenths', pos: 1, factor: 0.1 }, { name: 'hundredths', pos: 2, factor: 0.01 }]
    : [{ name: 'tenths', pos: 1, factor: 0.1 }, { name: 'hundredths', pos: 2, factor: 0.01 }, { name: 'thousandths', pos: 3, factor: 0.001 }];
  const p = pick(places);
  const intPart = randomInt(0, 9);
  const digits = Array.from({ length: p.pos }, () => randomInt(0, 9));
  while (digits[digits.length - 1] === 0) digits[digits.length - 1] = randomInt(1, 9);
  const numStr = `${intPart}.${digits.join('')}`;
  const targetDigit = digits[p.pos - 1];
  const targetValue = parseFloat((targetDigit * p.factor).toFixed(4));
  const mode = pick(['identify_digit', 'identify_value']);
  if (mode === 'identify_digit') {
    return q('decimal_place_value', `In ${numStr}, which digit is in the ${p.name} place?`,
      getUniqueOptions(targetDigit, [digits[0], intPart, targetDigit === 0 ? 1 : 0], 0, 9),
      targetDigit, `In ${numStr}, the ${p.name} digit is ${targetDigit}.`, 25);
  }
  return q('decimal_place_value', `What is the value of the ${p.name} digit in ${numStr}?`,
    wordOptions(String(targetValue), [String(targetDigit), String(targetDigit * 10 * p.factor), String(targetValue * 10)]),
    String(targetValue), `The ${p.name} digit ${targetDigit} has value ${targetValue}.`, 30);
};

// ── Year 4-5: Elapsed time and AM/PM ─────────────────────────────────────────
const genElapsedTime = (difficulty) => {
  const isAMPM = difficulty === 'easy';
  const startH = randomInt(7, 15);
  const startM = pick([0, 15, 30, 45]);
  const durationMins = pick(difficulty === 'easy' ? [30, 60, 90] : [25, 40, 55, 75, 110, 135]);
  const totalMins = startH * 60 + startM + durationMins;
  const endH = Math.floor(totalMins / 60) % 24;
  const endM = totalMins % 60;
  const fmt = (h, m) => `${h % 12 === 0 ? 12 : h % 12}:${String(m).padStart(2,'0')} ${h < 12 ? 'AM' : 'PM'}`;
  const fmt24 = (h, m) => `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
  const startStr = isAMPM ? fmt(startH, startM) : fmt24(startH, startM);
  const endStr = isAMPM ? fmt(endH, endM) : fmt24(endH, endM);
  const mode = pick(['find_end', 'find_duration', 'find_start']);
  if (mode === 'find_duration') {
    const wrongA = fmt24(endH, endM + 5 > 59 ? endM - 5 : endM + 5).replace(/\d+:\d+/, d => d);
    return q('elapsed_time', `A movie starts at ${startStr} and ends at ${endStr}. How long is the movie?`,
      wordOptions(`${durationMins} minutes`, [`${durationMins + 15} minutes`, `${durationMins - 15} minutes`, `${Math.floor(durationMins/60)} hour${durationMins >= 120 ? 's' : ''}`]),
      `${durationMins} minutes`, `From ${startStr} to ${endStr} is ${durationMins} minutes.`, 50);
  }
  if (mode === 'find_start') {
    const endTime = isAMPM ? fmt(endH, endM) : fmt24(endH, endM);
    const wrongStart1 = isAMPM ? fmt(startH - 1, startM) : fmt24(startH - 1, startM);
    const wrongStart2 = isAMPM ? fmt(startH + 1, startM) : fmt24(startH + 1, startM);
    return q('elapsed_time', `A lesson ends at ${endTime} and lasts ${durationMins} minutes. When did it start?`,
      wordOptions(startStr, [wrongStart1, wrongStart2, isAMPM ? fmt(startH, startM + 15 > 59 ? 0 : startM + 15) : fmt24(startH, startM + 15 > 59 ? 0 : startM + 15)]),
      startStr, `Subtract ${durationMins} minutes from ${endTime}: start time is ${startStr}.`, 50);
  }
  const wrongEnd1 = isAMPM ? fmt(endH, endM + 10 > 59 ? endM - 10 : endM + 10) : fmt24(endH, endM + 10 > 59 ? endM - 10 : endM + 10);
  const wrongEnd2 = isAMPM ? fmt(endH + 1 > 23 ? endH : endH + 1, endM) : fmt24(endH + 1 > 23 ? endH : endH + 1, endM);
  return q('elapsed_time', `An activity starts at ${startStr} and lasts ${durationMins} minutes. What time does it finish?`,
    wordOptions(endStr, [wrongEnd1, wrongEnd2, isAMPM ? fmt(endH, startM) : fmt24(endH, startM)]),
    endStr, `Add ${durationMins} minutes to ${startStr}: finish time is ${endStr}.`, 45);
};

// ── Year 5: Factors and multiples ────────────────────────────────────────────
const genFactorsMultiples = (difficulty) => {
  const mode = pick(['factors_of', 'multiples_of', 'common_factor', 'common_multiple', 'hcf', 'lcm']);
  if (mode === 'multiples_of') {
    const n = pick(difficulty === 'easy' ? [2,3,4,5,10] : [3,4,6,7,8,9]);
    const pos = randomInt(3, 10);
    const answer = n * pos;
    return q('factors_multiples', `Which of these is a multiple of ${n}?`,
      wordOptions(String(answer), [answer-1, answer+1, answer+n-1].map(String)),
      String(answer), `${n} × ${pos} = ${answer}, so ${answer} is a multiple of ${n}.`, 25);
  }
  if (mode === 'common_factor') {
    const shared = pick([2,3,4,5]);
    const a = shared * randomInt(2,5), b = shared * randomInt(2,5);
    const answer = shared;
    return q('factors_multiples', `What is a common factor of ${a} and ${b}?`,
      getUniqueOptions(answer, [answer+1, answer-1, a], 1, 20), answer,
      `Both ${a} and ${b} are divisible by ${answer}.`, 35);
  }
  if (mode === 'lcm') {
    const a = pick([2,3,4,5,6]), b = pick([2,3,4,5,6]);
    const l = (a * b) / gcd(a, b);
    return q('factors_multiples', `What is the lowest common multiple (LCM) of ${a} and ${b}?`,
      getUniqueOptions(l, [a * b, l + a, l - b], 1, 100), l,
      `Multiples of ${a}: ${a},${a*2},${a*3}... Multiples of ${b}: ${b},${b*2},${b*3}... LCM = ${l}.`, 45);
  }
  if (mode === 'hcf') {
    const a = pick([12,18,24,30,36]), b = pick([6,9,12,15,18]);
    const h = gcd(a, b);
    return q('factors_multiples', `What is the highest common factor (HCF) of ${a} and ${b}?`,
      getUniqueOptions(h, [h-1, h+1, h*2], 1, 50), h,
      `Factors of ${a}: ${Array.from({length:a}, (_,i)=>i+1).filter(f=>a%f===0).join(', ')}. HCF with ${b} = ${h}.`, 45);
  }
  // factors_of
  const n = pick(difficulty === 'easy' ? [12,15,18,20] : [24,30,36,48,60]);
  const factors = Array.from({length:n}, (_,i)=>i+1).filter(f=>n%f===0);
  const notFactor = Array.from({length:n}, (_,i)=>i+1).filter(f=>n%f!==0);
  const answer = String(pick(factors));
  return q('factors_multiples', `Which of these is a factor of ${n}?`,
    wordOptions(answer, notFactor.slice(0,3).map(String)),
    answer, `${answer} divides into ${n} evenly (${n} ÷ ${answer} = ${n/Number(answer)}). All factors of ${n}: ${factors.join(', ')}.`, 35);
};

// ── Year 6: Prime and composite numbers ──────────────────────────────────────
const genPrimeComposite = () => {
  const primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];
  const composites = [4,6,8,9,10,12,14,15,16,18,20,21,22,24,25,26,27,28];
  const squares = [1,4,9,16,25,36,49,64,81,100];
  const mode = pick(['prime_or_composite', 'list_primes', 'square_number']);
  if (mode === 'square_number') {
    const sq = pick([2,3,4,5,6,7,8,9,10]);
    const answer = sq * sq;
    return q('prime_composite', `What is ${sq} squared (${sq}²)?`,
      getUniqueOptions(answer, [answer-sq, answer+sq, sq*2], 1, 150), answer,
      `${sq}² = ${sq} × ${sq} = ${answer}.`, 25);
  }
  if (mode === 'list_primes') {
    const range = [randomInt(2,10), randomInt(15,30)];
    const primesInRange = primes.filter(p => p >= range[0] && p <= range[1]);
    const answer = primesInRange.join(', ');
    return q('prime_composite', `List all prime numbers between ${range[0]} and ${range[1]}.`,
      wordOptions(answer, [
        primes.filter(p => p >= range[0] && p <= range[1] + 2).join(', '),
        composites.filter(c => c >= range[0] && c <= range[1]).slice(0,primesInRange.length).join(', '),
        primesInRange.slice(0,-1).join(', '),
      ]),
      answer, `Prime numbers between ${range[0]} and ${range[1]}: ${answer}.`, 40);
  }
  const n = Math.random() > 0.5 ? pick(primes.slice(0,10)) : pick(composites.slice(0,10));
  const isPrime = primes.includes(n);
  const answer = isPrime ? 'prime' : 'composite';
  return q('prime_composite', `Is ${n} a prime or composite number?`,
    ['prime', 'composite'],
    answer, isPrime
      ? `${n} is prime — its only factors are 1 and ${n}.`
      : `${n} is composite — it has factors other than 1 and itself (e.g. ${Array.from({length:n-1},(_,i)=>i+2).filter(f=>n%f===0)[0]}).`, 25);
};

// ── Year 5-6: Transformations ────────────────────────────────────────────────
const genTransformation = (difficulty) => {
  const mode = pick(['translation', 'reflection', 'rotation']);
  if (mode === 'reflection') {
    const axes = ['the x-axis', 'the y-axis', 'a vertical line', 'a horizontal line'];
    const axis = pick(axes);
    const x = randomInt(-6,6), y = randomInt(-6,6);
    const answer = axis.includes('x') ? `(${x}, ${-y})` : axis.includes('y') ? `(${-x}, ${y})` : `(${x}, ${-y})`;
    return q('transformation', `Point A(${x}, ${y}) is reflected over ${axis}. What are the new coordinates?`,
      wordOptions(answer, [`(${-x}, ${y})`, `(${-x}, ${-y})`, `(${y}, ${x})`]),
      answer, `Reflecting over ${axis}: the answer is ${answer}.`, 40);
  }
  if (mode === 'rotation') {
    const degs = pick([90, 180, 270]);
    const x = randomInt(1,6), y = randomInt(1,6);
    const rotated90 = `(${y}, ${-x})`;
    const rotated180 = `(${-x}, ${-y})`;
    const rotated270 = `(${-y}, ${x})`;
    const answers = { 90: rotated90, 180: rotated180, 270: rotated270 };
    const answer = answers[degs];
    return q('transformation', `Point P(${x}, ${y}) is rotated ${degs}° clockwise about the origin. What are the new coordinates?`,
      wordOptions(answer, [rotated90, rotated180, rotated270].filter(a => a !== answer)),
      answer, `Rotating (${x}, ${y}) by ${degs}° clockwise gives ${answer}.`, 45);
  }
  const right = pick([-4,-3,-2,-1,1,2,3,4]);
  const up = pick([-4,-3,-2,-1,1,2,3,4]);
  const x = randomInt(-5,5), y = randomInt(-5,5);
  const answer = `(${x+right}, ${y+up})`;
  return q('transformation', `Shape ABCD is translated by (${right}, ${up}). If A is at (${x}, ${y}), where is the image A'?`,
    wordOptions(answer, [`(${x-right}, ${y+up})`, `(${x+up}, ${y+right})`, `(${x+right}, ${y-up})`]),
    answer, `Add the translation vector: (${x}+${right}, ${y}+${up}) = ${answer}.`, 35);
};

// ── Year 6: Mean, median, mode, range ────────────────────────────────────────
const genMeanMedianMode = (difficulty) => {
  const count = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 6 : 7;
  const mode_stat = pick(['mean', 'median', 'mode', 'range']);
  // Build dataset with a guaranteed mode
  const modeVal = randomInt(2, 15);
  const data = [modeVal, modeVal, ...Array.from({length: count-2}, () => randomInt(1, 20))].sort((a,b) => a-b);
  const sum = data.reduce((s,n) => s+n, 0);
  if (mode_stat === 'mean') {
    const answer = parseFloat((sum / data.length).toFixed(2));
    return q('mean_median_mode', `Find the mean of: ${data.join(', ')}`,
      getUniqueOptions(answer, [answer+1, answer-1, data[Math.floor(data.length/2)]], 0, 30),
      answer, `Mean = sum ÷ count = ${sum} ÷ ${data.length} = ${answer}.`, 50);
  }
  if (mode_stat === 'median') {
    const mid = Math.floor(data.length / 2);
    const answer = data.length % 2 === 0 ? (data[mid-1] + data[mid]) / 2 : data[mid];
    return q('mean_median_mode', `Find the median of: ${data.join(', ')}`,
      getUniqueOptions(answer, [data[mid-1], data[mid+1] || data[mid]+1, answer+1], 0, 30),
      answer, `Sort the data: ${data.join(', ')}. Middle value = ${answer}.`, 45);
  }
  if (mode_stat === 'mode') {
    return q('mean_median_mode', `Find the mode of: ${data.join(', ')}`,
      getUniqueOptions(modeVal, [data[0], data[data.length-1], modeVal+1], 0, 30),
      modeVal, `The mode is the most frequent value. ${modeVal} appears most often.`, 35);
  }
  const range = data[data.length-1] - data[0];
  return q('mean_median_mode', `Find the range of: ${data.join(', ')}`,
    getUniqueOptions(range, [range+1, range-1, sum], 0, 30),
    range, `Range = largest − smallest = ${data[data.length-1]} − ${data[0]} = ${range}.`, 30);
};

// ── Year 5-6: Line graphs ─────────────────────────────────────────────────────
const drawLineGraphSvg = (points, xLabels, title = '') => {
  const W = 420, H = 240;
  const padL = 50, padB = 50, padT = title ? 36 : 18, padR = 20;
  const chartW = W - padL - padR, chartH = H - padT - padB;
  const maxY = Math.max(...points) + 2;
  const toX = i => padL + Math.round(i * chartW / (points.length - 1));
  const toY = v => padT + chartH - Math.round((v / maxY) * chartH);
  const pathD = points.map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(v)}`).join(' ');
  const dots = points.map((v, i) =>
    `<circle cx="${toX(i)}" cy="${toY(v)}" r="5" fill="#818cf8" stroke="white" stroke-width="2"/>` +
    `<text x="${toX(i)}" y="${toY(v) - 10}" text-anchor="middle" font-size="12" font-family="Inter,Arial,sans-serif" fill="#334155">${v}</text>`
  ).join('');
  const xTickLabels = xLabels.map((l, i) =>
    `<text x="${toX(i)}" y="${H - padB + 18}" text-anchor="middle" font-size="12" font-family="Inter,Arial,sans-serif" fill="#475569">${l}</text>`
  ).join('');
  const titleEl = title ? `<text x="${W/2}" y="22" text-anchor="middle" font-size="14" font-weight="700" font-family="Inter,Arial,sans-serif" fill="#334155">${title}</text>` : '';
  return svgDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Line graph">
    <rect width="${W}" height="${H}" rx="18" fill="#f8fafc"/>
    ${titleEl}
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT+chartH}" stroke="#94a3b8" stroke-width="2"/>
    <line x1="${padL}" y1="${padT+chartH}" x2="${padL+chartW}" y2="${padT+chartH}" stroke="#94a3b8" stroke-width="2"/>
    <path d="${pathD}" fill="none" stroke="#818cf8" stroke-width="3"/>
    ${dots}
    ${xTickLabels}
  </svg>`);
};

const genLineGraph = () => {
  const themes = [
    { xLabels: ['Mon','Tue','Wed','Thu','Fri'], title: 'Steps per day', unit: 'steps', scale: 1000 },
    { xLabels: ['Jan','Feb','Mar','Apr','May'], title: 'Rainfall (mm)', unit: 'mm', scale: 10 },
    { xLabels: ['Week 1','Week 2','Week 3','Week 4','Week 5'], title: 'Books read', unit: 'books', scale: 1 },
    { xLabels: ['Mon','Tue','Wed','Thu','Fri'], title: 'Temperature (°C)', unit: '°C', scale: 1 },
  ];
  const t = pick(themes);
  const points = t.xLabels.map(() => randomInt(2, 12) * t.scale);
  const chartImg = drawLineGraphSvg(points, t.xLabels, t.title);
  const mode = pick(['highest', 'lowest', 'total', 'change']);
  if (mode === 'highest') {
    const maxVal = Math.max(...points);
    const maxIdx = points.indexOf(maxVal);
    const answer = `${t.xLabels[maxIdx]} (${maxVal})`;
    return q('line_graph', `Look at the line graph. On which day/period was the ${t.unit === 'temperature (°C)' ? 'temperature' : t.unit} highest?`,
      wordOptions(t.xLabels[maxIdx], t.xLabels.filter(l => l !== t.xLabels[maxIdx])),
      t.xLabels[maxIdx], `The highest point is on ${t.xLabels[maxIdx]} with a value of ${maxVal}.`, 35, '', { questionImage: chartImg });
  }
  if (mode === 'total') {
    const total = points.reduce((s,v) => s+v, 0);
    return q('line_graph', `Look at the line graph. What is the total ${t.unit} for all periods shown?`,
      getUniqueOptions(total, [total - points[0], total + t.scale, total - t.scale], 0, total * 2),
      total, `Add all values: ${points.join(' + ')} = ${total}.`, 40, '', { questionImage: chartImg });
  }
  if (mode === 'change') {
    const idx = randomInt(0, points.length - 2);
    const change = points[idx+1] - points[idx];
    const answer = Math.abs(change);
    return q('line_graph', `Look at the line graph. By how much did the value change between ${t.xLabels[idx]} and ${t.xLabels[idx+1]}?`,
      getUniqueOptions(answer, [answer + t.scale, Math.max(0, answer - t.scale), points[idx]], 0, 50 * t.scale),
      answer, `${points[idx+1]} − ${points[idx]} = ${change} (change of ${answer}).`, 40, '', { questionImage: chartImg });
  }
  const minVal = Math.min(...points);
  const minIdx = points.indexOf(minVal);
  return q('line_graph', `Look at the line graph. On which day/period was the value lowest?`,
    wordOptions(t.xLabels[minIdx], t.xLabels.filter(l => l !== t.xLabels[minIdx])),
    t.xLabels[minIdx], `The lowest point is on ${t.xLabels[minIdx]} with a value of ${minVal}.`, 30, '', { questionImage: chartImg });
};

// ── Year 6: Stem-and-leaf plots ──────────────────────────────────────────────
const genStemLeaf = () => {
  const data = Array.from({length: 8}, () => randomInt(11, 59)).sort((a,b) => a-b);
  const stemMap = {};
  data.forEach(n => {
    const stem = Math.floor(n/10);
    if (!stemMap[stem]) stemMap[stem] = [];
    stemMap[stem].push(n % 10);
  });
  const stemStr = Object.entries(stemMap).map(([s,l]) => `${s} | ${l.join(' ')}`).join(', ');
  const mode = pick(['find_median', 'find_range', 'find_mode']);
  if (mode === 'find_range') {
    const answer = data[data.length-1] - data[0];
    return q('stem_leaf', `Stem-and-leaf plot: ${stemStr}. What is the range?`,
      getUniqueOptions(answer, [answer+1, answer-1, data[data.length-1]], 0, 50),
      answer, `Range = ${data[data.length-1]} − ${data[0]} = ${answer}.`, 40);
  }
  if (mode === 'find_mode') {
    const freq = {};
    data.forEach(n => { freq[n] = (freq[n]||0)+1; });
    const modeVal = Number(Object.entries(freq).sort((a,b)=>b[1]-a[1])[0][0]);
    return q('stem_leaf', `Stem-and-leaf plot: ${stemStr}. What is the mode?`,
      getUniqueOptions(modeVal, [data[0], data[data.length-1], modeVal+1], 0, 60),
      modeVal, `${modeVal} appears most frequently in the data.`, 40);
  }
  const mid = Math.floor(data.length/2);
  const median = data.length % 2 === 0 ? (data[mid-1]+data[mid])/2 : data[mid];
  return q('stem_leaf', `Stem-and-leaf plot: ${stemStr}. What is the median?`,
    getUniqueOptions(median, [data[mid-1], data[mid], median+1], 0, 60),
    median, `Ordered data: ${data.join(', ')}. Median = ${median}.`, 45);
};

// ── Year 6: Angle relationships ───────────────────────────────────────────────
const genAngleRelationships = (difficulty) => {
  const mode = pick(['vertically_opposite', 'supplementary', 'complementary', 'angles_in_polygon']);
  if (mode === 'vertically_opposite') {
    const angle = randomInt(25, 155);
    return q('angle_relationships', `Two straight lines intersect. One angle is ${angle}°. What is the vertically opposite angle?`,
      getUniqueOptions(angle, [180-angle, 90-angle, 360-angle], 0, 360),
      angle, `Vertically opposite angles are equal. Both angles are ${angle}°.`, 30);
  }
  if (mode === 'supplementary') {
    const angle = randomInt(20, 160);
    const answer = 180 - angle;
    return q('angle_relationships', `Two angles are supplementary (they form a straight line). One angle is ${angle}°. What is the other angle?`,
      getUniqueOptions(answer, [360-angle, 90-angle, answer+10], 0, 180),
      answer, `Supplementary angles add to 180°. ${angle}° + ${answer}° = 180°.`, 30);
  }
  if (mode === 'complementary') {
    const angle = randomInt(10, 80);
    const answer = 90 - angle;
    return q('angle_relationships', `Two angles are complementary (they form a right angle). One angle is ${angle}°. Find the other.`,
      getUniqueOptions(answer, [180-angle, answer+10, answer-10], 0, 90),
      answer, `Complementary angles add to 90°. ${angle}° + ${answer}° = 90°.`, 30);
  }
  const sides = pick([5,6,7,8]);
  const totalInterior = (sides - 2) * 180;
  const answer = totalInterior;
  return q('angle_relationships', `What is the sum of interior angles of a ${['','','','','pentagon','hexagon','heptagon','octagon'][sides]}?`,
    getUniqueOptions(answer, [answer - 180, answer + 180, sides * 90], 0, 1800),
    answer, `Sum of interior angles = (${sides} − 2) × 180° = ${sides-2} × 180° = ${answer}°.`, 40);
};

// ── Year 5-6: Money / financial maths ────────────────────────────────────────
const genMoneyDollars = (difficulty) => {
  const mode = pick(['make_amount', 'change', 'best_deal', 'profit_loss']);
  if (mode === 'profit_loss') {
    const cost = randomInt(5, 40) * 100;
    const sell = cost + pick([-500, -300, 200, 500, 1000]);
    const safesSell = Math.max(50, sell);
    const answer = safesSell > cost ? `Profit of $${((safesSell-cost)/100).toFixed(2)}` : `Loss of $${((cost-safesSell)/100).toFixed(2)}`;
    return q('money_dollars', `An item costs $${(cost/100).toFixed(2)} to make and is sold for $${(safesSell/100).toFixed(2)}. What is the profit or loss?`,
      wordOptions(answer, [`Profit of $${((safesSell+cost)/100).toFixed(2)}`, `Loss of $${(cost/100).toFixed(2)}`, answer === `Profit of $${((safesSell-cost)/100).toFixed(2)}` ? `Loss of $${((safesSell-cost)/100).toFixed(2)}` : `Profit of $${((cost-safesSell)/100).toFixed(2)}`]),
      answer, `${safesSell > cost ? 'Profit' : 'Loss'} = |sell − cost| = $${(Math.abs(safesSell-cost)/100).toFixed(2)}.`, 45);
  }
  if (mode === 'best_deal') {
    const unitPrice = randomInt(50, 200);
    const qty1 = pick([3,4,5,6]), qty2 = pick([8,9,10,12]);
    const price1 = unitPrice * qty1, price2 = Math.round(unitPrice * qty2 * 0.85);
    const perUnit1 = (price1/qty1).toFixed(0), perUnit2 = (price2/qty2).toFixed(0);
    const answer = perUnit1 <= perUnit2 ? `Pack of ${qty1}` : `Pack of ${qty2}`;
    return q('money_dollars', `Pack of ${qty1}: $${(price1/100).toFixed(2)}. Pack of ${qty2}: $${(price2/100).toFixed(2)}. Which is better value per item?`,
      [`Pack of ${qty1}`, `Pack of ${qty2}`], answer,
      `Per item: Pack of ${qty1} = ${perUnit1}c, Pack of ${qty2} = ${perUnit2}c. ${answer} is better value.`, 50);
  }
  const total = randomInt(3, 15) * 100 + pick([0, 25, 50, 75]);
  const paid = Math.ceil(total / 500) * 500;
  const change = paid - total;
  return q('money_dollars', `An item costs $${(total/100).toFixed(2)}. You pay $${(paid/100).toFixed(2)}. What change do you receive?`,
    wordOptions(`$${(change/100).toFixed(2)}`, [`$${((change+50)/100).toFixed(2)}`, `$${(total/100).toFixed(2)}`, `$${((paid-change)/100).toFixed(2)}`]),
    `$${(change/100).toFixed(2)}`, `Change = $${(paid/100).toFixed(2)} − $${(total/100).toFixed(2)} = $${(change/100).toFixed(2)}.`, 40);
};

// ── Year 3-4: Input-output tables (function machines) ────────────────────────
const genInputOutput = (difficulty) => {
  const ops = difficulty === 'easy'
    ? [{ sym: '+', fn: (x,n) => x+n }, { sym: '-', fn: (x,n) => x-n }]
    : [{ sym: '+', fn: (x,n) => x+n }, { sym: '-', fn: (x,n) => x-n }, { sym: '×', fn: (x,n) => x*n }, { sym: '÷', fn: (x,n) => Math.round(x/n) }];
  const op = pick(ops);
  const n = op.sym === '÷' ? pick([2,3,4,5]) : op.sym === '×' ? pick([2,3,4,5,6]) : randomInt(3, 15);
  const inputs = Array.from({length:4}, () => randomInt(2, op.sym === '÷' ? n*8 : 20));
  const outputs = inputs.map(x => op.fn(x, n));
  const missingIdx = randomInt(0, 3);
  const answer = outputs[missingIdx];
  const shownRows = inputs.map((x,i) => `${x} → ${i === missingIdx ? '?' : outputs[i]}`).join(', ');
  return q('input_output', `Complete the table. Rule: ? (each input follows the same rule). ${shownRows}. What is the missing output?`,
    getUniqueOptions(answer, [answer+n, answer-n, inputs[missingIdx]], 0, 200),
    answer, `The rule is "input ${op.sym} ${n}". ${inputs[missingIdx]} ${op.sym} ${n} = ${answer}.`, 40);
};

// ── Year 5-6: Multi-step word problems ───────────────────────────────────────
const genWordProblemMultiStep = (difficulty) => {
  const type = pick(['shopping', 'distance', 'sharing', 'comparison']);
  if (type === 'shopping') {
    const price1 = randomInt(2, 15) * 100;
    const price2 = randomInt(1, 8) * 100;
    const qty1 = randomInt(2,5), qty2 = randomInt(2,5);
    const total = price1 * qty1 + price2 * qty2;
    const budget = Math.ceil(total / 500) * 500 + pick([0, 500, 1000]);
    const change = budget - total;
    return q('word_problem_multistep', `${qty1} pens cost $${(price1/100).toFixed(2)} each and ${qty2} books cost $${(price2/100).toFixed(2)} each. You pay $${(budget/100).toFixed(2)}. How much change do you get?`,
      wordOptions(`$${(change/100).toFixed(2)}`, [`$${(total/100).toFixed(2)}`, `$${(change+price1/100).toFixed(2)}`, `$${(change-price2/100).toFixed(2)}`]),
      `$${(change/100).toFixed(2)}`, `Total = ${qty1}×$${(price1/100).toFixed(2)} + ${qty2}×$${(price2/100).toFixed(2)} = $${(total/100).toFixed(2)}. Change = $${(budget/100).toFixed(2)} − $${(total/100).toFixed(2)} = $${(change/100).toFixed(2)}.`, 75);
  }
  if (type === 'distance') {
    const speed = pick([60,80,90,100,110]);
    const time = randomInt(2,5);
    const total = speed * time;
    const partial = randomInt(1, time-1);
    const remaining = total - speed * partial;
    return q('word_problem_multistep', `A car travels at ${speed} km/h for ${time} hours. After ${partial} hour${partial>1?'s':''}, how many kilometres remain?`,
      getUniqueOptions(remaining, [speed*partial, total, remaining+speed], 0, 1000),
      remaining, `Total distance = ${speed}×${time} = ${total} km. Travelled = ${speed}×${partial} = ${speed*partial} km. Remaining = ${remaining} km.`, 60);
  }
  if (type === 'comparison') {
    const a = randomInt(50, 200);
    const bExtra = randomInt(10, 50);
    const b = a + bExtra;
    const total = a + b;
    return q('word_problem_multistep', `Together, two friends have ${total} marbles. One friend has ${bExtra} more than the other. How many marbles does the friend with fewer marbles have?`,
      getUniqueOptions(a, [b, total-bExtra, a+10], 0, 300),
      a, `Let smaller = x. x + (x + ${bExtra}) = ${total}. 2x = ${total-bExtra}. x = ${a}.`, 65);
  }
  const total = randomInt(3,8) * randomInt(4,10);
  const groups = randomInt(3,6);
  const each = Math.floor(total / groups);
  const leftover = total % groups;
  return q('word_problem_multistep', `${total} students are divided into ${groups} equal groups. How many students are in each group${leftover > 0 ? ', and how many are left over?' : '?'}`,
    leftover > 0
      ? wordOptions(`${each} with ${leftover} left over`, [`${each+1}`, `${each} with no remainder`, `${groups} with ${each} left over`])
      : getUniqueOptions(each, [each-1, each+1, groups], 1, 50),
    leftover > 0 ? `${each} with ${leftover} left over` : each,
    `${total} ÷ ${groups} = ${each}${leftover > 0 ? ` remainder ${leftover}` : ''}.`, 55);
};

// ── Year 6: Negative numbers in context ──────────────────────────────────────
const genNegativeContext = (difficulty) => {
  const mode = pick(['temperature', 'elevation', 'number_line', 'add_subtract']);
  if (mode === 'temperature') {
    const morning = randomInt(-10, 5);
    const change = randomInt(3, 15);
    const askWarming = Math.random() > 0.5;
    const afternoon = askWarming ? morning + change : morning - change;
    return q('negative_context', `The temperature was ${morning}°C. It ${askWarming ? 'rose' : 'fell'} by ${change}°C. What is the new temperature?`,
      getUniqueOptions(afternoon, [morning + (askWarming ? -change : change), afternoon+1, afternoon-1], -30, 50),
      afternoon, `${morning} ${askWarming ? '+' : '−'} ${change} = ${afternoon}°C.`, 35);
  }
  if (mode === 'elevation') {
    const underwater = randomInt(-100, -10);
    const rise = randomInt(5, 80);
    const answer = underwater + rise;
    return q('negative_context', `A submarine is at ${underwater} m (below sea level). It rises ${rise} m. What is its new depth?`,
      getUniqueOptions(answer, [answer+10, Math.abs(underwater)-rise, answer-10], -200, 50),
      answer, `${underwater} + ${rise} = ${answer} m.`, 40);
  }
  if (mode === 'add_subtract') {
    const a = randomInt(-15, 15);
    const b = randomInt(-10, 10);
    const isAdd = Math.random() > 0.5;
    const answer = isAdd ? a + b : a - b;
    return q('negative_context', `Calculate: ${a} ${isAdd ? '+' : '−'} ${isAdd ? b : `(${b < 0 ? b : b})`} = ?`,
      getUniqueOptions(answer, [answer+1, answer-1, Math.abs(answer)], -50, 50),
      answer, `${a} ${isAdd ? '+' : '−'} ${b} = ${answer}.`, 30);
  }
  // number line ordering with negatives
  const nums = Array.from({length:4}, () => randomInt(-10, 10));
  const sorted = [...nums].sort((a,b)=>a-b).join(', ');
  const reversed = [...nums].sort((a,b)=>b-a).join(', ');
  return q('negative_context', `Order these numbers from smallest to largest: ${nums.join(', ')}`,
    wordOptions(sorted, [reversed, nums.join(', '), `${nums[1]}, ${nums[0]}, ${nums[2]}, ${nums[3]}`]),
    sorted, `Ordered: ${sorted}.`, 30);
};

// ── Year 4-5: 24-hour time ────────────────────────────────────────────────────
const gen24HourTime = () => {
  const h = randomInt(0, 23);
  const m = pick([0, 15, 30, 45]);
  const fmt12 = (h, m) => {
    const period = h < 12 ? 'AM' : 'PM';
    const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
    return `${h12}:${String(m).padStart(2,'0')} ${period}`;
  };
  const fmt24 = (h, m) => `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
  const toTwentyFour = Math.random() > 0.5;
  if (toTwentyFour) {
    const answer = fmt24(h, m);
    const wrong = [fmt24((h+1)%24, m), fmt24(h > 0 ? h-1 : 23, m), fmt24(h, m === 0 ? 30 : 0)];
    return q('time_24hour', `Convert ${fmt12(h,m)} to 24-hour time.`,
      wordOptions(answer, wrong), answer,
      `${fmt12(h,m)} in 24-hour time is ${answer}.`, 30);
  }
  const answer = fmt12(h, m);
  const wrong = [fmt12((h+1)%24, m), fmt12(h > 0 ? h-1 : 23, m), fmt12(h, m === 0 ? 30 : 0)];
  return q('time_24hour', `Convert ${fmt24(h,m)} to 12-hour time.`,
    wordOptions(answer, wrong), answer,
    `${fmt24(h,m)} in 12-hour time is ${answer}.`, 30);
};

// ── Year 5: Protractor / measuring angles ─────────────────────────────────────
const genProtractorAngle = () => {
  const angle = pick([30,45,60,75,90,105,120,135,150]);
  const mode = pick(['estimate_type', 'calculate_missing', 'name']);
  const types = { 30:'acute', 45:'acute', 60:'acute', 75:'acute', 90:'right', 105:'obtuse', 120:'obtuse', 135:'obtuse', 150:'obtuse' };
  if (mode === 'estimate_type') {
    const type = types[angle];
    return q('protractor_angle', `An angle measures ${angle}°. What type of angle is it?`,
      wordOptions(type, ['acute','right','obtuse','reflex'].filter(t=>t!==type)),
      type, `${angle}° is ${type === 'acute' ? 'less than' : type === 'right' ? 'exactly' : 'greater than'} 90°, so it is ${type}.`, 25);
  }
  const sum = 180;
  const other = sum - angle;
  return q('protractor_angle', `Two angles on a straight line. One is ${angle}°. What is the other?`,
    getUniqueOptions(other, [360-angle, angle, other+10], 0, 180),
    other, `Angles on a straight line sum to 180°. ${angle}° + ${other}° = 180°.`, 30);
};

// ── Year 6: Cross-sections of 3D objects ─────────────────────────────────────
const genCrossSection = () => {
  const objects = [
    { name: 'cube', horizontalCross: 'square', verticalCross: 'square' },
    { name: 'cylinder', horizontalCross: 'circle', verticalCross: 'rectangle' },
    { name: 'cone', horizontalCross: 'circle', verticalCross: 'triangle' },
    { name: 'rectangular prism', horizontalCross: 'rectangle', verticalCross: 'rectangle' },
    { name: 'triangular prism', horizontalCross: 'triangle', verticalCross: 'rectangle' },
    { name: 'square pyramid', horizontalCross: 'square', verticalCross: 'triangle' },
  ];
  const obj = pick(objects);
  const isHorizontal = Math.random() > 0.5;
  const answer = isHorizontal ? obj.horizontalCross : obj.verticalCross;
  const allShapes = ['circle','square','rectangle','triangle','hexagon'];
  return q('cross_section', `What shape is the cross-section if you cut a ${obj.name} ${isHorizontal ? 'horizontally' : 'vertically'}?`,
    wordOptions(answer, allShapes.filter(s => s !== answer)),
    answer, `A ${isHorizontal ? 'horizontal' : 'vertical'} cross-section of a ${obj.name} is a ${answer}.`, 35);
};

// ── Year 4: Symmetry ──────────────────────────────────────────────────────────
const genSymmetry = () => {
  const shapes = [
    { name: 'square', lines: 4 },
    { name: 'rectangle', lines: 2 },
    { name: 'equilateral triangle', lines: 3 },
    { name: 'isosceles triangle', lines: 1 },
    { name: 'regular pentagon', lines: 5 },
    { name: 'regular hexagon', lines: 6 },
    { name: 'circle', lines: 'infinite' },
    { name: 'scalene triangle', lines: 0 },
    { name: 'parallelogram', lines: 0 },
  ];
  const s = pick(shapes);
  const mode = pick(['how_many', 'true_false', 'identify_shape']);
  if (mode === 'true_false') {
    const isTrue = Math.random() > 0.4;
    const wrongLines = s.lines === 'infinite' ? 6 : typeof s.lines === 'number' ? s.lines + pick([-1, 1, 2]) : 0;
    const statement = isTrue
      ? `A ${s.name} has ${s.lines === 'infinite' ? 'infinite' : s.lines} line${s.lines === 1 ? '' : 's'} of symmetry.`
      : `A ${s.name} has ${Math.max(0, wrongLines)} line${wrongLines === 1 ? '' : 's'} of symmetry.`;
    const answer = isTrue ? 'True' : 'False';
    return q('symmetry', `True or false: ${statement}`, ['True', 'False'], answer,
      `A ${s.name} has ${s.lines} line${s.lines === 1 ? '' : 's'} of symmetry. The statement is ${answer}.`, 25);
  }
  return q('symmetry', `How many lines of symmetry does a ${s.name} have?`,
    wordOptions(String(s.lines), ['0','1','2','3','4','5','6'].filter(n => n !== String(s.lines))),
    String(s.lines), `A ${s.name} has ${s.lines} line${s.lines === 1 ? '' : 's'} of symmetry.`, 30);
};

// ── Year 3-4: Money (dollars) ─────────────────────────────────────────────────
const genMoneyAddSub = (difficulty) => {
  const a = (randomInt(1, difficulty === 'hard' ? 99 : 20) * 100 + pick([0,25,50,75]));
  const b = (randomInt(1, difficulty === 'hard' ? 50 : 10) * 100 + pick([0,25,50,75]));
  const isAdd = Math.random() > 0.5;
  const answer = isAdd ? a + b : Math.abs(a - b);
  const fmt = v => `$${(v/100).toFixed(2)}`;
  return q('money_add_sub', `${fmt(a)} ${isAdd ? '+' : '−'} ${fmt(b)} = ?`,
    wordOptions(fmt(answer), [fmt(answer+50), fmt(answer-50 < 0 ? answer+100 : answer-50), fmt(a+b)].filter(v=>v!==fmt(answer))),
    fmt(answer), `${fmt(a)} ${isAdd ? '+' : '−'} ${fmt(b)} = ${fmt(answer)}.`, 35);
};

// ── Year 4: Perimeter of polygons ────────────────────────────────────────────
const genPerimeterPolygon = (difficulty) => {
  const shapes = [
    { name: 'equilateral triangle', sides: 3, fn: (s) => [s,s,s] },
    { name: 'square', sides: 4, fn: (s) => [s,s,s,s] },
    { name: 'rectangle', sides: 4, fn: () => { const l=randomInt(5,20),w=randomInt(2,l-1); return [l,w,l,w]; } },
    { name: 'regular pentagon', sides: 5, fn: (s) => Array(5).fill(s) },
    { name: 'regular hexagon', sides: 6, fn: (s) => Array(6).fill(s) },
  ];
  const shape = pick(shapes);
  const sideLen = randomInt(3, 12);
  const sideList = shape.fn(sideLen);
  const perimeter = sideList.reduce((s,n)=>s+n, 0);
  const mode = pick(['find_perimeter', 'find_side']);
  if (mode === 'find_side' && shape.sides >= 3) {
    const answer = sideLen;
    return q('perimeter_polygon', `A ${shape.name} has a perimeter of ${perimeter} cm. What is the length of each side?`,
      getUniqueOptions(answer, [answer-1, answer+1, perimeter/4], 1, 50),
      answer, `Perimeter ÷ number of sides = ${perimeter} ÷ ${shape.sides} = ${answer} cm.`, 35);
  }
  return q('perimeter_polygon', `Find the perimeter of a ${shape.name} with sides: ${sideList.join(', ')} cm.`,
    getUniqueOptions(perimeter, [perimeter-sideLen, perimeter+sideLen, sideList[0]*sideList.length], 0, 200),
    perimeter, `Add all sides: ${sideList.join(' + ')} = ${perimeter} cm.`, 35);
};

// ── Year 5-6: Percentage problems ────────────────────────────────────────────
const genPercentageProblems = (difficulty) => {
  const mode = pick(['percent_of', 'find_percent', 'percent_increase', 'percent_decrease', 'gst']);
  if (mode === 'percent_increase') {
    const original = randomInt(5,40) * 10;
    const pct = pick(difficulty === 'easy' ? [10,25,50] : [5,10,15,20,25,30]);
    const increase = Math.round(original * pct / 100);
    const answer = original + increase;
    return q('percentage_problems', `A price of $${original} is increased by ${pct}%. What is the new price?`,
      getUniqueOptions(answer, [original + pct, increase, original - increase], 0, 1000),
      answer, `${pct}% of $${original} = $${increase}. New price = $${original} + $${increase} = $${answer}.`, 50);
  }
  if (mode === 'percent_decrease') {
    const original = randomInt(5,40) * 10;
    const pct = pick([10,20,25,30,50]);
    const decrease = Math.round(original * pct / 100);
    const answer = original - decrease;
    return q('percentage_problems', `A price of $${original} is discounted by ${pct}%. What is the sale price?`,
      getUniqueOptions(answer, [original + decrease, decrease, original + pct], 0, 1000),
      answer, `${pct}% of $${original} = $${decrease}. Sale price = $${original} − $${decrease} = $${answer}.`, 50);
  }
  if (mode === 'find_percent') {
    const total = randomInt(5,20) * 10;
    const part = randomInt(1, total - 1);
    const pct = Math.round(part / total * 100);
    const cleanPart = Math.round(pct * total / 100);
    return q('percentage_problems', `What percentage is ${cleanPart} out of ${total}?`,
      getUniqueOptions(pct, [100-pct, pct+5, pct-5], 0, 100),
      pct, `${cleanPart} ÷ ${total} × 100 = ${pct}%.`, 45);
  }
  if (mode === 'gst') {
    const price = randomInt(5,40) * 10;
    const gst = Math.round(price * 0.1);
    const total = price + gst;
    return q('percentage_problems', `An item costs $${price} before 10% GST. What is the total price including GST?`,
      getUniqueOptions(total, [price + 10, price * 1.01, total + 5], 0, 500),
      total, `GST = 10% × $${price} = $${gst}. Total = $${price} + $${gst} = $${total}.`, 45);
  }
  // percent_of
  const pct = pick(difficulty === 'easy' ? [10,25,50] : [5,10,15,20,25,30,40,75]);
  const whole = randomInt(4,30) * 10;
  const answer = Math.round(whole * pct / 100);
  return q('percentage_problems', `Find ${pct}% of ${whole}.`,
    getUniqueOptions(answer, [whole - answer, answer + pct, Math.round(whole * (pct+10)/100)], 0, whole),
    answer, `${pct}% of ${whole} = ${whole} × ${pct}/100 = ${answer}.`, 40);
};

// ── Year 3-4: Area using square units ────────────────────────────────────────
const genAreaSquareUnits = (difficulty) => {
  const rows = randomInt(2, difficulty === 'hard' ? 10 : 6);
  const cols = randomInt(2, difficulty === 'hard' ? 10 : 6);
  const area = rows * cols;
  const perimeter = 2 * (rows + cols);
  const mode = pick(['find_area', 'find_perimeter', 'missing_side']);
  if (mode === 'missing_side') {
    const givenSide = Math.random() > 0.5 ? rows : cols;
    const unknown = givenSide === rows ? cols : rows;
    return q('area_square_units', `A rectangle has an area of ${area} square units and one side is ${givenSide} units. What is the other side?`,
      getUniqueOptions(unknown, [unknown-1, unknown+1, area-givenSide], 1, 30),
      unknown, `Area ÷ side = ${area} ÷ ${givenSide} = ${unknown} units.`, 40);
  }
  if (mode === 'find_perimeter') {
    return q('area_square_units', `A rectangle is ${rows} units by ${cols} units. What is its perimeter?`,
      getUniqueOptions(perimeter, [area, perimeter+2, rows+cols], 0, 50),
      perimeter, `Perimeter = 2 × (${rows} + ${cols}) = ${perimeter} units.`, 35);
  }
  return q('area_square_units', `A rectangle has ${rows} rows and ${cols} columns of square units. What is its area?`,
    getUniqueOptions(area, [perimeter, area+rows, rows+cols], 0, 100),
    area, `Area = ${rows} × ${cols} = ${area} square units.`, 30);
};

// ── Year 3: Reading and making 3D shapes ─────────────────────────────────────
const gen3DShapeProperties = (difficulty) => {
  const shapes = [
    { name: 'cube', faces: 6, edges: 12, vertices: 8, faceShape: 'squares' },
    { name: 'rectangular prism', faces: 6, edges: 12, vertices: 8, faceShape: 'rectangles' },
    { name: 'triangular prism', faces: 5, edges: 9, vertices: 6, faceShape: 'triangles and rectangles' },
    { name: 'square pyramid', faces: 5, edges: 8, vertices: 5, faceShape: 'a square and triangles' },
    { name: 'triangular pyramid', faces: 4, edges: 6, vertices: 4, faceShape: 'triangles' },
    { name: 'cylinder', faces: 2, edges: 0, vertices: 0, faceShape: 'circles', curved: true },
    { name: 'cone', faces: 1, edges: 0, vertices: 1, faceShape: 'a circle', curved: true },
  ];
  const s = pick(shapes);
  const prop = pick(s.curved ? ['faces', 'face_shape'] : ['faces', 'edges', 'vertices', 'face_shape']);
  if (prop === 'face_shape') {
    return q('shape_3d_properties', `What shapes make the faces of a ${s.name}?`,
      wordOptions(s.faceShape, ['only squares', 'only triangles', 'only rectangles', 'circles and rectangles', 'squares and triangles'].filter(x=>x!==s.faceShape)),
      s.faceShape, `A ${s.name} has ${s.faces} face${s.faces!==1?'s':''} made of ${s.faceShape}.`, 30);
  }
  const answer = s[prop];
  return q('shape_3d_properties', `How many ${prop} does a ${s.name} have?`,
    getUniqueOptions(answer, [answer-1, answer+1, answer+2], 0, 15),
    answer, `A ${s.name} has ${s.faces} faces, ${s.edges} edges, and ${s.vertices} vertices.`, 30);
};

// ── Year 3-4: Number patterns with larger numbers ────────────────────────────
const genNumberPatternStage2 = (difficulty) => {
  const rules = [
    { desc: 'adding', step: pick(difficulty === 'easy' ? [3,4,5,10] : [7,8,9,11,25,100]) },
    { desc: 'subtracting', step: -pick(difficulty === 'easy' ? [3,4,5,10] : [7,8,9,11,25]) },
    { desc: 'multiplying', step: pick([2,3,4]), isMultiply: true },
  ];
  const rule = pick(rules);
  const start = randomInt(difficulty === 'easy' ? 2 : 100, difficulty === 'hard' ? 1000 : 200);
  let seq;
  if (rule.isMultiply) {
    seq = [start, start*rule.step, start*rule.step**2, start*rule.step**3, start*rule.step**4];
  } else {
    seq = Array.from({length:5}, (_,i) => start + rule.step * i).filter(n => n > 0);
    if (seq.length < 5) return genNumberPatternStage2(difficulty);
  }
  const missingIdx = randomInt(1, 3);
  const answer = seq[missingIdx];
  const shown = seq.map((n,i) => i === missingIdx ? '_' : n);
  return q('number_pattern_stage2', `Find the missing number in the pattern: ${shown.join(', ')}`,
    getUniqueOptions(answer, [seq[missingIdx-1], answer + Math.abs(rule.step), answer - Math.abs(rule.step)], 0, 100000),
    answer, `The rule is ${rule.isMultiply ? `multiply by ${rule.step}` : rule.step > 0 ? `add ${rule.step}` : `subtract ${Math.abs(rule.step)}`}. The missing number is ${answer}.`, 35);
};

// ── Year 6: Dot plots ────────────────────────────────────────────────────────
const genDotPlot = () => {
  const values = Array.from({length: 10}, () => randomInt(1, 8));
  const freq = {};
  values.forEach(v => { freq[v] = (freq[v]||0)+1; });
  const sorted = values.sort((a,b) => a-b);
  const mode = pick(['mode', 'range', 'median', 'read_frequency']);
  if (mode === 'read_frequency') {
    const val = pick(Object.keys(freq).map(Number));
    const answer = freq[val];
    return q('dot_plot', `A dot plot shows: ${Object.entries(freq).sort((a,b)=>a[0]-b[0]).map(([k,v])=>`${k}(×${v})`).join(', ')}. How many times does ${val} appear?`,
      getUniqueOptions(answer, [answer-1, answer+1, freq[val+1]||1], 0, 10),
      answer, `${val} appears ${answer} times in the dot plot.`, 30);
  }
  const range = sorted[sorted.length-1] - sorted[0];
  const modeVal = Number(Object.entries(freq).sort((a,b)=>b[1]-a[1])[0][0]);
  const mid = Math.floor(sorted.length/2);
  const median = sorted.length % 2 === 0 ? (sorted[mid-1]+sorted[mid])/2 : sorted[mid];
  if (mode === 'range') return q('dot_plot', `Dot plot data: ${sorted.join(', ')}. What is the range?`, getUniqueOptions(range, [range+1, range-1, modeVal], 0, 20), range, `Range = ${sorted[sorted.length-1]} − ${sorted[0]} = ${range}.`, 30);
  if (mode === 'median') return q('dot_plot', `Dot plot data: ${sorted.join(', ')}. What is the median?`, getUniqueOptions(median, [modeVal, median+1, median-1], 0, 20), median, `Middle value of ${sorted.join(', ')} is ${median}.`, 35);
  return q('dot_plot', `Dot plot data: ${sorted.join(', ')}. What is the mode?`, getUniqueOptions(modeVal, [sorted[0], sorted[sorted.length-1], modeVal+1], 0, 20), modeVal, `${modeVal} appears most often.`, 30);
};

// ── NEW NSW GENERATORS BATCH 1: Year 1-2 ──────────────────────────────────

const genSubitising = () => {
  const n = randomInt(1, 10);
  const arrangements = ['ten-frame', 'dice pattern', 'random dots', 'domino'];
  const arr = pick(arrangements);
  return q('subitising', `A ${arr} shows ${n} dot${n>1?'s':''}. How many dots are there without counting one by one?`,
    getUniqueOptions(n, [n-1,n+1,n+2], 1, 12), n,
    `There are ${n} dots. You can recognise this pattern instantly (subitising).`, 20);
};

const genEqualityBalance = () => {
  const a = randomInt(1, 9), b = randomInt(1, 9);
  const sum = a + b;
  const c = randomInt(1, sum - 1);
  const d = sum - c;
  return q('equality_balance', `${a} + ${b} = ${c} + ___`,
    getUniqueOptions(d, [d+1, d-1, b], 1, 18), d,
    `${a} + ${b} = ${sum}, so ${c} + ___ = ${sum}, meaning ___ = ${d}.`, 25);
};

const genAreaInformalCompare = () => {
  const shapes = [
    {name: 'book cover', units: randomInt(20, 40)},
    {name: 'piece of paper', units: randomInt(40, 60)},
    {name: 'whiteboard', units: randomInt(80, 120)},
    {name: 'table top', units: randomInt(60, 90)},
    {name: 'notebook', units: randomInt(15, 25)},
    {name: 'floor tile', units: randomInt(50, 70)},
  ];
  shuffle(shapes);
  const [A, B] = shapes.slice(0, 2);
  const bigger = A.units > B.units ? A.name : B.name;
  const smaller = A.units > B.units ? B.name : A.name;
  const opts = [bigger, smaller, 'They are the same', 'Cannot be determined'];
  return q('area_informal_compare',
    `You cover a ${A.name} with ${A.units} square tiles and a ${B.name} with ${B.units} square tiles. Which has the larger area?`,
    shuffle(opts), bigger,
    `More tiles means more area. ${A.units} vs ${B.units} → the ${bigger} is larger.`, 25);
};

const genVolumeFillCompare = () => {
  const pairs = [
    {A: 'mug', B: 'bucket', ans: 'bucket'},
    {A: 'teapot', B: 'cup', ans: 'teapot'},
    {A: 'bathtub', B: 'sink', ans: 'bathtub'},
    {A: 'fish tank', B: 'glass', ans: 'fish tank'},
    {A: 'watering can', B: 'spoon', ans: 'watering can'},
  ];
  const {A, B, ans} = pick(pairs);
  const other = ans === A ? B : A;
  return q('volume_fill_compare',
    `You fill a ${A} and a ${B} with water. Which container holds more water?`,
    shuffle([A, B, 'They hold the same', 'Impossible to tell']), ans,
    `A ${ans} holds more water than a ${other}.`, 20);
};

const genChancePossibleOutcomes = () => {
  const scenarios = [
    {q: 'You spin a spinner with sections Red, Blue, and Green. Which colour is an impossible outcome?', opts: ['Yellow', 'Red', 'Blue', 'Green'], ans: 'Yellow', s: 'Yellow is not on the spinner, so it is impossible.'},
    {q: 'You roll a standard die (numbered 1–6). Which outcome is possible?', opts: ['4', '7', '8', '0'], ans: '4', s: '4 is on a standard die. 7, 8, and 0 are not.'},
    {q: 'You pick a card from a bag containing only hearts. Which outcome is impossible?', opts: ['A spade', 'A heart', 'A red card', 'A heart card'], ans: 'A spade', s: 'There are no spades in the bag.'},
    {q: 'You toss a coin. What are the possible outcomes?', opts: ['Heads or Tails', 'Heads only', 'Tails only', 'Heads, Tails, or Edge'], ans: 'Heads or Tails', s: 'A fair coin can only land on Heads or Tails.'},
  ];
  const sc = pick(scenarios);
  return q('chance_possible_outcomes', sc.q, sc.opts, sc.ans, sc.s, 25);
};

const genNumberBondsTo100 = () => {
  const a = randomInt(10, 89) - (randomInt(10,89) % 5); // multiples of 5
  const b = 100 - a;
  return q('number_bonds_to_100', `${a} + ___ = 100`,
    getUniqueOptions(b, [b+5, b-5, b+10], 1, 99), b,
    `100 − ${a} = ${b}.`, 20);
};

const genFractionCollection = () => {
  const denominators = [2, 4];
  const denom = pick(denominators);
  const total = denom * randomInt(2, 5);
  const ans = total / denom;
  const fracWord = denom === 2 ? 'half' : 'quarter';
  return q('fraction_collection',
    `There are ${total} counters. What is one ${fracWord} of ${total}?`,
    getUniqueOptions(ans, [ans+1, ans-1, total], 1, 30), ans,
    `One ${fracWord} means divide into ${denom} equal groups. ${total} ÷ ${denom} = ${ans}.`, 25);
};

const genShapeTransformationBasic = () => {
  const scenarios = [
    {q: 'A triangle is flipped over a vertical line. The shape after the flip is…', ans: 'The same triangle (mirror image)', opts: ['The same triangle (mirror image)', 'A circle', 'A square', 'A bigger triangle']},
    {q: 'A square is slid (translated) 3 spaces to the right. What changes?', ans: 'Its position', opts: ['Its position', 'Its size', 'Its shape', 'Its colour']},
    {q: 'A shape is rotated a quarter turn. How many degrees is that?', ans: '90°', opts: ['90°', '45°', '180°', '360°']},
    {q: 'Which movement is called a "flip"?', ans: 'Reflection', opts: ['Reflection', 'Translation', 'Rotation', 'Enlargement']},
    {q: 'Which movement is called a "slide"?', ans: 'Translation', opts: ['Translation', 'Reflection', 'Rotation', 'Reduction']},
  ];
  const sc = pick(scenarios);
  return q('shape_transformation_basic', sc.q, sc.opts, sc.ans, `${sc.ans} — shapes keep the same size after flip, slide or turn.`, 25);
};

// ── Year 3 generators ──────────────────────────────────────────────────────

const genPlaceValueToThousands = (difficulty) => {
  const n = difficulty === 'hard' ? randomInt(1000, 9999) : difficulty === 'medium' ? randomInt(100, 999) : randomInt(10, 99);
  const mode = pick(['read', 'expanded', 'compare', 'value_of_digit']);
  if (mode === 'value_of_digit') {
    const digits = String(n).split('').map(Number);
    const placeNames = ['ones','tens','hundreds','thousands'];
    const idx = randomInt(0, digits.length - 1);
    const placeValue = digits[digits.length - 1 - idx] * Math.pow(10, idx);
    const ans = placeValue;
    return q('place_value_to_thousands', `What is the value of the underlined digit in ${n}? (digit: ${digits[digits.length - 1 - idx]}, place: ${placeNames[idx]})`,
      getUniqueOptions(ans, [ans*10, Math.floor(ans/10)||1, ans+1], 0, 99999), ans,
      `The ${placeNames[idx]} digit is ${digits[digits.length-1-idx]}, so its value is ${ans}.`, 30);
  }
  if (mode === 'expanded') {
    const expanded = String(n).split('').reverse().map((d,i) => Number(d)*Math.pow(10,i)).filter(v=>v>0).reverse().join(' + ');
    return q('place_value_to_thousands', `Write ${n} in expanded form.`,
      [expanded, expanded.replace(/\+.*$/, '+ 0'), `${n*10}`, `${Math.floor(n/10)}`], expanded,
      `${n} = ${expanded}.`, 30);
  }
  const n2 = n + randomInt(-50, 50);
  const ans = n > n2 ? `${n}` : `${n2}`;
  return q('place_value_to_thousands', `Which number is greater: ${n} or ${n2}?`,
    [`${n}`, `${n2}`, 'They are equal', 'Cannot tell'], ans, `${ans} is greater.`, 25);
};

const genAdditionSubtraction3Digit = (difficulty) => {
  const a = difficulty === 'hard' ? randomInt(200, 999) : randomInt(100, 499);
  const b = randomInt(10, Math.min(a-1, 300));
  const ops = ['+', '-'];
  const op = pick(ops);
  const ans = op === '+' ? a + b : a - b;
  const strategies = ['split strategy', 'jump strategy', 'compensation'];
  const strat = pick(strategies);
  return q('addition_subtraction_3digit', `Use the ${strat}: ${a} ${op} ${b} = ?`,
    getUniqueOptions(ans, [ans+10, ans-10, ans+1], 0, 2000), ans,
    `${a} ${op} ${b} = ${ans}.`, 30);
};

const genMissingValueEquations = (difficulty) => {
  const a = randomInt(10, difficulty === 'hard' ? 99 : 50);
  const b = randomInt(5, 40);
  const sum = a + b;
  const mode = pick(['add_missing', 'sub_missing']);
  if (mode === 'add_missing') {
    return q('missing_value_equations', `___ + ${b} = ${sum}`,
      getUniqueOptions(a, [a+1, a-1, sum], 0, 200), a, `${sum} − ${b} = ${a}.`, 25);
  }
  return q('missing_value_equations', `${sum} − ___ = ${a}`,
    getUniqueOptions(b, [b+1, b-1, a], 0, 200), b, `${sum} − ${a} = ${b}.`, 25);
};

const genFractionNumberLine = () => {
  const denoms = [2, 4, 3, 5, 8];
  const denom = pick(denoms);
  const numer = randomInt(1, denom - 1);
  const frac = `$\\dfrac{${numer}}{${denom}}$`;
  const decApprox = (numer/denom).toFixed(2);
  const mode = pick(['locate', 'compare', 'name']);
  if (mode === 'compare') {
    const numer2 = randomInt(1, denom - 1);
    const bigger = numer > numer2 ? `${numer}/${denom}` : `${numer2}/${denom}`;
    const smaller = numer > numer2 ? `${numer2}/${denom}` : `${numer}/${denom}`;
    return q('fraction_number_line',
      `On a number line from 0 to 1, which fraction is further from 0: $\\dfrac{${numer}}{${denom}}$ or $\\dfrac{${numer2}}{${denom}}$?`,
      [`${bigger}`, `${smaller}`, 'They are equal', 'Cannot tell'],
      `${bigger}`, `Both have denominator ${denom}. Compare numerators: ${numer} vs ${numer2}. ${bigger} is further right on the number line.`, 30);
  }
  return q('fraction_number_line',
    `What fraction of the way from 0 to 1 is the point at position ${numer} out of ${denom} equal parts?`,
    [`$\\dfrac{${numer}}{${denom}}$`, `$\\dfrac{${denom}}{${numer}}$`, `$\\dfrac{1}{${denom}}$`, `$\\dfrac{${numer+1}}{${denom}}$`],
    frac, `The number line is split into ${denom} equal parts and the point is at part ${numer}, so it is ${frac}.`, 28);
};

const genAngleIdentifyCompare = () => {
  const scenarios = [
    {q: 'An angle of exactly 90° is called a…', ans: 'right angle', opts: ['right angle', 'acute angle', 'obtuse angle', 'straight angle']},
    {q: 'Which angle is less than a right angle?', ans: 'Acute angle (45°)', opts: ['Acute angle (45°)', 'Obtuse angle (120°)', 'Right angle (90°)', 'Straight angle (180°)']},
    {q: 'Which angle is greater than a right angle but less than a straight angle?', ans: 'Obtuse angle', opts: ['Obtuse angle', 'Acute angle', 'Right angle', 'Reflex angle']},
    {q: 'The corner of a square piece of paper is what type of angle?', ans: 'Right angle', opts: ['Right angle', 'Acute angle', 'Obtuse angle', 'Reflex angle']},
    {q: 'An angle of 50° compared to a right angle (90°) is…', ans: 'Less than a right angle', opts: ['Less than a right angle', 'Equal to a right angle', 'Greater than a right angle', 'A straight angle']},
  ];
  const sc = pick(scenarios);
  return q('angle_identify_compare', sc.q, sc.opts, sc.ans, `${sc.ans}. Right angle = 90°; acute < 90°; obtuse between 90° and 180°.`, 25);
};

const genShapeFeaturesCompare = () => {
  const scenarios = [
    {q: 'Which shape has exactly 3 sides and 3 angles?', ans: 'Triangle', opts: ['Triangle', 'Square', 'Pentagon', 'Hexagon']},
    {q: 'Which shape has 4 equal sides and 4 right angles?', ans: 'Square', opts: ['Square', 'Rectangle', 'Rhombus', 'Trapezium']},
    {q: 'Which shape has exactly one pair of parallel sides?', ans: 'Trapezium', opts: ['Trapezium', 'Square', 'Rectangle', 'Triangle']},
    {q: 'A rectangle has 4 right angles but NOT all sides equal. Which shape shares this property?', ans: 'Oblong (non-square rectangle)', opts: ['Oblong (non-square rectangle)', 'Square', 'Rhombus', 'Triangle']},
    {q: 'Which polygon has 6 sides?', ans: 'Hexagon', opts: ['Hexagon', 'Pentagon', 'Octagon', 'Heptagon']},
    {q: 'How many sides does a pentagon have?', ans: '5', opts: ['5', '6', '4', '7']},
  ];
  const sc = pick(scenarios);
  return q('shape_features_compare', sc.q, sc.opts, sc.ans, sc.ans, 25);
};

const genShapeTransformCombineSplit = () => {
  const scenarios = [
    {q: 'Two right-angled triangles are placed together along their longest side. What shape is formed?', ans: 'Rectangle', opts: ['Rectangle', 'Triangle', 'Circle', 'Hexagon']},
    {q: 'A square is cut diagonally from corner to corner. What two shapes are made?', ans: '2 right-angled triangles', opts: ['2 right-angled triangles', '2 squares', '2 rectangles', '2 circles']},
    {q: 'Three squares are placed in a row. What compound shape is made?', ans: 'Rectangle', opts: ['Rectangle', 'Triangle', 'Pentagon', 'Hexagon']},
    {q: 'A hexagon can be split into how many triangles by drawing lines from the centre?', ans: '6 triangles', opts: ['6 triangles', '4 triangles', '3 triangles', '8 triangles']},
  ];
  const sc = pick(scenarios);
  return q('shape_transform_combine_split', sc.q, sc.opts, sc.ans, sc.ans, 25);
};

const genAreaSquareCm = (difficulty) => {
  const rows = randomInt(2, difficulty === 'hard' ? 8 : 5);
  const cols = randomInt(2, difficulty === 'hard' ? 8 : 5);
  const area = rows * cols;
  return q('area_square_cm_m',
    `A rectangle is ${rows} cm tall and ${cols} cm wide. How many square centimetres cover it?`,
    getUniqueOptions(area, [rows+cols, area+rows, area-cols], 1, 100), area,
    `Area = ${rows} × ${cols} = ${area} cm².`, 25);
};

const genNets3DObjects = () => {
  const items = [
    {net: 'a cross-shaped net with 6 squares', shape: 'Cube', opts: ['Cube', 'Pyramid', 'Cylinder', 'Cone']},
    {net: 'a net with 2 circles and 1 rectangle', shape: 'Cylinder', opts: ['Cylinder', 'Cone', 'Sphere', 'Cube']},
    {net: 'a net with 1 square base and 4 triangles', shape: 'Square pyramid', opts: ['Square pyramid', 'Triangular prism', 'Cube', 'Cone']},
    {net: 'a net with 2 triangles and 3 rectangles', shape: 'Triangular prism', opts: ['Triangular prism', 'Triangular pyramid', 'Rectangular prism', 'Cylinder']},
    {net: 'a net with 2 rectangles and 4 rectangles (all different sizes)', shape: 'Rectangular prism', opts: ['Rectangular prism', 'Cube', 'Cylinder', 'Pyramid']},
  ];
  const {net, shape, opts} = pick(items);
  return q('nets_3d_objects', `Which 3D object is made from ${net}?`, opts, shape,
    `This net folds into a ${shape}.`, 30);
};

const genCapacityLitresMl = (difficulty) => {
  const mode = pick(['convert', 'compare', 'read']);
  if (mode === 'convert') {
    const l = randomInt(1, difficulty === 'hard' ? 10 : 5);
    const ml = l * 1000;
    return q('capacity_litres_ml', `How many millilitres are in ${l} litre${l>1?'s':''}?`,
      getUniqueOptions(ml, [ml+100, ml-100, l*100], 0, 20000), ml,
      `1 L = 1000 mL. ${l} × 1000 = ${ml} mL.`, 25);
  }
  if (mode === 'compare') {
    const a = randomInt(1, 4);
    const b = randomInt(500, 999);
    const ans = a >= 1 && a * 1000 > b ? `${a} L` : `${b} mL`;
    const aml = a * 1000;
    return q('capacity_litres_ml', `Which is more: ${a} L or ${b} mL?`,
      [`${a} L`, `${b} mL`, 'They are equal', 'Cannot tell'],
      ans, `${a} L = ${aml} mL. ${aml} vs ${b} → ${ans} is more.`, 28);
  }
  const total = randomInt(2, 5) * 1000 + randomInt(1, 9) * 100;
  const lPart = Math.floor(total / 1000);
  const mlPart = total % 1000;
  return q('capacity_litres_ml', `A container holds ${total} mL. How many litres and millilitres is that?`,
    [`${lPart} L ${mlPart} mL`, `${lPart+1} L ${mlPart} mL`, `${lPart} L ${mlPart+100} mL`, `${mlPart} L ${lPart} mL`],
    `${lPart} L ${mlPart} mL`, `${total} ÷ 1000 = ${lPart} remainder ${mlPart}. So ${lPart} L and ${mlPart} mL.`, 30);
};

const genTimeAnalogDigital = () => {
  const h = randomInt(1, 12);
  const mOptions = [0, 15, 30, 45];
  const m = pick(mOptions);
  const pad = (n) => String(n).padStart(2, '0');
  const digital = `${h}:${pad(m)}`;
  const analogWords = m === 0 ? `${h} o'clock` : m === 15 ? `quarter past ${h}` : m === 30 ? `half past ${h}` : `quarter to ${h === 12 ? 1 : h+1}`;
  const mode = pick(['analog_to_digital', 'digital_to_analog']);
  if (mode === 'analog_to_digital') {
    const w1 = `${h}:${pad((m+15)%60)}`;
    const w2 = `${h+1 > 12 ? 1 : h+1}:${pad(m)}`;
    return q('time_analog_digital', `The analog clock shows ${analogWords}. What is the digital time?`,
      shuffle([digital, w1, w2, `${h}:${pad((m+30)%60)}`]), digital,
      `${analogWords} → ${digital}.`, 25);
  }
  const w1 = m === 0 ? `half past ${h}` : `${h} o'clock`;
  return q('time_analog_digital', `The digital clock shows ${digital}. Which analog description matches?`,
    shuffle([analogWords, w1, `quarter past ${h}`, `quarter to ${h}`]), analogWords,
    `${digital} = ${analogWords}.`, 25);
};

const genColumnGraphConstruct = () => {
  const themes = [
    {title: 'Favourite fruit', cats: ['Apple', 'Banana', 'Orange', 'Mango']},
    {title: 'Pets owned', cats: ['Dog', 'Cat', 'Fish', 'Bird']},
    {title: 'Favourite sport', cats: ['Soccer', 'Tennis', 'Swimming', 'Basketball']},
  ];
  const theme = pick(themes);
  const data = theme.cats.map(c => ({cat: c, val: randomInt(1, 10)}));
  const tallest = data.reduce((a,b) => a.val>b.val?a:b);
  const mode = pick(['tallest', 'total', 'difference']);
  if (mode === 'tallest') {
    return q('column_graph_construct',
      `A column graph for "${theme.title}" shows: ${data.map(d=>`${d.cat}=${d.val}`).join(', ')}. Which category has the tallest bar?`,
      shuffle(theme.cats), tallest.cat,
      `${tallest.cat} has the highest value (${tallest.val}).`, 25);
  }
  const total = data.reduce((s,d)=>s+d.val, 0);
  return q('column_graph_construct',
    `A column graph for "${theme.title}" shows: ${data.map(d=>`${d.cat}=${d.val}`).join(', ')}. What is the total count?`,
    getUniqueOptions(total, [total+2, total-2, total+5], 0, 100), total,
    `Add all values: ${data.map(d=>d.val).join(' + ')} = ${total}.`, 28);
};

const genChanceExperimentRecord = () => {
  const trials = randomInt(10, 30);
  const heads = randomInt(3, trials - 3);
  const tails = trials - heads;
  const mode = pick(['which_more', 'fraction', 'predict']);
  if (mode === 'which_more') {
    const ans = heads > tails ? 'Heads' : tails > heads ? 'Tails' : 'Equal';
    return q('chance_experiment_record',
      `A coin was tossed ${trials} times. Heads appeared ${heads} times, Tails appeared ${tails} times. Which appeared more?`,
      shuffle(['Heads', 'Tails', 'Equal', 'Cannot tell']), ans,
      `${heads} heads vs ${tails} tails. ${ans} appeared more.`, 25);
  }
  return q('chance_experiment_record',
    `In ${trials} coin tosses, Heads appeared ${heads} times. What fraction of tosses were Heads?`,
    [`${heads}/${trials}`, `${tails}/${trials}`, `${heads}/${heads+1}`, `1/2`],
    `${heads}/${trials}`, `${heads} out of ${trials} tosses were Heads = ${heads}/${trials}.`, 28);
};

// ── Year 4 generators ──────────────────────────────────────────────────────

const genPlaceValueTo100000 = (difficulty) => {
  const n = difficulty === 'hard' ? randomInt(10000, 999999) : randomInt(1000, 99999);
  const mode = pick(['digit_value', 'expanded', 'compare', 'times_larger']);
  if (mode === 'digit_value') {
    const s = String(n);
    const pos = randomInt(0, s.length - 1);
    const digit = Number(s[pos]);
    const placeVal = digit * Math.pow(10, s.length - 1 - pos);
    return q('place_value_to_100000', `What is the value of the digit ${digit} in ${n.toLocaleString()}?`,
      getUniqueOptions(placeVal, [placeVal*10, Math.max(1,Math.floor(placeVal/10)), placeVal+digit], 0, 999999),
      placeVal, `The digit ${digit} is in the ${['ones','tens','hundreds','thousands','ten-thousands','hundred-thousands'][s.length-1-pos]} place, so its value is ${placeVal.toLocaleString()}.`, 30);
  }
  if (mode === 'times_larger') {
    const base = randomInt(1, 99);
    const factor = pick([10, 100, 1000]);
    const result = base * factor;
    return q('place_value_to_100000', `What is ${factor} times ${base}?`,
      getUniqueOptions(result, [result+factor, result-factor, base*factor/10], 0, 999999), result,
      `${base} × ${factor} = ${result}.`, 25);
  }
  const n2 = n + randomInt(-5000, 5000);
  const larger = Math.max(n, n2);
  return q('place_value_to_100000', `Which is larger: ${n.toLocaleString()} or ${n2.toLocaleString()}?`,
    [n.toLocaleString(), n2.toLocaleString(), 'They are equal', 'Cannot tell'],
    larger.toLocaleString(), `${larger.toLocaleString()} is the larger number.`, 25);
};

const genDecimalTenthsHundredths = (difficulty) => {
  const mode = pick(['place_value', 'number_line', 'compare', 'fraction_link']);
  if (mode === 'place_value') {
    const whole = randomInt(0, difficulty === 'hard' ? 9 : 5);
    const tenths = randomInt(0, 9);
    const hundredths = randomInt(0, 9);
    const n = parseFloat(`${whole}.${tenths}${hundredths}`);
    return q('decimal_tenths_hundredths', `In the number ${n.toFixed(2)}, what digit is in the hundredths place?`,
      getUniqueOptions(hundredths, [tenths, whole, (hundredths+1)%10], 0, 9), hundredths,
      `${n.toFixed(2)}: tenths=${tenths}, hundredths=${hundredths}.`, 25);
  }
  if (mode === 'fraction_link') {
    const t = randomInt(1, 9);
    return q('decimal_tenths_hundredths', `Which fraction equals ${t/10}?`,
      [`${t}/10`, `${t}/100`, `1/${t}`, `${t}/1000`], `${t}/10`,
      `0.${t} = ${t}/10 (tenths).`, 25);
  }
  const a = parseFloat((randomInt(10, 99) / 10).toFixed(1));
  const b = parseFloat((randomInt(10, 99) / 10).toFixed(1));
  const larger = Math.max(a, b);
  return q('decimal_tenths_hundredths', `Which decimal is larger: ${a} or ${b}?`,
    [String(a), String(b), 'They are equal', 'Cannot tell'], String(larger),
    `Compare digit by digit: ${larger} is larger.`, 25);
};

const genMoneyBudgeting = (difficulty) => {
  const items = [
    {name: 'pen', price: randomInt(1, 5)},
    {name: 'notebook', price: randomInt(3, 8)},
    {name: 'ruler', price: randomInt(2, 6)},
    {name: 'eraser', price: randomInt(1, 3)},
    {name: 'pencil case', price: randomInt(5, 12)},
  ];
  shuffle(items);
  const [a, b] = items.slice(0, 2);
  const budget = difficulty === 'hard' ? randomInt(a.price + b.price, a.price + b.price + 10) : a.price + b.price + randomInt(1, 5);
  const spent = a.price + b.price;
  const change = budget - spent;
  return q('money_budgeting',
    `You have $${budget}. You buy a ${a.name} for $${a.price} and a ${b.name} for $${b.price}. How much money do you have left?`,
    getUniqueOptions(change, [change+1, change-1, budget - a.price], 0, 50), change,
    `$${budget} − $${a.price} − $${b.price} = $${change}.`, 28);
};

const genMultiplication2Digit = (difficulty) => {
  const a = difficulty === 'hard' ? randomInt(12, 25) : randomInt(11, 20);
  const b = difficulty === 'hard' ? randomInt(12, 20) : randomInt(2, 9);
  const ans = a * b;
  return q('multiplication_2digit', `${a} × ${b} = ?`,
    getUniqueOptions(ans, [ans+b, ans-b, ans+a], 0, 1000), ans,
    `${a} × ${b} = ${ans}. Use the area model: (${Math.floor(a/10)*10} × ${b}) + (${a%10} × ${b}) = ${Math.floor(a/10)*10*b} + ${(a%10)*b} = ${ans}.`, 30);
};

const genDivisionWithRemainder = (difficulty) => {
  const divisor = randomInt(2, difficulty === 'hard' ? 9 : 5);
  const quotient = randomInt(3, 12);
  const remainder = randomInt(0, divisor - 1);
  const dividend = divisor * quotient + remainder;
  return q('division_with_remainder', `${dividend} ÷ ${divisor} = ?`,
    remainder === 0
      ? getUniqueOptions(quotient, [quotient+1, quotient-1, divisor], 0, 50)
      : [`${quotient} remainder ${remainder}`, `${quotient+1} remainder ${remainder}`, `${quotient} remainder ${remainder+1}`, `${quotient-1} remainder ${remainder}`],
    remainder === 0 ? quotient : `${quotient} remainder ${remainder}`,
    remainder === 0 ? `${dividend} ÷ ${divisor} = ${quotient}.` : `${dividend} ÷ ${divisor} = ${quotient} remainder ${remainder} (since ${divisor} × ${quotient} = ${divisor*quotient}, and ${dividend} − ${divisor*quotient} = ${remainder}).`, 30);
};

const genEquivalentFractionsNumberLine = () => {
  const pairs = [{a:[1,2],b:[2,4]},{a:[1,4],b:[2,8]},{a:[2,3],b:[4,6]},{a:[1,3],b:[2,6]},{a:[3,4],b:[6,8]}];
  const {a,b} = pick(pairs);
  const mode = pick(['equivalent', 'find_missing']);
  if (mode === 'equivalent') {
    return q('equivalent_fractions_number_line',
      `Are $\\dfrac{${a[0]}}{${a[1]}}$ and $\\dfrac{${b[0]}}{${b[1]}}$ equivalent fractions?`,
      ['Yes, they are equal', 'No, they are different', 'Cannot tell', 'Only on a number line'],
      'Yes, they are equal',
      `$\\dfrac{${a[0]}}{${a[1]}} = ${a[0]/a[1]}$ and $\\dfrac{${b[0]}}{${b[1]}} = ${b[0]/b[1]}$. They mark the same point on the number line.`, 28);
  }
  return q('equivalent_fractions_number_line',
    `Complete: $\\dfrac{${a[0]}}{${a[1]}} = \\dfrac{?}{${b[1]}}$`,
    getUniqueOptions(b[0], [b[0]+1, b[0]-1, a[0]], 1, 20), b[0],
    `Multiply numerator and denominator by ${b[1]/a[1]}: $\\dfrac{${a[0]}×${b[1]/a[1]}}{${a[1]}×${b[1]/a[1]}} = \\dfrac{${b[0]}}{${b[1]}}$.`, 28);
};

const genTessellation = () => {
  const scenarios = [
    {q: 'Which shape tessellates (tiles a surface with no gaps or overlaps)?', ans: 'Square', opts: ['Square', 'Circle', 'Regular pentagon', 'Regular heptagon']},
    {q: 'Which shape does NOT tessellate on its own?', ans: 'Circle', opts: ['Circle', 'Triangle', 'Square', 'Regular hexagon']},
    {q: 'Regular hexagons tessellate. How many degrees meet at each vertex in a hexagon tessellation?', ans: '360°', opts: ['360°', '180°', '270°', '120°']},
    {q: 'Equilateral triangles can tessellate. How many triangles meet at each point?', ans: '6', opts: ['6', '4', '3', '8']},
  ];
  const sc = pick(scenarios);
  return q('tessellation', sc.q, sc.opts, sc.ans, `${sc.ans}. Shapes tessellate if their angles sum to 360° at each vertex.`, 28);
};

const genAreaIrregular = () => {
  const rows = randomInt(3, 7), cols = randomInt(3, 7);
  const total = rows * cols;
  const partial = randomInt(1, Math.floor(total / 3));
  const irregArea = total - partial;
  return q('area_irregular',
    `An irregular shape is drawn on a ${rows}×${cols} grid. The shape covers ${irregArea} full squares and no partial squares. What is its area?`,
    getUniqueOptions(irregArea, [irregArea+2, irregArea-1, rows*cols], 1, 100), irregArea,
    `Count the ${irregArea} square units that the shape covers.`, 25);
};

const genTimeAmPmTimetable = (difficulty) => {
  const startH = randomInt(7, 11);
  const startM = pick([0, 15, 30, 45]);
  const durationM = randomInt(1, difficulty === 'hard' ? 3 : 2) * 30 + pick([0, 15]);
  const endTotalM = startH * 60 + startM + durationM;
  const endH = Math.floor(endTotalM / 60) % 24;
  const endM = endTotalM % 60;
  const pad = n => String(n).padStart(2, '0');
  const startStr = `${startH}:${pad(startM)} am`;
  const endStr = `${endH > 12 ? endH - 12 : endH}:${pad(endM)} ${endH >= 12 ? 'pm' : 'am'}`;
  return q('time_am_pm_timetable',
    `A movie starts at ${startStr} and runs for ${durationM} minutes. What time does it end?`,
    shuffle([endStr, `${endH > 12 ? endH-12 : endH}:${pad((endM+15)%60)} ${endH>=12?'pm':'am'}`, `${endH > 12 ? endH-12 : endH-1}:${pad(endM)} ${endH>=12?'pm':'am'}`, `${startH}:${pad((startM+durationM)%60)} am`]),
    endStr, `${startStr} + ${durationM} minutes = ${endStr}.`, 30);
};

const genDataManyToOneScale = () => {
  const scale = pick([2, 5, 10]);
  const cats = ['Cats', 'Dogs', 'Birds', 'Fish'];
  const data = cats.map(c => ({cat: c, symbols: randomInt(1, 6)}));
  const tallest = data.reduce((a,b) => a.symbols > b.symbols ? a : b);
  const total = data.reduce((s,d) => s + d.symbols * scale, 0);
  const mode = pick(['read_value', 'total', 'most']);
  if (mode === 'most') {
    return q('data_many_to_one_scale',
      `A picture graph uses 1 symbol = ${scale} pets. Counts: ${data.map(d=>`${d.cat}: ${d.symbols} symbols`).join(', ')}. Which pet is most common?`,
      shuffle(cats), tallest.cat,
      `${tallest.cat} has ${tallest.symbols} symbols = ${tallest.symbols * scale} pets, the most.`, 25);
  }
  if (mode === 'read_value') {
    const chosen = pick(data);
    const val = chosen.symbols * scale;
    return q('data_many_to_one_scale',
      `A picture graph: 1 symbol = ${scale}. ${chosen.cat} has ${chosen.symbols} symbols. How many ${chosen.cat} are there?`,
      getUniqueOptions(val, [val+scale, val-scale, chosen.symbols], 0, 100), val,
      `${chosen.symbols} × ${scale} = ${val}.`, 25);
  }
  return q('data_many_to_one_scale',
    `A picture graph: 1 symbol = ${scale}. Data: ${data.map(d=>`${d.cat}=${d.symbols} symbols`).join(', ')}. What is the total?`,
    getUniqueOptions(total, [total+scale, total-scale, total+2*scale], 0, 500), total,
    `Total symbols = ${data.map(d=>d.symbols).join('+')} = ${data.reduce((s,d)=>s+d.symbols,0)}. × ${scale} = ${total}.`, 28);
};

const genChanceDependentIndependent = () => {
  const scenarios = [
    {q: 'You draw a card from a deck and do NOT replace it. Is the next draw affected?', ans: 'Yes — dependent events', opts: ['Yes — dependent events', 'No — independent events', 'Always 50/50', 'Cannot tell']},
    {q: 'You toss a coin twice. Does the first toss affect the second?', ans: 'No — independent events', opts: ['No — independent events', 'Yes — dependent events', 'Only if it lands Heads', 'Always changes']},
    {q: 'Two events are independent if…', ans: 'The outcome of one does not affect the other', opts: ['The outcome of one does not affect the other', 'They always give the same result', 'They cannot happen at the same time', 'One always follows the other']},
    {q: 'You pick a marble from a bag and keep it, then pick again. This is…', ans: 'Dependent — the first pick changes what remains', opts: ['Dependent — the first pick changes what remains', 'Independent — each pick is random', 'Impossible', 'Equally likely each time']},
  ];
  const sc = pick(scenarios);
  return q('chance_dependent_independent', sc.q, sc.opts, sc.ans, sc.ans, 28);
};

// ── Year 5 generators ──────────────────────────────────────────────────────

const genPlaceValueMillions = (difficulty) => {
  const n = difficulty === 'hard' ? randomInt(1000000, 999999999) : randomInt(100000, 9999999);
  const formatted = n.toLocaleString();
  const mode = pick(['read', 'compare', 'digit_value']);
  if (mode === 'digit_value') {
    const s = String(n);
    const pos = randomInt(0, Math.min(s.length-1, 5));
    const digit = Number(s[pos]);
    const pv = digit * Math.pow(10, s.length - 1 - pos);
    const placeNames = ['ones','tens','hundreds','thousands','ten-thousands','hundred-thousands','millions','ten-millions'];
    return q('place_value_millions', `What is the value of digit ${digit} in ${formatted}?`,
      [pv.toLocaleString(), (pv*10).toLocaleString(), (Math.max(1,Math.floor(pv/10))).toLocaleString(), (pv+digit).toLocaleString()],
      pv.toLocaleString(), `${digit} is in the ${placeNames[s.length-1-pos]} place → value = ${pv.toLocaleString()}.`, 30);
  }
  const n2 = n + randomInt(-500000, 500000);
  const larger = Math.max(n, n2);
  return q('place_value_millions', `Which is greater: ${n.toLocaleString()} or ${n2.toLocaleString()}?`,
    [n.toLocaleString(), n2.toLocaleString(), 'Equal', 'Cannot tell'],
    larger.toLocaleString(), `${larger.toLocaleString()} is greater.`, 28);
};

const genDecimalThousandths = (difficulty) => {
  const a = randomInt(1, 9), b = randomInt(0, 9), c = randomInt(1, 9);
  const n = parseFloat(`0.${a}${b}${c}`);
  const mode = pick(['place_value', 'compare', 'order', 'fraction']);
  if (mode === 'place_value') {
    return q('decimal_thousandths', `In ${n.toFixed(3)}, which digit is in the thousandths place?`,
      getUniqueOptions(c, [a, b, (c+1)%10], 0, 9), c,
      `${n.toFixed(3)}: tenths=${a}, hundredths=${b}, thousandths=${c}.`, 25);
  }
  const n2 = parseFloat(`0.${randomInt(1,9)}${randomInt(0,9)}${randomInt(1,9)}`);
  const larger = Math.max(n, n2);
  return q('decimal_thousandths', `Which is larger: ${n.toFixed(3)} or ${n2.toFixed(3)}?`,
    [n.toFixed(3), n2.toFixed(3), 'Equal', 'Cannot tell'],
    larger.toFixed(3), `Compare digit by digit: ${larger.toFixed(3)} is larger.`, 28);
};

const genPercentageDiscount = (difficulty) => {
  const prices = [20, 40, 50, 80, 100, 120, 200];
  const price = pick(prices);
  const pcts = difficulty === 'hard' ? [10, 20, 25, 30, 50, 75] : [10, 25, 50];
  const pct = pick(pcts);
  const discount = price * pct / 100;
  const final = price - discount;
  const mode = pick(['find_discount', 'final_price', 'percent_off']);
  if (mode === 'find_discount') {
    return q('percentage_discount', `A jacket costs $${price}. It is ${pct}% off. How much is the discount?`,
      getUniqueOptions(discount, [discount+5, discount-5, price-pct], 0, 500), discount,
      `${pct}% of $${price} = ${price} × ${pct}/100 = $${discount}.`, 28);
  }
  return q('percentage_discount', `A jacket costs $${price}. It is ${pct}% off. What is the final price?`,
    getUniqueOptions(final, [final+5, final-5, price+discount], 0, 500), final,
    `Discount = $${discount}. Final price = $${price} − $${discount} = $${final}.`, 30);
};

const genMultiplication2DigitBy2Digit = (difficulty) => {
  const a = difficulty === 'hard' ? randomInt(15, 30) : randomInt(11, 20);
  const b = difficulty === 'hard' ? randomInt(15, 25) : randomInt(11, 19);
  const ans = a * b;
  return q('multiplication_2digit_by_2digit', `Calculate ${a} × ${b}.`,
    getUniqueOptions(ans, [ans+b, ans-a, ans+a+b], 0, 2000), ans,
    `${a} × ${b} = ${ans}. Area model: (${Math.floor(a/10)*10} + ${a%10}) × (${Math.floor(b/10)*10} + ${b%10}) = ${Math.floor(a/10)*10*Math.floor(b/10)*10} + ${Math.floor(a/10)*10*(b%10)} + ${(a%10)*Math.floor(b/10)*10} + ${(a%10)*(b%10)} = ${ans}.`, 32);
};

const genDivisionMultiDigit = (difficulty) => {
  const divisor = randomInt(2, difficulty === 'hard' ? 9 : 6);
  const quotient = randomInt(10, difficulty === 'hard' ? 99 : 50);
  const remainder = randomInt(0, divisor - 1);
  const dividend = divisor * quotient + remainder;
  const ans = remainder === 0 ? quotient : `${quotient} r${remainder}`;
  return q('division_multi_digit', `${dividend} ÷ ${divisor} = ?`,
    remainder === 0
      ? getUniqueOptions(quotient, [quotient+1, quotient-1, divisor*2], 0, 500)
      : [`${quotient} r${remainder}`, `${quotient+1} r${remainder}`, `${quotient} r${remainder+1}`, `${quotient-1} r${remainder}`],
    ans, `${dividend} ÷ ${divisor} = ${ans}.`, 30);
};

const genOrderOfOperations = (difficulty) => {
  if (difficulty === 'hard') {
    const a = randomInt(2,5), b = randomInt(2,4), c = randomInt(1,10), d = randomInt(1,5);
    const ans = a * b + c - d;
    return q('order_of_operations', `Calculate: ${a} × ${b} + ${c} − ${d}`,
      getUniqueOptions(ans, [a*(b+c)-d, a*b-(c+d), ans+1], 0, 100), ans,
      `Multiply first: ${a}×${b}=${a*b}. Then: ${a*b}+${c}−${d} = ${ans}.`, 30);
  }
  const a = randomInt(2,8), b = randomInt(2,5), c = randomInt(1,8);
  const ans = a + b * c;
  return q('order_of_operations', `Calculate: ${a} + ${b} × ${c}`,
    getUniqueOptions(ans, [(a+b)*c, ans+1, ans-c], 0, 100), ans,
    `Multiply first: ${b}×${c}=${b*c}. Then add: ${a}+${b*c}=${ans}. Do NOT add first!`, 28);
};

const genFractionAddSubtractSameDenom = (difficulty) => {
  const denom = pick([2, 4, 5, 8, 10]);
  const a = randomInt(1, denom - 1);
  const b = randomInt(1, denom - 1);
  const op = (a + b < denom * 2) ? pick(['+', '-']) : '-';
  const b2 = op === '-' ? Math.min(b, a) : b;
  const ans = op === '+' ? a + b : a - b2;
  return q('fraction_add_subtract_same_denom',
    `$\\dfrac{${a}}{${denom}} ${op} \\dfrac{${b2}}{${denom}} = ?$`,
    [`$\\dfrac{${ans}}{${denom}}$`, `$\\dfrac{${ans}}{${denom*2}}$`, `$\\dfrac{${ans+1}}{${denom}}$`, `$\\dfrac{${Math.max(1,ans-1)}}{${denom}}$`],
    `$\\dfrac{${ans}}{${denom}}$`,
    `Same denominator — just ${op === '+' ? 'add' : 'subtract'} numerators: ${a} ${op} ${b2} = ${ans}. Denominator stays ${denom}.`, 28);
};

const genFractionOfQuantity = () => {
  const denom = pick([2, 4, 5, 10]);
  const total = denom * randomInt(2, 8);
  const numer = randomInt(1, denom - 1);
  const ans = (total / denom) * numer;
  return q('fraction_of_quantity',
    `What is $\\dfrac{${numer}}{${denom}}$ of ${total}?`,
    getUniqueOptions(ans, [ans+denom, ans-denom, total/denom], 1, 200), ans,
    `Divide by ${denom}: ${total}÷${denom}=${total/denom}. Multiply by ${numer}: ${total/denom}×${numer}=${ans}.`, 28);
};

const genCoordinatePlaneOneQuadrant = () => {
  const x = randomInt(0, 8), y = randomInt(0, 8);
  const mode = pick(['name_point', 'find_point', 'plot_description']);
  if (mode === 'name_point') {
    return q('coordinate_plane_one_quadrant',
      `A point is plotted at x = ${x}, y = ${y} on a grid. What are its coordinates?`,
      [`(${x}, ${y})`, `(${y}, ${x})`, `(${x+1}, ${y})`, `(${x}, ${y+1})`],
      `(${x}, ${y})`, `Coordinates are written (x, y): x across, y up → (${x}, ${y}).`, 25);
  }
  return q('coordinate_plane_one_quadrant',
    `The point (${x}, ${y}) is on a grid. Starting at the origin (0,0), you move ${x} right and ${y} up. Where do you end up?`,
    [`(${x}, ${y})`, `(${y}, ${x})`, `(${x-1}, ${y+1})`, `(${x+1}, ${y-1})`],
    `(${x}, ${y})`, `Moving ${x} right and ${y} up from origin → (${x}, ${y}).`, 25);
};

const genAngleStraightLine = (difficulty) => {
  const known = randomInt(30, 140);
  const unknown = 180 - known;
  if (difficulty === 'hard') {
    const a = randomInt(20, 70), b = randomInt(20, 70);
    const c = 180 - a - b;
    return q('angle_straight_line',
      `Three angles on a straight line are ${a}°, ${b}°, and x°. Find x.`,
      getUniqueOptions(c, [c+5, c-5, 180-a], 1, 179), c,
      `Angles on a straight line sum to 180°. ${a}+${b}+x=180 → x=${c}°.`, 30);
  }
  return q('angle_straight_line',
    `Two angles on a straight line are ${known}° and x°. Find x.`,
    getUniqueOptions(unknown, [unknown+10, unknown-10, 360-known], 1, 179), unknown,
    `Angles on a straight line sum to 180°. ${known}+x=180 → x=${unknown}°.`, 28);
};

const genShapeClassifyProperties = () => {
  const scenarios = [
    {q: 'Which triangle has all three sides equal?', ans: 'Equilateral triangle', opts: ['Equilateral triangle', 'Isosceles triangle', 'Scalene triangle', 'Right-angled triangle']},
    {q: 'Which triangle has exactly two equal sides?', ans: 'Isosceles triangle', opts: ['Isosceles triangle', 'Equilateral triangle', 'Scalene triangle', 'Obtuse triangle']},
    {q: 'Which quadrilateral has two pairs of parallel sides but no right angles?', ans: 'Parallelogram', opts: ['Parallelogram', 'Rectangle', 'Square', 'Trapezium']},
    {q: 'A rhombus has…', ans: '4 equal sides but angles are not 90°', opts: ['4 equal sides but angles are not 90°', '4 right angles', 'Only 2 equal sides', '3 equal sides']},
    {q: 'A trapezium has…', ans: 'Exactly one pair of parallel sides', opts: ['Exactly one pair of parallel sides', 'Two pairs of parallel sides', 'No parallel sides', 'Four equal sides']},
    {q: 'Which triangle contains an angle greater than 90°?', ans: 'Obtuse triangle', opts: ['Obtuse triangle', 'Acute triangle', 'Right-angled triangle', 'Equilateral triangle']},
  ];
  const sc = pick(scenarios);
  return q('shape_classify_properties', sc.q, sc.opts, sc.ans, sc.ans, 28);
};

const genAreaRectangleFormula = (difficulty) => {
  const l = randomInt(3, difficulty === 'hard' ? 25 : 15);
  const w = randomInt(2, difficulty === 'hard' ? 20 : 12);
  const area = l * w;
  const mode = pick(['find_area', 'find_side', 'real_world']);
  if (mode === 'find_side') {
    return q('area_rectangle_formula',
      `A rectangle has area ${area} m² and length ${l} m. What is the width?`,
      getUniqueOptions(w, [w+1, w-1, l], 1, 50), w,
      `Width = Area ÷ Length = ${area} ÷ ${l} = ${w} m.`, 30);
  }
  return q('area_rectangle_formula', `A rectangle is ${l} m long and ${w} m wide. What is its area?`,
    getUniqueOptions(area, [l+w, area+l, area-w], 0, 1000), area,
    `Area = length × width = ${l} × ${w} = ${area} m².`, 25);
};

const genPrismPyramidIdentify = () => {
  const scenarios = [
    {q: 'A solid with a triangular base and 3 rectangular faces is a…', ans: 'Triangular prism', opts: ['Triangular prism', 'Triangular pyramid', 'Rectangular prism', 'Cone']},
    {q: 'A solid with a square base and 4 triangular faces meeting at a point is a…', ans: 'Square pyramid', opts: ['Square pyramid', 'Square prism', 'Triangular prism', 'Cylinder']},
    {q: 'Which 3D object has the same cross-section all the way through?', ans: 'Prism', opts: ['Prism', 'Pyramid', 'Cone', 'Sphere']},
    {q: 'A rectangular prism has how many faces?', ans: '6', opts: ['6', '4', '8', '5']},
    {q: 'A triangular pyramid (tetrahedron) has how many faces?', ans: '4', opts: ['4', '6', '3', '5']},
  ];
  const sc = pick(scenarios);
  return q('prism_pyramid_identify', sc.q, sc.opts, sc.ans, sc.ans, 25);
};

const genVolumeDisplacement = () => {
  const objVol = randomInt(5, 30);
  const waterStart = randomInt(50, 100);
  const waterEnd = waterStart + objVol;
  return q('volume_displacement',
    `A container has ${waterStart} mL of water. A rock is placed in and the water rises to ${waterEnd} mL. What is the volume of the rock?`,
    getUniqueOptions(objVol, [objVol+5, objVol-2, waterEnd], 1, 100), objVol,
    `Volume of rock = ${waterEnd} − ${waterStart} = ${objVol} mL.`, 28);
};

const genCategoricalNumericalData = () => {
  const scenarios = [
    {q: 'Which is an example of categorical data?', ans: 'Favourite colour (red, blue, green)', opts: ['Favourite colour (red, blue, green)', 'Heights of students in cm', 'Test scores out of 100', 'Ages of people in years']},
    {q: 'Which is an example of numerical data?', ans: 'Number of books read each week', opts: ['Number of books read each week', 'Types of pets', 'Favourite sports', 'Brand of shoes']},
    {q: 'Which graph best displays categorical data?', ans: 'Column graph', opts: ['Column graph', 'Line graph', 'Scatter plot', 'Histogram']},
    {q: 'Which graph best shows change over time?', ans: 'Line graph', opts: ['Line graph', 'Pie chart', 'Dot plot', 'Column graph']},
    {q: 'A survey asks students: "What is your favourite subject?" This data is…', ans: 'Categorical', opts: ['Categorical', 'Numerical', 'Continuous', 'Ordinal']},
  ];
  const sc = pick(scenarios);
  return q('categorical_numerical_data', sc.q, sc.opts, sc.ans, sc.ans, 25);
};

const genProbabilityFractionQuantify = () => {
  const bags = [
    {r:3, b:2, g:1}, {r:1, b:1, g:0}, {r:2, b:3, g:0}, {r:4, b:1, g:1},
  ];
  const bag = pick(bags);
  const total = bag.r + bag.b + bag.g;
  const color = bag.g > 0 ? pick(['red','blue','green']) : pick(['red','blue']);
  const count = color === 'red' ? bag.r : color === 'blue' ? bag.b : bag.g;
  const frac = `${count}/${total}`;
  return q('probability_fraction_quantify',
    `A bag has ${bag.r} red, ${bag.b} blue${bag.g>0?`, ${bag.g} green`:''} balls. You pick one without looking. What is the probability of picking ${color}?`,
    [`${count}/${total}`, `${total-count}/${total}`, `1/${total}`, `${count}/${total-1}`],
    frac, `P(${color}) = ${count} out of ${total} = ${frac}.`, 28);
};

// ── Year 6 generators ──────────────────────────────────────────────────────

const genDecimalAddSubtract = (difficulty) => {
  const decimals = (n) => difficulty === 'hard' ? n.toFixed(3) : n.toFixed(2);
  const a = parseFloat((randomInt(10, 99) / 10).toFixed(difficulty === 'hard' ? 3 : 2));
  const b = parseFloat((randomInt(1, 50) / 10).toFixed(difficulty === 'hard' ? 3 : 2));
  const op = pick(['+', '-']);
  const ans = op === '+' ? parseFloat((a + b).toFixed(3)) : parseFloat((a - b).toFixed(3));
  return q('decimal_add_subtract', `${a} ${op} ${b} = ?`,
    [String(ans), String(parseFloat((ans + 0.1).toFixed(3))), String(parseFloat((ans - 0.1).toFixed(3))), String(parseFloat((ans + 1).toFixed(3)))],
    String(ans), `${a} ${op} ${b} = ${ans}. Align decimal points before calculating.`, 28);
};

const genDecimalMultiplyDivide = (difficulty) => {
  const base = randomInt(1, 99);
  const power = pick([10, 100, 1000]);
  const op = pick(['×', '÷']);
  const ans = op === '×' ? base * power : parseFloat((base / power).toFixed(4));
  return q('decimal_multiply_divide', `${base} ${op} ${power} = ?`,
    op === '×'
      ? getUniqueOptions(ans, [ans*10, Math.floor(ans/10), ans+power], 0, 999999)
      : [String(ans), String(parseFloat((base / (power/10)).toFixed(3))), String(parseFloat((base / (power*10)).toFixed(5))), String(base)],
    String(ans),
    op === '×' ? `Multiplying by ${power} moves the decimal ${String(power).length-1} places right: ${base} → ${ans}.`
               : `Dividing by ${power} moves the decimal ${String(power).length-1} places left: ${base} → ${ans}.`, 28);
};

const genFractionAsDivision = () => {
  const numer = randomInt(1, 9);
  const denom = randomInt(numer + 1, 10);
  const decimal = parseFloat((numer / denom).toFixed(3));
  const mode = pick(['division_form', 'decimal_result', 'statement']);
  if (mode === 'division_form') {
    return q('fraction_as_division',
      `$\\dfrac{${numer}}{${denom}}$ is the same as which division?`,
      [`${numer} ÷ ${denom}`, `${denom} ÷ ${numer}`, `${numer} × ${denom}`, `${denom} − ${numer}`],
      `${numer} ÷ ${denom}`, `A fraction means divide: $\\dfrac{${numer}}{${denom}} = ${numer} ÷ ${denom}$.`, 25);
  }
  return q('fraction_as_division',
    `What decimal is equivalent to $\\dfrac{${numer}}{${denom}}$? (round to 3 decimal places)`,
    [String(decimal), String(parseFloat((numer/(denom+1)).toFixed(3))), String(parseFloat((numer+1)/denom).toFixed(3)), String(parseFloat(denom/numer).toFixed(3))],
    String(decimal), `${numer} ÷ ${denom} = ${decimal}.`, 30);
};

const genFractionEquivalentRelatedDenom = () => {
  const pairs = [
    {a:[1,3],b:[2,6],'m':2},{a:[1,4],b:[3,12],'m':3},{a:[2,5],b:[4,10],'m':2},
    {a:[3,4],b:[9,12],'m':3},{a:[1,2],b:[4,8],'m':4},{a:[2,3],b:[8,12],'m':4},
  ];
  const {a, b, m} = pick(pairs);
  const mode = pick(['find_numerator', 'are_equivalent', 'compare']);
  if (mode === 'find_numerator') {
    return q('fraction_equivalent_related_denom',
      `$\\dfrac{${a[0]}}{${a[1]}} = \\dfrac{?}{${b[1]}}$`,
      getUniqueOptions(b[0], [b[0]+1, b[0]-1, a[0]], 1, 20), b[0],
      `Multiply top and bottom by ${m}: $\\dfrac{${a[0]}×${m}}{${a[1]}×${m}} = \\dfrac{${b[0]}}{${b[1]}}$.`, 28);
  }
  return q('fraction_equivalent_related_denom',
    `Which fraction is equivalent to $\\dfrac{${a[0]}}{${a[1]}}$?`,
    [`$\\dfrac{${b[0]}}{${b[1]}}$`, `$\\dfrac{${b[0]+1}}{${b[1]}}$`, `$\\dfrac{${a[0]}}{${b[1]}}$`, `$\\dfrac{${b[0]}}{${b[1]+1}}$`],
    `$\\dfrac{${b[0]}}{${b[1]}}$`,
    `$\\dfrac{${a[0]}}{${a[1]}} × \\dfrac{${m}}{${m}} = \\dfrac{${b[0]}}{${b[1]}}$.`, 28);
};

const genCoordinateFourQuadrants = () => {
  const quadrants = [
    {x: randomInt(1,8), y: randomInt(1,8)},
    {x: -randomInt(1,8), y: randomInt(1,8)},
    {x: -randomInt(1,8), y: -randomInt(1,8)},
    {x: randomInt(1,8), y: -randomInt(1,8)},
  ];
  const pt = pick(quadrants);
  const mode = pick(['name_quadrant', 'name_coordinates', 'plot']);
  if (mode === 'name_quadrant') {
    const q1 = pt.x > 0 && pt.y > 0;
    const q2 = pt.x < 0 && pt.y > 0;
    const q3 = pt.x < 0 && pt.y < 0;
    const qnum = q1 ? '1st' : q2 ? '2nd' : q3 ? '3rd' : '4th';
    return q('coordinate_four_quadrants',
      `The point (${pt.x}, ${pt.y}) is in which quadrant?`,
      ['1st quadrant', '2nd quadrant', '3rd quadrant', '4th quadrant'],
      `${qnum} quadrant`, `Q1: (+,+), Q2: (−,+), Q3: (−,−), Q4: (+,−). (${pt.x},${pt.y}) → ${qnum} quadrant.`, 28);
  }
  return q('coordinate_four_quadrants',
    `A point is ${Math.abs(pt.x)} units ${pt.x>0?'right':'left'} and ${Math.abs(pt.y)} units ${pt.y>0?'up':'down'} from the origin. Its coordinates are?`,
    [`(${pt.x}, ${pt.y})`, `(${pt.y}, ${pt.x})`, `(${-pt.x}, ${pt.y})`, `(${pt.x}, ${-pt.y})`],
    `(${pt.x}, ${pt.y})`, `x = ${pt.x}, y = ${pt.y} → (${pt.x}, ${pt.y}).`, 25);
};

const genMetricLengthConvert = (difficulty) => {
  const conversions = [
    {from: 'km', to: 'm', factor: 1000, val: randomInt(1, difficulty==='hard'?20:10)},
    {from: 'm', to: 'cm', factor: 100, val: randomInt(1, difficulty==='hard'?50:20)},
    {from: 'cm', to: 'mm', factor: 10, val: randomInt(5, 50)},
    {from: 'm', to: 'mm', factor: 1000, val: randomInt(1, 5)},
  ];
  const conv = pick(conversions);
  const ans = conv.val * conv.factor;
  return q('metric_length_convert', `Convert ${conv.val} ${conv.from} to ${conv.to}.`,
    getUniqueOptions(ans, [ans+conv.factor, ans-conv.factor, conv.val*10], 0, 999999), ans,
    `1 ${conv.from} = ${conv.factor} ${conv.to}. ${conv.val} × ${conv.factor} = ${ans} ${conv.to}.`, 25);
};

const genAngleIntersectingLines = (difficulty) => {
  const a = randomInt(30, 150);
  const b = a; // vertically opposite
  const supp = 180 - a;
  const mode = pick(['vertically_opposite', 'supplementary', 'find_all']);
  if (mode === 'vertically_opposite') {
    return q('angle_intersecting_lines',
      `Two straight lines cross. One angle is ${a}°. What is the vertically opposite angle?`,
      getUniqueOptions(b, [supp, 360-a, a+10], 1, 359), b,
      `Vertically opposite angles are equal. The opposite angle is also ${b}°.`, 28);
  }
  return q('angle_intersecting_lines',
    `Two lines intersect. One angle is ${a}°. What is the adjacent (supplementary) angle?`,
    getUniqueOptions(supp, [a, 360-a, supp+10], 1, 359), supp,
    `Angles on a straight line sum to 180°. ${a}° + x° = 180° → x = ${supp}°.`, 28);
};

const genAreaParallelogramTriangle = (difficulty) => {
  const base = randomInt(4, difficulty === 'hard' ? 20 : 12);
  const height = randomInt(3, difficulty === 'hard' ? 15 : 10);
  const shape = pick(['parallelogram', 'triangle']);
  const area = shape === 'parallelogram' ? base * height : (base * height) / 2;
  return q('area_parallelogram_triangle',
    `A ${shape} has base ${base} cm and perpendicular height ${height} cm. What is its area?`,
    getUniqueOptions(area, [base*height, area+base, area-height], 0, 500), area,
    shape === 'parallelogram'
      ? `Area of parallelogram = base × height = ${base} × ${height} = ${area} cm².`
      : `Area of triangle = ½ × base × height = ½ × ${base} × ${height} = ${area} cm².`, 30);
};

const genAreaCompositeShapes = (difficulty) => {
  const w1 = randomInt(3, 8), h1 = randomInt(3, 8);
  const w2 = randomInt(2, 6), h2 = randomInt(2, 5);
  const totalArea = w1 * h1 + w2 * h2;
  return q('area_composite_shapes',
    `A composite shape is made of two rectangles: one is ${w1} m × ${h1} m and another is ${w2} m × ${h2} m. What is the total area?`,
    getUniqueOptions(totalArea, [w1*h1, w2*h2, totalArea+h1], 0, 500), totalArea,
    `Area = (${w1}×${h1}) + (${w2}×${h2}) = ${w1*h1} + ${w2*h2} = ${totalArea} m².`, 28);
};

const genVolumeRectangularPrismFormula = (difficulty) => {
  const l = randomInt(2, difficulty === 'hard' ? 12 : 8);
  const w = randomInt(2, difficulty === 'hard' ? 10 : 6);
  const h = randomInt(2, difficulty === 'hard' ? 8 : 5);
  const vol = l * w * h;
  const mode = pick(['find_volume', 'find_side']);
  if (mode === 'find_side') {
    return q('volume_rectangular_prism_formula',
      `A rectangular prism has volume ${vol} cm³, length ${l} cm and width ${w} cm. What is its height?`,
      getUniqueOptions(h, [h+1, h-1, l], 1, 50), h,
      `Height = Volume ÷ (length × width) = ${vol} ÷ (${l} × ${w}) = ${vol} ÷ ${l*w} = ${h} cm.`, 32);
  }
  return q('volume_rectangular_prism_formula',
    `A rectangular prism is ${l} cm × ${w} cm × ${h} cm. What is its volume?`,
    getUniqueOptions(vol, [l*w+h, vol+l, vol-w], 0, 2000), vol,
    `Volume = l × w × h = ${l} × ${w} × ${h} = ${vol} cm³.`, 28);
};

const genMetricMassConvert = (difficulty) => {
  const mode = pick(['kg_to_g', 'g_to_kg', 'tonnes']);
  if (mode === 'kg_to_g') {
    const kg = randomInt(1, difficulty==='hard'?20:10);
    const g = kg * 1000;
    return q('metric_mass_convert', `Convert ${kg} kg to grams.`,
      getUniqueOptions(g, [g+100, g-100, kg*100], 0, 99999), g,
      `1 kg = 1000 g. ${kg} × 1000 = ${g} g.`, 25);
  }
  if (mode === 'g_to_kg') {
    const g = randomInt(1, difficulty==='hard'?20:5) * 1000;
    const kg = g / 1000;
    return q('metric_mass_convert', `Convert ${g} g to kilograms.`,
      getUniqueOptions(kg, [kg+1, kg-1, g/100], 0, 50), kg,
      `1000 g = 1 kg. ${g} ÷ 1000 = ${kg} kg.`, 25);
  }
  const t = randomInt(1, 5);
  const kg = t * 1000;
  return q('metric_mass_convert', `Convert ${t} tonne${t>1?'s':''} to kilograms.`,
    getUniqueOptions(kg, [kg+100, t*100, t*10000], 0, 99999), kg,
    `1 tonne = 1000 kg. ${t} × 1000 = ${kg} kg.`, 25);
};

const genTimeDurationCalculate = (difficulty) => {
  const startH = randomInt(7, 22);
  const startM = pick([0, 15, 30, 45]);
  const durationH = randomInt(0, difficulty === 'hard' ? 5 : 3);
  const durationM = pick([0, 15, 30, 45]);
  const totalStartM = startH * 60 + startM;
  const totalEndM = totalStartM + durationH * 60 + durationM;
  const endH = Math.floor(totalEndM / 60) % 24;
  const endM = totalEndM % 60;
  const pad = n => String(n).padStart(2,'0');
  const startStr = `${pad(startH)}:${pad(startM)}`;
  const endStr = `${pad(endH)}:${pad(endM)}`;
  const dur = `${durationH}h ${durationM}min`;
  return q('time_duration_calculate',
    `A train departs at ${startStr} and the journey takes ${dur}. What time does it arrive? (24-hour time)`,
    shuffle([endStr, `${pad((endH+1)%24)}:${pad(endM)}`, `${pad(endH)}:${pad((endM+15)%60)}`, `${pad((endH-1+24)%24)}:${pad(endM)}`]),
    endStr, `${startStr} + ${dur} = ${endStr}.`, 30);
};

const genSideBySideColumnGraph = () => {
  const groups = ['Boys', 'Girls'];
  const cats = ['Reading', 'Maths', 'Art', 'Sport'];
  const data = cats.map(c => ({cat: c, boys: randomInt(1,10), girls: randomInt(1,10)}));
  const totalBoys = data.reduce((s,d)=>s+d.boys,0);
  const totalGirls = data.reduce((s,d)=>s+d.girls,0);
  const highest = data.reduce((m,d) => d.boys+d.girls > m.boys+m.girls ? d : m);
  const mode = pick(['compare_total', 'highest_combined', 'which_group']);
  if (mode === 'compare_total') {
    const winner = totalBoys > totalGirls ? 'Boys' : totalGirls > totalBoys ? 'Girls' : 'Equal';
    return q('side_by_side_column_graph',
      `A side-by-side graph shows: ${data.map(d=>`${d.cat}: Boys=${d.boys}, Girls=${d.girls}`).join('; ')}. Which group had a higher total?`,
      shuffle(['Boys', 'Girls', 'Equal', 'Cannot tell']), winner,
      `Boys total: ${totalBoys}, Girls total: ${totalGirls} → ${winner}.`, 28);
  }
  return q('side_by_side_column_graph',
    `A side-by-side graph: ${data.map(d=>`${d.cat}: B=${d.boys}, G=${d.girls}`).join('; ')}. Which category had the highest combined count?`,
    shuffle(cats), highest.cat,
    `${highest.cat}: ${highest.boys+highest.girls} total (Boys ${highest.boys} + Girls ${highest.girls}).`, 28);
};

const genDataBiasMisleading = () => {
  const scenarios = [
    {q: 'A graph starts at y = 80 instead of 0. This could make differences look…', ans: 'Larger than they really are', opts: ['Larger than they really are', 'Smaller than they really are', 'More accurate', 'Impossible to read']},
    {q: 'Only 5 people were surveyed about the "most popular" phone brand. This data may be…', ans: 'Biased due to small sample size', opts: ['Biased due to small sample size', 'Very accurate', 'Representative of everyone', 'Perfectly valid']},
    {q: 'A candy company surveys its own customers about favourite candy. This could result in…', ans: 'Biased results favouring their brand', opts: ['Biased results favouring their brand', 'Perfectly balanced data', 'Random sampling', 'Unbiased results']},
    {q: 'Which feature of a graph could make data appear misleading?', ans: 'A broken or non-zero y-axis', opts: ['A broken or non-zero y-axis', 'A clear title', 'Labelled axes', 'Equal bar widths']},
    {q: 'Surveying only students who like sport about "favourite activity" is an example of…', ans: 'Sampling bias', opts: ['Sampling bias', 'Random sampling', 'Stratified sampling', 'Systematic sampling']},
  ];
  const sc = pick(scenarios);
  return q('data_bias_misleading', sc.q, sc.opts, sc.ans, sc.ans, 28);
};

const genProbabilityObservedExpected = () => {
  const trials = pick([10, 20, 50, 100]);
  const expected = trials / 2;
  const observed = randomInt(Math.floor(trials * 0.3), Math.ceil(trials * 0.7));
  const mode = pick(['compare', 'more_trials', 'expected_calc']);
  if (mode === 'expected_calc') {
    const p = pick([{frac:'1/2',val:0.5},{frac:'1/6',val:1/6},{frac:'1/4',val:0.25}]);
    const exp = Math.round(trials * p.val);
    return q('probability_observed_expected',
      `A coin is tossed ${trials} times. The theoretical probability of Heads is ${p.frac}. How many Heads do you expect?`,
      getUniqueOptions(exp, [exp+5, exp-5, trials], 0, trials), exp,
      `Expected = ${trials} × ${p.frac} = ${exp}.`, 28);
  }
  if (mode === 'more_trials') {
    return q('probability_observed_expected',
      `You flip a coin 10 times and get 7 Heads. If you flip it 1000 times, the result will likely be…`,
      ['Closer to 500 Heads (50%)', 'Exactly 700 Heads again', 'More than 700 Heads', 'Fewer than 300 Heads'],
      'Closer to 500 Heads (50%)',
      'With more trials, observed results get closer to the theoretical probability (50%).', 28);
  }
  return q('probability_observed_expected',
    `A coin was tossed ${trials} times. Heads appeared ${observed} times. The theoretical probability of Heads is 1/2 (expected ${expected}). Which statement is correct?`,
    [
      `Observed (${observed}) differs from expected (${expected}) due to chance`,
      `The coin is definitely unfair`,
      `The theoretical probability must be wrong`,
      `Results will always match expected`,
    ],
    `Observed (${observed}) differs from expected (${expected}) due to chance`,
    'Experimental results rarely match theory exactly, especially with fewer trials.', 30);
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
  // NSW Year 1-2 new generators
  subitising: genSubitising,
  equality_balance: genEqualityBalance,
  area_informal_compare: genAreaInformalCompare,
  volume_fill_compare: genVolumeFillCompare,
  chance_possible_outcomes: genChancePossibleOutcomes,
  number_bonds_to_100: genNumberBondsTo100,
  fraction_collection: genFractionCollection,
  shape_transformation_basic: genShapeTransformationBasic,
  // NSW Year 3 new generators
  place_value_to_thousands: genPlaceValueToThousands,
  addition_subtraction_3digit: genAdditionSubtraction3Digit,
  missing_value_equations: genMissingValueEquations,
  fraction_number_line: genFractionNumberLine,
  angle_identify_compare: genAngleIdentifyCompare,
  shape_features_compare: genShapeFeaturesCompare,
  shape_transform_combine_split: genShapeTransformCombineSplit,
  area_square_cm_m: genAreaSquareCm,
  nets_3d_objects: genNets3DObjects,
  capacity_litres_ml: genCapacityLitresMl,
  time_analog_digital: genTimeAnalogDigital,
  column_graph_construct: genColumnGraphConstruct,
  chance_experiment_record: genChanceExperimentRecord,
  // NSW Year 4 new generators
  place_value_to_100000: genPlaceValueTo100000,
  decimal_tenths_hundredths: genDecimalTenthsHundredths,
  money_budgeting: genMoneyBudgeting,
  multiplication_2digit: genMultiplication2Digit,
  division_with_remainder: genDivisionWithRemainder,
  equivalent_fractions_number_line: genEquivalentFractionsNumberLine,
  tessellation: genTessellation,
  area_irregular: genAreaIrregular,
  time_am_pm_timetable: genTimeAmPmTimetable,
  data_many_to_one_scale: genDataManyToOneScale,
  chance_dependent_independent: genChanceDependentIndependent,
  // NSW Year 5 new generators
  place_value_millions: genPlaceValueMillions,
  decimal_thousandths: genDecimalThousandths,
  percentage_discount: genPercentageDiscount,
  multiplication_2digit_by_2digit: genMultiplication2DigitBy2Digit,
  division_multi_digit: genDivisionMultiDigit,
  order_of_operations: genOrderOfOperations,
  fraction_add_subtract_same_denom: genFractionAddSubtractSameDenom,
  fraction_of_quantity: genFractionOfQuantity,
  coordinate_plane_one_quadrant: genCoordinatePlaneOneQuadrant,
  angle_straight_line: genAngleStraightLine,
  shape_classify_properties: genShapeClassifyProperties,
  area_rectangle_formula: genAreaRectangleFormula,
  prism_pyramid_identify: genPrismPyramidIdentify,
  volume_displacement: genVolumeDisplacement,
  categorical_numerical_data: genCategoricalNumericalData,
  probability_fraction_quantify: genProbabilityFractionQuantify,
  // NSW Year 6 new generators
  decimal_add_subtract: genDecimalAddSubtract,
  decimal_multiply_divide: genDecimalMultiplyDivide,
  fraction_as_division: genFractionAsDivision,
  fraction_equivalent_related_denom: genFractionEquivalentRelatedDenom,
  coordinate_four_quadrants: genCoordinateFourQuadrants,
  metric_length_convert: genMetricLengthConvert,
  angle_intersecting_lines: genAngleIntersectingLines,
  area_parallelogram_triangle: genAreaParallelogramTriangle,
  area_composite_shapes: genAreaCompositeShapes,
  volume_rectangular_prism_formula: genVolumeRectangularPrismFormula,
  metric_mass_convert: genMetricMassConvert,
  time_duration_calculate: genTimeDurationCalculate,
  side_by_side_column_graph: genSideBySideColumnGraph,
  data_bias_misleading: genDataBiasMisleading,
  probability_observed_expected: genProbabilityObservedExpected,
  // New NSW syllabus generators (Years 1-6)
  ordinal_numbers: genOrdinalNumbers,
  equal_groups: genEqualGroups,
  array_multiplication: genArrayMultiplication,
  division_sharing: genDivisionSharing,
  fraction_of_shape: genFractionOfShape,
  turns: genTurns,
  numbers_to_1000: genNumbersTo1000,
  multiplication_facts: genMultiplicationFacts,
  division_facts: genDivisionFacts,
  angle_types: genAngleTypes,
  metric_convert: genMetricConvert,
  decimal_place_value_new: genDecimalPlaceValue,
  elapsed_time: genElapsedTime,
  factors_multiples: genFactorsMultiples,
  prime_composite: genPrimeComposite,
  transformation: genTransformation,
  mean_median_mode: genMeanMedianMode,
  line_graph: genLineGraph,
  stem_leaf: genStemLeaf,
  angle_relationships: genAngleRelationships,
  money_dollars: genMoneyDollars,
  input_output: genInputOutput,
  word_problem_multistep: genWordProblemMultiStep,
  negative_context: genNegativeContext,
  time_24hour: gen24HourTime,
  protractor_angle: genProtractorAngle,
  cross_section: genCrossSection,
  symmetry: genSymmetry,
  money_add_sub: genMoneyAddSub,
  perimeter_polygon: genPerimeterPolygon,
  percentage_problems: genPercentageProblems,
  area_square_units: genAreaSquareUnits,
  shape_3d_properties: gen3DShapeProperties,
  number_pattern_stage2: genNumberPatternStage2,
  dot_plot: genDotPlot,
};

const inferPrimaryGeneratorTypes = ({ year, chapterTitle = '', topicTitle = '', topicGroup = '' }) => {
  const text = `${chapterTitle} ${topicTitle} ${topicGroup}`.toLowerCase();
  const yearNum = getYearNumber(year);

  if (yearNum >= 7) {
    const types = [];
    const add = (...items) => items.forEach(item => {
      if (!types.includes(item)) types.push(item);
    });

    if (/consumer|percentage|percent|increase|decrease|interest|depreciation|discount|finance|growth|decay/.test(text)) add('percent_quantity', 'money_budget', 'problem_solving_money');
    if (/surd|irrational|rationalis|special product|indices|powers|scientific notation|logarithm|exponential/.test(text)) add('algebra_yr11', 'order_operations');
    if (/algebra|equation|inequalit|formula|factoris|quadratic|polynomial|function|domain|range|inverse/.test(text)) add('algebra_yr11', 'order_operations');
    if (/line|linear|gradient|midpoint|distance|coordinate|cartesian|simultaneous/.test(text)) add('coordinate_gradient', 'coordinate_midpoint', 'algebra_yr11');
    if (/parabola|quadratic|graph|hyperbola|circle|region/.test(text)) add('coordinate_gradient', 'algebra_yr11');
    if (/surface area|volume|prism|cylinder|pyramid|cone|sphere|3d/.test(text)) add('volume_rectangular_prism', 'solid_properties_stage', 'net_3d_object');
    if (/congruence|similarity|triangle|angle|circle geometry|tangent|chord/.test(text)) add('angles_triangle', 'angles_at_point', 'shape_classification_stage');
    if (/trigonometry|sine|cosine|ratio|proportion/.test(text)) add('problem_solving_rate', 'angles_triangle');
    if (/probability|conditional|independent|sampling|chance/.test(text)) add('probability_fraction');
    if (/statistics|median|quartile|boxplot|histogram|standard deviation|bivariate|line of best fit|data/.test(text)) add('scaled_data_display', 'data_compare_more');
    if (/problem/.test(text)) add('problem_solving_money', 'problem_solving_rate');

    return types.length ? types : getDefaultGeneratorTypesForYear(year);
  }

  if (!['Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'].includes(year)) return null;

  if (year === 'Year 1') {
    if (/subitise|dot pattern|ten.frame|recognise/.test(text)) return ['subitising', 'place_value', 'before_after'];
    if (/balance|equal|equation/.test(text)) return ['equality_balance', 'equals_balance', 'equals_true_false'];
    if (/area|surface/.test(text)) return ['area_informal_compare', 'informal_units'];
    if (/volume|fill|container/.test(text)) return ['volume_fill_compare', 'capacity_compare'];
    if (/chance|possible|outcome|likely/.test(text)) return ['chance_possible_outcomes', 'likelihood_language', 'likely_unlikely'];
  }

  if (year === 'Year 2') {
    if (/whole number|place value|count|partition|round/.test(text)) return ['place_value', 'skip_counting', 'number_line', 'compare_numbers', 'numbers_to_1000', 'ordinal_numbers'];
    if (/ordinal/.test(text)) return ['ordinal_numbers'];
    if (/number bond|bond to 100/.test(text)) return ['number_bonds_to_100', 'make_10', 'addition_within_20'];
    if (/add|subtract|additive|money|unknown|inverse|fact/.test(text)) return ['addition_within_20', 'subtraction_within_20', 'missing_addend', 'number_bonds_to_100', 'word_problem_add_subtract'];
    if (/multiplication|division|equal group|array|skip/.test(text)) return ['equal_groups', 'array_multiplication', 'fraction_collection', 'skip_counting', 'number_pattern_stage2'];
    if (/fraction|half|quarter|equal part/.test(text)) return ['fraction_of_shape', 'fraction_collection', 'fraction_half_quarter', 'equal_parts'];
    if (/turn|rotation|flip|slide/.test(text)) return ['turns', 'shape_transformation_basic', 'shape_sort'];
    if (/length|area|volume|capacity|mass/.test(text)) return ['length_compare', 'length_order', 'informal_units', 'area_informal_compare', 'volume_fill_compare'];
    if (/time|calendar/.test(text)) return ['read_clock', 'calendar_order', 'time_analog_digital', 'elapsed_time'];
    if (/2d|shape|position|grid|3d|object/.test(text)) return ['shape_2d', 'shape_true_false', 'shape_3d', 'grid_map', 'shape_transformation_basic'];
    if (/data|graph|table|tally/.test(text)) return ['tally_chart', 'graph_reading', 'data_compare_more', 'column_graph_construct'];
    if (/chance|outcome|likely|unlikely/.test(text)) return ['likelihood_language', 'likely_unlikely', 'chance_possible_outcomes', 'chance_experiment_record'];
    return ['addition_within_20', 'subtraction_within_20', 'number_bonds_to_100', 'place_value'];
  }

  const types = [];
  const add = (...items) => items.forEach(item => {
    if (!types.includes(item)) types.push(item);
  });
  const isFractionTopic = /fraction|mixed numeral|improper|equivalent/.test(text);

  if (/problem|rate|ratio|real[- ]?life|multi.step/.test(text)) add('word_problem_multistep', 'problem_solving_money', 'problem_solving_fraction', 'problem_solving_rate');
  if (/place value|whole number|representing numbers|millions|thousand|\bpartition\b|\bregroup\b|expanded|\bround\b|order numbers|compare numbers/.test(text)) {
    if (/million|billion/.test(text)) add('place_value_millions');
    else if (/hundred.thousand|100.000/.test(text)) add('place_value_to_100000');
    else if (/thousand/.test(text)) add('place_value_to_thousands');
    add('stage_place_value', 'stage_rounding', 'order_numbers', 'compare_numbers');
  }
  if (/decimal|hundredth|thousandth|tenths/.test(text)) {
    if (/thousandth/.test(text)) add('decimal_thousandths');
    else add('decimal_tenths_hundredths');
    add('decimal_place_value_new', 'decimal_place_value', 'decimal_add_subtract', 'fraction_decimal_percent');
  }
  if (/percentage|percent|discount|gst/.test(text)) add('percentage_discount', 'percentage_problems', 'percent_quantity', 'fraction_decimal_percent');
  if (/negative|integer/.test(text)) add('negative_context', 'integers_number_line', 'number_line');
  if (isFractionTopic) add('fraction_of_shape', 'fraction_of_quantity', 'fraction_add_subtract_same_denom', 'fraction_as_division', 'fraction_equivalent_related_denom', 'fraction_quantity', 'equivalent_fractions', 'fraction_number_line');
  if (!isFractionTopic && /additive|addition|subtraction|add and subtract|budget|money/.test(text)) add('money_add_sub', 'money_budgeting', 'money_dollars', 'large_add_subtract', 'decimal_add_subtract');
  if (/multiplicative|\bmultiplication\b|\bmultiply\b/.test(text)) add('multiplication_2digit_by_2digit', 'multiplication_2digit', 'multiplication_facts', 'array_multiplication', 'multiplicative_relations', 'word_problem_multistep');
  if (/\bdivision\b|\bdivide\b/.test(text)) add('division_multi_digit', 'division_with_remainder', 'division_facts', 'division_sharing', 'multiplicative_relations');
  if (/\bfactor\b|\bmultiple\b|hcf|lcm/.test(text)) add('factors_multiples', 'prime_composite', 'order_of_operations');
  if (/prime|composite|square number/.test(text)) add('prime_composite', 'factors_multiples');
  if (/bodmas|order of operations|brackets/.test(text)) add('order_of_operations', 'order_operations', 'word_problem_multistep');
  if (/input.output|function machine|rule/.test(text)) add('input_output', 'number_pattern_stage2');
  if (/number pattern/.test(text)) add('number_pattern_stage2', 'input_output', 'skip_counting');
  if (/length|kilometre|metre|millimetre|centimetre|\bmetric\b/.test(text)) add('metric_length_convert', 'metric_convert', 'metric_length', 'perimeter_polygon', 'perimeter_rectangle');
  if (/perimeter/.test(text)) add('perimeter_polygon', 'perimeter_rectangle', 'area_rectangle_formula');
  if (/temperature|celsius|thermometer/.test(text)) add('temperature_difference', 'temperature_compare');
  if (/mass|\bgrams?\b|\bkilograms?\b|tonne/.test(text)) add('metric_mass_convert', 'metric_convert', 'metric_mass', 'word_problem_multistep');
  if (/capacity|litre|millilitre/.test(text)) add('capacity_litres_ml', 'metric_convert', 'metric_mass', 'volume_displacement');
  if (/volume|prism|cross.section/.test(text)) add('volume_rectangular_prism_formula', 'volume_rectangular_prism', 'volume_displacement', 'cross_section');
  if (/time|duration|timetable|timezone|analogue|digital/.test(text)) {
    if (/24.hour/.test(text)) add('time_duration_calculate', 'time_24hour');
    add('time_duration_calculate', 'elapsed_time', 'time_am_pm_timetable', 'duration_time', 'read_clock');
  }
  if (/angle|degrees/.test(text)) {
    if (/intersect|opposite|supplementary|vertically/.test(text)) add('angle_intersecting_lines', 'angle_relationships');
    else if (/straight line|point/.test(text)) add('angle_straight_line', 'angle_relationships', 'angles_straight_line');
    else if (/type|acute|obtuse|reflex/.test(text)) add('angle_identify_compare', 'angle_types');
    else if (/protractor/.test(text)) add('protractor_angle', 'angle_types');
    add('angles_triangle', 'angles_at_point');
  }
  if (/cartesian|coordinate|grid reference|position/.test(text)) {
    if (/four quadrant|all quadrant/.test(text)) add('coordinate_four_quadrants');
    else add('coordinate_plane_one_quadrant', 'coordinate_translation', 'coordinate_midpoint');
    add('grid_map');
  }
  if (/area/.test(text)) {
    if (/parallelogram|triangle/.test(text)) add('area_parallelogram_triangle');
    if (/composite|irregular/.test(text)) add('area_composite_shapes', 'area_irregular');
    if (/formula|rectangle/.test(text)) add('area_rectangle_formula');
    add('area_square_cm_m', 'area_square_units', 'area_rectangle', 'area_triangle');
  }
  if (/2d|shape|triangle|quadrilateral/.test(text)) {
    if (/classify|properties|type/.test(text)) add('shape_classify_properties', 'shape_features_compare');
    if (/tessellat/.test(text)) add('tessellation');
    if (/combine|split|compose/.test(text)) add('shape_transform_combine_split');
    add('shape_classification_stage', 'shape_2d', 'shape_true_false');
  }
  if (/symmetry/.test(text)) add('symmetry', 'symmetry_lines', 'shape_classify_properties');
  if (/transform|reflect|translate|rotat|enlargement|similarity/.test(text)) add('transformation', 'shape_transform_combine_split', 'symmetry', 'enlargement_scale');
  if (/3d|prism|pyramid|net|cube|solid|face|edge|vertice|vertices/.test(text)) add('nets_3d_objects', 'prism_pyramid_identify', 'shape_3d_properties', 'solid_properties_stage', 'net_3d_object', 'cross_section');
  if (/mean|median|mode|range|average/.test(text)) add('mean_median_mode', 'scaled_data_display');
  if (/stem.leaf/.test(text)) add('stem_leaf', 'dot_plot', 'scaled_data_display');
  if (/dot plot/.test(text)) add('dot_plot', 'stem_leaf', 'scaled_data_display');
  if (/line graph/.test(text)) add('line_graph', 'scaled_data_display');
  if (/side.by.side|grouped|compare.*group/.test(text)) add('side_by_side_column_graph', 'scaled_data_display');
  if (/mislead|bias|scale/.test(text)) add('data_bias_misleading', 'scaled_data_display');
  if (/categorical|numerical.*data|type.*data/.test(text)) add('categorical_numerical_data', 'scaled_data_display');
  if (/many.to.one|scale.*graph/.test(text)) add('data_many_to_one_scale', 'scaled_data_display', 'graph_reading');
  if (/column graph|bar graph|picture graph/.test(text)) add('column_graph_construct', 'data_many_to_one_scale', 'graph_reading', 'picture_graph_build');
  if (/data|graph|table|plot|chart|display/.test(text)) add('scaled_data_display', 'dot_plot', 'line_graph', 'data_compare_more', 'graph_reading', 'column_graph_construct');
  if (/chance|probability|outcome|random/.test(text)) {
    if (/observed|expected|experiment/.test(text)) add('probability_observed_expected', 'chance_experiment_record');
    else if (/fraction|quantif/.test(text)) add('probability_fraction_quantify', 'probability_fraction');
    else if (/dependent|independent|replace/.test(text)) add('chance_dependent_independent');
    else if (/possible|impossible/.test(text)) add('chance_possible_outcomes', 'likelihood_language');
    add('probability_fraction', 'most_likely', 'likelihood_language');
  }

  return types.length ? types : ['stage_place_value', 'large_add_subtract', 'multiplicative_relations', 'word_problem_multistep'];
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
  // Year 2 groups
  'Ordinal Numbers': ['ordinal_numbers', 'place_value'],
  'Equal Groups': ['equal_groups', 'array_multiplication', 'division_sharing'],
  'Arrays': ['array_multiplication', 'equal_groups', 'multiplication_facts'],
  'Turns & Direction': ['turns', 'position_words', 'follow_directions'],
  'Numbers to 1000': ['numbers_to_1000', 'place_value', 'stage_place_value'],
  // Year 3-4 groups
  'Multiplication Facts': ['multiplication_facts', 'division_facts', 'array_multiplication'],
  'Division': ['division_facts', 'division_sharing', 'multiplication_facts'],
  'Fractions of Shapes': ['fraction_of_shape', 'fraction_half_quarter', 'fraction_quantity'],
  'Angle Types': ['angle_types', 'angles_straight_line', 'angles_triangle'],
  'Metric Units': ['metric_convert', 'metric_length', 'metric_mass'],
  'Decimals': ['decimal_place_value_new', 'decimal_place_value', 'fraction_decimal_percent'],
  'Elapsed Time': ['elapsed_time', 'read_clock', 'time_24hour'],
  'Input/Output Tables': ['input_output', 'number_pattern_stage2', 'pattern_rule'],
  'Number Patterns': ['number_pattern_stage2', 'input_output', 'skip_counting'],
  'Perimeter': ['perimeter_polygon', 'perimeter_rectangle', 'area_square_units'],
  'Area': ['area_square_units', 'area_rectangle', 'perimeter_polygon'],
  '3D Shape Properties': ['shape_3d_properties', 'solid_properties_stage', 'net_3d_object'],
  'Symmetry': ['symmetry', 'symmetry_lines', 'shape_classification_stage'],
  'Money Calculations': ['money_add_sub', 'money_dollars', 'money_budget'],
  // Year 5-6 groups
  'Factors & Multiples': ['factors_multiples', 'multiplication_facts', 'prime_composite'],
  'Prime Numbers': ['prime_composite', 'factors_multiples'],
  'Transformations': ['transformation', 'symmetry', 'coordinate_translation'],
  'Mean, Median, Mode': ['mean_median_mode', 'scaled_data_display'],
  'Line Graphs': ['line_graph', 'scaled_data_display'],
  'Stem-and-Leaf Plots': ['stem_leaf', 'dot_plot', 'scaled_data_display'],
  'Dot Plots': ['dot_plot', 'stem_leaf', 'scaled_data_display'],
  'Angle Relationships': ['angle_relationships', 'angles_straight_line', 'angles_triangle', 'angles_at_point'],
  'Percentages': ['percentage_problems', 'percent_quantity', 'fraction_decimal_percent'],
  'Negative Numbers': ['negative_context', 'integers_number_line', 'number_line'],
  '24-Hour Time': ['time_24hour', 'elapsed_time', 'duration_time'],
  'Protractor': ['protractor_angle', 'angle_types'],
  'Cross-Sections': ['cross_section', 'shape_3d_properties', 'solid_properties_stage'],
  'Multi-Step Problems': ['word_problem_multistep', 'problem_solving_money', 'problem_solving_rate'],
  'Money Problems': ['money_dollars', 'money_add_sub', 'money_budgeting', 'percentage_problems', 'word_problem_multistep'],
  // Year 1 new groups
  'Subitising': ['subitising', 'place_value'],
  'Understanding Equals Advanced': ['equality_balance', 'equals_balance', 'equals_true_false'],
  'Area (Informal)': ['area_informal_compare', 'informal_units', 'volume_fill_compare'],
  'Chance & Outcomes': ['chance_possible_outcomes', 'likelihood_language', 'likely_unlikely', 'simple_experiment'],
  // Year 2 new groups
  'Number Bonds to 100': ['number_bonds_to_100', 'make_10', 'addition_within_20'],
  'Fractions of Collections': ['fraction_collection', 'fraction_half_quarter', 'equal_parts'],
  'Transformations (Basic)': ['shape_transformation_basic', 'turns', 'position_words'],
  // Year 3 new groups
  'Place Value to Thousands': ['place_value_to_thousands', 'stage_place_value', 'numbers_to_1000'],
  'Addition & Subtraction Strategies': ['addition_subtraction_3digit', 'large_add_subtract', 'missing_value_equations'],
  'Missing Values': ['missing_value_equations', 'equals_balance', 'input_output'],
  'Fractions on a Number Line': ['fraction_number_line', 'fraction_half_quarter', 'fraction_quantity'],
  'Angles (Basic)': ['angle_identify_compare', 'angle_types', 'angles_straight_line'],
  'Shape Properties': ['shape_features_compare', 'shape_classify_properties', 'shape_classification_stage'],
  'Combining & Splitting Shapes': ['shape_transform_combine_split', 'shape_classification_stage', 'tessellation'],
  'Area (Square Units)': ['area_square_cm_m', 'area_square_units', 'area_rectangle'],
  'Nets of 3D Objects': ['nets_3d_objects', 'prism_pyramid_identify', 'solid_properties_stage'],
  'Capacity (L & mL)': ['capacity_litres_ml', 'metric_convert', 'volume_displacement'],
  'Analog & Digital Time': ['time_analog_digital', 'read_clock', 'elapsed_time'],
  'Column Graphs': ['column_graph_construct', 'data_many_to_one_scale', 'graph_reading'],
  'Chance Experiments': ['chance_experiment_record', 'simple_experiment', 'probability_fraction_quantify'],
  // Year 4 new groups
  'Place Value to 100 000': ['place_value_to_100000', 'stage_place_value', 'stage_rounding'],
  'Decimals (Tenths & Hundredths)': ['decimal_tenths_hundredths', 'decimal_place_value_new', 'fraction_decimal_percent'],
  'Money & Budgeting': ['money_budgeting', 'money_add_sub', 'money_dollars'],
  'Multiplication (2-digit)': ['multiplication_2digit', 'multiplication_facts', 'array_multiplication'],
  'Division with Remainders': ['division_with_remainder', 'division_facts', 'division_multi_digit'],
  'Equivalent Fractions (Number Line)': ['equivalent_fractions_number_line', 'fraction_number_line', 'equivalent_fractions'],
  'Tessellation': ['tessellation', 'shape_transform_combine_split', 'shape_classification_stage'],
  'Area (Irregular)': ['area_irregular', 'area_square_cm_m', 'area_square_units'],
  'Timetables (am/pm)': ['time_am_pm_timetable', 'elapsed_time', 'time_duration_calculate'],
  'Many-to-One Graphs': ['data_many_to_one_scale', 'column_graph_construct', 'picture_graph_build'],
  'Dependent & Independent Events': ['chance_dependent_independent', 'probability_fraction_quantify', 'simple_experiment'],
  // Year 5 new groups
  'Place Value (Millions)': ['place_value_millions', 'stage_place_value', 'stage_rounding'],
  'Decimals (Thousandths)': ['decimal_thousandths', 'decimal_tenths_hundredths', 'decimal_add_subtract'],
  'Percentage & Discount': ['percentage_discount', 'percentage_problems', 'money_budgeting'],
  'Multiplication (2-digit × 2-digit)': ['multiplication_2digit_by_2digit', 'multiplication_2digit', 'word_problem_multistep'],
  'Division (Multi-digit)': ['division_multi_digit', 'division_with_remainder', 'word_problem_multistep'],
  'Order of Operations': ['order_of_operations', 'order_operations', 'word_problem_multistep'],
  'Fraction Add/Subtract': ['fraction_add_subtract_same_denom', 'fraction_quantity', 'fraction_number_line'],
  'Fraction of a Quantity': ['fraction_of_quantity', 'fraction_quantity', 'word_problem_multistep'],
  'Coordinate Plane (1st Quadrant)': ['coordinate_plane_one_quadrant', 'coordinate_translation', 'grid_map'],
  'Angles on a Straight Line': ['angle_straight_line', 'angle_relationships', 'angles_straight_line'],
  'Shape Classification': ['shape_classify_properties', 'shape_features_compare', 'shape_classification_stage'],
  'Area (Formula)': ['area_rectangle_formula', 'area_parallelogram_triangle', 'area_composite_shapes'],
  'Prisms & Pyramids': ['prism_pyramid_identify', 'nets_3d_objects', 'solid_properties_stage'],
  'Volume (Displacement)': ['volume_displacement', 'volume_rectangular_prism_formula', 'volume_rectangular_prism'],
  'Data Types': ['categorical_numerical_data', 'scaled_data_display', 'line_graph'],
  'Probability (Fractions)': ['probability_fraction_quantify', 'probability_fraction', 'chance_experiment_record'],
  // Year 6 new groups
  'Decimal Operations': ['decimal_add_subtract', 'decimal_multiply_divide', 'decimal_thousandths'],
  'Fractions as Division': ['fraction_as_division', 'fraction_of_quantity', 'fraction_equivalent_related_denom'],
  'Coordinate Plane (4 Quadrants)': ['coordinate_four_quadrants', 'coordinate_plane_one_quadrant', 'coordinate_translation'],
  'Metric Length Conversion': ['metric_length_convert', 'metric_convert', 'metric_mass_convert'],
  'Angles (Intersecting Lines)': ['angle_intersecting_lines', 'angle_relationships', 'angle_straight_line'],
  'Area (Parallelogram & Triangle)': ['area_parallelogram_triangle', 'area_composite_shapes', 'area_rectangle_formula'],
  'Area (Composite)': ['area_composite_shapes', 'area_parallelogram_triangle', 'area_rectangle_formula'],
  'Volume (Formula)': ['volume_rectangular_prism_formula', 'volume_rectangular_prism', 'volume_displacement'],
  'Mass Conversion': ['metric_mass_convert', 'metric_convert', 'word_problem_multistep'],
  'Time Duration': ['time_duration_calculate', 'time_am_pm_timetable', 'time_24hour'],
  'Side-by-Side Graphs': ['side_by_side_column_graph', 'column_graph_construct', 'categorical_numerical_data'],
  'Misleading Data': ['data_bias_misleading', 'categorical_numerical_data', 'scaled_data_display'],
  'Probability (Observed vs Expected)': ['probability_observed_expected', 'chance_experiment_record', 'probability_fraction_quantify'],
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
