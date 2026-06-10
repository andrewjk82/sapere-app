/**
 * ── Step-by-step Lesson Registry ──────────────────────────────────────────
 *
 * Lessons are AUTHORED (by Claude from textbook screenshots, then reviewed)
 * and stored here in code — no database, no per-student storage, no API cost
 * at runtime. Each lesson is keyed by its curriculum `topicId` (see
 * constants/curriculumData.js). A "Learn step-by-step" button appears in the
 * app ONLY for topics that have an entry here, so students only ever see
 * vetted lessons.
 *
 * ── Lesson Spec schema ────────────────────────────────────────────────────
 * {
 *   topicId: string,           // matches curriculum topic id, e.g. 'y7-1g'
 *   title:   string,
 *   steps: [
 *     {
 *       narration: string,     // HTML shown on screen (allows <b>, <sup>…)
 *       speech:    string,     // plain text read aloud (Web Speech API)
 *       board:     BoardItem[] // what to draw on the visual board this step
 *     }
 *   ]
 * }
 *
 * BoardItem (a small set of reusable primitives — extend as new lessons need):
 *   { type:'placeValueTable', columns:[{ name, digit, value, power,
 *        showDigit?, showValue?, showPower?, active? }] }
 *   { type:'math', content:string, emphasis?:boolean }   // KaTeX via MathView
 *   { type:'text', content:string }
 *
 * To add a lesson: build a spec (often via a small helper like the one below
 * for place value) and register it in LESSONS keyed by topicId.
 */

// ── Shared glossary — base maths terms, auto-linked in every lesson ────────
// Authoring rule: every lesson passes a glossary so students can tap key terms
// for a plain-English definition. Add topic-specific terms per lesson.
export const BASE_GLOSSARY = {
  'asymptote': 'A line the curve gets closer and closer to but never actually touches.',
  'tangent': 'A straight line that just touches a curve at a single point without crossing it.',
  'domain': 'All the x-values (inputs) a function is allowed to take.',
  'range': 'All the y-values (outputs) a function can produce.',
  'limit': 'The value a function gets closer and closer to as x heads toward some number.',
  'horizontal inflection': 'A point where the curve momentarily flattens and changes its bend from one way to the other.',
  'turning point': 'A point where the curve stops going one way and turns to go the other — a peak or a valley.',
  'polynomial': 'An expression built from powers of x (like x², x³) added together with number coefficients.',
  'degree': 'The highest power of x in a polynomial.',
  'rectangular hyperbola': 'The curve of y = 1/x — two separate branches with the axes as asymptotes.',
  'semicircle': 'Exactly half of a circle.',
  'double zero': 'A zero from a squared factor; the curve touches the x-axis there instead of crossing it.',
  'y-intercept': 'Where the graph crosses the y-axis (the value of y when x = 0).',
  'place value': 'The value of a digit based on its position in a number (ones, tens, hundreds …).',
  'expanded form': 'A number written out as the sum of its place values, e.g. 3721 = 3000 + 700 + 20 + 1.',
};

// ── Helper: build a Place Value lesson spec for any whole number ───────────
const PLACE_NAMES = ['Ones', 'Tens', 'Hundreds', 'Thousands', 'Ten thousands', 'Hundred thousands', 'Millions'];
const PV_WORD = ['1', '10', '100', '1000', '10\\,000', '100\\,000', '1\\,000\\,000'];
const PV_SPOKEN = ['1', '10', '100', '1 thousand', '10 thousand', '100 thousand', '1 million'];
const fmt = (n) => n.toLocaleString('en-US').replace(/,/g, '\\,');
const fmtPlain = (n) => n.toLocaleString('en-US').replace(/,/g, ' ');

export const buildPlaceValueLesson = (number, title = 'Place value', { audioBase = null } = {}) => {
  const s = String(Math.max(0, Math.floor(number)));
  const digits = s.split('').map(Number);
  const len = digits.length;
  const cols = digits.map((d, i) => {
    const power = len - 1 - i;
    return { d, power, name: PLACE_NAMES[power] || `10^${power}`,
             value: d * Math.pow(10, power),
             pvWord: PV_WORD[power] || `10^${power}`,
             pvSpoken: PV_SPOKEN[power] || `ten to the power ${power}` };
  });
  const value = cols.reduce((a, c) => a + c.value, 0);

  // Build the place-value table board for a given step.
  const table = (activeIdx, valueUpto, showPow) => ({
    type: 'placeValueTable',
    columns: cols.map((c, i) => ({
      name: c.name, digit: c.d, value: c.value, power: c.power,
      showDigit: true,
      showValue: valueUpto !== undefined && i <= valueUpto,
      showPower: !!showPow,
      active: i === activeIdx,
    })),
  });

  const steps = [];
  // 0 — intro
  steps.push({
    narration: `The number <b>${fmtPlain(value)}</b> is a <b>${len}-digit number</b>. Each place has a name: ${cols.map(c => c.name).join(', ')}.`,
    speech: `The number ${fmtPlain(value)} is a ${len} digit number. Each place has a name: ${cols.map(c => c.name.toLowerCase()).join(', ')}.`,
    board: [table(-1, undefined, false)],
  });
  // per-digit
  cols.forEach((c, i) => {
    steps.push({
      narration: c.d === 0
        ? `The digit in the <b>${c.name}</b> place is <b>0</b>. A zero place has a value of <b>0</b>, so there is nothing to add.`
        : `In the <b>${c.name}</b> place, the digit <b>${c.d}</b> has a place value of <b>${c.d} × ${c.pvWord.replace(/\\,/g, ' ')} = ${fmtPlain(c.value)}</b>.`,
      speech: c.d === 0
        ? `The digit in the ${c.name.toLowerCase()} place is zero. A zero place has a value of zero, so there is nothing to add.`
        : `In the ${c.name.toLowerCase()} place, the digit ${c.d} has a place value of ${c.d} times ${c.pvSpoken}, which equals ${fmtPlain(c.value)}.`,
      board: [table(i, i, false)],
    });
  });
  // expanded form
  const stdTerms = cols.filter(c => c.d !== 0).map(c => c.power > 0 ? `${c.d}\\times ${c.pvWord}` : `${c.d}`);
  steps.push({
    narration: `Adding all the place values gives the number back. Writing it this way is called <b>expanded form</b>.`,
    speech: `Adding all the place values gives the number back. Writing a number this way is called expanded form.`,
    board: [table(-1, len - 1, false), { type: 'math', content: `$$${fmt(value)} = ${stdTerms.join(' + ')}$$`, emphasis: true }],
  });
  // powers of 10
  const powTerms = cols.filter(c => c.d !== 0).map(c => c.power > 0 ? `${c.d}\\times 10^{${c.power}}` : `${c.d}`);
  steps.push({
    narration: `Using <b>powers of 10</b> makes it shorter: 10 = 10<sup>1</sup>, 100 = 10<sup>2</sup>, 1000 = 10<sup>3</sup>, …`,
    speech: `Using powers of ten makes it shorter. Ten is ten to the power one, one hundred is ten to the power two, one thousand is ten to the power three, and so on.`,
    board: [table(-1, len - 1, true), { type: 'math', content: `$$${fmt(value)} = ${powTerms.join(' + ')}$$`, emphasis: true }],
  });

  // Attach pre-generated audio file URLs (step-0.wav, step-1.wav, …) when a
  // base path is given. The LessonPlayer plays these small files directly —
  // students never download the TTS model.
  if (audioBase) steps.forEach((s, i) => { s.audioUrl = `${audioBase}/step-${i}.mp3`; });

  return { topicId: null, title, number, steps, glossary: BASE_GLOSSARY };
};

// ── Lesson: Year 11 · 3H · Two graphs that have asymptotes ─────────────────
export const buildAsymptotesLesson = ({ audioBase = null } = {}) => {
  const exp = (x) => Math.pow(2, x);
  const recip = (x) => 1 / x;
  const expGraph = (extra = {}) => ({ type: 'graph', xMin: -3, xMax: 3.2, yMin: -1, yMax: 9, curves: [{ fn: exp }], ...extra });
  const recipGraph = (extra = {}) => ({ type: 'graph', xMin: -4, xMax: 4, yMin: -4, yMax: 4, curves: [{ fn: recip }], ...extra });

  const steps = [
    {
      narration: `An <b>exponential function</b> has the form <b>f(x) = aˣ</b> — the variable x sits in the <b>exponent</b> (the power). Here the base a is positive and not 1.`,
      speech: `An exponential function has the form f of x equals a to the power x. The variable x sits in the exponent, the power. The base a is positive and not equal to one.`,
      board: [{ type: 'math', content: `$$f(x) = a^{x}$$`, emphasis: true }],
    },
    {
      narration: `Let's sketch <b>y = 2ˣ</b>. We build a table of values, then plot the smooth curve.`,
      speech: `Let's sketch y equals 2 to the power x. We build a table of values, then plot the smooth curve.`,
      board: [
        { type: 'valueTable', rows: [['x', '-2', '-1', '0', '1', '2', '3'], ['y', '\\frac{1}{4}', '\\frac{1}{2}', '1', '2', '4', '8']] },
        expGraph(),
      ],
    },
    {
      narration: `The <b>y-intercept is 1</b>, because <b>2⁰ = 1</b>. Every exponential graph passes through (0, 1).`,
      speech: `The y intercept is 1, because 2 to the power zero equals 1. Every exponential graph passes through the point zero, one.`,
      board: [expGraph({ points: [{ x: 0, y: 1, label: '(0, 1)', guide: true, pulse: true }] })],
    },
    {
      narration: `When <b>x = 1, y = 2</b> — the base. So the curve also passes through (1, 2).`,
      speech: `When x equals 1, y equals 2, which is the base. So the curve also passes through the point one, two.`,
      board: [expGraph({ points: [{ x: 1, y: 2, label: '(1, 2)', guide: true, pulse: true }] })],
    },
    {
      narration: `Watch the dot travel <b>left</b>: as <b>x → −∞</b>, y gets tiny — it approaches <b>0</b> but never touches the x-axis. The <b>x-axis is a horizontal asymptote</b>.`,
      speech: `Watch the dot travel left. As x approaches negative infinity, y gets tiny. It approaches zero but never touches the x axis. The x axis is a horizontal asymptote.`,
      board: [expGraph({ asymptotes: [{ type: 'h', y: 0, color: '#ef4444' }], traces: [{ from: 1, to: -3, label: 'x → −∞', approach: 'x', dur: 2800 }] }), { type: 'math', content: `$$\\lim_{x \\to -\\infty} 2^{x} = 0$$`, emphasis: true }],
    },
    {
      narration: `Now watch it travel <b>right</b>: as <b>x → ∞, y → ∞</b>. The curve climbs without bound — there is no limit.`,
      speech: `Now watch it travel right. As x approaches infinity, y approaches infinity. The curve climbs without bound. There is no limit.`,
      board: [expGraph({ traces: [{ from: 0, to: 3.15, label: 'x → ∞', dur: 2600 }] }), { type: 'math', content: `$$\\text{As } x \\to \\infty,\\; y \\to \\infty$$`, emphasis: true }],
    },
    {
      narration: `So <b>y = 2ˣ</b> has <b>domain (−∞, ∞)</b> (the curve spans every x) and <b>range (0, ∞)</b> (it lives entirely in the <b>y &gt; 0</b> band) — y is always positive.`,
      speech: `So y equals 2 to the power x has domain all real numbers, from negative infinity to infinity, because the curve spans every x value. And the range is zero to infinity, because the curve lives entirely above the x axis. y is always positive.`,
      board: [
        expGraph({
          bands: [{ axis: 'y', from: 0, to: 9, color: '#10b981' }],
          axisBars: [
            { axis: 'x', from: -3, to: 3.2, color: '#6366f1', label: 'domain: all real x', arrows: 'both' },
            { axis: 'y', from: 0.02, to: 8.6, color: '#10b981', label: 'range: y > 0', arrows: 'end' },
          ],
        }),
        { type: 'math', content: `$$\\text{Domain: } (-\\infty, \\infty) \\qquad \\text{Range: } (0, \\infty)$$`, emphasis: true },
      ],
    },
    {
      narration: `Now the <b>reciprocal function y = 1/x</b>, also written <b>xy = 1</b>. Its graph is a <b>rectangular hyperbola</b> with two separate <b>branches</b>.`,
      speech: `Now the reciprocal function y equals 1 over x, also written x y equals 1. Its graph is a rectangular hyperbola with two separate branches.`,
      board: [{ type: 'math', content: `$$y = \\dfrac{1}{x} \\quad\\Longleftrightarrow\\quad xy = 1$$` }, recipGraph()],
    },
    {
      narration: `Two easy points: <b>(1, 1)</b> and <b>(−1, −1)</b> — one on each branch.`,
      speech: `Two easy points to plot are one, one and negative one, negative one. One on each branch.`,
      board: [recipGraph({ points: [{ x: 1, y: 1, label: '(1, 1)', pulse: true }, { x: -1, y: -1, label: '(-1, -1)', pulse: true }] })],
    },
    {
      narration: `Watch both dots travel <b>outward</b>: as <b>x → ∞</b> and as <b>x → −∞</b>, y approaches <b>0</b>. The <b>x-axis is a horizontal asymptote</b> on both sides.`,
      speech: `Watch both dots travel outward. As x approaches infinity, and as x approaches negative infinity, y approaches zero. The x axis is a horizontal asymptote on both sides.`,
      board: [recipGraph({ asymptotes: [{ type: 'h', y: 0, color: '#ef4444' }], traces: [{ from: 0.6, to: 4, label: 'x → ∞', approach: 'x', dur: 2800 }, { from: -0.6, to: -4, label: 'x → −∞', approach: 'x', dur: 2800 }] }), { type: 'math', content: `$$\\lim_{x \\to \\infty} \\frac{1}{x} = 0 \\qquad \\lim_{x \\to -\\infty} \\frac{1}{x} = 0$$`, emphasis: true }],
    },
    {
      narration: `Now watch them approach the <b>y-axis</b>: as <b>x → 0⁺, y → ∞</b> (shoots up); as <b>x → 0⁻, y → −∞</b> (shoots down). The <b>y-axis is a second asymptote</b>.`,
      speech: `Now watch them approach the y axis. As x approaches zero from the right, y shoots up to infinity. As x approaches zero from the left, y shoots down to negative infinity. The y axis is a second asymptote.`,
      board: [recipGraph({ asymptotes: [{ type: 'v', x: 0, color: '#ef4444' }], traces: [{ from: 2.5, to: 0.26, label: 'x → 0⁺', approach: 'y', dur: 2600 }, { from: -2.5, to: -0.26, label: 'x → 0⁻', approach: 'y', dur: 2600 }] }), { type: 'math', content: `$$\\text{As } x \\to 0^{+},\\, y \\to \\infty \\qquad \\text{As } x \\to 0^{-},\\, y \\to -\\infty$$`, emphasis: true }],
    },
    {
      narration: `So <b>y = 1/x</b> has <b>domain x ≠ 0</b> and <b>range y ≠ 0</b>. Neither is a single interval, so bracket notation can't be used here.`,
      speech: `So y equals 1 over x has domain x not equal to zero, and range y not equal to zero. Neither is a single interval, so bracket interval notation cannot be used here.`,
      board: [{ type: 'math', content: `$$\\text{Domain: } x \\neq 0 \\qquad \\text{Range: } y \\neq 0$$`, emphasis: true }],
    },
  ];

  if (audioBase) steps.forEach((s, i) => { s.audioUrl = `${audioBase}/step-${i}.mp3`; });
  return { emoji: '📈', title: 'Two graphs that have asymptotes', steps, glossary: BASE_GLOSSARY };
};

// ── Lesson: Year 11 · 3G · Powers, cubics, and circles ─────────────────────
export const buildPowersCubicsCirclesLesson = ({ audioBase = null } = {}) => {
  const sqrtFn = (x) => Math.sqrt(x);
  const cube = (x) => x ** 3;
  const quart = (x) => x ** 4;
  const fcubic = (x) => (x + 1) * (x - 2) * (x - 4);
  const sqfac = (x) => -((x - 1) ** 2) * (x - 4);
  const R = 2;
  const semiU = (x) => Math.sqrt(R * R - x * x);
  const semiL = (x) => -Math.sqrt(R * R - x * x);

  const circleGraph = (extra = {}) => ({ type: 'graph', width: 360, height: 360, xMin: -2.7, xMax: 2.7, yMin: -2.7, yMax: 2.7, circles: [{ cx: 0, cy: 0, r: R }], ...extra });

  const steps = [
    {
      narration: `The graph of <b>y = √x</b> is the <b>upper half of a sideways parabola</b> — squaring both sides gives <b>y² = x</b>. The √ symbol means the <b>positive or zero</b> root, so the lower half is excluded.`,
      speech: `The graph of y equals the square root of x is the upper half of a sideways parabola. Squaring both sides gives y squared equals x. The square root symbol means the positive or zero root, so the lower half is excluded.`,
      board: [
        { type: 'valueTable', rows: [['x', '0', '\\frac{1}{4}', '1', '2', '4'], ['y', '0', '\\frac{1}{2}', '1', '\\sqrt{2}', '2']] },
        { type: 'graph', xMin: -1, xMax: 6.5, yMin: -0.6, yMax: 3, curves: [{ fn: sqrtFn }] },
      ],
    },
    {
      narration: `It only exists for <b>x ≥ 0</b>, and y is never negative. Watch the dot sweep right along the curve. <b>Domain: x ≥ 0, Range: y ≥ 0</b>.`,
      speech: `It only exists for x greater than or equal to zero, and y is never negative. Watch the dot sweep right along the curve. The domain is x greater than or equal to zero, and the range is y greater than or equal to zero.`,
      board: [
        { type: 'graph', xMin: -1, xMax: 6.5, yMin: -0.6, yMax: 3, curves: [{ fn: sqrtFn }], traces: [{ from: 0, to: 6, label: 'x ≥ 0', dur: 2800 }] },
        { type: 'math', content: `$$\\text{Domain: } x \\ge 0 \\qquad \\text{Range: } y \\ge 0$$`, emphasis: true },
      ],
    },
    {
      narration: `The cubic <b>f(x) = x³</b> has a <b>zero at x = 0</b>, is <b>positive</b> when x &gt; 0 and <b>negative</b> when x &lt; 0.`,
      speech: `The cubic f of x equals x cubed has a zero at x equals zero. It is positive when x is greater than zero, and negative when x is less than zero.`,
      board: [
        { type: 'valueTable', rows: [['x', '-2', '-1', '0', '1', '2'], ['y', '-8', '-1', '0', '1', '8']] },
        { type: 'graph', xMin: -2.3, xMax: 2.3, yMin: -9, yMax: 9, curves: [{ fn: cube }],
          segments: [
            { from: 0.12, to: 2.15, color: '#10b981', label: 'positive (x > 0)', labelAt: [1.05, 6.6] },
            { from: -2.15, to: -0.12, color: '#ef4444', label: 'negative (x < 0)', labelAt: [-1.15, -6.6] },
          ] },
      ],
    },
    {
      narration: `The curve becomes <b>flat at the origin</b> — a <b>horizontal inflection</b>, where it flexes smoothly from concave-down to concave-up. Odd powers x³, x⁵, x⁷ … all look like this.`,
      speech: `The curve becomes flat at the origin. This is called a horizontal inflection, where the curve flexes smoothly from concave down on the left to concave up on the right. Odd powers, x cubed, x to the fifth, x to the seventh, all look like this.`,
      board: [{ type: 'graph', xMin: -2.3, xMax: 2.3, yMin: -9, yMax: 9, curves: [{ fn: cube }], points: [{ x: 0, y: 0, label: 'horizontal inflection', pulse: true }] }],
    },
    {
      narration: `<b>f(x) = x⁴</b> has a <b>zero at x = 0</b> and is <b>positive everywhere else</b>. The origin is a <b>turning point</b> — the curve turns from decreasing to increasing. Even powers x⁴, x⁶ … look similar.`,
      speech: `f of x equals x to the fourth has a zero at x equals zero, and is positive everywhere else. The origin is a turning point, where the curve turns from decreasing to increasing. Even powers, x to the fourth, x to the sixth, look similar.`,
      board: [
        { type: 'valueTable', rows: [['x', '-2', '-1', '0', '1', '2'], ['y', '16', '1', '0', '1', '16']] },
        { type: 'graph', xMin: -2.1, xMax: 2.1, yMin: -1, yMax: 17, curves: [{ fn: quart }], points: [{ x: 0, y: 0, label: 'turning point', pulse: true }] },
      ],
    },
    {
      narration: `A <b>polynomial</b> is a sum of multiples of x, x², x³, … and a constant. The highest power is its <b>degree</b>. We now sketch <b>cubics</b> (degree 3) that are <b>factored into linear factors</b>.`,
      speech: `A polynomial is a sum of multiples of x, x squared, x cubed, and so on, plus a constant. The highest power is called its degree. We now sketch cubics, degree three, that are factored into linear factors.`,
      board: [{ type: 'math', content: `$$\\color{#7c3aed}{3x^{4}} + 4x^{2} - 2x \\qquad \\color{#7c3aed}{x^{3}} - x^{2} = x^{2}(x-1)$$` }],
    },
    {
      narration: `Consider <b>y = (x + 1)(x − 2)(x − 4)</b>. The factors give <b>zeros at x = −1, 2, 4</b> — the only places the curve can change sign.`,
      speech: `Consider y equals, x plus one, times x minus two, times x minus four. The factors give zeros at x equals negative one, two, and four. These are the only places the curve can change sign.`,
      board: [
        { type: 'math', content: `$$y = (x+1)(x-2)(x-4)$$`, emphasis: true },
        { type: 'graph', xMin: -2.2, xMax: 5.2, yMin: -26, yMax: 22, curves: [{ fn: fcubic }], points: [{ x: -1, y: 0, label: '−1', pulse: true }, { x: 2, y: 0, label: '2', pulse: true }, { x: 4, y: 0, label: '4', pulse: true }] },
      ],
    },
    {
      narration: `A <b>table of values dodging the zeros</b> shows the sign on each interval: <b>− , + , − , +</b>.`,
      speech: `A table of values, dodging the zeros, shows the sign on each interval. Negative, then positive, then negative, then positive.`,
      board: [
        { type: 'valueTable', rows: [['x', '-2', '-1', '0', '2', '3', '4', '5'], ['y', '-24', '0', '8', '0', '-4', '0', '18'], ['sign', '-', '0', '+', '0', '-', '0', '+']] },
        { type: 'graph', xMin: -2.2, xMax: 5.2, yMin: -26, yMax: 22, curves: [{ fn: fcubic }],
          segments: [
            { from: -1.9, to: -1, color: '#ef4444', delay: 1.0, label: '−' },
            { from: -1, to: 2, color: '#10b981', delay: 1.25, label: '+' },
            { from: 2, to: 4, color: '#ef4444', delay: 1.5, label: '−' },
            { from: 4, to: 4.9, color: '#10b981', delay: 1.75, label: '+' },
          ] },
      ],
    },
    {
      narration: `The two bumps are <b>turning points</b> — but finding them needs <b>calculus (Year 12)</b>, and they are <b>not</b> midway between the zeros. For now, mark only the <b>zeros</b> and the <b>y-intercept (0, 8)</b>.`,
      speech: `The two bumps are turning points. But finding them exactly needs calculus, in Year 12, and they are not midway between the zeros. For now, mark only the zeros and the y intercept at zero, eight.`,
      board: [{ type: 'graph', xMin: -2.2, xMax: 5.2, yMin: -26, yMax: 22, curves: [{ fn: fcubic }], points: [{ x: 0, y: 8, label: '(0, 8)', guide: true, pulse: true }] }],
    },
    {
      narration: `Now <b>y = −(x − 1)²(x − 4)</b>. The <b>squared factor</b> gives a <b>double zero at x = 1</b> and a single zero at x = 4.`,
      speech: `Now y equals negative, x minus one, squared, times x minus four. The squared factor gives a double zero at x equals one, and a single zero at x equals four.`,
      board: [
        { type: 'math', content: `$$y = -(x-1)^{2}(x-4)$$`, emphasis: true },
        { type: 'graph', xMin: -0.6, xMax: 5, yMin: -18, yMax: 6, curves: [{ fn: sqfac }], points: [{ x: 1, y: 0, label: '1', pulse: true }, { x: 4, y: 0, label: '4', pulse: true }] },
      ],
    },
    {
      narration: `At the <b>double zero (1, 0)</b> the curve <b>touches but does not cross</b> the x-axis — the <b>x-axis is a tangent</b> there.`,
      speech: `At the double zero, one, zero, the curve touches but does not cross the x axis. The x axis is a tangent to the curve there.`,
      board: [{ type: 'graph', xMin: -0.6, xMax: 5, yMin: -18, yMax: 6, curves: [{ fn: sqfac }], asymptotes: [{ type: 'h', y: 0, color: '#10b981' }], points: [{ x: 1, y: 0, label: 'tangent', pulse: true }] }],
    },
    {
      narration: `A <b>circle</b>, centre O(0, 0), radius r: a point P(x, y) is on it when <b>OP = r</b>. By the distance formula (Pythagoras), <b>x² + y² = r²</b>.`,
      speech: `A circle with centre O and radius r. A point P, x y, lies on it when the distance O P equals r. By the distance formula, which is Pythagoras' theorem, x squared plus y squared equals r squared.`,
      board: [
        circleGraph({ points: [{ x: Math.SQRT2, y: Math.SQRT2, label: 'P(x, y)', guide: true }] }),
        { type: 'math', content: `$$x^{2} + y^{2} = r^{2}$$`, emphasis: true },
      ],
    },
    {
      narration: `The circle <b>fails the vertical line test</b>, so it is <b>not a function</b>. Solving for y gives <b>two</b> values: $y = \\pm\\sqrt{r^{2} - x^{2}}$.`,
      speech: `The circle fails the vertical line test, so it is not a function. Solving for y gives two values. y equals plus or minus the square root of r squared minus x squared.`,
      board: [circleGraph(), { type: 'math', content: `$$y = \\pm\\sqrt{r^{2} - x^{2}}$$`, emphasis: true }],
    },
    {
      narration: `The <b>+</b> root is the <b>upper semicircle</b>; the <b>−</b> root the <b>lower</b> — both are <b>functions</b>. Domain <b>−r ≤ x ≤ r</b>; ranges <b>0 ≤ y ≤ r</b> and <b>−r ≤ y ≤ 0</b>.`,
      speech: `The positive root is the upper semicircle. The negative root is the lower semicircle. Both are functions. Their domain is negative r to r. The ranges are zero to r, and negative r to zero.`,
      board: [
        { type: 'graph', width: 360, height: 250, xMin: -2.7, xMax: 2.7, yMin: -0.6, yMax: 2.7, circles: [{ cx: 0, cy: 0, r: R, from: 0, to: 180 }] },
        { type: 'math', content: `$$y = \\sqrt{r^{2} - x^{2}} \\qquad \\text{Domain: } -r \\le x \\le r$$`, emphasis: true },
      ],
    },
    {
      narration: `Solving for <b>x</b> instead gives $x = \\pm\\sqrt{r^{2} - y^{2}}$ — the <b>left and right semicircles</b>. These are <b>relations, not functions</b> (they fail the vertical line test).`,
      speech: `Solving for x instead gives x equals plus or minus the square root of r squared minus y squared. These are the left and right semicircles. They are relations, not functions, because they fail the vertical line test.`,
      board: [
        { type: 'graph', width: 300, height: 340, xMin: -2.7, xMax: 2.7, yMin: -2.7, yMax: 2.7, circles: [{ cx: 0, cy: 0, r: R, from: -90, to: 90, color: '#10b981' }, { cx: 0, cy: 0, r: R, from: 90, to: 270, color: '#ef4444' }] },
        { type: 'math', content: `$$x = \\color{#10b981}{+}\\sqrt{r^{2} - y^{2}} \\qquad x = \\color{#ef4444}{-}\\sqrt{r^{2} - y^{2}}$$`, emphasis: true },
      ],
    },
    {
      narration: `<b>Recap:</b> √x is half a sideways parabola; <b>odd powers</b> have a horizontal inflection at O, <b>even powers</b> a turning point; factored cubics <b>change sign at their zeros</b> (a double zero is a tangent); and <b>x² + y² = r²</b> is a circle made of semicircle functions.`,
      speech: `Recap. Square root of x is half a sideways parabola. Odd powers have a horizontal inflection at the origin, even powers have a turning point. Factored cubics change sign at their zeros, and a double zero gives a tangent. And x squared plus y squared equals r squared is a circle, made of semicircle functions.`,
      board: [{ type: 'mathRow', formulas: [
        { content: `$$y=\\sqrt{x}$$`,               highlightColor: 'rgba(245,158,11,0.12)',  borderColor: '#fcd34d', delay: 0.1 },
        { content: `$$y=x^{3}$$`,                   highlightColor: 'rgba(59,130,246,0.12)',  borderColor: '#93c5fd', delay: 0.35 },
        { content: `$$y=x^{4}$$`,                   highlightColor: 'rgba(249,115,22,0.12)', borderColor: '#fdba74', delay: 0.6 },
        { content: `$$y=(x+1)(x-2)(x-4)$$`,         highlightColor: 'rgba(16,185,129,0.12)', borderColor: '#6ee7b7', delay: 0.85 },
        { content: `$$x^{2}+y^{2}=r^{2}$$`,         highlightColor: 'rgba(124,58,237,0.12)', borderColor: '#c4b5fd', delay: 1.1 },
      ]}],
    },
  ];

  if (audioBase) steps.forEach((s, i) => { s.audioUrl = `${audioBase}/step-${i}.mp3`; });
  return { emoji: '📐', title: 'Powers, cubics, and circles', steps, glossary: BASE_GLOSSARY };
};

// ── Lesson: Year 11 · 11A · Radian measure of angle size ───────────────────
export const buildRadianLesson = ({ audioBase = null } = {}) => {
  const D2R = Math.PI / 180;
  const R = 2;                         // circle radius in data units
  const onCirc = (deg) => [R * Math.cos(deg * D2R), R * Math.sin(deg * D2R)];
  const sgn = (v) => (v >= 0 ? 1 : -1);
  // Perpendicular offset label position for a radius from O to p (sits beside
  // the line, not on it). `side` flips which side of the line.
  const radLabel = (p, side = 1, off = 0.3) => {
    const len = Math.hypot(p[0], p[1]) || 1;
    return [p[0] / 2 + (-p[1] / len) * off * side, p[1] / 2 + (p[0] / len) * off * side];
  };

  // Clean angle diagram: centred circle, two radii (O→A at 0°, O→B at `deg`),
  // highlighted arc, with all labels placed by geometry (texts, not points).
  const angleDiagram = (deg, { arcLabel, oneRadian } = {}) => {
    const Bp = onCirc(deg);
    const arcMid = onCirc(deg / 2);
    return {
      type: 'graph', showAxes: false, width: 340, height: 340,
      xMin: -2.6, xMax: 2.6, yMin: -2.6, yMax: 2.6,
      circles: [
        { cx: 0, cy: 0, r: R, color: '#cbd5e1' },
        { cx: 0, cy: 0, r: R, from: 0, to: deg, color: '#f59e0b' },
      ],
      lines: [
        { from: [0, 0], to: [R, 0], color: '#7c3aed', delay: 0.4 },
        { from: [0, 0], to: Bp, color: '#7c3aed', delay: 0.6 },
      ],
      points: [{ x: 0, y: 0 }, { x: R, y: 0 }, { x: Bp[0], y: Bp[1] }],
      texts: [
        { x: -0.22, y: 0.26, text: 'O', color: '#1e1b4b', size: 13 },
        { x: R + 0.24, y: 0.05, text: 'A', color: '#1e1b4b', size: 13 },
        { x: Bp[0] + 0.26 * sgn(Bp[0] || 1), y: Bp[1] + 0.26 * sgn(Bp[1] || 1), text: 'B', color: '#1e1b4b', size: 13 },
        { x: radLabel([R, 0], -1)[0], y: radLabel([R, 0], -1)[1], text: 'r', color: '#7c3aed', size: 13 },
        { x: radLabel(Bp, 1)[0], y: radLabel(Bp, 1)[1], text: 'r', color: '#7c3aed', size: 13 },
        ...(arcLabel ? [{ x: arcMid[0] * 1.3, y: arcMid[1] * 1.3, text: arcLabel, color: '#b45309', size: 12, delay: 1.0 }] : []),
        ...(oneRadian ? [{ x: arcMid[0] * 1.34, y: arcMid[1] * 1.34, text: '1 radian', color: '#b45309', size: 12, delay: 1.0 }] : []),
      ],
    };
  };

  // A full-turn diagram (don't use two near-overlapping radii for 360°).
  const revolutionDiagram = () => ({
    type: 'graph', showAxes: false, width: 340, height: 340,
    xMin: -2.6, xMax: 2.6, yMin: -2.6, yMax: 2.6,
    circles: [{ cx: 0, cy: 0, r: R, color: '#f59e0b' }],
    lines: [{ from: [0, 0], to: [R, 0], color: '#7c3aed', delay: 0.4 }],
    points: [{ x: 0, y: 0 }, { x: R, y: 0 }],
    texts: [
      { x: -0.22, y: 0.26, text: 'O', color: '#1e1b4b', size: 13 },
      { x: R + 0.24, y: 0.05, text: 'A', color: '#1e1b4b', size: 13 },
      { x: radLabel([R, 0], -1)[0], y: radLabel([R, 0], -1)[1], text: 'r', color: '#7c3aed', size: 13 },
      { x: 0, y: R + 0.32, text: 'one full turn', color: '#b45309', size: 12, delay: 1.0 },
    ],
  });
  // Special right triangle helper — uses dedicated SpecialTriangle renderer.
  // verts: [A, B, C] where B is the right-angle vertex (bottom-right).
  // sideLabels: [bottom, right, hypotenuse]
  // angleLabels: [A-angle, B-angle=90°, C-angle]
  const triangle = (verts, sideLabels, angleLabels) => ({
    type: 'triangle',
    verts,
    sideLabels,
    angleLabels,
    width: 300,
    height: 260,
  });

  const steps = [
    {
      narration: `Degrees come from astronomy — there are about 360 days in a year, so 1° is how far the Sun moves each day. Maths deserves its <b>own</b> angle system, built from mathematics alone: the <b>radian</b>.`,
      speech: `Degrees come from astronomy. There are about 360 days in a year, so one degree is how far the Sun appears to move each day. But mathematics deserves its own angle system, built from mathematics alone. That system is the radian.`,
      board: [{ type: 'math', content: `$$360° \\;\\text{from astronomy} \\;\\longrightarrow\\; \\text{radians from maths}$$` }],
    },
    {
      narration: `Draw a circle of radius <b>r</b> centred at the vertex <b>O</b>, meeting the arms at <b>A</b> and <b>B</b>. The angle in <b>radians</b> is the ratio of the <b>arc AB</b> to the <b>radius</b>.`,
      speech: `Draw a circle of radius r, centred at the vertex O, meeting the two arms at A and B. The size of the angle in radians is the ratio of the arc length A B to the radius.`,
      board: [
        angleDiagram(52, { arcLabel: 'arc AB' }),
        { type: 'math', content: `$$\\angle AOB = \\dfrac{\\text{arc } AB}{\\text{radius } OA}$$`, emphasis: true },
      ],
    },
    {
      narration: `Because all circles are <b>similar</b>, this ratio gives the <b>same angle whatever the radius</b>. And since it's a ratio of two lengths, a radian is a <b>pure number</b> — no unit needed.`,
      speech: `Because all circles are similar, this ratio gives the same angle whatever the radius. And since it is a ratio of two lengths, a radian is a pure number, with no dimension. So no unit is needed.`,
      board: [{ type: 'math', content: `$$\\text{angle} = \\dfrac{\\text{length}}{\\text{length}} = \\text{pure number}$$`, emphasis: true }],
    },
    {
      narration: `One full <b>revolution</b> sweeps the whole circumference, so its radian size is <b>circumference ÷ radius</b> = $\\dfrac{2\\pi r}{r} = 2\\pi$.`,
      speech: `One full revolution sweeps the whole circumference. So its size in radians is the circumference divided by the radius, which is 2 pi r over r, equals 2 pi.`,
      board: [
        revolutionDiagram(),
        { type: 'math', content: `$$1\\ \\text{revolution} = \\dfrac{2\\pi r}{r} = 2\\pi$$`, emphasis: true },
      ],
    },
    {
      narration: `A <b>straight angle</b> is a semicircle: $\\dfrac{\\pi r}{r} = \\pi$. A <b>right angle</b> is a quarter-circle: $\\dfrac{\\frac12 \\pi r}{r} = \\dfrac{\\pi}{2}$.`,
      speech: `A straight angle is a semicircle, so it is pi r over r, equals pi. A right angle is a quarter circle, so it is one half pi r, over r, equals pi over 2.`,
      board: [
        angleDiagram(180, {}),
        { type: 'math', content: `$$1\\ \\text{straight angle} = \\pi \\qquad 1\\ \\text{right angle} = \\dfrac{\\pi}{2}$$`, emphasis: true },
      ],
    },
    {
      narration: `Memorise these three: <b>$360° = 2\\pi$</b>, <b>$180° = \\pi$</b>, <b>$90° = \\dfrac{\\pi}{2}$</b>.`,
      speech: `Memorise these three securely. 360 degrees equals 2 pi. 180 degrees equals pi. And 90 degrees equals pi over 2.`,
      board: [{ type: 'math', content: `$$360° = 2\\pi \\qquad 180° = \\pi \\qquad 90° = \\dfrac{\\pi}{2}$$`, emphasis: true }],
    },
    {
      narration: `Since $180° = \\pi$: to go <b>radians → degrees</b>, multiply by $\\dfrac{180°}{\\pi}$; to go <b>degrees → radians</b>, multiply by $\\dfrac{\\pi}{180}$.`,
      speech: `Since 180 degrees equals pi, to convert from radians to degrees, multiply by 180 over pi. And to convert from degrees to radians, multiply by pi over 180.`,
      board: [{ type: 'math', content: `$$\\text{rad}\\to\\text{deg}:\\ \\times\\dfrac{180°}{\\pi} \\qquad \\text{deg}\\to\\text{rad}:\\ \\times\\dfrac{\\pi}{180}$$`, emphasis: true }],
    },
    {
      narration: `<b>One radian</b> is the angle whose <b>arc equals the radius</b>. That works out to $\\dfrac{180°}{\\pi} \\approx 57°$ — the sector is almost an equilateral triangle.`,
      speech: `One radian is the angle whose arc length equals the radius. That works out to 180 over pi, which is about 57 degrees. Notice the sector is almost an equilateral triangle, which is why one radian is about 60 degrees.`,
      board: [
        angleDiagram(57.3, { oneRadian: true }),
        { type: 'math', content: `$$1\\ \\text{radian} = \\dfrac{180°}{\\pi} \\approx 57°18'$$`, emphasis: true },
      ],
    },
    {
      narration: `<b>Example — degrees to radians.</b> Multiply by $\\dfrac{\\pi}{180}$ and simplify: $60° = \\dfrac{\\pi}{3}$, $270° = \\dfrac{3\\pi}{2}$, $495° = \\dfrac{11\\pi}{4}$.`,
      speech: `Example. To convert degrees to radians, multiply by pi over 180 and simplify. 60 degrees is pi over 3. 270 degrees is 3 pi over 2. And 495 degrees is 11 pi over 4.`,
      board: [{ type: 'math', content: `$$60° = 60\\times\\dfrac{\\pi}{180} = \\dfrac{\\pi}{3} \\qquad 270° = \\dfrac{3\\pi}{2} \\qquad 495° = \\dfrac{11\\pi}{4}$$`, emphasis: true }],
    },
    {
      narration: `<b>Example — radians to degrees.</b> Multiply by $\\dfrac{180°}{\\pi}$: $\\dfrac{\\pi}{6} = 30°$ and $\\dfrac{3\\pi}{4} = 135°$.`,
      speech: `Example. To convert radians to degrees, multiply by 180 over pi. Pi over 6 is 30 degrees. And 3 pi over 4 is 135 degrees.`,
      board: [{ type: 'math', content: `$$\\dfrac{\\pi}{6} = \\dfrac{\\pi}{6}\\times\\dfrac{180°}{\\pi} = 30° \\qquad \\dfrac{3\\pi}{4} = 135°$$`, emphasis: true }],
    },
    {
      narration: `The <b>special angles</b> in radians: $\\dfrac{\\pi}{6} = 30°$, $\\dfrac{\\pi}{4} = 45°$, $\\dfrac{\\pi}{3} = 60°$. Learn these by heart.`,
      speech: `The special angles, in radians, are. Pi over 6 equals 30 degrees. Pi over 4 equals 45 degrees. And pi over 3 equals 60 degrees. Learn these by heart.`,
      board: [{ type: 'math', content: `$$\\dfrac{\\pi}{6} = 30° \\qquad \\dfrac{\\pi}{4} = 45° \\qquad \\dfrac{\\pi}{3} = 60°$$`, emphasis: true }],
    },
    {
      narration: `These come from the two <b>special triangles</b>: the <b>30–60–90</b> with sides 1, √3, 2, and the <b>45–45–90</b> with sides 1, 1, √2.`,
      speech: `These come from the two special triangles. The 30, 60, 90 triangle, with sides 1, root 3, and 2. And the 45, 45, 90 triangle, with sides 1, 1, and root 2.`,
      board: [
        triangle(
          [[0, 0], [1, 0], [1, Math.sqrt(3)]],
          ['1', '√3', '2'],
          ['60°', '90°', '30°'],
        ),
        triangle(
          [[0, 0], [1, 0], [1, 1]],
          ['1', '1', '√2'],
          ['45°', '90°', '45°'],
        ),
      ],
    },
    {
      narration: `Now evaluate trig functions. The function is the <b>same</b> whether the angle is in degrees or radians: $\\sin\\dfrac{\\pi}{6} = \\sin 30° = \\dfrac{1}{2}$ and $\\operatorname{cosec}\\dfrac{\\pi}{4} = \\sqrt{2}$.`,
      speech: `Now evaluate trig functions. The function is the same whether the angle is in degrees or radians. Sine of pi over 6 equals sine of 30 degrees, which is one half. And cosec of pi over 4 equals root 2.`,
      board: [{ type: 'math', content: `$$\\sin\\dfrac{\\pi}{6} = \\sin 30° = \\dfrac{1}{2} \\qquad \\operatorname{cosec}\\dfrac{\\pi}{4} = \\dfrac{1}{\\sin 45°} = \\sqrt{2}$$`, emphasis: true }],
    },
    {
      narration: `For bigger angles, use the <b>related angle</b> and the quadrant. $\\dfrac{5\\pi}{4}$ is in the <b>third quadrant</b>, related angle $\\dfrac{\\pi}{4}$, so $\\sin\\dfrac{5\\pi}{4} = -\\sin\\dfrac{\\pi}{4} = -\\dfrac{1}{\\sqrt2}$.`,
      speech: `For bigger angles, use the related angle and the quadrant. 5 pi over 4 is in the third quadrant, with related angle pi over 4. In the third quadrant sine is negative, so sine of 5 pi over 4 equals minus sine pi over 4, which is minus 1 over root 2.`,
      board: [{ type: 'math', content: `$$\\sin\\dfrac{5\\pi}{4} = -\\sin\\dfrac{\\pi}{4} = -\\dfrac{1}{\\sqrt{2}}$$`, emphasis: true }],
    },
    {
      narration: `For <b>other</b> angles there's no exact value — use a calculator, but <b>set it to radians mode first</b>. Wrong mode is the classic mistake here!`,
      speech: `For other angles there is no exact value, so use a calculator. But it is vital to set the calculator to radians mode first. The wrong mode is the classic mistake at this point.`,
      board: [{ type: 'math', content: `$$\\cos 1 \\approx 0.5403 \\qquad \\cot 1.3 = \\dfrac{1}{\\tan 1.3} \\approx 0.2776$$`, emphasis: true }],
    },
    {
      narration: `<b>Recap:</b> a radian is arc ÷ radius (a pure number); $360°=2\\pi$, $180°=\\pi$, $90°=\\tfrac{\\pi}{2}$; convert with $\\times\\tfrac{\\pi}{180}$ or $\\times\\tfrac{180°}{\\pi}$; and special angles are $\\tfrac{\\pi}{6},\\tfrac{\\pi}{4},\\tfrac{\\pi}{3}$.`,
      speech: `Recap. A radian is arc divided by radius, a pure number. 360 degrees is 2 pi, 180 degrees is pi, 90 degrees is pi over 2. Convert by multiplying by pi over 180, or by 180 over pi. And the special angles are pi over 6, pi over 4, and pi over 3.`,
      board: [{ type: 'math', content: `$$360°=2\\pi \\quad 180°=\\pi \\quad 90°=\\dfrac{\\pi}{2} \\quad \\dfrac{\\pi}{6},\\dfrac{\\pi}{4},\\dfrac{\\pi}{3}$$` }],
    },
  ];

  if (audioBase) steps.forEach((s, i) => { s.audioUrl = `${audioBase}/step-${i}.mp3`; });
  const glossary = {
    ...BASE_GLOSSARY,
    'radian': 'The angle at the centre of a circle whose arc length equals the radius (about 57°). 2π radians make a full turn.',
    'revolution': 'One complete turn around a circle — 360° or 2π radians.',
    'straight angle': 'An angle of 180° (a straight line) — equal to π radians.',
    'related angle': 'The acute angle a given angle makes with the x-axis; used to find trig values using a special angle and the quadrant\'s sign.',
    'quadrant': 'One of the four regions the x- and y-axes cut the plane into; it decides whether a trig value is positive or negative.',
    'circumference': 'The distance all the way around a circle, equal to 2πr.',
    'special angles': 'The angles 30°, 45°, 60° (π/6, π/4, π/3) whose exact trig values come from the special triangles.',
  };
  return { emoji: '📐', title: 'Radian measure of angle size', steps, glossary };
};

// ── Lesson: Year 11 · 11B · Solving trigonometric equations ────────────────
export const buildTrigEquationsLesson = ({ audioBase = null } = {}) => {
  const D2R = Math.PI / 180;
  // Unit-circle quadrant diagram: axes + circle + a radius to each solution.
  const quadCircle = (sols) => ({
    type: 'graph', showAxes: true, width: 320, height: 320,
    xMin: -1.5, xMax: 1.5, yMin: -1.5, yMax: 1.5,
    circles: [{ cx: 0, cy: 0, r: 1, color: '#cbd5e1' }],
    lines: sols.map((s, i) => ({ from: [0, 0], to: [Math.cos(s.deg * D2R), Math.sin(s.deg * D2R)], color: s.color || '#7c3aed', delay: 0.4 + i * 0.2 })),
    points: sols.map((s) => ({ x: Math.cos(s.deg * D2R), y: Math.sin(s.deg * D2R) })),
    texts: sols.map((s, i) => ({ x: Math.cos(s.deg * D2R) * 1.3, y: Math.sin(s.deg * D2R) * 1.3, text: s.label, color: s.color || '#7c3aed', size: 12, delay: 1.0 + i * 0.1 })),
  });

  const steps = [
    {
      narration: `Once radians are in our trig functions, we can <b>solve trig equations in radians</b> exactly the same way we do in degrees.`,
      speech: `Once radians are introduced into the trig functions, we can solve trigonometric equations in radians, in exactly the same way as we do in degrees.`,
      board: [{ type: 'math', content: `$$\\sin x = \\tfrac{1}{2},\\quad \\cos x = -\\tfrac{1}{2},\\quad 2\\cos^{2}x - \\cos x - 1 = 0$$` }],
    },
    {
      narration: `<b>The method:</b> ① decide which <b>quadrants</b> the angle can lie in; ② find the <b>related angle</b> — in <b>radian</b> measure; ③ use the diagram and the related angle to find <b>all</b> solutions within the given range.`,
      speech: `Here is the method. First, decide which quadrants the angle can lie in. Then find the related angle, but use radian measure, not degrees. Finally, use the diagram and the related angle to find all the answers, taking account of any restriction on the angle.`,
      board: [{ type: 'math', content: `$$\\text{quadrants} \\;\\to\\; \\text{related angle (radians)} \\;\\to\\; \\text{all solutions}$$`, emphasis: true }],
    },
    {
      narration: `<b>Warning:</b> when using the calculator's inverse trig functions, <b>never enter a negative number</b>. Always enter the <b>absolute value</b> to find the related angle, then use the quadrants for the sign.`,
      speech: `A warning. When using the calculator's inverse trigonometric functions, never work with a negative number. Always enter the absolute value of the number to find the related angle, and then use the quadrants to decide the sign.`,
      board: [{ type: 'math', content: `$$\\text{use } \\sin^{-1}|\\text{value}| \\text{ for the related angle}$$`, emphasis: true }],
    },
    {
      narration: `With an <b>acute angle</b>, no quadrant diagram is needed. $\\sin x = \\tfrac{1}{2}$ gives the special angle $x = \\tfrac{\\pi}{6}$. $\\tan x = 3$ has no exact value, so use the calculator (in radians): $x \\approx 1.2490$.`,
      speech: `With acute angles, a quadrants diagram is not necessary. Sine x equals one half gives the special angle, x equals pi over 6. Tan x equals 3 has no exact value, so use the calculator in radians mode, giving x is about 1.2490.`,
      board: [{ type: 'math', content: `$$\\sin x = \\tfrac{1}{2} \\Rightarrow x = \\dfrac{\\pi}{6} \\qquad \\tan x = 3 \\Rightarrow x \\approx 1.2490$$`, emphasis: true }],
    },
    {
      narration: `Solve $\\cos x = -\\tfrac{1}{2}$ for $0 \\le x \\le 2\\pi$. Cosine is <b>negative</b> in <b>quadrants 2 and 3</b>. The related angle (from $\\cos = +\\tfrac12$) is $\\tfrac{\\pi}{3}$, so $x = \\pi - \\tfrac{\\pi}{3}$ or $\\pi + \\tfrac{\\pi}{3} = \\tfrac{2\\pi}{3},\\ \\tfrac{4\\pi}{3}$.`,
      speech: `Solve cosine x equals minus one half, for x between 0 and 2 pi. Because cosine is negative, x is in quadrant 2 or 3. The related angle, whose cosine is positive one half, is pi over 3. So x equals pi minus pi over 3, or pi plus pi over 3, which gives 2 pi over 3, or 4 pi over 3.`,
      board: [
        quadCircle([{ deg: 120, label: '2π/3' }, { deg: 240, label: '4π/3' }]),
        { type: 'math', content: `$$x = \\dfrac{2\\pi}{3} \\quad\\text{or}\\quad \\dfrac{4\\pi}{3}$$`, emphasis: true },
      ],
    },
    {
      narration: `Solve $\\cos 3x = -\\tfrac{1}{2}$ for $0 \\le x \\le 2\\pi$. <b>Multiply the range by 3</b>: $0 \\le 3x \\le 6\\pi$. Find every $3x$, then divide by 3.`,
      speech: `Solve cosine of 3 x equals minus one half, for x between 0 and 2 pi. To find the range of 3 x, multiply the condition by 3, giving 3 x between 0 and 6 pi. Find every value of 3 x, then divide each by 3.`,
      board: [
        { type: 'math', content: `$$3x = \\dfrac{2\\pi}{3},\\dfrac{4\\pi}{3},\\dfrac{8\\pi}{3},\\dfrac{10\\pi}{3},\\dfrac{14\\pi}{3},\\dfrac{16\\pi}{3}$$` },
        { type: 'math', content: `$$x = \\dfrac{2\\pi}{9},\\dfrac{4\\pi}{9},\\dfrac{8\\pi}{9},\\dfrac{10\\pi}{9},\\dfrac{14\\pi}{9},\\dfrac{16\\pi}{9}$$`, emphasis: true },
      ],
    },
    {
      narration: `Solve $\\sin x = -\\tfrac{1}{3}$ for $0 \\le x \\le 2\\pi$. Sine is <b>negative</b> in <b>quadrants 3 and 4</b>. Enter $+\\tfrac13$ on the calculator → related angle $0.339836\\ldots$ So $x = \\pi + 0.3398$ or $2\\pi - 0.3398 \\approx 3.4814,\\ 5.9433$.`,
      speech: `Solve sine x equals minus one third, for x between 0 and 2 pi. Because sine is negative, x is in quadrant 3 or 4. With the calculator in radians mode, enter positive one third, not negative, to get the related angle, 0.339836. Hence x equals pi plus 0.3398, or 2 pi minus 0.3398, which is about 3.4814, or 5.9433.`,
      board: [
        quadCircle([{ deg: 199.5, label: '≈3.48' }, { deg: 340.5, label: '≈5.94' }]),
        { type: 'math', content: `$$x = \\pi + 0.3398 \\;\\text{or}\\; 2\\pi - 0.3398 \\approx 3.4814,\\ 5.9433$$`, emphasis: true },
      ],
    },
    {
      narration: `Some trig equations are <b>quadratics in a trig function</b>. Solve them directly, or make a <b>substitution</b> like $u = \\cos x$ — just as with exponential equations.`,
      speech: `Some trigonometric equations are quadratic equations in a trig function. You can solve them directly, or make an algebraic substitution, such as u equals cosine x, just as we did with exponential equations.`,
      board: [{ type: 'math', content: `$$\\sin^{2}x = \\tfrac{3}{4} \\qquad 2\\cos^{2}x - \\cos x - 1 = 0$$` }],
    },
    {
      narration: `$\\sin^{2}x = \\tfrac{3}{4}$ gives $\\sin x = \\pm\\tfrac{\\sqrt3}{2}$. The related angle is $\\tfrac{\\pi}{3}$, and the angle can be in <b>any of the four quadrants</b>: $x = \\tfrac{\\pi}{3}, \\tfrac{2\\pi}{3}, \\tfrac{4\\pi}{3}, \\tfrac{5\\pi}{3}$.`,
      speech: `Sine squared x equals three quarters gives sine x equals plus or minus root 3 over 2. The related angle is pi over 3, and because of the plus or minus, the angle can be in any of the four quadrants. So x equals pi over 3, 2 pi over 3, 4 pi over 3, or 5 pi over 3.`,
      board: [
        quadCircle([{ deg: 60, label: 'π/3' }, { deg: 120, label: '2π/3' }, { deg: 240, label: '4π/3' }, { deg: 300, label: '5π/3' }]),
        { type: 'math', content: `$$x = \\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3},\\ \\dfrac{5\\pi}{3}$$`, emphasis: true },
      ],
    },
    {
      narration: `For $2\\cos^{2}x - \\cos x - 1 = 0$, <b>substitute</b> $u = \\cos x$: $2u^{2} - u - 1 = 0$. Factor: $(2u+1)(u-1) = 0$, so $u = -\\tfrac12$ or $u = 1$.`,
      speech: `For 2 cosine squared x, minus cosine x, minus 1, equals 0, substitute u equals cosine x. This reduces it to 2 u squared minus u minus 1 equals 0. Factoring gives, 2 u plus 1, times u minus 1, equals 0. So u equals minus one half, or u equals 1.`,
      board: [{ type: 'math', content: `$$2u^{2} - u - 1 = 0 \\Rightarrow (2u+1)(u-1) = 0 \\Rightarrow u = -\\tfrac{1}{2},\\, 1$$`, emphasis: true }],
    },
    {
      narration: `So $\\cos x = -\\tfrac12$ (quadrants 2, 3) → $x = \\tfrac{2\\pi}{3}, \\tfrac{4\\pi}{3}$; and $\\cos x = 1$ (boundary) → $x = 0, 2\\pi$. All solutions: $x = 0, \\tfrac{2\\pi}{3}, \\tfrac{4\\pi}{3}, 2\\pi$.`,
      speech: `So cosine x equals minus one half, which is quadrants 2 and 3, giving x equals 2 pi over 3, or 4 pi over 3. And cosine x equals 1, which are boundary angles, giving x equals 0 or 2 pi. Putting these together, the solutions are x equals 0, 2 pi over 3, 4 pi over 3, and 2 pi.`,
      board: [
        quadCircle([{ deg: 0, label: '0, 2π', color: '#10b981' }, { deg: 120, label: '2π/3' }, { deg: 240, label: '4π/3' }]),
        { type: 'math', content: `$$x = 0,\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3},\\ 2\\pi$$`, emphasis: true },
      ],
    },
    {
      narration: `<b>Recap:</b> quadrants decide the sign, the <b>related angle</b> (in radians, from the positive value) gives the base, and you read off <b>every</b> solution in range. For quadratics, substitute $u = \\cos x$ (or $\\sin x$), solve, then convert back.`,
      speech: `Recap. The quadrants decide the sign. The related angle, in radians, found from the positive value, gives the base angle. Then read off every solution in the range. For quadratic types, substitute u equals cosine x, or sine x, solve the quadratic, then convert back.`,
      board: [{ type: 'math', content: `$$\\text{quadrants} + \\text{related angle} \\to \\text{all } x \\qquad u = \\cos x \\text{ for quadratics}$$` }],
    },
  ];

  if (audioBase) steps.forEach((s, i) => { s.audioUrl = `${audioBase}/step-${i}.mp3`; });
  const glossary = {
    ...BASE_GLOSSARY,
    'related angle': 'The acute angle the angle makes with the x-axis; found from the positive value, then the quadrant decides the sign.',
    'quadrant': 'One of the four regions the axes cut the plane into; it decides whether sin, cos, tan are positive or negative.',
    'quadrants': 'The four regions the axes cut the plane into; they decide whether sin, cos, tan are positive or negative.',
    'acute angle': 'An angle between 0 and 90° (0 and π/2 radians).',
    'inverse trig': 'The calculator keys sin⁻¹, cos⁻¹, tan⁻¹ that give the angle from a ratio — only feed them positive values here.',
    'substitution': 'Replacing a repeated expression (like cos x) with a single letter u to turn the equation into an ordinary quadratic.',
  };
  return { emoji: '🧭', title: 'Solving trigonometric equations', steps, glossary };
};

// ── Lesson: Year 7 · 20A · Polyhedra ────────────────────────────────────────
export const buildPolyhedraLesson = ({ audioBase = null } = {}) => {
  const V = '#7c3aed';   // visible edge colour (purple)
  const H = '#c4b5fd';   // hidden edge colour (dashed, light purple)
  const HL = '#10b981';  // highlight green (face / cross-section)
  const HR = '#ef4444';  // highlight red (edge)

  // ── Square pyramid (used for face / edge / vertex steps) ──
  // A=(0.5,0.3) B=(4.1,0.3) C=(4.8,1.2) D=(1.2,1.2) E=(2.65,4.0)
  const pyrBase = [
    { from:[0.5,0.3], to:[4.1,0.3], color:V, width:2.2, delay:0.3  }, // AB
    { from:[4.1,0.3], to:[4.8,1.2], color:V, width:2.2, delay:0.35 }, // BC
    { from:[0.5,0.3], to:[2.65,4.0], color:V, width:2.2, delay:0.4  }, // AE
    { from:[4.1,0.3], to:[2.65,4.0], color:V, width:2.2, delay:0.45 }, // BE
    { from:[4.8,1.2], to:[2.65,4.0], color:V, width:2.2, delay:0.5  }, // CE
    { from:[4.8,1.2], to:[1.2,1.2], color:H, width:1.5, dashed:true, delay:0.55 }, // CD hidden
    { from:[1.2,1.2], to:[0.5,0.3], color:H, width:1.5, dashed:true, delay:0.6  }, // DA hidden
    { from:[1.2,1.2], to:[2.65,4.0], color:H, width:1.5, dashed:true, delay:0.65 }, // DE hidden
  ];
  const pyrGraph = ({ lines: extra=[], points=[], texts=[] } = {}) => ({
    type:'graph', showAxes:false,
    xMin:-0.3, xMax:5.5, yMin:-0.3, yMax:4.9, width:360, height:350,
    lines:[...pyrBase, ...extra], points, texts,
  });

  // ── Rectangular prism / box (used for prism intro & recap) ──
  // Front face: (0,0)-(4,0)-(4,3)-(0,3). Back offset (+1.3,+1.0).
  const boxLines = [
    { from:[0,0], to:[4,0], color:V, width:2.2, delay:0.3  },
    { from:[4,0], to:[4,3], color:V, width:2.2, delay:0.35 },
    { from:[4,3], to:[0,3], color:V, width:2.2, delay:0.4  },
    { from:[0,3], to:[0,0], color:V, width:2.2, delay:0.45 },
    { from:[4,3], to:[5.3,4.0], color:V, width:2.2, delay:0.5  },
    { from:[4,0], to:[5.3,1.0], color:V, width:2.2, delay:0.55 },
    { from:[5.3,1.0], to:[5.3,4.0], color:V, width:2.2, delay:0.6 },
    { from:[0,3], to:[1.3,4.0], color:V, width:2.2, delay:0.65 },
    { from:[1.3,4.0], to:[5.3,4.0], color:V, width:2.2, delay:0.7 },
    { from:[0,0], to:[1.3,1.0], color:H, width:1.5, dashed:true, delay:0.75 },
    { from:[1.3,1.0], to:[5.3,1.0], color:H, width:1.5, dashed:true, delay:0.8 },
    { from:[1.3,1.0], to:[1.3,4.0], color:H, width:1.5, dashed:true, delay:0.85 },
  ];
  const boxGraph = ({ texts=[] } = {}) => ({
    type:'graph', showAxes:false,
    xMin:-0.3, xMax:6.2, yMin:-0.3, yMax:4.9, width:400, height:310,
    lines:boxLines, texts,
  });

  // ── Triangular prism (cross-section step) ──
  // Front △: F1(0.5,0.3) F2(4.2,0.3) F3(2.35,3.2)
  // Back  △: B1(1.4,1.1) B2(5.1,1.1) B3(3.25,4.0)
  // Cross-section at 45% depth from front → back
  // C1=(0.905,0.66)  C2=(4.605,0.66)  C3=(2.755,3.56)
  const prismGraph = ({ highlightFront=false } = {}) => {
    const t = 0.45; // interpolation depth for cross-section plane
    const C1 = [0.5 + t*(1.4-0.5),  0.3 + t*(1.1-0.3)];  // ≈ (0.91, 0.66)
    const C2 = [4.2 + t*(5.1-4.2),  0.3 + t*(1.1-0.3)];  // ≈ (4.61, 0.66)
    const C3 = [2.35+ t*(3.25-2.35),3.2 + t*(4.0-3.2)];  // ≈ (2.76, 3.56)
    const csLines = highlightFront ? [
      // cross-section triangle (the actual "slice")
      { from:C1, to:C2, color:HL, width:3.0, delay:0.9  },
      { from:C2, to:C3, color:HL, width:3.0, delay:0.95 },
      { from:C3, to:C1, color:HL, width:3.0, delay:1.0  },
      // dashed guide lines from cross-section vertices to prism edges (shows "the cut")
      { from:[0.5,0.3],  to:C1, color:HL, width:1.2, dashed:true, delay:1.05 },
      { from:[4.2,0.3],  to:C2, color:HL, width:1.2, dashed:true, delay:1.05 },
      { from:[2.35,3.2], to:C3, color:HL, width:1.2, dashed:true, delay:1.05 },
    ] : [];
    const csPolygon = highlightFront ? [
      { vertices:[C1, C2, C3], color:'rgba(16,185,129,0.25)', stroke:HL, strokeWidth:0, delay:0.9 },
    ] : [];
    return {
      type:'graph', showAxes:false,
      xMin:-0.3, xMax:6.0, yMin:-0.3, yMax:4.6, width:420, height:310,
      polygons: csPolygon,
      lines:[
        // front face (neutral purple — it is a face, not the cross-section)
        { from:[0.5,0.3], to:[4.2,0.3], color:V, width:2.2, delay:0.3  },
        { from:[4.2,0.3], to:[2.35,3.2], color:V, width:2.2, delay:0.35 },
        { from:[2.35,3.2], to:[0.5,0.3], color:V, width:2.2, delay:0.4  },
        // lateral edges
        { from:[4.2,0.3], to:[5.1,1.1], color:V, width:2.2, delay:0.45 },
        { from:[2.35,3.2], to:[3.25,4.0], color:V, width:2.2, delay:0.5 },
        { from:[0.5,0.3], to:[1.4,1.1], color:H, width:1.5, dashed:true, delay:0.55 },
        // back face
        { from:[5.1,1.1], to:[3.25,4.0], color:V, width:2.2, delay:0.6 },
        { from:[5.1,1.1], to:[1.4,1.1], color:V, width:2.2, delay:0.65 },
        { from:[3.25,4.0], to:[1.4,1.1], color:V, width:2.2, delay:0.7 },
        ...csLines,
      ],
      texts: highlightFront ? [
        { x: C1[0]+0.3, y: C1[1]+0.8, text:'cross-section ▲', color:HL, size:12, delay:1.2 },
      ] : [],
    };
  };

  const POLYHEDRA_GLOSSARY = {
    'polyhedron': 'A solid whose entire surface is made of flat polygonal faces, with no curved parts and no holes.',
    'polyhedra': 'The plural of polyhedron.',
    'face': 'A flat polygonal panel forming part of the surface of a polyhedron.',
    'edge': 'A straight line segment where two faces of a polyhedron meet.',
    'vertex': 'A corner point of a polyhedron — where three or more edges meet.',
    'vertices': 'The plural of vertex.',
    'regular polyhedron': 'A polyhedron whose faces are all identical regular polygons, with the same number meeting at every vertex.',
    'Platonic solid': 'One of the five regular polyhedra: tetrahedron, cube, octahedron, dodecahedron, icosahedron.',
    'prism': 'A polyhedron with two identical parallel faces (bases) joined by rectangular or parallelogram faces.',
    'cross-section': 'The shape you see when a solid is cut by a plane parallel to its base.',
    'uniform cross-section': 'When every cross-section of a prism parallel to the base is identical.',
    'oblique prism': 'A prism where the lateral edges are not perpendicular to the bases — it leans.',
    'Euler\'s formula': 'For any convex polyhedron: Faces + Vertices − Edges = 2.',
  };

  const steps = [
    // ── Step 0 ── Definition ──────────────────────────────────────────────────
    {
      narration: `A <b>polyhedron</b> is a solid whose outside surface is made up entirely of flat panels called <b>faces</b>. Every face must be a simple <b>polygonal shape</b>, and the solid must not be pierced by holes.`,
      speech: `A polyhedron is a solid whose outside surface is made up entirely of flat panels called faces. Every face must be a simple polygonal shape, and the solid must not be pierced by holes.`,
      board: [
        boxGraph({ texts:[ { x:2, y:-0.1, text:'Rectangular prism — a polyhedron', color:'#64748b', size:11, delay:1.0 } ] }),
        { type:'math', content:`$$\\text{Polyhedron} = \\text{solid with flat polygonal faces (no curves, no holes)}$$`, emphasis:true },
      ],
    },
    // ── Step 1 ── Not polyhedra ───────────────────────────────────────────────
    {
      narration: `Solids like a <b>sphere</b>, <b>cylinder</b>, and <b>cone</b> are <b>not</b> polyhedra — their surfaces include curved parts, not flat polygons.`,
      speech: `Solids like a sphere, cylinder, and cone are not polyhedra. Their surfaces include curved parts, not flat polygons.`,
      board: [
        { type:'mathRow', formulas:[
          { content:`$$\\text{⚽ Sphere}$$`,   highlightColor:'rgba(239,68,68,0.1)',  borderColor:'#fca5a5', delay:0.1 },
          { content:`$$\\text{🥫 Cylinder}$$`, highlightColor:'rgba(239,68,68,0.1)',  borderColor:'#fca5a5', delay:0.3 },
          { content:`$$\\text{🍦 Cone}$$`,     highlightColor:'rgba(239,68,68,0.1)',  borderColor:'#fca5a5', delay:0.5 },
        ]},
        { type:'math', content:`$$\\text{curved surface} \\Rightarrow \\textbf{NOT}\\text{ a polyhedron}$$`, emphasis:true },
      ],
    },
    // ── Step 2 ── Face intro: highlight one face ─────────────────────────────
    {
      narration: `Each flat polygon forming part of the surface is called a <b>face</b>. The green region here is one face — a flat triangular panel sitting on the side of the pyramid.`,
      speech: `Each flat polygon forming part of the surface is called a face. The green region here is one face — a flat triangular panel sitting on the side of the pyramid.`,
      board: [
        pyrGraph({
          lines:[
            { from:[0.5,0.3], to:[4.1,0.3], color:HL, width:5, delay:0.9 },
            { from:[4.1,0.3], to:[2.65,4.0], color:HL, width:5, delay:0.95 },
            { from:[0.5,0.3], to:[2.65,4.0], color:HL, width:5, delay:1.0 },
          ],
          texts:[ { x:1.8, y:2.1, text:'face ▲', color:HL, size:14, delay:1.2 } ],
        }),
        { type:'math', content:`$$\\text{face} = \\text{one flat polygonal panel}$$`, emphasis:true },
      ],
    },
    // ── Step 2b ── Count all 5 faces ─────────────────────────────────────────
    {
      narration: `This square pyramid has exactly <b>5 faces</b>. Let's count them — four triangular sides plus one square base.`,
      speech: `This square pyramid has exactly five faces. Let's count them — four triangular sides plus one square base.`,
      board: [
        // Slightly zoomed-in graph (tighter bounds, larger canvas)
        {
          type:'graph', showAxes:false,
          xMin:0.0, xMax:5.2, yMin:-0.2, yMax:4.6, width:420, height:390,
          lines:[
            // Base wireframe
            ...pyrBase,
            // ① Front face ABE — green
            { from:[0.5,0.3], to:[4.1,0.3], color:HL,       width:4.5, delay:0.8  },
            { from:[4.1,0.3], to:[2.65,4.0], color:HL,      width:4.5, delay:0.85 },
            { from:[0.5,0.3], to:[2.65,4.0], color:HL,      width:4.5, delay:0.9  },
            // ② Right face BCE — amber
            { from:[4.1,0.3], to:[4.8,1.2], color:'#f59e0b', width:4.5, delay:1.5  },
            { from:[4.8,1.2], to:[2.65,4.0], color:'#f59e0b',width:4.5, delay:1.55 },
            { from:[4.1,0.3], to:[2.65,4.0], color:'#f59e0b',width:4.5, delay:1.6  },
            // ③ Left face DAE — purple (hidden edges, shown solid for counting)
            { from:[1.2,1.2], to:[0.5,0.3], color:'#8b5cf6', width:3.5, delay:2.2  },
            { from:[0.5,0.3], to:[2.65,4.0], color:'#8b5cf6',width:3.5, delay:2.25 },
            { from:[1.2,1.2], to:[2.65,4.0], color:'#8b5cf6',width:3.5, delay:2.3  },
            // ④ Back face CDE — red (fully hidden, solid for clarity)
            { from:[4.8,1.2], to:[1.2,1.2], color:'#ef4444', width:3.5, delay:2.9  },
            { from:[1.2,1.2], to:[2.65,4.0], color:'#ef4444',width:3.5, delay:2.95 },
            { from:[4.8,1.2], to:[2.65,4.0], color:'#ef4444',width:3.5, delay:3.0  },
            // ⑤ Base ABCD — blue
            { from:[0.5,0.3], to:[4.1,0.3], color:'#3b82f6', width:4.5, delay:3.6  },
            { from:[4.1,0.3], to:[4.8,1.2], color:'#3b82f6', width:4.5, delay:3.65 },
            { from:[4.8,1.2], to:[1.2,1.2], color:'#3b82f6', width:4.5, delay:3.7  },
            { from:[1.2,1.2], to:[0.5,0.3], color:'#3b82f6', width:4.5, delay:3.75 },
          ],
          texts:[
            { x:2.15, y:1.6,  text:'① front △',  color:HL,        size:12, delay:1.05 },
            { x:3.9,  y:1.85, text:'② right △',  color:'#f59e0b', size:12, delay:1.75 },
            { x:1.15, y:1.85, text:'③ left △',   color:'#8b5cf6', size:12, delay:2.45 },
            { x:2.65, y:2.7,  text:'④ back △',   color:'#ef4444', size:12, delay:3.15 },
            { x:2.65, y:0.55, text:'⑤ base □',   color:'#3b82f6', size:12, delay:3.9  },
          ],
        },
        { type:'math', content:`$$\\textbf{F} = 5 \\quad (\\text{1 square base} + \\text{4 triangles})$$`, emphasis:true },
      ],
    },
    // ── Step 3 ── Edge intro ──────────────────────────────────────────────────
    {
      narration: `Two faces meet along a line called an <b>edge</b>. The red line at the bottom is one edge — the straight line where the front face and the base meet.`,
      speech: `Two faces meet along a line called an edge. The red line at the bottom is one edge — the straight line where the front face and the base meet.`,
      board: [
        pyrGraph({
          lines:[
            { from:[0.5,0.3], to:[4.1,0.3], color:HR, width:5, delay:0.9 },
          ],
          texts:[ { x:2.3, y:-0.1, text:'edge', color:HR, size:13, delay:1.2 } ],
        }),
        { type:'math', content:`$$\\text{edge} = \\text{where two faces meet}$$`, emphasis:true },
      ],
    },
    // ── Step 3b ── Count all 8 edges ──────────────────────────────────────────
    {
      narration: `The square pyramid has <b>8 edges</b> total: <b>4 base edges</b> running around the bottom, then <b>4 lateral edges</b> rising up to the apex.`,
      speech: `The square pyramid has eight edges in total. Four base edges run around the bottom, then four lateral edges rise up to the apex.`,
      board: [
        {
          type:'graph', showAxes:false,
          xMin:0.0, xMax:5.2, yMin:-0.3, yMax:4.6, width:420, height:390,
          lines:[
            ...pyrBase,
            // 4 base edges — red, sequential
            { from:[0.5,0.3],  to:[4.1,0.3],  color:HR, width:5, delay:0.8  },
            { from:[4.1,0.3],  to:[4.8,1.2],  color:HR, width:5, delay:1.1  },
            { from:[4.8,1.2],  to:[1.2,1.2],  color:HR, width:5, delay:1.4  },
            { from:[1.2,1.2],  to:[0.5,0.3],  color:HR, width:5, delay:1.7  },
            // 4 lateral edges — amber, sequential
            { from:[0.5,0.3],  to:[2.65,4.0], color:'#f59e0b', width:5, delay:2.4  },
            { from:[4.1,0.3],  to:[2.65,4.0], color:'#f59e0b', width:5, delay:2.7  },
            { from:[4.8,1.2],  to:[2.65,4.0], color:'#f59e0b', width:5, delay:3.0  },
            { from:[1.2,1.2],  to:[2.65,4.0], color:'#f59e0b', width:5, delay:3.3  },
          ],
          texts:[
            { x:2.65, y:-0.15, text:'① base',  color:HR,        size:12, delay:0.9  },
            { x:4.55, y:0.75,  text:'② base',  color:HR,        size:12, delay:1.2  },
            { x:2.8,  y:0.95,  text:'③ base',  color:HR,        size:12, delay:1.5  },
            { x:0.6,  y:0.75,  text:'④ base',  color:HR,        size:12, delay:1.8  },
            { x:1.2,  y:2.35,  text:'⑤ up',    color:'#f59e0b', size:12, delay:2.5  },
            { x:3.65, y:2.2,   text:'⑥ up',    color:'#f59e0b', size:12, delay:2.8  },
            { x:4.05, y:2.9,   text:'⑦ up',    color:'#f59e0b', size:12, delay:3.1  },
            { x:1.85, y:3.1,   text:'⑧ up',    color:'#f59e0b', size:12, delay:3.4  },
          ],
        },
        { type:'math', content:`$$\\textbf{E} = 8 \\quad (\\text{4 base edges} + \\text{4 lateral edges})$$`, emphasis:true },
      ],
    },
    // ── Step 4 ── Vertex intro ────────────────────────────────────────────────
    {
      narration: `The point where three or more edges meet is called a <b>vertex</b>. The tip at the very top of the pyramid — where all four lateral edges converge — is the <b>apex vertex</b>.`,
      speech: `The point where three or more edges meet is called a vertex. The tip at the very top of the pyramid — where all four lateral edges converge — is the apex vertex.`,
      board: [
        pyrGraph({
          points:[
            { x:2.65, y:4.0, label:'vertex (apex)', pulse:true },
          ],
        }),
        { type:'math', content:`$$\\text{vertex} = \\text{point where edges meet}$$`, emphasis:true },
      ],
    },
    // ── Step 4b ── Count all 5 vertices ───────────────────────────────────────
    {
      narration: `The square pyramid has <b>5 vertices</b> in total: <b>4 base corners</b> and <b>1 apex</b> at the top.`,
      speech: `The square pyramid has five vertices in total: four base corners and one apex at the top.`,
      board: [
        {
          type:'graph', showAxes:false,
          xMin:0.0, xMax:5.2, yMin:-0.3, yMax:4.6, width:420, height:390,
          lines:[...pyrBase],
          points:[
            { x:0.5,  y:0.3,  color:'#3b82f6', size:8, delay:0.8  },
            { x:4.1,  y:0.3,  color:'#3b82f6', size:8, delay:1.3  },
            { x:4.8,  y:1.2,  color:'#3b82f6', size:8, delay:1.8  },
            { x:1.2,  y:1.2,  color:'#3b82f6', size:8, delay:2.3  },
            { x:2.65, y:4.0,  color:HR,        size:10, delay:2.9, pulse:true },
          ],
          texts:[
            { x:0.0,  y:0.1,  text:'① corner', color:'#3b82f6', size:11, delay:0.9  },
            { x:4.2,  y:0.1,  text:'② corner', color:'#3b82f6', size:11, delay:1.4  },
            { x:4.9,  y:1.0,  text:'③ corner', color:'#3b82f6', size:11, delay:1.9  },
            { x:0.3,  y:1.35, text:'④ corner', color:'#3b82f6', size:11, delay:2.4  },
            { x:2.65, y:4.35, text:'⑤ apex',   color:HR,        size:12, delay:3.1  },
          ],
        },
        { type:'math', content:`$$\\textbf{V} = 5 \\quad (\\text{4 base corners} + \\text{1 apex})$$`, emphasis:true },
      ],
    },
    // ── Step 5 ── Euler's formula ─────────────────────────────────────────────
    {
      narration: `For any convex polyhedron: <b>Faces + Vertices − Edges = 2</b>. This is <b>Euler's formula</b>. Check it on the pyramid: $5 + 5 - 8 = 2$ ✓`,
      speech: `For any convex polyhedron, faces plus vertices minus edges equals 2. This is Euler's formula. Check it on the pyramid: 5 plus 5 minus 8 equals 2. It works!`,
      board: [
        { type:'math', content:`$$F + V - E = 2$$`, emphasis:true },
        { type:'valueTable', rows:[
          ['shape', 'F', 'V', 'E', 'F+V−E'],
          ['Square pyramid', '5', '5', '8', '2'],
          ['Rectangular prism', '6', '8', '12', '2'],
        ]},
      ],
    },
    // ── Step 5b ── Euler's formula worked example (rectangular prism) ─────────
    {
      narration: `Let's verify Euler's formula on a <b>rectangular box</b>. Count the faces first: front, back, left, right, top, bottom — that's <b>F = 6</b>. Now the vertices — <b>V = 8</b> corners. Then the edges — <b>E = 12</b> lines. So: $6 + 8 - 12 = 2$ ✓`,
      speech: `Let's verify Euler's formula on a rectangular box. Count the faces first: front, back, left, right, top, and bottom — that's F equals 6. Now the vertices — V equals 8 corners. Then the edges — E equals 12 lines. So: 6 plus 8 minus 12 equals 2. Euler's formula checks out!`,
      board: [
        {
          type:'graph', showAxes:false,
          xMin:-0.5, xMax:6.8, yMin:-0.5, yMax:5.4, width:430, height:340,
          lines:[...boxLines],
          // Faces: highlight each face group sequentially
          // Front face ABCD: (0,0)-(4,0)-(4,3)-(0,3)
          // Back face: (1.3,1)-(5.3,1)-(5.3,4)-(1.3,4)
          // Vertices: 8 corners
          points:[
            // Front-bottom
            { x:0,   y:0,   color:'#3b82f6', size:7, delay:2.5 },
            { x:4,   y:0,   color:'#3b82f6', size:7, delay:2.6 },
            { x:4,   y:3,   color:'#3b82f6', size:7, delay:2.7 },
            { x:0,   y:3,   color:'#3b82f6', size:7, delay:2.8 },
            // Back corners
            { x:1.3, y:1.0, color:'#3b82f6', size:7, delay:2.9 },
            { x:5.3, y:1.0, color:'#3b82f6', size:7, delay:3.0 },
            { x:5.3, y:4.0, color:'#3b82f6', size:7, delay:3.1 },
            { x:1.3, y:4.0, color:'#3b82f6', size:7, delay:3.2 },
          ],
          texts:[
            // Face labels (staggered)
            { x:2.0,  y:1.5,  text:'F① front',  color:HL,        size:11, delay:0.6  },
            { x:3.3,  y:2.4,  text:'F② back',   color:HL,        size:11, delay:0.9  },
            { x:-0.4, y:1.5,  text:'F③ left',   color:HL,        size:11, delay:1.2  },
            { x:5.4,  y:2.0,  text:'F④ right',  color:HL,        size:11, delay:1.5  },
            { x:2.3,  y:3.7,  text:'F⑤ top',    color:HL,        size:11, delay:1.8  },
            { x:2.3,  y:-0.3, text:'F⑥ bottom', color:HL,        size:11, delay:2.1  },
            // Vertex count label
            { x:5.6,  y:0.5,  text:'V=8 corners', color:'#3b82f6', size:11, delay:3.4  },
          ],
        },
        { type:'math', content:`$$F + V - E = 6 + 8 - 12 = \\mathbf{2} \\checkmark$$`, emphasis:true },
      ],
    },
    // ── Step 6 ── Platonic solids definition ──────────────────────────────────
    {
      narration: `A <b>regular polyhedron</b> has faces that are all identical regular polygons, with the same number of edges meeting at every vertex. There are exactly <b>five</b> such solids — the <b>Platonic solids</b>.`,
      speech: `A regular polyhedron has faces that are all identical regular polygons, with the same number of edges meeting at every vertex. There are exactly five such solids. They are called the Platonic solids.`,
      board: [
        { type:'mathRow', formulas:[
          { content:`$$\\text{Tetrahedron}$$`,   highlightColor:'rgba(245,158,11,0.12)',  borderColor:'#fcd34d', delay:0.1  },
          { content:`$$\\text{Cube}$$`,           highlightColor:'rgba(59,130,246,0.12)',  borderColor:'#93c5fd', delay:0.35 },
          { content:`$$\\text{Octahedron}$$`,     highlightColor:'rgba(16,185,129,0.12)', borderColor:'#6ee7b7', delay:0.6  },
          { content:`$$\\text{Dodecahedron}$$`,   highlightColor:'rgba(239,68,68,0.12)',  borderColor:'#fca5a5', delay:0.85 },
          { content:`$$\\text{Icosahedron}$$`,    highlightColor:'rgba(124,58,237,0.12)', borderColor:'#c4b5fd', delay:1.1  },
        ]},
        { type:'math', content:`$$\\text{Only 5 Platonic solids exist}$$`, emphasis:true },
      ],
    },
    // ── Step 7 ── Platonic solids properties ─────────────────────────────────
    {
      narration: `Here are the five Platonic solids with their face, edge, and vertex counts. Each satisfies <b>F + V − E = 2</b>.`,
      speech: `Here are the five Platonic solids with their face, edge, and vertex counts. Each one satisfies Euler's formula: F plus V minus E equals 2.`,
      board: [
        { type:'valueTable', rows:[
          ['Solid',          'Face shape',  'F',  'E',  'V' ],
          ['Tetrahedron',    'Triangle',    '4',  '6',  '4' ],
          ['Cube',           'Square',      '6',  '12', '8' ],
          ['Octahedron',     'Triangle',    '8',  '12', '6' ],
          ['Dodecahedron',   'Pentagon',    '12', '30', '20'],
          ['Icosahedron',    'Triangle',    '20', '30', '12'],
        ]},
      ],
    },
    // ── Step 8 ── Prisms ──────────────────────────────────────────────────────
    {
      narration: `A <b>prism</b> is a polyhedron with <b>two identical parallel faces</b> (the bases) joined by parallelogram faces. All rectangular boxes are prisms — so are triangular prisms, hexagonal prisms, and more.`,
      speech: `A prism is a polyhedron with two identical parallel faces, called the bases, joined by parallelogram faces. All rectangular boxes are prisms, as are triangular prisms, hexagonal prisms, and more.`,
      board: [
        {
          type:'graph', showAxes:false,
          xMin:-0.3, xMax:6.2, yMin:-0.3, yMax:4.9, width:400, height:310,
          lines: boxLines,
          // Highlight the two identical parallel base faces with colour fill
          polygons:[
            // Front face (0,0)-(4,0)-(4,3)-(0,3) — green
            { vertices:[[0,0],[4,0],[4,3],[0,3]],   color:'rgba(16,185,129,0.22)', stroke:HL, strokeWidth:2.5, delay:0.9 },
            // Back face (1.3,1)-(5.3,1)-(5.3,4)-(1.3,4) — green
            { vertices:[[1.3,1.0],[5.3,1.0],[5.3,4.0],[1.3,4.0]], color:'rgba(16,185,129,0.18)', stroke:HL, strokeWidth:2.5, delay:1.3 },
          ],
          texts:[
            { x:2.0, y:-0.1, text:'front face (base)', color:HL, size:11, delay:1.1 },
            { x:3.5, y:4.35, text:'back face (base)',  color:HL, size:11, delay:1.5 },
          ],
        },
        { type:'math', content:`$$\\text{Prism: 2 identical parallel bases} + \\text{rectangular faces}$$`, emphasis:true },
      ],
    },
    // ── Step 9 ── Cross-section ───────────────────────────────────────────────
    {
      narration: `A <b>cross-section</b> of a prism is the shape you get by cutting it with a plane parallel to its base. For a triangular prism, every cross-section is an identical triangle — it has a <b>uniform cross-section</b>.`,
      speech: `A cross-section of a prism is the shape you get by cutting it with a plane parallel to its base. For a triangular prism, every cross-section is an identical triangle. We say it has a uniform cross-section.`,
      board: [
        prismGraph({ highlightFront:true }),
        { type:'math', content:`$$\\text{uniform cross-section} = \\text{same shape all the way through}$$`, emphasis:true },
      ],
    },
    // ── Step 10 ── Recap ──────────────────────────────────────────────────────
    {
      narration: `<b>Recap:</b> A <b>polyhedron</b> has flat polygonal <b>faces</b>. Two faces share an <b>edge</b>; edges meet at a <b>vertex</b>. Euler's formula: $F + V - E = 2$. There are exactly <b>5 Platonic solids</b>. A <b>prism</b> has a <b>uniform cross-section</b>.`,
      speech: `Recap. A polyhedron has flat polygonal faces. Two faces share an edge, and edges meet at a vertex. Euler's formula says F plus V minus E equals 2. There are exactly five Platonic solids. And a prism has a uniform cross-section.`,
      board: [
        { type:'mathRow', formulas:[
          { content:`$$\\text{face}$$`,   highlightColor:'rgba(16,185,129,0.12)',  borderColor:'#6ee7b7', delay:0.1  },
          { content:`$$\\text{edge}$$`,   highlightColor:'rgba(239,68,68,0.12)',   borderColor:'#fca5a5', delay:0.3  },
          { content:`$$\\text{vertex}$$`, highlightColor:'rgba(59,130,246,0.12)',  borderColor:'#93c5fd', delay:0.5  },
          { content:`$$F+V-E=2$$`,        highlightColor:'rgba(124,58,237,0.12)', borderColor:'#c4b5fd', delay:0.7  },
          { content:`$$\\text{prism}$$`,  highlightColor:'rgba(245,158,11,0.12)', borderColor:'#fcd34d', delay:0.9  },
        ]},
      ],
    },
  ];

  if (audioBase) steps.forEach((s, i) => { s.audioUrl = `${audioBase}/step-${i}.mp3`; });
  return { emoji:'🔷', title:'Polyhedra', steps, glossary:{ ...BASE_GLOSSARY, ...POLYHEDRA_GLOSSARY } };
};

// ── Lesson: Year 7 · 1A · The number line ───────────────────────────────────
const NL_GLOSSARY = {
  'number line': 'A line where every point represents a number — whole numbers sit at equally spaced marks.',
  'less than': 'A number is less than another if it sits to the left on the number line. Written with the symbol <.',
  'greater than': 'A number is greater than another if it sits to the right on the number line. Written with the symbol >.',
  'whole number': 'The counting numbers 0, 1, 2, 3, … continuing forever to the right.',
};

export const buildNumberLineLesson = ({ audioBase = null } = {}) => {
  const nl = (opts) => ({ type: 'numberLine', min: 0, max: 7, ...opts });
  const nl44 = (opts) => ({ type: 'numberLine', min: 44, max: 52, arrowLeft: true, ...opts });

  // mark object helpers
  const dot  = (n, color, delay, label, pulse) => ({ n, color, delay, label, pulse });
  const PURPLE = '#7c3aed', RED = '#ef4444', GREEN = '#10b981';

  const steps = [
    // ── Step 0: introduce the number line ──────────────────────────────────
    {
      narration: `Whole numbers can be shown as points on a line. Start at <b>0</b>, then mark equally-spaced points moving to the right: 1, 2, 3, 4, … The arrow shows the line continues forever. This is called the <b>number line</b>.`,
      speech: `Whole numbers can be shown as points on a line. Start at zero, then mark equally spaced points moving to the right: one, two, three, four, and so on. The arrow shows the line continues forever. This is called the number line.`,
      board: [
        nl({
          // dots pop in one-by-one from 0 to 7 to show the "building" of the line
          marks: [0,1,2,3,4,5,6,7].map((n) => dot(n, PURPLE, n * 0.14)),
        }),
        { type: 'text', content: '← whole numbers, equally spaced, continuing forever →' },
      ],
    },
    // ── Step 1: less than (2 < 6) ──────────────────────────────────────────
    {
      narration: `Look at <b>2</b> and <b>6</b> on the line. Because <b>2 is to the left of 6</b>, we say <b>2 is less than 6</b>. We write this as <b>2 < 6</b>. The sharp end of < points to the smaller number.`,
      speech: `Look at 2 and 6 on the line. Because 2 is to the left of 6, we say 2 is less than 6. We write this as 2 is less than 6. The sharp end of the symbol points to the smaller number.`,
      board: [
        nl({
          marks: [
            dot(2, PURPLE, 0.1, 'smaller', true),
            dot(6, RED,    0.5, 'larger',  true),
          ],
          connector: { from: 2, to: 6, label: '2 is to the LEFT of 6', color: PURPLE, delay: 1.0 },
        }),
        { type: 'math', content: `$$2 < 6$$`, emphasis: true },
      ],
    },
    // ── Step 2: greater than (6 > 2) ───────────────────────────────────────
    {
      narration: `We can also turn this around: because <b>6 is to the right of 2</b>, we say <b>6 is greater than 2</b>. We write this as <b>6 > 2</b>. The open end of > faces the larger number.`,
      speech: `We can also turn this around. Because 6 is to the right of 2, we say 6 is greater than 2. We write this as 6 is greater than 2. The open end of the symbol faces the larger number.`,
      board: [
        nl({
          marks: [
            dot(2, PURPLE, 0.1, 'smaller', true),
            dot(6, RED,    0.5, 'larger',  true),
          ],
          connector: { from: 6, to: 2, label: '6 is to the RIGHT of 2', color: RED, delay: 1.0 },
        }),
        { type: 'math', content: `$$6 > 2$$`, emphasis: true },
      ],
    },
    // ── Step 3: zero is less than every whole number ────────────────────────
    {
      narration: `Key rule: <b>zero is less than every other whole number</b>. Any number you pick is to the right of 0 on the number line.`,
      speech: `Key rule: zero is less than every other whole number. Any number you pick sits to the right of zero on the number line.`,
      board: [
        nl({
          marks: [dot(0, GREEN, 0.1, '0', true)],
          sweepRight: { from: 0, label: '0 < 1, 2, 3, 4 …', color: GREEN, delay: 0.6 },
        }),
        { type: 'math', content: `$$0 < 1,\\quad 0 < 2,\\quad 0 < 3,\\quad \\ldots$$` },
      ],
    },
    // ── Step 4: Example 1a — whole numbers less than 5 ─────────────────────
    {
      narration: `<b>Example 1a</b> — List all whole numbers <b>less than 5</b>. These are the whole numbers that sit to the left of 5: <b>0, 1, 2, 3, 4</b>.`,
      speech: `Example 1a. List all whole numbers less than 5. These are the whole numbers that sit to the left of 5 on the number line: 0, 1, 2, 3, 4.`,
      board: [
        nl({
          marks: [0,1,2,3,4].map((n) => dot(n, PURPLE, n * 0.15, String(n))),
          boundaries: [{ n: 5, color: RED, label: '← stop here (5 not included)', delay: 0.9 }],
        }),
        { type: 'math', content: `$$\\{0,\\,1,\\,2,\\,3,\\,4\\}$$`, emphasis: true },
      ],
    },
    // ── Step 5: Example 1b — between 1 and 10 ──────────────────────────────
    {
      narration: `<b>Example 1b</b> — List all whole numbers <b>less than 10 and greater than 1</b>. We need numbers strictly between 1 and 10: <b>2, 3, 4, 5, 6, 7, 8, 9</b>.`,
      speech: `Example 1b. List all whole numbers less than 10 and greater than 1. We need numbers strictly between 1 and 10: 2, 3, 4, 5, 6, 7, 8, 9.`,
      board: [
        {
          type: 'numberLine', min: 0, max: 11,
          marks: [2,3,4,5,6,7,8,9].map((n) => dot(n, PURPLE, (n - 2) * 0.12, String(n))),
          boundaries: [
            { n: 1,  color: RED, label: 'not included',  delay: 1.2 },
            { n: 10, color: RED, label: 'not included', delay: 1.4 },
          ],
        },
        { type: 'math', content: `$$\\{2,\\,3,\\,4,\\,5,\\,6,\\,7,\\,8,\\,9\\}$$`, emphasis: true },
      ],
    },
    // ── Step 6: Example 2a — mark on number line ───────────────────────────
    {
      narration: `<b>Example 2a</b> — Mark all whole numbers <b>less than 5</b> on a number line. The dots land on 0, 1, 2, 3, 4. The dashed line at 5 shows the boundary.`,
      speech: `Example 2a. Mark all whole numbers less than 5 on a number line. The dots land on 0, 1, 2, 3, 4. The dashed line at 5 shows the boundary.`,
      board: [
        nl({
          marks: [0,1,2,3,4].map((n) => dot(n, PURPLE, n * 0.15, String(n))),
          boundaries: [{ n: 5, color: RED, label: '5 not included', delay: 0.9 }],
          label: 'Whole numbers less than 5',
        }),
      ],
    },
    // ── Step 7: Example 2b — 45 < n < 52 ───────────────────────────────────
    {
      narration: `<b>Example 2b</b> — Mark all whole numbers <b>greater than 45 and less than 52</b>. The dots land on 46, 47, 48, 49, 50, 51. Both 45 and 52 are excluded.`,
      speech: `Example 2b. Mark all whole numbers greater than 45 and less than 52. The dots land on 46, 47, 48, 49, 50, 51. Both 45 and 52 are excluded because the conditions are strict inequalities.`,
      board: [
        nl44({
          marks: [46,47,48,49,50,51].map((n, i) => dot(n, PURPLE, i * 0.12, String(n))),
          boundaries: [
            { n: 45, color: RED, label: '45 not included', delay: 0.9 },
            { n: 52, color: RED, label: '52 not included', delay: 1.1 },
          ],
          label: 'Whole numbers greater than 45 and less than 52',
        }),
      ],
    },
  ];

  if (audioBase) steps.forEach((s, i) => { s.audioUrl = `${audioBase}/step-${i}.mp3`; });
  return { topicId: 'y7-1a', emoji: '📏', title: 'The number line', steps, glossary: { ...BASE_GLOSSARY, ...NL_GLOSSARY } };
};

// ── Lessons: Clock Reading (Basic Calculation · clock-stage-1…5) ───────────
const CLOCK_GLOSSARY = {
  'hour hand': 'The SHORT, thick hand. It points to the hour.',
  'minute hand': 'The LONG hand. It points to the minutes.',
  "o'clock": 'A time exactly on the hour, when the minute hand points straight up to 12.',
  'half past': '30 minutes after the hour — the minute hand points straight down to 6.',
  'quarter past': '15 minutes after the hour — the minute hand points to 3.',
  'quarter to': '15 minutes before the next hour — the minute hand points to 9.',
  'digital time': 'Time written with numbers, like 3:15 — hours, then two digits for minutes.',
  'am': 'The 12 hours from midnight to midday (morning).',
  'pm': 'The 12 hours from midday to midnight (afternoon and evening).',
  '24-hour time': 'A way of writing time that counts all 24 hours of the day, so 5:45 pm becomes 17:45.',
  'elapsed time': 'How much time has passed between a start time and an end time.',
};

// Lesson 1 — clock structure, o'clock & half past (Clock Stage 1)
export const buildClockBasicsLesson = ({ audioBase = null } = {}) => {
  const steps = [
    {
      narration: `A clock face has the numbers <b>1 to 12</b> and two hands. The <b>hour hand</b> is short and thick. The <b>minute hand</b> is long.`,
      speech: `A clock face has the numbers one to twelve, and two hands. The hour hand is short and thick. The minute hand is long.`,
      // highlight `begin` times match the narration mp3 (7.2 s total):
      // "hour hand" ≈ 3.4 s, "minute hand" ≈ 5.6 s.
      board: [{ type: 'clock', times: [{ hour: 3, minute: 0 }], label: 'Short hand = hours · Long hand = minutes', highlights: [
        { hand: 'hour', begin: 3.4, label: 'hour hand' },
        { hand: 'minute', begin: 5.6, label: 'minute hand' },
      ] }],
    },
    {
      narration: `When the <b>minute hand</b> points straight up to <b>12</b>, it is an <b>o'clock</b> time. The hour hand tells you which hour: this clock shows <b>3 o'clock</b>.`,
      speech: `When the minute hand points straight up to twelve, it is an o'clock time. The hour hand tells you which hour. This clock shows three o'clock.`,
      board: [{ type: 'clock', times: [{ hour: 3, minute: 0, label: "3 o'clock = 3:00" }], highlights: [
        { hand: 'minute', begin: 0.9, label: 'minute hand' },
        { hand: 'hour', begin: 4.6, label: 'hour hand' },
      ] }],
    },
    {
      narration: `The hour hand moves around the clock once every 12 hours. Watch how each o'clock time looks — only the <b>short hand</b> moves to a new number.`,
      speech: `The hour hand moves around the clock once every twelve hours. Watch how each o'clock time looks. Only the short hand moves to a new number.`,
      // The 2nd and 3rd clocks sweep on from the previous hour ("the hour hand
      // moves…"), then all hour hands pulse at "only the short hand moves".
      board: [{ type: 'clock', size: 130, times: [
        { hour: 1, minute: 0, label: "1 o'clock", highlights: [{ hand: 'hour', begin: 6.2 }] },
        { hour: 5, minute: 0, label: "5 o'clock", sweep: { fromHour: 1, fromMinute: 0, begin: 1.2, dur: 1.5 }, highlights: [{ hand: 'hour', begin: 6.2 }] },
        { hour: 9, minute: 0, label: "9 o'clock", sweep: { fromHour: 5, fromMinute: 0, begin: 3.0, dur: 1.5 }, highlights: [{ hand: 'hour', begin: 6.2 }] },
      ] }],
    },
    {
      narration: `When the <b>minute hand</b> points straight down to <b>6</b>, it has travelled HALF way around the clock — 30 minutes. We call this <b>half past</b>.`,
      speech: `When the minute hand points straight down to six, it has travelled half way around the clock. That is thirty minutes. We call this half past.`,
      // Minute hand travels 12 → 6 while the narration says "travelled half
      // way around the clock" (hour hand creeps along with it).
      board: [{ type: 'clock', times: [{ hour: 4, minute: 30, label: 'half past 4 = 4:30',
        highlights: [{ hand: 'minute', begin: 0.9, label: 'minute hand' }],
        sweep: { fromHour: 4, fromMinute: 0, begin: 3.4, dur: 2.2 },
      }] }],
    },
    {
      narration: `Look carefully: at half past, the <b>hour hand</b> sits HALFWAY between two numbers. Here it is between 4 and 5 — so it is still half past <b>4</b>, not 5.`,
      speech: `Look carefully. At half past, the hour hand sits halfway between two numbers. Here it is between four and five, so it is still half past four, not five.`,
      board: [{ type: 'clock', times: [
        { hour: 4, minute: 30, label: 'half past 4 ✓', highlights: [{ hand: 'hour', begin: 2.2, label: 'hour hand' }] },
        { hour: 5, minute: 0, label: "5 o'clock" },
      ], size: 150 }],
    },
    {
      narration: `In <b>digital time</b> we write the hour, two dots, then the minutes: <b>3:00</b> means 3 o'clock and <b>4:30</b> means half past 4. Now you are ready to practise!`,
      speech: `In digital time we write the hour, two dots, then the minutes. Three colon zero zero means three o'clock, and four colon thirty means half past four. Now you are ready to practise!`,
      board: [
        { type: 'clock', size: 130, times: [
          { hour: 3, minute: 0, label: '3:00' },
          { hour: 4, minute: 30, label: '4:30' },
        ] },
        { type: 'math', content: `$$3\\text{:}00 = 3 \\text{ o'clock} \\qquad 4\\text{:}30 = \\text{half past } 4$$`, emphasis: true },
      ],
    },
  ];
  if (audioBase) steps.forEach((s, i) => { s.audioUrl = `${audioBase}/step-${i}.mp3`; });
  return { topicId: null, emoji: '🕒', title: "Reading a clock: o'clock & half past", steps, glossary: { ...BASE_GLOSSARY, ...CLOCK_GLOSSARY } };
};

// Lesson 2 — quarters & 5-minute intervals (Clock Stages 2–3)
export const buildClockQuartersLesson = ({ audioBase = null } = {}) => {
  const steps = [
    {
      narration: `A full turn of the minute hand is <b>60 minutes</b>. We can cut it into four equal <b>quarters</b> of 15 minutes each.`,
      speech: `A full turn of the minute hand is sixty minutes. We can cut it into four equal quarters of fifteen minutes each.`,
      // 1st clock's minute hand does a full lap during "a full turn … is 60
      // minutes"; the quarter clocks then pulse in sequence.
      board: [{ type: 'clock', size: 130, times: [
        { hour: 12, minute: 0, label: "o'clock", sweep: { fromHour: 12, fromMinute: 0, begin: 0.6, dur: 2.2, extraMinuteTurns: 1 } },
        { hour: 12, minute: 15, label: 'quarter past', highlights: [{ hand: 'minute', begin: 4.5 }] },
        { hour: 12, minute: 30, label: 'half past', highlights: [{ hand: 'minute', begin: 5.1 }] },
        { hour: 12, minute: 45, label: 'quarter to', highlights: [{ hand: 'minute', begin: 5.7 }] },
      ] }],
    },
    {
      narration: `When the minute hand points to <b>3</b>, a quarter of an hour has passed: <b>quarter past</b>. This clock shows quarter past 7, written <b>7:15</b>.`,
      speech: `When the minute hand points to three, a quarter of an hour has passed. We say quarter past. This clock shows quarter past seven, written seven fifteen.`,
      board: [{ type: 'clock', times: [{ hour: 7, minute: 15, label: 'quarter past 7 = 7:15',
        highlights: [{ hand: 'minute', begin: 0.9, label: 'minute hand' }],
        sweep: { fromHour: 7, fromMinute: 0, begin: 2.7, dur: 1.6 },
      }] }],
    },
    {
      narration: `When the minute hand points to <b>9</b>, there is one quarter LEFT until the next hour: <b>quarter to</b>. This clock shows quarter to 3 — the digital time is <b>2:45</b>, because the hour is still 2.`,
      speech: `When the minute hand points to nine, there is one quarter left until the next hour. We say quarter to. This clock shows quarter to three. The digital time is two forty five, because the hour is still two.`,
      board: [{ type: 'clock', times: [{ hour: 2, minute: 45, label: 'quarter to 3 = 2:45', highlights: [
        { hand: 'minute', begin: 0.9, label: 'minute hand' },
        { hand: 'hour', begin: 10.0, label: 'hour hand' },
      ] }] }],
    },
    {
      narration: `Each number on the clock is <b>5 minutes</b> for the minute hand. To read any time, count in 5s: 5, 10, 15, 20 … around the clock.`,
      speech: `Each number on the clock is five minutes for the minute hand. To read any time, count in fives. Five, ten, fifteen, twenty, around the clock.`,
      // Numbers 1-4 light up one by one as the narration counts "5, 10, 15, 20".
      board: [
        { type: 'clock', times: [{ hour: 6, minute: 20, label: '4 numbers × 5 = 20 minutes', countNumbers: { upTo: 4, begin: 6.2, step: 0.55 } }] },
        { type: 'math', content: `$$1 \\to 5,\\; 2 \\to 10,\\; 3 \\to 15,\\; 4 \\to 20,\\; \\dots,\\; 12 \\to 60$$` },
      ],
    },
    {
      narration: `Before half past we say "<b>minutes past</b>" the hour. This clock shows <b>20 minutes past 6</b> — digital <b>6:20</b>.`,
      speech: `Before half past, we say minutes past the hour. This clock shows twenty minutes past six. The digital time is six twenty.`,
      board: [{ type: 'clock', times: [{ hour: 6, minute: 20, label: '20 past 6 = 6:20', highlights: [{ hand: 'minute', begin: 4.2, label: 'minute hand' }] }] }],
    },
    {
      narration: `After half past we count DOWN to the next hour and say "<b>minutes to</b>". The minute hand on 10 means 50 minutes past — or <b>10 minutes to</b> the next hour: <b>8:50</b> is 10 to 9.`,
      speech: `After half past, we count down to the next hour and say minutes to. The minute hand on ten means fifty minutes past, or ten minutes to the next hour. Eight fifty is ten to nine.`,
      board: [
        { type: 'clock', times: [{ hour: 8, minute: 50, label: '10 to 9 = 8:50', highlights: [{ hand: 'minute', begin: 4.5, label: 'minute hand' }] }] },
        { type: 'math', content: `$$60 - 50 = 10 \\text{ minutes to the next hour}$$`, emphasis: true },
      ],
    },
  ];
  if (audioBase) steps.forEach((s, i) => { s.audioUrl = `${audioBase}/step-${i}.mp3`; });
  return { topicId: null, emoji: '🕒', title: 'Quarters & counting in 5 minutes', steps, glossary: { ...BASE_GLOSSARY, ...CLOCK_GLOSSARY } };
};

// Lesson 3 — minute-precise, am/pm & 24-hour (Clock Stages 4–5)
export const buildClockPreciseLesson = ({ audioBase = null } = {}) => {
  const steps = [
    {
      narration: `The small marks between the numbers are <b>1 minute</b> each. Count to the nearest number in 5s, then add the extra marks: this clock shows <b>3:23</b>.`,
      speech: `The small marks between the numbers are one minute each. Count to the nearest number in fives, then add the extra marks. This clock shows three twenty three.`,
      board: [
        { type: 'clock', times: [{ hour: 3, minute: 23, label: '20 + 3 = 23 minutes → 3:23',
          countNumbers: { upTo: 4, begin: 4.0, step: 0.35 },
          highlights: [{ hand: 'minute', begin: 7.6 }],
        }] },
      ],
    },
    {
      narration: `Late in the hour the <b>hour hand</b> looks very close to the NEXT number — don't be tricked! Here it is nearly on 8, but the time is <b>7:55</b>: the hour is still 7.`,
      speech: `Late in the hour, the hour hand looks very close to the next number. Don't be tricked! Here it is nearly on eight, but the time is seven fifty five. The hour is still seven.`,
      board: [{ type: 'clock', times: [{ hour: 7, minute: 55, label: '7:55 — still 7, not 8!', highlights: [{ hand: 'hour', begin: 1.7, label: 'hour hand' }] }] }],
    },
    {
      narration: `A clock face only shows 12 hours, but a day has 24. We use <b>am</b> for midnight→midday and <b>pm</b> for midday→midnight. 7:30 am is breakfast time; 7:30 pm is dinner time.`,
      speech: `A clock face only shows twelve hours, but a day has twenty four. We use a m for midnight to midday, and p m for midday to midnight. Seven thirty a m is breakfast time. Seven thirty p m is dinner time.`,
      board: [{ type: 'clock', size: 140, times: [
        { hour: 7, minute: 30, label: '7:30 am 🌅' },
        { hour: 7, minute: 30, label: '7:30 pm 🌙' },
      ] }],
    },
    {
      narration: `<b>24-hour time</b> keeps counting after midday: 13:00, 14:00 … up to 23:59. To convert a pm time, <b>add 12</b> to the hours: 5:45 pm → <b>17:45</b>.`,
      speech: `Twenty four hour time keeps counting after midday. Thirteen hundred, fourteen hundred, up to twenty three fifty nine. To convert a p m time, add twelve to the hours. Five forty five p m becomes seventeen forty five.`,
      board: [{ type: 'math', content: `$$5\\text{:}45\\text{ pm} \\;\\xrightarrow{+12\\text{ hours}}\\; 17\\text{:}45$$`, emphasis: true }],
    },
    {
      narration: `To go back the other way, <b>subtract 12</b>: a train leaving at 19:20 leaves at <b>7:20 pm</b>. Morning times (before 13:00) stay the same.`,
      speech: `To go back the other way, subtract twelve. A train leaving at nineteen twenty leaves at seven twenty p m. Morning times, before thirteen hundred, stay the same.`,
      board: [{ type: 'math', content: `$$19\\text{:}20 \\;\\xrightarrow{-12\\text{ hours}}\\; 7\\text{:}20\\text{ pm}$$`, emphasis: true }],
    },
    {
      narration: `<b>Elapsed time</b> is how long something takes. From 2:40 to 4:10: count hours first (2:40 → 3:40 is 1 hour), then minutes (3:40 → 4:10 is 30 minutes). Total: <b>1 hour 30 minutes</b>.`,
      speech: `Elapsed time is how long something takes. From two forty to four ten, count hours first. Two forty to three forty is one hour. Then minutes. Three forty to four ten is thirty minutes. The total is one hour thirty minutes.`,
      board: [
        // The finish clock plays the journey: hands sweep 2:40 → 4:10
        // (1½ minute-hand turns) while the narration counts the elapsed time.
        { type: 'clock', size: 130, times: [
          { hour: 2, minute: 40, label: 'start 2:40' },
          { hour: 4, minute: 10, label: 'finish 4:10', sweep: { fromHour: 2, fromMinute: 40, begin: 5.8, dur: 4.5, extraMinuteTurns: 1 } },
        ] },
        { type: 'math', content: `$$2\\text{:}40 \\to 3\\text{:}40 \\to 4\\text{:}10 = 1\\text{ h } 30\\text{ min}$$`, emphasis: true },
      ],
    },
  ];
  if (audioBase) steps.forEach((s, i) => { s.audioUrl = `${audioBase}/step-${i}.mp3`; });
  return { topicId: null, emoji: '🕒', title: 'Exact minutes, am/pm & 24-hour time', steps, glossary: { ...BASE_GLOSSARY, ...CLOCK_GLOSSARY } };
};

// ── Registered lessons (topicId → spec) ────────────────────────────────────

// Register one lesson spec under every topic of a clock stage so the
// "Learn step-by-step" button appears throughout the stage.
const clockBasics = buildClockBasicsLesson({ audioBase: '/lessons/audio/clock-basics' });
const clockQuarters = buildClockQuartersLesson({ audioBase: '/lessons/audio/clock-quarters' });
const clockPrecise = buildClockPreciseLesson({ audioBase: '/lessons/audio/clock-precise' });
const CLOCK_LESSONS = {};
['clock-1-s1', 'clock-1-s2', 'clock-1-s3', 'clock-1-s4', 'clock-1-s5', 'clock-1-s6']
  .forEach((id) => { CLOCK_LESSONS[id] = { ...clockBasics, topicId: id }; });
['clock-2-s1', 'clock-2-s2', 'clock-2-s3', 'clock-2-s4', 'clock-2-s5', 'clock-2-s6',
 'clock-3-s1', 'clock-3-s2', 'clock-3-s3', 'clock-3-s4', 'clock-3-s5', 'clock-3-s6']
  .forEach((id) => { CLOCK_LESSONS[id] = { ...clockQuarters, topicId: id }; });
['clock-4-s1', 'clock-4-s2', 'clock-4-s3', 'clock-4-s4', 'clock-4-s5', 'clock-4-s6',
 'clock-5-s1', 'clock-5-s2', 'clock-5-s3', 'clock-5-s4', 'clock-5-s5', 'clock-5-s6']
  .forEach((id) => { CLOCK_LESSONS[id] = { ...clockPrecise, topicId: id }; });

export const LESSONS = {
  // Clock Reading (Basic Calculation clock stages 1–5).
  ...CLOCK_LESSONS,

  // Year 7 · 1G · Place value (textbook example uses 3721).
  // Voice is pre-generated (Kokoro) into /public/lessons/audio/y7-1g/.
  'y7-1g': { ...buildPlaceValueLesson(3721, 'Place value', { audioBase: '/lessons/audio/y7-1g' }), topicId: 'y7-1g' },

  // Year 11 Advanced · 3H · Two graphs that have asymptotes.
  'y11a-3H': { ...buildAsymptotesLesson({ audioBase: '/lessons/audio/y11a-3H' }), topicId: 'y11a-3H' },

  // Year 11 Advanced · 3G · Powers, cubics, and circles.
  'y11a-3G': { ...buildPowersCubicsCirclesLesson({ audioBase: '/lessons/audio/y11a-3G' }), topicId: 'y11a-3G' },

  // Year 11 Advanced · 11A · Radian measure of angle size.
  'y11a-11A': { ...buildRadianLesson({ audioBase: '/lessons/audio/y11a-11A' }), topicId: 'y11a-11A' },

  // Year 11 Advanced · 11B · Solving trigonometric equations.
  'y11a-11B': { ...buildTrigEquationsLesson({ audioBase: '/lessons/audio/y11a-11B' }), topicId: 'y11a-11B' },

  // Year 7 · 20A · Polyhedra.
  'y7-20a': { ...buildPolyhedraLesson({ audioBase: '/lessons/audio/y7-20a' }), topicId: 'y7-20a' },

  // Year 7 · 1A · The number line.
  'y7-1a': { ...buildNumberLineLesson({ audioBase: '/lessons/audio/y7-1a' }), topicId: 'y7-1a' },
};

export const getLesson = (topicId) => (topicId && LESSONS[topicId]) || null;
export const hasLesson = (topicId) => Boolean(topicId && LESSONS[topicId]);
